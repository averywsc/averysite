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
  let style = document.getElementById('crtStyle')
  if (on && !style) {
    style = document.createElement('style')
    style.id = 'crtStyle'
    style.textContent = [
      'html.is-crt body{filter:contrast(1.1) brightness(1.04) saturate(1.08);}',
      'html.is-crt h1,html.is-crt h2,html.is-crt .rail-brand,html.is-crt .mark{text-shadow:1px 0 0 rgba(255,60,90,0.38),-1px 0 0 rgba(70,220,255,0.38),0 0 10px rgba(244,238,228,0.22);}',
    ].join('')
    document.head.appendChild(style)
  }
  if (on && !overlay) {
    overlay = document.createElement('div')
    overlay.id = 'crtOverlay'
    overlay.setAttribute('aria-hidden', 'true')
    overlay.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'z-index:9994',
      'background:repeating-linear-gradient(to bottom,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,rgba(0,0,0,0.44) 2px,rgba(0,0,0,0.44) 3px),repeating-linear-gradient(to right,rgba(255,40,40,0.03) 0px,rgba(40,255,80,0.03) 1px,rgba(40,120,255,0.03) 2px,transparent 3px)',
      'box-shadow:inset 0 0 110px rgba(0,0,0,0.72),inset 0 0 28px rgba(180,220,255,0.06)',
    ].join(';')
    document.body.appendChild(overlay)
  } else if (!on) {
    overlay?.remove()
    style?.remove()
  }
  showCornerToast(on ? 'crt on' : 'crt off')
}

export function openSecretsModal() {
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
      'padding:20px',
      'background:rgba(11,12,15,0.8)',
      'backdrop-filter:blur(12px)',
      '-webkit-backdrop-filter:blur(12px)',
      'opacity:0',
      'transition:opacity 0.25s ease',
    ].join(';')

    const secTitle = 'font-family:\'Dotmatri\',ui-monospace,monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(236,230,220,0.44);margin:16px 0 8px;'
    const dlStyle = 'display:grid;grid-template-columns:130px minmax(0,1fr);gap:7px 14px;font-size:12.5px;line-height:1.45;'
    const dtStyle = 'font-family:\'Dotmatri\',ui-monospace,monospace;color:rgba(244,238,228,0.94);'
    const ddStyle = 'color:rgba(236,230,220,0.66);'

    modal.innerHTML = `
      <div style="width:min(540px,100%);max-height:84dvh;overflow-y:auto;background:#111318;border:1px solid rgba(236,230,220,0.16);border-radius:10px;padding:24px 24px 22px;color:rgba(236,230,220,0.92);box-shadow:0 28px 72px rgba(0,0,0,0.7);">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:6px;">
          <h2 style="font-family:'Dotmatri',ui-monospace,monospace;font-weight:400;font-size:22px;letter-spacing:0.05em;">secrets</h2>
          <button type="button" data-close-eggs style="font-family:'Dotmatri',ui-monospace,monospace;font-size:13px;letter-spacing:0.08em;color:rgba(236,230,220,0.58);padding:4px 8px;cursor:pointer;">close</button>
        </div>

        <div style="${secTitle}margin-top:10px;">where to open this box</div>
        <dl style="${dlStyle}">
          <dt style="${dtStyle}">01 original</dt><dd style="${ddStyle}">bottom-left sidebar on code, music, films, scripts &amp; privacy</dd>
          <dt style="${dtStyle}">02 terminal</dt><dd style="${ddStyle}">top-right tab bar, neofetch links, or type "secrets"</dd>
          <dt style="${dtStyle}">03 desktop</dt><dd style="${ddStyle}">Secrets.txt icon on the desktop or taskbar button</dd>
          <dt style="${dtStyle}">04 silly</dt><dd style="${ddStyle}">bottom footer on home or top nav bar on sub-pages</dd>
          <dt style="${dtStyle}">05 paper</dt><dd style="${ddStyle}">masthead nav bar next to Themes &amp; Original</dd>
          <dt style="${dtStyle}">06 cobalt</dt><dd style="${ddStyle}">blueprint sheet nav bar next to THEMES &amp; ORIGINAL</dd>
        </dl>

        <div style="${secTitle}">global &amp; original</div>
        <dl style="${dlStyle}">
          <dt style="${dtStyle}">r</dt><dd style="${ddStyle}">fly to a random photo (photos)</dd>
          <dt style="${dtStyle}">&larr; / &rarr;</dt><dd style="${ddStyle}">step between photos (photos)</dd>
          <dt style="${dtStyle}">/</dt><dd style="${ddStyle}">focus project search (code)</dd>
          <dt style="${dtStyle}">meow / cats</dt><dd style="${ddStyle}">dot-matrix cat peek</dd>
          <dt style="${dtStyle}">stars</dt><dd style="${ddStyle}">toggle cursor sparkles</dd>
          <dt style="${dtStyle}">crt</dt><dd style="${ddStyle}">toggle crt scanlines</dd>
          <dt style="${dtStyle}">&uarr;&uarr;&darr;&darr;&larr;&rarr;&larr;&rarr;ba</dt><dd style="${ddStyle}">dot confetti burst</dd>
        </dl>

        <div style="${secTitle}">02 terminal</div>
        <dl style="${dlStyle}">
          <dt style="${dtStyle}">ily / love u</dt><dd style="${ddStyle}">love u too</dd>
          <dt style="${dtStyle}">cats / meow</dt><dd style="${ddStyle}">ascii cat says meow</dd>
          <dt style="${dtStyle}">matrix</dt><dd style="${ddStyle}">boost or dim the background rain</dd>
          <dt style="${dtStyle}">coffee</dt><dd style="${ddStyle}">brew a flat white</dd>
          <dt style="${dtStyle}">sudo / rm -rf</dt><dd style="${ddStyle}">forbidden commands</dd>
        </dl>

        <div style="${secTitle}">03 desktop</div>
        <dl style="${dlStyle}">
          <dt style="${dtStyle}">clock &times;3</dt><dd style="${ddStyle}">trigger classic blue screen</dd>
          <dt style="${dtStyle}">click bubbles</dt><dd style="${ddStyle}">pop the floating aero bubbles</dd>
        </dl>

        <div style="${secTitle}">04 silly</div>
        <dl style="${dlStyle}">
          <dt style="${dtStyle}">poke smiley</dt><dd style="${ddStyle}">annoy the paint face</dd>
          <dt style="${dtStyle}">sign "avery"</dt><dd style="${ddStyle}">special guestbook accusation</dd>
          <dt style="${dtStyle}">do not press</dt><dd style="${ddStyle}">knock the whole site over</dd>
        </dl>

        <div style="${secTitle}">05 paper</div>
        <dl style="${dlStyle}">
          <dt style="${dtStyle}">masthead &times;3</dt><dd style="${ddStyle}">extra edition stamp &amp; new front photo</dd>
          <dt style="${dtStyle}">click auckland</dt><dd style="${ddStyle}">live auckland weather dispatch</dd>
        </dl>

        <div style="${secTitle}">06 cobalt</div>
        <dl style="${dlStyle}">
          <dt style="${dtStyle}">click scale 1:1</dt><dd style="${ddStyle}">toggle inverted diazo whiteprint</dd>
          <dt style="${dtStyle}">click a1-f1</dt><dd style="${ddStyle}">lock grid coordinate telemetry</dd>
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

  let starsTimer = null
  const spawnStar = (x, y, ambient = false) => {
    const s = document.createElement('span')
    s.setAttribute('aria-hidden', 'true')
    const glyphs = ambient ? ['✦', '✧', '·'] : ['✦', '✧', '⋆', '+']
    const colors = ['rgba(255,250,235,0.95)', 'rgba(255,232,178,0.92)', 'rgba(222,238,255,0.9)']
    s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)]
    const dx = (Math.random() - 0.5) * (ambient ? 18 : 44)
    const dy = (ambient ? -16 : 10) + (Math.random() - 0.5) * 28
    const rot = (Math.random() - 0.5) * 140
    const size = ambient ? 10 + Math.random() * 8 : 11 + Math.random() * 10
    const dur = ambient ? 1.5 : 0.95
    const color = colors[Math.floor(Math.random() * colors.length)]
    s.style.cssText = [
      'position:fixed',
      `left:${x}px`,
      `top:${y}px`,
      'transform:translate(-50%,-50%) scale(0.5) rotate(0deg)',
      'font-family:"Dotmatri",ui-monospace,monospace',
      `font-size:${size.toFixed(1)}px`,
      `color:${color}`,
      `text-shadow:0 0 10px ${color},0 0 20px rgba(255,244,210,0.45)`,
      'pointer-events:none',
      'z-index:9995',
      `transition:transform ${dur}s cubic-bezier(0.22,1,0.36,1),opacity ${dur}s ease-out`,
    ].join(';')
    document.body.appendChild(s)
    requestAnimationFrame(() => {
      s.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1.15) rotate(${rot}deg)`
      s.style.opacity = '0'
    })
    setTimeout(() => s.remove(), dur * 1000 + 60)
  }

  window.addEventListener('pointermove', (e) => {
    if (!starsOn) return
    const now = performance.now()
    if (now - lastSpark < 22) return
    lastSpark = now
    spawnStar(e.clientX, e.clientY, false)
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
      clearInterval(starsTimer)
      if (starsOn) {
        starsTimer = setInterval(() => {
          spawnStar(Math.random() * window.innerWidth, Math.random() * window.innerHeight, true)
        }, 160)
      }
      showCornerToast(starsOn ? 'stars on' : 'stars off')
    } else if (buffer.endsWith('crt')) {
      buffer = ''
      toggleCrt()
    }
  })
}
