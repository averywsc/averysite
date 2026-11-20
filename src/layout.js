/**
 * layout.js — composes the world: photo order, tunnel positions,
 * key moments (camera poses) and the contact-sheet mosaic (start & finale).
 */
import { photoDistance } from './colors.js'

export function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const DEG = Math.PI / 180

/* Curated order first; any additional photo is slotted where it matches its neighbours best. */
export function orderPhotos(photos, cfg) {
  const byName = new Map(photos.map((p) => [p.file, p]))
  let seq = cfg.photos.order.map((n) => byName.get(n)).filter(Boolean)
  const rest = photos.filter((p) => !seq.includes(p))
  if (seq.length < 2) {
    const pool = [...photos].sort((a, b) => b.luminance - a.luminance)
    seq = [pool.shift()]
    while (pool.length) {
      const last = seq[seq.length - 1]
      let bi = 0, bd = Infinity
      pool.forEach((p, i) => {
        const d = photoDistance(last, p) + Math.max(0, p.luminance - last.luminance) * 1.2
        if (d < bd) { bd = d; bi = i }
      })
      seq.push(pool.splice(bi, 1)[0])
    }
    return seq
  }
  for (const p of rest) {
    let best = seq.length, bc = Infinity
    for (let i = 0; i <= seq.length; i++) {
      const a = seq[i - 1], b = seq[i]
      const c = (a ? photoDistance(a, p) : 0) + (b ? photoDistance(p, b) : 0) - (a && b ? photoDistance(a, b) : 0)
      if (c < bc) { bc = c; best = i }
    }
    seq.splice(best, 0, p)
  }
  return seq
}

/* Linear partition: split sequence of widths into k rows with balanced sums. */
function partition(ws, k) {
  const n = ws.length
  const pre = [0]; ws.forEach((w) => pre.push(pre[pre.length - 1] + w))
  const avg = pre[n] / k
  const cost = (i, j) => (pre[j] - pre[i] - avg) ** 2
  const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(Infinity))
  const cut = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0))
  dp[0][0] = 0
  for (let r = 1; r <= k; r++)
    for (let j = r; j <= n; j++)
      for (let i = r - 1; i < j; i++) {
        const v = dp[r - 1][i] + cost(i, j)
        if (v < dp[r][j]) { dp[r][j] = v; cut[r][j] = i }
      }
  const rows = []
  let j = n
  for (let r = k; r >= 1; r--) { const i = cut[r][j]; rows.unshift([i, j]); j = i }
  return rows
}

function buildMosaic(planes, frameAspect, rand) {
  const ars = planes.map((p) => p.photo.aspect)
  const n = planes.length
  const gap = n > 80 ? 0.052 : 0.075
  const idealR = Math.max(1, Math.round(Math.sqrt(n / Math.max(0.4, frameAspect))))
  const rMin = Math.max(1, idealR - 5)
  const rMax = Math.min(n, idealR + 6)
  let best = null
  for (let R = rMin; R <= rMax; R++) {
    const rows = partition(ars, R)
    const sums = rows.map(([i, j]) => ars.slice(i, j).reduce((a, b) => a + b, 0) + gap * (j - i - 1))
    const W = Math.max(...sums)
    const rh = rows.map(([i, j], r) => (W - gap * (j - i - 1)) / (sums[r] - gap * (j - i - 1)))
    const H = rh.reduce((a, b) => a + b, 0) + gap * (R - 1)
    const spreadH = Math.max(...rh) / Math.min(...rh)
    const score = Math.abs(Math.log(W / H / frameAspect)) + (spreadH - 1) * 0.55
    if (!best || score < best.score) best = { score, rows, rh, W, H }
  }
  const { rows, rh, W, H } = best
  const slots = []
  let y = H / 2
  rows.forEach(([i, j], r) => {
    const h = rh[r]
    let x = -W / 2
    for (let k = i; k < j; k++) {
      const w = ars[k] * h
      slots[k] = { x: x + w / 2, y: y - h / 2, w, h, rotZ: (rand() - 0.5) * 0.5 * DEG, dz: (rand() - 0.5) * 0.16 }
      x += w + gap
    }
    y -= h + gap
  })
  return { slots, W, H }
}

export function buildLayout(seq, cfg, view) {
  const L = cfg.layout, C = cfg.camera
  const rand = mulberry32(L.seed)
  const aspect = view.aspect
  const tanH = Math.tan((C.fov * DEG) / 2)
  const portrait = aspect < 0.9
  const N = seq.length

  // key moments: combine curated features with evenly spaced stops when N is large
  let fidx = cfg.photos.features.map((n) => seq.findIndex((p) => p.file === n)).filter((i) => i >= 0)
  const targetK = N > 60 ? Math.min(14, Math.max(8, Math.round(N / 22))) : Math.max(3, Math.min(8, Math.round(N / 5)))
  if (fidx.length < targetK) {
    const minGap = Math.max(4, Math.floor(N / (targetK * 1.6)))
    for (let k = 0; k < targetK; k++) {
      const cand = Math.min(N - 1, Math.round(((k + 0.5) / targetK) * (N - 1)))
      if (fidx.every((f) => Math.abs(f - cand) >= minGap)) fidx.push(cand)
    }
  }
  fidx = [...new Set(fidx)].sort((a, b) => a - b)
  const fset = new Set(fidx)
  let zoomIdx = seq.findIndex((p) => p.file === cfg.photos.zoomThrough)
  if (!fset.has(zoomIdx) || zoomIdx === fidx[fidx.length - 1]) zoomIdx = fidx[Math.min(fidx.length - 2, Math.round(fidx.length * 0.55))]

  const fitD = (w, h, fill) => Math.max(h / (2 * tanH * fill), w / (2 * tanH * aspect * fill))
  const coverD = (w, h) => Math.min(h / (2 * tanH), w / (2 * tanH * aspect)) * 0.93

  // Tighten depth spacing slightly when N is large so 8-14 photos remain visible together
  const zStep = N > 100 ? L.depthSpacing * 0.85 : L.depthSpacing
  const planes = []
  let z = 0, side = rand() > 0.5 ? 1 : -1
  seq.forEach((photo, i) => {
    const ar = photo.aspect
    const w = L.size * Math.sqrt(ar), h = L.size / Math.sqrt(ar)
    const feature = fset.has(i)
    const afterFeature = i > 0 && fset.has(i - 1)
    if (i > 0) {
      z -= zStep * (feature ? 1.2 : afterFeature ? 1.38 : 1) * (1 + (rand() - 0.5) * L.jitter * 0.8)
      if (i - 1 === zoomIdx) z -= L.zoomGap
    }
    side = -side
    let x, y
    if (feature) {
      x = side * L.spreadX * 0.1
      y = (rand() - 0.5) * L.spreadY * 0.22
    } else if (afterFeature && !portrait) {
      const prev = planes[i - 1]
      const dHero = fitD(prev.w, prev.h, C.fill)
      const dz = prev.z - z
      const dNext = dHero + dz
      if (prev.photo.aspect >= 1.1 && w <= prev.w * 1.15) {
        x = prev.x + side * Math.min(L.spreadX * 0.28, 0.85)
        y = prev.y + (rand() - 0.5) * L.spreadY * 0.35
      } else {
        const heroAng = (prev.w * 0.5) / dHero
        const minClear = (heroAng + 0.045) * dNext + w * 0.5
        const maxOnScreen = dNext * tanH * aspect * 0.86 - w * 0.25
        if (minClear < maxOnScreen) {
          x = prev.x + side * minClear
          y = (rand() - 0.5) * 1.15 * L.spreadY
        } else {
          x = prev.x + side * 0.45
          y = prev.y + (rand() - 0.5) * 0.35
        }
      }
    } else {
      // Golden-angle corridor scatter so photos frame the tunnel in 360° depth (multiple visible at once)
      const angle = i * 2.39996 + (rand() - 0.5) * 0.45
      const radial = 0.65 + 0.55 * rand()
      x = Math.cos(angle) * (L.spreadX * radial + w * (portrait ? 0.04 : 0.14))
      y = Math.sin(angle) * (L.spreadY * radial + h * 0.08)
      side = x >= 0 ? 1 : -1
    }
    planes.push({
      photo, i, w, h, x, y, z, side, feature,
      rotZ: (rand() - 0.5) * 2 * L.rotation * DEG * (feature ? 0.25 : 1),
      rotY: feature ? 0 : -side * L.yaw * DEG * (0.6 + 0.4 * rand()),
      layer: rand(), seed: rand() * 100,
      zoom: i === zoomIdx,
      fitD: fitD(w, h, C.fill),
      fadeNear: i === zoomIdx ? [0.08, coverD(w, h) * 0.7] : portrait ? [1.5, 4.2] : [1.35, 3.8],
    })
  })

  const features = fidx.map((i) => {
    const p = planes[i]
    const d = p.fitD
    return { i, plane: p, d, cover: coverD(p.w, p.h), cam: { camX: p.x, camY: p.y, camZ: p.z + d, roll: p.rotZ } }
  })

  // Shared contact-sheet geometry (used at both the opening wall and the finale)
  const last = planes[N - 1]
  const frameAspect = portrait ? aspect * 1.04 : aspect * 0.96
  const m = buildMosaic(planes, frameAspect, rand)
  const worldH = portrait ? 22 : 13.5
  const k = worldH / m.H
  const mW = m.W * k, mH = m.H * k
  const mD = Math.max(mH / (2 * tanH * (portrait ? 0.78 : 0.82)), mW / (2 * tanH * aspect * (portrait ? 0.92 : 0.86)))

  const openZ = planes[0].z - 4
  const endZ = last.z - 10
  const lastFeature = features[features.length - 1]
  const finaleStartZ = lastFeature.cam.camZ
  const maxR = Math.hypot(mW, mH) / 2

  planes.forEach((p, i) => {
    const s = m.slots[i]
    const slotW = s.w * k
    const slotH = s.h * k
    p.slot = { x: s.x * k, y: s.y * k, dz: s.dz, w: slotW, h: slotH, rotZ: s.rotZ, scale: slotW / p.w }
    const ahead = p.z < finaleStartZ - 0.5
    p.deep = !ahead
    p.start = ahead
      ? { x: p.x, y: p.y, z: p.z }
      : { x: p.slot.x * 1.45 + (rand() - 0.5) * 7, y: p.slot.y * 1.35 + (rand() - 0.5) * 4, z: endZ - 20 - rand() * 18 }
    p.delay = ahead ? 0 : 0.08 + 0.58 * (Math.hypot(p.slot.x, p.slot.y) / maxR) + rand() * 0.16
    p.openDelay = Math.min(0.65, 0.08 + 0.45 * (Math.hypot(p.slot.x, p.slot.y) / maxR) + (i / N) * 0.15)
  })

  return {
    planes, features, zoomIdx, N, tanH, aspect, portrait,
    start: { camX: 0, camY: 0, camZ: openZ + mD, roll: 0 },
    mosaicOpen: { z: openZ, W: mW, H: mH, camZ: openZ + mD, dist: mD },
    mosaic: { z: endZ, W: mW, H: mH, camZ: endZ + mD, dist: mD },
  }
}
