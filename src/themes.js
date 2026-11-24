/**
 * themes.js — high-craft theme switcher with live mini-preview picker.
 * Persists across pages in sessionStorage (reload/new session resets cleanly if desired).
 */

const THEMES = [
  {
    id: 'original',
    num: '01',
    name: 'Original',
    label: 'ORIGINAL',
    desc: 'Obsidian, warm cream, dot-matrix',
    accent: '#f07d44',
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
    id: 'darkroom',
    num: '02',
    name: 'Darkroom',
    label: 'DARKROOM',
    desc: 'Safelight crimson, analog film',
    accent: '#ff6b57',
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
    id: 'terminal',
    num: '03',
    name: 'Terminal',
    label: 'TERMINAL',
    desc: 'Phosphor green, CRT scanlines',
    accent: '#5ef296',
    mini: {
      bg: '#040805',
      ink: '#b8ffd0',
      card: 'rgba(94,242,150,0.08)',
      thumb: '#0a190e',
      accent: '#5ef296',
      font: "'Courier Prime', monospace",
    },
  },
  {
    id: 'paper',
    num: '04',
    name: 'Paper',
    label: 'PAPER',
    desc: 'Archival print, warm terracotta',
    accent: '#c85a32',
    mini: {
      bg: '#f3efe6',
      ink: '#1a1917',
      card: 'rgba(26,25,23,0.06)',
      thumb: '#ded7c8',
      accent: '#c85a32',
      font: "'Cormorant Garamond', Georgia, serif",
    },
  },
  {
    id: 'cobalt',
    num: '05',
    name: 'Cobalt',
    label: 'COBALT',
    desc: 'Cyanotype blueprint & grid',
    accent: '#5ec2ff',
    mini: {
      bg: '#071326',
      ink: '#e4f2ff',
      card: 'rgba(94,194,255,0.1)',
      thumb: '#0e2544',
      accent: '#5ec2ff',
      font: "'Courier Prime', monospace",
    },
  },
  {
    id: 'frutiger',
    num: '06',
    name: 'Frutiger',
    label: 'FRUTIGER',
    desc: 'Oceanic glass, aqua gloss',
    accent: '#67e8f9',
    mini: {
      bg: 'linear-gradient(150deg, #071929, #0e324d)',
      ink: '#f0faff',
      card: 'rgba(165,243,252,0.14)',
      thumb: 'rgba(103,232,249,0.22)',
      accent: '#67e8f9',
      font: "'DM Sans', sans-serif",
    },
  },
]

const STORAGE_KEY = 'avery_theme'
let initialized = false

function applyTheme(id) {
  const valid = THEMES.some((t) => t.id === id) ? id : 'original'
  if (valid === 'original') {
    document.documentElement.removeAttribute('data-theme')
    sessionStorage.removeItem(STORAGE_KEY)
  } else {
    document.documentElement.setAttribute('data-theme', valid)
    sessionStorage.setItem(STORAGE_KEY, valid)
  }
  return valid
}

// Apply immediately on import so theme persists smoothly across page navigation
applyTheme(sessionStorage.getItem(STORAGE_KEY) || 'original')

export function initThemes() {
  if (initialized) return
  initialized = true

  let currentId = sessionStorage.getItem(STORAGE_KEY) || 'original'
  let backdrop = null

  const renderPreview = (theme) => {
    if (!backdrop) return
    const mini = backdrop.querySelector('.themes-mini')
    const numEl = backdrop.querySelector('.themes-meta-num')
    const nameEl = backdrop.querySelector('.themes-meta-name')
    const descEl = backdrop.querySelector('.themes-meta-desc')
    const useEl = backdrop.querySelector('.themes-in-use')
    const panel = backdrop.querySelector('.themes-panel')
    if (!mini) return

    panel.style.setProperty('--theme-accent', theme.accent)
    mini.style.background = theme.mini.bg
    mini.style.color = theme.mini.ink
    mini.style.fontFamily = theme.mini.font
    mini.querySelector('.themes-mini-brand').style.color = theme.mini.accent
    mini.querySelector('.themes-mini-title').textContent = 'averybeuth.xyz'
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
              <button type="button" class="theme-tile" data-theme-id="${t.id}" style="--theme-accent:${t.accent}">
                <div class="theme-tile-top">
                  <span class="theme-tile-num">${t.num}</span>
                  <span class="theme-tile-dot"></span>
                </div>
                <div class="theme-tile-name">${t.label}</div>
              </button>
            `).join('')}
          </div>
          <div class="themes-footer">
            <span><span class="themes-kbd">1-6</span>pick <span class="themes-kbd" style="margin-left:8px;">esc</span>close</span>
            <button type="button" class="text-link" data-close-themes style="font-size:11px;padding:2px 4px;">close</button>
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
        if (n >= 1 && n <= THEMES.length) {
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

  // Mount trigger button in sub-page sidebar or homepage bottom-left
  const railMeta = document.querySelector('.rail-meta')
  if (railMeta && !railMeta.querySelector('.themes-trigger')) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'themes-trigger'
    btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="8" cy="8" r="3"/><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M12.6 3.4l-1.4 1.4M4.8 11.2l-1.4 1.4"/></svg><span>themes</span>'
    btn.addEventListener('click', openPicker)
    railMeta.insertBefore(btn, railMeta.firstChild)
  } else if (!railMeta && !document.querySelector('.themes-home-btn')) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'themes-home-btn'
    btn.textContent = 'themes'
    btn.addEventListener('click', openPicker)
    document.body.appendChild(btn)
  }
}
