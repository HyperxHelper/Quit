import { useState, useEffect, useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Flame, GraduationCap, HeartPulse } from "lucide-react"

/* ── Particle field that reacts to the active slide ── */
function ParticleField({ colorIndex }: { colorIndex: number }) {
  const ref = useRef<THREE.Points>(null)
  const count = 1200

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      col[i * 3] = 1
      col[i * 3 + 1] = 1
      col[i * 3 + 2] = 1
    }
    return [pos, col]
  }, [])

  const palette = useMemo(
    () => [
      new THREE.Color("#16a34a"),
      new THREE.Color("#22d3ee"),
      new THREE.Color("#f97316"),
    ],
    []
  )

  useFrame((_, delta) => {
    if (!ref.current) return
    const geo = ref.current.geometry
    const posAttr = geo.attributes.position as THREE.BufferAttribute
    const colAttr = geo.attributes.color as THREE.BufferAttribute
    const target = palette[colorIndex % palette.length]

    for (let i = 0; i < count; i++) {
      posAttr.array[i * 3 + 1] += Math.sin(Date.now() * 0.001 + i) * delta * 0.15
      posAttr.array[i * 3] += Math.cos(Date.now() * 0.0008 + i * 0.5) * delta * 0.1
      const c = colAttr.array
      c[i * 3] += (target.r - c[i * 3]) * 0.02
      c[i * 3 + 1] += (target.g - c[i * 3 + 1]) * 0.02
      c[i * 3 + 2] += (target.b - c[i * 3 + 2]) * 0.02
    }
    posAttr.needsUpdate = true
    colAttr.needsUpdate = true
    ref.current.rotation.y += delta * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

/* ── Floating ring geometry ── */
function FloatingRing({ colorIndex }: { colorIndex: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const palette = useMemo(
    () => ["#16a34a", "#22d3ee", "#f97316"],
    []
  )

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.3
    ref.current.rotation.z += delta * 0.2
    ref.current.scale.setScalar(1 + Math.sin(Date.now() * 0.002) * 0.1)
  })

  return (
    <mesh ref={ref} position={[3, 1, -2]}>
      <torusGeometry args={[1.2, 0.15, 16, 64]} />
      <meshStandardMaterial
        color={palette[colorIndex % palette.length]}
        emissive={palette[colorIndex % palette.length]}
        emissiveIntensity={0.4}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

/* ── Three.js scene ── */
function Scene({ colorIndex }: { colorIndex: number }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <ParticleField colorIndex={colorIndex} />
      <FloatingRing colorIndex={colorIndex} />
    </>
  )
}

/* ── Slide data ── */
const slides = [
  {
    icon: Flame,
    title: "Quit the habit.",
    subtitle: "Keep the person.",
    description:
      "Science-backed plans built for students. Track streaks, save money, and rewrite your story.",
    accent: "text-green-500",
    bg: "from-green-500/10 to-transparent",
  },
  {
    icon: HeartPulse,
    title: "Backed by research.",
    subtitle: "Not willpower myths.",
    description:
      "Every protocol links to peer-reviewed science — neuroplasticity, dopamine redirection, and the 66-day habit window.",
    accent: "text-cyan-400",
    bg: "from-cyan-400/10 to-transparent",
  },
  {
    icon: GraduationCap,
    title: "Built by students.",
    subtitle: "For students.",
    description:
      "Free, anonymous if you want, and designed to fit your semester. Your streak travels with you when full membership launches.",
    accent: "text-orange-400",
    bg: "from-orange-400/10 to-transparent",
  },
]

const SLIDE_INTERVAL_MS = 5000

export function HeroSlideshow() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [fade, setFade] = useState(true)

  /* Cycle through slides */
  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setSlideIndex((i) => (i + 1) % slides.length)
        setFade(true)
      }, 400)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const current = slides[slideIndex]

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Three.js canvas – always mounted, behind content */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene colorIndex={slideIndex} />
        </Canvas>
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-[380px] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[440px] sm:px-12">
        <div
          className={`flex max-w-lg flex-col items-center gap-4 transition-all duration-500 ${
            fade ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <div className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${current.bg}`}>
            <current.icon className={`size-8 ${current.accent}`} strokeWidth={2} />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {current.title}
          </h2>
          <p className={`text-lg font-semibold ${current.accent}`}>
            {current.subtitle}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {current.description}
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === slideIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
