import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/bodoni-moda/400.css'
import '@fontsource/patrick-hand/400.css'
import '@fontsource/courier-prime/400.css'
import '@fontsource/courier-prime/700.css'
import '@fontsource/sacramento/400.css'
import '@fontsource/special-elite/400.css'
import '@fontsource/lora/700-italic.css'
import '@fontsource/dm-sans/500.css'
import './pages.css'
import { startCursorLoop } from './cursor.js'
import { Sound } from './sound.js'
import { initEasterEggs } from './easter-eggs.js'

const CATEGORY_GLOW = {
  game: '214, 152, 92',
  tool: '110, 164, 212',
  app: '146, 142, 216',
  apps: '184, 198, 212',
  vr: '184, 118, 206',
  website: '216, 198, 162',
}

function initAmbientGlow() {
  const root = document.body
  let activeEl = null
  const resolveGlow = (target) => {
    const el = target?.closest?.('.album-row[data-glow], .script-card[data-glow], .project-card')
    if (!el) return null
    const rgb = el.dataset.glow || (el.classList.contains('project-card') ? (CATEGORY_GLOW[el.dataset.category] || '196, 196, 206') : '')
    return rgb ? { el, rgb } : null
  }
  const enter = (e) => {
    const hit = resolveGlow(e.target)
    if (!hit) return
    activeEl = hit.el
    root.style.setProperty('--glow-rgb', hit.rgb)
    root.style.setProperty('--glow-alpha', '1')
  }
  const leave = (e) => {
    if (!activeEl) return
    if (e.relatedTarget && activeEl.contains(e.relatedTarget)) return
    activeEl = null
    root.style.setProperty('--glow-alpha', '0')
  }
  document.addEventListener('mouseover', enter)
  document.addEventListener('focusin', enter)
  document.addEventListener('mouseout', leave)
  document.addEventListener('focusout', leave)
}

function initPortfolioListen() {
  const controls = [...document.querySelectorAll('[data-portfolio-listen]')]
  if (!controls.length) return

  const sound = new Sound()
  const sync = (playing) => {
    controls.forEach((el) => {
      el.classList.toggle('is-playing', playing)
      if (el.classList.contains('album-listen-btn')) {
        el.setAttribute('aria-pressed', String(playing))
        el.textContent = playing ? 'listening · stop' : 'listen'
      } else {
        el.setAttribute('aria-label', playing ? 'Stop still room' : 'Listen to still room')
      }
    })
  }

  controls.forEach((el) => {
    el.addEventListener('click', () => {
      const playing = sound.toggle()
      sync(playing)
    })
  })
}

function boot() {
  initEasterEggs()
  startCursorLoop()
  initPortfolioListen()
  initAmbientGlow()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}
