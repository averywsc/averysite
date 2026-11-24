/**
 * themes.js — 6 genuinely distinct site themes with:
 *  - compact floating side-popover picker (no fullscreen scrim)
 *  - unique homepages when clicking averybeuth.xyz (while Photos ?zoom=1 stays OG)
 *  - pure-text animated Terminal, draggable Windows 7 Frutiger Aero desktop,
 *    Comic Sans Silly mode, Paper Broadsheet, and Cobalt CAD Blueprint.
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
    desc: 'Draggable Windows 7 Aero desktop & browser',
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

const STORAGE_KEY = 'avery_theme'
let initialized = false

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
  if (isHomeDocument()) {
    return { base: '.', inScripts: false, slug: 'home', title: 'Home', cmd: 'neofetch' }
  }
  let slug = 'home'
  let title = 'Portfolio'
  let cmd = 'ls -la ~/'
  if (path.includes('code')) {
    slug = 'code'
    title = 'Code'
    cmd = 'ls -la ~/code --no-images'
  } else if (path.includes('music')) {
    slug = 'music'
    title = 'Music'
    cmd = 'mpc playlist --verbose ~/music'
  } else if (path.includes('film')) {
    slug = 'films'
    title = 'Films'
    cmd = 'ls -lh ~/films/'
  } else if (inScripts && path.includes('view')) {
    slug = 'scripts/view'
    title = 'Screenplay'
    cmd = 'less -N ~/scripts/screenplay.fountain'
  } else if (inScripts) {
    slug = 'scripts'
    title = 'Scripts'
    cmd = 'ls -lh ~/scripts/*.fountain'
  } else if (path.includes('privacy')) {
    slug = 'privacy'
    title = 'Privacy'
    cmd = 'cat ~/privacy.txt'
  }
  return { base, inScripts, slug, title, cmd }
}

function applyThemeAttr(id) {
  if (isPhotosRoute()) {
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('is-themed-home')
    return 'original'
  }
  const theme = THEMES.find((t) => t.id === id) || THEMES[0]
  const valid = theme.id
  if (valid === 'original') {
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('is-themed-home')
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
  let x = 0
  let y = 0
  let dragging = false
  let sx = 0
  let sy = 0
  let ox = 0
  let oy = 0

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
    if (e.target.closest('button, a')) return
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
    while (cleanupFns.length) {
      const fn = cleanupFns.pop()
      try { fn() } catch {}
    }
    document.querySelectorAll('[data-theme-injected]').forEach((el) => el.remove())
  }

  const startMatrixCanvas = () => {
    const canvas = document.createElement('canvas')
    canvas.className = 'term-matrix-bg'
    canvas.setAttribute('data-theme-injected', '1')
    canvas.setAttribute('aria-hidden', 'true')
    document.body.prepend(canvas)

    const ctx = canvas.getContext('2d')
    let rafId = 0
    let boost = false
    const chars = '01アイウエオカキクケコABXY#$%&*+=-:/'
    let drops = []

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
      push(`<span class="term-prompt">$</span> ${raw.replace(/</g, '&lt;')}`)
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
        push(`zsh: command not found: ${raw.replace(/</g, '&lt;')} — type <span class="term-hi">help</span>`)
      }
    })
  }

  /* ---------- 02: TERMINAL (Homepage + Sub-pages, pure-text TUI) ---------- */
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
          <p class="term-home-bio"><span class="term-k">bio:</span> photographer, filmmaker, composer &amp; developer from nz. click a folder or type <span class="term-hi">help</span> below. note: <a href="./?zoom=1">photos/</a> always opens the 3d gallery.</p>
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
            const count = document.querySelectorAll('.project-card, .album-row, .script-card, .film-card').length
            if (statusEl) statusEl.textContent = count > 0 ? `total ${count} — pure-text terminal listing` : `buffer ~/${meta.slug} mounted`
          }
        }, 26)
        cleanupFns.push(() => clearInterval(tId))
        wireCli(cli.querySelector('#termCliForm'), cli.querySelector('#termCliInput'), cli.querySelector('#termCliLog'), meta, matrixCtrl)
      }

      const items = [...document.querySelectorAll('.project-card, .album-row, .script-card, .film-card')]
      items.forEach((el, idx) => el.style.setProperty('--term-i', String(Math.min(idx, 16))))
      cleanupFns.push(() => items.forEach((el) => el.style.removeProperty('--term-i')))
    }

    document.querySelectorAll('[data-t-matrix]').forEach((b) => b.addEventListener('click', () => matrixCtrl.toggle()))
    document.querySelectorAll('[data-t-themes]').forEach((b) => b.addEventListener('click', () => togglePopover()))
    document.querySelectorAll('[data-t-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
  }

  /* ---------- 03: FRUTIGER 7 (Draggable Windows 7 Aero Desktop) ---------- */
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

    const icons = document.createElement('nav')
    icons.className = 'aero-desktop-icons'
    icons.setAttribute('data-theme-injected', '1')
    icons.setAttribute('aria-label', 'Desktop shortcuts')
    icons.innerHTML = `
      <a class="aero-d-icon ${meta.slug === 'home' ? 'is-current' : ''}" href="${meta.base}/">
        <span class="aero-d-glyph">🏠</span><span>Home</span>
      </a>
      <a class="aero-d-icon" href="${meta.base}/?zoom=1">
        <span class="aero-d-glyph">📷</span><span>Photos</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'code' ? 'is-current' : ''}" href="${meta.base}/code.html">
        <span class="aero-d-glyph">📁</span><span>Code</span>
      </a>
      <a class="aero-d-icon ${meta.slug.startsWith('scripts') ? 'is-current' : ''}" href="${meta.base}/scripts/index.html">
        <span class="aero-d-glyph">📄</span><span>Scripts</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'music' ? 'is-current' : ''}" href="${meta.base}/music.html">
        <span class="aero-d-glyph">🎵</span><span>Music</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'films' ? 'is-current' : ''}" href="${meta.base}/film.html">
        <span class="aero-d-glyph">🎞️</span><span>Films</span>
      </a>
      <button type="button" class="aero-d-icon" data-a-notes>
        <span class="aero-d-glyph">📝</span><span>About.txt</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-themes>
        <span class="aero-d-glyph">🎨</span><span>Themes</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-original>
        <span class="aero-d-glyph">⏻</span><span>Original</span>
      </button>
    `
    document.body.appendChild(icons)

    // Draggable secondary Notepad window (About.txt)
    const notepad = document.createElement('aside')
    notepad.className = 'aero-notepad'
    notepad.setAttribute('data-theme-injected', '1')
    notepad.hidden = true
    notepad.innerHTML = `
      <div class="aero-win-titlebar aero-note-handle">
        <span class="aero-win-title">About.txt &mdash; Notepad</span>
        <div class="aero-win-btns">
          <button type="button" class="aero-win-btn is-close" data-close-note>&times;</button>
        </div>
      </div>
      <div class="aero-note-body">
        <p><strong>Avery Beuth</strong> (@avery.beuth)</p>
        <p>Photographer, filmmaker, composer &amp; developer from Aotearoa.</p>
        <p>Drag any window by its glass titlebar. Double-click a titlebar to re-center!</p>
        <p><a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a> &middot; <a href="mailto:averybeuth3@gmail.com">averybeuth3@gmail.com</a></p>
      </div>
    `
    document.body.appendChild(notepad)
    cleanupFns.push(makeDraggable(notepad, notepad.querySelector('.aero-note-handle')))
    notepad.querySelector('[data-close-note]')?.addEventListener('click', () => { notepad.hidden = true })

    let mainWin = null
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
            <div class="aero-nav-orbs" aria-hidden="true"><span>◀</span><span>▶</span></div>
            <div class="aero-url-box">https://averybeuth.xyz/</div>
            <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
          </div>
          <div class="aero-fav-bar">
            <a href="./?zoom=1">★ Photos (3D)</a>
            <a href="./code.html">★ Code</a>
            <a href="./scripts/index.html">★ Scripts</a>
            <a href="./music.html">★ Music</a>
            <a href="./film.html">★ Films</a>
            <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">★ Instagram</a>
          </div>
          <div class="aero-web2-banner">
            <div class="aero-web2-left">
              <span class="aero-web2-logo">avery<strong>beuth</strong></span>
              <span class="aero-web2-beta">beta</span>
            </div>
            <button type="button" class="aero-web2-pill" data-a-themes>6 themes ▾</button>
          </div>
          <div class="aero-home-content">
            <div class="aero-hero-card">
              <div>
                <h1>Welcome to my homepage!</h1>
                <p>Photographs, short films, screenplays, music, and open-source software by Avery Beuth. Drag this window around the desktop!</p>
                <div class="aero-hero-btns">
                  <a class="aero-cta" href="./?zoom=1">Explore 3D Photos &raquo;</a>
                  <a class="aero-cta is-blue" href="./code.html">Browse Code &raquo;</a>
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
                <div class="aero-box-head">Quick Links</div>
                <div class="aero-link-btns">
                  <a class="aero-green-btn" href="./code.html">Code &amp; Apps (89)</a>
                  <a class="aero-green-btn" href="./music.html">Music &amp; OSTs</a>
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
    } else {
      const main = document.querySelector('.site-main')
      if (main) {
        mainWin = main
        const chrome = document.createElement('div')
        chrome.className = 'aero-browser-chrome'
        chrome.setAttribute('data-theme-injected', '1')
        chrome.innerHTML = `
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">Avery Beuth &mdash; ${meta.title} &mdash; Windows Internet Explorer</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>◀</span><span>▶</span></div>
            <div class="aero-url-box">https://averybeuth.xyz/${meta.slug}</div>
            <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
          </div>
          <div class="aero-fav-bar">
            <a href="${meta.base}/">★ Home</a>
            <a href="${meta.base}/?zoom=1">★ Photos</a>
            <a href="${meta.base}/code.html">★ Code</a>
            <a href="${meta.base}/scripts/index.html">★ Scripts</a>
            <a href="${meta.base}/music.html">★ Music</a>
            <a href="${meta.base}/film.html">★ Films</a>
          </div>
          <div class="aero-web2-banner">
            <div class="aero-web2-left">
              <span class="aero-web2-logo">avery<strong>beuth</strong></span>
              <span class="aero-web2-beta">beta</span>
            </div>
            <button type="button" class="aero-web2-pill" data-a-themes>6 themes ▾</button>
          </div>
        `
        main.prepend(chrome)
        cleanupFns.push(makeDraggable(main, chrome.querySelector('.aero-main-handle')))
      }
    }

    const taskbar = document.createElement('footer')
    taskbar.className = 'aero-taskbar-global'
    taskbar.setAttribute('data-theme-injected', '1')
    taskbar.innerHTML = `
      <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">❖</button>
      <div class="aero-task-list">
        <button type="button" class="aero-task-tab is-active" data-a-restore>${meta.title} - Internet</button>
        <button type="button" class="aero-task-tab" data-a-notes>About.txt</button>
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

    document.querySelectorAll('[data-a-min]').forEach((b) => b.addEventListener('click', () => {
      mainWin?.classList.add('is-minimized')
    }))
    document.querySelectorAll('[data-a-restore]').forEach((b) => b.addEventListener('click', () => {
      mainWin?.classList.remove('is-minimized')
    }))
    document.querySelectorAll('[data-a-notes]').forEach((b) => b.addEventListener('click', () => {
      notepad.hidden = !notepad.hidden
    }))
    document.querySelectorAll('[data-a-themes]').forEach((b) => b.addEventListener('click', () => togglePopover()))
    document.querySelectorAll('[data-a-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
  }

  /* ---------- 04: SILLY (Comic Sans Sticker Notebook) ---------- */
  const mountSilly = () => {
    const ribbon = document.createElement('div')
    ribbon.className = 'silly-ribbon'
    ribbon.setAttribute('data-theme-injected', '1')
    ribbon.innerHTML = `
      <div class="silly-marquee">
        <span>★ WELCOME TO AVERY'S SUPER COOL WEBSITE!! ★ 100% REAL COMIC SANS ★ VERY PROFESSIONAL PORTFOLIO ★ CLICK EVERYTHING ★ WOW!! ★</span>
        <span>★ WELCOME TO AVERY'S SUPER COOL WEBSITE!! ★ 100% REAL COMIC SANS ★ VERY PROFESSIONAL PORTFOLIO ★ CLICK EVERYTHING ★ WOW!! ★</span>
      </div>
    `
    document.body.prepend(ribbon)

    if (isHomeDocument()) {
      const home = document.createElement('main')
      home.className = 'theme-home theme-home-silly'
      home.setAttribute('data-theme-injected', '1')
      home.innerHTML = `
        <div class="silly-home-card">
          <span class="silly-sticker">WOW!!</span>
          <h1 class="silly-hero-title">hi welcome to avery's website!!!</h1>
          <p class="silly-hero-sub">i make photos, cool apps, short films, music &amp; screenplays :)</p>
          <nav class="silly-home-nav">
            <a class="silly-pill is-pink" href="./?zoom=1">📷 3D PHOTOS!</a>
            <a class="silly-pill is-blue" href="./code.html">💻 CODE STUFF!</a>
            <a class="silly-pill is-green" href="./scripts/index.html">📝 SCRIPTS!</a>
            <a class="silly-pill is-orange" href="./music.html">🎵 MUSIC!</a>
            <a class="silly-pill is-purple" href="./film.html">🎬 FILMS!</a>
          </nav>
          <div class="silly-home-foot">
            <button type="button" class="silly-mini-btn" data-s-themes>🎨 change theme</button>
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
      mast.innerHTML = `<span>THE AVERY CHRONICLE</span><span>SECTION: ${meta.title.toUpperCase()}</span><span>ARCHIVAL PRINT</span>`
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
        <span>DWG NO. AB-${meta.slug.toUpperCase()}</span>
        <span>LAYER: ${meta.title.toUpperCase()} // SCALE 1:1</span>
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
      // Returning to Original on homepage reloads cleanly into the 3D WebGL photo gallery
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
