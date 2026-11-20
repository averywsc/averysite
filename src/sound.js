/**
 * sound.js — optional ambience, generated with Web Audio. Off by default.
 * A soft drone bed + room tone, and a faint shutter as key photos settle.
 */
export class Sound {
  constructor() { this.on = false; this.ctx = null }

  init() {
    const ctx = (this.ctx = new (window.AudioContext || window.webkitAudioContext)())
    this.master = ctx.createGain(); this.master.gain.value = 0
    const comp = ctx.createDynamicsCompressor()
    this.master.connect(comp).connect(ctx.destination)

    // drone: warm open fifths + ninth shimmer, slowly breathing
    this.filter = ctx.createBiquadFilter(); this.filter.type = 'lowpass'; this.filter.frequency.value = 680; this.filter.Q.value = 0.4
    this.filter.connect(this.master)
    ;[[110, 0.055], [164.81, 0.036], [220.4, 0.024], [246.94, 0.016], [277.18, 0.009], [329.63, 0.008]].forEach(([f, g], i) => {
      const o = ctx.createOscillator(); o.type = i === 1 || i === 2 ? 'triangle' : 'sine'
      o.frequency.value = f; o.detune.value = (i - 2.5) * 3.5
      const gain = ctx.createGain(); gain.gain.value = g
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.027 + i * 0.014
      const lg = ctx.createGain(); lg.gain.value = g * 0.55
      lfo.connect(lg).connect(gain.gain)
      o.connect(gain).connect(this.filter); o.start(); lfo.start()
    })
    // room tone: filtered pink-ish noise
    const len = ctx.sampleRate * 4
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = buf.getChannelData(0)
    let b0 = 0, b1 = 0, b2 = 0
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1
      b0 = 0.997 * b0 + w * 0.029; b1 = 0.985 * b1 + w * 0.032; b2 = 0.95 * b2 + w * 0.048
      d[i] = (b0 + b1 + b2) * 0.35
    }
    this.noiseBuf = buf
    const n = ctx.createBufferSource(); n.buffer = buf; n.loop = true
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 380; bp.Q.value = 0.6
    const ng = ctx.createGain(); ng.gain.value = 0.05
    n.connect(bp).connect(ng).connect(this.master); n.start()
  }

  toggle() {
    if (!this.ctx) this.init()
    this.on = !this.on
    const t = this.ctx.currentTime
    if (this.on) this.ctx.resume()
    this.master.gain.cancelScheduledValues(t)
    this.master.gain.setValueAtTime(this.master.gain.value, t)
    this.master.gain.linearRampToValueAtTime(this.on ? 0.85 : 0, t + (this.on ? 1.4 : 0.8))
    return this.on
  }

  /* brighter as the world brightens */
  setBrightness(b) {
    if (!this.ctx || !this.on) return
    this.filter.frequency.setTargetAtTime(420 + b * 1600, this.ctx.currentTime, 0.8)
  }

  shutter() {
    if (!this.ctx || !this.on) return
    const ctx = this.ctx, t = ctx.currentTime
    const click = (at, gainV, freq) => {
      const s = ctx.createBufferSource(); s.buffer = this.noiseBuf
      const hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = freq; hp.Q.value = 1.4
      const g = ctx.createGain()
      g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(gainV, at + 0.002)
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.05)
      s.connect(hp).connect(g).connect(this.master)
      s.start(at, Math.random() * 3, 0.06)
    }
    click(t, 0.95, 3200)
    click(t + 0.055, 0.62, 2400)
    const o = ctx.createOscillator(); o.frequency.value = 95
    const og = ctx.createGain()
    og.gain.setValueAtTime(0, t); og.gain.linearRampToValueAtTime(0.14, t + 0.004); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.08)
    o.connect(og).connect(this.master); o.start(t); o.stop(t + 0.1)
  }

  /* Tactile hover tick across prints (debounced) */
  tick(pitch = 0.5) {
    if (!this.ctx || !this.on) return
    const now = performance.now()
    if (this._lastTick && now - this._lastTick < 65) return
    this._lastTick = now
    const ctx = this.ctx, t = ctx.currentTime
    const s = ctx.createBufferSource(); s.buffer = this.noiseBuf
    const bp = ctx.createBiquadFilter()
    bp.type = 'bandpass'; bp.frequency.value = 1350 + pitch * 850; bp.Q.value = 2.0
    const g = ctx.createGain()
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(0.42, t + 0.002)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.028)
    s.connect(bp).connect(g).connect(this.master)
    s.start(t, Math.random() * 3, 0.035)

    // Warm soft wooden thump beneath the tick
    const o = ctx.createOscillator()
    o.type = 'sine'
    o.frequency.setValueAtTime(210 + pitch * 90, t)
    o.frequency.exponentialRampToValueAtTime(95, t + 0.028)
    const og = ctx.createGain()
    og.gain.setValueAtTime(0, t)
    og.gain.linearRampToValueAtTime(0.12, t + 0.002)
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.032)
    o.connect(og).connect(this.master); o.start(t); o.stop(t + 0.04)
  }

  /* Soft air swell when gliding to a print or zooming */
  whoosh() {
    if (!this.ctx || !this.on) return
    const ctx = this.ctx, t = ctx.currentTime
    const s = ctx.createBufferSource(); s.buffer = this.noiseBuf
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'; lp.Q.value = 0.75
    lp.frequency.setValueAtTime(240, t)
    lp.frequency.exponentialRampToValueAtTime(860, t + 0.32)
    lp.frequency.exponentialRampToValueAtTime(220, t + 0.95)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(0.55, t + 0.22)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.0)
    s.connect(lp).connect(g).connect(this.master)
    s.start(t, Math.random() * 2, 1.05)
  }
}
