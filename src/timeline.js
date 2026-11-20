/**
 * timeline.js — the directed take.
 * One master GSAP timeline animates a camera "rig" state. ScrollTrigger scrubs it.
 * Starts on the All Photos contact sheet (openAssemble=1), dissolves straight into
 * the 3D tunnel on first scroll, and returns to the grand reveal at the end.
 */
import gsap from 'gsap'

const DEG = Math.PI / 180

export function createState(cfg) {
  return {
    camX: 0, camY: 0, camZ: 10, yaw: 0, pitch: 0, roll: 0, fov: cfg.camera.fov,
    openAssemble: 1, // start page: all photos wall -> 0 into tunnel
    assemble: 0,     // finale: tunnel -> all photos wall
    dim: 0.72,       // backdrop dim behind name + contact
    text: 1,         // name + contact visibility
  }
}

const interp = (arr, f) => {
  const x = Math.min(0.9999, Math.max(0, f)) * (arr.length - 1)
  const i = Math.floor(x), t = x - i
  return arr[i] + (arr[i + 1] - arr[i]) * t
}

export function buildTimeline(layout, cfg, state) {
  const E = cfg.ease, C = cfg.camera, S = cfg.scroll
  const base = C.fov
  const tl = gsap.timeline({ paused: true })
  const marks = [] // times where a key photo settles (shutter)
  const F = layout.features
  const K = F.length
  const zoomK = F.findIndex((f) => f.i === layout.zoomIdx)

  const st = layout.start
  tl.set(state, {
    ...st,
    yaw: 0, pitch: 0, fov: base,
    openAssemble: 1, assemble: 0, dim: 0.72, text: 1,
  }, 0)

  const to = (vars, t, d, ease = E.glide) => tl.to(state, { ...vars, duration: Math.max(0.01, d), ease }, t)

  // ---- opening dissolve: all-photos wall -> tunnel entry (starts at t=0, zero dead zone) ----
  const openDur = 1.9
  to({ text: 0 }, 0, 0.55, E.fade)
  to({ dim: 0 }, 0, 0.85, E.fade)
  to({ openAssemble: 0 }, 0, openDur, E.glide)

  // ---- time budget for the tunnel ----
  const rawTravel = layout.N * S.perPhoto
  const tunnelTarget = S.maxTunnelScreens ? Math.min(rawTravel, S.maxTunnelScreens) : rawTravel
  const holds = K * C.hold + C.zoomHold
  const travel = Math.max(K * 1.4, tunnelTarget - holds)
  const weights = F.map((f, k) => {
    const from = k === 0 ? st.camZ : F[k - 1].cam.camZ
    const dz = Math.abs(from - f.cam.camZ)
    const pace = interp(C.pace, k / Math.max(1, K - 1)) * C.speed
    return (Math.pow(dz, 0.8) + 4) / pace
  })
  const wsum = weights.reduce((a, b) => a + b, 0)
  const durs = weights.map((w) => (travel * w) / wsum)

  let t = 0
  let pose = { ...st, fov: base }

  F.forEach((f, k) => {
    // First segment overlaps the opening mosaic scatter so the camera moves from pixel 1
    const D = k === 0 ? Math.max(durs[k], openDur + 0.5) : durs[k]
    const P1 = f.cam
    const P0 = pose
    let shot = C.shots[k % C.shots.length]
    if (k === 0) shot = 'push'
    if (shot === 'zoom' && k - 1 !== zoomK) shot = 'push'
    if (k - 1 === zoomK) shot = 'zoom'

    if (shot === 'push') {
      to({ camZ: P1.camZ }, t, D, k === 0 ? E.glide : E.travel)
      to({ camX: P1.camX, camY: P1.camY }, t + D * (k === 0 ? 0.35 : 0.06), D * (k === 0 ? 0.58 : 0.84))
      to({ roll: P1.roll }, t + D * 0.25, D * 0.7)
      to({ fov: base + 1.6 }, t, D * 0.45)
      to({ fov: base }, t + D * 0.45, D * 0.55)
    } else if (shot === 'sweep' || shot === 'climax') {
      const big = shot === 'climax' ? 1.35 : 1
      const dir = Math.sign(P1.camX - P0.camX) || 1
      to({ camZ: P1.camZ }, t, D, shot === 'climax' ? E.settle : E.travel)
      to({ camX: P1.camX + dir * C.sweep * big }, t, D * 0.44)
      to({ camX: P1.camX }, t + D * 0.44, D * 0.44, E.settle)
      to({ yaw: -dir * 2.4 * big * DEG }, t, D * 0.42)
      to({ yaw: 0 }, t + D * 0.42, D * 0.42, E.settle)
      to({ camY: P1.camY }, t + D * 0.08, D * 0.78)
      to({ roll: dir * (shot === 'climax' ? 1.4 : 0.6) * DEG }, t, D * 0.44)
      to({ roll: P1.roll }, t + D * 0.44, D * 0.44)
    } else if (shot === 'tilt') {
      to({ camZ: P1.camZ }, t, D, E.travel)
      to({ camY: P0.camY - 1.15 }, t, D * 0.42)
      to({ camY: P1.camY }, t + D * 0.42, D * 0.46, E.settle)
      to({ pitch: C.tilt * DEG }, t + D * 0.08, D * 0.4)
      to({ pitch: 0 }, t + D * 0.48, D * 0.4, E.settle)
      to({ camX: P1.camX }, t + D * 0.05, D * 0.82)
      to({ roll: P1.roll }, t + D * 0.25, D * 0.6)
    } else if (shot === 'pullback') {
      to({ camZ: P0.camZ + 3.4 }, t, D * 0.3, E.glide)
      to({ fov: base + 5 }, t, D * 0.32)
      to({ camZ: P1.camZ }, t + D * 0.3, D * 0.7, E.travel)
      to({ fov: base }, t + D * 0.32, D * 0.62)
      to({ camX: P1.camX, camY: P1.camY }, t + D * 0.28, D * 0.58, E.settle)
      to({ roll: P1.roll }, t + D * 0.36, D * 0.52)
    } else if (shot === 'zoom') {
      const zp = F[zoomK]
      const fullZ = zp.plane.z + zp.cover
      const a = D * 0.42
      to({ camZ: fullZ }, t, a, E.glide)
      to({ fov: base - 3 }, t, a)
      to({ camZ: fullZ - 0.25 }, t + a, C.zoomHold, E.breathe)
      const g = t + a + C.zoomHold
      const gd = D - a
      to({ camZ: P1.camZ }, g, gd, E.travel)
      to({ fov: base }, g, gd * 0.78)
      to({ camX: P1.camX, camY: P1.camY }, g + gd * 0.3, gd * 0.58, E.settle)
      to({ roll: P1.roll }, g + gd * 0.35, gd * 0.55)
      t += C.zoomHold
    } else if (shot === 'roll') {
      const dir = P1.camX > P0.camX ? 1 : -1
      to({ camZ: P1.camZ }, t, D, E.travel)
      to({ roll: dir * C.roll * DEG }, t, D * 0.45)
      to({ roll: P1.roll }, t + D * 0.45, D * 0.45)
      to({ camX: P1.camX, camY: P1.camY }, t + D * 0.08, D * 0.78, E.settle)
    }

    t += D
    marks.push({ t, k, i: f.i })
    const h = C.hold * (k === K - 1 ? 1.15 : 1)
    to({ camZ: P1.camZ - f.d * 0.045 }, t, h, E.breathe)
    to({ camX: P1.camX + (k % 2 ? 0.05 : -0.05) }, t, h, E.breathe)
    t += h
    pose = { ...P1, camZ: P1.camZ - f.d * 0.045, camX: P1.camX + (k % 2 ? 0.05 : -0.05), fov: base }
  })

  // ---- finale: pull back, everything gathers, then the name ----
  const M = layout.mosaic
  const fin = t
  to({ camZ: M.camZ }, fin, 2.3, E.reveal)
  to({ camX: 0, camY: 0, roll: 0, yaw: 0, pitch: 0 }, fin + 0.05, 2.0, E.settle)
  to({ fov: base }, fin, 2.1)
  to({ assemble: 1 }, fin, 2.35, E.glide)
  to({ dim: 0.78 }, fin + 2.7, 0.9, E.fade)
  to({ text: 1 }, fin + 2.95, 0.85, E.fade)
  to({ camZ: M.camZ + 0.8 }, fin + 2.35, 1.55, E.breathe)
  tl.to({}, { duration: 0.01 }, fin + 3.9)

  const duration = tl.duration()

  // Sample camZ curve so clicking ANY photo on the All Photos wall jumps straight to it
  const STEPS = 1200
  const startP = Math.min(0.95, (openDur * 0.82) / duration)
  const endP = Math.max(startP + 0.01, (fin - 0.1) / duration)
  const samples = []
  for (let s = 0; s <= STEPS; s++) {
    const p = startP + (endP - startP) * (s / STEPS)
    tl.progress(p)
    samples.push({ p, camZ: state.camZ })
  }
  const photoProgress = layout.planes.map((pl) => {
    const targetZ = pl.z + pl.fitD
    let bestP = samples[0].p, bestD = Infinity
    for (let s = 0; s < samples.length; s++) {
      const d = Math.abs(samples[s].camZ - targetZ)
      if (d < bestD) { bestD = d; bestP = samples[s].p }
    }
    return bestP
  })
  // Reset timeline back to 0 cleanly
  tl.progress(0)

  return { tl, marks, duration, finaleStart: fin, photoProgress }
}
