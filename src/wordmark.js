/**
 * wordmark.js — renders wordmark.png as interactive dot-matrix particles.
 * Preserves the exact pixel dot positions from wordmark.png while letting
 * nearby cursor movement softly ripple and brighten individual dots.
 */

export function initInteractiveWordmark() {
  const link = document.getElementById('finaleName')
  const img = link?.querySelector('.finale__wordmark')
  if (!link || !img) return

  const setup = () => {
    if (!img.naturalWidth || link.querySelector('.finale__dots')) return
    const W = img.naturalWidth
    const H = img.naturalHeight

    const off = document.createElement('canvas')
    off.width = W
    off.height = H
    const octx = off.getContext('2d', { willReadFrequently: true })
    octx.drawImage(img, 0, 0)
    const { data } = octx.getImageData(0, 0, W, H)

    // Connected-component pass over alpha mask so each circle in wordmark.png becomes one interactive dot
    const visited = new Uint8Array(W * H)
    const dots = []
    const qx = new Int32Array(4096)
    const qy = new Int32Array(4096)

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const idx = y * W + x
        if (visited[idx] || data[idx * 4 + 3] < 95) continue

        let head = 0, tail = 0
        qx[tail] = x
        qy[tail] = y
        tail++
        visited[idx] = 1

        let sumX = 0, sumY = 0, count = 0
        while (head < tail) {
          const cx = qx[head]
          const cy = qy[head]
          head++
          sumX += cx
          sumY += cy
          count++
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const nx = cx + dx
              const ny = cy + dy
              if (nx < 0 || nx >= W || ny < 0 || ny >= H) continue
              const nIdx = ny * W + nx
              if (!visited[nIdx] && data[nIdx * 4 + 3] >= 95 && tail < qx.length) {
                visited[nIdx] = 1
                qx[tail] = nx
                qy[tail] = ny
                tail++
              }
            }
          }
        }

        if (count >= 6) {
          dots.push({
            bx: sumX / count,
            by: sumY / count,
            r: Math.max(2.2, Math.sqrt(count / Math.PI)),
            ox: 0,
            oy: 0,
            vx: 0,
            vy: 0,
            glow: 0,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    if (!dots.length) return

    const canvas = document.createElement('canvas')
    canvas.className = 'finale__dots'
    canvas.setAttribute('aria-hidden', 'true')
    link.appendChild(canvas)
    img.classList.add('is-canvas-backed')

    const ctx = canvas.getContext('2d')
    const mouse = { x: -9999, y: -9999, active: false }
    let cw = 0, ch = 0, dpr = 1

    const resize = () => {
      const rect = link.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      cw = rect.width
      ch = rect.height
      canvas.width = Math.round(cw * dpr)
      canvas.height = Math.round(ch * dpr)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', (e) => {
      const rect = link.getBoundingClientRect()
      if (!rect.width) return
      mouse.x = ((e.clientX - rect.left) / rect.width) * W
      mouse.y = ((e.clientY - rect.top) / rect.height) * H
      mouse.active = true
    })
    window.addEventListener('pointerleave', () => { mouse.active = false })

    const finale = document.getElementById('finale')
    let last = performance.now()

    const tick = (now) => {
      requestAnimationFrame(tick)
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (!finale?.classList.contains('is-live')) return
      if (!cw || !ch) resize()
      if (!cw || !ch) return

      const sx = cw / W
      const sy = ch / H
      const t = now * 0.001

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, cw, ch)

      // Subtle global sign flicker rhythm
      const flick = (Math.sin(t * 1.7) > 0.985 || (Math.sin(t * 4.3) > 0.992)) ? 0.62 : 0.96

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]
        let tx = 0, ty = 0, tg = 0
        if (mouse.active) {
          const dx = d.bx - mouse.x
          const dy = d.by - mouse.y
          const dist = Math.hypot(dx, dy)
          const radius = 58
          if (dist < radius && dist > 0.01) {
            const k = (1 - dist / radius)
            const push = k * k * 11
            tx = (dx / dist) * push
            ty = (dy / dist) * push
            tg = k
          }
        }

        d.vx = (d.vx + (tx - d.ox) * 180 * dt) * Math.exp(-11 * dt)
        d.vy = (d.vy + (ty - d.oy) * 180 * dt) * Math.exp(-11 * dt)
        d.ox += d.vx * dt
        d.oy += d.vy * dt
        d.glow += (tg - d.glow) * Math.min(1, dt * 12)

        const px = (d.bx + d.ox) * sx
        const py = (d.by + d.oy) * sy
        const pr = d.r * Math.min(sx, sy) * (1 + d.glow * 0.28)
        const alpha = Math.min(1, flick * (0.88 + 0.08 * Math.sin(t * 2.1 + d.phase)) + d.glow * 0.14)

        ctx.beginPath()
        ctx.arc(px, py, pr, 0, Math.PI * 2)
        ctx.fillStyle = d.glow > 0.05
          ? `rgba(255, 252, 246, ${alpha.toFixed(3)})`
          : `rgba(244, 238, 228, ${alpha.toFixed(3)})`
        if (d.glow > 0.15) {
          ctx.shadowColor = 'rgba(248, 244, 236, 0.55)'
          ctx.shadowBlur = 10 * d.glow
        } else {
          ctx.shadowBlur = 0
        }
        ctx.fill()
      }
      ctx.shadowBlur = 0
    }

    requestAnimationFrame(tick)
  }

  if (img.complete && img.naturalWidth) setup()
  else img.addEventListener('load', setup, { once: true })
}
