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
    hoverGlowLock = true
    root.style.setProperty('--glow-rgb', hit.rgb)
    root.style.setProperty('--glow-alpha', '1')
  }
  const leave = (e) => {
    if (!activeEl) return
    if (e.relatedTarget && activeEl.contains(e.relatedTarget)) return
    activeEl = null
    hoverGlowLock = false
    if (!anyPreviewPlaying && !document.querySelector('[data-portfolio-listen].is-playing')) {
      root.style.setProperty('--glow-alpha', '0')
    }
  }
  document.addEventListener('mouseover', enter)
  document.addEventListener('focusin', enter)
  document.addEventListener('mouseout', leave)
  document.addEventListener('focusout', leave)
}

function initPortfolioListen() {
  const controls = [...document.querySelectorAll('[data-portfolio-listen]')]
  if (!controls.length) return

  const sound = (activePortfolioSound = new Sound())
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
let activePreviewGlow = null
let activePortfolioSound = null
let hoverGlowLock = false

function createScratchSynth() {
  let ctx = null
  let master = null
  let bp = null
  let noiseGain = null
  let tone = null
  let toneGain = null

  const ensure = () => {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume()
      return
    }
    ctx = new (window.AudioContext || window.webkitAudioContext)()
    master = ctx.createGain()
    master.gain.value = 0.55
    master.connect(ctx.destination)

    // Vinyl surface texture + needle crackle noise buffer
    const len = ctx.sampleRate * 3
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = buf.getChannelData(0)
    let lp = 0
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1
      lp = lp * 0.72 + w * 0.28
      const crackle = Math.random() < 0.0025 ? (Math.random() * 2 - 1) * 0.9 : 0
      d[i] = lp * 0.65 + crackle
    }

    const src = ctx.createBufferSource()
    src.buffer = buf
    src.loop = true

    bp = ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.value = 520
    bp.Q.value = 2.6

    noiseGain = ctx.createGain()
    noiseGain.gain.value = 0

    src.connect(bp).connect(noiseGain).connect(master)
    src.start()

    // Subtle groove harmonic resonance for DJ scratch chirp
    tone = ctx.createOscillator()
    tone.type = 'triangle'
    tone.frequency.value = 180
    const toneFilter = ctx.createBiquadFilter()
    toneFilter.type = 'lowpass'
    toneFilter.frequency.value = 900
    toneGain = ctx.createGain()
    toneGain.gain.value = 0
    tone.connect(toneFilter).connect(toneGain).connect(master)
    tone.start()
  }

  return {
    grab() {
      ensure()
      const t = ctx.currentTime
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.frequency.setValueAtTime(115, t)
      o.frequency.exponentialRampToValueAtTime(48, t + 0.055)
      g.gain.setValueAtTime(0.16, t)
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.065)
      o.connect(g).connect(master)
      o.start(t)
      o.stop(t + 0.07)
    },
    update(velDegPerSec, active) {
      if (!ctx) return
      const t = ctx.currentTime
      const speed = Math.min(1, Math.abs(velDegPerSec) / 520)
      const freq = 340 + speed * 2100
      bp.frequency.setTargetAtTime(freq, t, 0.025)
      noiseGain.gain.setTargetAtTime(active ? 0.025 + speed * 0.42 : speed * 0.16, t, 0.03)
      tone.frequency.setTargetAtTime(130 + speed * 390, t, 0.02)
      toneGain.gain.setTargetAtTime(speed > 0.06 ? speed * 0.08 : 0, t, 0.025)
    },
  }
}

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
  const scratch = createScratchSynth()

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

  let dragging = false
  let lastPtrAngle = 0
  let lastPtrTime = 0
  let dragOffset = 0
  let scratchVel = 0

  const ptrAngle = (e) => {
    const r = disc.getBoundingClientRect()
    return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2))
  }

  disc.addEventListener('pointerdown', (e) => {
    dragging = true
    lastPtrAngle = ptrAngle(e)
    lastPtrTime = performance.now()
    scratchVel = 0
    disc.setPointerCapture(e.pointerId)
    scratch.grab()
  })

  disc.addEventListener('pointermove', (e) => {
    if (!dragging) return
    const now = performance.now()
    const a = ptrAngle(e)
    let da = a - lastPtrAngle
    if (da > Math.PI) da -= Math.PI * 2
    if (da < -Math.PI) da += Math.PI * 2
    const dDeg = (da * 180) / Math.PI
    const dt = Math.max(0.004, (now - lastPtrTime) / 1000)
    dragOffset += dDeg
    scratchVel = scratchVel * 0.4 + (dDeg / dt) * 0.6
    lastPtrAngle = a
    lastPtrTime = now
  })

  const endDrag = () => { dragging = false }
  disc.addEventListener('pointerup', endDrag)
  disc.addEventListener('pointercancel', endDrag)

  let angle = window.scrollY * 0.35
  let playSpin = 0
  let last = performance.now()
  let smoothPulse = 0
  const root = document.body

  const tick = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const portfolioPlaying = Boolean(document.querySelector('[data-portfolio-listen].is-playing'))
    const isPlaying = anyPreviewPlaying || portfolioPlaying

    if (isPlaying) {
      playSpin += dt * 42
      let rawPulse = 0
      if (portfolioPlaying && activePortfolioSound) {
        rawPulse = activePortfolioSound.getLevel()
      } else {
        // Subtle organic beat-like pulse for cross-origin SoundCloud previews
        const t = now * 0.001
        rawPulse = Math.pow(0.5 + 0.5 * Math.sin(t * Math.PI * 3.1), 2) * 0.55 + (0.5 + 0.5 * Math.sin(t * 1.4)) * 0.25
      }
      smoothPulse += (rawPulse - smoothPulse) * Math.min(1, dt * 8)
      root.style.setProperty('--vinyl-pulse', smoothPulse.toFixed(3))
      if (!hoverGlowLock) {
        const rgb = portfolioPlaying ? '196, 196, 206' : (activePreviewGlow || '196, 196, 206')
        root.style.setProperty('--glow-rgb', rgb)
        root.style.setProperty('--glow-alpha', (0.72 + smoothPulse * 0.65).toFixed(3))
      }
      stage.style.filter = `drop-shadow(0 0 ${(18 + smoothPulse * 26).toFixed(1)}px rgba(${portfolioPlaying ? '220,216,208' : (activePreviewGlow || '220,216,208')}, ${(0.08 + smoothPulse * 0.16).toFixed(3)}))`
    } else {
      smoothPulse += (0 - smoothPulse) * Math.min(1, dt * 6)
      root.style.setProperty('--vinyl-pulse', smoothPulse.toFixed(3))
      if (!hoverGlowLock && smoothPulse < 0.01) {
        root.style.setProperty('--glow-alpha', '0')
      }
      stage.style.filter = ''
    }

    if (!dragging) {
      dragOffset += scratchVel * dt
      scratchVel *= Math.exp(-dt * 4.5)
      if (Math.abs(scratchVel) < 0.5) scratchVel = 0
    } else if (now - lastPtrTime > 40) {
      scratchVel *= Math.exp(-dt * 14)
    }

    scratch.update(scratchVel, dragging)

    const target = window.scrollY * 0.35 + playSpin + dragOffset
    angle += (target - angle) * (dragging ? 0.55 : Math.min(1, dt * 10))
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
    activePreviewGlow = null
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
      activePreviewGlow = row.dataset.glow || null
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
