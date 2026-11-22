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

function initMusicGlow() {
  const rows = [...document.querySelectorAll('.album-row[data-glow]')]
  if (!rows.length) return
  const root = document.body
  rows.forEach((row) => {
    const activate = () => {
      root.style.setProperty('--glow-rgb', row.dataset.glow)
      root.style.setProperty('--glow-alpha', '1')
    }
    const deactivate = () => {
      root.style.setProperty('--glow-alpha', '0')
    }
    row.addEventListener('mouseenter', activate)
    row.addEventListener('focusin', activate)
    row.addEventListener('mouseleave', deactivate)
    row.addEventListener('focusout', deactivate)
  })
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
  initMusicGlow()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}
