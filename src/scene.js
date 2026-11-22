/**
 * scene.js — Three.js world: prints, halos, dust, background, atlas + streaming
 * hi-res textures, smooth mosaic hover physics, and the post chain.
 */
import * as THREE from 'three'
import gsap from 'gsap'
import {
  planeVert, photoFrag, haloFrag, bgVert, bgFrag, dustVert, dustFrag,
  fsVert, brightFrag, blurFrag, compositeFrag,
} from './shaders.js'
import { hexToLinear, ambientFromPhoto, dampColor, mix, scale } from './colors.js'

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t) }
const damp = (a, b, l, dt) => a + (b - a) * (1 - Math.exp(-l * dt))
const plateEase = gsap.parseEase('power3.inOut')

export class World {
  constructor(canvas, cfg, atlases, pool) {
    this.cfg = cfg
    this.atlases = atlases || []
    this.pool = pool
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' })
    this.renderer.autoClear = false
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace // composite pass encodes
    this.maxPR = Math.min(cfg.perf.maxPixelRatio, window.devicePixelRatio || 1)
    this.pr = this.maxPR

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(cfg.camera.fov, 1, 0.05, 260)
    this.camera.rotation.order = 'YXZ'

    this.bgCol = hexToLinear(cfg.look.background)
    this.liftCol = hexToLinear(cfg.look.backgroundLift)
    this.ambient = [...this.bgCol]
    this.uBg = { value: new THREE.Color(...this.bgCol) }
    this.uLift = { value: new THREE.Color(...this.liftCol) }
    this.time = { value: 0 }
    this.focus = 12
    this.mouse = { x: 0, y: 0, tx: 0, ty: 0 }
    this.pointerActive = false
    this.locked = false
    this.hoveredIdx = -1
    this.hoverAmount = 0
    this.wallZoom = 1
    this.wallZoomTarget = 1
    this.pan = { x: 0, y: 0 }
    this.idlePan = { x: (Math.random() - 0.5) * 1.4, y: (Math.random() - 0.5) * 1.4 }
    this.lens = { x: 0, y: 0, strength: 0 }
    this.inspectIdx = -1
    this.inspectMix = 0

    this._ray = new THREE.Raycaster()
    this._ndc = new THREE.Vector2()
    this._plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    this._hit = new THREE.Vector3()

    this.geo = new THREE.PlaneGeometry(1, 1)
    this.basePhoto = new THREE.ShaderMaterial({
      vertexShader: planeVert, fragmentShader: photoFrag, transparent: true,
      depthWrite: true, premultipliedAlpha: true, blending: THREE.NormalBlending,
      uniforms: {},
    })
    this.baseHalo = new THREE.ShaderMaterial({
      vertexShader: planeVert, fragmentShader: haloFrag, transparent: true,
      depthWrite: false, premultipliedAlpha: true, blending: THREE.NormalBlending,
      uniforms: {},
    })

    this.makeBackground()
    this.makeDust()
    this.makePost()
    this.items = []
  }

  /* ---------------- world ---------------- */
  makeBackground() {
    const m = new THREE.ShaderMaterial({
      vertexShader: bgVert, fragmentShader: bgFrag, depthTest: false, depthWrite: false,
      uniforms: { uBg: this.uBg, uLift: this.uLift, uAspect: { value: 1 } },
    })
    this.bg = new THREE.Mesh(this.geo, m)
    this.bg.frustumCulled = false
    this.bg.renderOrder = -1e6
    this.scene.add(this.bg)
  }

  makeDust() {
    const n = this.cfg.look.dust
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(n * 3), seed = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      pos[i * 3] = Math.random() * 14; pos[i * 3 + 1] = Math.random() * 9; pos[i * 3 + 2] = Math.random() * 36
      seed[i] = Math.random()
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    this.dustMat = new THREE.ShaderMaterial({
      vertexShader: dustVert, fragmentShader: dustFrag, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uCam: { value: new THREE.Vector3() }, uTime: this.time, uPR: { value: 1 }, uScale: { value: 800 },
        uStrength: { value: 0.55 }, uTint: { value: new THREE.Color(1, 0.93, 0.85) },
      },
    })
    this.dust = new THREE.Points(g, this.dustMat)
    this.dust.frustumCulled = false
    this.dust.renderOrder = 1e6
    this.scene.add(this.dust)
  }

  setLayout(layout) {
    this.layout = layout
    for (const it of this.items) {
      it.photoMat.dispose()
      it.haloMat.dispose()
      this.scene.remove(it.group)
    }
    this.items = []
    const L = this.cfg.look
    for (const p of layout.planes) {
      const a = p.photo.atlas
      const atlasTex = this.atlases[a.page] || this.atlases[0]
      const atlasRect = new THREE.Vector4(a.u0, a.v0, a.u1 - a.u0, a.v1 - a.v0)
      const fallback = this.pool?.fallback || atlasTex

      const photoMat = this.basePhoto.clone()
      photoMat.uniforms = {
        uAtlas: { value: atlasTex },
        uAtlasRect: { value: atlasRect },
        uMap: { value: fallback },
        uHasHi: { value: 0 },
        uSize: { value: new THREE.Vector2(p.w, p.h) },
        uTexW: { value: 256 },
        uRadius: { value: L.radius },
        uAlpha: { value: 1 },
        uBlur: { value: 0 },
        uDim: { value: 1 },
        uDesat: { value: 0 },
        uFog: { value: 0 },
        uBg: this.uBg,
        uSeed: { value: p.seed % 1 },
      }
      const haloMat = this.baseHalo.clone()
      const pad = 1.15
      haloMat.uniforms = {
        uAtlas: { value: atlasTex },
        uAtlasRect: { value: atlasRect },
        uSize: { value: new THREE.Vector2(p.w, p.h) },
        uPad: { value: pad },
        uRadius: { value: L.radius },
        uAlpha: { value: 1 },
        uGlow: { value: L.glow },
        uShadow: { value: L.shadow },
      }
      const photo = new THREE.Mesh(this.geo, photoMat)
      const halo = new THREE.Mesh(this.geo, haloMat)
      halo.position.z = -0.02
      const group = new THREE.Group()
      group.add(halo, photo)
      this.scene.add(group)
      this.items.push({
        p, group, photo, halo, photoMat, haloMat, pad,
        ambient: ambientFromPhoto(p.photo, this.cfg.look.tintMax),
        d: 0, hover: 0, hiMix: 0,
      })
    }
  }

  /* ---------------- post ---------------- */
  makePost() {
    const rtOpts = { type: THREE.HalfFloatType, depthBuffer: true }
    this.rtScene = new THREE.WebGLRenderTarget(4, 4, rtOpts)
    const small = { type: THREE.HalfFloatType, depthBuffer: false }
    this.rtA = new THREE.WebGLRenderTarget(4, 4, small)
    this.rtB = new THREE.WebGLRenderTarget(4, 4, small)
    this.rtC = new THREE.WebGLRenderTarget(4, 4, small)
    this.rtD = new THREE.WebGLRenderTarget(4, 4, small)
    this.postScene = new THREE.Scene()
    this.postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const tri = new THREE.BufferGeometry()
    tri.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3))
    tri.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2))
    this.quad = new THREE.Mesh(tri, null)
    this.quad.frustumCulled = false
    this.postScene.add(this.quad)
    const L = this.cfg.look
    this.mBright = new THREE.ShaderMaterial({ vertexShader: fsVert, fragmentShader: brightFrag, depthTest: false,
      uniforms: { tInput: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: L.halationThreshold } } })
    this.mBlur = new THREE.ShaderMaterial({ vertexShader: fsVert, fragmentShader: blurFrag, depthTest: false,
      uniforms: { tInput: { value: null }, uDir: { value: new THREE.Vector2() } } })
    this.mComp = new THREE.ShaderMaterial({ vertexShader: fsVert, fragmentShader: compositeFrag, depthTest: false,
      uniforms: {
        tScene: { value: this.rtScene.texture }, tBloomA: { value: this.rtA.texture }, tBloomB: { value: this.rtC.texture },
        uRes: { value: new THREE.Vector2() }, uTime: this.time, uGrain: { value: L.grain }, uVignette: { value: L.vignette },
        uCA: { value: L.chromatic }, uHalation: { value: L.halation }, uLeak: { value: L.leaks }, uFade: { value: 1 },
        uBg: this.uBg,
      } })
  }

  pass(mat, target) {
    this.quad.material = mat
    this.renderer.setRenderTarget(target)
    this.renderer.render(this.postScene, this.postCam)
  }

  resize(w, h) {
    this.w = w; this.h = h
    this.renderer.setPixelRatio(this.pr)
    this.renderer.setSize(w, h, false)
    const W = Math.floor(w * this.pr), H = Math.floor(h * this.pr)
    this.rtScene.setSize(W, H)
    const qw = Math.max(1, W >> 2), qh = Math.max(1, H >> 2)
    this.rtA.setSize(qw, qh); this.rtB.setSize(qw, qh)
    this.rtC.setSize(Math.max(1, qw >> 1), Math.max(1, qh >> 1)); this.rtD.setSize(Math.max(1, qw >> 1), Math.max(1, qh >> 1))
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.bg.material.uniforms.uAspect.value = w / h
    this.mComp.uniforms.uRes.value.set(W, H)
    this.dustMat.uniforms.uPR.value = this.pr
    this.dustMat.uniforms.uScale.value = H / this.pr * 1.2
  }

  setPixelRatio(pr) {
    if (Math.abs(pr - this.pr) < 0.01) return
    this.pr = pr
    this.resize(this.w, this.h)
  }

  setInspect(idx) {
    this.inspectIdx = idx
    if (idx < 0) return
    if (this.inspectMix < 0.05) this.inspectMix = 0
  }

  randomizePan() {
    this.idlePan = { x: (Math.random() - 0.5) * 1.4, y: (Math.random() - 0.5) * 1.4 }
    this.pointerActive = false
  }

  setWallZoom(z, immediate = false) {
    this.wallZoomTarget = Math.min(4.2, Math.max(1, z))
    if (immediate) {
      this.wallZoom = this.wallZoomTarget
      if (this.layout?.mosaicOpen) {
        const zoomFrac = Math.max(0, 1 - 1 / this.wallZoom)
        this.pan.x = this.idlePan.x * this.layout.mosaicOpen.W * 0.5 * zoomFrac
        this.pan.y = -this.idlePan.y * this.layout.mosaicOpen.H * 0.5 * zoomFrac
      }
    }
  }

  /* ---------------- hit-test on All Photos mosaic ---------------- */
  intersectMosaic(ndcX, ndcY, mosaicZ) {
    this._ndc.set(ndcX, -ndcY) // world.mouse.ty is top=-1..bottom=+1; Three NDC is bottom=-1..top=+1
    this._ray.setFromCamera(this._ndc, this.camera)
    this._plane.constant = -mosaicZ
    if (!this._ray.ray.intersectPlane(this._plane, this._hit)) return null
    return { x: this._hit.x, y: this._hit.y }
  }

  pickMosaic(ndcX, ndcY, mosaicZ) {
    const pt = this.intersectMosaic(ndcX, ndcY, mosaicZ)
    if (!pt) return -1
    for (let i = 0; i < this.items.length; i++) {
      const s = this.items[i].p.slot
      if (Math.abs(pt.x - s.x) <= s.w * 0.5 && Math.abs(pt.y - s.y) <= s.h * 0.5) return i
    }
    return -1
  }

  /* ---------------- hit-test visible prints in the 3D tunnel ---------------- */
  pickTunnel(ndcX, ndcY) {
    if (!this._visible?.length) return -1
    this._ndc.set(ndcX, -ndcY)
    this._ray.setFromCamera(this._ndc, this.camera)
    const meshes = []
    for (const it of this._visible) {
      if (it.alpha > 0.18) meshes.push(it.photo)
    }
    if (!meshes.length) return -1
    const hits = this._ray.intersectObjects(meshes, false)
    if (!hits.length) return -1
    const mesh = hits[0].object
    const found = this._visible.find((it) => it.photo === mesh)
    return found ? found.p.i : -1
  }

  /* ---------------- frame ---------------- */
  update(state, dt, elapsed) {
    const cfg = this.cfg, L = cfg.look, C = cfg.camera
    this.time.value = elapsed
    this.pool?.beginFrame()
    const cam = this.camera

    // handheld: layered incommensurate sines
    const sh = C.shake
    const n1 = Math.sin(elapsed * 0.53) * 0.6 + Math.sin(elapsed * 1.31 + 1.7) * 0.3 + Math.sin(elapsed * 2.17 + 0.3) * 0.1
    const n2 = Math.sin(elapsed * 0.41 + 2.1) * 0.6 + Math.sin(elapsed * 1.07 + 0.9) * 0.3 + Math.sin(elapsed * 2.71 + 2.2) * 0.1
    const n3 = Math.sin(elapsed * 0.29 + 4.0) * 0.7 + Math.sin(elapsed * 0.83 + 1.1) * 0.3

    // heavy damped mouse lean (gentle parallax when locked on landing screen)
    const targetMX = this.locked ? this.mouse.tx * 0.42 : this.mouse.tx
    const targetMY = this.locked ? this.mouse.ty * 0.42 : this.mouse.ty
    this.mouse.x = damp(this.mouse.x, targetMX, C.mouseDamping, dt)
    this.mouse.y = damp(this.mouse.y, targetMY, C.mouseDamping, dt)
    const lean = (C.mouseLean * Math.PI) / 180

    const OA = state.openAssemble || 0
    const A = state.assemble || 0
    const mosaicMode = Math.max(OA, A)

    // Smooth inspect centering: rides state.camZ cleanly along the tunnel and aligns X/Y/Z smoothly on arrival
    this.inspectMix = damp(this.inspectMix, this.inspectIdx >= 0 ? 1 : 0, 3.4, dt)
    let targetCamX = state.camX, targetCamY = state.camY, targetCamZ = state.camZ
    let jumpFlight = 0
    if (this.inspectIdx >= 0 && this.items[this.inspectIdx]) {
      const ip = this.items[this.inspectIdx].p
      const dzDelta = (ip.z + ip.fitD) - state.camZ
      jumpFlight = Math.min(1, Math.abs(dzDelta) / 28) * this.inspectMix
      const lateralBlend = this.inspectMix * (1 - OA) * (1 - A)
      const zLock = smooth(28, 0, Math.abs(dzDelta)) * lateralBlend
      this.inspectOffset = this.inspectOffset || { x: 0, y: 0, z: 0 }
      this.inspectOffset.x = damp(this.inspectOffset.x, ip.x - state.camX, 4.2, dt)
      this.inspectOffset.y = damp(this.inspectOffset.y, ip.y - state.camY, 4.2, dt)
      this.inspectOffset.z = damp(this.inspectOffset.z, dzDelta, 5.0, dt)
      targetCamX += this.inspectOffset.x * lateralBlend
      targetCamY += this.inspectOffset.y * lateralBlend
      targetCamZ += this.inspectOffset.z * zLock
    } else if (this.inspectOffset) {
      this.inspectOffset.x = damp(this.inspectOffset.x, 0, 5.5, dt)
      this.inspectOffset.y = damp(this.inspectOffset.y, 0, 5.5, dt)
      this.inspectOffset.z = damp(this.inspectOffset.z, 0, 5.5, dt)
      targetCamX += this.inspectOffset.x * this.inspectMix
      targetCamY += this.inspectOffset.y * this.inspectMix
      targetCamZ += this.inspectOffset.z * this.inspectMix
    }

    // Apple Watch wall zoom + smooth pan across the photo grid
    const effectiveZoomTarget = mosaicMode > 0.72 ? this.wallZoomTarget : 1
    this.wallZoom = damp(this.wallZoom, effectiveZoomTarget, 4.2, dt)
    const zoomFrac = Math.max(0, 1 - 1 / this.wallZoom)
    const mos = OA >= A ? this.layout.mosaicOpen : this.layout.mosaic
    const panLimX = mos.W * 0.5 * zoomFrac
    const panLimY = mos.H * 0.5 * zoomFrac
    const panPointer = this.pointerActive && !this.locked
    const targetPanX = (panPointer ? this.mouse.tx : this.idlePan.x) * panLimX
    const targetPanY = -(panPointer ? this.mouse.ty : this.idlePan.y) * panLimY
    this.pan.x = damp(this.pan.x, targetPanX, 3.4, dt)
    this.pan.y = damp(this.pan.y, targetPanY, 3.4, dt)
    targetCamX += this.pan.x * mosaicMode
    targetCamY += this.pan.y * mosaicMode
    targetCamZ -= mos.dist * zoomFrac * mosaicMode

    // Reduce handheld shake on the All Photos wall so hovering & zooming feel crisp
    const wallSh = sh * (1 - mosaicMode * 0.72)
    const leanScale = 1 - zoomFrac * 0.65
    cam.position.set(
      targetCamX + n1 * 0.018 * wallSh + this.mouse.x * (mosaicMode > 0.5 ? 0.14 : 0.12) * leanScale,
      targetCamY + n2 * 0.014 * wallSh - this.mouse.y * (mosaicMode > 0.5 ? 0.1 : 0.08) * leanScale,
      targetCamZ,
    )
    cam.rotation.set(
      state.pitch + n2 * 0.0011 * wallSh + this.mouse.y * lean * 0.6 * leanScale,
      state.yaw + n1 * 0.0013 * wallSh - this.mouse.x * lean * leanScale,
      state.roll + n3 * 0.0012 * wallSh,
    )
    const breathe = Math.sin(elapsed * 0.37) * C.breathing + Math.sin(elapsed * 0.13 + 1.0) * C.breathing * 0.5
    cam.fov = state.fov + breathe * (1 - mosaicMode * 0.65)
    cam.updateProjectionMatrix()
    cam.updateMatrixWorld()

    // Apple Watch radial loupe + hover picking (wall OR 3D tunnel)
    let hovered = -1
    let hitPt = null
    if (this.pointerActive && !this.locked) {
      if (mosaicMode > 0.72) {
        hitPt = this.intersectMosaic(this.mouse.tx, this.mouse.ty, mos.z)
        if (hitPt) {
          for (let i = 0; i < this.items.length; i++) {
            const s = this.items[i].p.slot
            if (Math.abs(hitPt.x - s.x) <= s.w * 0.5 && Math.abs(hitPt.y - s.y) <= s.h * 0.5) {
              hovered = i
              break
            }
          }
        }
      } else {
        hovered = this.pickTunnel(this.mouse.tx, this.mouse.ty)
      }
    }
    if (hitPt && hovered >= 0) {
      this.lens.x = damp(this.lens.x, hitPt.x, 8.5, dt)
      this.lens.y = damp(this.lens.y, hitPt.y, 8.5, dt)
    }
    this.lens.strength = damp(this.lens.strength, mosaicMode > 0.72 && hitPt ? 1 : 0, 5.5, dt)
    this.hoveredIdx = hovered
    this.hoverAmount = damp(this.hoverAmount, hovered >= 0 ? 1 : 0, 6.0, dt)

    const lensR = (mos.W * 0.125) / Math.sqrt(this.wallZoom)
    const lensR2 = 2 * lensR * lensR
    const lensPower = this.lens.strength * mosaicMode

    const camZ = cam.position.z
    const far = cfg.layout.fogFar
    const visible = []
    let focusTarget = 1e9, focusScore = 1e9
    const ambientTarget = [0, 0, 0]
    let wsum = 0
    const pureTunnel = OA <= 0.001 && A <= 0.001

    for (let idx = 0; idx < this.items.length; idx++) {
      const it = this.items[idx]
      const p = it.p

      // Smooth per-tile hover inertia + Apple Watch radial lens bubble
      const wantHover = idx === hovered ? 1 : 0
      it.hover = damp(it.hover, wantHover, wantHover ? 8.5 : 5.0, dt)

      // Fast cull when strictly inside the tunnel (skips ~290 of 307 items in O(1) math)
      if (pureTunnel) {
        const dzQuick = camZ - p.z
        if (dzQuick < -1 || dzQuick > far + 45) {
          it.group.visible = false
          continue
        }
      }

      let x, y, z, s = 1, rotZ = p.rotZ, rotY = p.rotY, alpha = 1
      if (OA > 0.001) {
        const local = Math.min(1, Math.max(0, (OA * 1.45 - p.openDelay) / 0.85))
        const e = plateEase(local)
        const sl = p.slot
        const openZ = this.layout.mosaicOpen.z + sl.dz
        const targetS = sl.w / p.w
        x = p.x + (sl.x - p.x) * e
        y = p.y + (sl.y - p.y) * e
        z = p.z + (openZ - p.z) * e
        s = 1 + (targetS - 1) * e
        rotZ = p.rotZ + (sl.rotZ - p.rotZ) * e
        rotY = p.rotY * (1 - e)
        if (this.locked && OA > 0.7) {
          const drift = Math.sin(elapsed * 0.65 + sl.x * 0.28 + sl.y * 0.36 + p.seed)
          const drift2 = Math.cos(elapsed * 0.42 + sl.y * 0.24 - sl.x * 0.18 + p.seed)
          z += drift * 0.28 * e
          x += drift2 * 0.04 * e
          y += Math.sin(elapsed * 0.51 + p.seed) * 0.04 * e
          rotY += drift2 * 0.025 * e
        }
        const d0 = camZ - z
        if (OA < 0.99 && !(idx === this.inspectIdx && this.inspectMix > 0.15)) {
          alpha = smooth(p.fadeNear[0], p.fadeNear[1], d0) * (1 - smooth(far * 0.72, far, d0) * (1 - e))
        }
      } else if (A <= 0.001) {
        x = p.x; y = p.y; z = p.z
        const d0 = camZ - z
        const approach = 1 - smooth(4, 34, d0)
        const pass = 1 - smooth(0.4, 7, d0)
        s = 0.93 + 0.07 * approach
        x += Math.cos(elapsed * 0.17 + p.seed) * 0.035 - (targetCamX * (p.layer - 0.5) * 0.12)
        y += Math.sin(elapsed * 0.21 + p.seed * 1.3) * 0.045
        rotZ += Math.sin(elapsed * 0.11 + p.seed) * 0.004
        if (!p.feature && !(idx === this.inspectIdx && this.inspectMix > 0.15)) {
          const r = Math.hypot(p.x, p.y) || 1
          x += (p.x / r) * pass * 1.15
          y += (p.y / r) * pass * 0.85
          rotY += p.side * pass * 0.14
        }
        const nearMask = idx === this.inspectIdx && this.inspectMix > 0.15 ? 1 : smooth(p.fadeNear[0], p.fadeNear[1], d0)
        alpha = nearMask * (1 - smooth(far * 0.72, far, d0))
      } else {
        const local = Math.min(1, Math.max(0, (A * 1.55 - p.delay) / 0.82))
        const e = plateEase(local)
        const st = p.start, sl = p.slot
        const endZ = this.layout.mosaic.z + sl.dz
        x = st.x + (sl.x - st.x) * e
        y = st.y + (sl.y - st.y) * e
        z = st.z + (endZ - st.z) * e
        s = 1 + (sl.scale - 1) * e
        rotZ = p.rotZ + (sl.rotZ - p.rotZ) * e
        rotY = p.deep ? 0 : p.rotY * (1 - e)
        alpha = p.deep ? smooth(0, 0.35, local) : 1
        if (!p.deep) {
          const d0 = camZ - z
          alpha *= smooth(p.fadeNear[0], p.fadeNear[1], d0)
        }
      }

      // Apple Watch spherical lens + tactile lift on the All Photos wall
      let lensAmt = 0
      if (lensPower > 0.004) {
        const dx = p.slot.x - this.lens.x
        const dy = p.slot.y - this.lens.y
        const d2 = dx * dx + dy * dy
        lensAmt = Math.exp(-d2 / lensR2) * lensPower
        if (lensAmt > 0.002) {
          const dist = Math.sqrt(d2)
          const push = lensAmt * (1 - Math.exp(-dist * 1.6)) * (0.38 / Math.sqrt(this.wallZoom))
          if (dist > 0.001) {
            x += (dx / dist) * push
            y += (dy / dist) * push
          }
          z += (lensAmt * 0.56) / Math.sqrt(this.wallZoom)
          s *= 1 + lensAmt * 0.36
          rotZ *= 1 - lensAmt
        }
      }
      let rotX = 0
      if (it.hover > 0.001) {
        const hv = it.hover
        if (mosaicMode > 0.5) {
          z += (hv * 0.6) / Math.sqrt(this.wallZoom)
          s *= 1 + hv * 0.16
          rotZ *= 1 - hv
        } else {
          z += hv * 0.45
          s *= 1 + hv * 0.075
        }
        rotX = -this.mouse.y * hv * 0.045
        rotY += this.mouse.x * hv * 0.055
      }
      it.lens = lensAmt

      const d = camZ - z
      if (this.inspectIdx >= 0 && pureTunnel) {
        if (idx < this.inspectIdx) alpha *= 1 - this.inspectMix
        else if (idx !== this.inspectIdx && jumpFlight > 0.01) alpha *= 1 - jumpFlight * 0.72
      }
      if (alpha < 0.004 || d < 0.05 || d > far + 45) { it.group.visible = false; continue }
      it.group.visible = true
      it.group.position.set(x, y, z)
      it.group.rotation.set(rotX, rotY, rotZ)
      const w = p.w * s, h = p.h * s
      it.photo.scale.set(w, h, 1)
      it.halo.scale.set(w + it.pad * 2 * s, h + it.pad * 2 * s, 1)
      it.photoMat.uniforms.uSize.value.set(w, h)
      it.haloMat.uniforms.uSize.value.set(w, h)
      it.haloMat.uniforms.uPad.value = it.pad * s
      it.d = d
      it.alpha = alpha
      it.x = x; it.y = y
      visible.push(it)

      // Request hi-res texture when close to camera, hovered, inspected, or zoomed in on the Apple Watch wall
      const isInspected = idx === this.inspectIdx
      const inZoomedView = mosaicMode > 0.65 && this.wallZoom > 1.3 && Math.abs(x - cam.position.x) < mos.W * 0.45 / this.wallZoom + w && Math.abs(y - cam.position.y) < mos.H * 0.45 / this.wallZoom + h
      const wantHi = it.hover > 0.05 || lensAmt > 0.35 || isInspected || inZoomedView || (mosaicMode < 0.6 && d < 60)
      if (wantHi && this.pool) {
        const prio = isInspected || it.hover > 0.05 ? -20 : inZoomedView ? Math.hypot(x - cam.position.x, y - cam.position.y) : d
        this.pool.request(p.photo, prio, p.feature || it.hover > 0.05 || isInspected)
        const hi = this.pool.get(p.photo.file)
        if (hi) {
          if (it.photoMat.uniforms.uMap.value !== hi.texture) {
            it.photoMat.uniforms.uMap.value = hi.texture
            it.photoMat.uniforms.uTexW.value = hi.width
          }
          it.hiMix = damp(it.hiMix, 1, 14, dt)
        } else {
          it.hiMix = damp(it.hiMix, 0, 10, dt)
        }
      } else {
        it.hiMix = damp(it.hiMix, 0, 10, dt)
      }
      it.photoMat.uniforms.uHasHi.value = it.hiMix

      // Auto focus (tracks close-ups down to d=0.25, prioritizes inspected photo)
      const off = Math.hypot(x - cam.position.x, y - cam.position.y) / Math.max(1, d * this.layout.tanH)
      if (d > 0.25 && alpha > 0.35 && mosaicMode < 0.5) {
        const zoomBoost = (p.zoom && d < 5) || idx === this.inspectIdx ? 0.05 : 1
        const sc = d * (1 + off * off * 2.5) * zoomBoost
        if (sc < focusScore) { focusScore = sc; focusTarget = d }
      }

      // Ambient light from nearby / centered / hovered / inspected prints
      if (mosaicMode < 0.7 || d < 28) {
        const heroBias = idx === this.inspectIdx ? 8 : idx === hovered ? 5 : p.feature && d < 12 ? 2.5 : 1
        const wgt = alpha * heroBias * Math.exp(-d / 8.5) * Math.exp(-off * off * 1.6)
        ambientTarget[0] += it.ambient[0] * wgt; ambientTarget[1] += it.ambient[1] * wgt; ambientTarget[2] += it.ambient[2] * wgt
        wsum += wgt
      }
    }

    if (OA >= 0.5) focusTarget = camZ - this.layout.mosaicOpen.z
    else if (A >= 0.5) focusTarget = camZ - this.layout.mosaic.z
    if (focusTarget < 1e8) this.focus = damp(this.focus, focusTarget, this.inspectIdx >= 0 ? 9.0 : 3.2, dt)

    // World light: smoothly bathe the background in the active photo's colours
    const tint = L.tint
    const amb = wsum > 0 ? scale(ambientTarget, 1 / Math.max(wsum, 0.25)) : this.bgCol
    const bgTarget = mix(this.bgCol, amb, tint)
    dampColor(this.ambient, bgTarget, 2.5, dt)
    this.uBg.value.setRGB(...this.ambient)
    this.liftNow = this.liftNow || [...this.liftCol]
    const liftTarget = mix(this.liftCol, scale(amb, 1.9), tint)
    dampColor(this.liftNow, liftTarget, 2.5, dt)
    this.uLift.value.setRGB(...this.liftNow.map((v, i) => v + (this.ambient[i] - v) * state.dim * 0.35))

    // Per-print grade (gentler DOF so distant prints remain clearly readable & clickable)
    const blurK = 0.014 * L.blur
    const tunnelFocus = this.focus
    const wallBright = mosaicMode > 0.5 ? Math.min(1, Math.max(0, (this.wallZoom - 1.05) * 1.4)) : 0
    for (const it of visible) {
      const d = it.d
      const hv = Math.min(1, it.hover + (it.lens || 0) * 0.85)
      const hiLight = Math.min(1, Math.max(hv, wallBright))
      const coc = Math.abs(d - tunnelFocus) / Math.max(d, 0.3)
      let blur = Math.min(0.011, coc * blurK)
      if (mosaicMode > 0.5) blur = state.dim * 0.0018 * (1 - hiLight)
      else if (this.inspectIdx >= 0 && it.p.i === this.inspectIdx) blur *= 1 - this.inspectMix
      else blur *= 1 - hv

      const distF = smooth(16, 76, d) * (1 - mosaicMode)
      const baseDim = (1 - distF * L.distanceDim) * (1 - state.dim * 0.62)
      const dim = baseDim + (1 - baseDim) * hiLight
      const desat = (distF * L.distanceDesat + state.dim * 0.22) * (1 - hiLight)

      const u = it.photoMat.uniforms
      u.uBlur.value = blur
      u.uAlpha.value = it.alpha
      u.uDim.value = dim
      u.uDesat.value = desat
      u.uFog.value = smooth(L.fogNear, L.fogFar, d) * L.fog * (1 - mosaicMode * 0.9) * (1 - hiLight * 0.6)

      const showHalo = mosaicMode < 0.65 || it.hover > 0.01 || (it.lens || 0) > 0.2
      it.halo.visible = showHalo
      if (showHalo) {
        const hu = it.haloMat.uniforms
        hu.uAlpha.value = it.alpha * (1 - u.uFog.value) * (1 - distF * 0.45)
        hu.uGlow.value = L.glow * (mosaicMode > 0.5 ? 0.22 + hv * 1.4 : (1 - state.dim * 0.65) * (1 + it.hover * 0.9))
      }
    }

    // Draw order: far to near, Apple Watch bubble & hovered tiles always cleanly on top
    if (mosaicMode > 0.5) {
      visible.sort((a, b) => (a.hover - b.hover) * 100 || ((a.lens || 0) - (b.lens || 0)) * 20 || b.d - a.d)
    } else {
      visible.sort((a, b) => b.d - a.d)
    }
    visible.forEach((it, k) => { it.halo.renderOrder = k * 2; it.photo.renderOrder = k * 2 + 1 })
    this._visible = visible

    this.dustMat.uniforms.uCam.value.copy(cam.position)
    this.dustMat.uniforms.uTint.value.setRGB(1, 0.93, 0.85)
    return { ambient: this.ambient, hoveredIdx: hovered, hoverAmount: this.hoverAmount, wallZoom: this.wallZoom, mosaicMode }
  }

  render(fade = 1) {
    const r = this.renderer
    r.setRenderTarget(this.rtScene)
    r.setClearColor(this.uBg.value, 1)
    r.clear(true, true, true)
    r.render(this.scene, this.camera)

    const sw = this.rtScene.width, shh = this.rtScene.height
    this.mBright.uniforms.tInput.value = this.rtScene.texture
    this.mBright.uniforms.uTexel.value.set(1.5 / sw, 1.5 / shh)
    this.pass(this.mBright, this.rtA)
    this.mBlur.uniforms.tInput.value = this.rtA.texture
    this.mBlur.uniforms.uDir.value.set(1 / this.rtA.width, 0)
    this.pass(this.mBlur, this.rtB)
    this.mBlur.uniforms.tInput.value = this.rtB.texture
    this.mBlur.uniforms.uDir.value.set(0, 1 / this.rtA.height)
    this.pass(this.mBlur, this.rtA)
    this.mBlur.uniforms.tInput.value = this.rtA.texture
    this.mBlur.uniforms.uDir.value.set(2 / this.rtC.width, 0)
    this.pass(this.mBlur, this.rtC)
    this.mBlur.uniforms.tInput.value = this.rtC.texture
    this.mBlur.uniforms.uDir.value.set(0, 2 / this.rtC.height)
    this.pass(this.mBlur, this.rtD)
    this.mComp.uniforms.tBloomB.value = this.rtD.texture

    this.mComp.uniforms.uFade.value = fade
    this.pass(this.mComp, null)
  }
}
