/**
 * themes.js — 6 genuinely unique site themes with zero emojis, zero-flash loading,
 * compact side-popover picker, unique homepages (Photos stays OG),
 * pure-text animated Terminal, draggable Windows 7 File Explorer / Music / Film / Script
 * previewers, Comic Sans Silly mode, Paper Broadsheet, and Cobalt CAD Blueprint.
 */

const THEMES = [
  {
    id: 'original',
    num: '01',
    name: 'Original',
    label: 'ORIGINAL',
    desc: 'Obsidian dark, warm cream, dot-matrix',
    themeColor: '#0b0c0f',
    previewClass: 'is-original',
  },
  {
    id: 'terminal',
    num: '02',
    name: 'Terminal',
    label: 'TERMINAL',
    desc: 'Pure-text zsh TUI, Matrix rain & live CLI',
    themeColor: '#101411',
    previewClass: 'is-terminal',
  },
  {
    id: 'frutiger',
    num: '03',
    name: 'Frutiger 7',
    label: 'FRUTIGER 7',
    desc: 'Windows 7 desktop, File Explorer & previews',
    themeColor: '#071b2e',
    previewClass: 'is-frutiger',
  },
  {
    id: 'silly',
    num: '04',
    name: 'Silly',
    label: 'SILLY',
    desc: 'Comic Sans, stickers, rainbow & chaos',
    themeColor: '#fff7cc',
    previewClass: 'is-silly',
  },
  {
    id: 'paper',
    num: '05',
    name: 'Paper',
    label: 'PAPER',
    desc: 'Broadsheet newspaper & archival print',
    themeColor: '#f2ede2',
    previewClass: 'is-paper',
  },
  {
    id: 'cobalt',
    num: '06',
    name: 'Cobalt',
    label: 'COBALT',
    desc: 'Architectural cyanotype CAD blueprint',
    themeColor: '#061429',
    previewClass: 'is-cobalt',
  },
]

/* ---------- Glossy Windows 7 / Frutiger Aero SVG Icons (Zero Emojis) ---------- */
const ICONS = {
  folder: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe78a"/><stop offset="55%" stop-color="#f7c844"/><stop offset="100%" stop-color="#d89614"/></linearGradient><linearGradient id="fg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff4bf"/><stop offset="48%" stop-color="#ffd24d"/><stop offset="100%" stop-color="#e3a11a"/></linearGradient></defs><path d="M3 8.5C3 7.1 4.1 6 5.5 6H12l2.4 2.5H26.5C27.9 8.5 29 9.6 29 11v13.5c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V8.5z" fill="url(#fg1)" stroke="#9a6408" stroke-width="1.2"/><path d="M3 12.2h26v12.3c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V12.2z" fill="url(#fg2)" stroke="#a66c0a" stroke-width="1.1"/><path d="M4.5 13.5h23" stroke="rgba(255,255,255,0.75)" stroke-width="1.3"/></svg>`,
  home: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="hg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9fe0ff"/><stop offset="52%" stop-color="#2c8ee0"/><stop offset="100%" stop-color="#114b8c"/></linearGradient></defs><circle cx="16" cy="16" r="13" fill="url(#hg1)" stroke="#0d3766" stroke-width="1.2"/><ellipse cx="16" cy="10" rx="9" ry="5" fill="rgba(255,255,255,0.34)"/><path d="M9.5 16.5L16 10.8l6.5 5.7v6.2h-4.3v-4.2h-4.4v4.2H9.5z" fill="#ffffff" stroke="#0d3766" stroke-width="0.9" stroke-linejoin="round"/></svg>`,
  photos: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e4eef7"/><stop offset="100%" stop-color="#88a4bd"/></linearGradient><radialGradient id="pg2" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#82e0ff"/><stop offset="55%" stop-color="#1d6ab8"/><stop offset="100%" stop-color="#09223f"/></radialGradient></defs><rect x="3" y="8" width="26" height="18" rx="3.5" fill="url(#pg1)" stroke="#3b5369" stroke-width="1.2"/><path d="M11 8l1.8-3h6.4L21 8" fill="#c4d6e6" stroke="#3b5369" stroke-width="1.1"/><circle cx="16" cy="17" r="6.2" fill="url(#pg2)" stroke="#ffffff" stroke-width="1.4"/><circle cx="14" cy="15" r="1.8" fill="rgba(255,255,255,0.65)"/></svg>`,
  code: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#d2e4f5"/></linearGradient></defs><rect x="4" y="5" width="24" height="22" rx="3" fill="url(#cg1)" stroke="#3e688f" stroke-width="1.2"/><rect x="4" y="5" width="24" height="6" rx="2.5" fill="#3a96e3"/><path d="M12.2 15.5l-3.6 3.5 3.6 3.5M19.8 15.5l3.6 3.5-3.6 3.5M17.2 14.5l-2.4 9" fill="none" stroke="#165699" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  scripts: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#dce8f4"/></linearGradient></defs><path d="M7 4h12l6 6v18H7z" fill="url(#sg1)" stroke="#4c6f91" stroke-width="1.2" stroke-linejoin="round"/><path d="M19 4v6h6" fill="#bfd6ec" stroke="#4c6f91" stroke-width="1.1"/><path d="M10.5 14h11M10.5 18h11M10.5 22h7.5" stroke="#3c6791" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  music: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="mg1" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#b8f5ff"/><stop offset="45%" stop-color="#2fa2e8"/><stop offset="100%" stop-color="#114882"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#mg1)" stroke="#0e3866" stroke-width="1.2"/><circle cx="16" cy="16" r="3.4" fill="#eaf6ff" stroke="#114882" stroke-width="1.1"/><path d="M15 21.5V10.5l7.5-1.6v9.2" fill="none" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="21.5" r="2.2" fill="#ffffff"/><circle cx="20.5" cy="18.2" r="2.2" fill="#ffffff"/></svg>`,
  film: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="fmg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#53687e"/><stop offset="100%" stop-color="#1b2836"/></linearGradient></defs><rect x="4" y="6" width="24" height="20" rx="2.5" fill="url(#fmg1)" stroke="#0f1821" stroke-width="1.2"/><rect x="8.5" y="9" width="15" height="14" rx="1.2" fill="#77d0fa"/><path d="M14 13l5.5 3-5.5 3z" fill="#ffffff"/><path d="M5.5 9h1.6M5.5 13h1.6M5.5 17h1.6M5.5 21h1.6M24.9 9h1.6M24.9 13h1.6M24.9 17h1.6M24.9 21h1.6" stroke="#d8e6f2" stroke-width="1.4"/></svg>`,
  notes: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="6" y="4" width="20" height="24" rx="2" fill="#fffdf2" stroke="#537496" stroke-width="1.2"/><rect x="6" y="4" width="20" height="5" rx="1.5" fill="#4aa7eb"/><path d="M9.5 13.5h13M9.5 17.5h13M9.5 21.5h9" stroke="#6d8ba8" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  themes: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="tg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7ce4ff"/><stop offset="50%" stop-color="#6ee787"/><stop offset="100%" stop-color="#ff85c0"/></linearGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#tg1)" stroke="#1d4466" stroke-width="1.2"/><ellipse cx="14" cy="10.5" rx="7" ry="4" fill="rgba(255,255,255,0.45)"/><circle cx="12" cy="15" r="2.2" fill="#ffffff"/><circle cx="18.5" cy="14" r="2.2" fill="#ffd32a"/><circle cx="16.5" cy="20.5" r="2.2" fill="#1d6ed6"/></svg>`,
  power: `<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="pw1" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#ffa899"/><stop offset="55%" stop-color="#e0432f"/><stop offset="100%" stop-color="#87180c"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#pw1)" stroke="#611209" stroke-width="1.2"/><path d="M16 9.5v6.5M11.6 12.2a6.4 6.4 0 1 0 8.8 0" fill="none" stroke="#ffffff" stroke-width="2.1" stroke-linecap="round"/></svg>`,
  winOrb: `<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true"><path d="M7.5 10.5c2.8-1.4 5.2-1.4 7.5 0v5.5c-2.3-1.2-4.7-1.2-7.5 0z" fill="#ff5a36"/><path d="M17 10.5c2.3 1.2 4.7 1.2 7.5 0v5.5c-2.8 1.4-5.2 1.4-7.5 0z" fill="#7dd128"/><path d="M7.5 17.5c2.8-1.4 5.2-1.4 7.5 0V23c-2.3-1.2-4.7-1.2-7.5 0z" fill="#2ba8f7"/><path d="M17 17.5c2.3 1.2 4.7 1.2 7.5 0V23c-2.8 1.4-5.2 1.4-7.5 0z" fill="#ffca28"/></svg>`,
  starSmall: `<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M8 1.2l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 12l-4.2 2.2.8-4.7-3.4-3.3 4.7-.7z" fill="#f7c844" stroke="#b87e0e" stroke-width="1"/></svg>`,
  backArrow: `<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M10.5 3.5L5.5 8l5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  fwdArrow: `<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M5.5 3.5L10.5 8l-5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  sillyStar: `<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M10 1.5l2.6 5.4 6 .8-4.4 4.2 1 6L10 15l-5.2 2.9 1-6-4.4-4.2 6-.8z" fill="#ffd32a" stroke="#1e1a24" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
}

const STORAGE_KEY = 'avery_theme'
let initialized = false

const esc = (s) => String(s || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

export function isPhotosRoute() {
  const isHome = Boolean(document.getElementById('stage') && document.getElementById('gl'))
  if (!isHome) return false
  const p = new URLSearchParams(window.location.search)
  return p.has('zoom') || p.has('overview') || p.has('p')
}

export function isHomeDocument() {
  return Boolean(document.getElementById('stage') && document.getElementById('gl'))
}

function getPageMeta() {
  const path = window.location.pathname.toLowerCase()
  const inScripts = path.includes('/scripts/')
  const base = inScripts ? '..' : '.'
  if (isHomeDocument()) return { base: '.', inScripts: false, slug: 'home', title: 'Home', cmd: 'neofetch' }
  if (path.includes('code')) return { base, inScripts, slug: 'code', title: 'Code', cmd: 'ls -la ~/code --no-images' }
  if (path.includes('music')) return { base, inScripts, slug: 'music', title: 'Music', cmd: 'mpc playlist --verbose ~/music' }
  if (path.includes('film')) return { base, inScripts, slug: 'films', title: 'Films', cmd: 'ls -lh ~/films/' }
  if (inScripts && path.includes('view')) return { base, inScripts, slug: 'scripts/view', title: 'Screenplay', cmd: 'less -N ~/scripts/screenplay.fountain' }
  if (inScripts) return { base, inScripts, slug: 'scripts', title: 'Scripts', cmd: 'ls -lh ~/scripts/*.fountain' }
  if (path.includes('privacy')) return { base, inScripts, slug: 'privacy', title: 'Privacy', cmd: 'cat ~/privacy.txt' }
  return { base, inScripts, slug: 'home', title: 'Portfolio', cmd: 'ls -la ~/' }
}

function applyThemeAttr(id) {
  if (isPhotosRoute()) {
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('is-themed-home', 'has-aero-explorer')
    return 'original'
  }
  const theme = THEMES.find((t) => t.id === id) || THEMES[0]
  const valid = theme.id
  if (valid === 'original') {
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('is-themed-home', 'has-aero-explorer')
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

if (!isPhotosRoute()) {
  const saved = sessionStorage.getItem(STORAGE_KEY) || 'original'
  if (saved !== 'original') applyThemeAttr(saved)
}

function makeDraggable(winEl, handleEl) {
  if (!winEl || !handleEl) return () => {}
  let x = 0, y = 0, dragging = false, sx = 0, sy = 0, ox = 0, oy = 0

  const onDown = (e) => {
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
    winEl.style.transform = `translate3d(${x.toFixed(0)}px, ${y.toFixed(0)}px, 0)`
  }
  const onUp = () => {
    if (!dragging) return
    dragging = false
    winEl.classList.remove('is-dragging')
  }
  const onDbl = (e) => {
    if (e.target.closest('button, a, input')) return
    x = 0
    y = 0
    winEl.style.transform = ''
  }

  handleEl.addEventListener('pointerdown', onDown)
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)
  handleEl.addEventListener('dblclick', onDbl)

  return () => {
    handleEl.removeEventListener('pointerdown', onDown)
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerup', onUp)
    handleEl.removeEventListener('dblclick', onDbl)
    winEl.style.transform = ''
    winEl.classList.remove('is-dragging', 'is-minimized')
  }
}

export function initThemes() {
  if (initialized || isPhotosRoute()) return
  initialized = true

  let currentId = sessionStorage.getItem(STORAGE_KEY) || 'original'
  let popover = null
  let cleanupFns = []

  const cleanupChrome = () => {
    document.documentElement.classList.remove('has-aero-explorer')
    while (cleanupFns.length) {
      const fn = cleanupFns.pop()
      try { fn() } catch {}
    }
    document.querySelectorAll('[data-theme-injected]').forEach((el) => el.remove())
  }

  /* ---------- Matrix Canvas + CLI Helper for Terminal ---------- */
  const startMatrixCanvas = () => {
    const canvas = document.createElement('canvas')
    canvas.className = 'term-matrix-bg'
    canvas.setAttribute('data-theme-injected', '1')
    canvas.setAttribute('aria-hidden', 'true')
    document.body.prepend(canvas)

    const ctx = canvas.getContext('2d')
    let rafId = 0, boost = false, drops = []
    const chars = '01アイウエオカキクケコABXY#$%&*+=-:/'

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.max(12, Math.floor(canvas.width / 22))
      drops = Array.from({ length: cols }, () => Math.random() * -40)
    }
    resize()
    window.addEventListener('resize', resize)

    let last = 0
    const draw = (t) => {
      rafId = requestAnimationFrame(draw)
      if (t - last < (boost ? 42 : 90)) return
      last = t
      ctx.fillStyle = boost ? 'rgba(12, 16, 13, 0.14)' : 'rgba(12, 16, 13, 0.26)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = boost ? 'rgba(110, 231, 135, 0.52)' : 'rgba(110, 231, 135, 0.16)'
      ctx.font = '13px "Courier Prime", monospace'
      for (let i = 0; i < drops.length; i++) {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 22, drops[i] * 20)
        if (drops[i] * 20 > canvas.height && Math.random() > 0.968) drops[i] = 0
        drops[i] += boost ? 1.15 : 0.6
      }
    }
    rafId = requestAnimationFrame(draw)
    cleanupFns.push(() => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    })
    return {
      toggle() {
        boost = !boost
        canvas.classList.toggle('is-boosted', boost)
        return boost
      },
    }
  }

  const wireCli = (form, input, log, meta, matrixCtrl) => {
    const push = (html) => {
      const div = document.createElement('div')
      div.className = 'term-cli-out'
      div.innerHTML = html
      log.appendChild(div)
      log.scrollTop = log.scrollHeight
    }
    form?.addEventListener('submit', (e) => {
      e.preventDefault()
      const raw = (input.value || '').trim()
      input.value = ''
      if (!raw) return
      const c = raw.toLowerCase()
      push(`<span class="term-prompt">$</span> ${esc(raw)}`)
      if (c === 'help') {
        push('commands: <span class="term-hi">neofetch</span>, <span class="term-hi">ls</span>, <span class="term-hi">matrix</span>, <span class="term-hi">cd photos</span>, <span class="term-hi">cd code</span>, <span class="term-hi">cd scripts</span>, <span class="term-hi">cd music</span>, <span class="term-hi">cd films</span>, <span class="term-hi">themes</span>, <span class="term-hi">original</span>, <span class="term-hi">clear</span>')
      } else if (c === 'ls') {
        push(`drwxr-xr-x  <a href="${meta.base}/?zoom=1">photos/</a>  <a href="${meta.base}/code.html">code/</a>  <a href="${meta.base}/scripts/index.html">scripts/</a>  <a href="${meta.base}/music.html">music/</a>  <a href="${meta.base}/film.html">films/</a>`)
      } else if (c === 'neofetch') {
        push(`<pre class="term-mini-neo"> █████╗ ██████╗    visitor@averybeuth.xyz
██╔══██╗██╔══██╗   ----------------------
███████║██████╔╝   owner   Avery Beuth
██╔══██║██╔══██╗   path    ~/${meta.slug}
██║  ██║██████╔╝   shell   zsh 5.9 (web)
╚═╝  ╚═╝╚═════╝    theme   terminal [pure-text]</pre>`)
      } else if (c === 'matrix') {
        const on = matrixCtrl.toggle()
        push(on ? '[OK] matrix rain: overdrive' : '[OK] matrix rain: ambient')
      } else if (c === 'clear') {
        log.innerHTML = ''
      } else if (c === 'themes') {
        togglePopover(true)
      } else if (c === 'original' || c === 'exit') {
        selectTheme('original')
      } else if (c === 'cd code' || c === 'code') {
        window.location.href = `${meta.base}/code.html`
      } else if (c === 'cd music' || c === 'music') {
        window.location.href = `${meta.base}/music.html`
      } else if (c === 'cd films' || c === 'cd film' || c === 'films') {
        window.location.href = `${meta.base}/film.html`
      } else if (c === 'cd scripts' || c === 'scripts') {
        window.location.href = `${meta.base}/scripts/index.html`
      } else if (c === 'cd photos' || c === 'photos') {
        window.location.href = `${meta.base}/?zoom=1`
      } else {
        push(`zsh: command not found: ${esc(raw)} — type <span class="term-hi">help</span>`)
      }
    })
  }

  /* ---------- 02: TERMINAL (Pure-Text TUI + Live CLI) ---------- */
  const mountTerminal = () => {
    const meta = getPageMeta()
    const startedAt = Date.now()
    const matrixCtrl = startMatrixCanvas()

    const topBar = document.createElement('div')
    topBar.className = 'term-winbar'
    topBar.setAttribute('data-theme-injected', '1')
    topBar.innerHTML = `
      <div class="term-dots">
        <button type="button" class="term-dot is-red" data-t-original title="Back to Original"></button>
        <span class="term-dot is-yellow"></span>
        <span class="term-dot is-green"></span>
      </div>
      <div class="term-winbar-title">visitor@averybeuth.xyz: ~/${meta.slug} &mdash; zsh</div>
      <div class="term-winbar-right">
        <span class="term-uptime" id="termUptime">up 00:00</span>
        <button type="button" data-t-matrix>[matrix]</button>
        <button type="button" data-t-themes>[themes]</button>
        <button type="button" data-t-original>[original]</button>
      </div>
    `
    document.body.prepend(topBar)

    const upTimer = setInterval(() => {
      const el = document.getElementById('termUptime')
      if (!el) return
      const s = Math.floor((Date.now() - startedAt) / 1000)
      el.textContent = `up ${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
    }, 1000)
    cleanupFns.push(() => clearInterval(upTimer))

    if (isHomeDocument()) {
      const home = document.createElement('main')
      home.className = 'theme-home theme-home-terminal'
      home.setAttribute('data-theme-injected', '1')
      home.innerHTML = `
        <div class="term-home-body">
          <div class="term-boot-line"><span class="term-prompt">visitor@averybeuth.xyz:~$</span> <span id="termTyped"></span><span class="term-caret"></span></div>
          <div class="term-neofetch">
            <pre class="term-ascii" aria-hidden="true"> █████╗ ██████╗ 
██╔══██╗██╔══██╗
███████║██████╔╝
██╔══██║██╔══██╗
██║  ██║██████╔╝
╚═╝  ╚═╝╚═════╝ </pre>
            <div class="term-neo-info">
              <div class="term-neo-head">visitor@averybeuth.xyz</div>
              <div class="term-neo-sep">----------------------</div>
              <div><span class="term-k">owner</span>   <span>Avery Beuth</span></div>
              <div><span class="term-k">about</span>   <span>Photographs, films, screenplays, music, and software.</span></div>
              <div><span class="term-k">folders</span> <a href="./?zoom=1">photos/</a> <a href="./code.html">code/</a> <a href="./scripts/index.html">scripts/</a> <a href="./music.html">music/</a> <a href="./film.html">films/</a></div>
              <div><span class="term-k">links</span>   <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">instagram</a> <a href="https://github.com/averywsc" target="_blank" rel="noopener">github</a></div>
              <div><span class="term-k">theme</span>   <span>terminal</span> <button type="button" class="term-inline-btn" data-t-themes>(change)</button> <button type="button" class="term-inline-btn" data-t-original>(original)</button></div>
              <div class="term-swatches" aria-hidden="true">
                <span style="background:#e06c75"></span><span style="background:#e5c07b"></span><span style="background:#98c379"></span><span style="background:#56b6c2"></span><span style="background:#61afef"></span><span style="background:#c678dd"></span>
              </div>
            </div>
          </div>
          <p class="term-home-bio"><span class="term-k">bio:</span> photographer, filmmaker, composer &amp; developer from nz. click any folder or type <span class="term-hi">help</span> below. <a href="./?zoom=1">photos/</a> opens the 3d gallery.</p>
          <div class="term-cli-log" id="termCliLog"></div>
          <form class="term-cli-form" id="termCliForm" autocomplete="off">
            <label class="term-prompt" for="termCliInput">visitor@averybeuth.xyz:~$</label>
            <input id="termCliInput" class="term-cli-input" type="text" spellcheck="false" placeholder="help" />
          </form>
        </div>
      `
      document.body.appendChild(home)
      const typed = home.querySelector('#termTyped')
      let i = 0
      const tId = setInterval(() => {
        i++
        if (typed) typed.textContent = 'neofetch'.slice(0, i)
        if (i >= 8) clearInterval(tId)
      }, 45)
      cleanupFns.push(() => clearInterval(tId))
      wireCli(home.querySelector('#termCliForm'), home.querySelector('#termCliInput'), home.querySelector('#termCliLog'), meta, matrixCtrl)
    } else {
      const pageWrap = document.querySelector('.page-wrap')
      if (pageWrap) {
        const cli = document.createElement('section')
        cli.className = 'term-console'
        cli.setAttribute('data-theme-injected', '1')
        cli.innerHTML = `
          <div class="term-boot-line">
            <span class="term-prompt">visitor@averybeuth.xyz:~/${meta.slug}$</span>
            <span class="term-typed" id="termTyped"></span><span class="term-caret"></span>
          </div>
          <div class="term-boot-status" id="termBootStatus"></div>
          <div class="term-cli-log" id="termCliLog"></div>
          <form class="term-cli-form" id="termCliForm" autocomplete="off">
            <label class="term-prompt" for="termCliInput">visitor@averybeuth.xyz:~/${meta.slug}$</label>
            <input id="termCliInput" class="term-cli-input" type="text" spellcheck="false" placeholder="help | ls | neofetch | matrix | cd music" />
          </form>
        `
        pageWrap.prepend(cli)
        const typedEl = cli.querySelector('#termTyped')
        const statusEl = cli.querySelector('#termBootStatus')
        let i = 0
        const tId = setInterval(() => {
          i++
          if (typedEl) typedEl.textContent = meta.cmd.slice(0, i)
          if (i >= meta.cmd.length) {
            clearInterval(tId)
            const count = document.querySelectorAll('.project-card, .album-row, .script-card, .film-entry').length
            if (statusEl) statusEl.textContent = count > 0 ? `total ${count} — pure-text terminal listing` : `buffer ~/${meta.slug} mounted`
          }
        }, 26)
        cleanupFns.push(() => clearInterval(tId))
        wireCli(cli.querySelector('#termCliForm'), cli.querySelector('#termCliInput'), cli.querySelector('#termCliLog'), meta, matrixCtrl)
      }

      const items = [...document.querySelectorAll('.project-card, .album-row, .script-card, .film-entry')]
      items.forEach((el, idx) => el.style.setProperty('--term-i', String(Math.min(idx, 16))))
      cleanupFns.push(() => items.forEach((el) => el.style.removeProperty('--term-i')))
    }

    document.querySelectorAll('[data-t-matrix]').forEach((b) => b.addEventListener('click', () => matrixCtrl.toggle()))
    document.querySelectorAll('[data-t-themes]').forEach((b) => b.addEventListener('click', () => togglePopover()))
    document.querySelectorAll('[data-t-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
  }

  /* ---------- 03: FRUTIGER 7 (Windows 7 Desktop + Real File Explorer + Preview Pane) ---------- */
  const buildExplorerApp = (meta) => {
    let folders = []
    let items = []
    let explorerSubtitle = 'Windows Explorer'
    let toolbarExtra = ''
    let iconSvg = ICONS.code

    if (meta.slug === 'code') {
      explorerSubtitle = 'Code — Windows Explorer'
      iconSvg = ICONS.code
      const featured = [...document.querySelectorAll('#featuredGrid .project-card')]
      const archive = [...document.querySelectorAll('#archiveGrid .project-card')]
      const parseCard = (card, folderKey, folderLabel) => {
        const titleEl = card.querySelector('.project-title a')
        const imgEl = card.querySelector('.project-thumb')
        const tagEl = card.querySelector('.project-tag')
        const descEl = card.querySelector('.project-desc')
        return {
          title: titleEl?.textContent?.trim() || 'Untitled',
          href: titleEl?.getAttribute('href') || '#',
          external: true,
          img: imgEl?.getAttribute('src') || '',
          tag: tagEl?.textContent?.trim() || card.dataset.category || 'project',
          desc: descEl?.textContent?.trim() || '',
          folder: folderKey,
          folderLabel,
          typeLabel: `${tagEl?.textContent?.trim() || 'app'}`,
        }
      }
      items = [
        ...featured.map((c) => parseCard(c, 'main', 'Main')),
        ...archive.map((c) => parseCard(c, 'archive', 'Archive')),
      ]
      folders = [
        { id: 'main', label: 'Main', count: featured.length },
        { id: 'archive', label: 'Archive', count: archive.length },
        { id: 'all', label: 'All Projects', count: items.length },
        { id: 'cat:tool', label: 'Tools', count: items.filter((i) => i.tag === 'tool').length },
        { id: 'cat:app', label: 'Apps', count: items.filter((i) => i.tag === 'app' || i.tag === 'apps').length },
        { id: 'cat:game', label: 'Games', count: items.filter((i) => i.tag === 'game').length },
        { id: 'cat:website', label: 'Websites', count: items.filter((i) => i.tag === 'website').length },
        { id: 'cat:vr', label: 'VR', count: items.filter((i) => i.tag === 'vr').length },
      ]
      toolbarExtra = '<button type="button" class="aero-cmd-btn" data-exp-feedback>Feedback</button>'
    } else if (meta.slug === 'music') {
      explorerSubtitle = 'Music — Windows Explorer'
      iconSvg = ICONS.music
      const rows = [...document.querySelectorAll('.album-row')]
      items = rows.map((row) => {
        const titleEl = row.querySelector('.album-title')
        const metaEl = row.querySelector('.album-meta')
        const copyEl = row.querySelector('.album-copy')
        const imgEl = row.querySelector('.album-cover')
        const links = [...row.querySelectorAll('.album-actions a')].map((a) => ({
          label: a.textContent.trim(),
          href: a.getAttribute('href') || '#',
        }))
        const sc = links.find((l) => l.href.includes('soundcloud.com'))
        const kind = (metaEl?.textContent || 'release').trim().toLowerCase()
        const folder = kind.includes('single') ? 'singles' : 'albums'
        return {
          title: titleEl?.textContent?.trim() || 'Untitled',
          href: links[0]?.href || '#',
          external: true,
          img: imgEl?.getAttribute('src') || '',
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
      folders = [
        { id: 'all', label: 'All Releases', count: items.length },
        { id: 'albums', label: 'Albums & EPs', count: items.filter((i) => i.folder === 'albums').length },
        { id: 'singles', label: 'Singles', count: items.filter((i) => i.folder === 'singles').length },
      ]
      toolbarExtra = '<a class="aero-cmd-btn" href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener noreferrer">Open bebeat</a>'
    } else if (meta.slug === 'films') {
      explorerSubtitle = 'Films — Windows Explorer'
      iconSvg = ICONS.film
      const entries = [...document.querySelectorAll('.film-entry')]
      items = entries.map((entry) => {
        const titleEl = entry.querySelector('.film-title')
        const creditEl = entry.querySelector('.film-credit')
        const rolesEl = entry.querySelector('.film-roles')
        const notesEl = entry.querySelector('.film-notes')
        const iframeEl = entry.querySelector('iframe')
        const links = [...entry.querySelectorAll('.film-actions a')].map((a) => ({
          label: a.textContent.trim(),
          href: a.getAttribute('href') || '#',
        }))
        return {
          title: titleEl?.textContent?.trim() || 'Untitled',
          href: links[0]?.href || '',
          external: false,
          embed: iframeEl?.getAttribute('src') || '',
          tag: creditEl?.textContent?.trim() || 'short film',
          desc: [rolesEl?.textContent?.trim(), notesEl?.textContent?.trim()].filter(Boolean).join(' — '),
          folder: 'films',
          folderLabel: 'Short Films',
          typeLabel: 'video',
          links,
        }
      })
      folders = [
        { id: 'all', label: 'Short Films', count: items.length },
      ]
      toolbarExtra = '<a class="aero-cmd-btn" href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener noreferrer">guides/LUTs</a><a class="aero-cmd-btn" href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener noreferrer">fifilm</a>'
    } else if (meta.slug === 'scripts') {
      explorerSubtitle = 'Scripts — Windows Explorer'
      iconSvg = ICONS.scripts
      const parseScripts = () => [...document.querySelectorAll('#scriptCards .script-card')].map((card) => {
        const titleEl = card.querySelector('.script-title')
        const subEl = card.querySelector('.script-subtitle')
        const descEl = card.querySelector('.script-desc')
        return {
          title: titleEl?.textContent?.trim() || 'Screenplay',
          href: card.getAttribute('href') || '#',
          external: false,
          tag: subEl?.textContent?.trim() || 'screenplay',
          desc: descEl?.textContent?.trim() || 'Click to open screenplay viewer.',
          folder: 'scripts',
          folderLabel: 'Screenplays',
          typeLabel: '.fountain',
        }
      })
      items = parseScripts()
      folders = [{ id: 'all', label: 'Screenplays', count: items.length }]
      return { folders, items, explorerSubtitle, toolbarExtra, iconSvg, dynamicScripts: parseScripts }
    } else {
      return null
    }

    return { folders, items, explorerSubtitle, toolbarExtra, iconSvg }
  }

  const mountFrutiger = () => {
    const meta = getPageMeta()

    const bg = document.createElement('div')
    bg.className = 'aero-bg'
    bg.setAttribute('data-theme-injected', '1')
    bg.setAttribute('aria-hidden', 'true')
    bg.innerHTML = `
      <span class="aero-bubble b1"></span>
      <span class="aero-bubble b2"></span>
      <span class="aero-bubble b3"></span>
      <span class="aero-bubble b4"></span>
      <span class="aero-bubble b5"></span>
      <span class="aero-bubble b6"></span>
    `
    document.body.prepend(bg)

    // Left Windows 7 Desktop Icons (100% custom glossy SVGs, zero emojis)
    const icons = document.createElement('nav')
    icons.className = 'aero-desktop-icons'
    icons.setAttribute('data-theme-injected', '1')
    icons.setAttribute('aria-label', 'Desktop shortcuts')
    icons.innerHTML = `
      <a class="aero-d-icon ${meta.slug === 'home' ? 'is-current' : ''}" href="${meta.base}/">
        <span class="aero-d-glyph">${ICONS.home}</span><span>Home</span>
      </a>
      <a class="aero-d-icon" href="${meta.base}/?zoom=1">
        <span class="aero-d-glyph">${ICONS.photos}</span><span>Photos</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'code' ? 'is-current' : ''}" href="${meta.base}/code.html">
        <span class="aero-d-glyph">${ICONS.folder}</span><span>Code</span>
      </a>
      <a class="aero-d-icon ${meta.slug.startsWith('scripts') ? 'is-current' : ''}" href="${meta.base}/scripts/index.html">
        <span class="aero-d-glyph">${ICONS.scripts}</span><span>Scripts</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'music' ? 'is-current' : ''}" href="${meta.base}/music.html">
        <span class="aero-d-glyph">${ICONS.music}</span><span>Music</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'films' ? 'is-current' : ''}" href="${meta.base}/film.html">
        <span class="aero-d-glyph">${ICONS.film}</span><span>Films</span>
      </a>
      <button type="button" class="aero-d-icon" data-a-notes>
        <span class="aero-d-glyph">${ICONS.notes}</span><span>About.txt</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-themes>
        <span class="aero-d-glyph">${ICONS.themes}</span><span>Themes</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-original>
        <span class="aero-d-glyph">${ICONS.power}</span><span>Original</span>
      </button>
    `
    document.body.appendChild(icons)

    // Draggable Notepad window (About.txt)
    const notepad = document.createElement('aside')
    notepad.className = 'aero-notepad'
    notepad.setAttribute('data-theme-injected', '1')
    notepad.hidden = true
    notepad.innerHTML = `
      <div class="aero-win-titlebar aero-note-handle">
        <span class="aero-win-title">About.txt &mdash; Notepad</span>
        <div class="aero-win-btns">
          <button type="button" class="aero-win-btn is-close" data-close-note aria-label="Close">&times;</button>
        </div>
      </div>
      <div class="aero-note-body">
        <p><strong>Avery Beuth</strong> (@avery.beuth)</p>
        <p>Photographer, filmmaker, composer &amp; developer from Aotearoa.</p>
        <p>Drag any window by its glass titlebar, or double-click a titlebar to re-center.</p>
        <p><a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a> &middot; <a href="mailto:averybeuth3@gmail.com">averybeuth3@gmail.com</a></p>
      </div>
    `
    document.body.appendChild(notepad)
    cleanupFns.push(makeDraggable(notepad, notepad.querySelector('.aero-note-handle')))
    notepad.querySelector('[data-close-note]')?.addEventListener('click', () => { notepad.hidden = true })

    let mainWin = null
    const explorerData = !isHomeDocument() ? buildExplorerApp(meta) : null

    if (isHomeDocument()) {
      const wrap = document.createElement('div')
      wrap.className = 'theme-home theme-home-frutiger'
      wrap.setAttribute('data-theme-injected', '1')
      wrap.innerHTML = `
        <section class="aero-home-window" id="aeroMainWin">
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">Avery Beuth &mdash; Windows Internet Explorer</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${ICONS.backArrow}</span><span>${ICONS.fwdArrow}</span></div>
            <div class="aero-url-box">https://averybeuth.xyz/</div>
            <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
          </div>
          <div class="aero-fav-bar">
            <a href="./?zoom=1">${ICONS.starSmall} Photos</a>
            <a href="./code.html">${ICONS.starSmall} Code</a>
            <a href="./scripts/index.html">${ICONS.starSmall} Scripts</a>
            <a href="./music.html">${ICONS.starSmall} Music</a>
            <a href="./film.html">${ICONS.starSmall} Films</a>
            <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">${ICONS.starSmall} Instagram</a>
          </div>
          <div class="aero-web2-banner">
            <div class="aero-web2-left">
              <span class="aero-web2-logo">avery<strong>beuth</strong></span>
              <span class="aero-web2-beta">beta</span>
            </div>
            <button type="button" class="aero-web2-pill" data-a-themes>6 themes</button>
          </div>
          <div class="aero-home-content">
            <div class="aero-hero-card">
              <div>
                <h1>Welcome to my homepage!</h1>
                <p>Photographs, short films, screenplays, music, and open-source software by Avery Beuth. Open Code, Music, Scripts, or Films to explore them in Windows Explorer!</p>
                <div class="aero-hero-btns">
                  <a class="aero-cta" href="./code.html">Open Code Explorer &raquo;</a>
                  <a class="aero-cta is-blue" href="./?zoom=1">Explore 3D Photos &raquo;</a>
                </div>
              </div>
              <button type="button" class="aero-starburst" data-a-themes><strong>NEW!</strong><span>6 themes</span></button>
            </div>
            <div class="aero-home-cols">
              <div class="aero-box">
                <div class="aero-box-head">About me</div>
                <p>Building open-source creative tools, shooting photography, writing screenplays, and composing music in New Zealand.</p>
              </div>
              <div class="aero-box">
                <div class="aero-box-head">Libraries</div>
                <div class="aero-link-btns">
                  <a class="aero-green-btn" href="./code.html">Code Explorer (Main &amp; Archive)</a>
                  <a class="aero-green-btn" href="./music.html">Music Library &amp; Previews</a>
                  <a class="aero-green-btn" href="./film.html">Short Films</a>
                  <a class="aero-green-btn" href="./scripts/index.html">Screenplays</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      `
      document.body.appendChild(wrap)
      mainWin = wrap.querySelector('#aeroMainWin')
      cleanupFns.push(makeDraggable(mainWin, wrap.querySelector('.aero-main-handle')))
    } else if (explorerData) {
      // Mount REAL Draggable Windows 7 File Explorer with Folder Tree + File List + Side Preview Pane!
      document.documentElement.classList.add('has-aero-explorer')
      const stage = document.createElement('div')
      stage.className = 'aero-explorer-stage'
      stage.setAttribute('data-theme-injected', '1')
      stage.innerHTML = `
        <section class="aero-explorer-win" id="aeroMainWin" aria-label="${esc(explorerData.explorerSubtitle)}">
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">${esc(explorerData.explorerSubtitle)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${ICONS.backArrow}</span><span>${ICONS.fwdArrow}</span></div>
            <div class="aero-breadcrumb" id="expBreadcrumb">Computer &rsaquo; Avery &rsaquo; ${esc(meta.title)}</div>
            <input type="search" class="aero-exp-search" id="expSearch" placeholder="Search ${esc(meta.title)}..." aria-label="Search files" />
          </div>
          <div class="aero-cmd-bar">
            <button type="button" class="aero-cmd-btn" data-a-themes>Themes</button>
            ${explorerData.toolbarExtra}
            <a class="aero-cmd-btn" href="${meta.base}/?zoom=1">3D Photos</a>
            <button type="button" class="aero-cmd-btn" data-a-original>Original view</button>
          </div>
          <div class="aero-exp-body">
            <aside class="aero-exp-tree" aria-label="Folders">
              <div class="aero-tree-group">
                <div class="aero-tree-head">Folders</div>
                <div id="expFolderTree"></div>
              </div>
              <div class="aero-tree-group">
                <div class="aero-tree-head">Libraries</div>
                <a class="aero-tree-item" href="${meta.base}/">${ICONS.home}<span>Home</span></a>
                <a class="aero-tree-item" href="${meta.base}/?zoom=1">${ICONS.photos}<span>Photos (3D)</span></a>
                <a class="aero-tree-item ${meta.slug === 'code' ? 'is-active-lib' : ''}" href="${meta.base}/code.html">${ICONS.folder}<span>Code</span></a>
                <a class="aero-tree-item ${meta.slug === 'scripts' ? 'is-active-lib' : ''}" href="${meta.base}/scripts/index.html">${ICONS.scripts}<span>Scripts</span></a>
                <a class="aero-tree-item ${meta.slug === 'music' ? 'is-active-lib' : ''}" href="${meta.base}/music.html">${ICONS.music}<span>Music</span></a>
                <a class="aero-tree-item ${meta.slug === 'films' ? 'is-active-lib' : ''}" href="${meta.base}/film.html">${ICONS.film}<span>Films</span></a>
              </div>
            </aside>
            <div class="aero-exp-list-wrap">
              <div class="aero-exp-cols">
                <span>Name</span>
                <span>Type</span>
                <span>Folder</span>
              </div>
              <div class="aero-exp-list" id="expFileList" role="listbox" aria-label="Files"></div>
            </div>
            <aside class="aero-exp-preview" id="expPreview" aria-label="File preview"></aside>
          </div>
          <div class="aero-exp-status">
            <span id="expStatusCount">0 items</span>
            <span>Double-click any file to open &middot; Drag titlebar to move</span>
          </div>
        </section>
      `
      document.body.appendChild(stage)
      mainWin = stage.querySelector('#aeroMainWin')
      cleanupFns.push(makeDraggable(mainWin, stage.querySelector('.aero-main-handle')))

      let activeFolder = explorerData.folders[0]?.id || 'all'
      let query = ''
      let selectedItem = null
      let activeSoundCloudUrl = ''

      const treeEl = stage.querySelector('#expFolderTree')
      const listEl = stage.querySelector('#expFileList')
      const prevEl = stage.querySelector('#expPreview')
      const crumbEl = stage.querySelector('#expBreadcrumb')
      const statusEl = stage.querySelector('#expStatusCount')
      const searchEl = stage.querySelector('#expSearch')

      const getFiltered = () => {
        return explorerData.items.filter((it) => {
          if (activeFolder !== 'all') {
            if (activeFolder.startsWith('cat:')) {
              const cat = activeFolder.slice(4)
              if (cat === 'app') {
                if (it.tag !== 'app' && it.tag !== 'apps') return false
              } else if (it.tag !== cat) {
                return false
              }
            } else if (it.folder !== activeFolder) {
              return false
            }
          }
          if (query) {
            const hay = `${it.title} ${it.tag} ${it.desc} ${it.folderLabel}`.toLowerCase()
            if (!hay.includes(query)) return false
          }
          return true
        })
      }

      const renderPreviewPane = (item) => {
        activeSoundCloudUrl = ''
        if (!item) {
          prevEl.innerHTML = '<div class="aero-prev-empty">Select a file to preview its photo and details.</div>'
          return
        }
        const mediaHtml = item.embed
          ? `<div class="aero-prev-video"><iframe src="${esc(item.embed)}" title="${esc(item.title)}" allowfullscreen></iframe></div>`
          : item.img
            ? `<div class="aero-prev-img-wrap ${item.squareArt ? 'is-square' : ''}"><img src="${esc(item.img)}" alt="${esc(item.title)}" /></div>`
            : `<div class="aero-prev-doc-icon">${explorerData.iconSvg}</div>`

        const extraLinks = item.links?.length
          ? item.links.map((l) => `<a class="aero-prev-btn is-secondary" href="${esc(l.href)}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${esc(l.label)}</a>`).join('')
          : item.href && item.href !== '#'
            ? `<a class="aero-prev-btn" href="${esc(item.href)}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>Open ${esc(item.title)} &raquo;</a>`
            : ''

        const scBtn = item.soundcloud
          ? `<button type="button" class="aero-prev-btn" id="expScPlayBtn">Play SoundCloud Preview</button><div id="expScEmbed"></div>`
          : ''

        prevEl.innerHTML = `
          ${mediaHtml}
          <div class="aero-prev-meta">
            <h3 class="aero-prev-title">${esc(item.title)}</h3>
            <span class="aero-prev-tag">${esc(item.tag)}</span>
          </div>
          <p class="aero-prev-desc">${esc(item.desc)}</p>
          <div class="aero-prev-actions">
            ${scBtn}
            ${extraLinks}
          </div>
        `

        const scPlay = prevEl.querySelector('#expScPlayBtn')
        const scBox = prevEl.querySelector('#expScEmbed')
        scPlay?.addEventListener('click', () => {
          if (activeSoundCloudUrl === item.soundcloud) {
            activeSoundCloudUrl = ''
            scBox.innerHTML = ''
            scPlay.textContent = 'Play SoundCloud Preview'
            return
          }
          activeSoundCloudUrl = item.soundcloud
          const isSet = item.soundcloud.includes('/sets/')
          const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(item.soundcloud)}&color=%232b89d8&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`
          scBox.innerHTML = `<iframe class="aero-sc-iframe" title="SoundCloud preview" width="100%" height="${isSet ? 260 : 120}" scrolling="no" frameborder="no" allow="autoplay" src="${src}"></iframe>`
          scPlay.textContent = 'Stop Preview'
        })
      }

      const renderFolders = () => {
        treeEl.innerHTML = explorerData.folders.map((f) => `
          <button type="button" class="aero-tree-item ${f.id === activeFolder ? 'is-selected' : ''}" data-folder-id="${esc(f.id)}">
            ${ICONS.folder}
            <span>${esc(f.label)}</span>
            <em>${f.count}</em>
          </button>
        `).join('')
        treeEl.querySelectorAll('[data-folder-id]').forEach((btn) => {
          btn.addEventListener('click', () => {
            activeFolder = btn.dataset.folderId
            renderFolders()
            renderFiles()
          })
        })
      }

      const renderFiles = () => {
        const list = getFiltered()
        const folderObj = explorerData.folders.find((f) => f.id === activeFolder)
        crumbEl.innerHTML = `Computer &rsaquo; Avery &rsaquo; ${esc(meta.title)} &rsaquo; <strong>${esc(folderObj?.label || 'All')}</strong>`
        statusEl.textContent = `${list.length} ${list.length === 1 ? 'item' : 'items'}`

        if (!list.length) {
          listEl.innerHTML = '<div class="aero-empty-folder">No matching files in this folder.</div>'
          selectedItem = null
          renderPreviewPane(null)
          return
        }
        if (!selectedItem || !list.includes(selectedItem)) {
          selectedItem = list[0]
        }

        listEl.innerHTML = list.map((it, idx) => `
          <button type="button" class="aero-file-row ${it === selectedItem ? 'is-selected' : ''}" data-file-idx="${idx}" role="option" aria-selected="${it === selectedItem}">
            <span class="aero-file-name">${explorerData.iconSvg}<span>${esc(it.title)}</span></span>
            <span class="aero-file-type">${esc(it.typeLabel)}</span>
            <span class="aero-file-folder">${esc(it.folderLabel)}</span>
          </button>
        `).join('')

        listEl.querySelectorAll('[data-file-idx]').forEach((rowBtn) => {
          const item = list[Number(rowBtn.dataset.fileIdx)]
          rowBtn.addEventListener('click', () => {
            selectedItem = item
            listEl.querySelectorAll('.aero-file-row').forEach((r) => {
              const on = r === rowBtn
              r.classList.toggle('is-selected', on)
              r.setAttribute('aria-selected', String(on))
            })
            renderPreviewPane(item)
          })
          rowBtn.addEventListener('dblclick', () => {
            if (!item.href || item.href === '#') return
            if (item.external) window.open(item.href, '_blank', 'noopener,noreferrer')
            else window.location.href = item.href
          })
        })

        renderPreviewPane(selectedItem)
      }

      searchEl?.addEventListener('input', () => {
        query = (searchEl.value || '').trim().toLowerCase()
        renderFiles()
      })
      stage.querySelector('[data-exp-feedback]')?.addEventListener('click', () => {
        document.getElementById('feedbackBtn')?.click()
      })

      renderFolders()
      renderFiles()

      // Watch #scriptCards if scripts load asynchronously
      if (explorerData.dynamicScripts) {
        const scriptBox = document.getElementById('scriptCards')
        if (scriptBox) {
          const mo = new MutationObserver(() => {
            explorerData.items = explorerData.dynamicScripts()
            explorerData.folders[0].count = explorerData.items.length
            renderFolders()
            renderFiles()
          })
          mo.observe(scriptBox, { childList: true, subtree: true })
          cleanupFns.push(() => mo.disconnect())
        }
      }
    } else {
      // Fallback draggable Aero Window for scripts/view.html and privacy.html
      const main = document.querySelector('.site-main')
      if (main) {
        mainWin = main
        const chrome = document.createElement('div')
        chrome.className = 'aero-browser-chrome'
        chrome.setAttribute('data-theme-injected', '1')
        chrome.innerHTML = `
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">Avery Beuth &mdash; ${esc(meta.title)} &mdash; WordPad</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${ICONS.backArrow}</span><span>${ICONS.fwdArrow}</span></div>
            <div class="aero-url-box">https://averybeuth.xyz/${esc(meta.slug)}</div>
            <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
          </div>
        `
        main.prepend(chrome)
        cleanupFns.push(makeDraggable(main, chrome.querySelector('.aero-main-handle')))
      }
    }

    // Bottom Windows 7 Aero Taskbar (zero emojis — authentic 4-color Start Orb SVG)
    const taskbar = document.createElement('footer')
    taskbar.className = 'aero-taskbar-global'
    taskbar.setAttribute('data-theme-injected', '1')
    taskbar.innerHTML = `
      <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">${ICONS.winOrb}</button>
      <div class="aero-task-list">
        <button type="button" class="aero-task-tab is-active" data-a-restore>${esc(explorerData ? explorerData.explorerSubtitle : `${meta.title} - Internet`)}</button>
        <button type="button" class="aero-task-tab" data-a-notes>About.txt</button>
        <button type="button" class="aero-task-tab" data-a-themes>Themes</button>
        <button type="button" class="aero-task-tab" data-a-original>Original site</button>
      </div>
      <div class="aero-tray-clock">
        <span id="aeroTime"></span>
        <span id="aeroDate"></span>
      </div>
    `
    document.body.appendChild(taskbar)

    const tick = () => {
      const now = new Date()
      const tEl = document.getElementById('aeroTime')
      const dEl = document.getElementById('aeroDate')
      if (tEl) tEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      if (dEl) dEl.textContent = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' })
    }
    tick()
    const cid = setInterval(tick, 15000)
    cleanupFns.push(() => clearInterval(cid))

    document.querySelectorAll('[data-a-min]').forEach((b) => b.addEventListener('click', () => mainWin?.classList.add('is-minimized')))
    document.querySelectorAll('[data-a-restore]').forEach((b) => b.addEventListener('click', () => mainWin?.classList.remove('is-minimized')))
    document.querySelectorAll('[data-a-notes]').forEach((b) => b.addEventListener('click', () => { notepad.hidden = !notepad.hidden }))
    document.querySelectorAll('[data-a-themes]').forEach((b) => b.addEventListener('click', () => togglePopover()))
    document.querySelectorAll('[data-a-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
  }

  /* ---------- 04: SILLY (Comic Sans Sticker Notebook — zero emojis) ---------- */
  const mountSilly = () => {
    const ribbon = document.createElement('div')
    ribbon.className = 'silly-ribbon'
    ribbon.setAttribute('data-theme-injected', '1')
    ribbon.innerHTML = `
      <div class="silly-marquee">
        <span>WELCOME TO AVERY'S SUPER COOL WEBSITE!! &bull; 100% REAL COMIC SANS &bull; VERY SERIOUS PORTFOLIO &bull; CLICK EVERYTHING &bull; WOW!!</span>
        <span>WELCOME TO AVERY'S SUPER COOL WEBSITE!! &bull; 100% REAL COMIC SANS &bull; VERY SERIOUS PORTFOLIO &bull; CLICK EVERYTHING &bull; WOW!!</span>
      </div>
    `
    document.body.prepend(ribbon)

    if (isHomeDocument()) {
      const home = document.createElement('main')
      home.className = 'theme-home theme-home-silly'
      home.setAttribute('data-theme-injected', '1')
      home.innerHTML = `
        <div class="silly-home-card">
          <span class="silly-sticker">${ICONS.sillyStar} WOW!!</span>
          <h1 class="silly-hero-title">hi welcome to avery's website!!!</h1>
          <p class="silly-hero-sub">i make photos, cool apps, short films, music &amp; screenplays :)</p>
          <nav class="silly-home-nav">
            <a class="silly-pill is-pink" href="./?zoom=1">3D PHOTOS!</a>
            <a class="silly-pill is-blue" href="./code.html">CODE STUFF!</a>
            <a class="silly-pill is-green" href="./scripts/index.html">SCRIPTS!</a>
            <a class="silly-pill is-orange" href="./music.html">MUSIC!</a>
            <a class="silly-pill is-purple" href="./film.html">FILMS!</a>
          </nav>
          <div class="silly-home-foot">
            <button type="button" class="silly-mini-btn" data-s-themes>change theme</button>
            <button type="button" class="silly-mini-btn" data-s-original>go back to serious mode</button>
          </div>
        </div>
      `
      document.body.appendChild(home)
      home.querySelector('[data-s-themes]')?.addEventListener('click', () => togglePopover())
      home.querySelector('[data-s-original]')?.addEventListener('click', () => selectTheme('original'))
    }
  }

  /* ---------- 05: PAPER (Archival Broadsheet Newspaper) ---------- */
  const mountPaper = () => {
    const meta = getPageMeta()
    if (isHomeDocument()) {
      const home = document.createElement('main')
      home.className = 'theme-home theme-home-paper'
      home.setAttribute('data-theme-injected', '1')
      home.innerHTML = `
        <article class="paper-frontpage">
          <header class="paper-masthead">
            <div class="paper-mast-meta"><span>AUCKLAND, NEW ZEALAND</span><span>VOL. IV &middot; ARCHIVAL EDITION</span><span>EST. AVERYBEUTH.XYZ</span></div>
            <h1>THE AVERY CHRONICLE</h1>
            <nav class="paper-mast-nav">
              <a href="./?zoom=1">Photographs (3D)</a>
              <a href="./code.html">Software &amp; Code</a>
              <a href="./scripts/index.html">Screenplays</a>
              <a href="./music.html">Music &amp; Scores</a>
              <a href="./film.html">Short Films</a>
              <button type="button" data-p-themes>Themes</button>
            </nav>
          </header>
          <div class="paper-front-grid">
            <section class="paper-lead">
              <span class="paper-kicker">FRONT PAGE</span>
              <h2>Photographs, Moving Image, Sound &amp; Open-Source Software</h2>
              <p class="paper-dropcap">Welcome to the archival edition of Avery Beuth's portfolio. Browse 89 open-source tools and creative web applications, original soundtracks and albums, screenplays, short films, or step directly back into the interactive 3D photographic gallery.</p>
              <div class="paper-lead-links">
                <a class="paper-cta-link" href="./?zoom=1">Enter 3D Photo Gallery &rarr;</a>
                <a class="paper-cta-link" href="./code.html">Read Code Index &rarr;</a>
              </div>
            </section>
            <aside class="paper-index-col">
              <span class="paper-kicker">CONTENTS</span>
              <ul>
                <li><a href="./?zoom=1"><strong>01 / Photographs</strong><span>Interactive 307-frame gallery (Original theme)</span></a></li>
                <li><a href="./code.html"><strong>02 / Code</strong><span>15 selected works &amp; 74 archival experiments</span></a></li>
                <li><a href="./scripts/index.html"><strong>03 / Scripts</strong><span>Original short &amp; feature screenplays</span></a></li>
                <li><a href="./music.html"><strong>04 / Music</strong><span>Albums, EPs, OSTs &amp; bebeat</span></a></li>
                <li><a href="./film.html"><strong>05 / Films</strong><span>Short films, color studies &amp; fifilm</span></a></li>
              </ul>
              <button type="button" class="paper-small-btn" data-p-original>Return to Original Site</button>
            </aside>
          </div>
        </article>
      `
      document.body.appendChild(home)
      home.querySelector('[data-p-themes]')?.addEventListener('click', () => togglePopover())
      home.querySelector('[data-p-original]')?.addEventListener('click', () => selectTheme('original'))
    } else {
      const pageWrap = document.querySelector('.page-wrap')
      if (!pageWrap) return
      const mast = document.createElement('div')
      mast.className = 'paper-sub-masthead'
      mast.setAttribute('data-theme-injected', '1')
      mast.innerHTML = `<span>THE AVERY CHRONICLE</span><span>SECTION: ${esc(meta.title.toUpperCase())}</span><span>ARCHIVAL PRINT</span>`
      pageWrap.prepend(mast)
    }
  }

  /* ---------- 06: COBALT (Architectural CAD Blueprint) ---------- */
  const mountCobalt = () => {
    const meta = getPageMeta()
    if (isHomeDocument()) {
      const home = document.createElement('main')
      home.className = 'theme-home theme-home-cobalt'
      home.setAttribute('data-theme-injected', '1')
      home.innerHTML = `
        <section class="cobalt-sheet">
          <div class="cobalt-titleblock">
            <span>DWG NO. AB-000 // COVER SHEET</span>
            <span>SCALE 1:1</span>
            <span>CYANOTYPE ARCHIVE 2026</span>
          </div>
          <div class="cobalt-sheet-hero">
            <h1>AVERYBEUTH.XYZ</h1>
            <p>TECHNICAL INDEX — PHOTOGRAPHY, SOFTWARE, SCREENPLAYS, AUDIO &amp; FILM</p>
          </div>
          <div class="cobalt-sheet-grid">
            <a class="cobalt-spec" href="./?zoom=1"><span>S-01</span><strong>PHOTOGRAPHS</strong><em>Opens 3D Gallery (OG)</em></a>
            <a class="cobalt-spec" href="./code.html"><span>S-02</span><strong>CODE &amp; TOOLS</strong><em>89 open-source builds</em></a>
            <a class="cobalt-spec" href="./scripts/index.html"><span>S-03</span><strong>SCREENPLAYS</strong><em>Fountain &amp; PDF archive</em></a>
            <a class="cobalt-spec" href="./music.html"><span>S-04</span><strong>MUSIC &amp; OSTS</strong><em>Albums, EPs &amp; synths</em></a>
            <a class="cobalt-spec" href="./film.html"><span>S-05</span><strong>SHORT FILMS</strong><em>Moving image &amp; LUTs</em></a>
            <button type="button" class="cobalt-spec" data-c-themes><span>S-06</span><strong>THEMES</strong><em>Switch active mode</em></button>
          </div>
          <div class="cobalt-sheet-foot">
            <span>DRAWN BY: A. BEUTH</span>
            <button type="button" data-c-original>[ RESET TO ORIGINAL ]</button>
          </div>
        </section>
      `
      document.body.appendChild(home)
      home.querySelector('[data-c-themes]')?.addEventListener('click', () => togglePopover())
      home.querySelector('[data-c-original]')?.addEventListener('click', () => selectTheme('original'))
    } else {
      const pageWrap = document.querySelector('.page-wrap')
      if (!pageWrap) return
      const block = document.createElement('div')
      block.className = 'cobalt-titleblock'
      block.setAttribute('data-theme-injected', '1')
      block.innerHTML = `
        <span>DWG NO. AB-${esc(meta.slug.toUpperCase())}</span>
        <span>LAYER: ${esc(meta.title.toUpperCase())} // SCALE 1:1</span>
        <span>CYANOTYPE ARCHIVE // 2026</span>
      `
      pageWrap.prepend(block)
    }
  }

  const syncThemeChrome = (id) => {
    cleanupChrome()
    if (id === 'terminal') mountTerminal()
    else if (id === 'frutiger') mountFrutiger()
    else if (id === 'silly') mountSilly()
    else if (id === 'paper') mountPaper()
    else if (id === 'cobalt') mountCobalt()
  }

  /* ---------- Compact Side-Popover Themes Picker ---------- */
  const renderPreview = (theme) => {
    if (!popover) return
    const mini = popover.querySelector('.themes-mini')
    const numEl = popover.querySelector('.themes-meta-num')
    const nameEl = popover.querySelector('.themes-meta-name')
    const descEl = popover.querySelector('.themes-meta-desc')
    const useEl = popover.querySelector('.themes-in-use')
    if (!mini) return

    mini.className = `themes-mini ${theme.previewClass}`
    numEl.textContent = theme.num
    nameEl.textContent = theme.name
    descEl.textContent = theme.desc
    useEl.style.visibility = theme.id === currentId ? 'visible' : 'hidden'
  }

  const syncTiles = () => {
    if (!popover) return
    popover.querySelectorAll('.theme-tile').forEach((tile) => {
      tile.classList.toggle('is-active', tile.dataset.themeId === currentId)
    })
  }

  const closePopover = () => {
    if (!popover || popover.hidden) return
    popover.classList.remove('is-open')
    setTimeout(() => { if (popover) popover.hidden = true }, 180)
  }

  const selectTheme = (id) => {
    const prev = currentId
    currentId = applyThemeAttr(id)
    if (isHomeDocument() && currentId === 'original' && prev !== 'original') {
      window.location.reload()
      return
    }
    syncThemeChrome(currentId)
    syncTiles()
    renderPreview(THEMES.find((t) => t.id === currentId) || THEMES[0])
  }

  const togglePopover = (forceOpen = null) => {
    if (!popover) {
      popover = document.createElement('aside')
      popover.className = 'themes-popover'
      popover.setAttribute('role', 'dialog')
      popover.setAttribute('aria-label', 'Site themes')
      popover.hidden = true
      popover.innerHTML = `
        <div class="themes-preview-frame">
          <div class="themes-mini is-original">
            <div class="themes-mini-bar">
              <span class="themes-mini-dots"><i></i><i></i><i></i></span>
              <span class="themes-mini-brand">averybeuth.xyz</span>
              <span class="themes-mini-nav"><span>code</span><span>music</span></span>
            </div>
            <div class="themes-mini-hero">
              <div class="themes-mini-title">averybeuth.xyz</div>
              <div class="themes-mini-sub">photos, films, music &amp; software</div>
            </div>
            <div class="themes-mini-grid">
              <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
              <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
              <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
            </div>
            <div class="themes-mini-explorer">
              <div class="tme-tree"><span></span><span></span><span></span></div>
              <div class="tme-files"><span></span><span></span><span></span><span></span></div>
              <div class="tme-prev"><div class="tme-pic"></div><span></span></div>
            </div>
            <div class="themes-mini-textlist">
              <span>drwxr-xr-x  code/</span>
              <span>-rwxr-xr-x  totone.app</span>
              <span>-rwxr-xr-x  third-impact.flac</span>
            </div>
            <div class="themes-mini-taskbar"></div>
          </div>
        </div>
        <div class="themes-meta-bar">
          <div class="themes-meta-left">
            <span class="themes-meta-num">01</span>
            <span class="themes-meta-name">Original</span>
            <span class="themes-meta-desc"></span>
          </div>
          <span class="themes-in-use">IN USE</span>
        </div>
        <div class="themes-grid">
          ${THEMES.map((t) => `
            <button type="button" class="theme-tile" data-theme-id="${t.id}">
              <div class="theme-tile-top">
                <span class="theme-tile-num">${t.num}</span>
                <span class="theme-tile-badge">IN USE</span>
              </div>
              <div class="theme-tile-name">${t.label}</div>
            </button>
          `).join('')}
        </div>
        <div class="themes-footer">
          <span class="themes-kbd-hint"><span class="themes-kbd">1-6</span>pick <span class="themes-kbd" style="margin-left:6px;">esc</span>close</span>
          <span class="themes-touch-hint">tap a theme</span>
          <button type="button" class="themes-close-btn" data-close-themes>close</button>
        </div>
      `

      popover.addEventListener('click', (e) => {
        if (e.target.closest('[data-close-themes]')) {
          closePopover()
          return
        }
        const tile = e.target.closest('.theme-tile')
        if (tile) selectTheme(tile.dataset.themeId)
      })

      popover.addEventListener('mouseover', (e) => {
        const tile = e.target.closest('.theme-tile')
        if (!tile) return
        const found = THEMES.find((t) => t.id === tile.dataset.themeId)
        if (found) renderPreview(found)
      })

      popover.addEventListener('mouseleave', () => {
        renderPreview(THEMES.find((t) => t.id === currentId) || THEMES[0])
      })

      document.addEventListener('pointerdown', (e) => {
        if (!popover || popover.hidden) return
        if (e.target.closest('.themes-popover, .themes-trigger, .themes-mobile-trigger, [data-t-themes], [data-a-themes], [data-s-themes], [data-p-themes], [data-c-themes]')) return
        closePopover()
      })

      window.addEventListener('keydown', (e) => {
        if (!popover || popover.hidden) return
        if (e.key === 'Escape') {
          e.preventDefault()
          closePopover()
          return
        }
        const n = Number(e.key)
        if (n >= 1 && n <= THEMES.length && !e.target.closest('input, textarea')) {
          e.preventDefault()
          selectTheme(THEMES[n - 1].id)
        }
      })

      document.body.appendChild(popover)
    }

    const shouldOpen = forceOpen !== null ? forceOpen : popover.hidden
    if (!shouldOpen) {
      closePopover()
      return
    }
    syncTiles()
    renderPreview(THEMES.find((t) => t.id === currentId) || THEMES[0])
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
