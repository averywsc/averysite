/**
 * ------------------------------------------------------------------
 *  config.js — every dial for the piece lives here.
 * ------------------------------------------------------------------
 *  Units:  "screens" = viewport heights of scrolling.
 *          world units = Three.js units (a photo is ~3.2 units tall).
 *  Colours are CSS hex strings.
 */
export const config = {
  /* ---------------------------------------------------------------
   * Identity
   * ------------------------------------------------------------- */
  site: {
    title: 'averybeuth.xyz',                      // browser tab title & main centerpiece title
    name: 'averybeuth.xyz',                       // tiny corner mark
    nameHref: './',
    contactText: '@avery.beuth',                  // finale contact link text
    contactHref: 'https://instagram.com/avery.beuth',
    zoomText: 'zoom',                             // corner button to zoom into the Apple Watch grid
    allPhotosText: 'all photos',                  // corner button to jump straight to the end
  },

  /* ---------------------------------------------------------------
   * Photos
   * Drop files into public/photos. Anything not listed in `order`
   * is placed automatically next to the photos it matches in colour.
   * ------------------------------------------------------------- */
  photos: {
    // The directed sequence: soft daylight → street → dusk → night → fire → moon.
    order: [
      'bee-rose-rain.jpg', 'bee-rose-bokeh.jpg', 'bee-rose-closeup.jpg', 'sunflowers.jpg',
      'offerings.jpg', 'temple-worker.jpg', 'statue-wires.jpg', 'seaweed-boat.jpg',
      'taxi.jpg', 'boat-wake.jpg', 'corn-snake.jpg', 'puzzle.jpg',
      'escalator-one.jpg', 'escalator-crowd.jpg', 'plane-window.jpg',
      'supertrees-plane.jpg', 'bougainvillea-sea.jpg', 'moon-bird.jpg', 'speed-sign.jpg', 'sunset-wires.jpg',
      'skyline-night.jpg', 'durian-market.jpg', 'satay.jpg', 'red-light.jpg',
      'garden-projection.jpg', 'bougainvillea-night.jpg', 'cigarettes.jpg', 'butterfly.jpg',
      'bonfire.jpg', 'fountain-firework.jpg', 'sparkler.jpg', 'fireworks.jpg', 'moon-rain.jpg',
    ],
    // Key moments: the camera slows, lines up and holds on these.
    // Leave empty to have them chosen automatically, evenly spaced.
    features: [
      'bee-rose-closeup.jpg', 'seaweed-boat.jpg', 'plane-window.jpg', 'sunset-wires.jpg',
      'satay.jpg', 'bonfire.jpg', 'moon-rain.jpg',
    ],
    // The one photo the camera zooms all the way into and through.
    zoomThrough: 'sunset-wires.jpg',
    // Screen-reader descriptions. Unlisted photos fall back to their filename.
    alt: {
      'bee-rose-rain.jpg': 'A honeybee and an ant on a rain-wet white rose bud',
      'bee-rose-bokeh.jpg': 'A honeybee climbing a rose bud among soft white roses',
      'bee-rose-closeup.jpg': 'Close-up of a honeybee on a white rose bud in sunlight',
      'sunflowers.jpg': 'An older man photographing a field of sunflowers',
      'offerings.jpg': 'Women in sarongs preparing offerings beside the water',
      'temple-worker.jpg': 'A worker carrying sacks on a bamboo pole past a Balinese temple gate',
      'statue-wires.jpg': 'A statue of two archers framed by tangled power lines',
      'seaweed-boat.jpg': 'A seaweed farmer standing in a wooden boat on still water',
      'taxi.jpg': 'A man resting in the open boot of a blue taxi',
      'boat-wake.jpg': 'A speedboat drawing a white wake across a teal sea',
      'corn-snake.jpg': 'Close-up of a corn snake against a warm background',
      'puzzle.jpg': 'Scattered jigsaw pieces in inverted colours',
      'escalator-one.jpg': 'Two people on escalators seen from directly above',
      'escalator-crowd.jpg': 'A crowd riding escalators seen from above',
      'plane-window.jpg': 'A plane over the sea seen through a narrow gap in a wall',
      'supertrees-plane.jpg': 'A plane passing over the Supertrees in a pink dusk sky',
      'bougainvillea-sea.jpg': 'Out-of-focus bougainvillea in front of a hazy sea with a lone boat',
      'moon-bird.jpg': 'A bird crossing the rising moon above dark trees',
      'speed-sign.jpg': 'A temporary 30 sign glowing against a sunset',
      'sunset-wires.jpg': 'A bird silhouetted on power lines against a red sun',
      'skyline-night.jpg': 'A city skyline at night over dark water',
      'durian-market.jpg': 'A durian seller under bright bulbs at a night market',
      'satay.jpg': 'Smoke rising from a satay stall at night',
      'red-light.jpg': 'A red pedestrian signal against a textured wall',
      'garden-projection.jpg': 'A child in a dark room of projected flowers',
      'bougainvillea-night.jpg': 'Bougainvillea lit from below around a streetlight',
      'cigarettes.jpg': 'An overflowing pile of cigarette butts',
      'butterfly.jpg': 'A butterfly resting on a leaf at night',
      'bonfire.jpg': 'A large bonfire against a dusk sky',
      'fountain-firework.jpg': 'A fountain firework sparking on the grass in smoke',
      'sparkler.jpg': 'Sparkler light drawings in the dark',
      'fireworks.jpg': 'Golden fireworks streaking across the night',
      'moon-rain.jpg': 'The full moon behind streaks of falling rain',
    },
  },

  /* ---------------------------------------------------------------
   * Scroll & pacing
   * ------------------------------------------------------------- */
  scroll: {
    perPhoto: 1.0,         // screens per photo for small sets; auto-scales down gracefully for 300+ photos
    maxTunnelScreens: 65,  // compact, dense journey so it isn't overly long
    finale: 3.4,           // screens for the pull back, reveal and name.
    scrub: 0.38,           // light ScrollTrigger damper paired with Lenis inertia (no double-lag)
    lerp: 0.068,           // velvety Lenis fluid-head inertia
    wheelMultiplier: 0.9,  // smooth wheel step
    touchMultiplier: 1.25,
    spaceSpeed: 1.15,      // screens per second while holding Space
  },

  /* ---------------------------------------------------------------
   * Camera
   * ------------------------------------------------------------- */
  camera: {
    fov: 38,               // vertical field of view in degrees
    speed: 1.0,            // travel speed between key moments. Lower = longer holds feel shorter.
    fill: 0.76,            // how much of the screen a key photo fills when the camera stops
    hold: 0.95,            // screens each key moment holds for
    zoomHold: 0.7,         // the long zoom lingers when the photo fills the screen
    // pace across the journey (beginning → build → climax → calm). Multiplies speed.
    pace: [0.72, 0.85, 1.0, 1.12, 1.2, 1.3, 0.78],
    // shot vocabulary, one per travel segment between key moments
    shots: ['push', 'sweep', 'tilt', 'pullback', 'zoom', 'roll', 'climax'],
    sweep: 2.2,            // sideways sweep amplitude (world units)
    roll: 3.2,             // degrees of roll in the roll shot
    tilt: 4.5,             // degrees of upward tilt in the tilt shot
    mouseLean: 1.6,        // degrees the camera leans toward the cursor (desktop)
    mouseDamping: 1.6,     // higher = snappier. Heavy damping feels expensive.
    breathing: 0.22,       // lens breathing in degrees of fov
    shake: 1.0,            // handheld gimbal micro-motion multiplier (0 = locked off)
  },

  /* ---------------------------------------------------------------
   * World layout
   * ------------------------------------------------------------- */
  layout: {
    seed: 11,              // change for a different organic scatter
    size: 2.75,            // base photo size (compact enough to show many photos at once)
    depthSpacing: 3.7,     // z distance between photos (tight so ~20+ photos appear simultaneously)
    spreadX: 4.3,          // sideways spread from the centre line
    spreadY: 2.15,         // vertical scatter
    jitter: 0.36,          // random offset (fraction of spacing / spread)
    rotation: 2.4,         // max random roll of prints in degrees
    yaw: 8,                // how much side prints angle toward the centre, degrees
    zoomGap: 12,           // empty depth behind the zoom-through photo (the reveal)
    fogFar: 115,           // nothing is drawn beyond this distance
  },

  /* ---------------------------------------------------------------
   * Look
   * ------------------------------------------------------------- */
  look: {
    background: '#0b0c0f', // base near-black, a hair cool to flatter warm photos
    backgroundLift: '#14161b', // centre of the soft background falloff
    tint: 0.78,            // how strongly nearby/focused photos colour the room (0..1)
    tintMax: 0.17,         // brightest the tinted background may get (sRGB 0..1)
    blur: 0.42,            // gentle depth of field strength (keeps distant photos recognizable)
    fogNear: 34,           // fog starts (world units from camera)
    fogFar: 108,           // fog is full
    fog: 0.84,             // fog strength
    distanceDim: 0.34,     // how dark the far photos get
    distanceDesat: 0.32,   // how desaturated the far photos get
    grain: 0.018,          // film grain
    vignette: 0.32,        // edge darkening
    halation: 0.16,        // warm glow around bright highlights
    halationThreshold: 0.72,
    chromatic: 0.00055,    // chromatic aberration at screen edges
    glow: 0.042,           // coloured light spilling behind each photo (linear)
    shadow: 0.48,          // soft print shadow
    radius: 0.024,         // corner rounding (world units)
    dust: 64,              // floating dust particles
    leaks: 0.015,          // light leak strength
  },

  /* ---------------------------------------------------------------
   * Easing — one family, reused everywhere for a consistent rhythm.
   * Nothing linear. All in-out, like a fluid head.
   * ------------------------------------------------------------- */
  ease: {
    glide: 'sine.inOut',     // lateral drifts, looks, tilts
    travel: 'power2.inOut',  // forward dolly between key moments
    settle: 'power3.inOut',  // arrivals, big repositioning
    breathe: 'sine.inOut',   // holds and slow push-ins
    reveal: 'expo.inOut',    // the finale pull back
    fade: 'power1.inOut',    // UI and opacity
  },

  /* ---------------------------------------------------------------
   * Phones & small screens (merged over the values above)
   * ------------------------------------------------------------- */
  mobile: {
    camera: { fill: 0.9, sweep: 0.9, roll: 2.0, tilt: 3, shake: 0.7, fov: 46 },
    layout: { spreadX: 1.35, spreadY: 1.9, size: 2.9, yaw: 5 },
    look: { dust: 32, chromatic: 0.0004, grain: 0.015 },
    scroll: { scrub: 0.85 },
  },

  /* ---------------------------------------------------------------
   * Performance
   * ------------------------------------------------------------- */
  perf: {
    maxPixelRatio: 2,
    minPixelRatio: 0.85,
    targetFps: 58,         // lower the resolution if we drop below this
    anisotropy: 8,
  },
}

/* Deep-merge mobile overrides into a fresh config for the current device. */
export function resolveConfig(isMobile) {
  const c = structuredClone(config)
  if (!isMobile) return c
  for (const [k, v] of Object.entries(config.mobile)) Object.assign(c[k], v)
  return c
}
