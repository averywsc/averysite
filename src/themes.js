/**
 * themes.js — bespoke sub-page theme engine.
 * Homepage (index.html) is intentionally locked to the default 3D gallery theme.
 * Sub-pages (code, scripts, music, films, privacy) support 6 genuinely distinct themes.
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
    desc: 'Interactive zsh TUI, CRT scan & live CLI',
    themeColor: '#121513',
    previewClass: 'is-terminal',
  },
  {
    id: 'frutiger',
    num: '03',
    name: 'Frutiger 7',
    label: 'FRUTIGER 7',
    desc: 'Windows 7 Aero desktop, glass browser & taskbar',
    themeColor: '#071b2e',
    previewClass: 'is-frutiger',
  },
  {
    id: 'darkroom',
    num: '04',
    name: 'Darkroom',
    label: 'DARKROOM',
    desc: '35mm contact sheet, safelight glow & sprockets',
    themeColor: '#0b0405',
    previewClass: 'is-darkroom',
  },
  {
    id: 'paper',
    num: '05',
    name: 'Paper',
    label: 'PAPER',
    desc: 'Archival print broadsheet, warm cotton & ink',
    themeColor: '#f2ede2',
    previewClass: 'is-paper',
  },
  {
    id: 'cobalt',
    num: '06',
    name: 'Cobalt',
    label: 'COBALT',
    desc: 'Cyanotype architectural blueprint & CAD grid',
    themeColor: '#061429',
    previewClass: 'is-cobalt',
  },
]

const STORAGE_KEY = 'avery_theme'
let initialized = false

function isHomePage() {
  return Boolean(document.getElementById('stage') && document.getElementById('gl'))
}

function getPageMeta() {
  const path = window.location.pathname.toLowerCase()
  const inScripts = path.includes('/scripts/')
  const base = inScripts ? '..' : '.'
  let slug = 'home'
  let title = 'Portfolio'
  let cmd = 'ls -la ~/'
  if (path.includes('code')) {
    slug = 'code'
    title = 'Code'
    cmd = 'ls -la ~/code --featured --archive'
  } else if (path.includes('music')) {
    slug = 'music'
    title = 'Music'
    cmd = 'mpc playlist --verbose ~/music'
  } else if (path.includes('film')) {
    slug = 'films'
    title = 'Films'
    cmd = 'ffprobe -hide_banner ~/films/*'
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
  if (isHomePage()) {
    document.documentElement.removeAttribute('data-theme')
    return 'original'
  }
  const theme = THEMES.find((t) => t.id === id) || THEMES[0]
  const valid = theme.id
  if (valid === 'original') {
    document.documentElement.removeAttribute('data-theme')
    sessionStorage.removeItem(STORAGE_KEY)
  } else {
    document.documentElement.setAttribute('data-theme', valid)
    sessionStorage.setItem(STORAGE_KEY, valid)
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]')
  if (metaTheme && theme.themeColor) metaTheme.setAttribute('content', theme.themeColor)
  return valid
}

// Apply immediately on sub-page load to prevent theme flash
if (!isHomePage()) {
  applyThemeAttr(sessionStorage.getItem(STORAGE_KEY) || 'original')
}

export function initThemes() {
  if (initialized || isHomePage()) return
  initialized = true

  let currentId = sessionStorage.getItem(STORAGE_KEY) || 'original'
  let backdrop = null
  let cleanupFns = []

  const cleanupChrome = () => {
    while (cleanupFns.length) {
      const fn = cleanupFns.pop()
      try { fn() } catch {}
    }
    document.querySelectorAll('[data-theme-injected]').forEach((el) => el.remove())
  }

  const mountTerminalChrome = () => {
    const meta = getPageMeta()
    const startedAt = Date.now()

    // 1. Subtle animated Matrix/glyph rain background canvas
    const canvas = document.createElement('canvas')
    canvas.className = 'term-matrix-bg'
    canvas.setAttribute('data-theme-injected', '1')
    canvas.setAttribute('aria-hidden', 'true')
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    let rafId = 0
    let matrixBoost = false
    const chars = '01アイウエオカキクケコABXY#$%&*+=-:/'
    let cols = 0
    let drops = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      cols = Math.max(12, Math.floor(canvas.width / 22))
      drops = Array.from({ length: cols }, () => Math.random() * -40)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let lastDraw = 0
    const drawRain = (t) => {
      rafId = requestAnimationFrame(drawRain)
      if (t - lastDraw < (matrixBoost ? 42 : 85)) return
      lastDraw = t
      ctx.fillStyle = matrixBoost ? 'rgba(14, 18, 15, 0.14)' : 'rgba(14, 18, 15, 0.24)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = matrixBoost ? 'rgba(110, 231, 135, 0.55)' : 'rgba(110, 231, 135, 0.18)'
      ctx.font = '13px "Courier Prime", monospace'
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(ch, i * 22, drops[i] * 20)
        if (drops[i] * 20 > canvas.height && Math.random() > 0.965) drops[i] = 0
        drops[i] += matrixBoost ? 1.15 : 0.65
      }
    }
    rafId = requestAnimationFrame(drawRain)
    cleanupFns.push(() => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resizeCanvas)
    })

    // 2. Top Terminal Window Titlebar
    const topBar = document.createElement('div')
    topBar.className = 'term-winbar'
    topBar.setAttribute('data-theme-injected', '1')
    topBar.innerHTML = `
      <div class="term-dots">
        <button type="button" class="term-dot is-red" data-t-original title="Exit to Original"></button>
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

    const uptimeTimer = setInterval(() => {
      const el = document.getElementById('termUptime')
      if (!el) return
      const s = Math.floor((Date.now() - startedAt) / 1000)
      const mm = String(Math.floor(s / 60)).padStart(2, '0')
      const ss = String(s % 60).padStart(2, '0')
      el.textContent = `up ${mm}:${ss}`
    }, 1000)
    cleanupFns.push(() => clearInterval(uptimeTimer))

    // 3. Animated Terminal Boot Header + Interactive CLI inside .page-wrap
    const pageWrap = document.querySelector('.page-wrap')
    if (pageWrap) {
      const cli = document.createElement('section')
      cli.className = 'term-console'
      cli.setAttribute('data-theme-injected', '1')
      cli.setAttribute('aria-label', 'Interactive terminal')
      cli.innerHTML = `
        <div class="term-boot-line">
          <span class="term-prompt">visitor@averybeuth.xyz:~/${meta.slug}$</span>
          <span class="term-typed" id="termTyped"></span><span class="term-caret" aria-hidden="true"></span>
        </div>
        <div class="term-boot-status" id="termBootStatus"></div>
        <div class="term-cli-log" id="termCliLog"></div>
        <form class="term-cli-form" id="termCliForm" autocomplete="off">
          <label class="term-prompt" for="termCliInput">visitor@averybeuth.xyz:~/${meta.slug}$</label>
          <input id="termCliInput" class="term-cli-input" type="text" spellcheck="false" placeholder="type 'help', 'neofetch', 'matrix', 'ls', or 'cd music'..." />
        </form>
      `
      pageWrap.prepend(cli)

      // Typewriter animation for the boot command
      const typedEl = cli.querySelector('#termTyped')
      const statusEl = cli.querySelector('#termBootStatus')
      let i = 0
      const typeTimer = setInterval(() => {
        if (!typedEl) return
        i++
        typedEl.textContent = meta.cmd.slice(0, i)
        if (i >= meta.cmd.length) {
          clearInterval(typeTimer)
          const itemCount = document.querySelectorAll('.project-card, .album-row, .script-card, .film-card').length
          const msg = itemCount > 0
            ? `[OK] mounted ${itemCount} entries in ~/${meta.slug} · interactive mode ready`
            : `[OK] buffer ~/${meta.slug} loaded · interactive mode ready`
          if (statusEl) statusEl.textContent = msg
        }
      }, 28)
      cleanupFns.push(() => clearInterval(typeTimer))

      // Interactive CLI commands
      const form = cli.querySelector('#termCliForm')
      const input = cli.querySelector('#termCliInput')
      const log = cli.querySelector('#termCliLog')
      const pushLog = (html) => {
        const line = document.createElement('div')
        line.className = 'term-cli-out'
        line.innerHTML = html
        log.appendChild(line)
        log.scrollTop = log.scrollHeight
      }

      form?.addEventListener('submit', (e) => {
        e.preventDefault()
        const raw = (input.value || '').trim()
        input.value = ''
        if (!raw) return
        const c = raw.toLowerCase()
        pushLog(`<span class="term-prompt">$</span> ${raw.replace(/</g, '&lt;')}`)
        if (c === 'help') {
          pushLog('commands: <span class="term-hi">neofetch</span>, <span class="term-hi">ls</span>, <span class="term-hi">matrix</span>, <span class="term-hi">cd code</span>, <span class="term-hi">cd scripts</span>, <span class="term-hi">cd music</span>, <span class="term-hi">cd films</span>, <span class="term-hi">cd photos</span>, <span class="term-hi">themes</span>, <span class="term-hi">original</span>, <span class="term-hi">clear</span>')
        } else if (c === 'ls') {
          pushLog(`drwxr-xr-x  <a href="${meta.base}/?zoom=1">photos/</a>  <a href="${meta.base}/code.html">code/</a>  <a href="${meta.base}/scripts/index.html">scripts/</a>  <a href="${meta.base}/music.html">music/</a>  <a href="${meta.base}/film.html">films/</a>`)
        } else if (c === 'neofetch') {
          pushLog(`<pre class="term-mini-neo"> █████╗ ██████╗    visitor@averybeuth.xyz
██╔══██╗██╔══██╗   ----------------------
███████║██████╔╝   owner   Avery Beuth
██╔══██║██╔══██╗   page    ~/${meta.slug}
██║  ██║██████╔╝   shell   zsh 5.9 (web)
╚═╝  ╚═╝╚═════╝    theme   terminal [animated]</pre>`)
        } else if (c === 'matrix') {
          matrixBoost = !matrixBoost
          canvas.classList.toggle('is-boosted', matrixBoost)
          pushLog(matrixBoost ? '[OK] matrix rain overdrive: ON' : '[OK] matrix rain overdrive: ambient')
        } else if (c === 'clear') {
          log.innerHTML = ''
        } else if (c === 'themes') {
          openPicker()
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
          pushLog(`zsh: command not found: ${raw.replace(/</g, '&lt;')} — try <span class="term-hi">help</span>`)
        }
      })
    }

    // 4. Stagger animation indices on content items
    const items = [...document.querySelectorAll('.project-card, .album-row, .script-card, .film-card')]
    items.forEach((el, idx) => {
      el.style.setProperty('--term-i', String(Math.min(idx, 18)))
    })
    cleanupFns.push(() => {
      items.forEach((el) => el.style.removeProperty('--term-i'))
    })

    // Wire titlebar buttons
    topBar.querySelector('[data-t-matrix]')?.addEventListener('click', () => {
      matrixBoost = !matrixBoost
      canvas.classList.toggle('is-boosted', matrixBoost)
    })
    topBar.querySelector('[data-t-themes]')?.addEventListener('click', openPicker)
    topBar.querySelectorAll('[data-t-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
  }

  const mountFrutigerChrome = () => {
    const meta = getPageMeta()

    // 1. Animated Aero Desktop Wallpaper + floating glass bubbles
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

    // 2. Desktop Shortcut Icons on the left
    const icons = document.createElement('nav')
    icons.className = 'aero-desktop-icons'
    icons.setAttribute('data-theme-injected', '1')
    icons.setAttribute('aria-label', 'Desktop shortcuts')
    icons.innerHTML = `
      <a class="aero-d-icon" href="${meta.base}/?zoom=1">
        <span class="aero-d-glyph is-photo">📷</span><span>Photos</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'code' ? 'is-current' : ''}" href="${meta.base}/code.html">
        <span class="aero-d-glyph is-folder">📁</span><span>Code</span>
      </a>
      <a class="aero-d-icon ${meta.slug.startsWith('scripts') ? 'is-current' : ''}" href="${meta.base}/scripts/index.html">
        <span class="aero-d-glyph is-doc">📄</span><span>Scripts</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'music' ? 'is-current' : ''}" href="${meta.base}/music.html">
        <span class="aero-d-glyph is-music">🎵</span><span>Music</span>
      </a>
      <a class="aero-d-icon ${meta.slug === 'films' ? 'is-current' : ''}" href="${meta.base}/film.html">
        <span class="aero-d-glyph is-film">🎞️</span><span>Films</span>
      </a>
      <button type="button" class="aero-d-icon" data-a-themes>
        <span class="aero-d-glyph is-paint">🎨</span><span>Themes</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-original>
        <span class="aero-d-glyph is-power">⏻</span><span>Original</span>
      </button>
    `
    document.body.appendChild(icons)

    // 3. Aero Glass IE8 Browser Chrome Header inside .site-main
    const main = document.querySelector('.site-main')
    if (main) {
      const chrome = document.createElement('div')
      chrome.className = 'aero-browser-chrome'
      chrome.setAttribute('data-theme-injected', '1')
      chrome.innerHTML = `
        <div class="aero-win-titlebar">
          <span class="aero-win-title">Avery Beuth &mdash; ${meta.title} &mdash; Windows Internet Explorer</span>
          <div class="aero-win-btns">
            <button type="button" class="aero-win-btn" data-a-themes title="Themes">_</button>
            <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
          </div>
        </div>
        <div class="aero-addr-bar">
          <div class="aero-nav-orbs" aria-hidden="true"><span>◀</span><span>▶</span></div>
          <div class="aero-url-box">https://averybeuth.xyz/${meta.slug}</div>
          <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
        </div>
        <div class="aero-fav-bar">
          <a href="${meta.base}/?zoom=1">★ Photos</a>
          <a href="${meta.base}/code.html">★ Code</a>
          <a href="${meta.base}/scripts/index.html">★ Scripts</a>
          <a href="${meta.base}/music.html">★ Music</a>
          <a href="${meta.base}/film.html">★ Films</a>
          <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">★ Instagram</a>
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
    }

    // 4. Bottom Windows 7 Aero Taskbar with live clock
    const taskbar = document.createElement('footer')
    taskbar.className = 'aero-taskbar-global'
    taskbar.setAttribute('data-theme-injected', '1')
    taskbar.innerHTML = `
      <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">❖</button>
      <div class="aero-task-list">
        <span class="aero-task-tab is-active">${meta.title} - Internet</span>
        <button type="button" class="aero-task-tab" data-a-themes>Themes</button>
        <button type="button" class="aero-task-tab" data-a-original>Original site</button>
      </div>
      <div class="aero-tray-clock">
        <span id="aeroTime"></span>
        <span id="aeroDate"></span>
      </div>
    `
    document.body.appendChild(taskbar)

    const tickClock = () => {
      const now = new Date()
      const tEl = document.getElementById('aeroTime')
      const dEl = document.getElementById('aeroDate')
      if (tEl) tEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      if (dEl) dEl.textContent = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' })
    }
    tickClock()
    const clockId = setInterval(tickClock, 15000)
    cleanupFns.push(() => clearInterval(clockId))

    document.querySelectorAll('[data-a-themes]').forEach((b) => b.addEventListener('click', openPicker))
    document.querySelectorAll('[data-a-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
  }

  const mountDarkroomChrome = () => {
    const strip = document.createElement('div')
    strip.className = 'darkroom-film-edge'
    strip.setAttribute('data-theme-injected', '1')
    strip.setAttribute('aria-hidden', 'true')
    strip.innerHTML = '<span>KODAK TRI-X 400</span><span>SAFETY FILM</span><span>5063</span><span>36 EXP</span>'
    document.body.appendChild(strip)
  }

  const mountCobaltChrome = () => {
    const meta = getPageMeta()
    const pageWrap = document.querySelector('.page-wrap')
    if (!pageWrap) return
    const block = document.createElement('div')
    block.className = 'cobalt-titleblock'
    block.setAttribute('data-theme-injected', '1')
    block.innerHTML = `
      <span>DWG NO. AB-${meta.slug.toUpperCase()}</span>
      <span>SCALE 1:1</span>
      <span>CYANOTYPE ARCHIVE // 2026</span>
    `
    pageWrap.prepend(block)
  }

  const syncThemeChrome = (id) => {
    cleanupChrome()
    if (id === 'terminal') mountTerminalChrome()
    else if (id === 'frutiger') mountFrutigerChrome()
    else if (id === 'darkroom') mountDarkroomChrome()
    else if (id === 'cobalt') mountCobaltChrome()
  }

  const renderPreview = (theme) => {
    if (!backdrop) return
    const mini = backdrop.querySelector('.themes-mini')
    const numEl = backdrop.querySelector('.themes-meta-num')
    const nameEl = backdrop.querySelector('.themes-meta-name')
    const descEl = backdrop.querySelector('.themes-meta-desc')
    const useEl = backdrop.querySelector('.themes-in-use')
    if (!mini) return

    mini.className = `themes-mini ${theme.previewClass}`
    numEl.textContent = theme.num
    nameEl.textContent = theme.name
    descEl.textContent = theme.desc
    useEl.style.visibility = theme.id === currentId ? 'visible' : 'hidden'
  }

  const syncTiles = () => {
    if (!backdrop) return
    backdrop.querySelectorAll('.theme-tile').forEach((tile) => {
      tile.classList.toggle('is-active', tile.dataset.themeId === currentId)
    })
  }

  const closePicker = () => {
    if (!backdrop) return
    backdrop.classList.remove('is-open')
    setTimeout(() => { if (backdrop) backdrop.hidden = true }, 220)
  }

  const selectTheme = (id) => {
    currentId = applyThemeAttr(id)
    syncThemeChrome(currentId)
    syncTiles()
    renderPreview(THEMES.find((t) => t.id === currentId) || THEMES[0])
  }

  const openPicker = () => {
    if (!backdrop) {
      backdrop = document.createElement('div')
      backdrop.className = 'themes-backdrop'
      backdrop.setAttribute('role', 'dialog')
      backdrop.setAttribute('aria-modal', 'true')
      backdrop.setAttribute('aria-label', 'Site themes')
      backdrop.innerHTML = `
        <div class="themes-panel">
          <div class="themes-preview-frame">
            <div class="themes-mini is-original">
              <div class="themes-mini-bar">
                <span class="themes-mini-dots"><i></i><i></i><i></i></span>
                <span class="themes-mini-brand">averybeuth.xyz</span>
                <span class="themes-mini-nav"><span>code</span><span>music</span><span>films</span></span>
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
            <span class="themes-kbd-hint"><span class="themes-kbd">1-6</span>pick <span class="themes-kbd" style="margin-left:8px;">esc</span>close</span>
            <span class="themes-touch-hint">tap any theme to apply</span>
            <button type="button" class="text-link themes-close-btn" data-close-themes>close</button>
          </div>
        </div>
      `

      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop || e.target.closest('[data-close-themes]')) {
          closePicker()
          return
        }
        const tile = e.target.closest('.theme-tile')
        if (tile) selectTheme(tile.dataset.themeId)
      })

      backdrop.addEventListener('mouseover', (e) => {
        const tile = e.target.closest('.theme-tile')
        if (!tile) return
        const found = THEMES.find((t) => t.id === tile.dataset.themeId)
        if (found) renderPreview(found)
      })

      backdrop.addEventListener('mouseleave', () => {
        renderPreview(THEMES.find((t) => t.id === currentId) || THEMES[0])
      })

      window.addEventListener('keydown', (e) => {
        if (!backdrop || backdrop.hidden) return
        if (e.key === 'Escape') {
          e.preventDefault()
          closePicker()
          return
        }
        const n = Number(e.key)
        if (n >= 1 && n <= THEMES.length && !e.target.closest('input, textarea')) {
          e.preventDefault()
          selectTheme(THEMES[n - 1].id)
        }
      })

      document.body.appendChild(backdrop)
    }

    syncTiles()
    renderPreview(THEMES.find((t) => t.id === currentId) || THEMES[0])
    backdrop.hidden = false
    requestAnimationFrame(() => backdrop.classList.add('is-open'))
  }

  // Mount chrome for currently persisted theme on page load
  syncThemeChrome(currentId)

  // Mount trigger button in sub-page sidebar (.rail-meta) with identical spacing to @avery.beuth & privacy
  const railMeta = document.querySelector('.rail-meta')
  const railTopRow = document.querySelector('.rail-top-row')
  if (railMeta && !railMeta.querySelector('.themes-trigger')) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'themes-trigger'
    btn.textContent = 'themes'
    btn.addEventListener('click', openPicker)
    railMeta.insertBefore(btn, railMeta.firstChild)

    if (railTopRow && !railTopRow.querySelector('.themes-mobile-trigger')) {
      const mBtn = document.createElement('button')
      mBtn.type = 'button'
      mBtn.className = 'themes-mobile-trigger'
      mBtn.setAttribute('aria-label', 'Open site themes')
      mBtn.textContent = 'themes'
      mBtn.addEventListener('click', openPicker)
      railTopRow.appendChild(mBtn)
    }
  }
}
