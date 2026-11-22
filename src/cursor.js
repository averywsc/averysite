/**
 * cursor.js — crisp vector custom cursor shared across homepage and sub-pages.
 * Uses oversized SVG primitives scaled down cleanly so rings stay sharp at any DPI.
 */
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary, .project-thumb-wrap, .album-cover-wrap, .script-card, body.is-locked .finale.is-live'

export function createCursor({ onMove, onLeave } = {}) {
  const finePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches
  if (!finePointer) return null

  document.documentElement.classList.add('has-cursor')

  let root = document.getElementById('cursor')
  if (!root) {
    root = document.createElement('div')
    root.id = 'cursor'
    root.className = 'cursor'
    root.setAttribute('aria-hidden', 'true')
    document.body.appendChild(root)
  }

  root.innerHTML = `
    <span class="cursor__ring" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision">
        <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
    </span>
    <span class="cursor__dot" aria-hidden="true">
      <svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="geometricPrecision">
        <circle cx="8" cy="8" r="3" fill="currentColor" />
      </svg>
    </span>
  `

  const ring = root.querySelector('.cursor__ring')
  const dot = root.querySelector('.cursor__dot')
  const cur = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    rx: window.innerWidth / 2,
    ry: window.innerHeight / 2,
    dx: window.innerWidth / 2,
    dy: window.innerHeight / 2,
    hover: 0,
    uiHover: false,
    visible: false,
  }

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return
    cur.x = e.clientX
    cur.y = e.clientY
    cur.visible = true
    cur.uiHover = Boolean(e.target?.closest?.(INTERACTIVE))
    root.classList.add('is-on')
    root.classList.toggle('is-clickable', cur.uiHover)
    onMove?.(e, cur)
  }, { passive: true })

  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return
    const pulse = document.createElement('span')
    pulse.className = 'cursor__pulse'
    pulse.style.left = `${e.clientX}px`
    pulse.style.top = `${e.clientY}px`
    pulse.innerHTML = '<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision"><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" /></svg>'
    document.body.appendChild(pulse)
    requestAnimationFrame(() => pulse.classList.add('is-active'))
    setTimeout(() => pulse.remove(), 380)
  }, { passive: true })

  document.documentElement.addEventListener('mouseleave', () => {
    cur.visible = false
    cur.uiHover = false
    root.classList.remove('is-on', 'is-clickable')
    onLeave?.()
  })

  window.addEventListener('blur', () => {
    cur.visible = false
    cur.uiHover = false
    root.classList.remove('is-on', 'is-clickable')
    onLeave?.()
  })

  return {
    el: root,
    state: cur,
    update(dt, { photoHover = false, velocity = 0, tintColor = null } = {}) {
      const k = 1 - Math.exp(-dt * 12)
      const k2 = 1 - Math.exp(-dt * 30)
      cur.rx += (cur.x - cur.rx) * k
      cur.ry += (cur.y - cur.ry) * k
      cur.dx += (cur.x - cur.dx) * k2
      cur.dy += (cur.y - cur.dy) * k2

      const target = cur.uiHover ? 1 : photoHover ? 0.52 : 0
      cur.hover += (target - cur.hover) * (1 - Math.exp(-dt * 14))

      const v = Math.min(1, Math.abs(velocity) / 40)
      const baseScale = 0.5 + cur.hover * 0.44 + v * 0.14
      const dotScale = cur.uiHover ? 1.35 : photoHover ? 0.85 : 1

      ring.style.transform = `translate3d(${cur.rx.toFixed(2)}px, ${cur.ry.toFixed(2)}px, 0) scale(${baseScale.toFixed(3)}, ${(baseScale * (1 - v * 0.1)).toFixed(3)})`
      dot.style.transform = `translate3d(${cur.dx.toFixed(2)}px, ${cur.dy.toFixed(2)}px, 0) scale(${dotScale.toFixed(3)})`

      if (cur.uiHover) {
        ring.style.color = 'rgba(255, 255, 255, 0.96)'
        dot.style.color = '#ffffff'
      } else if (tintColor) {
        ring.style.color = tintColor(0.36 + cur.hover * 0.35)
        dot.style.color = 'rgba(245, 240, 232, 0.94)'
      } else {
        ring.style.color = `rgba(244, 238, 228, ${(0.36 + cur.hover * 0.4).toFixed(2)})`
        dot.style.color = 'rgba(245, 240, 232, 0.94)'
      }
    },
  }
}

export function startCursorLoop() {
  const cursor = createCursor()
  if (!cursor) return
  let last = performance.now()
  const tick = (now) => {
    const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000))
    last = now
    cursor.update(dt)
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}
