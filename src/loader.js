/**
 * loader.js — loads the compact photo atlases immediately on boot so all 300+
 * photos are ready on frame 1, and streams hi-res WebP textures into a bounded
 * LRU GPU pool as the camera travels (preventing VRAM bloat and hitches).
 */
import * as THREE from 'three'

export function createLoaderUI() {
  const el = document.getElementById('loader')
  const bar = el.querySelector('.loader__line i')
  let shown = 0, target = 0, raf, last = performance.now()
  const tick = (now = performance.now()) => {
    const dt = Math.min(0.1, (now - last) / 1000)
    last = now
    shown += (target - shown) * (1 - Math.exp(-5.2 * dt))
    bar.style.transform = `scaleX(${shown.toFixed(4)})`
    raf = requestAnimationFrame(tick)
  }
  tick()
  return {
    set(p) { target = Math.max(target, p) },
    async finish() {
      target = 1
      const t0 = performance.now()
      await new Promise((r) => {
        const wait = () => (shown > 0.985 || performance.now() - t0 > 950 ? r() : setTimeout(wait, 25))
        wait()
      })
      bar.style.transform = 'scaleX(1)'
    },
    hide(duration = 1.6) {
      el.style.transition = `opacity ${duration}s cubic-bezier(.65,0,.35,1)`
      el.style.opacity = '0'
      setTimeout(() => { cancelAnimationFrame(raf); el.remove() }, duration * 1000 + 50)
    },
  }
}

const useBitmap = typeof createImageBitmap === 'function'

async function fetchTexture(url, renderer, aniso, { flipY = true } = {}) {
  let source
  if (useBitmap) {
    const blob = await (await fetch(url)).blob()
    source = await createImageBitmap(blob, {
      imageOrientation: flipY ? 'flipY' : 'none',
      premultiplyAlpha: 'none',
      colorSpaceConversion: 'none',
    })
  } else {
    source = await new Promise((res, rej) => {
      const i = new Image()
      i.onload = () => res(i)
      i.onerror = rej
      i.src = url
    })
  }
  const tex = new THREE.Texture(source)
  tex.flipY = useBitmap ? false : flipY
  tex.colorSpace = THREE.SRGBColorSpace
  tex.generateMipmaps = true
  tex.minFilter = THREE.LinearMipmapLinearFilter
  tex.magFilter = THREE.LinearFilter
  tex.anisotropy = aniso
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
  tex.needsUpdate = true
  renderer.initTexture(tex)
  return { texture: tex, width: source.width, height: source.height, source }
}

export async function loadAtlases(urls, renderer, cfg, onProgress) {
  const maxAniso = Math.min(cfg.perf.anisotropy, renderer.capabilities.getMaxAnisotropy())
  let done = 0
  const atlases = await Promise.all(
    urls.map(async (url) => {
      const res = await fetchTexture('./' + url, renderer, maxAniso, { flipY: true })
      done++
      onProgress(done / urls.length)
      return res.texture
    })
  )
  return atlases
}

export function createTexturePool(renderer, cfg, fallbackTex, maxEntries = 28) {
  const big = Math.max(window.innerWidth, window.innerHeight) * Math.min(2, window.devicePixelRatio || 1) > 1500
  const maxAniso = Math.min(cfg.perf.anisotropy, renderer.capabilities.getMaxAnisotropy())
  const cache = new Map() // file -> { texture, width, height, source, usedAt }
  const inflight = new Map() // file -> Promise
  const queue = []
  let active = 0
  let tickCount = 0

  const pump = () => {
    while (active < 2 && queue.length) {
      queue.sort((a, b) => a.priority - b.priority)
      const job = queue.shift()
      if (cache.has(job.photo.file) || inflight.has(job.photo.file)) continue
      active++
      const size = big && job.hiRes ? 2048 : 1024
      const url = './' + (job.photo.tex?.[size] || job.photo.src)
      const p = fetchTexture(url, renderer, maxAniso, { flipY: true })
        .then((res) => {
          cache.set(job.photo.file, { ...res, usedAt: tickCount })
          trim()
        })
        .catch((e) => console.warn('hi-res load skipped', job.photo.file, e))
        .finally(() => {
          inflight.delete(job.photo.file)
          active--
          pump()
        })
      inflight.set(job.photo.file, p)
    }
  }

  const trim = () => {
    if (cache.size <= maxEntries) return
    const entries = [...cache.entries()].sort((a, b) => a[1].usedAt - b[1].usedAt)
    while (cache.size > maxEntries && entries.length) {
      const [file, entry] = entries.shift()
      if (tickCount - entry.usedAt < 6) break // keep everything touched recently
      entry.texture.dispose()
      entry.source?.close?.()
      cache.delete(file)
    }
  }

  return {
    fallback: fallbackTex,
    beginFrame() { tickCount++ },
    get(file) {
      const entry = cache.get(file)
      if (!entry) return null
      entry.usedAt = tickCount
      return entry
    },
    request(photo, priority = 0, hiRes = false) {
      if (cache.has(photo.file) || inflight.has(photo.file)) return
      const existing = queue.find((j) => j.photo.file === photo.file)
      if (existing) { existing.priority = Math.min(existing.priority, priority); return }
      queue.push({ photo, priority, hiRes })
      if (queue.length > 48) {
        queue.sort((a, b) => a.priority - b.priority)
        queue.length = 48
      }
      pump()
    },
    async preload(photos, onProgress) {
      let done = 0
      await Promise.all(
        photos.map(async (photo) => {
          const url = './' + (photo.tex?.[big ? 2048 : 1024] || photo.src)
          try {
            const res = await fetchTexture(url, renderer, maxAniso, { flipY: true })
            cache.set(photo.file, { ...res, usedAt: tickCount })
          } catch (e) {
            console.warn('preload skipped', photo.file, e)
          }
          done++
          onProgress?.(done / photos.length)
        })
      )
    },
  }
}
