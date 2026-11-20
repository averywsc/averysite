/**
 * scripts/photos.js
 * ------------------------------------------------------------------
 * Scans public/photos, and for every image writes into public/photos.json:
 *   - filename, real width and height (EXIF orientation respected)
 *   - average colour, a small dominant palette and luminance
 *   - atlas page + UV rect (256x256 cells packed into 2048x2048 WebP atlases
 *     so hundreds of photos load instantly and render together at 60 fps)
 *   - paths to resized, GPU-friendly WebP textures in public/tex
 *
 * Runs automatically before `npm run dev` and `npm run build`.
 * You only ever need to drop photos into public/photos.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const PHOTOS = path.join(root, 'photos-src')
const TEX = path.join(root, 'tex')
const ATLAS = path.join(root, 'atlas')
const OUT = path.join(root, 'photos.json')
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tif', '.tiff'])
const SIZES = [1024, 2048]
const ATLAS_SIZE = 2048
const CELL = 256
const GRID = ATLAS_SIZE / CELL // 8x8 = 64 cells per atlas

const toHex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')

function rgbToHsl([r, g, b]) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
  else if (max === g) h = (b - r) / d + 2
  else h = (r - g) / d + 4
  return [h / 6, s, l]
}

function palette(data, k = 6) {
  const px = []
  for (let i = 0; i < data.length; i += 3) px.push([data[i], data[i + 1], data[i + 2]])
  const sorted = [...px].sort((a, b) => a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]))
  const centers = Array.from({ length: k }, (_, i) => [...sorted[Math.floor(((i + 0.5) / k) * sorted.length)]])
  const assign = new Array(px.length).fill(0)
  for (let it = 0; it < 10; it++) {
    for (let p = 0; p < px.length; p++) {
      let best = 0, bd = Infinity
      for (let c = 0; c < k; c++) {
        const d = (px[p][0] - centers[c][0]) ** 2 + (px[p][1] - centers[c][1]) ** 2 + (px[p][2] - centers[c][2]) ** 2
        if (d < bd) { bd = d; best = c }
      }
      assign[p] = best
    }
    const sum = centers.map(() => [0, 0, 0, 0])
    px.forEach((p, i) => { const s = sum[assign[i]]; s[0] += p[0]; s[1] += p[1]; s[2] += p[2]; s[3]++ })
    sum.forEach((s, c) => { if (s[3]) centers[c] = [s[0] / s[3], s[1] / s[3], s[2] / s[3]] })
  }
  const counts = centers.map((_, c) => assign.filter((a) => a === c).length / px.length)
  return centers
    .map((c, i) => ({ rgb: c, weight: counts[i] }))
    .filter((c) => c.weight > 0)
    .sort((a, b) => b.weight - a.weight)
}

async function exists(p) { try { return await fs.stat(p) } catch { return null } }

async function runPool(items, concurrency, fn) {
  let idx = 0
  const workers = Array.from({ length: concurrency }, async () => {
    while (idx < items.length) {
      const i = idx++
      await fn(items[i], i)
    }
  })
  await Promise.all(workers)
}

async function main() {
  await fs.mkdir(PHOTOS, { recursive: true })
  await fs.mkdir(TEX, { recursive: true })
  await fs.mkdir(ATLAS, { recursive: true })

  const files = (await fs.readdir(PHOTOS))
    .filter((f) => EXT.has(path.extname(f).toLowerCase()) && !f.startsWith('.'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  if (!files.length) {
    console.log('[photos] photos-src/ is empty; keeping existing photos.json, tex/, and atlas/')
    return
  }

  // Fast incremental check: if photos.json matches file list & mtimes and atlases exist, skip heavy rebuild!
  const prev = await exists(OUT).then(async (s) => (s ? JSON.parse(await fs.readFile(OUT, 'utf8')) : null)).catch(() => null)
  const prevByFile = new Map((prev?.photos || []).map((p) => [p.file, p]))

  const keep = new Set()
  const photos = new Array(files.length)
  const atlasCells = new Array(files.length)
  const prevNames = (prev?.photos || []).map((p) => p.file).join('\0')
  let dirtyAtlas = !prev || prev.count !== files.length || prevNames !== files.join('\0')

  await runPool(files, 8, async (file, i) => {
    const src = path.join(PHOTOS, file)
    const stat = await fs.stat(src)
    const cached = prevByFile.get(file)

    const base = path.parse(file).name.replace(/[^a-z0-9-_]/gi, '-')
    const tex = {}
    let texMissing = false
    for (const size of SIZES) {
      const name = `${base}.${size}.webp`
      const out = path.join(TEX, name)
      keep.add(name)
      const o = await exists(out)
      if (!o || o.mtimeMs < stat.mtimeMs) {
        texMissing = true
        await sharp(src).rotate().resize({ width: size, height: size, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 86, smartSubsample: true }).toFile(out)
      }
      tex[size] = `tex/${name}`
    }

    if (texMissing || !cached || cached.mtimeMs !== stat.mtimeMs) dirtyAtlas = true

    const page = Math.floor(i / (GRID * GRID))
    const slot = i % (GRID * GRID)
    const col = slot % GRID
    const row = Math.floor(slot / GRID)
    // With Three.js flipY=true, row 0 is at the top of the texture (v near 1.0)
    const atlas = {
      page,
      u0: +(col / GRID).toFixed(6),
      v0: +(1 - (row + 1) / GRID).toFixed(6),
      u1: +((col + 1) / GRID).toFixed(6),
      v1: +(1 - row / GRID).toFixed(6),
    }

    if (!texMissing && cached && cached.mtimeMs === stat.mtimeMs && cached.width && cached.dominant) {
      photos[i] = { ...cached, tex, atlas }
      return
    }

    const meta = await sharp(src).metadata()
    const rotated = (meta.orientation || 1) >= 5
    const width = rotated ? meta.height : meta.width
    const height = rotated ? meta.width : meta.height

    const { data } = await sharp(src).rotate().resize(32, 32, { fit: 'fill' }).removeAlpha().raw().toBuffer({ resolveWithObject: true })
    let r = 0, g = 0, b = 0
    for (let k = 0; k < data.length; k += 3) { r += data[k]; g += data[k + 1]; b += data[k + 2] }
    const n = data.length / 3
    const avg = [r / n, g / n, b / n]
    const pal = palette(data, 6)
    const score = (p) => { const [, s, l] = rgbToHsl(p.rgb); return Math.sqrt(p.weight) * (0.2 + s) * Math.pow(l, 1.4) }
    const dominant = [...pal].sort((p, q) => score(q) - score(p))[0].rgb
    const luminance = (0.2126 * avg[0] + 0.7152 * avg[1] + 0.0722 * avg[2]) / 255

    photos[i] = {
      file,
      src: `photos/${file}`,
      tex,
      atlas,
      width,
      height,
      aspect: +(width / height).toFixed(5),
      avg: toHex(avg),
      dominant: toHex(dominant),
      palette: pal.slice(0, 5).map((p) => toHex(p.rgb)),
      luminance: +luminance.toFixed(4),
      mtimeMs: stat.mtimeMs,
    }
  })

  // clean stale textures
  for (const f of await fs.readdir(TEX)) if (!keep.has(f)) await fs.rm(path.join(TEX, f))

  const pageCount = Math.max(1, Math.ceil(files.length / (GRID * GRID)))
  const atlases = Array.from({ length: pageCount }, (_, p) => `atlas/atlas-${p}.webp`)
  const atlasMissing = !(await Promise.all(atlases.map((a) => exists(path.join(root, a))))).every(Boolean)

  if (dirtyAtlas || atlasMissing) {
    console.log(`[photos] building ${pageCount} atlas page(s) for ${files.length} photos...`)
    await runPool(files, 8, async (file, i) => {
      atlasCells[i] = await sharp(path.join(root, photos[i].tex[1024]))
        .resize(CELL, CELL, { fit: 'fill' })
        .toBuffer()
    })
    for (let p = 0; p < pageCount; p++) {
      const start = p * GRID * GRID
      const end = Math.min(files.length, start + GRID * GRID)
      const composites = []
      for (let idx = start; idx < end; idx++) {
        const slot = idx - start
        composites.push({
          input: atlasCells[idx],
          left: (slot % GRID) * CELL,
          top: Math.floor(slot / GRID) * CELL,
        })
      }
      await sharp({
        create: { width: ATLAS_SIZE, height: ATLAS_SIZE, channels: 3, background: { r: 11, g: 12, b: 15 } },
      })
        .composite(composites)
        .webp({ quality: 84, smartSubsample: true })
        .toFile(path.join(ATLAS, `atlas-${p}.webp`))
    }
    for (const f of await fs.readdir(ATLAS)) {
      if (!atlases.includes(`atlas/${f}`)) await fs.rm(path.join(ATLAS, f))
    }
  }

  await fs.writeFile(OUT, JSON.stringify({ generated: new Date().toISOString(), count: photos.length, atlases, photos }, null, 2))
  console.log(`[photos] ${photos.length} photos + ${pageCount} atlases -> photos.json`)
}

main().catch((e) => { console.error('[photos] failed:', e); process.exit(1) })
