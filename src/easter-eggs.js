/**
 * easter-eggs.js — tiny quiet secrets shared across the whole site.
 * Typed words (outside inputs):
 *   - "meow" or "cats": dot-matrix cat peek in the corner
 *   - "stars": toggle faint cursor star sparkles
 *   - Konami code (↑↑↓↓←→←→ba): dot confetti burst
 */

let booted = false

export function showCornerToast(text, duration = 2600) {
  let el = document.getElementById('eggToast')
  if (!el) {
    el = document.createElement('div')
    el.id = 'eggToast'
    el.setAttribute('aria-hidden', 'true')
    el.style.cssText = [
      'position:fixed',
      'left:50%',
      'bottom:max(24px,env(safe-area-inset-bottom))',
      'transform:translateX(-50%) translateY(8px)',
      'z-index:9997',
      'pointer-events:none',
      'font-family:"Dotmatri",ui-monospace,monospace',
      'font-size:13px',
      'letter-spacing:0.1em',
      'color:rgba(244,238,228,0.88)',
      'background:rgba(11,12,15,0.82)',
      'border:1px solid rgba(236,230,220,0.16)',
      'padding:7px 14px',
      'border-radius:999px',
      'opacity:0',
      'transition:opacity 0.35s ease,transform 0.35s ease',
      'backdrop-filter:blur(8px)',
    ].join(';')
    document.body.appendChild(el)
  }
  el.textContent = text
  requestAnimationFrame(() => {
    el.style.opacity = '1'
    el.style.transform = 'translateX(-50%) translateY(0)'
  })
  clearTimeout(el._timer)
  el._timer = setTimeout(() => {
    el.style.opacity = '0'
    el.style.transform = 'translateX(-50%) translateY(8px)'
  }, duration)
}

function spawnDotConfetti() {
  const count = 42
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span')
    p.setAttribute('aria-hidden', 'true')
    const x = 10 + Math.random() * 80
    const size = 3 + Math.random() * 5
    const dur = 1.6 + Math.random() * 1.4
    const delay = Math.random() * 0.25
    const drift = (Math.random() - 0.5) * 140
    p.style.cssText = [
      'position:fixed',
      `left:${x}vw`,
      'top:-12px',
      `width:${size}px`,
      `height:${size}px`,
      'border-radius:50%',
      'background:rgba(244,238,228,0.88)',
      'box-shadow:0 0 8px rgba(244,238,228,0.45)',
      'pointer-events:none',
      'z-index:9998',
      `transition:transform ${dur}s cubic-bezier(0.22,1,0.36,1) ${delay}s,opacity ${dur}s ease ${delay}s`,
    ].join(';')
    document.body.appendChild(p)
    requestAnimationFrame(() => {
      p.style.transform = `translate(${drift}px, ${window.innerHeight + 30}px)`
      p.style.opacity = '0'
    })
    setTimeout(() => p.remove(), (dur + delay) * 1000 + 80)
  }
}

function showCatPeek() {
  let cat = document.getElementById('eggCat')
  if (!cat) {
    cat = document.createElement('div')
    cat.id = 'eggCat'
    cat.setAttribute('aria-hidden', 'true')
    cat.style.cssText = [
      'position:fixed',
      'right:max(20px,env(safe-area-inset-right))',
      'bottom:0',
      'z-index:9996',
      'pointer-events:none',
      'font-family:"Dotmatri",ui-monospace,monospace',
      'font-size:18px',
      'letter-spacing:0.06em',
      'color:rgba(244,238,228,0.9)',
      'text-shadow:0 2px 14px rgba(0,0,0,0.9)',
      'padding:10px 14px 12px',
      'transform:translateY(100%)',
      'transition:transform 0.45s cubic-bezier(0.22,1,0.36,1)',
    ].join(';')
    document.body.appendChild(cat)
  }
  cat.textContent = '=^._.^='
  requestAnimationFrame(() => { cat.style.transform = 'translateY(0)' })
  clearTimeout(cat._blink)
  clearTimeout(cat._hide)
  cat._blink = setTimeout(() => { cat.textContent = '=^.-.^=  hi' }, 1100)
  cat._hide = setTimeout(() => { cat.style.transform = 'translateY(100%)' }, 3800)
}

export function initEasterEggs() {
  if (booted) return
  booted = true

  console.log('%caverybeuth.xyz', 'font-family:monospace;font-size:14px;color:#f4eee4;')

  let buffer = ''
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  let kIdx = 0
  let starsOn = false
  let lastSpark = 0

  window.addEventListener('pointermove', (e) => {
    if (!starsOn) return
    const now = performance.now()
    if (now - lastSpark < 38) return
    lastSpark = now
    const s = document.createElement('span')
    s.setAttribute('aria-hidden', 'true')
    const glyphs = ['·', '+', '✦', '◦']
    s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)]
    const dx = (Math.random() - 0.5) * 26
    const dy = 12 + Math.random() * 20
    s.style.cssText = [
      'position:fixed',
      `left:${e.clientX}px`,
      `top:${e.clientY}px`,
      'transform:translate(-50%,-50%)',
      'font-family:"Dotmatri",ui-monospace,monospace',
      'font-size:13px',
      'color:rgba(244,238,228,0.86)',
      'pointer-events:none',
      'z-index:9995',
      'transition:transform 0.85s ease-out,opacity 0.85s ease-out',
    ].join(';')
    document.body.appendChild(s)
    requestAnimationFrame(() => {
      s.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.4)`
      s.style.opacity = '0'
    })
    setTimeout(() => s.remove(), 900)
  })

  window.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, select')) return

    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
    if (key === konami[kIdx]) {
      kIdx++
      if (kIdx === konami.length) {
        kIdx = 0
        spawnDotConfetti()
        showCornerToast('nice')
      }
    } else {
      kIdx = key === konami[0] ? 1 : 0
    }

    if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return
    buffer = (buffer + e.key.toLowerCase()).slice(-12)

    if (buffer.endsWith('meow') || buffer.endsWith('cats')) {
      buffer = ''
      showCatPeek()
    } else if (buffer.endsWith('stars')) {
      buffer = ''
      starsOn = !starsOn
      showCornerToast(starsOn ? 'stars on' : 'stars off')
    }
  })
}
