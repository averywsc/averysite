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
  startCursorLoop()
  initPortfolioListen()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}
