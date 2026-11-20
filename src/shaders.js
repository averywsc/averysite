/**
 * shaders.js — all GLSL. Everything works in linear light;
 * the composite pass converts to sRGB, adds grain and dithers.
 */

const common = /* glsl */ `
float sdRoundRect(vec2 p, vec2 halfSize, float r) {
  vec2 q = abs(p) - halfSize + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
`

export const planeVert = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

/* The print: depth of field, distance grade, fog, rounded corners. */
export const photoFrag = /* glsl */ `
precision highp float;
${common}
uniform sampler2D uAtlas;
uniform vec4 uAtlasRect; // u0, v0, du, dv
uniform sampler2D uMap;
uniform float uHasHi;    // 0 = atlas only, 1 = hi-res texture
uniform vec2 uSize;      // world size of the print
uniform float uTexW;     // texture width in px
uniform float uRadius;
uniform float uAlpha;
uniform float uBlur;     // blur radius in uv (fraction of width)
uniform float uDim;
uniform float uDesat;
uniform float uFog;
uniform vec3 uBg;
uniform float uSeed;
varying vec2 vUv;

vec3 samplePhoto(vec2 uv, float lod) {
  vec2 auv = uAtlasRect.xy + clamp(uv, 0.008, 0.992) * uAtlasRect.zw;
  vec3 atlasCol = textureLod(uAtlas, auv, min(lod, 3.6)).rgb;
  if (uHasHi < 0.01) return atlasCol;
  vec3 hiCol = textureLod(uMap, clamp(uv, 0.001, 0.999), lod).rgb;
  return mix(atlasCol, hiCol, uHasHi);
}

vec3 dof(vec2 uv) {
  if (uBlur < 0.0012) return samplePhoto(uv, 0.0);
  float lod = max(0.0, log2(uBlur * uTexW * 0.6));
  vec2 asp = vec2(1.0, uSize.x / uSize.y);
  vec3 acc = vec3(0.0);
  float rot = uSeed * 6.2831;
  const int TAPS = 8;
  for (int i = 0; i < TAPS; i++) {
    float fi = float(i);
    float a = fi * 2.39996 + rot;
    float r = sqrt((fi + 0.5) / float(TAPS)) * uBlur;
    acc += samplePhoto(uv + vec2(cos(a), sin(a)) * r * asp, lod);
  }
  return acc / float(TAPS);
}

void main() {
  vec2 p = (vUv - 0.5) * uSize;
  float d = sdRoundRect(p, uSize * 0.5, uRadius);
  float aa = fwidth(d);
  float soft = uBlur * uSize.x * 0.5;            // blurred prints get soft edges, like real DOF
  float mask = 1.0 - smoothstep(-aa - soft, aa + soft * 0.5, d);

  vec3 col = dof(vUv);
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(col, vec3(l), uDesat);
  col *= uDim;
  col = mix(col, uBg, uFog);

  float a = mask * uAlpha;
  gl_FragColor = vec4(col * a, a);
}
`

/* Light spilling behind the print + a faint contact shadow. Premultiplied. */
export const haloFrag = /* glsl */ `
precision highp float;
${common}
uniform sampler2D uAtlas;
uniform vec4 uAtlasRect;
uniform vec2 uSize;
uniform float uPad;
uniform float uRadius;
uniform float uAlpha;
uniform float uGlow;
uniform float uShadow;
varying vec2 vUv;
void main() {
  vec2 full = uSize + 2.0 * uPad;
  vec2 p = (vUv - 0.5) * full;
  float d = sdRoundRect(p, uSize * 0.5, uRadius);
  float outside = smoothstep(-0.015, 0.04, d);

  // Sample edge colour from atlas; compress bright whites so prints spill mood, not grey haze
  vec2 puv = clamp(p / uSize + 0.5, 0.05, 0.95);
  vec2 auv = uAtlasRect.xy + puv * uAtlasRect.zw;
  vec3 c = textureLod(uAtlas, auv, 3.6).rgb;
  float cl = max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
  c = mix(vec3(cl), c, 1.35);
  c *= 1.0 / (1.0 + cl * 2.6);

  float glow = (exp(-max(d, 0.0) * 2.4) * 0.65 + exp(-max(d, 0.0) * 1.1) * 0.35) * outside;
  float edgeFade = 1.0 - smoothstep(uPad * 0.35, uPad * 0.92, d);
  glow *= edgeFade * edgeFade;

  float ds = sdRoundRect(p + vec2(0.0, 0.05), uSize * 0.5, uRadius);
  float shadow = (1.0 - smoothstep(-0.03, 0.32, ds)) * outside;

  vec3 rgb = max(c, 0.0) * glow * uGlow * uAlpha;
  float a = shadow * uShadow * uAlpha;
  gl_FragColor = vec4(rgb, a);
}
`

/* Background: a soft falloff of the ambient light the photos cast. */
export const bgVert = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.9999, 1.0); }
`
export const bgFrag = /* glsl */ `
precision highp float;
uniform vec3 uBg;
uniform vec3 uLift;
uniform float uAspect;
varying vec2 vUv;
void main() {
  vec2 c = (vUv - vec2(0.5, 0.52)) * vec2(uAspect, 1.0);
  float r = length(c);
  float f = exp(-r * r * 1.6);
  vec3 col = mix(uBg, uLift, f);
  gl_FragColor = vec4(col, 1.0);
}
`

/* Dust: slow motes in the air, wrapped around the camera. */
export const dustVert = /* glsl */ `
uniform vec3 uCam;
uniform float uTime;
uniform float uPR;
uniform float uScale;
attribute float aSeed;
varying float vAlpha;
void main() {
  vec3 box = vec3(14.0, 9.0, 36.0);
  vec3 p = position;
  p += vec3(sin(uTime * 0.07 + aSeed * 9.0), cos(uTime * 0.05 + aSeed * 7.0), sin(uTime * 0.04 + aSeed * 3.0)) * 0.6;
  p.y += uTime * 0.03 * (0.4 + aSeed);
  vec3 w = uCam - mod(uCam - p, box) + box * vec3(0.5, 0.5, 0.0);
  w.z = uCam.z - mod(uCam.z - p.z, box.z);
  vec4 mv = modelViewMatrix * vec4(w, 1.0);
  float depth = -mv.z;
  gl_Position = projectionMatrix * mv;
  float near = smoothstep(0.4, 2.5, depth);
  float far = 1.0 - smoothstep(18.0, 34.0, depth);
  float twinkle = 0.6 + 0.4 * sin(uTime * (0.3 + aSeed) + aSeed * 40.0);
  vAlpha = near * far * twinkle * (0.25 + 0.75 * aSeed);
  gl_PointSize = uScale * uPR * (0.025 + 0.035 * aSeed) / max(depth, 0.1);
}
`
export const dustFrag = /* glsl */ `
precision highp float;
uniform float uStrength;
uniform vec3 uTint;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = exp(-d * d * 18.0) * vAlpha * uStrength;
  gl_FragColor = vec4(uTint * a, 0.0);
}
`

/* ---- post ---- */
export const fsVert = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`

export const brightFrag = /* glsl */ `
precision highp float;
uniform sampler2D tInput;
uniform vec2 uTexel;
uniform float uThreshold;
varying vec2 vUv;
void main() {
  vec3 c = vec3(0.0);
  c += texture(tInput, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
  c += texture(tInput, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
  c += texture(tInput, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
  c += texture(tInput, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
  c *= 0.25;
  float l = max(c.r, max(c.g, c.b));
  float knee = 0.25;
  float s = clamp(l - uThreshold + knee, 0.0, 2.0 * knee);
  s = s * s / (4.0 * knee + 1e-4);
  float w = max(s, l - uThreshold) / max(l, 1e-4);
  gl_FragColor = vec4(c * w, 1.0);
}
`

export const blurFrag = /* glsl */ `
precision highp float;
uniform sampler2D tInput;
uniform vec2 uDir;
varying vec2 vUv;
void main() {
  vec3 c = texture(tInput, vUv).rgb * 0.227027;
  c += texture(tInput, vUv + uDir * 1.3846).rgb * 0.3162162;
  c += texture(tInput, vUv - uDir * 1.3846).rgb * 0.3162162;
  c += texture(tInput, vUv + uDir * 3.2308).rgb * 0.0702703;
  c += texture(tInput, vUv - uDir * 3.2308).rgb * 0.0702703;
  gl_FragColor = vec4(c, 1.0);
}
`

export const compositeFrag = /* glsl */ `
precision highp float;
uniform sampler2D tScene;
uniform sampler2D tBloomA;
uniform sampler2D tBloomB;
uniform vec2 uRes;
uniform float uTime;
uniform float uGrain;
uniform float uVignette;
uniform float uCA;
uniform float uHalation;
uniform float uLeak;
uniform float uFade;
uniform vec3 uBg;
varying vec2 vUv;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec3 toSRGB(vec3 c) {
  c = max(c, 0.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 uv = vUv;
  vec2 c = uv - 0.5;
  float aspect = uRes.x / uRes.y;
  float r2 = dot(c * vec2(aspect, 1.0), c * vec2(aspect, 1.0));

  // whisper of chromatic aberration, only toward the outer corners
  vec2 off = c * pow(r2, 1.45) * uCA * 3.5;
  vec3 col;
  col.r = texture(tScene, uv + off).r;
  col.g = texture(tScene, uv).g;
  col.b = texture(tScene, uv - off).b;

  // halation: warm, wide, faint
  vec3 bl = texture(tBloomA, uv).rgb * 0.55 + texture(tBloomB, uv).rgb * 0.75;
  col += bl * vec3(1.0, 0.6, 0.42) * uHalation;

  // light leaks — rare, slow, barely there, quiet at opening
  float t = uTime;
  float env1 = pow(max(0.0, sin(t * 0.045 - 0.8)), 14.0) * smoothstep(4.0, 12.0, t);
  float env2 = pow(max(0.0, sin(t * 0.031 + 2.6)), 14.0) * smoothstep(4.0, 12.0, t);
  vec2 l1 = vec2(-0.25 + fract(t * 0.009) * 1.5, 0.85 - fract(t * 0.009) * 0.4);
  vec2 l2 = vec2(1.15 - fract(t * 0.007 + 0.4) * 1.3, 0.1 + fract(t * 0.007 + 0.4) * 0.3);
  float b1 = exp(-dot((uv - l1) * vec2(aspect * 0.7, 1.4), (uv - l1) * vec2(aspect * 0.7, 1.4)) * 3.0);
  float b2 = exp(-dot((uv - l2) * vec2(aspect * 0.6, 1.2), (uv - l2) * vec2(aspect * 0.6, 1.2)) * 2.5);
  col += (vec3(1.0, 0.48, 0.22) * b1 * env1 + vec3(1.0, 0.36, 0.38) * b2 * env2) * uLeak;

  // soft vignette
  float v = smoothstep(1.32, 0.22, sqrt(r2) * 1.02);
  col *= mix(1.0, v, uVignette);

  // gentle highlight shoulder, like film
  col = col / (1.0 + max(col - 0.85, 0.0) * 0.6);

  col = mix(uBg, col, uFade);
  vec3 s = toSRGB(col);

  // grain: fine film texture, quiet in deep shadows
  float n = hash(uv * uRes + fract(t * 7.13) * 91.7) + hash(uv * uRes * 1.37 - fract(t * 3.71) * 37.1) - 1.0;
  float lum = dot(s, vec3(0.299, 0.587, 0.114));
  float g = uGrain * (0.35 + 1.2 * lum * (1.0 - lum) * 2.4);
  s += n * g;
  s += (hash(uv * uRes + 0.5) - 0.5) / 255.0; // dither
  gl_FragColor = vec4(s, 1.0);
}
`
