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

function initSoundCloudPreviews() {
  const rows = [...document.querySelectorAll('.album-row')]
  if (!rows.length) return

  let openPlayer = null
  const closeCurrent = () => {
    if (!openPlayer) return
    openPlayer.btn.setAttribute('aria-expanded', 'false')
    openPlayer.btn.textContent = 'play preview'
    openPlayer.wrap.remove()
    openPlayer = null
  }

  rows.forEach((row) => {
    const scLink = row.querySelector('.album-actions a[href*="soundcloud.com"]')
    const actions = row.querySelector('.album-actions')
    const body = row.querySelector('.album-body')
    if (!scLink || !actions || !body) return

    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'text-link'
    btn.setAttribute('aria-expanded', 'false')
    btn.textContent = 'play preview'
    actions.insertBefore(btn, actions.firstChild)

    btn.addEventListener('click', () => {
      if (openPlayer?.btn === btn) {
        closeCurrent()
        return
      }
      closeCurrent()
      const wrap = document.createElement('div')
      wrap.className = 'album-player-wrap'
      const isSet = scLink.href.includes('/sets/')
      const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(scLink.href)}&color=%23ece6dc&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`
      wrap.innerHTML = `<iframe title="SoundCloud preview" width="100%" height="${isSet ? 300 : 120}" scrolling="no" frameborder="no" allow="autoplay" src="${src}"></iframe>`
      body.appendChild(wrap)
      btn.setAttribute('aria-expanded', 'true')
      btn.textContent = 'close preview'
      openPlayer = { btn, wrap }
    })
  })
}

function boot() {
  initEasterEggs()
  startCursorLoop()
  initPortfolioListen()
  initSoundCloudPreviews()
  initAmbientGlow()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}
