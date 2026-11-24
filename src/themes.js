/**
 * themes.js: 6 genuinely distinct portfolio modes:
 *  01 Original: obsidian dark gallery + 3D WebGL photos (click fullscreen)
 *  02 Terminal: authentic Windows Terminal (PowerShell) with tty stdout bursts & faint Matrix bg
 *  03 Desktop:  multi-window Windows 7 Desktop OS (stackable, draggable, closable windows)
 *  04 Silly:    dry, deadpan Comic Sans & MS Paint (fall-over physics, fake guestbook, dry gags)
 *  05 Paper:    full-site THE AVERY CHRONICLE broadsheet newspaper article on homepage
 *  06 Cobalt:   full-site architectural CAD blueprint specification dossier on homepage
 */
import {
  loadColorOrderedPhotos,
  loadCodeData,
  loadMusicData,
  loadFilmsData,
  loadScriptsData,
} from './theme-data.js'
import { openSecretsModal } from './easter-eggs.js'

const THEMES = [
  { id: 'original', num: '01', name: 'Original', label: 'ORIGINAL', desc: 'Obsidian dark & 3D photo gallery', themeColor: '#0b0c0f', previewClass: 'is-original' },
  { id: 'terminal', num: '02', name: 'Terminal', label: 'TERMINAL', desc: 'Real Windows Terminal (PowerShell)', themeColor: '#0c0c0c', previewClass: 'is-terminal' },
  { id: 'frutiger', num: '03', name: 'Desktop', label: 'DESKTOP', desc: 'Multi-window Windows 7 desktop OS', themeColor: '#071b2e', previewClass: 'is-frutiger' },
  { id: 'silly', num: '04', name: 'Silly', label: 'SILLY', desc: 'Deadpan Comic Sans & MS Paint', themeColor: '#faf9f4', previewClass: 'is-silly' },
  { id: 'paper', num: '05', name: 'Paper', label: 'PAPER', desc: 'Full broadsheet newspaper edition', themeColor: '#f2ede2', previewClass: 'is-paper' },
  { id: 'cobalt', num: '06', name: 'Cobalt', label: 'COBALT', desc: 'Full architectural CAD blueprint set', themeColor: '#061429', previewClass: 'is-cobalt' },
]

const ICONS = {
  folder: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe78a"/><stop offset="55%" stop-color="#f7c844"/><stop offset="100%" stop-color="#d89614"/></linearGradient><linearGradient id="fg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff4bf"/><stop offset="48%" stop-color="#ffd24d"/><stop offset="100%" stop-color="#e3a11a"/></linearGradient></defs><path d="M3 8.5C3 7.1 4.1 6 5.5 6H12l2.4 2.5H26.5C27.9 8.5 29 9.6 29 11v13.5c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V8.5z" fill="url(#fg1)" stroke="#9a6408" stroke-width="1.2"/><path d="M3 12.2h26v12.3c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V12.2z" fill="url(#fg2)" stroke="#a66c0a" stroke-width="1.1"/><path d="M4.5 13.5h23" stroke="rgba(255,255,255,0.75)" stroke-width="1.3"/></svg>`,
  photos: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e4eef7"/><stop offset="100%" stop-color="#88a4bd"/></linearGradient><radialGradient id="pg2" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#82e0ff"/><stop offset="55%" stop-color="#1d6ab8"/><stop offset="100%" stop-color="#09223f"/></radialGradient></defs><rect x="3" y="8" width="26" height="18" rx="3.5" fill="url(#pg1)" stroke="#3b5369" stroke-width="1.2"/><path d="M11 8l1.8-3h6.4L21 8" fill="#c4d6e6" stroke="#3b5369" stroke-width="1.1"/><circle cx="16" cy="17" r="6.2" fill="url(#pg2)" stroke="#ffffff" stroke-width="1.4"/><circle cx="14" cy="15" r="1.8" fill="rgba(255,255,255,0.65)"/></svg>`,
  code: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="4" y="5" width="24" height="22" rx="3" fill="#eaf3fc" stroke="#3e688f" stroke-width="1.2"/><rect x="4" y="5" width="24" height="6" rx="2.5" fill="#3a96e3"/><path d="M12.2 15.5l-3.6 3.5 3.6 3.5M19.8 15.5l3.6 3.5-3.6 3.5M17.2 14.5l-2.4 9" fill="none" stroke="#165699" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  scripts: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path d="M7 4h12l6 6v18H7z" fill="#f5faff" stroke="#4c6f91" stroke-width="1.2" stroke-linejoin="round"/><path d="M19 4v6h6" fill="#bfd6ec" stroke="#4c6f91" stroke-width="1.1"/><path d="M10.5 14h11M10.5 18h11M10.5 22h7.5" stroke="#3c6791" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  music: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="mg1" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#b8f5ff"/><stop offset="45%" stop-color="#2fa2e8"/><stop offset="100%" stop-color="#114882"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#mg1)" stroke="#0e3866" stroke-width="1.2"/><circle cx="16" cy="16" r="3.4" fill="#eaf6ff" stroke="#114882" stroke-width="1.1"/><path d="M15 21.5V10.5l7.5-1.6v9.2" fill="none" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="21.5" r="2.2" fill="#ffffff"/><circle cx="20.5" cy="18.2" r="2.2" fill="#ffffff"/></svg>`,
  film: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="2.5" fill="#2c3d4f" stroke="#0f1821" stroke-width="1.2"/><rect x="8.5" y="9" width="15" height="14" rx="1.2" fill="#77d0fa"/><path d="M14 13l5.5 3-5.5 3z" fill="#ffffff"/><path d="M5.5 9h1.6M5.5 13h1.6M5.5 17h1.6M5.5 21h1.6M24.9 9h1.6M24.9 13h1.6M24.9 17h1.6M24.9 21h1.6" stroke="#d8e6f2" stroke-width="1.4"/></svg>`,
  notes: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="6" y="4" width="20" height="24" rx="2" fill="#fffdf2" stroke="#537496" stroke-width="1.2"/><rect x="6" y="4" width="20" height="5" rx="1.5" fill="#4aa7eb"/><path d="M9.5 13.5h13M9.5 17.5h13M9.5 21.5h9" stroke="#6d8ba8" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  recycle: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="rb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e3f4ff"/><stop offset="60%" stop-color="#9cc6e6"/><stop offset="100%" stop-color="#5a8ab5"/></linearGradient></defs><path d="M7.5 9h17l-2 18.5a2 2 0 0 1-2 1.8h-9a2 2 0 0 1-2-1.8L7.5 9z" fill="url(#rb1)" stroke="#2b4f73" stroke-width="1.2"/><ellipse cx="16" cy="9" rx="8.8" ry="2.6" fill="#eef7ff" stroke="#2b4f73" stroke-width="1.1"/><path d="M12.5 16l3.5-2.8 3.5 2.8M19.5 19.5l-3.5 3-3.5-3" fill="none" stroke="#1e7d45" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  themes: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="tg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7ce4ff"/><stop offset="50%" stop-color="#6ee787"/><stop offset="100%" stop-color="#ff85c0"/></linearGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#tg1)" stroke="#1d4466" stroke-width="1.2"/><ellipse cx="14" cy="10.5" rx="7" ry="4" fill="rgba(255,255,255,0.45)"/><circle cx="12" cy="15" r="2.2" fill="#ffffff"/><circle cx="18.5" cy="14" r="2.2" fill="#ffd32a"/><circle cx="16.5" cy="20.5" r="2.2" fill="#1d6ed6"/></svg>`,
  power: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="pw1" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#ffa899"/><stop offset="55%" stop-color="#e0432f"/><stop offset="100%" stop-color="#87180c"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#pw1)" stroke="#611209" stroke-width="1.2"/><path d="M16 9.5v6.5M11.6 12.2a6.4 6.4 0 1 0 8.8 0" fill="none" stroke="#ffffff" stroke-width="2.1" stroke-linecap="round"/></svg>`,
  winOrb: `<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true"><path d="M7.5 10.5c2.8-1.4 5.2-1.4 7.5 0v5.5c-2.3-1.2-4.7-1.2-7.5 0z" fill="#ff5a36"/><path d="M17 10.5c2.3 1.2 4.7 1.2 7.5 0v5.5c-2.8 1.4-5.2 1.4-7.5 0z" fill="#7dd128"/><path d="M7.5 17.5c2.8-1.4 5.2-1.4 7.5 0V23c-2.3-1.2-4.7-1.2-7.5 0z" fill="#2ba8f7"/><path d="M17 17.5c2.3 1.2 4.7 1.2 7.5 0V23c-2.8 1.4-5.2 1.4-7.5 0z" fill="#ffca28"/></svg>`,
  backArrow: `<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M10.5 3.5L5.5 8l5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  fwdArrow: `<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M5.5 3.5L10.5 8l-5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  paintFace: `<svg viewBox="0 0 44 44" width="38" height="38" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="#fff59d" stroke="#1c1c1c" stroke-width="2.4"/><circle cx="15.5" cy="17" r="2.2" fill="#1c1c1c"/><circle cx="28.5" cy="16.5" r="2.2" fill="#1c1c1c"/><path d="M13.5 26.5c3.5 4.5 12.5 5 17-0.5" fill="none" stroke="#1c1c1c" stroke-width="2.3" stroke-linecap="round"/></svg>`,
}

const STORAGE_KEY = 'avery_theme'
let initialized = false

const esc = (s) => String(s || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

function isHomeDocument() {
  return Boolean(document.getElementById('stage') && document.getElementById('gl'))
}

function isPhotosQuery() {
  const p = new URLSearchParams(window.location.search)
  return isHomeDocument() && (p.has('zoom') || p.has('photos') || p.has('overview') || p.has('p'))
}

function getPageMeta() {
  const path = window.location.pathname.toLowerCase()
  const inScripts = path.includes('/scripts/')
  const base = inScripts ? '..' : '.'
  if (isPhotosQuery()) return { base: '.', inScripts: false, slug: 'photos', title: 'Photos' }
  if (isHomeDocument()) return { base: '.', inScripts: false, slug: 'home', title: 'Home' }
  if (path.includes('code')) return { base, inScripts, slug: 'code', title: 'Code' }
  if (path.includes('music')) return { base, inScripts, slug: 'music', title: 'Music' }
  if (path.includes('film')) return { base, inScripts, slug: 'films', title: 'Films' }
  if (inScripts && path.includes('view')) return { base, inScripts, slug: 'scripts/view', title: 'Screenplay' }
  if (inScripts) return { base, inScripts, slug: 'scripts', title: 'Scripts' }
  if (path.includes('privacy')) return { base, inScripts, slug: 'privacy', title: 'Privacy' }
  return { base, inScripts, slug: 'home', title: 'Portfolio' }
}

function resetScrollTop() {
  if ('scrollRestoration' in history) {
    try { history.scrollRestoration = 'manual' } catch {}
  }
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  if (document.body) document.body.scrollTop = 0
}

function applyThemeAttr(id) {
  const theme = THEMES.find((t) => t.id === id) || THEMES[0]
  const valid = theme.id
  if (valid === 'original') {
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('is-themed-home', 'has-theme-takeover')
    sessionStorage.removeItem(STORAGE_KEY)
  } else {
    document.documentElement.setAttribute('data-theme', valid)
    if (isHomeDocument()) document.documentElement.classList.add('is-themed-home')
    sessionStorage.setItem(STORAGE_KEY, valid)
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]')
  if (metaTheme && theme.themeColor) metaTheme.setAttribute('content', theme.themeColor)
  return valid
}

const initialSaved = sessionStorage.getItem(STORAGE_KEY) || 'original'
if (initialSaved !== 'original') applyThemeAttr(initialSaved)

function makeWindowDraggable(winEl, handleEl, onFocus) {
  if (!winEl || !handleEl) return () => {}
  let x = parseFloat(winEl.dataset.wx || '0') || 0
  let y = parseFloat(winEl.dataset.wy || '0') || 0
  let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0

  const applyPos = () => {
    winEl.dataset.wx = String(Math.round(x))
    winEl.dataset.wy = String(Math.round(y))
    winEl.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`
  }
  if (x || y) applyPos()

  const onDown = (e) => {
    onFocus?.()
    if (window.innerWidth <= 860) return
    if (e.target.closest('button, a, input')) return
    dragging = true
    sx = e.clientX
    sy = e.clientY
    ox = x
    oy = y
    winEl.classList.add('is-dragging')
    handleEl.setPointerCapture?.(e.pointerId)
    e.preventDefault()
  }
  const onMove = (e) => {
    if (!dragging) return
    x = ox + (e.clientX - sx)
    y = oy + (e.clientY - sy)
    applyPos()
  }
  const onUp = () => {
    if (!dragging) return
    dragging = false
    winEl.classList.remove('is-dragging')
  }
  const onDbl = (e) => {
    if (e.target.closest('button, a, input')) return
    x = 0; y = 0; applyPos()
  }

  winEl.addEventListener('pointerdown', () => onFocus?.())
  handleEl.addEventListener('pointerdown', onDown)
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)
  handleEl.addEventListener('dblclick', onDbl)

  return () => {
    handleEl.removeEventListener('pointerdown', onDown)
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerup', onUp)
    handleEl.removeEventListener('dblclick', onDbl)
  }
}

/* ---------- Shared Full-Screen Photo Lightbox ---------- */
function openPhotoLightbox(photos, startIndex) {
  let idx = startIndex
  let lb = document.getElementById('themePhotoLb')
  if (lb) lb.remove()
  lb = document.createElement('div')
  lb.id = 'themePhotoLb'
  lb.className = 'theme-photo-lb'
  lb.setAttribute('data-theme-injected', '1')
  lb.innerHTML = `
    <div class="tplb-inner">
      <div class="tplb-bar">
        <span class="tplb-meta" id="tplbMeta"></span>
        <div class="tplb-actions">
          <button type="button" id="tplbPrev">&lsaquo; prev</button>
          <button type="button" id="tplbNext">next &rsaquo;</button>
          <button type="button" id="tplbClose">&times; close</button>
        </div>
      </div>
      <div class="tplb-stage"><img id="tplbImg" alt="" /></div>
    </div>
  `
  document.body.appendChild(lb)

  const render = () => {
    const p = photos[idx]
    if (!p) return
    lb.querySelector('#tplbImg').src = p.full || p.img
    lb.querySelector('#tplbImg').alt = p.name || p.title || ''
    const hex = p.hex || '#888888'
    const dims = p.width && p.height ? ` &middot; ${p.width}&times;${p.height}` : ''
    lb.querySelector('#tplbMeta').innerHTML = `<i class="tplb-swatch" style="background:${hex}"></i> ${String(idx + 1).padStart(3, '0')} / ${photos.length} &middot; ${esc(p.file || p.title || '')} &middot; ${hex.toUpperCase()}${dims}`
  }
  const close = () => {
    window.removeEventListener('keydown', onKey)
    lb.remove()
  }
  const onKey = (e) => {
    if (e.key === 'Escape') close()
    else if (e.key === 'ArrowRight') { idx = (idx + 1) % photos.length; render() }
    else if (e.key === 'ArrowLeft') { idx = (idx - 1 + photos.length) % photos.length; render() }
  }
  lb.querySelector('#tplbPrev').addEventListener('click', () => { idx = (idx - 1 + photos.length) % photos.length; render() })
  lb.querySelector('#tplbNext').addEventListener('click', () => { idx = (idx + 1) % photos.length; render() })
  lb.querySelector('#tplbClose').addEventListener('click', close)
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lb.querySelector('.tplb-stage')) close() })
  window.addEventListener('keydown', onKey)
  render()
}

export function initThemes() {
  if (initialized) return
  initialized = true

  let currentId = sessionStorage.getItem(STORAGE_KEY) || 'original'
  let popover = null
  let cleanupFns = []

  const cleanupChrome = () => {
    document.documentElement.classList.remove('has-theme-takeover')
    while (cleanupFns.length) {
      const fn = cleanupFns.pop()
      try { fn() } catch {}
    }
    document.querySelectorAll('[data-theme-injected]').forEach((el) => el.remove())
  }

  /* ==========================================================================
     02: REAL WINDOWS TERMINAL (PowerShell + authentic ConPTY stdout streaming)
     ========================================================================== */
  const mountWindowsTerminal = () => {
    const meta = getPageMeta()
    document.documentElement.classList.add('has-theme-takeover')

    const shell = document.createElement('div')
    shell.className = 'wt-root'
    shell.setAttribute('data-theme-injected', '1')
    shell.innerHTML = `
      <canvas class="wt-matrix-faint" id="wtMatrix" aria-hidden="true"></canvas>
      <header class="wt-tabbar">
        <div class="wt-tabs">
          <div class="wt-tab is-active"><span class="wt-ps-glyph">&gt;_</span><span>Windows PowerShell | averybeuth.xyz</span></div>
          <div class="wt-quick-cmds">
            <button type="button" data-wt-cmd="cd ~">home</button>
            <button type="button" data-wt-cmd="cd photos">photos</button>
            <button type="button" data-wt-cmd="cd code">code</button>
            <button type="button" data-wt-cmd="cd scripts">scripts</button>
            <button type="button" data-wt-cmd="cd music">music</button>
            <button type="button" data-wt-cmd="cd films">films</button>
          </div>
        </div>
        <div class="wt-win-controls">
          <button type="button" class="wt-ctrl-txt" data-wt-themes>themes</button>
          <button type="button" class="wt-ctrl-txt" data-wt-original>original</button>
          <button type="button" class="wt-cap is-close" data-wt-original aria-label="Exit to Original">&times;</button>
        </div>
      </header>
      <div class="wt-screen" id="wtScreen">
        <div class="wt-output" id="wtOut"></div>
        <form class="wt-prompt-row" id="wtForm" autocomplete="off">
          <label class="wt-prompt-label" id="wtPrompt" for="wtInput">PS C:\\Users\\visitor\\averybeuth.xyz&gt;</label><span class="wt-input-wrap"><span class="wt-input-mirror" id="wtBefore" aria-hidden="true"></span><span class="wt-cursor-block" id="wtCaret" aria-hidden="true"></span><span class="wt-input-mirror" id="wtAfter" aria-hidden="true"></span><input id="wtInput" class="wt-input" type="text" spellcheck="false" autocomplete="off" aria-label="PowerShell command" /></span>
        </form>
      </div>
    `
    document.body.appendChild(shell)

    // Ultra-faint barely-there Matrix rain behind the terminal buffer
    const canvas = shell.querySelector('#wtMatrix')
    const ctx = canvas.getContext('2d')
    let rafId = 0, drops = [], lastDraw = 0
    const glyphs = '01アイウエオカキクケコABXY#$%&*+-:/'
    const resizeM = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drops = Array.from({ length: Math.max(12, Math.floor(canvas.width / 24)) }, () => Math.random() * -50)
    }
    resizeM()
    window.addEventListener('resize', resizeM)
    const tickM = (t) => {
      rafId = requestAnimationFrame(tickM)
      if (t - lastDraw < 110) return
      lastDraw = t
      ctx.fillStyle = 'rgba(12, 12, 12, 0.22)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(22, 198, 12, 0.35)'
      ctx.font = '13px Consolas, "Courier Prime", monospace'
      for (let i = 0; i < drops.length; i++) {
        ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], i * 24, drops[i] * 22)
        if (drops[i] * 22 > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i] += 0.55
      }
    }
    rafId = requestAnimationFrame(tickM)

    const outEl = shell.querySelector('#wtOut')
    const screenEl = shell.querySelector('#wtScreen')
    const formEl = shell.querySelector('#wtForm')
    const inputEl = shell.querySelector('#wtInput')
    const beforeEl = shell.querySelector('#wtBefore')
    const afterEl = shell.querySelector('#wtAfter')
    const promptEl = shell.querySelector('#wtPrompt')

    let cwd = 'home'
    let streamToken = 0
    let isBusy = false
    let pendingArchive = null
    const history = []
    let histIdx = -1

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
    const syncMirror = () => {
      const val = inputEl.value
      const pos = typeof inputEl.selectionStart === 'number' ? inputEl.selectionStart : val.length
      beforeEl.textContent = val.slice(0, pos)
      afterEl.textContent = val.slice(pos)
    }
    const setBusy = (busy) => {
      isBusy = busy
      formEl.hidden = busy
      if (!busy) {
        syncMirror()
        screenEl.scrollTop = screenEl.scrollHeight
        inputEl.focus()
      }
    }

    const onGlobalCtrlC = (e) => {
      if ((e.ctrlKey && e.key.toLowerCase() === 'c') || (isBusy && e.key === 'Escape')) {
        if (!isBusy && !pendingArchive) return
        e.preventDefault()
        streamToken++
        pendingArchive = null
        updatePrompt()
        outEl.querySelectorAll('.wt-live-caret').forEach((c) => c.remove())
        print('<span class="wt-err">^C</span>', 'wt-line')
        setBusy(false)
      }
    }
    window.addEventListener('keydown', onGlobalCtrlC)

    cleanupFns.push(() => {
      streamToken++
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resizeM)
      window.removeEventListener('keydown', onGlobalCtrlC)
    })

    const updatePrompt = () => {
      if (pendingArchive) {
        promptEl.textContent = `Show ${pendingArchive.length} more archive projects? [y/N]`
        return
      }
      const sub = cwd === 'home' ? '' : `\\${cwd}`
      promptEl.textContent = `PS C:\\Users\\visitor\\averybeuth.xyz${sub}>`
    }

    const print = (html, cls = 'wt-line') => {
      const div = document.createElement('div')
      div.className = cls
      div.innerHTML = html
      outEl.appendChild(div)
      screenEl.scrollTop = screenEl.scrollHeight
      return div
    }

    // Authentic tty spinner that overwrites itself in-place while fetching
    const startSpinner = (label, token) => {
      const frames = ['|', '/', '-', '\\']
      let f = 0
      const el = print(`<span class="wt-dim">[${frames[0]}] ${esc(label)}</span>`, 'wt-line')
      const iv = setInterval(() => {
        if (token !== streamToken) { clearInterval(iv); return }
        f = (f + 1) % frames.length
        el.innerHTML = `<span class="wt-dim">[${frames[f]}] ${esc(label)}</span>`
      }, 85)
      return () => {
        clearInterval(iv)
        el.remove()
      }
    }

    // Zero-fade ConPTY stdout burst: deliberate, readable terminal line cadence
    // with a live solid block cursor tracking the write head.
    const streamLines = async (entries, token, { minDelay = 60, maxDelay = 110, batch = 1 } = {}) => {
      const caret = document.createElement('span')
      caret.className = 'wt-cursor-block wt-live-caret'
      for (let i = 0; i < entries.length; ) {
        if (token !== streamToken) { caret.remove(); return }
        const step = batch > 1 ? Math.max(1, Math.floor(Math.random() * batch) + 1) : 1
        let lastEl = null
        for (let k = 0; k < step && i < entries.length; k++, i++) {
          const item = entries[i]
          lastEl = print(
            typeof item === 'string' ? item : item.html,
            typeof item === 'string' ? 'wt-line wt-pre' : item.cls
          )
        }
        if (lastEl) lastEl.appendChild(caret)
        screenEl.scrollTop = screenEl.scrollHeight
        const jitter = minDelay + Math.random() * (maxDelay - minDelay)
        const burstPause = Math.random() < 0.12 ? 55 : 0
        await sleep(jitter + burstPause)
      }
      caret.remove()
    }

    // Type a command into the live prompt with realistic mechanical keystroke timing
    const typeAndRun = async (cmdStr) => {
      const myToken = ++streamToken
      pendingArchive = null
      updatePrompt()
      outEl.querySelectorAll('.wt-live-caret').forEach((c) => c.remove())
      setBusy(false)
      inputEl.value = ''
      syncMirror()
      for (let i = 1; i <= cmdStr.length; i++) {
        if (myToken !== streamToken) return
        const ch = cmdStr[i - 1]
        inputEl.value = cmdStr.slice(0, i)
        inputEl.setSelectionRange?.(i, i)
        syncMirror()
        const keyMs = ch === ' ' ? 85 + Math.random() * 45 : 46 + Math.random() * 40
        await sleep(keyMs)
      }
      await sleep(150)
      if (myToken !== streamToken) return
      inputEl.value = ''
      syncMirror()
      await runCommand(cmdStr, myToken)
    }

    const printNeofetch = async (token) => {
      const lines = [
        `<span class="wt-g"> █████╗ ██████╗ </span>   <span class="wt-c">visitor@averybeuth.xyz</span>`,
        `<span class="wt-g">██╔══██╗██╔══██╗</span>   <span class="wt-y">Host</span>     averybeuth.xyz`,
        `<span class="wt-g">███████║██████╔╝</span>   <span class="wt-y">Owner</span>    Avery Beuth (@avery.beuth)`,
        `<span class="wt-g">██╔══██║██╔══██╗</span>   <span class="wt-y">Shell</span>    Windows PowerShell 7.4 (web)`,
        `<span class="wt-g">██║  ██║██████╔╝</span>   <span class="wt-y">Dirs</span>     <button type="button" class="wt-link" data-wt-run="cd photos">photos\\</button>  <button type="button" class="wt-link" data-wt-run="cd code">code\\</button>  <button type="button" class="wt-link" data-wt-run="cd scripts">scripts\\</button>  <button type="button" class="wt-link" data-wt-run="cd music">music\\</button>  <button type="button" class="wt-link" data-wt-run="cd films">films\\</button>`,
        `<span class="wt-g">╚═╝  ╚═╝╚═════╝ </span>   <span class="wt-y">Links</span>    <a class="wt-link" href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">instagram</a>  <a class="wt-link" href="https://github.com/averywsc" target="_blank" rel="noopener">github</a>  <button type="button" class="wt-link" data-wt-themes-inline>themes</button>  <button type="button" class="wt-link" data-wt-orig-inline>original</button>`,
        `<span class="wt-dim">Click any directory above or type <span class="wt-g">help</span>, <span class="wt-g">cd code</span>, <span class="wt-g">cd music</span>, <span class="wt-g">cd scripts</span>, <span class="wt-g">cd films</span>, <span class="wt-g">cd photos</span>.</span>`,
      ]
      await streamLines(lines, token, { minDelay: 65, maxDelay: 115, batch: 1 })
    }

    const streamCodeArchive = async (archiveList, token) => {
      const lines = [
        `<span class="wt-y">ARCHIVE (${archiveList.length} projects)</span>`,
        ...archiveList.map((p) => `-a---  <span class="wt-g">[${esc(p.tag)}]</span> <span class="wt-c">${esc(p.title)}</span>  <a class="wt-link" href="${esc(p.href)}" target="_blank" rel="noopener">${esc(p.href)}</a>\n       <span class="wt-dim">${esc(p.desc)}</span>`),
      ]
      await streamLines(lines, token, { minDelay: 42, maxDelay: 74, batch: 1 })
    }

    const listDir = async (targetDir, token) => {
      const dir = targetDir || cwd
      if (dir === 'home') {
        await streamLines([
          `<span class="wt-dim">Mode                 Items Name</span>`,
          `d----                  375 <button type="button" class="wt-link" data-wt-run="cd photos">photos\\</button>`,
          `d----                   89 <button type="button" class="wt-link" data-wt-run="cd code">code\\</button>`,
          `d----                   15 <button type="button" class="wt-link" data-wt-run="cd scripts">scripts\\</button>`,
          `d----                   12 <button type="button" class="wt-link" data-wt-run="cd music">music\\</button>`,
          `d----                    3 <button type="button" class="wt-link" data-wt-run="cd films">films\\</button>`,
        ], token, { minDelay: 65, maxDelay: 110, batch: 1 })
        return
      }
      if (dir === 'code') {
        const stopSpin = startSpinner('Enumerating C:\\Users\\visitor\\averybeuth.xyz\\code', token)
        const [data] = await Promise.all([loadCodeData(meta.base), sleep(420)])
        stopSpin()
        if (token !== streamToken) return
        const lines = [
          `<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\code  (${data.main.length} Main, ${data.archive.length} Archive)</span>`,
          `<span class="wt-y">SELECTED PROJECTS (${data.main.length})</span>`,
          ...data.main.map((p) => `-a---  <span class="wt-g">[${esc(p.tag)}]</span> <span class="wt-c">${esc(p.title)}</span>  <a class="wt-link" href="${esc(p.href)}" target="_blank" rel="noopener">${esc(p.href)}</a>\n       <span class="wt-dim">${esc(p.desc)}</span>`),
        ]
        await streamLines(lines, token, { minDelay: 62, maxDelay: 102, batch: 1 })
        if (token !== streamToken) return
        pendingArchive = data.archive
        updatePrompt()
        print(`<span class="wt-y">--More-- ${data.archive.length} archive projects remaining. Show more? [y/N]</span>  <button type="button" class="wt-link" data-wt-more="y">[yes]</button>  <button type="button" class="wt-link" data-wt-more="n">[no]</button>`)
        return
      }
      if (dir === 'music') {
        const stopSpin = startSpinner('Reading C:\\Users\\visitor\\averybeuth.xyz\\music', token)
        const [items] = await Promise.all([loadMusicData(meta.base), sleep(400)])
        stopSpin()
        if (token !== streamToken) return
        const lines = [
          `<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\music  (tool: <a class="wt-link" href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">https://averywsc.github.io/bebeat/</a>)</span>`,
          ...items.map((m) => {
            const links = m.links.map((l) => `<a class="wt-link" href="${esc(l.href)}" target="_blank" rel="noopener">[${esc(l.label)}]</a>`).join(' ')
            return `-a---  <span class="wt-y">[${esc(m.tag)}]</span> <span class="wt-c">${esc(m.title)}</span>\n       <span class="wt-dim">${esc(m.desc)}</span>\n       ${links}`
          }),
        ]
        await streamLines(lines, token, { minDelay: 75, maxDelay: 120, batch: 1 })
        return
      }
      if (dir === 'scripts') {
        const stopSpin = startSpinner('Loading C:\\Users\\visitor\\averybeuth.xyz\\scripts\\manifest.json', token)
        const [items] = await Promise.all([loadScriptsData(meta.base), sleep(400)])
        stopSpin()
        if (token !== streamToken) return
        const lines = [
          `<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\scripts (${items.length} files)</span>`,
          ...items.map((s) => {
            const links = s.links.map((l) => `<a class="wt-link" href="${esc(l.href)}">[${esc(l.label)}]</a>`).join(' ')
            return `-a---  <span class="wt-c">${esc(s.title)}</span> <span class="wt-dim">(${esc(s.tag)})</span>\n       <span class="wt-dim">${esc(s.desc)}</span>\n       ${links}`
          }),
        ]
        await streamLines(lines, token, { minDelay: 72, maxDelay: 118, batch: 1 })
        return
      }
      if (dir === 'films') {
        const stopSpin = startSpinner('Probing C:\\Users\\visitor\\averybeuth.xyz\\films', token)
        const [items] = await Promise.all([loadFilmsData(meta.base), sleep(400)])
        stopSpin()
        if (token !== streamToken) return
        const lines = [
          `<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\films  (tools: <a class="wt-link" href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">guides/LUTs</a> <a class="wt-link" href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">fifilm</a>)</span>`,
          ...items.map((f) => {
            const ytUrl = f.embed ? f.embed.replace('/embed/', '/watch?v=') : ''
            const linkHtml = [
              ytUrl ? `<a class="wt-link" href="${esc(ytUrl)}" target="_blank" rel="noopener">[watch on youtube]</a>` : '',
              ...f.links.map((l) => `<a class="wt-link" href="${esc(l.href)}">[${esc(l.label)}]</a>`),
            ].filter(Boolean).join(' ')
            return `-a---  <span class="wt-c">${esc(f.title)}</span> <span class="wt-y">[${esc(f.tag)}]</span>\n       <span class="wt-dim">${esc(f.desc)}</span>\n       ${linkHtml}`
          }),
        ]
        await streamLines(lines, token, { minDelay: 85, maxDelay: 135, batch: 1 })
        return
      }
      if (dir === 'photos') {
        const stopSpin = startSpinner('Sorting 375 frames by color spectrum', token)
        const [photos] = await Promise.all([loadColorOrderedPhotos(meta.base), sleep(420)])
        stopSpin()
        if (token !== streamToken) return
        print(`<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\photos  (${photos.length} frames, click any color block for fullscreen preview)</span>`)
        const progEl = print(`<span class="wt-dim">[....................] 0/${photos.length}</span>`)
        const wall = print('', 'wt-ansi-wall')
        wall.addEventListener('click', (e) => {
          const b = e.target.closest('[data-wt-photo]')
          if (b) openPhotoLightbox(photos, Number(b.dataset.wtPhoto))
        })
        for (let i = 0; i < photos.length; i += 15) {
          if (token !== streamToken) return
          const end = Math.min(i + 15, photos.length)
          const frag = document.createDocumentFragment()
          for (let j = i; j < end; j++) {
            const p = photos[j]
            const b = document.createElement('button')
            b.type = 'button'
            b.className = 'wt-swatch'
            b.dataset.wtPhoto = String(j)
            b.style.background = p.hex
            b.title = `${p.file} (${p.hex})`
            frag.appendChild(b)
          }
          wall.appendChild(frag)
          const filled = Math.round((end / photos.length) * 20)
          progEl.innerHTML = `<span class="wt-dim">[${'#'.repeat(filled)}${'.'.repeat(20 - filled)}] ${end}/${photos.length}</span>`
          screenEl.scrollTop = screenEl.scrollHeight
          await sleep(42 + Math.random() * 28)
        }
        progEl.innerHTML = `<span class="wt-g">[####################] ${photos.length}/${photos.length} ok</span>`
      }
    }

    const handleArchiveReply = async (choice) => {
      if (!pendingArchive) return
      const archiveList = pendingArchive
      const token = ++streamToken
      print(`<span class="wt-prompt-echo">${esc(promptEl.textContent)}</span> ${esc(choice || 'n')}`)
      pendingArchive = null
      updatePrompt()
      setBusy(true)
      const ans = (choice || '').trim().toLowerCase()
      if (['y', 'yes', 'more', 'archive'].includes(ans)) {
        await streamCodeArchive(archiveList, token)
      } else {
        print(`<span class="wt-dim">Skipped archive. Type <span class="wt-g">archive</span> anytime to list all ${archiveList.length} builds.</span>`)
      }
      if (token === streamToken) setBusy(false)
    }

    const runCommand = async (raw, existingToken = null) => {
      const trimmed = (raw || '').trim()

      // Handle interactive [y/N] archive prompt
      if (pendingArchive) {
        const lowerAns = trimmed.toLowerCase()
        if (!trimmed || ['y', 'yes', 'n', 'no', 'more', 'archive'].includes(lowerAns)) {
          await handleArchiveReply(lowerAns || 'n')
          return
        }
        pendingArchive = null
        updatePrompt()
      }

      const token = existingToken ?? ++streamToken
      if (!trimmed) return
      history.unshift(trimmed)
      histIdx = -1
      print(`<span class="wt-prompt-echo">${esc(promptEl.textContent)}</span> ${esc(trimmed)}`)
      setBusy(true)

      const lowerFull = trimmed.toLowerCase()
      const parts = trimmed.split(/\s+/)
      const cmd = parts[0].toLowerCase()
      const arg = parts.slice(1).join(' ').toLowerCase().replace(/[\\/]+$/, '')

      if (['ily', 'love u', 'i love u', 'love you', 'i love you', '<3'].includes(lowerFull)) {
        await streamLines([
          `<span class="wt-pink">   /\\_/\\</span>`,
          `<span class="wt-pink">  ( ^.^ )  love u too &lt;3</span>`,
        ], token, { minDelay: 75, maxDelay: 120, batch: 1 })
      } else if (['cats', 'cat', 'meow'].includes(lowerFull)) {
        await streamLines([
          `<span class="wt-y">  /\\_/\\</span>`,
          `<span class="wt-y"> ( o.o )  meow</span>`,
          `<span class="wt-y">  &gt; ^ &lt;</span>`,
        ], token, { minDelay: 70, maxDelay: 115, batch: 1 })
      } else if (lowerFull === 'matrix') {
        const boosted = shell.classList.toggle('is-matrix-boost')
        print(boosted ? '<span class="wt-g">matrix rain: amplified</span>' : '<span class="wt-dim">matrix rain: subtle</span>')
      } else if (lowerFull === 'coffee') {
        const brewEl = print('<span class="wt-dim">brewing flat white... [..........] 0%</span>')
        for (let step = 1; step <= 10; step++) {
          if (token !== streamToken) return
          brewEl.innerHTML = `<span class="wt-dim">brewing flat white... [${'#'.repeat(step)}${'.'.repeat(10 - step)}] ${step * 10}%</span>`
          await sleep(110)
        }
        brewEl.innerHTML = `<span class="wt-y">flat white ready. oat milk, double shot.</span>`
      } else if (cmd === 'sudo') {
        print(`<span class="wt-err">nice try. visitor is not in the sudoers file. this incident will be ignored.</span>`)
      } else if (cmd === 'rm' && lowerFull.includes('-rf')) {
        const stopSpin = startSpinner('deleting averybeuth.xyz', token)
        await sleep(750)
        stopSpin()
        if (token !== streamToken) return
        print(`<span class="wt-y">just kidding, i need this website.</span>`)
      } else if (cmd === 'secret' || cmd === 'secrets') {
        print(`<span class="wt-g">opening secrets menu...</span>`)
        openSecretsModal()
      } else if (cmd === 'hack') {
        await streamLines([
          `<span class="wt-g">[01/04] bypassing mainframe firewall...</span>`,
          `<span class="wt-g">[02/04] decrypting 375 raw jpegs...</span>`,
          `<span class="wt-g">[03/04] downloading avery's unfinished beats...</span>`,
          `<span class="wt-c">[04/04] ACCESS GRANTED (jk this is a static site)</span>`,
        ], token, { minDelay: 95, maxDelay: 150, batch: 1 })
      } else if (cmd === 'ping') {
        await streamLines([
          `<span class="wt-dim">Pinging averybeuth.xyz [127.0.0.1] with 32 bytes of vibes:</span>`,
          `Reply from 127.0.0.1: bytes=32 time=1ms TTL=64`,
          `Reply from 127.0.0.1: bytes=32 time=2ms TTL=64`,
          `Reply from 127.0.0.1: bytes=32 time=1ms TTL=64`,
          `<span class="wt-g">Packets: Sent = 3, Received = 3, Lost = 0 (0% loss)</span>`,
        ], token, { minDelay: 160, maxDelay: 240, batch: 1 })
      } else if (cmd === 'party') {
        shell.classList.add('is-party')
        print(`<span class="wt-pink">party mode on for 4 seconds.</span>`)
        setTimeout(() => shell.classList.remove('is-party'), 4000)
      } else if (cmd === 'archive' || cmd === 'more') {
        const stopSpin = startSpinner('Loading code archive', token)
        const [data] = await Promise.all([loadCodeData(meta.base), sleep(380)])
        stopSpin()
        if (token !== streamToken) return
        await streamCodeArchive(data.archive, token)
      } else if (cmd === 'help' || cmd === '?') {
        await streamLines([
          `<span class="wt-g">dir / ls [folder]</span>   List entries (photos, code, scripts, music, films)`,
          `<span class="wt-g">cd &lt;folder&gt;</span>         Enter directory &amp; stream entries (or <span class="wt-g">cd ..</span> / <span class="wt-g">cd ~</span>)`,
          `<span class="wt-g">archive</span>             List all 74 archived code projects`,
          `<span class="wt-g">cat &lt;name&gt;</span>          Inspect any project, song, film or script`,
          `<span class="wt-g">open &lt;name&gt;</span>         Launch link directly`,
          `<span class="wt-g">tree</span>                Show directory tree`,
          `<span class="wt-g">neofetch</span>            Display system &amp; owner info`,
          `<span class="wt-g">cls / clear</span>         Clear terminal output`,
          `<span class="wt-g">themes</span>              Open theme switcher`,
          `<span class="wt-g">original / exit</span>     Return to default site`,
        ], token, { minDelay: 55, maxDelay: 95, batch: 1 })
      } else if (cmd === 'cls' || cmd === 'clear') {
        outEl.innerHTML = ''
      } else if (cmd === 'neofetch') {
        await printNeofetch(token)
      } else if (cmd === 'whoami') {
        print('averybeuth\\visitor')
      } else if (cmd === 'tree') {
        await streamLines([
          `C:\\USERS\\VISITOR\\AVERYBEUTH.XYZ`,
          `├───photos   (375 color-ordered frames)`,
          `├───code     (15 main + 74 archive)`,
          `├───scripts  (original screenplays + PDFs)`,
          `├───music    (albums, EPs, singles + bebeat)`,
          `└───films    (short films + fifilm + LUTs)`,
        ], token, { minDelay: 70, maxDelay: 115, batch: 1 })
      } else if (cmd === 'dir' || cmd === 'ls') {
        const target = ['photos', 'code', 'scripts', 'music', 'films', 'home'].includes(arg) ? arg : cwd
        await listDir(target, token)
      } else if (cmd === 'cd') {
        if (!arg || arg === '~' || arg === '..' || arg === 'home') {
          cwd = 'home'; updatePrompt(); await listDir('home', token)
        } else if (['photos', 'code', 'scripts', 'music', 'films'].includes(arg)) {
          cwd = arg; updatePrompt(); await listDir(arg, token)
        } else if (arg === 'film') {
          cwd = 'films'; updatePrompt(); await listDir('films', token)
        } else {
          print(`<span class="wt-err">cd : Cannot find path '${esc(arg)}' because it does not exist.</span>`)
        }
      } else if (cmd === 'cat' || cmd === 'info' || cmd === 'open') {
        if (!arg) { print('<span class="wt-dim">Usage: cat &lt;name&gt;</span>') }
        else {
          const stopSpin = startSpinner(`Searching index for '${arg}'`, token)
          const [code, music, films, scripts] = await Promise.all([
            loadCodeData(meta.base), loadMusicData(meta.base), loadFilmsData(meta.base), loadScriptsData(meta.base), sleep(350),
          ])
          stopSpin()
          if (token !== streamToken) return
          const all = [...code.all, ...music, ...films, ...scripts]
          const match = all.find((x) => x.title.toLowerCase().includes(arg))
          if (!match) {
            print(`<span class="wt-err">No entry matching '${esc(arg)}'.</span>`)
          } else {
            await streamLines([
              `<span class="wt-c">[${esc(match.title)}]</span> <span class="wt-g">(${esc(match.tag)})</span>`,
              `  ${esc(match.desc)}`,
              ...(match.href ? [`  <a class="wt-link" href="${esc(match.href)}" target="_blank" rel="noopener">${esc(match.href)}</a>`] : []),
            ], token, { minDelay: 65, maxDelay: 105, batch: 1 })
            if (cmd === 'open' && match.href) window.open(match.href, '_blank', 'noopener,noreferrer')
          }
        }
      } else if (cmd === 'themes') {
        togglePopover(true)
      } else if (cmd === 'original' || cmd === 'exit') {
        selectTheme('original')
        return
      } else if (['photos', 'code', 'scripts', 'music', 'films'].includes(cmd)) {
        cwd = cmd; updatePrompt(); await listDir(cmd, token)
      } else {
        print(`<span class="wt-err">${esc(cmd)} : The term '${esc(cmd)}' is not recognized. Type 'help'.</span>`)
      }

      if (token === streamToken) setBusy(false)
    }

    outEl.addEventListener('click', (e) => {
      const m = e.target.closest('[data-wt-more]')
      if (m) { handleArchiveReply(m.dataset.wtMore); return }
      const r = e.target.closest('[data-wt-run]')
      if (r) { typeAndRun(r.dataset.wtRun); return }
      if (e.target.closest('[data-wt-themes-inline]')) { togglePopover(); return }
      if (e.target.closest('[data-wt-secrets-inline]')) { openSecretsModal(); return }
      if (e.target.closest('[data-wt-orig-inline]')) { selectTheme('original'); return }
    })
    shell.querySelectorAll('[data-wt-cmd]').forEach((b) => b.addEventListener('click', () => typeAndRun(b.dataset.wtCmd)))
    shell.querySelectorAll('[data-wt-themes]').forEach((b) => b.addEventListener('click', () => togglePopover()))
    shell.querySelectorAll('[data-wt-secrets]').forEach((b) => b.addEventListener('click', () => openSecretsModal()))
    shell.querySelectorAll('[data-wt-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
    screenEl.addEventListener('click', (e) => {
      if (!e.target.closest('a, button, input') && !isBusy) inputEl.focus()
    })

    ;['input', 'keyup', 'click', 'select', 'focus'].forEach((ev) => inputEl.addEventListener(ev, syncMirror))
    formEl.addEventListener('submit', (e) => {
      e.preventDefault()
      const v = inputEl.value
      inputEl.value = ''
      syncMirror()
      runCommand(v)
    })
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && history.length) {
        e.preventDefault()
        histIdx = Math.min(history.length - 1, histIdx + 1)
        inputEl.value = history[histIdx]
        syncMirror()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        histIdx = Math.max(-1, histIdx - 1)
        inputEl.value = histIdx >= 0 ? history[histIdx] : ''
        syncMirror()
      } else if (e.key === 'Tab') {
        e.preventDefault()
        const cur = inputEl.value.toLowerCase()
        const opts = ['cd photos', 'cd code', 'cd scripts', 'cd music', 'cd films', 'archive', 'neofetch', 'tree', 'secrets', 'help', 'clear', 'themes', 'original']
        const hit = opts.find((o) => o.startsWith(cur))
        if (hit) { inputEl.value = hit; syncMirror() }
      }
    })

    ;(async () => {
      const bootTok = ++streamToken
      setBusy(true)
      await streamLines([
        '<span class="wt-dim">Windows PowerShell</span>',
        '<span class="wt-dim">Copyright (C) Avery Beuth. All rights reserved.</span>',
      ], bootTok, { minDelay: 75, maxDelay: 120, batch: 1 })
      await printNeofetch(bootTok)
      if (bootTok !== streamToken) return
      setBusy(false)
      if (['photos', 'code', 'scripts', 'music', 'films'].includes(meta.slug)) {
        await typeAndRun(`cd ${meta.slug}`)
      }
    })()
  }

  /* ==========================================================================
     03: DESKTOP: TRUE MULTI-WINDOW WINDOWS 7 DESKTOP OS
     ========================================================================== */
  const mountDesktopOS = () => {
    const meta = getPageMeta()
    document.documentElement.classList.add('has-theme-takeover')

    const os = document.createElement('div')
    os.className = 'aero-os'
    os.setAttribute('data-theme-injected', '1')
    os.innerHTML = `
      <div class="aero-bg" aria-hidden="true">
        <span class="aero-bubble b1"></span><span class="aero-bubble b2"></span>
        <span class="aero-bubble b3"></span><span class="aero-bubble b4"></span>
        <span class="aero-bubble b5"></span><span class="aero-bubble b6"></span>
      </div>
      <nav class="aero-desktop-icons" aria-label="Desktop icons">
        <button type="button" class="aero-d-icon" data-os-open="photos"><span class="aero-d-glyph">${ICONS.photos}</span><span>Photos</span></button>
        <button type="button" class="aero-d-icon" data-os-open="code"><span class="aero-d-glyph">${ICONS.folder}</span><span>Code</span></button>
        <button type="button" class="aero-d-icon" data-os-open="scripts"><span class="aero-d-glyph">${ICONS.scripts}</span><span>Scripts</span></button>
        <button type="button" class="aero-d-icon" data-os-open="music"><span class="aero-d-glyph">${ICONS.music}</span><span>Music</span></button>
        <button type="button" class="aero-d-icon" data-os-open="films"><span class="aero-d-glyph">${ICONS.film}</span><span>Films</span></button>
        <button type="button" class="aero-d-icon" data-os-open="notes"><span class="aero-d-glyph">${ICONS.notes}</span><span>About.txt</span></button>
        <button type="button" class="aero-d-icon" data-os-open="recycle"><span class="aero-d-glyph">${ICONS.recycle}</span><span>Recycle Bin</span></button>
        <button type="button" class="aero-d-icon" data-a-themes><span class="aero-d-glyph">${ICONS.themes}</span><span>Themes</span></button>
        <button type="button" class="aero-d-icon" data-a-original><span class="aero-d-glyph">${ICONS.power}</span><span>Original</span></button>
      </nav>
      <div class="aero-desktop-hint" id="aeroDesktopHint">averybeuth.xyz &middot; click any icon or right-click the desktop</div>
      <div class="aero-win-layer" id="aeroWinLayer"></div>
      <footer class="aero-taskbar-global">
        <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">${ICONS.winOrb}</button>
        <div class="aero-task-list" id="aeroTaskList"></div>
        <button type="button" class="aero-task-tab" data-a-original>Original site</button>
        <button type="button" class="aero-tray-clock" id="aeroClock" title="System clock"><span id="aeroTime"></span><span id="aeroDate"></span></button>
      </footer>
    `
    document.body.appendChild(os)

    const aeroBg = os.querySelector('.aero-bg')
    const desktopIcons = os.querySelector('.aero-desktop-icons')
    const winLayer = os.querySelector('#aeroWinLayer')
    const taskList = os.querySelector('#aeroTaskList')
    const hintEl = os.querySelector('#aeroDesktopHint')

    const openWindows = new Map()
    let zTop = 30
    let spawnCount = 0
    let poppedTotal = 0
    let stickyCount = 0
    let binItems = [
      { name: 'download_ram.exe', size: '64 GB', note: 'failed at 99%' },
      { name: 'homework_final_FINAL_v3.docx', size: '412 KB', note: 'made code projects instead' },
      { name: 'unused_beats_2021.zip', size: '84 MB', note: 'too many hi-hats' },
    ]

    const syncHint = () => {
      if (hintEl) hintEl.style.opacity = openWindows.size === 0 ? '1' : '0'
    }

    // Desktop fun 1: Poppable Aero bubbles that respawn at brand-new random spots & sizes!
    const wireBubble = (b) => {
      b.addEventListener('click', (e) => {
        e.stopPropagation()
        if (b.classList.contains('is-popped')) return
        b.classList.add('is-popped')
        poppedTotal++
        if (hintEl && openWindows.size === 0 && poppedTotal >= 3) {
          hintEl.textContent = `bubbles popped: ${poppedTotal}`
        }
        setTimeout(() => {
          const size = Math.round(24 + Math.random() * 44)
          const left = (12 + Math.random() * 78).toFixed(1)
          const top = (10 + Math.random() * 68).toFixed(1)
          b.style.width = `${size}px`
          b.style.height = `${size}px`
          b.style.left = `${left}%`
          b.style.top = `${top}%`
          b.style.right = 'auto'
          b.style.bottom = 'auto'
          b.style.animationDuration = `${(6 + Math.random() * 5).toFixed(1)}s`
          b.classList.remove('is-popped')
        }, 780)
      })
    }
    os.querySelectorAll('.aero-bubble').forEach(wireBubble)

    const spawnExtraBubble = (clientX, clientY) => {
      const b = document.createElement('span')
      b.className = 'aero-bubble'
      const size = Math.round(28 + Math.random() * 34)
      b.style.width = `${size}px`
      b.style.height = `${size}px`
      b.style.left = `${Math.max(8, Math.min(window.innerWidth - size - 8, clientX - size / 2))}px`
      b.style.top = `${Math.max(8, Math.min(window.innerHeight - size - 56, clientY - size / 2))}px`
      b.style.animationDuration = `${(6 + Math.random() * 4).toFixed(1)}s`
      wireBubble(b)
      aeroBg.appendChild(b)
    }

    // Desktop fun 2: Spawn real draggable, editable Windows 7 Sticky Notes
    const spawnStickyNote = (clientX = null, clientY = null) => {
      stickyCount++
      zTop++
      const note = document.createElement('div')
      note.className = 'aero-sticky'
      note.style.zIndex = String(zTop)
      const prompts = [
        'remember to pop the bubbles',
        'right-click desktop for more sticky notes',
        'triple-click the clock if you dare',
        'type something here...',
      ]
      const startX = clientX != null ? Math.min(window.innerWidth - 230, Math.max(110, clientX)) : 180 + (stickyCount % 4) * 34
      const startY = clientY != null ? Math.min(window.innerHeight - 230, Math.max(30, clientY)) : 70 + (stickyCount % 4) * 28
      note.style.left = `${startX}px`
      note.style.top = `${startY}px`
      note.innerHTML = `
        <div class="aero-sticky-bar">
          <button type="button" data-st-add title="New note">+</button>
          <span>Sticky Note</span>
          <button type="button" data-st-close title="Close">&times;</button>
        </div>
        <textarea class="aero-sticky-text" spellcheck="false">${prompts[(stickyCount - 1) % prompts.length]}</textarea>
      `
      winLayer.appendChild(note)
      const cleanup = makeWindowDraggable(note, note.querySelector('.aero-sticky-bar'), () => {
        zTop++
        note.style.zIndex = String(zTop)
      })
      note.querySelector('[data-st-add]').addEventListener('click', () => spawnStickyNote())
      note.querySelector('[data-st-close]').addEventListener('click', () => { cleanup(); note.remove() })
      cleanupFns.push(cleanup)
    }

    // Desktop fun 3: Real Windows 7 Right-Click Desktop Context Menu (with hidden secrets entry!)
    let ctxMenu = null
    const closeCtxMenu = () => { if (ctxMenu) { ctxMenu.remove(); ctxMenu = null } }
    os.addEventListener('contextmenu', (e) => {
      if (e.target.closest('.aero-os-win, .aero-sticky, .aero-taskbar-global')) return
      e.preventDefault()
      closeCtxMenu()
      ctxMenu = document.createElement('div')
      ctxMenu.className = 'aero-ctx'
      const mx = Math.min(window.innerWidth - 196, Math.max(8, e.clientX))
      const my = Math.min(window.innerHeight - 210, Math.max(8, e.clientY))
      ctxMenu.style.left = `${mx}px`
      ctxMenu.style.top = `${my}px`
      ctxMenu.innerHTML = `
        <button type="button" data-ctx="refresh">Refresh</button>
        <button type="button" data-ctx="sticky">New Sticky Note</button>
        <button type="button" data-ctx="bubble">Spawn Aero Bubble</button>
        <button type="button" data-ctx="themes">Personalize (Themes)</button>
        <button type="button" class="is-faint" data-ctx="secrets">secrets...</button>
      `
      ctxMenu.addEventListener('click', (ev) => {
        const act = ev.target.closest('[data-ctx]')?.dataset.ctx
        closeCtxMenu()
        if (act === 'refresh') {
          desktopIcons?.classList.add('is-refreshing')
          setTimeout(() => desktopIcons?.classList.remove('is-refreshing'), 140)
        } else if (act === 'sticky') {
          spawnStickyNote(e.clientX, e.clientY)
        } else if (act === 'bubble') {
          spawnExtraBubble(e.clientX, e.clientY)
        } else if (act === 'themes') {
          togglePopover(true)
        } else if (act === 'secrets') {
          openSecretsModal()
        }
      })
      os.appendChild(ctxMenu)
    })
    const onGlobalPointer = (e) => { if (ctxMenu && !e.target.closest('.aero-ctx')) closeCtxMenu() }
    window.addEventListener('pointerdown', onGlobalPointer)
    cleanupFns.push(() => { closeCtxMenu(); window.removeEventListener('pointerdown', onGlobalPointer) })

    // Desktop fun 4: Authentic Windows 7 translucent blue drag-select marquee box
    const marquee = document.createElement('div')
    marquee.className = 'aero-marquee'
    marquee.hidden = true
    os.appendChild(marquee)

    const allIcons = [...os.querySelectorAll('.aero-d-icon')]
    const clearIconSelection = () => allIcons.forEach((ic) => ic.classList.remove('is-selected'))
    let selStart = null
    let selDragging = false

    const onDesktopDown = (e) => {
      if (e.button !== 0) return
      if (e.target.closest('.aero-os-win, .aero-sticky, .aero-taskbar-global, .aero-ctx, .aero-d-icon, .aero-bubble, .aero-bsod')) return
      clearIconSelection()
      selStart = { x: e.clientX, y: e.clientY }
      selDragging = false
    }
    const onDesktopMove = (e) => {
      if (!selStart) return
      const dx = e.clientX - selStart.x
      const dy = e.clientY - selStart.y
      if (!selDragging && Math.hypot(dx, dy) > 4) {
        selDragging = true
        marquee.hidden = false
        os.classList.add('is-selecting')
      }
      if (!selDragging) return
      const left = Math.min(selStart.x, e.clientX)
      const top = Math.min(selStart.y, e.clientY)
      const width = Math.abs(dx)
      const height = Math.abs(dy)
      marquee.style.left = `${left}px`
      marquee.style.top = `${top}px`
      marquee.style.width = `${width}px`
      marquee.style.height = `${height}px`

      const right = left + width
      const bottom = top + height
      allIcons.forEach((ic) => {
        const r = ic.getBoundingClientRect()
        const hit = !(r.right < left || r.left > right || r.bottom < top || r.top > bottom)
        ic.classList.toggle('is-selected', hit)
      })
    }
    const onDesktopUp = () => {
      if (!selStart) return
      selStart = null
      if (selDragging) {
        selDragging = false
        marquee.hidden = true
        os.classList.remove('is-selecting')
      }
    }
    const onDesktopKey = (e) => {
      if (e.key !== 'Enter' || e.target.closest('input, textarea, button')) return
      const picked = allIcons.filter((ic) => ic.classList.contains('is-selected'))
      if (!picked.length) return
      e.preventDefault()
      picked.forEach((ic) => {
        if (ic.dataset.osOpen) openOsWindow(ic.dataset.osOpen)
        else if (ic.hasAttribute('data-a-themes')) togglePopover(true)
        else if (ic.hasAttribute('data-a-original')) selectTheme('original')
      })
      clearIconSelection()
    }
    os.addEventListener('pointerdown', onDesktopDown)
    window.addEventListener('pointermove', onDesktopMove)
    window.addEventListener('pointerup', onDesktopUp)
    window.addEventListener('keydown', onDesktopKey)
    cleanupFns.push(() => {
      os.removeEventListener('pointerdown', onDesktopDown)
      window.removeEventListener('pointermove', onDesktopMove)
      window.removeEventListener('pointerup', onDesktopUp)
      window.removeEventListener('keydown', onDesktopKey)
    })

    // Desktop secret 4: triple-click the taskbar clock for classic Windows 7 BSOD
    let clockClicks = 0
    let clockTimer = null
    os.querySelector('#aeroClock')?.addEventListener('click', () => {
      clockClicks++
      clearTimeout(clockTimer)
      clockTimer = setTimeout(() => { clockClicks = 0 }, 900)
      if (clockClicks >= 3) {
        clockClicks = 0
        if (os.querySelector('.aero-bsod')) return
        const bsod = document.createElement('div')
        bsod.className = 'aero-bsod'
        bsod.innerHTML = `
          <div class="aero-bsod-inner">
            <p>A problem has been detected and averybeuth.xyz has been shut down to prevent excessive nostalgia.</p>
            <p>TOO_MUCH_FRUTIGER_AERO</p>
            <p>If this is the first time you've seen this stop error screen, click anywhere or press any key to reboot the desktop.</p>
            <p>Technical information:</p>
            <p>*** STOP: 0x00000042 (0xAVERY000, 0x00000007, 0x00000375, 0x00000089)</p>
            <p>*** aero_glass.sys - Address FFFFF88001A4B000 base at FFFFF88001A00000</p>
            <p class="aero-bsod-dismiss">[ click anywhere to reboot desktop ]</p>
          </div>
        `
        const dismiss = () => {
          window.removeEventListener('keydown', dismiss)
          bsod.remove()
        }
        bsod.addEventListener('click', dismiss)
        window.addEventListener('keydown', dismiss)
        os.appendChild(bsod)
      }
    })

    const focusWin = (appId) => {
      const rec = openWindows.get(appId)
      if (!rec) return
      zTop++
      rec.el.style.zIndex = String(zTop)
      rec.el.classList.remove('is-minimized')
      openWindows.forEach((v, k) => {
        v.el.classList.toggle('is-focused', k === appId)
        v.taskBtn.classList.toggle('is-active', k === appId)
      })
    }

    const closeWin = (appId) => {
      const rec = openWindows.get(appId)
      if (!rec) return
      rec.cleanupDrag?.()
      rec.el.remove()
      rec.taskBtn.remove()
      openWindows.delete(appId)
      os.querySelector(`[data-os-open="${appId}"]`)?.classList.remove('is-current')
      syncHint()
    }

    const createExplorerContent = async (appId, bodyEl, crumbEl, statusEl, searchEl) => {
      let folders = [], items = [], iconSvg = ICONS.code, isPhotoGallery = false

      if (appId === 'code') {
        const d = await loadCodeData(meta.base)
        items = d.all
        iconSvg = ICONS.code
        folders = [
          { id: 'main', label: 'Main', count: d.main.length },
          { id: 'archive', label: 'Archive', count: d.archive.length },
          { id: 'all', label: 'All Projects', count: d.all.length },
          { id: 'cat:tool', label: 'Tools', count: d.all.filter((i) => i.tag === 'tool').length },
          { id: 'cat:app', label: 'Apps', count: d.all.filter((i) => i.tag === 'app' || i.tag === 'apps').length },
          { id: 'cat:game', label: 'Games', count: d.all.filter((i) => i.tag === 'game').length },
          { id: 'cat:website', label: 'Websites', count: d.all.filter((i) => i.tag === 'website').length },
        ]
      } else if (appId === 'music') {
        items = await loadMusicData(meta.base)
        iconSvg = ICONS.music
        folders = [
          { id: 'all', label: 'All Releases', count: items.length },
          { id: 'albums', label: 'Albums & EPs', count: items.filter((i) => i.folder === 'albums').length },
          { id: 'singles', label: 'Singles', count: items.filter((i) => i.folder === 'singles').length },
        ]
      } else if (appId === 'films') {
        items = await loadFilmsData(meta.base)
        iconSvg = ICONS.film
        folders = [{ id: 'all', label: 'Short Films', count: items.length }]
      } else if (appId === 'scripts') {
        items = await loadScriptsData(meta.base)
        iconSvg = ICONS.scripts
        folders = [{ id: 'all', label: 'Screenplays', count: items.length }]
      } else if (appId === 'photos') {
        isPhotoGallery = true
        const photos = await loadColorOrderedPhotos(meta.base)
        items = photos.map((p, idx) => ({
          title: p.name, file: p.file, img: p.thumb, full: p.full, width: p.width, height: p.height,
          tag: p.hex.toUpperCase(), hex: p.hex,
          desc: `${p.width} × ${p.height} px · Dominant ${p.hex.toUpperCase()} · Color spectrum #${idx + 1} (double-click to enlarge)`,
          folder: p.bucket, folderLabel: p.bucket, typeLabel: 'JPG',
        }))
        folders = [
          { id: 'all', label: 'All Colors', count: items.length },
          { id: 'warm', label: 'Warm / Red', count: items.filter((i) => i.folder === 'warm').length },
          { id: 'gold', label: 'Gold / Yellow', count: items.filter((i) => i.folder === 'gold').length },
          { id: 'green', label: 'Green', count: items.filter((i) => i.folder === 'green').length },
          { id: 'blue', label: 'Blue / Cyan', count: items.filter((i) => i.folder === 'blue').length },
          { id: 'violet', label: 'Violet', count: items.filter((i) => i.folder === 'violet').length },
          { id: 'mono', label: 'Monochrome', count: items.filter((i) => i.folder === 'mono').length },
        ]
      }

      const treeEl = bodyEl.querySelector('.aero-exp-tree-slot')
      const listEl = bodyEl.querySelector('.aero-exp-list')
      const prevEl = bodyEl.querySelector('.aero-exp-preview')
      let activeFolder = folders[0]?.id || 'all'
      let query = ''
      let selected = null
      let activeSc = ''

      const getFiltered = () => items.filter((it) => {
        if (activeFolder !== 'all') {
          if (activeFolder.startsWith('cat:')) {
            const c = activeFolder.slice(4)
            if (c === 'app') { if (it.tag !== 'app' && it.tag !== 'apps') return false }
            else if (it.tag !== c) return false
          } else if (it.folder !== activeFolder) return false
        }
        if (query && !`${it.title} ${it.tag} ${it.desc}`.toLowerCase().includes(query)) return false
        return true
      })

      const renderPreview = (it, list) => {
        activeSc = ''
        if (!it) { prevEl.innerHTML = '<div class="aero-prev-empty">Select an item to preview.</div>'; return }
        const mediaHtml = it.embed
          ? `<div class="aero-prev-video"><iframe src="${esc(it.embed)}" title="${esc(it.title)}" allowfullscreen></iframe></div>`
          : it.img
            ? `<div class="aero-prev-img-wrap ${it.squareArt ? 'is-square' : ''}" data-prev-media title="${isPhotoGallery ? 'Double-click for fullscreen' : ''}"><img src="${esc(it.full || it.img)}" alt="${esc(it.title)}" /></div>`
            : `<div class="aero-prev-doc-icon">${iconSvg}</div>`
        const scHtml = it.soundcloud
          ? `<button type="button" class="aero-prev-btn" data-sc-toggle>Play SoundCloud Preview</button><div data-sc-slot></div>`
          : ''
        const photoNav = isPhotoGallery
          ? `<div class="aero-prev-pnav"><button type="button" class="aero-prev-btn is-secondary" data-p-prev>&lsaquo; Prev</button><button type="button" class="aero-prev-btn is-secondary" data-p-next>Next &rsaquo;</button></div><button type="button" class="aero-prev-btn" data-p-full>Fullscreen Preview</button>`
          : ''
        const linksHtml = it.links?.length
          ? it.links.map((l) => `<a class="aero-prev-btn is-secondary" href="${esc(l.href)}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${esc(l.label)}</a>`).join('')
          : it.href && it.href !== '#'
            ? `<a class="aero-prev-btn" href="${esc(it.href)}" ${it.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>Open ${esc(it.title)} &raquo;</a>`
            : ''
        const swatch = it.hex ? `<span class="aero-hex-pill"><i style="background:${it.hex}"></i>${esc(it.tag)}</span>` : `<span class="aero-prev-tag">${esc(it.tag)}</span>`

        prevEl.innerHTML = `
          ${mediaHtml}
          <div class="aero-prev-meta"><h3 class="aero-prev-title">${esc(it.title)}</h3>${swatch}</div>
          <p class="aero-prev-desc">${esc(it.desc)}</p>
          <div class="aero-prev-actions">${scHtml}${photoNav}${linksHtml}</div>
        `

        prevEl.querySelector('[data-sc-toggle]')?.addEventListener('click', (e) => {
          const slot = prevEl.querySelector('[data-sc-slot]')
          if (activeSc === it.soundcloud) { activeSc = ''; slot.innerHTML = ''; e.target.textContent = 'Play SoundCloud Preview'; return }
          activeSc = it.soundcloud
          const isSet = it.soundcloud.includes('/sets/')
          const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(it.soundcloud)}&color=%232b89d8&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`
          slot.innerHTML = `<iframe class="aero-sc-iframe" title="SoundCloud preview" width="100%" height="${isSet ? 220 : 115}" scrolling="no" frameborder="no" allow="autoplay" src="${src}"></iframe>`
          e.target.textContent = 'Stop Preview'
        })
        prevEl.querySelector('[data-p-prev]')?.addEventListener('click', () => {
          const curIdx = list.indexOf(it)
          if (curIdx > 0) { selected = list[curIdx - 1]; renderList() }
        })
        prevEl.querySelector('[data-p-next]')?.addEventListener('click', () => {
          const curIdx = list.indexOf(it)
          if (curIdx >= 0 && curIdx < list.length - 1) { selected = list[curIdx + 1]; renderList() }
        })
        const openFull = () => { if (isPhotoGallery) openPhotoLightbox(list, list.indexOf(it)) }
        prevEl.querySelector('[data-p-full]')?.addEventListener('click', openFull)
        const prevMedia = prevEl.querySelector('[data-prev-media]')
        if (prevMedia && isPhotoGallery) {
          prevMedia.style.cursor = 'pointer'
          prevMedia.title = 'Click for fullscreen preview'
          prevMedia.addEventListener('click', openFull)
        }
      }

      const renderFolders = () => {
        treeEl.innerHTML = folders.map((f) => `
          <button type="button" class="aero-tree-item ${f.id === activeFolder ? 'is-selected' : ''}" data-fid="${esc(f.id)}">
            ${ICONS.folder}<span>${esc(f.label)}</span><em>${f.count}</em>
          </button>
        `).join('')
        treeEl.querySelectorAll('[data-fid]').forEach((b) => b.addEventListener('click', () => {
          activeFolder = b.dataset.fid
          renderFolders()
          renderList()
        }))
      }

      const renderList = () => {
        const list = getFiltered()
        const fObj = folders.find((f) => f.id === activeFolder)
        crumbEl.innerHTML = `Computer &rsaquo; Avery &rsaquo; ${esc(appId[0].toUpperCase() + appId.slice(1))} &rsaquo; <strong>${esc(fObj?.label || 'All')}</strong>`
        statusEl.textContent = `${list.length} ${list.length === 1 ? 'item' : 'items'}`
        if (!list.length) { listEl.innerHTML = '<div class="aero-empty-folder">No matching items.</div>'; selected = null; renderPreview(null, list); return }
        if (!selected || !list.includes(selected)) selected = list[0]

        if (isPhotoGallery) {
          listEl.classList.add('is-photo-grid')
          listEl.innerHTML = list.map((it, idx) => `
            <button type="button" class="aero-photo-tile ${it === selected ? 'is-selected' : ''}" data-idx="${idx}" title="${esc(it.title)} (${it.hex}) · click preview for fullscreen">
              <img src="${esc(it.img)}" alt="${esc(it.title)}" loading="lazy" />
              <span class="aero-photo-chip" style="background:${it.hex}"></span>
            </button>
          `).join('')
        } else {
          listEl.classList.remove('is-photo-grid')
          listEl.innerHTML = list.map((it, idx) => `
            <button type="button" class="aero-file-row ${it === selected ? 'is-selected' : ''}" data-idx="${idx}">
              <span class="aero-file-name">${iconSvg}<span>${esc(it.title)}</span></span>
              <span class="aero-file-type">${esc(it.typeLabel)}</span>
              <span class="aero-file-folder">${esc(it.folderLabel)}</span>
            </button>
          `).join('')
        }

        listEl.querySelectorAll('[data-idx]').forEach((btn) => {
          const idx = Number(btn.dataset.idx)
          const item = list[idx]
          btn.addEventListener('click', () => {
            selected = item
            listEl.querySelectorAll('[data-idx]').forEach((r) => r.classList.toggle('is-selected', r === btn))
            renderPreview(item, list)
          })
          btn.addEventListener('dblclick', () => {
            if (isPhotoGallery) { openPhotoLightbox(list, idx); return }
            if (!item.href || item.href === '#') return
            if (item.external) window.open(item.href, '_blank', 'noopener,noreferrer')
            else window.location.href = item.href
          })
        })
        renderPreview(selected, list)
      }

      searchEl?.addEventListener('input', () => {
        query = (searchEl.value || '').trim().toLowerCase()
        renderList()
      })
      renderFolders()
      renderList()
    }

    const openOsWindow = (appId) => {
      if (openWindows.has(appId)) { focusWin(appId); return }
      const titles = {
        photos: 'Photos | Windows Photo Gallery',
        code: 'Code | Windows Explorer',
        music: 'Music | Windows Explorer',
        films: 'Films | Windows Explorer',
        scripts: 'Scripts | Windows Explorer',
        notes: 'About.txt | Notepad',
        recycle: 'Recycle Bin | Windows Explorer',
      }
      const winTitle = titles[appId] || 'Window'
      const offsetX = (spawnCount % 5) * 36
      const offsetY = (spawnCount % 5) * 28
      spawnCount++

      const winEl = document.createElement('section')
      winEl.className = (appId === 'notes' || appId === 'recycle') ? 'aero-os-win is-notepad' : 'aero-os-win is-explorer'
      winEl.dataset.wx = String(offsetX)
      winEl.dataset.wy = String(offsetY)

      if (appId === 'notes') {
        winEl.innerHTML = `
          <div class="aero-win-titlebar aero-win-handle">
            <span class="aero-win-title">${esc(winTitle)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-w-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-w-close title="Close">&times;</button>
            </div>
          </div>
          <div class="aero-note-body">
            <p><strong>Avery Beuth</strong> (@avery.beuth)</p>
            <p>Photographer, filmmaker, composer &amp; developer from Aotearoa.</p>
            <p>Open multiple windows at once, drag titlebars to arrange them, right-click the wallpaper for sticky notes, or pop the bubbles.</p>
            <p><a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a> &middot; <a href="mailto:averybeuth3@gmail.com">averybeuth3@gmail.com</a></p>
            <button type="button" class="aero-note-secret" data-note-secrets>psst: secrets</button>
          </div>
        `
      } else if (appId === 'recycle') {
        winEl.innerHTML = `
          <div class="aero-win-titlebar aero-win-handle">
            <span class="aero-win-title">${esc(winTitle)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-w-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-w-close title="Close">&times;</button>
            </div>
          </div>
          <div class="aero-bin-bar">
            <button type="button" class="aero-cmd-btn" data-bin-empty>Empty Recycle Bin</button>
            <span class="aero-bin-count" data-bin-count></span>
          </div>
          <div class="aero-note-body aero-bin-body" data-bin-list></div>
        `
      } else {
        const extraToolbar = appId === 'music'
          ? '<a class="aero-cmd-btn" href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">Open bebeat</a>'
          : appId === 'films'
            ? '<a class="aero-cmd-btn" href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">guides/LUTs</a><a class="aero-cmd-btn" href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">fifilm</a>'
            : ''
        winEl.innerHTML = `
          <div class="aero-win-titlebar aero-win-handle">
            <span class="aero-win-title">${esc(winTitle)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-w-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-w-close title="Close">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${ICONS.backArrow}</span><span>${ICONS.fwdArrow}</span></div>
            <div class="aero-breadcrumb">Loading...</div>
            <input type="search" class="aero-exp-search" placeholder="Search ${esc(appId)}..." aria-label="Search" />
          </div>
          <div class="aero-cmd-bar">
            <button type="button" class="aero-cmd-btn" data-w-themes>Themes</button>
            ${extraToolbar}
            <button type="button" class="aero-cmd-btn" data-w-open-other="photos">Photos</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="code">Code</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="music">Music</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="films">Films</button>
          </div>
          <div class="aero-exp-body">
            <aside class="aero-exp-tree"><div class="aero-tree-head">Folders</div><div class="aero-exp-tree-slot"></div></aside>
            <div class="aero-exp-list-wrap">
              ${appId === 'photos' ? '' : '<div class="aero-exp-cols"><span>Name</span><span>Type</span><span>Folder</span></div>'}
              <div class="aero-exp-list"><div class="aero-empty-folder">Loading...</div></div>
            </div>
            <aside class="aero-exp-preview"><div class="aero-prev-empty">Loading preview...</div></aside>
          </div>
          <div class="aero-exp-status"><span class="aero-st-count">Loading...</span><span>Drag titlebar to move &middot; Click preview for fullscreen</span></div>
        `
      }

      winLayer.appendChild(winEl)
      const taskBtn = document.createElement('button')
      taskBtn.type = 'button'
      taskBtn.className = 'aero-task-tab is-active'
      taskBtn.textContent = winTitle.split(' | ')[0]
      taskBtn.addEventListener('click', () => {
        if (winEl.classList.contains('is-minimized')) focusWin(appId)
        else if (winEl.classList.contains('is-focused')) { winEl.classList.add('is-minimized'); taskBtn.classList.remove('is-active') }
        else focusWin(appId)
      })
      taskList.appendChild(taskBtn)
      os.querySelector(`[data-os-open="${appId}"]`)?.classList.add('is-current')

      const cleanupDrag = makeWindowDraggable(winEl, winEl.querySelector('.aero-win-handle'), () => focusWin(appId))
      openWindows.set(appId, { el: winEl, taskBtn, cleanupDrag })
      focusWin(appId)
      syncHint()

      winEl.querySelector('[data-w-min]')?.addEventListener('click', () => {
        winEl.classList.add('is-minimized')
        taskBtn.classList.remove('is-active')
      })
      winEl.querySelector('[data-w-close]')?.addEventListener('click', () => closeWin(appId))
      winEl.querySelector('[data-w-themes]')?.addEventListener('click', () => togglePopover())
      winEl.querySelector('[data-note-secrets]')?.addEventListener('click', () => openSecretsModal())
      winEl.querySelectorAll('[data-w-open-other]').forEach((b) => b.addEventListener('click', () => openOsWindow(b.dataset.wOpenOther)))

      if (appId === 'recycle') {
        const listSlot = winEl.querySelector('[data-bin-list]')
        const countSlot = winEl.querySelector('[data-bin-count]')
        const drawBin = () => {
          if (!binItems.length) {
            listSlot.innerHTML = '<p style="color:#678099;">Recycle Bin is empty. Desktop feels 4% lighter.</p>'
            countSlot.textContent = '0 items'
            return
          }
          countSlot.textContent = `${binItems.length} items`
          listSlot.innerHTML = binItems.map((b) => `<div class="aero-bin-row"><strong>${esc(b.name)}</strong><span>${esc(b.size)}</span><em>${esc(b.note)}</em></div>`).join('')
        }
        winEl.querySelector('[data-bin-empty]')?.addEventListener('click', () => {
          binItems = []
          drawBin()
        })
        drawBin()
      } else if (appId !== 'notes') {
        createExplorerContent(
          appId,
          winEl.querySelector('.aero-exp-body'),
          winEl.querySelector('.aero-breadcrumb'),
          winEl.querySelector('.aero-st-count'),
          winEl.querySelector('.aero-exp-search')
        )
      }
    }

    os.querySelectorAll('[data-os-open]').forEach((b) => b.addEventListener('click', () => openOsWindow(b.dataset.osOpen)))
    os.querySelectorAll('[data-a-themes]').forEach((b) => b.addEventListener('click', () => togglePopover()))
    os.querySelectorAll('[data-a-secrets]').forEach((b) => b.addEventListener('click', () => openSecretsModal()))
    os.querySelectorAll('[data-a-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))

    const tick = () => {
      const now = new Date()
      const tEl = document.getElementById('aeroTime')
      const dEl = document.getElementById('aeroDate')
      if (tEl) tEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      if (dEl) dEl.textContent = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' })
    }
    tick()
    const cid = setInterval(tick, 15000)
    cleanupFns.push(() => {
      clearInterval(cid)
      openWindows.forEach((v) => v.cleanupDrag?.())
      openWindows.clear()
    })

    if (['photos', 'code', 'music', 'films', 'scripts'].includes(meta.slug)) {
      openOsWindow(meta.slug)
    }
  }

  /* ==========================================================================
     SHARED COLOR-ORDERED 2D PHOTO GRID HELPER (reusable in Silly, Paper, Cobalt)
     ========================================================================== */
  const renderPhotoArchiveInto = (containerEl, photos, themeId, initialLimit = 60) => {
    let bucket = 'all'
    let showAll = false
    const sillyCaptions = ['took this one', 'good lighting', 'nice color', 'camera worked', 'found this outside', 'pretty neat', 'yes']

    containerEl.innerHTML = `
      <div class="tp-filters" data-tp-filters>
        <button type="button" class="is-active" data-bucket="all">All (${photos.length})</button>
        <button type="button" data-bucket="warm">Warm</button>
        <button type="button" data-bucket="gold">Gold</button>
        <button type="button" data-bucket="green">Green</button>
        <button type="button" data-bucket="blue">Blue</button>
        <button type="button" data-bucket="violet">Violet</button>
        <button type="button" data-bucket="mono">Monochrome</button>
      </div>
      <div class="tp-grid" data-tp-grid></div>
      <div class="tp-more-wrap" data-tp-more></div>
    `

    const grid = containerEl.querySelector('[data-tp-grid]')
    const filters = containerEl.querySelector('[data-tp-filters]')
    const moreWrap = containerEl.querySelector('[data-tp-more]')

    const draw = () => {
      const fullList = bucket === 'all' ? photos : photos.filter((p) => p.bucket === bucket)
      const visible = showAll ? fullList : fullList.slice(0, initialLimit)
      grid.innerHTML = visible.map((p, idx) => {
        const cap = themeId === 'silly'
          ? sillyCaptions[idx % sillyCaptions.length]
          : themeId === 'paper'
            ? `PLATE ${String(idx + 1).padStart(3, '0')} · ${p.hex.toUpperCase()}`
            : `SPEC-${String(idx + 1).padStart(3, '0')} // ${p.hex.toUpperCase()}`
        return `
          <button type="button" class="tp-card" data-pidx="${idx}" title="Click or double-click for fullscreen">
            ${themeId === 'silly' ? '<span class="tp-tape" aria-hidden="true"></span>' : ''}
            <div class="tp-img-wrap"><img src="${esc(p.thumb)}" alt="${esc(p.name)}" loading="lazy" /></div>
            <div class="tp-cap"><i style="background:${p.hex}"></i><span>${esc(cap)}</span></div>
          </button>
        `
      }).join('')

      const onOpen = (e) => {
        const card = e.target.closest('[data-pidx]')
        if (card) openPhotoLightbox(fullList, Number(card.dataset.pidx))
      }
      grid.onclick = onOpen
      grid.ondblclick = onOpen

      if (!showAll && fullList.length > initialLimit) {
        moreWrap.innerHTML = `<button type="button" class="tp-more-btn">Show all ${fullList.length} photos</button>`
        moreWrap.querySelector('button').addEventListener('click', () => { showAll = true; draw() })
      } else {
        moreWrap.innerHTML = ''
      }
    }

    filters.addEventListener('click', (e) => {
      const b = e.target.closest('[data-bucket]')
      if (!b) return
      bucket = b.dataset.bucket
      showAll = false
      filters.querySelectorAll('button').forEach((x) => x.classList.toggle('is-active', x === b))
      draw()
    })
    draw()
  }

  /* ==========================================================================
     04: SILLY: Dry Deadpan Comic Sans (Fall-Over Physics, Fake Guestbook, Gags)
     ========================================================================== */
  const mountSilly = () => {
    const meta = getPageMeta()
    if (isPhotosQuery()) {
      const page = document.createElement('main')
      page.className = 'theme-photos-page is-silly'
      page.setAttribute('data-theme-injected', '1')
      page.innerHTML = `
        <header class="tp-head">
          <nav class="silly-sub-nav">
            <a href="./">home</a>
            <a href="./?photos=1" class="is-on">photos</a>
            <a href="./code.html">code</a>
            <a href="./scripts/index.html">scripts</a>
            <a href="./music.html">music</a>
            <a href="./film.html">films</a>
            <button type="button" data-tp-themes>themes</button>
            <button type="button" data-tp-orig>normal site</button>
          </nav>
          <h1>photos (sorted by color)</h1>
          <p>click any photo to look at it bigger. the tape is decorative.</p>
        </header>
        <div id="sillyPhotoSlot"><div class="tp-loading">Sorting 375 photos by color...</div></div>
      `
      document.body.appendChild(page)
      page.querySelector('[data-tp-themes]')?.addEventListener('click', () => togglePopover())
      page.querySelector('[data-tp-orig]')?.addEventListener('click', () => selectTheme('original'))
      loadColorOrderedPhotos('.').then((photos) => renderPhotoArchiveInto(page.querySelector('#sillyPhotoSlot'), photos, 'silly', 80))
      return
    }

    if (isHomeDocument()) {
      let hits = Number(sessionStorage.getItem('avery_silly_hits') || '42') + 1
      sessionStorage.setItem('avery_silly_hits', String(hits))
      let tiltClicks = 0
      let fontLevel = 0

      const home = document.createElement('main')
      home.className = 'theme-home theme-home-silly'
      home.setAttribute('data-theme-injected', '1')
      home.innerHTML = `
        <div class="silly-sheet" id="sillySheet">
          <div class="silly-top-doodle">
            <button type="button" class="silly-face-btn" id="sillyFace" aria-label="Paint smiley">${ICONS.paintFace}</button>
            <div>
              <h1 id="sillyTitle" style="cursor:pointer;">avery beuth</h1>
              <p class="silly-sub">(graphic design is my passion)</p>
            </div>
          </div>
          <p class="silly-note">welcome to the comic sans edition of my website. everything still works, it just looks like i built it in paint.</p>
          <div class="silly-links-wrap">
            <a class="silly-link-box" href="./?photos=1"><strong>photos</strong><span>375 color-sorted, taped to the fridge</span></a>
            <a class="silly-link-box" href="./code.html"><strong>code</strong><span>89+ things i made instead of studying</span></a>
            <a class="silly-link-box" href="./scripts/index.html"><strong>scripts</strong><span>words people say in movies</span></a>
            <a class="silly-link-box" href="./music.html"><strong>music</strong><span>beeps, boops and piano</span></a>
            <a class="silly-link-box" href="./film.html"><strong>films</strong><span>moving pictures with sound</span></a>
          </div>
          <div class="silly-gags">
            <button type="button" class="silly-gag-btn" id="sillyHitBtn">visitor #<span id="sillyHits">${String(hits).padStart(6, '0')}</span></button>
            <button type="button" class="silly-gag-btn" id="sillyGuestBtn">sign guestbook</button>
            <button type="button" class="silly-gag-btn" id="sillyFontBtn">make font bigger</button>
            <button type="button" class="silly-gag-btn" id="sillyDarkBtn">dark mode</button>
            <button type="button" class="silly-gag-btn is-red" id="sillyTiltBtn">do not press</button>
          </div>
          <form class="silly-guest-form" id="sillyGuestForm" hidden autocomplete="off">
            <input type="text" id="sillyGuestInput" placeholder="type your name..." maxlength="36" required />
            <button type="submit">sign</button>
          </form>
          <p class="silly-gag-msg" id="sillyMsg"></p>
          <div class="silly-guest-log" id="sillyGuestLog"></div>
          <div class="silly-foot">
            <button type="button" class="silly-hidden-secret" data-s-secrets>best viewed in 800&times;600</button>
            <div>
              <button type="button" data-s-themes>themes</button>
              <button type="button" data-s-original>normal website</button>
            </div>
          </div>
        </div>
        <div class="silly-fallen-rescue" id="sillyRescue" hidden>
          <p>well done. you knocked the entire website over.</p>
          <button type="button" id="sillyPickUp">pick the website back up</button>
        </div>
      `
      document.body.appendChild(home)

      const sheet = home.querySelector('#sillySheet')
      const msgEl = home.querySelector('#sillyMsg')
      const rescue = home.querySelector('#sillyRescue')
      const guestForm = home.querySelector('#sillyGuestForm')
      const guestInput = home.querySelector('#sillyGuestInput')
      const guestLog = home.querySelector('#sillyGuestLog')

      home.querySelector('#sillyHitBtn')?.addEventListener('click', () => {
        hits++
        sessionStorage.setItem('avery_silly_hits', String(hits))
        home.querySelector('#sillyHits').textContent = String(hits).padStart(6, '0')
        msgEl.textContent = 'congrats you inflated my analytics'
      })

      let facePokes = 0
      const faceBtn = home.querySelector('#sillyFace')
      faceBtn?.addEventListener('click', () => {
        facePokes++
        faceBtn.style.transform = `rotate(${(facePokes % 2 ? 1 : -1) * 16}deg) scale(1.12)`
        setTimeout(() => { faceBtn.style.transform = '' }, 220)
        if (facePokes === 1) msgEl.textContent = 'hey dont poke me'
        else if (facePokes === 2) msgEl.textContent = 'seriously stop poking my face'
        else if (facePokes === 3) msgEl.textContent = 'i am literally an svg'
        else {
          faceBtn.innerHTML = `<svg viewBox="0 0 44 44" width="38" height="38" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="#fff59d" stroke="#1c1c1c" stroke-width="2.4"/><rect x="10" y="14" width="10" height="6" rx="1.5" fill="#1c1c1c"/><rect x="24" y="14" width="10" height="6" rx="1.5" fill="#1c1c1c"/><path d="M20 16.5h4" stroke="#1c1c1c" stroke-width="2"/><path d="M14 27c3.5 3.5 12 4 16-0.5" fill="none" stroke="#1c1c1c" stroke-width="2.3" stroke-linecap="round"/></svg>`
          msgEl.textContent = 'fine. sunglasses mode activated.'
        }
      })

      home.querySelector('#sillyGuestBtn')?.addEventListener('click', () => {
        guestForm.hidden = !guestForm.hidden
        if (!guestForm.hidden) guestInput.focus()
      })
      guestForm?.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = (guestInput.value || '').trim()
        if (!name) return
        guestInput.value = ''
        const isAvery = name.toLowerCase().includes('avery')
        msgEl.textContent = `saving "${name}" to database...`
        setTimeout(() => {
          msgEl.textContent = isAvery
            ? 'wait thats my name. identity theft reported.'
            : 'just kidding theres no backend'
          const item = document.createElement('div')
          item.textContent = isAvery ? `${name} (imposter)` : `${name} (definitely not saved)`
          guestLog.appendChild(item)
        }, 650)
      })

      home.querySelector('#sillyFontBtn')?.addEventListener('click', (e) => {
        fontLevel = (fontLevel + 1) % 4
        const scales = ['1', '1.18', '1.38', '1.62']
        sheet.style.setProperty('--sf', scales[fontLevel])
        e.target.textContent = fontLevel === 3 ? 'ok make it normal again' : 'make font bigger'
        msgEl.textContent = fontLevel === 3 ? 'this is getting out of hand' : fontLevel === 0 ? 'back to reasonable sizing.' : 'bigger.'
      })

      home.querySelector('#sillyDarkBtn')?.addEventListener('click', () => {
        sheet.classList.add('is-cursed-dark')
        msgEl.textContent = ''
        setTimeout(() => {
          sheet.classList.remove('is-cursed-dark')
          msgEl.textContent = 'sorry i forgot to change the text color'
        }, 1250)
      })

      // Tilt -> topple / fall over when tilted too far!
      const angles = [0, 5, 13, 25, 42]
      home.querySelector('#sillyTiltBtn')?.addEventListener('click', () => {
        tiltClicks++
        if (tiltClicks < angles.length) {
          const deg = angles[tiltClicks]
          sheet.style.transform = `rotate(${deg}deg)`
          const warns = ['', 'i literally said do not press', 'it is starting to slide...', 'ok seriously stop pressing it', 'uh oh']
          msgEl.textContent = warns[tiltClicks] || 'uh oh'
          if (deg >= 40) {
            setTimeout(() => {
              sheet.classList.add('is-fallen')
              rescue.hidden = false
            }, 320)
          }
        }
      })
      home.querySelector('#sillyPickUp')?.addEventListener('click', () => {
        tiltClicks = 0
        sheet.classList.remove('is-fallen')
        sheet.style.transform = ''
        rescue.hidden = true
        msgEl.textContent = 'thank you. please do not press it again.'
      })

      home.querySelector('#sillyTitle')?.addEventListener('click', (e) => {
        const el = e.currentTarget
        el.classList.remove('silly-wobble')
        void el.offsetWidth
        el.classList.add('silly-wobble')
        msgEl.textContent = 'boing'
      })

      home.querySelector('[data-s-themes]')?.addEventListener('click', () => togglePopover())
      home.querySelector('[data-s-secrets]')?.addEventListener('click', () => openSecretsModal())
      home.querySelector('[data-s-original]')?.addEventListener('click', () => selectTheme('original'))
    } else {
      const pageWrap = document.querySelector('.page-wrap')
      if (!pageWrap) return
      const bar = document.createElement('nav')
      bar.className = 'silly-sub-nav'
      bar.setAttribute('data-theme-injected', '1')
      bar.innerHTML = `
        <a href="${meta.base}/">home</a>
        <a href="${meta.base}/?photos=1">photos</a>
        <a href="${meta.base}/code.html" class="${meta.slug === 'code' ? 'is-on' : ''}">code</a>
        <a href="${meta.base}/scripts/index.html" class="${meta.slug.startsWith('scripts') ? 'is-on' : ''}">scripts</a>
        <a href="${meta.base}/music.html" class="${meta.slug === 'music' ? 'is-on' : ''}">music</a>
        <a href="${meta.base}/film.html" class="${meta.slug === 'films' ? 'is-on' : ''}">films</a>
        <button type="button" data-s-themes>themes</button>
        <button type="button" data-s-original>normal site</button>
      `
      pageWrap.prepend(bar)
      bar.querySelector('[data-s-themes]')?.addEventListener('click', () => togglePopover())
      bar.querySelector('[data-s-original]')?.addEventListener('click', () => selectTheme('original'))
    }
  }

  /* ==========================================================================
     05: PAPER: ENTIRE PORTFOLIO AS ONE REAL BROADSHEET NEWSPAPER ON HOMEPAGE
     ========================================================================== */
  const mountPaper = () => {
    const meta = getPageMeta()
    if (isHomeDocument()) {
      const home = document.createElement('main')
      home.className = 'theme-home theme-home-paper'
      home.setAttribute('data-theme-injected', '1')
      home.innerHTML = `
        <article class="paper-frontpage">
          <header class="paper-masthead">
            <div class="paper-mast-meta"><button type="button" class="paper-meta-secret" id="paperAuckland">AUCKLAND, NEW ZEALAND</button><button type="button" class="paper-meta-secret" data-p-secrets>VOL. IV &middot; COMPLETE ARCHIVAL EDITION</button><span>AVERYBEUTH.XYZ</span></div>
            <h1 id="paperMastTitle" style="cursor:pointer;">THE AVERY CHRONICLE</h1>
            <div class="paper-extra-banner" id="paperExtraBanner" hidden>EXTRA EDITION &middot; LOCAL VISITOR DISCOVERED THE SECRET PRESS RUN</div>
            <nav class="paper-mast-nav">
              <a href="#paper-lead">Lead Story</a>
              <a href="#paper-code">Code Gazette</a>
              <a href="#paper-films">Cinema</a>
              <a href="#paper-scripts">Screenplays</a>
              <a href="#paper-music">Music Desk</a>
              <a href="#paper-photos">Contact Sheet</a>
              <button type="button" data-p-themes>Themes</button>
              <button type="button" data-p-original>Original</button>
            </nav>
          </header>

          <section class="paper-front-grid" id="paper-lead">
            <div class="paper-lead">
              <span class="paper-kicker">FRONT PAGE FEATURE</span>
              <h2>Local Creator Publishes 89+ Open-Source Tools, Films, Screenplays &amp; 375 Photographs</h2>
              <div class="paper-byline">By Avery Beuth &middot; Staff Correspondent &middot; <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">@avery.beuth</a> &middot; <a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a></div>
              <p class="paper-dropcap">Everything on averybeuth.xyz is assembled below in a single uninterrupted broadsheet edition. Scroll down to read the software feature stories and classifieds archive, watch short films, inspect original screenplays, listen to albums and EPs, or browse the full 375-plate color-ordered photographic contact sheet.</p>
            </div>
            <figure class="paper-hero-plate" id="paperHeroPlate">
              <div class="paper-plate-placeholder">Developing front-page plate...</div>
            </figure>
          </section>

          <section class="paper-section" id="paper-code">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION I &middot; SOFTWARE &amp; TOOLS</span><h2>The Code Gazette</h2></div>
            <div class="paper-article-grid" id="paperCodeMain"><p class="paper-loading">Typesetting selected works...</p></div>
            <div class="paper-classifieds-wrap">
              <h3 class="paper-classifieds-title">ARCHIVE CLASSIFIEDS (74 PROJECTS)</h3>
              <div class="paper-classifieds" id="paperCodeArchive"></div>
            </div>
          </section>

          <section class="paper-section" id="paper-films">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION II &middot; MOVING IMAGE</span><h2>Cinema &amp; Color Studies</h2></div>
            <div class="paper-sub-links"><a href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">guides/LUTs &rarr;</a><a href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">fifilm &rarr;</a></div>
            <div class="paper-films-grid" id="paperFilmsSlot"><p class="paper-loading">Loading film reels...</p></div>
          </section>

          <section class="paper-section" id="paper-scripts">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION III &middot; LITERARY DESK</span><h2>Original Screenplays</h2></div>
            <div class="paper-scripts-cols" id="paperScriptsSlot"><p class="paper-loading">Loading scripts...</p></div>
          </section>

          <section class="paper-section" id="paper-music">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION IV &middot; SOUND &amp; SYNTHESIS</span><h2>The Music Review Desk</h2></div>
            <div class="paper-sub-links"><a href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">Open bebeat studio &rarr;</a></div>
            <div class="paper-music-grid" id="paperMusicSlot"><p class="paper-loading">Loading discography...</p></div>
          </section>

          <section class="paper-section" id="paper-photos">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION V &middot; PHOTOGRAPHIC ARCHIVE</span><h2>Color-Ordered Contact Sheet</h2></div>
            <div id="paperPhotosSlot"><p class="paper-loading">Sorting 375 plates by spectrum...</p></div>
          </section>
        </article>
      `
      document.body.appendChild(home)
      home.querySelector('[data-p-themes]')?.addEventListener('click', () => togglePopover())
      home.querySelector('[data-p-secrets]')?.addEventListener('click', () => openSecretsModal())
      home.querySelector('[data-p-original]')?.addEventListener('click', () => selectTheme('original'))

      // Populate ALL sections right into the single broadsheet article!
      loadCodeData('.').then((code) => {
        home.querySelector('#paperCodeMain').innerHTML = code.main.map((p) => `
          <article class="paper-story">
            <a class="paper-story-img" href="${esc(p.href)}" target="_blank" rel="noopener"><img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy" /></a>
            <span class="paper-story-tag">${esc(p.tag)}</span>
            <h3><a href="${esc(p.href)}" target="_blank" rel="noopener">${esc(p.title)}</a></h3>
            <p>${esc(p.desc)}</p>
          </article>
        `).join('')
        home.querySelector('#paperCodeArchive').innerHTML = code.archive.map((p) => `
          <a class="paper-classified" href="${esc(p.href)}" target="_blank" rel="noopener">
            <strong>${esc(p.title)}</strong> <em>[${esc(p.tag)}]</em>: ${esc(p.desc)}
          </a>
        `).join('')
      })
      loadFilmsData('.').then((films) => {
        home.querySelector('#paperFilmsSlot').innerHTML = films.map((f) => `
          <article class="paper-film-story">
            ${f.embed ? `<div class="paper-embed"><iframe src="${esc(f.embed)}" title="${esc(f.title)}" allowfullscreen></iframe></div>` : ''}
            <h3>${esc(f.title)}</h3>
            <div class="paper-story-tag">${esc(f.tag)}</div>
            <p>${esc(f.desc)}</p>
            ${f.links.map((l) => `<a class="paper-inline-link" href="${esc(l.href)}">${esc(l.label)} &rarr;</a>`).join(' ')}
          </article>
        `).join('')
      })
      loadScriptsData('.').then((scripts) => {
        home.querySelector('#paperScriptsSlot').innerHTML = scripts.map((s) => `
          <article class="paper-script-item">
            <h4><a href="${esc(s.href)}">${esc(s.title)}</a></h4>
            <div class="paper-story-tag">${esc(s.tag)}</div>
            <p>${esc(s.desc)}</p>
            <div class="paper-item-links">${s.links.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join(' &middot; ')}</div>
          </article>
        `).join('')
      })
      loadMusicData('.').then((music) => {
        home.querySelector('#paperMusicSlot').innerHTML = music.map((m) => `
          <article class="paper-music-item">
            <img src="${esc(m.img)}" alt="${esc(m.title)}" loading="lazy" />
            <div>
              <h4>${esc(m.title)}</h4>
              <div class="paper-story-tag">${esc(m.tag)}</div>
              <p>${esc(m.desc)}</p>
              <div class="paper-item-links">${m.links.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join(' &middot; ')}</div>
            </div>
          </article>
        `).join('')
      })
      loadColorOrderedPhotos('.').then((photos) => {
        let activeHeroIdx = Math.floor(Math.random() * photos.length)
        const plate = home.querySelector('#paperHeroPlate')
        const renderHeroPlate = (idx) => {
          const hero = photos[idx] || photos[0]
          if (!hero || !plate) return
          activeHeroIdx = idx
          plate.innerHTML = `<img src="${esc(hero.thumb)}" alt="${esc(hero.name)}" /><figcaption>FIG. 1: ${esc(hero.file)} (${hero.hex.toUpperCase()}). Click to inspect.</figcaption>`
        }
        renderHeroPlate(activeHeroIdx)
        plate.style.cursor = 'pointer'
        plate.addEventListener('click', () => openPhotoLightbox(photos, activeHeroIdx))

        // Paper secret 1: triple-click masthead for Extra Edition stamp + fresh random front photo
        let mastClicks = 0
        let mastTimer = null
        home.querySelector('#paperMastTitle')?.addEventListener('click', () => {
          mastClicks++
          clearTimeout(mastTimer)
          mastTimer = setTimeout(() => { mastClicks = 0 }, 900)
          if (mastClicks >= 3) {
            mastClicks = 0
            const banner = home.querySelector('#paperExtraBanner')
            if (banner) banner.hidden = false
            const nextIdx = Math.floor(Math.random() * photos.length)
            renderHeroPlate(nextIdx)
          }
        })

        // Paper secret 2: click Auckland dateline for deadpan weather dispatch
        const auckBtn = home.querySelector('#paperAuckland')
        const reports = ['AUCKLAND, NZ · 16°C PROBABLY WINDY', 'AUCKLAND, NZ · FOUR SEASONS IN 20 MIN', 'AUCKLAND, NEW ZEALAND']
        let auckStep = 0
        auckBtn?.addEventListener('click', () => {
          auckBtn.textContent = reports[auckStep % reports.length]
          auckStep++
        })

        renderPhotoArchiveInto(home.querySelector('#paperPhotosSlot'), photos, 'paper', 48)
        if (isPhotosQuery()) {
          setTimeout(() => home.querySelector('#paper-photos')?.scrollIntoView({ behavior: 'smooth' }), 120)
        }
      })
    } else {
      const pageWrap = document.querySelector('.page-wrap')
      if (!pageWrap) return
      const mast = document.createElement('header')
      mast.className = 'paper-masthead'
      mast.setAttribute('data-theme-injected', '1')
      mast.innerHTML = `
        <div class="paper-mast-meta"><span>AUCKLAND, NEW ZEALAND</span><button type="button" class="paper-meta-secret" data-p-secrets>SECTION: ${esc(meta.title.toUpperCase())}</button><span>AVERYBEUTH.XYZ</span></div>
        <div class="paper-mast-brand">THE AVERY CHRONICLE</div>
        <nav class="paper-mast-nav">
          <a href="${meta.base}/">Complete Edition</a>
          <a href="${meta.base}/?photos=1">Photographs</a>
          <a href="${meta.base}/code.html" class="${meta.slug === 'code' ? 'is-on' : ''}">Code</a>
          <a href="${meta.base}/scripts/index.html" class="${meta.slug.startsWith('scripts') ? 'is-on' : ''}">Scripts</a>
          <a href="${meta.base}/music.html" class="${meta.slug === 'music' ? 'is-on' : ''}">Music</a>
          <a href="${meta.base}/film.html" class="${meta.slug === 'films' ? 'is-on' : ''}">Films</a>
          <button type="button" data-p-themes>Themes</button>
          <button type="button" data-p-original>Original</button>
        </nav>
      `
      pageWrap.prepend(mast)
      mast.querySelector('[data-p-themes]')?.addEventListener('click', () => togglePopover())
      mast.querySelector('[data-p-secrets]')?.addEventListener('click', () => openSecretsModal())
      mast.querySelector('[data-p-original]')?.addEventListener('click', () => selectTheme('original'))
    }
  }

  /* ==========================================================================
     06: COBALT: ENTIRE PORTFOLIO AS AN ARCHITECTURAL CAD BLUEPRINT DOSSIER
     ========================================================================== */
  const mountCobalt = () => {
    const meta = getPageMeta()
    if (isHomeDocument()) {
      const home = document.createElement('main')
      home.className = 'theme-home theme-home-cobalt'
      home.setAttribute('data-theme-injected', '1')
      home.innerHTML = `
        <section class="cobalt-sheet is-master">
          <div class="cobalt-ruler" id="cobaltRuler">
            <button type="button" data-cgrid="A1">A1</button><button type="button" data-cgrid="B1">B1</button><button type="button" data-cgrid="C1">C1</button><button type="button" data-cgrid="D1">D1</button><button type="button" data-cgrid="E1">E1</button><button type="button" data-cgrid="F1">F1</button>
          </div>
          <div class="cobalt-titleblock">
            <span id="cobaltDwgRef">DWG NO. AB-MASTER // FULL PORTFOLIO DOSSIER</span>
            <button type="button" class="cobalt-scale-secret" id="cobaltScaleSecret">SCALE 1:1 // GRID 28MM</button>
            <button type="button" class="cobalt-scale-secret" data-c-secrets>REV 2026 // AVERY BEUTH</button>
          </div>
          <nav class="cobalt-sheet-nav" id="cobaltTabs">
            <button type="button" class="is-on" data-csheet="all">ALL SHEETS</button>
            <button type="button" data-csheet="code">S-01 CODE</button>
            <button type="button" data-csheet="music">S-02 MUSIC</button>
            <button type="button" data-csheet="media">S-03 FILMS &amp; SCRIPTS</button>
            <button type="button" data-csheet="photos">S-04 PHOTOS</button>
            <button type="button" data-c-themes>THEMES</button>
            <button type="button" data-c-original>ORIGINAL</button>
          </nav>

          <div class="cobalt-block" data-csec="code">
            <div class="cobalt-sec-bar"><span>SHEET S-01 // SOFTWARE &amp; TOOLS SPECIFICATION</span><span>89+ ASSEMBLIES</span></div>
            <div class="cobalt-spec-cards" id="cobaltCodeMain"><div class="tp-loading">Drafting specifications...</div></div>
            <details class="cobalt-archive-drawer">
              <summary>EXPAND ARCHIVE SCHEDULE (74 SECONDARY BUILDS)</summary>
              <div class="cobalt-archive-table" id="cobaltCodeArchive"></div>
            </details>
          </div>

          <div class="cobalt-block" data-csec="music">
            <div class="cobalt-sec-bar"><span>SHEET S-02 // AUDIO SYNTHESIS &amp; DISCOGRAPHY</span><a href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">[OPEN BEBEAT]</a></div>
            <div class="cobalt-music-list" id="cobaltMusicSlot"><div class="tp-loading">Loading audio telemetry...</div></div>
          </div>

          <div class="cobalt-block" data-csec="media">
            <div class="cobalt-sec-bar"><span>SHEET S-03 // MOVING IMAGE &amp; SCREENPLAY SCHEMATICS</span><span><a href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">[FIFILM]</a> <a href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">[LUTS]</a></span></div>
            <div class="cobalt-media-split">
              <div id="cobaltFilmsSlot"><div class="tp-loading">Loading reels...</div></div>
              <div id="cobaltScriptsSlot"><div class="tp-loading">Loading screenplays...</div></div>
            </div>
          </div>

          <div class="cobalt-block" data-csec="photos">
            <div class="cobalt-sec-bar"><span>SHEET S-04 // CHROMATIC PHOTOGRAPHIC MATRIX</span><span>375 SPECIMENS</span></div>
            <div id="cobaltPhotosSlot"><div class="tp-loading">Plotting 375 color specimens...</div></div>
          </div>
        </section>
      `
      document.body.appendChild(home)
      home.querySelector('[data-c-themes]')?.addEventListener('click', () => togglePopover())
      home.querySelector('[data-c-secrets]')?.addEventListener('click', () => openSecretsModal())
      home.querySelector('[data-c-original]')?.addEventListener('click', () => selectTheme('original'))

      // Cobalt secret 1: click SCALE 1:1 to toggle inverted Diazo Whiteprint mode
      home.querySelector('#cobaltScaleSecret')?.addEventListener('click', (e) => {
        const inv = document.documentElement.classList.toggle('is-cobalt-whiteprint')
        e.target.textContent = inv ? 'DIAZO WHITEPRINT // 1:1' : 'SCALE 1:1 // GRID 28MM'
      })
      cleanupFns.push(() => document.documentElement.classList.remove('is-cobalt-whiteprint'))

      // Cobalt secret 2: click any ruler coordinate A1-F1 to lock telemetry ref
      const dwgRef = home.querySelector('#cobaltDwgRef')
      home.querySelectorAll('[data-cgrid]').forEach((b) => b.addEventListener('click', () => {
        home.querySelectorAll('[data-cgrid]').forEach((x) => x.classList.toggle('is-locked', x === b))
        const ref = b.dataset.cgrid
        if (dwgRef) dwgRef.textContent = `LOCKED REF ${ref} // 36.8485° S, 174.7633° E`
      }))

      const setSheetTab = (sheetKey) => {
        home.querySelectorAll('[data-csheet]').forEach((b) => b.classList.toggle('is-on', b.dataset.csheet === sheetKey))
        home.querySelectorAll('[data-csec]').forEach((sec) => {
          sec.hidden = sheetKey !== 'all' && sec.dataset.csec !== sheetKey
        })
      }
      home.querySelectorAll('[data-csheet]').forEach((b) => b.addEventListener('click', () => setSheetTab(b.dataset.csheet)))
      if (isPhotosQuery()) setSheetTab('photos')

      loadCodeData('.').then((code) => {
        home.querySelector('#cobaltCodeMain').innerHTML = code.main.map((p, i) => `
          <article class="cobalt-card">
            <div class="cobalt-card-num">ITEM ${String(i + 1).padStart(2, '0')} // ${esc(p.tag.toUpperCase())}</div>
            <a class="cobalt-thumb" href="${esc(p.href)}" target="_blank" rel="noopener"><img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy" /></a>
            <h3><a href="${esc(p.href)}" target="_blank" rel="noopener">${esc(p.title)}</a></h3>
            <p>${esc(p.desc)}</p>
          </article>
        `).join('')
        home.querySelector('#cobaltCodeArchive').innerHTML = code.archive.map((p, i) => `
          <a class="cobalt-arch-row" href="${esc(p.href)}" target="_blank" rel="noopener">
            <span>A-${String(i + 1).padStart(2, '0')}</span>
            <strong>${esc(p.title)}</strong>
            <em>${esc(p.tag)}</em>
            <small>${esc(p.desc)}</small>
          </a>
        `).join('')
      })
      loadMusicData('.').then((music) => {
        home.querySelector('#cobaltMusicSlot').innerHTML = music.map((m, i) => `
          <article class="cobalt-music-row">
            <img src="${esc(m.img)}" alt="${esc(m.title)}" loading="lazy" />
            <div>
              <div class="cobalt-card-num">AUD-${String(i + 1).padStart(2, '0')} // ${esc(m.tag.toUpperCase())}</div>
              <h4>${esc(m.title)}</h4>
              <p>${esc(m.desc)}</p>
              <div class="cobalt-links">${m.links.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">[${esc(l.label.toUpperCase())}]</a>`).join(' ')}</div>
            </div>
          </article>
        `).join('')
      })
      loadFilmsData('.').then((films) => {
        home.querySelector('#cobaltFilmsSlot').innerHTML = films.map((f, i) => `
          <article class="cobalt-film-item">
            <div class="cobalt-card-num">REEL-${String(i + 1).padStart(2, '0')} // ${esc(f.tag.toUpperCase())}</div>
            ${f.embed ? `<div class="paper-embed"><iframe src="${esc(f.embed)}" title="${esc(f.title)}" allowfullscreen></iframe></div>` : ''}
            <h4>${esc(f.title)}</h4>
            <p>${esc(f.desc)}</p>
          </article>
        `).join('')
      })
      loadScriptsData('.').then((scripts) => {
        home.querySelector('#cobaltScriptsSlot').innerHTML = scripts.map((s, i) => `
          <article class="cobalt-script-row">
            <div class="cobalt-card-num">DOC-${String(i + 1).padStart(2, '0')} // ${esc(s.tag.toUpperCase())}</div>
            <h4><a href="${esc(s.href)}">${esc(s.title)}</a></h4>
            <p>${esc(s.desc)}</p>
            <div class="cobalt-links">${s.links.map((l) => `<a href="${esc(l.href)}">[${esc(l.label.toUpperCase())}]</a>`).join(' ')}</div>
          </article>
        `).join('')
      })
      loadColorOrderedPhotos('.').then((photos) => {
        renderPhotoArchiveInto(home.querySelector('#cobaltPhotosSlot'), photos, 'cobalt', 48)
      })
    } else {
      const pageWrap = document.querySelector('.page-wrap')
      if (!pageWrap) return
      const block = document.createElement('header')
      block.className = 'cobalt-sub-header'
      block.setAttribute('data-theme-injected', '1')
      block.innerHTML = `
        <div class="cobalt-titleblock">
          <span>DWG NO. AB-${esc(meta.slug.toUpperCase())}</span>
          <span>LAYER: ${esc(meta.title.toUpperCase())} // SCALE 1:1</span>
          <button type="button" class="cobalt-scale-secret" data-c-secrets>CYANOTYPE ARCHIVE // 2026</button>
        </div>
        <nav class="cobalt-sheet-nav">
          <a href="${meta.base}/">FULL DOSSIER</a>
          <a href="${meta.base}/?photos=1">S-04 PHOTOS</a>
          <a href="${meta.base}/code.html" class="${meta.slug === 'code' ? 'is-on' : ''}">S-01 CODE</a>
          <a href="${meta.base}/music.html" class="${meta.slug === 'music' ? 'is-on' : ''}">S-02 MUSIC</a>
          <a href="${meta.base}/scripts/index.html" class="${meta.slug.startsWith('scripts') ? 'is-on' : ''}">S-03 SCRIPTS</a>
          <a href="${meta.base}/film.html" class="${meta.slug === 'films' ? 'is-on' : ''}">S-03 FILMS</a>
          <button type="button" data-c-themes>THEMES</button>
          <button type="button" data-c-original>ORIGINAL</button>
        </nav>
      `
      pageWrap.prepend(block)
      block.querySelector('[data-c-themes]')?.addEventListener('click', () => togglePopover())
      block.querySelector('[data-c-secrets]')?.addEventListener('click', () => openSecretsModal())
      block.querySelector('[data-c-original]')?.addEventListener('click', () => selectTheme('original'))
    }
  }

  const syncThemeChrome = (id) => {
    cleanupChrome()
    if (id === 'terminal') mountWindowsTerminal()
    else if (id === 'frutiger') mountDesktopOS()
    else if (id === 'silly') mountSilly()
    else if (id === 'paper') mountPaper()
    else if (id === 'cobalt') mountCobalt()
    resetScrollTop()
    requestAnimationFrame(resetScrollTop)
    setTimeout(resetScrollTop, 60)
  }

  /* ---------- Redesigned Visual Gallery Themes Switcher ---------- */
  const renderThemeThumb = (id) => {
    if (id === 'original') {
      return `
        <div class="tpv tpv-original" aria-hidden="true">
          <div class="tpv-orig-glow"></div>
          <div class="tpv-orig-tunnel">
            <span class="tpv-orig-frame f1"></span>
            <span class="tpv-orig-frame f2"></span>
            <span class="tpv-orig-frame f3"></span>
            <span class="tpv-orig-frame f4"></span>
            <span class="tpv-orig-frame f5"></span>
          </div>
          <div class="tpv-orig-mark">averybeuth.xyz</div>
          <div class="tpv-orig-nav"><span>code</span><span>music</span><span>films</span></div>
        </div>
      `
    }
    if (id === 'terminal') {
      return `
        <div class="tpv tpv-terminal" aria-hidden="true">
          <div class="tpv-wt-bar">
            <span class="tpv-wt-tab"><i>&gt;_</i> PowerShell</span>
            <span class="tpv-wt-dots"><i></i><i></i></span>
          </div>
          <div class="tpv-wt-body">
            <div><span class="w-w">PS C:\&gt;</span> <span class="w-y">dir</span></div>
            <div><span class="w-g">photos\  code\  music\</span></div>
            <div><span class="w-c">totone</span> <span class="w-d">third-impact</span></div>
            <div><span class="w-w">PS C:\&gt;</span> <span class="tpv-wt-caret"></span></div>
          </div>
        </div>
      `
    }
    if (id === 'frutiger') {
      return `
        <div class="tpv tpv-desktop" aria-hidden="true">
          <span class="tpv-aero-orb o1"></span>
          <span class="tpv-aero-orb o2"></span>
          <div class="tpv-aero-icons"><i></i><i></i><i></i></div>
          <div class="tpv-aero-win">
            <div class="tpv-aero-title"><span>Explorer</span><i></i></div>
            <div class="tpv-aero-panes">
              <div class="tpv-aero-tree"><i></i><i></i><i></i></div>
              <div class="tpv-aero-list"><i class="on"></i><i></i><i></i></div>
              <div class="tpv-aero-prev"><span class="pic"></span><i></i></div>
            </div>
          </div>
          <div class="tpv-aero-task"><span class="start"></span><span class="pill"></span></div>
        </div>
      `
    }
    if (id === 'silly') {
      return `
        <div class="tpv tpv-silly" aria-hidden="true">
          <div class="tpv-silly-card">
            <div class="tpv-silly-head"><span class="face"></span><b>avery</b></div>
            <div class="tpv-silly-boxes"><span class="y"></span><span></span></div>
            <div class="tpv-silly-btns"><span>font+</span><span class="r">do not</span></div>
          </div>
        </div>
      `
    }
    if (id === 'paper') {
      return `
        <div class="tpv tpv-paper" aria-hidden="true">
          <div class="tpv-paper-mast">THE AVERY CHRONICLE</div>
          <div class="tpv-paper-cols">
            <div class="tpv-paper-copy">
              <span class="hl"></span>
              <span></span><span></span><span class="s"></span>
            </div>
            <div class="tpv-paper-plate"></div>
          </div>
        </div>
      `
    }
    return `
      <div class="tpv tpv-cobalt" aria-hidden="true">
        <div class="tpv-cob-head"><span>DWG AB-06</span><span>1:1</span></div>
        <div class="tpv-cob-grid">
          <div class="tpv-cob-box"><i></i><span class="l"></span><span class="l s"></span></div>
          <div class="tpv-cob-box"><i></i><span class="l"></span><span class="l s"></span></div>
        </div>
      </div>
    `
  }

  const syncTiles = () => {
    if (!popover) return
    const active = THEMES.find((t) => t.id === currentId) || THEMES[0]
    const pill = popover.querySelector('#themesActivePill')
    if (pill) pill.textContent = active.name.toLowerCase()
    popover.querySelectorAll('.theme-card').forEach((card) => {
      card.classList.toggle('is-active', card.dataset.themeId === currentId)
    })
  }

  const closePopover = () => {
    if (!popover || popover.hidden) return
    popover.classList.remove('is-open')
    setTimeout(() => { if (popover) popover.hidden = true }, 190)
  }

  const selectTheme = (id) => {
    const prev = currentId
    const meta = getPageMeta()
    currentId = applyThemeAttr(id)

    if (currentId === 'original') {
      if (isHomeDocument() && prev !== 'original') {
        window.location.href = './'
        return
      }
      syncThemeChrome('original')
      syncTiles()
      closePopover()
      return
    }

    const onCleanHome = isHomeDocument() && !isPhotosQuery()
    if (!onCleanHome) {
      window.location.href = `${meta.base}/`
      return
    }

    syncThemeChrome(currentId)
    syncTiles()
    closePopover()
  }

  const togglePopover = (forceOpen = null) => {
    if (!popover) {
      popover = document.createElement('aside')
      popover.className = 'themes-popover'
      popover.setAttribute('role', 'dialog')
      popover.setAttribute('aria-label', 'Site themes')
      popover.hidden = true
      popover.innerHTML = `
        <header class="themes-head">
          <div class="themes-head-left">
            <span class="themes-head-title">themes</span>
            <span class="themes-head-pill" id="themesActivePill">original</span>
          </div>
          <div class="themes-head-right">
            <span class="themes-kbd-hint"><span class="themes-kbd">1-6</span>switch <span class="themes-kbd">esc</span>close</span>
            <button type="button" class="themes-close-btn" data-close-themes aria-label="Close themes">&times;</button>
          </div>
        </header>
        <div class="themes-gallery">
          ${THEMES.map((t) => `
            <button type="button" class="theme-card" data-theme-id="${t.id}">
              <div class="theme-card-preview">${renderThemeThumb(t.id)}</div>
              <div class="theme-card-meta">
                <div class="theme-card-top">
                  <span class="theme-card-num">${t.num}</span>
                  <strong class="theme-card-name">${t.name}</strong>
                  <span class="theme-card-badge">active</span>
                </div>
                <span class="theme-card-desc">${t.desc}</span>
              </div>
            </button>
          `).join('')}
        </div>
      `
      popover.addEventListener('click', (e) => {
        if (e.target.closest('[data-close-themes]')) { closePopover(); return }
        const card = e.target.closest('.theme-card')
        if (card) selectTheme(card.dataset.themeId)
      })
      document.addEventListener('pointerdown', (e) => {
        if (!popover || popover.hidden) return
        if (e.target.closest('.themes-popover, .themes-trigger, .themes-mobile-trigger, [data-wt-themes], [data-wt-themes-inline], [data-a-themes], [data-w-themes], [data-s-themes], [data-p-themes], [data-c-themes], [data-tp-themes]')) return
        closePopover()
      })
      window.addEventListener('keydown', (e) => {
        if (!popover || popover.hidden) return
        if (e.key === 'Escape') { e.preventDefault(); closePopover(); return }
        const n = Number(e.key)
        if (n >= 1 && n <= THEMES.length && !e.target.closest('input, textarea')) {
          e.preventDefault()
          selectTheme(THEMES[n - 1].id)
        }
      })
      document.body.appendChild(popover)
    }

    const shouldOpen = forceOpen !== null ? forceOpen : popover.hidden
    if (!shouldOpen) { closePopover(); return }
    syncTiles()
    popover.hidden = false
    requestAnimationFrame(() => popover.classList.add('is-open'))
  }

  syncThemeChrome(currentId)

  const railMeta = document.querySelector('.rail-meta')
  const railTopRow = document.querySelector('.rail-top-row')
  if (railMeta && !railMeta.querySelector('.themes-trigger')) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'themes-trigger'
    btn.textContent = 'themes'
    btn.addEventListener('click', () => togglePopover())
    railMeta.insertBefore(btn, railMeta.firstChild)

    if (railTopRow && !railTopRow.querySelector('.themes-mobile-trigger')) {
      const mBtn = document.createElement('button')
      mBtn.type = 'button'
      mBtn.className = 'themes-mobile-trigger'
      mBtn.setAttribute('aria-label', 'Open site themes')
      mBtn.textContent = 'themes'
      mBtn.addEventListener('click', () => togglePopover())
      railTopRow.appendChild(mBtn)
    }
  }
}
