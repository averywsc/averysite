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

let anyPreviewPlaying = false

function initMusicVinyl() {
  const list = document.querySelector('.album-list')
  if (!list) return

  const firstImg = list.querySelector('.album-cover')
  const stage = document.createElement('div')
  stage.className = 'music-vinyl-stage'
  stage.setAttribute('aria-hidden', 'true')
  stage.innerHTML = `
    <div class="music-vinyl-disc">
      <div class="music-vinyl-label">
        <img class="music-vinyl-art" src="${firstImg?.getAttribute('src') || ''}" alt="" />
      </div>
      <span class="music-vinyl-hole"></span>
    </div>
    <span class="music-vinyl-sheen"></span>
  `
  document.body.appendChild(stage)

  const disc = stage.querySelector('.music-vinyl-disc')
  const art = stage.querySelector('.music-vinyl-art')
  const setArt = (src) => {
    if (!src || art.getAttribute('src') === src) return
    art.style.opacity = '0.35'
    art.setAttribute('src', src)
    requestAnimationFrame(() => { art.style.opacity = '1' })
  }

  list.addEventListener('mouseover', (e) => {
    const row = e.target?.closest?.('.album-row')
    const img = row?.querySelector('.album-cover')
    if (img) setArt(img.getAttribute('src'))
  })
  list.addEventListener('focusin', (e) => {
    const row = e.target?.closest?.('.album-row')
    const img = row?.querySelector('.album-cover')
    if (img) setArt(img.getAttribute('src'))
  })

  let angle = window.scrollY * 0.35
  let playSpin = 0
  let last = performance.now()
  const tick = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const portfolioPlaying = Boolean(document.querySelector('[data-portfolio-listen].is-playing'))
    if (anyPreviewPlaying || portfolioPlaying) playSpin += dt * 42
    const target = window.scrollY * 0.35 + playSpin
    angle += (target - angle) * Math.min(1, dt * 10)
    disc.style.transform = `rotate(${angle.toFixed(2)}deg)`
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

function initSoundCloudPreviews() {
  const rows = [...document.querySelectorAll('.album-row')]
  if (!rows.length) return

  const playIcon = '<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3 2.2v7.6L9.8 6 3 2.2z"/></svg>'
  const stopIcon = '<svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="2.5" y="2.5" width="7" height="7" rx="1"/></svg>'

  let openPlayer = null
  const closeCurrent = () => {
    if (!openPlayer) return
    openPlayer.btn.setAttribute('aria-expanded', 'false')
    openPlayer.btn.setAttribute('aria-label', 'Play preview')
    openPlayer.btn.classList.remove('is-open')
    openPlayer.btn.innerHTML = playIcon
    openPlayer.wrap.remove()
    openPlayer = null
    anyPreviewPlaying = false
  }

  rows.forEach((row) => {
    const scLink = row.querySelector('.album-actions a[href*="soundcloud.com"]')
    const coverWrap = row.querySelector('.album-cover-wrap')
    const body = row.querySelector('.album-body')
    if (!scLink || !coverWrap || !body) return

    const slot = document.createElement('div')
    slot.className = 'album-cover-slot'
    coverWrap.parentNode.insertBefore(slot, coverWrap)
    slot.appendChild(coverWrap)

    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'album-cover-play'
    btn.setAttribute('aria-expanded', 'false')
    btn.setAttribute('aria-label', 'Play preview')
    btn.innerHTML = playIcon
    slot.appendChild(btn)

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
      btn.setAttribute('aria-label', 'Close preview')
      btn.classList.add('is-open')
      btn.innerHTML = stopIcon
      openPlayer = { btn, wrap }
      anyPreviewPlaying = true
    })
  })
}

function boot() {
  initEasterEggs()
  startCursorLoop()
  initPortfolioListen()
  initSoundCloudPreviews()
  initMusicVinyl()
  initAmbientGlow()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}
