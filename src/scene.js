// Scroll-driven Three.js background: the camera flies through a tunnel of
// floating chrome gym equipment. Scroll position drives camera travel;
// each page section retints the lighting and particles to its accent color.
import * as THREE from 'three'

const TUNNEL_LENGTH = 46
const state = {
  progress: 0,
  accent: new THREE.Color('#c8ff2d'),
  targetAccent: new THREE.Color('#c8ff2d'),
  pointer: { x: 0, y: 0 },
  handle: null
}

const metal = (color = 0xd8d8de) =>
  new THREE.MeshStandardMaterial({ color, metalness: 0.92, roughness: 0.22 })
const rubber = () =>
  new THREE.MeshStandardMaterial({ color: 0x1a1a1f, metalness: 0.4, roughness: 0.6 })

function makeDumbbell() {
  const g = new THREE.Group()
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 2.2, 24), metal())
  bar.rotation.z = Math.PI / 2
  g.add(bar)
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const r = 0.55 - i * 0.13
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.16, 36), rubber())
      plate.rotation.z = Math.PI / 2
      plate.position.x = side * (0.85 + i * 0.18)
      g.add(plate)
    }
  }
  return g
}

function makeKettlebell() {
  const g = new THREE.Group()
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.62, 36, 24), rubber())
  body.scale.y = 0.94
  g.add(body)
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.09, 18, 40, Math.PI), metal())
  handle.position.y = 0.55
  g.add(handle)
  return g
}

function makePlate() {
  const g = new THREE.Group()
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.14, 48), rubber())
  g.add(disc)
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.18, 24), metal())
  g.add(hub)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.05, 12, 48), metal(0xaaaab2))
  ring.rotation.x = Math.PI / 2
  g.add(ring)
  return g
}

function makeKnot() {
  return new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.5, 0.15, 128, 20),
    metal(0xc0c0c8)
  )
}

export function initScene(canvas) {
  if (state.handle) return state.handle

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0a0e1e, 0.05)

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 80)
  camera.position.set(0, 0, 6)

  scene.add(new THREE.AmbientLight(0x2a2a32, 1.6))
  const key = new THREE.PointLight(state.accent.getHex(), 90, 40, 1.8)
  key.position.set(2, 3, 4)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0xffffff, 0.7)
  rim.position.set(-4, 6, 2)
  scene.add(rim)
  const glow = new THREE.PointLight(state.accent.getHex(), 40, 30, 2)
  glow.position.set(0, -2, -18)
  scene.add(glow)

  // scatter equipment down the tunnel the camera travels through
  const makers = [makeDumbbell, makeKettlebell, makePlate, makeKnot]
  const objects = []
  for (let i = 0; i < 14; i++) {
    const obj = makers[i % makers.length]()
    const t = i / 13
    const angle = i * 2.39996 // golden angle spread
    obj.position.set(
      Math.cos(angle) * (1.8 + (i % 3) * 0.9),
      Math.sin(angle) * (1.4 + (i % 2) * 0.8),
      2 - t * (TUNNEL_LENGTH + 8)
    )
    obj.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
    obj.userData.spin = 0.15 + Math.random() * 0.25
    obj.userData.bobPhase = Math.random() * Math.PI * 2
    scene.add(obj)
    objects.push(obj)
  }

  // particle field
  const COUNT = 900
  const pos = new Float32Array(COUNT * 3)
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 14
    pos[i * 3 + 1] = (Math.random() - 0.5) * 10
    pos[i * 3 + 2] = 4 - Math.random() * (TUNNEL_LENGTH + 14)
  }
  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  const pMat = new THREE.PointsMaterial({
    color: state.accent.getHex(),
    size: 0.045,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  scene.add(new THREE.Points(pGeo, pMat))

  const clock = new THREE.Clock()
  let raf
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function frame() {
    const t = clock.getElapsedTime()
    const p = state.progress

    state.accent.lerp(state.targetAccent, 0.06)
    key.color.copy(state.accent)
    glow.color.copy(state.accent)
    pMat.color.copy(state.accent)

    camera.position.z = 6 - p * TUNNEL_LENGTH
    camera.position.x = Math.sin(p * Math.PI * 2) * 1.2 + state.pointer.x * 0.35
    camera.position.y = Math.cos(p * Math.PI * 1.5) * 0.7 + state.pointer.y * 0.25
    camera.lookAt(
      Math.sin((p + 0.06) * Math.PI * 2) * 1.2,
      Math.cos((p + 0.06) * Math.PI * 1.5) * 0.7,
      camera.position.z - 6
    )
    glow.position.z = camera.position.z - 14

    for (const o of objects) {
      o.rotation.x += 0.0016 * o.userData.spin * 60
      o.rotation.y += 0.0011 * o.userData.spin * 60
      o.position.y += Math.sin(t * 0.6 + o.userData.bobPhase) * 0.0012
    }

    renderer.render(scene, camera)
    if (!reduce) raf = requestAnimationFrame(frame)
  }
  frame()
  if (reduce) renderer.render(scene, camera)

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    if (reduce) renderer.render(scene, camera)
  }
  window.addEventListener('resize', onResize)

  state.handle = {
    destroy() {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      state.handle = null
    }
  }
  return state.handle
}

export function setSceneProgress(p) {
  state.progress = Math.min(1, Math.max(0, p))
}

export function setSceneAccent(hex) {
  state.targetAccent.set(hex)
}

export function setScenePointer(x, y) {
  state.pointer.x = x
  state.pointer.y = y
}
