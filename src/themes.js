/**
 * themes.js — site-native theme switcher + real interactive theme shells (Terminal, Frutiger 7).
 * Persists across pages in sessionStorage.
 */

const THEMES = [
  {
    id: 'original',
    num: '01',
    name: 'Original',
    label: 'ORIGINAL',
    desc: 'Obsidian, warm cream, dot-matrix',
    themeColor: '#0b0c0f',
    mini: {
      bg: '#0b0c0f',
      ink: '#ece6dc',
      card: 'rgba(236,230,220,0.06)',
      thumb: '#1a1d24',
      accent: '#ece6dc',
      font: "'Dotmatri', monospace",
    },
  },
  {
    id: 'terminal',
    num: '02',
    name: 'Terminal',
    label: 'TERMINAL',
    desc: 'Working zsh shell & neofetch',
    themeColor: '#141615',
    mini: {
      bg: '#141615',
      ink: '#b8ffd0',
      card: 'rgba(94,242,150,0.08)',
      thumb: '#0c1810',
      accent: '#5ef296',
      font: "'Courier Prime', monospace",
    },
  },
  {
    id: 'frutiger',
    num: '03',
    name: 'Frutiger 7',
    label: 'FRUTIGER 7',
    desc: 'Aero glass desktop & browser',
    themeColor: '#091b2c',
    mini: {
      bg: 'linear-gradient(155deg, #0b243b, #144d5c 65%, #163d2b)',
      ink: '#f0faff',
      card: 'rgba(255,255,255,0.18)',
      thumb: 'rgba(103,232,249,0.28)',
      accent: '#7dd3fc',
      font: "'DM Sans', sans-serif",
    },
  },
  {
    id: 'darkroom',
    num: '04',
    name: 'Darkroom',
    label: 'DARKROOM',
    desc: 'Safelight crimson, analog film',
    themeColor: '#0c0607',
    mini: {
      bg: '#130709',
      ink: '#ffb4a6',
      card: 'rgba(255,110,90,0.1)',
      thumb: '#2a0e10',
      accent: '#ff6b57',
      font: "'Dotmatri', monospace",
    },
  },
  {
    id: 'paper',
    num: '05',
    name: 'Paper',
    label: 'PAPER',
    desc: 'Archival print, warm ink',
    themeColor: '#f3efe6',
    mini: {
      bg: '#f3efe6',
      ink: '#1a1917',
      card: 'rgba(26,25,23,0.06)',
      thumb: '#ded7c8',
      accent: '#1a1917',
      font: "'Cormorant Garamond', Georgia, serif",
    },
  },
  {
    id: 'cobalt',
    num: '06',
    name: 'Cobalt',
    label: 'COBALT',
    desc: 'Cyanotype blueprint & grid',
    themeColor: '#061121',
    mini: {
      bg: '#071326',
      ink: '#e4f2ff',
      card: 'rgba(94,194,255,0.1)',
      thumb: '#0e2544',
      accent: '#5ec2ff',
      font: "'Courier Prime', monospace",
    },
  },
]

const STORAGE_KEY = 'avery_theme'
let initialized = false

function isHomePage() {
  return Boolean(document.getElementById('stage') && document.getElementById('gl'))
}

function applyTheme(id) {
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

// Apply immediately on import so theme persists smoothly across page navigation
applyTheme(sessionStorage.getItem(STORAGE_KEY) || 'original')

export function initThemes() {
  if (initialized) return
  initialized = true

  let currentId = sessionStorage.getItem(STORAGE_KEY) || 'original'
  let backdrop = null
  let shellEl = null
  let clockTimer = null

  const removeShell = () => {
    if (clockTimer) {
      clearInterval(clockTimer)
      clockTimer = null
    }
    if (shellEl) {
      shellEl.remove()
      shellEl = null
    }
    document.body.classList.remove('is-theme-shell')
  }

  const mountTerminalShell = () => {
    removeShell()
    if (!isHomePage()) return
    document.body.classList.add('is-theme-shell')

    shellEl = document.createElement('div')
    shellEl.className = 'theme-shell theme-terminal-shell'
    shellEl.innerHTML = `
      <div class="term-titlebar">
        <div class="term-dots" aria-hidden="true">
          <button type="button" class="term-dot is-red" data-term-original title="Back to original"></button>
          <span class="term-dot is-yellow"></span>
          <span class="term-dot is-green"></span>
        </div>
        <div class="term-title">visitor@averybeuth.xyz: ~ &mdash; zsh</div>
        <div class="term-bar-actions">
          <button type="button" data-term-themes>[themes]</button>
          <button type="button" data-term-original>[original]</button>
        </div>
      </div>
      <div class="term-body" id="termBody">
        <div class="term-line"><span class="term-prompt">visitor@averybeuth.xyz:~$</span> neofetch</div>
        <div class="term-neofetch">
          <pre class="term-ascii" aria-hidden="true"> █████╗ ██████╗ 
██╔══██╗██╔══██╗
███████║██████╔╝
██╔══██║██╔══██╗
██║  ██║██████╔╝
╚═╝  ╚═╝╚═════╝ </pre>
          <div class="term-info">
            <div class="term-info-head">visitor@averybeuth.xyz</div>
            <div class="term-info-sep">----------------------</div>
            <div><span class="term-k">owner</span>   <span>Avery Beuth</span></div>
            <div><span class="term-k">about</span>   <span>Photographs, films, screenplays, music, and software.</span></div>
            <div><span class="term-k">folders</span> <a href="./?zoom=1" data-term-photos>photos/</a> <a href="./code.html">code/</a> <a href="./scripts/index.html">scripts/</a> <a href="./music.html">music/</a> <a href="./film.html">films/</a></div>
            <div><span class="term-k">links</span>   <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">instagram</a> <a href="https://github.com/averywsc" target="_blank" rel="noopener">github</a></div>
            <div><span class="term-k">theme</span>   <span>terminal</span> <button type="button" class="term-inline-btn" data-term-themes>(change)</button> <button type="button" class="term-inline-btn" data-term-original>(back to original)</button></div>
            <div class="term-swatches" aria-hidden="true">
              <span style="background:#e06c75"></span><span style="background:#e5c07b"></span><span style="background:#98c379"></span><span style="background:#56b6c2"></span><span style="background:#61afef"></span><span style="background:#c678dd"></span>
            </div>
          </div>
        </div>
        <div class="term-bio"><span class="term-k">bio:</span> photographer, filmmaker, composer &amp; developer from nz. type <span class="term-cmd">help</span> or click any folder above.</div>
        <div class="term-history" id="termHistory"></div>
        <form class="term-input-row" id="termForm" autocomplete="off">
          <label class="term-prompt" for="termInput">visitor@averybeuth.xyz:~$</label>
          <input id="termInput" class="term-input" type="text" spellcheck="false" aria-label="Terminal command" placeholder="help" />
        </form>
      </div>
    `
    document.body.appendChild(shellEl)

    shellEl.querySelectorAll('[data-term-themes]').forEach((b) => b.addEventListener('click', openPicker))
    shellEl.querySelectorAll('[data-term-original]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
    shellEl.querySelector('[data-term-photos]')?.addEventListener('click', (e) => {
      e.preventDefault()
      selectTheme('original')
    })

    const form = shellEl.querySelector('#termForm')
    const input = shellEl.querySelector('#termInput')
    const history = shellEl.querySelector('#termHistory')
    const termBody = shellEl.querySelector('#termBody')

    shellEl.addEventListener('click', (e) => {
      if (!e.target.closest('a, button, input')) input?.focus()
    })

    const printLine = (html) => {
      const div = document.createElement('div')
      div.className = 'term-out'
      div.innerHTML = html
      history.appendChild(div)
      termBody.scrollTop = termBody.scrollHeight
    }

    form?.addEventListener('submit', (e) => {
      e.preventDefault()
      const raw = (input.value || '').trim()
      input.value = ''
      if (!raw) return
      const cmd = raw.toLowerCase()
      printLine(`<span class="term-prompt">visitor@averybeuth.xyz:~$</span> ${raw.replace(/</g, '&lt;')}`)
      if (cmd === 'help') {
        printLine('commands: <span class="term-cmd">ls</span>, <span class="term-cmd">cd code</span>, <span class="term-cmd">cd music</span>, <span class="term-cmd">cd films</span>, <span class="term-cmd">cd scripts</span>, <span class="term-cmd">cd photos</span>, <span class="term-cmd">themes</span>, <span class="term-cmd">original</span>, <span class="term-cmd">clear</span>')
      } else if (cmd === 'ls') {
        printLine('drwxr-xr-x  <a href="./?zoom=1" data-term-photos>photos/</a>  <a href="./code.html">code/</a>  <a href="./scripts/index.html">scripts/</a>  <a href="./music.html">music/</a>  <a href="./film.html">films/</a>')
        history.querySelector('[data-term-photos]:last-child')?.addEventListener('click', (ev) => { ev.preventDefault(); selectTheme('original') })
      } else if (cmd === 'whoami') {
        printLine('Avery Beuth — @avery.beuth')
      } else if (cmd === 'clear') {
        history.innerHTML = ''
      } else if (cmd === 'themes') {
        openPicker()
      } else if (cmd === 'original' || cmd === 'exit') {
        selectTheme('original')
      } else if (cmd === 'cd code' || cmd === 'open code' || cmd === 'code') {
        window.location.href = './code.html'
      } else if (cmd === 'cd music' || cmd === 'open music' || cmd === 'music') {
        window.location.href = './music.html'
      } else if (cmd === 'cd films' || cmd === 'open films' || cmd === 'films' || cmd === 'cd film') {
        window.location.href = './film.html'
      } else if (cmd === 'cd scripts' || cmd === 'open scripts' || cmd === 'scripts') {
        window.location.href = './scripts/index.html'
      } else if (cmd === 'cd photos' || cmd === 'open photos' || cmd === 'photos') {
        selectTheme('original')
      } else {
        printLine(`zsh: command not found: ${raw.replace(/</g, '&lt;')} (try <span class="term-cmd">help</span>)`)
      }
    })
  }

  const mountFrutigerShell = () => {
    removeShell()
    if (!isHomePage()) return
    document.body.classList.add('is-theme-shell')

    shellEl = document.createElement('div')
    shellEl.className = 'theme-shell theme-frutiger-shell'
    shellEl.innerHTML = `
      <div class="aero-bubbles" aria-hidden="true">
        <span class="aero-bubble b1"></span>
        <span class="aero-bubble b2"></span>
        <span class="aero-bubble b3"></span>
        <span class="aero-bubble b4"></span>
      </div>
      <div class="aero-desktop">
        <nav class="aero-icons" aria-label="Desktop shortcuts">
          <button type="button" class="aero-icon" data-aero-photos>
            <span class="aero-icon-glyph">📷</span>
            <span>Photos</span>
          </button>
          <a class="aero-icon" href="./code.html">
            <span class="aero-icon-glyph">📁</span>
            <span>Code</span>
          </a>
          <a class="aero-icon" href="./scripts/index.html">
            <span class="aero-icon-glyph">📄</span>
            <span>Scripts</span>
          </a>
          <a class="aero-icon" href="./music.html">
            <span class="aero-icon-glyph">🎵</span>
            <span>Music</span>
          </a>
          <a class="aero-icon" href="./film.html">
            <span class="aero-icon-glyph">🎞️</span>
            <span>Films</span>
          </a>
          <button type="button" class="aero-icon" data-aero-themes>
            <span class="aero-icon-glyph">🎨</span>
            <span>Themes</span>
          </button>
          <button type="button" class="aero-icon" data-aero-original>
            <span class="aero-icon-glyph">⏻</span>
            <span>Original</span>
          </button>
        </nav>

        <section class="aero-window" aria-label="Browser window">
          <div class="aero-win-titlebar">
            <span class="aero-win-title">Avery Beuth - Internet</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-aero-themes title="Themes">_</button>
              <button type="button" class="aero-win-btn is-close" data-aero-original title="Back to original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <span class="aero-nav-arrows" aria-hidden="true">◀ ▶</span>
            <div class="aero-url">https://averybeuth.xyz/</div>
            <button type="button" class="aero-go-btn" data-aero-themes>Themes</button>
          </div>
          <div class="aero-fav-bar">
            <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">★ Instagram</a>
            <a href="https://github.com/averywsc" target="_blank" rel="noopener">★ GitHub</a>
            <a href="./code.html">★ Code</a>
            <a href="./music.html">★ Music</a>
          </div>
          <div class="aero-page">
            <div class="aero-page-banner">
              <span class="aero-logo">avery<strong>beuth</strong></span>
              <span class="aero-beta">beta</span>
            </div>
            <div class="aero-page-content">
              <div class="aero-hero-card">
                <div class="aero-hero-copy">
                  <h1>Welcome to my homepage!</h1>
                  <p>Photographs, short films, screenplays, music, and open-source software by Avery Beuth.</p>
                  <button type="button" class="aero-cta" data-aero-photos>Explore my photos &raquo;</button>
                </div>
                <button type="button" class="aero-starburst" data-aero-themes>
                  <strong>NEW!</strong>
                  <span>6 themes</span>
                </button>
              </div>
              <div class="aero-cols">
                <div class="aero-box">
                  <div class="aero-box-head">About me</div>
                  <p>Building tools, shooting 35mm &amp; digital, writing scripts, and composing music in Aotearoa.</p>
                </div>
                <div class="aero-box">
                  <div class="aero-box-head">Links</div>
                  <div class="aero-link-btns">
                    <a class="aero-green-btn" href="./code.html">Code &amp; Apps</a>
                    <a class="aero-green-btn" href="./music.html">Music &amp; OSTs</a>
                    <a class="aero-green-btn" href="./film.html">Short Films</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer class="aero-taskbar">
        <button type="button" class="aero-start" data-aero-themes aria-label="Start / Themes">❖</button>
        <div class="aero-task-items">
          <span class="aero-task-pill is-active">Avery Beuth - Internet</span>
          <button type="button" class="aero-task-pill" data-aero-original>Original site</button>
        </div>
        <div class="aero-clock" id="aeroClock"></div>
      </footer>
    `
    document.body.appendChild(shellEl)

    const updateClock = () => {
      const el = document.getElementById('aeroClock')
      if (!el) return
      const now = new Date()
      el.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    updateClock()
    clockTimer = setInterval(updateClock, 15000)

    shellEl.querySelectorAll('[data-aero-themes]').forEach((b) => b.addEventListener('click', openPicker))
    shellEl.querySelectorAll('[data-aero-original], [data-aero-photos]').forEach((b) => b.addEventListener('click', () => selectTheme('original')))
  }

  const syncShell = (id) => {
    if (id === 'terminal') mountTerminalShell()
    else if (id === 'frutiger') mountFrutigerShell()
    else removeShell()
  }

  const renderPreview = (theme) => {
    if (!backdrop) return
    const mini = backdrop.querySelector('.themes-mini')
    const numEl = backdrop.querySelector('.themes-meta-num')
    const nameEl = backdrop.querySelector('.themes-meta-name')
    const descEl = backdrop.querySelector('.themes-meta-desc')
    const useEl = backdrop.querySelector('.themes-in-use')
    if (!mini) return

    mini.style.background = theme.mini.bg
    mini.style.color = theme.mini.ink
    mini.style.fontFamily = theme.mini.font
    mini.querySelector('.themes-mini-brand').style.color = theme.mini.accent
    mini.querySelectorAll('.themes-mini-card').forEach((c) => {
      c.style.background = theme.mini.card
      c.style.border = `1px solid ${theme.mini.ink}22`
    })
    mini.querySelectorAll('.themes-mini-thumb').forEach((t) => {
      t.style.background = theme.mini.thumb
    })
    mini.querySelectorAll('.themes-mini-line').forEach((l) => {
      l.style.background = theme.mini.ink
    })

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
    currentId = applyTheme(id)
    syncShell(currentId)
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
            <div class="themes-mini">
              <div class="themes-mini-top">
                <span class="themes-mini-brand">averybeuth.xyz</span>
                <span class="themes-mini-nav"><span>photos</span><span>code</span><span>music</span></span>
              </div>
              <div class="themes-mini-hero">
                <div class="themes-mini-title">averybeuth.xyz</div>
                <div class="themes-mini-sub">photos, films, music and software.</div>
              </div>
              <div class="themes-mini-grid">
                <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
                <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
                <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
              </div>
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

  // Mount active interactive shell if user navigated back with Terminal/Frutiger active
  syncShell(currentId)

  // Mount trigger button in sub-page sidebar (+ mobile header) or homepage controls
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
  } else if (!railMeta && !document.querySelector('.themes-home-btn')) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'themes-home-btn'
    btn.textContent = 'themes'
    btn.addEventListener('click', openPicker)
    document.body.appendChild(btn)

    const navRight = document.querySelector('.nav-right')
    if (navRight && !navRight.querySelector('.themes-nav-btn')) {
      const navBtn = document.createElement('button')
      navBtn.type = 'button'
      navBtn.className = 'themes-nav-btn'
      navBtn.textContent = 'themes'
      navBtn.addEventListener('click', openPicker)
      navRight.insertBefore(navBtn, document.getElementById('sound') || null)
    }
  }
}
