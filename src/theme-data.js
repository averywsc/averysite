/**
 * theme-data.js — cached data loaders for multi-window OS, real Windows Terminal,
 * and per-theme color-ordered photo archives.
 */

const cache = new Map()

function hexToHsl(hex) {
  const clean = (hex || '#808080').replace('#', '')
  const num = parseInt(clean.length === 3 ? clean.replace(/(.)/g, '$1$1') : clean, 16)
  const r = ((num >> 16) & 255) / 255
  const g = ((num >> 8) & 255) / 255
  const b = (num & 255) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  const d = max - min
  let h = 0
  let s = 0
  if (d > 0.0001) {
    s = d / (1 - Math.abs(2 * l - 1))
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60
    else if (max === g) h = ((b - r) / d + 2) * 60
    else h = ((r - g) / d + 4) * 60
  }
  return { h, s, l }
}

function colorBucket(h, s) {
  if (s < 0.14) return 'mono'
  if (h < 34 || h >= 330) return 'warm'
  if (h < 72) return 'gold'
  if (h < 168) return 'green'
  if (h < 258) return 'blue'
  return 'violet'
}

function resolveRel(base, rel) {
  if (!rel) return ''
  if (/^(https?:|mailto:|data:|\/)/i.test(rel)) return rel
  return `${base}/${rel.replace(/^\.\//, '')}`
}

async function fetchDoc(url) {
  const html = await fetch(url).then((r) => r.text())
  return new DOMParser().parseFromString(html, 'text/html')
}

export async function loadColorOrderedPhotos(base = '.') {
  const key = `photos:${base}`
  if (cache.has(key)) return cache.get(key)
  const data = await fetch(`${base}/photos.json`).then((r) => r.json())
  const enriched = (data.photos || []).map((p) => {
    const hex = p.dominant || p.avg || '#777777'
    const { h, s, l } = hexToHsl(hex)
    const bucket = colorBucket(h, s)
    const isMono = bucket === 'mono'
    const hueShift = (h + 25) % 360
    return {
      file: p.file,
      name: p.file.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '),
      thumb: resolveRel(base, p.tex?.['1024'] || p.src),
      full: resolveRel(base, p.tex?.['2048'] || p.src),
      width: p.width || 1200,
      height: p.height || 800,
      aspect: p.aspect || 1.5,
      hex,
      luminance: p.luminance ?? l,
      hue: h,
      sat: s,
      bucket,
      _sortKey: isMono ? 10000 + l * 1000 : Math.floor(hueShift / 12) * 100 + l * 50,
    }
  })
  enriched.sort((a, b) => a._sortKey - b._sortKey)
  cache.set(key, enriched)
  return enriched
}

export async function loadCodeData(base = '.') {
  const key = `code:${base}`
  if (cache.has(key)) return cache.get(key)
  const doc = document.getElementById('featuredGrid')
    ? document
    : await fetchDoc(`${base}/code.html`)
  const parse = (card, folderKey, folderLabel) => {
    const titleEl = card.querySelector('.project-title a')
    const imgEl = card.querySelector('.project-thumb')
    const tagEl = card.querySelector('.project-tag')
    const descEl = card.querySelector('.project-desc')
    return {
      title: titleEl?.textContent?.trim() || 'Untitled',
      href: titleEl?.getAttribute('href') || '#',
      external: true,
      img: resolveRel(base, imgEl?.getAttribute('src') || ''),
      tag: tagEl?.textContent?.trim() || card.dataset.category || 'project',
      desc: descEl?.textContent?.trim() || '',
      folder: folderKey,
      folderLabel,
      typeLabel: tagEl?.textContent?.trim() || 'app',
    }
  }
  const main = [...doc.querySelectorAll('#featuredGrid .project-card')].map((c) => parse(c, 'main', 'Main'))
  const archive = [...doc.querySelectorAll('#archiveGrid .project-card')].map((c) => parse(c, 'archive', 'Archive'))
  const out = { main, archive, all: [...main, ...archive] }
  cache.set(key, out)
  return out
}

export async function loadMusicData(base = '.') {
  const key = `music:${base}`
  if (cache.has(key)) return cache.get(key)
  const doc = document.querySelector('.album-list')
    ? document
    : await fetchDoc(`${base}/music.html`)
  const items = [...doc.querySelectorAll('.album-row')].map((row) => {
    const titleEl = row.querySelector('.album-title')
    const metaEl = row.querySelector('.album-meta')
    const copyEl = row.querySelector('.album-copy')
    const imgEl = row.querySelector('.album-cover')
    const links = [...row.querySelectorAll('.album-actions a')].map((a) => ({
      label: a.textContent.trim(),
      href: resolveRel(base, a.getAttribute('href') || '#'),
    }))
    const sc = links.find((l) => l.href.includes('soundcloud.com'))
    const kind = (metaEl?.textContent || 'release').trim().toLowerCase()
    const folder = kind.includes('single') ? 'singles' : 'albums'
    return {
      title: titleEl?.textContent?.trim() || 'Untitled',
      href: links[0]?.href || '#',
      external: true,
      img: resolveRel(base, imgEl?.getAttribute('src') || ''),
      tag: metaEl?.textContent?.trim() || 'music',
      desc: copyEl?.textContent?.trim() || '',
      folder,
      folderLabel: folder === 'singles' ? 'Singles' : 'Albums & EPs',
      typeLabel: metaEl?.textContent?.trim() || 'audio',
      links,
      soundcloud: sc?.href || '',
      squareArt: true,
    }
  })
  cache.set(key, items)
  return items
}

export async function loadFilmsData(base = '.') {
  const key = `films:${base}`
  if (cache.has(key)) return cache.get(key)
  const doc = document.querySelector('.film-list')
    ? document
    : await fetchDoc(`${base}/film.html`)
  const items = [...doc.querySelectorAll('.film-entry')].map((entry) => {
    const titleEl = entry.querySelector('.film-title')
    const creditEl = entry.querySelector('.film-credit')
    const rolesEl = entry.querySelector('.film-roles')
    const notesEl = entry.querySelector('.film-notes')
    const iframeEl = entry.querySelector('iframe')
    const links = [...entry.querySelectorAll('.film-actions a')].map((a) => ({
      label: a.textContent.trim(),
      href: resolveRel(base, a.getAttribute('href') || '#'),
    }))
    return {
      title: titleEl?.textContent?.trim() || 'Untitled',
      href: links[0]?.href || '',
      external: false,
      embed: iframeEl?.getAttribute('src') || '',
      tag: creditEl?.textContent?.trim() || 'short film',
      desc: [rolesEl?.textContent?.trim(), notesEl?.textContent?.trim()].filter(Boolean).join(' · '),
      folder: 'films',
      folderLabel: 'Short Films',
      typeLabel: 'video',
      links,
    }
  })
  cache.set(key, items)
  return items
}

export async function loadScriptsData(base = '.') {
  const key = `scripts:${base}`
  if (cache.has(key)) return cache.get(key)
  const files = await fetch(`${base}/scripts/manifest.json`).then((r) => r.json())
  const items = await Promise.all(files.map(async (file) => {
    const slug = file.replace(/\.md$/, '')
    const text = await fetch(`${base}/scripts/${file}`).then((r) => r.text())
    const lines = text.split(/\r?\n/)
    let title = '', subtitle = '', desc = ''
    for (const raw of lines) {
      const line = raw.trim()
      if (!title && /^#\s+/.test(line)) { title = line.replace(/^#\s+/, '').trim(); continue }
      if (!subtitle && /^###\s+/.test(line) && !/^(?:###\s+)?(?:FADE IN:|INT\.|EXT\.|SUPER:|CUT TO:|INSERT:|END\.)/i.test(line)) {
        subtitle = line.replace(/^###\s+/, '').trim(); continue
      }
      if (!desc && /^\*.*\*$/.test(line)) { desc = line.replace(/^\*|\*$/g, '').trim(); continue }
      if (line === 'FADE IN:' || /^###\s+/.test(line)) break
    }
    const viewHref = `${base}/scripts/view.html?slug=${encodeURIComponent(slug)}`
    const pdfHref = `${base}/scripts/pdfs/${slug}.pdf`
    return {
      title: title || slug,
      href: viewHref,
      external: false,
      tag: subtitle || 'screenplay',
      desc: desc || 'Original screenplay by Avery Beuth.',
      folder: 'scripts',
      folderLabel: 'Screenplays',
      typeLabel: '.fountain',
      links: [
        { label: 'Read screenplay', href: viewHref },
        { label: 'Download PDF', href: pdfHref },
      ],
    }
  }))
  cache.set(key, items)
  return items
}
