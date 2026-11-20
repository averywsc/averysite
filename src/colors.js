/**
 * colors.js — colour maths for lighting the world from the photos.
 * All "lin" arrays are linear-light RGB 0..1, which is what the shaders use.
 */
export const hexToRgb = (hex) => {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}
const s2l = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
const l2s = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055)
export const srgbToLinear = (rgb) => rgb.map(s2l)
export const linearToSrgb = (rgb) => rgb.map(l2s)
export const hexToLinear = (hex) => srgbToLinear(hexToRgb(hex))
export const rgbToCss = (rgb, a = 1) =>
  `rgba(${rgb.map((v) => Math.round(Math.min(1, Math.max(0, v)) * 255)).join(',')},${a})`

export const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
export const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s]
export const luma = (c) => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]

/* OKLab for perceptual distances (used to place new photos by colour). */
export function oklab(rgbSrgb) {
  const [r, g, b] = srgbToLinear(rgbSrgb)
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ]
}

/* Perceptual "mood" distance between two photos: dominant light + overall exposure. */
export function photoDistance(a, b) {
  const da = oklab(hexToRgb(a.dominant)), db = oklab(hexToRgb(b.dominant))
  const aa = oklab(hexToRgb(a.avg)), ab = oklab(hexToRgb(b.avg))
  const d1 = Math.hypot(da[0] - db[0], (da[1] - db[1]) * 1.6, (da[2] - db[2]) * 1.6)
  const d2 = Math.hypot(aa[0] - ab[0], (aa[1] - ab[1]) * 1.6, (aa[2] - ab[2]) * 1.6)
  return d1 * 0.55 + d2 * 0.45 + Math.abs(a.luminance - b.luminance) * 0.8
}

/**
 * Turn a photo's dominant colour into the faint light it casts into the room:
 * keep the hue, drop the value into the near-black range.
 */
export function ambientFromPhoto(photo, maxLuma) {
  const dom = hexToLinear(photo.dominant)
  const avg = hexToLinear(photo.avg)
  const c = mix(avg, dom, 0.72)
  const l = Math.max(luma(c), 1e-4)
  // normalise brightness so hue carries, then scale into range
  const norm = scale(c, 1 / l)
  // maxLuma is a display value (0..1); convert to linear light
  const target = s2l(maxLuma) * (0.58 + 0.42 * Math.min(1, photo.luminance * 2.0))
  // rich, faithful colour spill without turning neon
  const grey = [1, 1, 1]
  return scale(mix(grey, norm, 0.88), target)
}

/* Frame-rate independent exponential damping for colours. */
export function dampColor(out, target, lambda, dt) {
  const t = 1 - Math.exp(-lambda * dt)
  out[0] += (target[0] - out[0]) * t
  out[1] += (target[1] - out[1]) * t
  out[2] += (target[2] - out[2]) * t
  return out
}
