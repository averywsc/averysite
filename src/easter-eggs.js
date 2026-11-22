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

function toggleCrt() {
  const on = document.documentElement.classList.toggle('is-crt')
  let overlay = document.getElementById('crtOverlay')
  if (on && !overlay) {
    overlay = document.createElement('div')
    overlay.id = 'crtOverlay'
    overlay.setAttribute('aria-hidden', 'true')
    overlay.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'z-index:9994',
      'background:repeating-linear-gradient(to bottom,rgba(0,0,0,0) 0px,rgba(0,0,0,0) 2px,rgba(0,0,0,0.22) 3px),radial-gradient(ellipse 85% 85% at 50% 50%,transparent 58%,rgba(0,0,0,0.42) 100%)',
    ].join(';')
    document.body.appendChild(overlay)
  } else if (!on && overlay) {
    overlay.remove()
  }
  showCornerToast(on ? 'crt on' : 'crt off')
}

function openSecretsModal() {
  let modal = document.getElementById('eggModal')
  if (!modal) {
    modal = document.createElement('div')
    modal.id = 'eggModal'
    modal.setAttribute('role', 'dialog')
    modal.setAttribute('aria-modal', 'true')
    modal.setAttribute('aria-label', 'Easter egg binds')
    modal.style.cssText = [
      'position:fixed',
      'inset:0',
      'z-index:9999',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'padding:24px',
      'background:rgba(11,12,15,0.78)',
      'backdrop-filter:blur(10px)',
      '-webkit-backdrop-filter:blur(10px)',
      'opacity:0',
      'transition:opacity 0.25s ease',
    ].join(';')

    modal.innerHTML = `
      <div style="width:min(440px,100%);background:#111318;border:1px solid rgba(236,230,220,0.16);border-radius:6px;padding:26px 26px 22px;color:rgba(236,230,220,0.92);box-shadow:0 24px 64px rgba(0,0,0,0.65);">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:18px;">
          <h2 style="font-family:'Dotmatri',ui-monospace,monospace;font-weight:400;font-size:22px;letter-spacing:0.05em;">easter eggs</h2>
          <button type="button" data-close-eggs style="font-family:'Dotmatri',ui-monospace,monospace;font-size:13px;letter-spacing:0.08em;color:rgba(236,230,220,0.56);padding:4px 6px;">close</button>
        </div>
        <dl style="display:grid;grid-template-columns:auto minmax(0,1fr);gap:10px 18px;font-size:13px;line-height:1.5;">
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">d</dt><dd style="color:rgba(236,230,220,0.64);">darkroom safelight mode (photos)</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">r</dt><dd style="color:rgba(236,230,220,0.64);">fly to a random photo (photos)</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">← / →</dt><dd style="color:rgba(236,230,220,0.64);">step between photos (photos)</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">/</dt><dd style="color:rgba(236,230,220,0.64);">focus project search (code)</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">meow</dt><dd style="color:rgba(236,230,220,0.64);">dot-matrix cat peek</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">stars</dt><dd style="color:rgba(236,230,220,0.64);">toggle cursor sparkles</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">crt</dt><dd style="color:rgba(236,230,220,0.64);">toggle crt scanlines</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">↑↑↓↓←→←→ba</dt><dd style="color:rgba(236,230,220,0.64);">dot confetti burst</dd>
        </dl>
      </div>
    `

    const close = () => {
      modal.style.opacity = '0'
      setTimeout(() => { modal.hidden = true }, 240)
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('[data-close-eggs]')) close()
    })
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) {
        e.preventDefault()
        close()
      }
    })
    document.body.appendChild(modal)
  }

  modal.hidden = false
  requestAnimationFrame(() => { modal.style.opacity = '1' })
}

function mountPrivacyEasterEggLink() {
  const railMeta = document.querySelector('.rail-meta')
  if (!railMeta || railMeta.querySelector('.egg-trigger')) return
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'egg-trigger'
  btn.textContent = 'secrets'
  btn.addEventListener('click', openSecretsModal)
  railMeta.appendChild(btn)
}

export function initEasterEggs() {
  if (booted) return
  booted = true

  console.log('%caverybeuth.xyz', 'font-family:monospace;font-size:14px;color:#f4eee4;')
  mountPrivacyEasterEggLink()

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
    } else if (buffer.endsWith('crt')) {
      buffer = ''
      toggleCrt()
    }
  })
}
