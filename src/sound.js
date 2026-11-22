/**
 * sound.js — optional ambience, generated with Web Audio. Off by default.
 * A soft drone bed + room tone, and a faint shutter as key photos settle.
 */
export class Sound {
  constructor() {
    this.on = false
    this.sfxOn = true
    this.ctx = null
  }

  ensureCtx() {
    if (this.ctx) return this.ctx
    const ctx = (this.ctx = new (window.AudioContext || window.webkitAudioContext)())
    const comp = ctx.createDynamicsCompressor()
    this.analyser = ctx.createAnalyser()
    this.analyser.fftSize = 128
    this.analyser.smoothingTimeConstant = 0.86
    this._fftData = new Uint8Array(this.analyser.frequencyBinCount)
    comp.connect(this.analyser).connect(ctx.destination)

    this.master = ctx.createGain()
    this.master.gain.value = 0
    this.master.connect(comp)

    this.sfxMaster = ctx.createGain()
    this.sfxMaster.gain.value = 0.85
    this.sfxMaster.connect(comp)

    // shared filtered pink-ish noise buffer (used by both room tone and tactile SFX)
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
    return ctx
  }

  unlockSfx() {
    if (!this.sfxOn) return
    const ctx = this.ensureCtx()
    if (ctx.state === 'suspended') ctx.resume().catch(() => {})
  }

  init() {
    const ctx = this.ensureCtx()
    if (this._musicInit) return
    this._musicInit = true

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
    // room tone
    const n = ctx.createBufferSource(); n.buffer = this.noiseBuf; n.loop = true
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 380; bp.Q.value = 0.6
    const ng = ctx.createGain(); ng.gain.value = 0.05
    n.connect(bp).connect(ng).connect(this.master); n.start()
  }

  toggle() {
    this.init()
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
    if (!this.ctx || !this.on || !this.filter) return
    this.filter.frequency.setTargetAtTime(420 + b * 1600, this.ctx.currentTime, 0.8)
  }

  getLevel() {
    if (!this.analyser || !this.on || this.ctx?.state !== 'running') return 0
    this.analyser.getByteFrequencyData(this._fftData)
    let sum = 0
    const bins = Math.min(18, this._fftData.length)
    for (let i = 0; i < bins; i++) sum += this._fftData[i]
    return Math.min(1, sum / (bins * 110))
  }

  shutter() {
    if (!this.sfxOn || !this.ctx || this.ctx.state !== 'running') return
    const ctx = this.ctx, t = ctx.currentTime
    const click = (at, gainV, freq) => {
      const s = ctx.createBufferSource(); s.buffer = this.noiseBuf
      const hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = freq; hp.Q.value = 1.4
      const g = ctx.createGain()
      g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(gainV, at + 0.002)
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.05)
      s.connect(hp).connect(g).connect(this.sfxMaster)
      s.start(at, Math.random() * 3, 0.06)
    }
    click(t, 0.95, 3200)
    click(t + 0.055, 0.62, 2400)
    const o = ctx.createOscillator(); o.frequency.value = 95
    const og = ctx.createGain()
    og.gain.setValueAtTime(0, t); og.gain.linearRampToValueAtTime(0.14, t + 0.004); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.08)
    o.connect(og).connect(this.sfxMaster); o.start(t); o.stop(t + 0.1)
  }

  /* Tactile hover tick across prints (debounced) */
  tick(pitch = 0.5) {
    if (!this.sfxOn || !this.ctx || this.ctx.state !== 'running') return
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
    s.connect(bp).connect(g).connect(this.sfxMaster)
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
    o.connect(og).connect(this.sfxMaster); o.start(t); o.stop(t + 0.04)
  }

  /* Soft air swell when gliding to a print or zooming */
  whoosh() {
    if (!this.sfxOn || !this.ctx || this.ctx.state !== 'running') return
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
    s.connect(lp).connect(g).connect(this.sfxMaster)
    s.start(t, Math.random() * 2, 1.05)
  }
}
