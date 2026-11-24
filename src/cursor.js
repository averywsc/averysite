/**
 * cursor.js — zero-lag, per-theme custom vector cursor.
 * Snaps immediately on first pointer move (no jumping from center)
 * and switches SVG geometry dynamically for each active site theme.
 */
const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, summary, .project-thumb-wrap, .album-cover-wrap, .script-card, .music-vinyl-disc, .aero-win-titlebar, .aero-win-handle, body.is-locked .finale.is-live'

const CURSOR_SHAPES = {
  original: {
    ring: '<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision"><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" /></svg>',
    dot: '<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="geometricPrecision"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>',
    arrow: false,
  },
  terminal: {
    ring: '<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="crispEdges"><path d="M18 10H10V18M46 10H54V18M10 46V54H18M54 46V54H46" fill="none" stroke="currentColor" stroke-width="2.4" /></svg>',
    dot: '<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges"><rect x="4" y="2" width="8" height="12" fill="currentColor" /></svg>',
    arrow: false,
  },
  frutiger: {
    ring: '<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5" /></svg>',
    dot: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 2L3 19.5L7.6 15.2L10.8 22L13.5 20.7L10.3 14L16.4 14L3 2Z" fill="#ffffff" stroke="#0c1c2c" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    arrow: true,
  },
  silly: {
    ring: '<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" stroke-linecap="round" /></svg>',
    dot: '<svg viewBox="0 0 28 28" width="28" height="28"><path d="M14 2L17.4 9.6L25.6 10.4L19.4 15.9L21.2 24L14 19.8L6.8 24L8.6 15.9L2.4 10.4L10.6 9.6Z" fill="#ff4fa3" stroke="#181818" stroke-width="2" stroke-linejoin="round"/></svg>',
    arrow: false,
  },
  paper: {
    ring: '<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="1.2" /></svg>',
    dot: '<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 1L14 9L9 17L4 9Z" fill="currentColor" /></svg>',
    arrow: false,
  },
  cobalt: {
    ring: '<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 4" /><path d="M32 3V13M32 51V61M3 32H13M51 32H61" stroke="currentColor" stroke-width="1.6" /></svg>',
    dot: '<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 2V16M2 9H16" stroke="currentColor" stroke-width="1.6" /><circle cx="9" cy="9" r="2" fill="currentColor" /></svg>',
    arrow: false,
  },
}

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

  root.innerHTML = '<span class="cursor__ring" aria-hidden="true"></span><span class="cursor__dot" aria-hidden="true"></span>'
  const ring = root.querySelector('.cursor__ring')
  const dot = root.querySelector('.cursor__dot')

  let activeTheme = ''
  let isArrowMode = false

  const syncThemeShape = () => {
    const t = document.documentElement.getAttribute('data-theme') || 'original'
    if (t === activeTheme) return
    activeTheme = t
    const shape = CURSOR_SHAPES[t] || CURSOR_SHAPES.original
    isArrowMode = Boolean(shape.arrow)
    ring.innerHTML = shape.ring
    dot.innerHTML = shape.dot
    root.classList.toggle('is-arrow', isArrowMode)
    // Clear any inline color overrides from homepage tinting when switching themes
    ring.style.color = ''
    dot.style.color = ''
  }
  syncThemeShape()

  const mo = new MutationObserver(syncThemeShape)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  const cur = {
    x: -100,
    y: -100,
    rx: -100,
    ry: -100,
    dx: -100,
    dy: -100,
    hover: 0,
    uiHover: false,
    visible: false,
    hasInit: false,
    sillyRot: 0,
  }

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return
    cur.x = e.clientX
    cur.y = e.clientY
    if (!cur.hasInit) {
      cur.rx = cur.dx = cur.x
      cur.ry = cur.dy = cur.y
      cur.hasInit = true
    }
    cur.visible = true
    cur.uiHover = Boolean(e.target?.closest?.(INTERACTIVE))
    root.classList.add('is-on')
    root.classList.toggle('is-clickable', cur.uiHover)
    onMove?.(e, cur)
  }, { passive: true })

  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return
    cur.x = cur.dx = e.clientX
    cur.y = cur.dy = e.clientY
    const pulse = document.createElement('span')
    pulse.className = 'cursor__pulse'
    pulse.style.left = `${e.clientX}px`
    pulse.style.top = `${e.clientY}px`
    pulse.innerHTML = (CURSOR_SHAPES[activeTheme] || CURSOR_SHAPES.original).ring
    document.body.appendChild(pulse)
    requestAnimationFrame(() => pulse.classList.add('is-active'))
    setTimeout(() => pulse.remove(), 380)
  }, { passive: true })

  const hide = () => {
    cur.visible = false
    cur.uiHover = false
    root.classList.remove('is-on', 'is-clickable')
    onLeave?.()
  }
  document.documentElement.addEventListener('mouseleave', hide)
  window.addEventListener('blur', hide)

  return {
    el: root,
    state: cur,
    update(dt, { photoHover = false, velocity = 0, tintColor = null } = {}) {
      if (!cur.hasInit) return
      const k = 1 - Math.exp(-dt * 16)
      cur.rx += (cur.x - cur.rx) * k
      cur.ry += (cur.y - cur.ry) * k
      // Zero-lag 1:1 tracking for primary dot/arrow so clicks & dragging never jump or lag
      cur.dx = cur.x
      cur.dy = cur.y

      const target = cur.uiHover ? 1 : photoHover ? 0.52 : 0
      cur.hover += (target - cur.hover) * (1 - Math.exp(-dt * 16))

      const v = Math.min(1, Math.abs(velocity) / 40)
      const baseScale = isArrowMode
        ? (0.42 + cur.hover * 0.25)
        : (0.5 + cur.hover * 0.42 + v * 0.12)
      const dotScale = isArrowMode
        ? (cur.uiHover ? 1.1 : 1)
        : (cur.uiHover ? 1.28 : photoHover ? 0.88 : 1)

      if (activeTheme === 'silly') {
        cur.sillyRot = (cur.sillyRot + dt * (cur.uiHover ? 160 : 55)) % 360
        ring.style.transform = `translate3d(${cur.rx.toFixed(1)}px, ${cur.ry.toFixed(1)}px, 0) rotate(${cur.sillyRot.toFixed(1)}deg) scale(${baseScale.toFixed(3)})`
        dot.style.transform = `translate3d(${cur.dx.toFixed(1)}px, ${cur.dy.toFixed(1)}px, 0) rotate(${(-cur.sillyRot * 0.45).toFixed(1)}deg) scale(${dotScale.toFixed(3)})`
      } else {
        ring.style.transform = `translate3d(${cur.rx.toFixed(1)}px, ${cur.ry.toFixed(1)}px, 0) scale(${baseScale.toFixed(3)}, ${(baseScale * (1 - v * 0.08)).toFixed(3)})`
        dot.style.transform = `translate3d(${cur.dx.toFixed(1)}px, ${cur.dy.toFixed(1)}px, 0) scale(${dotScale.toFixed(3)})`
      }

      // Only apply dynamic WebGL ambient tinting on the default Original photo gallery
      if (activeTheme === 'original' && tintColor && !cur.uiHover) {
        ring.style.color = tintColor(0.36 + cur.hover * 0.35)
        dot.style.color = ''
      } else if (ring.style.color) {
        ring.style.color = ''
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
