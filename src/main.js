/**
 * main.js — boots the piece: data → atlases → preload → world → timeline → scroll.
 */
import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { resolveConfig } from './config.js'
import { orderPhotos, buildLayout } from './layout.js'
import { createState, buildTimeline } from './timeline.js'
import { World } from './scene.js'
import { createLoaderUI, loadAtlases, createTexturePool } from './loader.js'
import { Sound } from './sound.js'
import { rgbToCss, linearToSrgb, luma } from './colors.js'
import { createCursor } from './cursor.js'
import { initInteractiveWordmark } from './wordmark.js'
import { initEasterEggs, showCornerToast } from './easter-eggs.js'

gsap.registerPlugin(ScrollTrigger)

const params = new URLSearchParams(location.search)
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches || params.has('calm')
const finePointer = window.matchMedia('(pointer: fine)').matches
const isMobile = () => window.innerWidth < 760 || window.innerWidth / window.innerHeight < 0.8

const altFor = (cfg, p) => cfg.photos.alt[p.file] || p.file.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')

function applyIdentity(cfg) {
  const s = cfg.site
  const mark = document.getElementById('mark')
  if (mark) { mark.textContent = s.name; mark.href = s.nameHref }
  const fn = document.getElementById('finaleName')
  if (fn) {
    if (!fn.querySelector('.finale__wordmark')) {
      fn.innerHTML = '<img class="finale__wordmark" src="./wordmark.png" alt="avery beuth" />'
    }
    fn.href = s.nameHref
    initInteractiveWordmark()
  }
  const c = document.getElementById('finaleContact')
  if (c) { c.textContent = s.contactText; c.href = s.contactHref }
  const ap = document.getElementById('allPhotos'); if (ap) ap.textContent = s.allPhotosText
  document.title = s.title || s.name
}

function srList(cfg, photos) {
  const ul = document.getElementById('srList')
  ul.innerHTML = photos.map((p) => `<li><img src="${p.tex?.[1024] || p.src}" alt="${altFor(cfg, p).replace(/"/g, '&quot;')}" loading="lazy" width="${p.width}" height="${p.height}"></li>`).join('')
}

/* ---------- calm mode for reduced motion (or no WebGL) ---------- */
function calmMode(cfg, photos) {
  document.documentElement.classList.add('rm', 'ready')
  document.getElementById('loader')?.remove()
  const calm = document.getElementById('calm')
  calm.hidden = false
  calm.innerHTML = photos.map((p) => `<figure><img src="${p.tex?.[2048] || p.src}" alt="${altFor(cfg, p).replace(/"/g, '&quot;')}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async"></figure>`).join('') +
    `<div class="calm__end"><a class="finale__name" href="${cfg.site.nameHref}">${cfg.site.title || cfg.site.name}</a><div class="finale__links"><a class="finale__contact" href="${cfg.site.contactHref}" target="_blank" rel="noopener">${cfg.site.contactText}</a></div><nav class="finale__nav" aria-label="Portfolio sections"><a href="./code.html">code</a><span class="finale__sep" aria-hidden="true">·</span><a href="./scripts/index.html">scripts</a><span class="finale__sep" aria-hidden="true">·</span><a href="./music.html">music</a><span class="finale__sep" aria-hidden="true">·</span><a href="./film.html">films</a></nav></div>`
  document.getElementById('srList').remove()
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('is-in')), { threshold: 0.15 })
  calm.querySelectorAll('figure').forEach((f) => io.observe(f))
}

async function boot() {
  initEasterEggs()
  const bootStart = performance.now()
  let cfg = resolveConfig(isMobile())
  applyIdentity(cfg)
  const data = await (await fetch('./photos.json', { cache: 'no-cache' })).json()
  const photos = orderPhotos(data.photos, cfg)
  srList(cfg, photos)

  if (reduced) return calmMode(cfg, photos)

  const canvas = document.getElementById('gl')
  let world
  try { world = new World(canvas, cfg, [], null) } catch (e) { console.warn(e); return calmMode(cfg, photos) }

  // ---- preload atlases + first few hi-res photos ----
  const loaderUI = createLoaderUI()
  const atlases = await loadAtlases(data.atlases || [], world.renderer, cfg, (p) => loaderUI.set(p * 0.68))
  const pool = createTexturePool(world.renderer, cfg, atlases[0], 28)
  await pool.preload(photos.slice(0, Math.min(8, photos.length)), (p) => loaderUI.set(0.68 + p * 0.28))
  world.atlases = atlases
  world.pool = pool
  await document.fonts?.ready
  await loaderUI.finish()

  // ---- compose ----
  const state = createState(cfg)
  let layout, built, trigger
  const scrollEl = document.getElementById('scroll')

  const lenis = new Lenis({
    lerp: cfg.scroll.lerp,
    wheelMultiplier: cfg.scroll.wheelMultiplier,
    touchMultiplier: cfg.scroll.touchMultiplier,
    syncTouch: !finePointer,
    syncTouchLerp: 0.095,
    respectReducedMotion: false,
  })
  lenis.on('scroll', ScrollTrigger.update)
  window.__lenis = lenis

  const progressBar = document.querySelector('.progress i')
  const allPhotosBtn = document.getElementById('allPhotos')
  const zoomBtn = document.getElementById('zoomBtn')
  const updateZoomUI = () => {
    if (!zoomBtn) return
    const zoomed = world.wallZoomTarget > 1.25
    zoomBtn.setAttribute('aria-pressed', String(zoomed))
    zoomBtn.textContent = zoomed ? 'zoom out' : cfg.site.zoomText
  }

  const initialP = params.has('p') ? Math.min(1, Math.max(0, parseFloat(params.get('p')) || 0)) : 0

  // Lock logo & subheadings stationary on initial landing until user clicks to start browsing photos
  let locked = initialP === 0 && !params.has('zoom') && !params.has('overview')
  let finaleDismissed = params.has('zoom')
  let unlockedAt = 0
  let textMix = finaleDismissed ? 0 : 1
  world.locked = locked
  if (locked) lenis.stop()
  document.body.classList.toggle('is-locked', locked)

  const unlock = () => {
    if (!locked) return
    locked = false
    unlockedAt = performance.now()
    world.locked = false
    finaleDismissed = true
    document.body.classList.remove('is-locked')
    lenis.start()
    sound.whoosh()
  }

  // Smooth Apple Watch wall zoom via trackpad pinch, or scroll-up on the main page
  lenis.options.virtualScroll = (data) => {
    if (locked) {
      if (data.event.cancelable) data.event.preventDefault()
      return false
    }
    const mosaicUp = Math.max(state.openAssemble || 0, state.assemble || 0) > 0.72
    if (!mosaicUp) return true
    const pinch = data.event.ctrlKey
    const atTopZoom = lenis.targetScroll <= 24 && (data.deltaY < 0 || world.wallZoomTarget > 1.02)
    if (pinch || atTopZoom) {
      if (data.event.cancelable) data.event.preventDefault()
      if (!pinch && data.deltaY < -4 && world.wallZoomTarget < 1.3) {
        // Immediately enter Apple Watch zoom mode on first scroll-up at the main page
        world.setWallZoom(2.35)
        sound.whoosh()
      } else {
        const factor = Math.exp(-data.deltaY * (pinch ? 0.0085 : 0.0026))
        const next = world.wallZoomTarget * factor
        world.setWallZoom(next < 1.04 ? 1 : next)
      }
      updateZoomUI()
      syncHint(lenis.targetScroll)
      return false
    }
    return true
  }

  function compose(keepProgress = 0) {
    cfg = resolveConfig(isMobile())
    world.cfg = cfg
    const w = window.innerWidth, h = window.innerHeight
    world.resize(w, h)
    layout = buildLayout(photos, cfg, { aspect: w / h })
    world.setLayout(layout)
    if (built) built.tl.kill()
    trigger?.kill()
    built = buildTimeline(layout, cfg, state)
    scrollEl.style.height = `${Math.round(built.duration * h + h)}px`
    trigger = ScrollTrigger.create({
      trigger: scrollEl,
      start: 'top top',
      end: 'bottom bottom',
      scrub: cfg.scroll.scrub,
      animation: built.tl,
      onUpdate: (self) => {
        progressBar.style.transform = `scaleX(${self.progress.toFixed(4)})`
        if (allPhotosBtn) allPhotosBtn.textContent = self.progress > 0.96 ? 'top' : cfg.site.allPhotosText
      },
    })
    built.tl.progress(keepProgress).progress(0).progress(keepProgress)
    ScrollTrigger.refresh()
    lenis.resize()
    if (keepProgress > 0) lenis.scrollTo(keepProgress * ScrollTrigger.maxScroll(window), { immediate: true, force: true })
  }

  compose(initialP)
  if (initialP === 0) window.scrollTo(0, 0)

  // Start directly in zoom mode at a random place on the photo wall every visit (keeping title & links visible)
  if (initialP === 0 && !params.has('overview')) {
    world.setWallZoom(2.55, true)
    updateZoomUI()
  }

  // ---- intro: slightly longer deliberate loading hold, then smooth fade onto the zoomed random wall ----
  const intro = initialP > 0 ? { z: 0, fade: 1 } : { z: 0.35, fade: 0 }
  const holdDelay = initialP > 0 ? 50 : Math.max(380, 1550 - (performance.now() - bootStart))
  setTimeout(() => {
    if (initialP === 0) {
      gsap.to(intro, { z: 0, duration: 2.0, ease: cfg.ease.glide })
      gsap.to(intro, { fade: 1, duration: 1.35, ease: cfg.ease.fade, delay: 0.05 })
    }
    loaderUI.hide(initialP > 0 ? 0.45 : 1.15)
    document.documentElement.classList.add('ready')
  }, holdDelay)

  // ---- hint (clearly tells user to scroll down or scroll up to zoom) ----
  const hint = document.getElementById('hint')
  const hideHint = () => hint.classList.remove('is-on')
  const syncHint = (scroll = window.scrollY) => {
    if (initialP > 0) return
    const show = scroll <= 36 && world.wallZoomTarget <= 1.05
    hint.classList.toggle('is-on', show)
  }
  if (initialP === 0) setTimeout(() => syncHint(window.scrollY), 450)
  lenis.on('scroll', ({ scroll }) => syncHint(scroll))

  // ---- zoom corner button & "photos" nav trigger (Apple Watch close-up mode on the All Photos wall) ----
  const enterWallZoom = (reRoll = false) => {
    hideHint()
    const wasLocked = locked
    unlock()
    finaleDismissed = true
    if (reRoll && !wasLocked) world.randomizePan()
    const curP = trigger?.progress || 0
    if (curP > 0.08 && curP < 0.92) {
      world.setInspect(-1)
      lenis.scrollTo(0, {
        duration: 1.0,
        easing: (x) => 1 - Math.pow(1 - x, 3),
        force: true,
      })
    }
    world.setWallZoom(2.55)
    updateZoomUI()
    syncHint(lenis.targetScroll)
    if (!wasLocked) sound.whoosh()
  }

  zoomBtn?.addEventListener('click', () => {
    hideHint()
    if (locked) {
      unlock()
      world.setWallZoom(1)
      finaleDismissed = false
      updateZoomUI()
      syncHint(lenis.targetScroll)
      return
    }
    if (world.wallZoomTarget > 1.25) {
      world.setWallZoom(1)
      finaleDismissed = false
    } else {
      world.randomizePan()
      world.setWallZoom(2.55)
      finaleDismissed = true
    }
    updateZoomUI()
    syncHint(lenis.targetScroll)
    sound.whoosh()
  })

  document.getElementById('finalePhotos')?.addEventListener('click', (e) => {
    e.preventDefault()
    enterWallZoom(false)
  })
  document.getElementById('sidePhotos')?.addEventListener('click', (e) => {
    e.preventDefault()
    enterWallZoom(finaleDismissed && world.wallZoomTarget > 1.25)
  })

  document.getElementById('mark')?.addEventListener('click', (e) => {
    const atTopLocked = (trigger?.progress || 0) < 0.02 && !finaleDismissed
    if (atTopLocked) return
    e.preventDefault()
    finaleDismissed = false
    locked = true
    world.locked = true
    world.setWallZoom(2.55)
    lenis.stop()
    document.body.classList.add('is-locked')
    updateZoomUI()
    hideHint()
    sound.whoosh()
    if ((trigger?.progress || 0) >= 0.02) lenis.scrollTo(0, { duration: 1.2, force: true })
  })

  // ---- all photos corner button (straight to the end, or back to top when at the end) ----
  allPhotosBtn?.addEventListener('click', () => {
    hideHint()
    unlock()
    world.setWallZoom(1)
    updateZoomUI()
    world.setInspect(-1)
    sound.whoosh()
    const maxS = ScrollTrigger.maxScroll(window)
    const atEnd = (trigger?.progress || 0) > 0.96
    lenis.scrollTo(atEnd ? 0 : maxS, {
      duration: 1.75,
      easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
      force: true,
    })
  })

  // ---- click ANY photo (or click background on locked landing to unlock browsing) ----
  let downPos = null
  window.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button')) return
    downPos = { x: e.clientX, y: e.clientY }
    if (!locked && e.pointerType !== 'mouse') {
      world.pointerActive = true
      world.mouse.tx = (e.clientX / innerWidth) * 2 - 1
      world.mouse.ty = (e.clientY / innerHeight) * 2 - 1
    }
  })
  const inspectPhoto = (hit) => {
    if (hit < 0 || hit >= layout.planes.length) return
    hideHint()
    const targetP = built.photoProgress[hit]
    pool.request(layout.planes[hit].photo, -30, true)
    world.setWallZoom(1)
    updateZoomUI()
    world.setInspect(hit)
    sound.whoosh()
    lenis.scrollTo(targetP * ScrollTrigger.maxScroll(window), {
      duration: 1.65,
      easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
      force: true,
    })
  }

  const stepPhoto = (dir) => {
    const n = layout.planes.length
    if (!n) return
    let cur = world.inspectIdx
    if (cur < 0) {
      const p = ScrollTrigger.maxScroll(window) > 0 ? lenis.targetScroll / ScrollTrigger.maxScroll(window) : 0
      let best = 0, bestDist = Infinity
      for (let i = 0; i < n; i++) {
        const d = Math.abs(built.photoProgress[i] - p)
        if (d < bestDist) { bestDist = d; best = i }
      }
      cur = best
    }
    const next = Math.max(0, Math.min(n - 1, cur + dir))
    if (next !== cur || world.inspectIdx < 0) inspectPhoto(next)
  }

  window.addEventListener('pointerup', (e) => {
    if (!downPos) return
    const dist = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y)
    downPos = null
    if (dist > 8) return
    if (e.target.closest('a, button')) return
    if (locked || !finaleDismissed || performance.now() - unlockedAt < 350) {
      unlock()
      finaleDismissed = true
      if (e.pointerType === 'mouse') {
        world.pointerActive = true
        world.mouse.tx = (e.clientX / innerWidth) * 2 - 1
        world.mouse.ty = (e.clientY / innerHeight) * 2 - 1
      }
      return
    }
    const openA = state.openAssemble || 0
    const endA = state.assemble || 0
    const ndcX = (e.clientX / innerWidth) * 2 - 1
    const ndcY = (e.clientY / innerHeight) * 2 - 1
    let hit = -1
    if (Math.max(openA, endA) > 0.72) {
      const mz = openA >= endA ? layout.mosaicOpen.z : layout.mosaic.z
      hit = world.pickMosaic(ndcX, ndcY, mz)
    } else {
      hit = world.pickTunnel(ndcX, ndcY)
    }
    if (hit >= 0) inspectPhoto(hit)
  })

  // Release inspect lock smoothly once user resumes manual scrolling
  const releaseInspect = () => { if (world.inspectIdx >= 0) world.inspectIdx = -1 }
  window.addEventListener('wheel', releaseInspect, { passive: true })
  window.addEventListener('touchmove', releaseInspect, { passive: true })

  // Keyboard scroll comfort + silky continuous Spacebar hold-to-glide
  let spaceHeld = false
  let spaceVel = 0
  window.addEventListener('keydown', (e) => {
    if (e.target.closest('a, button, input, textarea')) return
    if (locked) {
      if (e.code === 'Space' || e.key.startsWith('Arrow') || e.key.startsWith('Page')) e.preventDefault()
      return
    }
    if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault()
      const on = document.documentElement.classList.toggle('is-darkroom')
      showCornerToast(on ? 'darkroom on' : 'darkroom off')
      return
    }
    if (e.key === 'Escape') {
      if (world.inspectIdx >= 0) {
        e.preventDefault()
        releaseInspect()
        return
      }
      if (world.wallZoomTarget > 1.05) {
        e.preventDefault()
        world.setWallZoom(1)
        updateZoomUI()
        syncHint(lenis.targetScroll)
        return
      }
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      stepPhoto(1)
      return
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      stepPhoto(-1)
      return
    }
    if (e.code === 'Space') {
      e.preventDefault()
      spaceHeld = true
      hideHint()
      releaseInspect()
      if (world.wallZoomTarget > 1.02) { world.setWallZoom(1); updateZoomUI() }
      return
    }
    const step = innerHeight * 0.65
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault(); hideHint(); releaseInspect()
      lenis.scrollTo(Math.min(lenis.limit, lenis.targetScroll + (e.key === 'ArrowDown' ? 240 : step)), { duration: 0.7 })
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault(); releaseInspect()
      lenis.scrollTo(Math.max(0, lenis.targetScroll - (e.key === 'ArrowUp' ? 240 : step)), { duration: 0.7 })
    }
  })
  window.addEventListener('keyup', (e) => { if (e.code === 'Space') spaceHeld = false })
  window.addEventListener('blur', () => { spaceHeld = false })

  // ---- sound ----
  const sound = new Sound()
  const soundBtn = document.getElementById('sound')
  soundBtn.addEventListener('click', () => {
    const on = sound.toggle()
    soundBtn.setAttribute('aria-pressed', String(on))
    soundBtn.querySelector('.sound__label').textContent = on ? 'sound · on' : 'sound'
  })

  // ---- finale DOM ----
  const finale = document.getElementById('finale')

  // ---- cursor ----
  const cursor = !isMobile()
    ? createCursor({
        onMove: (e) => {
          world.pointerActive = true
          world.mouse.tx = (e.clientX / innerWidth) * 2 - 1
          world.mouse.ty = (e.clientY / innerHeight) * 2 - 1
        },
        onLeave: () => {
          world.pointerActive = false
          world.mouse.tx = world.mouse.ty = 0
        },
      })
    : null

  // ---- resize ----
  let rt
  window.addEventListener('resize', () => {
    clearTimeout(rt)
    rt = setTimeout(() => compose(trigger ? trigger.progress : 0), 220)
  })

  // ---- debug jump ----
  window.__jump = (p) => {
    const clamped = Math.min(1, Math.max(0, p))
    hideHint()
    lenis.scrollTo(clamped * ScrollTrigger.maxScroll(window), { immediate: true, force: true })
    ScrollTrigger.update()
    built.tl.progress(clamped)
    intro.z = 0; intro.fade = 1
    progressBar.style.transform = `scaleX(${clamped.toFixed(4)})`
  }
  if (initialP > 0) window.__jump(initialP)

  let fpsEl
  if (params.has('fps')) {
    fpsEl = document.createElement('div')
    fpsEl.style.cssText = 'position:fixed;left:24px;bottom:16px;z-index:40;font:11px monospace;color:#9a9;opacity:.7'
    document.body.appendChild(fpsEl)
  }

  // ---- loop: one ticker for Lenis, ScrollTrigger and rendering ----
  const rs = {}
  let lastT = performance.now() / 1000, elapsed = 0
  let acc = 0, frames = 0, slowFor = 0, fastFor = 0
  let lastTlTime = 0, lastHover = -1, smoothDt = 1 / 60
  const progressWrap = document.querySelector('.progress')
  gsap.ticker.lagSmoothing(0)
  gsap.ticker.add((time) => {
    const now = performance.now() / 1000
    const rawDt = Math.min(0.05, Math.max(0.001, now - lastT))
    smoothDt += (rawDt - smoothDt) * 0.25
    const dt = smoothDt
    lastT = now
    elapsed += dt

    // Continuous smooth camera glide while holding Space
    spaceVel += ((spaceHeld ? 1 : 0) - spaceVel) * (1 - Math.exp(-(spaceHeld ? 3.2 : 4.8) * dt))
    if (spaceVel > 0.004 && lenis.limit > 0) {
      const nextScroll = Math.min(lenis.limit, lenis.targetScroll + spaceVel * (cfg.scroll.spaceSpeed || 1.15) * window.innerHeight * dt)
      lenis.scrollTo(nextScroll, { immediate: true, force: true })
    }

    lenis.raf(time * 1000)

    if (world.inspectIdx < 0 && world.inspectMix > 0.001) {
      // scene.js damps inspectMix smoothly toward 0
    }

    Object.assign(rs, state)
    rs.camZ = state.camZ + intro.z * (1 - built.tl.progress())
    const out = world.update(rs, dt, elapsed)
    world.render(intro.fade)

    if (out.hoveredIdx !== lastHover) {
      if (out.hoveredIdx >= 0) {
        sound.tick(layout.planes[out.hoveredIdx]?.photo.luminance || 0.5)
      }
      lastHover = out.hoveredIdx
    }
    progressWrap?.classList.toggle('is-moving', Math.abs(lenis.velocity || 0) > 1.5)

    const tt = built.tl.time()
    if (tt > lastTlTime) for (const m of built.marks) if (lastTlTime < m.t + 0.05 && tt >= m.t + 0.05) sound.shutter()
    lastTlTime = tt
    sound.setBrightness(Math.min(1, luma(out.ambient) * 30))

    // Center logo + title + sub-headings stay completely locked on landing until clicked
    if ((trigger?.progress || 0) > 0.15 && (trigger?.progress || 0) < 0.9) finaleDismissed = false
    const live = !finaleDismissed && state.text > 0.45
    const targetText = locked ? 1 : (finaleDismissed ? 0 : state.text)
    textMix += (targetText - textMix) * (1 - Math.exp(-8.5 * dt))
    const hoverDim = locked || cursor?.state.uiHover ? 0 : out.hoverAmount * 0.22
    const tx = textMix * (1 - hoverDim)
    finale.style.opacity = tx.toFixed(3)
    finale.style.transform = locked ? 'none' : `translate3d(0, ${((1 - state.text) * 14).toFixed(2)}px, 0)`
    finale.classList.toggle('is-live', live)
    document.body.classList.toggle('nav-aside', !live)
    if (zoomBtn) zoomBtn.classList.toggle('is-hidden', out.mosaicMode <= 0.65)

    // Crisp vector cursor reacts clearly to interactive controls vs hovered prints on the wall
    if (cursor && !isMobile()) {
      const tint = linearToSrgb(out.ambient.map((c) => Math.min(1, c * 9 + 0.55)))
      cursor.update(dt, {
        photoHover: out.hoveredIdx >= 0,
        velocity: lenis.velocity || 0,
        tintColor: (alpha) => rgbToCss(tint, alpha),
      })
    }

    if (elapsed > 3.0) {
      acc += dt; frames++
      if (acc >= 1) {
        const fps = frames / acc
        if (fpsEl) fpsEl.textContent = `${fps.toFixed(0)} fps · pr ${world.pr.toFixed(2)}`
        if (fps < cfg.perf.targetFps - 6) { slowFor++; fastFor = 0 } else if (fps > cfg.perf.targetFps) { fastFor++; slowFor = 0 }
        if (slowFor >= 2 && world.pr > cfg.perf.minPixelRatio) { world.setPixelRatio(Math.max(cfg.perf.minPixelRatio, world.pr - 0.25)); slowFor = 0 }
        if (fastFor >= 6 && world.pr < world.maxPR) { world.setPixelRatio(Math.min(world.maxPR, world.pr + 0.25)); fastFor = 0 }
        acc = 0; frames = 0
      }
    } else if (fpsEl) {
      fpsEl.textContent = `warmup · pr ${world.pr.toFixed(2)}`
    }
  })
}

boot().catch((e) => console.error(e))
