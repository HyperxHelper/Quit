import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import {
  ArrowRight,
  Calendar,
  Clock,
  Cpu,
  FlaskConical,
  HeartPulse,
  MapPin,
  Rss,
  Sparkles,
  Wrench,
  Sigma,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PublicNavbar } from "@/components/layout/public-navbar"
import { Footer } from "@/components/layout/footer"

const addictivePatterns = [
  "Doom-scrolling",
  "Short-form video",
  "Likes & validation",
  "Push notifications",
  "Endless gaming",
  "Vaping",
  "Gambling",
  "Nicotine",
]

const stemPillars = [
  {
    icon: FlaskConical,
    title: "Science",
    text: "Hypothesis-driven research on the addictive patterns of the modern world — from doom-scrolling to vaping — tested against real data, not opinions.",
  },
  {
    icon: Wrench,
    title: "Engineering",
    text: "We design and build digital interventions: tools, apps and web experiences that turn published evidence into everyday support.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "AI, data science and privacy-first systems let us reach people at scale while protecting the person behind every data point.",
  },
  {
    icon: Sigma,
    title: "Mathematics",
    text: "Statistics and longitudinal analysis give every claim we publish a traceable dataset anyone can replicate and challenge.",
  },
]

const post = {
  id: 1,
  title: "Introducing Quit Blog",
  date: "October 5, 2026",
  readTime: "4 min read",
  author: "Ahmed Ben Abderrazek",
  role: "Registered Nurse and CEO of Quit Lab & Initiative",
  excerpt:
    "Why this blog exists, how Quit Initiative & Research Lab operates as a STEM Lab for human being and digital health, and what releases you can expect next.",
}

function useIsDark() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )
  useEffect(() => {
    const observer = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    )
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])
  return isDark
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return reduced
}

function Core({ color, animate }: { color: string; animate: boolean }) {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!mesh.current || !animate) return
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.05
    mesh.current.scale.setScalar(s)
  })
  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function OrbitScene({
  ringColor,
  coreColor,
  showLabels,
  animate,
}: {
  ringColor: string
  coreColor: string
  showLabels: boolean
  animate: boolean
}) {
  const orbit = useRef<THREE.Group>(null)
  const R = 3

  useFrame((_, delta) => {
    if (orbit.current && animate) orbit.current.rotation.y += delta * 0.12
  })

  const nodes = useMemo(
    () =>
      addictivePatterns.map((label, i) => ({
        label,
        angle: (i / addictivePatterns.length) * Math.PI * 2,
      })),
    []
  )

  const particles = useMemo(() => {
    const positions = new Float32Array(150 * 3)
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 14
    }
    return positions
  }, [])

  return (
    <group>
      <group ref={orbit}>
        <group rotation={[Math.PI / 2.3, 0, 0]}>
          <mesh>
            <torusGeometry args={[R, 0.012, 8, 160]} />
            <meshBasicMaterial color={ringColor} transparent opacity={0.55} />
          </mesh>
          {nodes.map((n) => (
            <group
              key={n.label}
              position={[
                Math.cos(n.angle) * R,
                Math.sin(n.angle) * R,
                0,
              ]}
            >
              <mesh>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshBasicMaterial color={coreColor} />
              </mesh>
              {showLabels && (
                <Html center style={{ pointerEvents: "none" }}>
                  <span className="pointer-events-none block -translate-y-5 whitespace-nowrap rounded-full border bg-background/85 px-2 py-0.5 text-[10px] font-medium text-muted-foreground backdrop-blur-sm">
                    {n.label}
                  </span>
                </Html>
              )}
            </group>
          ))}
        </group>

        <mesh rotation={[Math.PI / 2.3, 0.9, 0.5]}>
          <torusGeometry args={[R * 0.68, 0.008, 8, 128]} />
          <meshBasicMaterial color={ringColor} transparent opacity={0.25} />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, -0.7, -0.6]}>
          <torusGeometry args={[R * 1.25, 0.006, 8, 128]} />
          <meshBasicMaterial color={ringColor} transparent opacity={0.18} />
        </mesh>

        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[particles, 3]} />
          </bufferGeometry>
          <pointsMaterial
            color={ringColor}
            size={0.035}
            transparent
            opacity={0.35}
            depthWrite={false}
          />
        </points>
      </group>

      <Core color={coreColor} animate={animate} />
    </group>
  )
}

function ArticleBody() {
  return (
    <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-foreground/90">
      <p className="text-lg text-muted-foreground">
        Every project that intends to last needs a place where its releases,
        its science and its results are shared in the open. Today, that place
        exists — welcome to Quit Blog.
      </p>

      <h2 className="font-display pt-3 text-xl font-bold text-foreground">
        What is Quit Initiative &amp; Research Lab?
      </h2>
      <p>
        Quit Initiative and Quit Lab are one movement, born in Tunisia with a
        global ambition: to fight addiction and defend digital health. We are
        a STEM Lab — we use{" "}
        <strong className="text-foreground">
          Science, Engineering, Technology and Mathematics
        </strong>{" "}
        in favour of the human being, turning academic rigour into tools that
        anyone with a phone can actually use.
      </p>

      <div className="grid gap-3 py-2 sm:grid-cols-2">
        {stemPillars.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border bg-muted/40 p-4 leading-relaxed"
          >
            <div className="mb-1.5 flex items-center gap-2">
              <p.icon className="size-4 text-primary" />
              <span className="font-display text-sm font-bold text-foreground">
                {p.title}
              </span>
            </div>
            <p className="text-[13.5px] text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display pt-3 text-xl font-bold text-foreground">
        How we operate
      </h2>
      <p>
        We run as a lab, not a loud social account. Every claim we make starts
        as a hypothesis, is tested against data, and ends as either a research
        note, a tool, or an outcome we can measure. We publish what works —
        and what doesn&apos;t — so others can replicate, challenge and build
        on it.
      </p>

      <h2 className="font-display pt-3 text-xl font-bold text-foreground">
        What you will find here
      </h2>
      <p>
        This blog is the release channel of the project. You will find product
        and research releases, lab notes on the addictive patterns orbiting
        the modern world — doom-scrolling, short-form video, vaping,
        gambling — and honest reports on the general outcomes of the project
        as a whole: what we shipped, what we learned, and where we are going
        next.
      </p>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-[15px] italic leading-relaxed text-foreground/90">
        &ldquo;Technology should serve the human being — not the other way
        around. That single sentence is the reason Quit Lab exists.&rdquo;
      </div>

      <h2 className="font-display pt-3 text-xl font-bold text-foreground">
        Where we go from here
      </h2>
      <p>
        We are small, we are early, and we are deliberate. One post at a time,
        one release at a time, we intend to turn this counter into a public
        record of a STEM Lab working for digital health — from Tunisia, with
        the whole world invited to collaborate.
      </p>

      <div className="mt-8 rounded-2xl border bg-muted/40 p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
            AB
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Author: {post.author}
            </p>
            <p className="text-xs text-muted-foreground">{post.role}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          We&apos;re a small project from Tunisia with ambition to cooperate
          with the whole world.{" "}
          <MapPin className="inline size-3.5 text-primary" /> If our mission
          speaks to you, reach out — every collaboration makes the next
          release possible.
        </p>
      </div>
    </div>
  )
}

export function BlogPage() {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [showLabels, setShowLabels] = useState(false)
  const cycleRef = useRef<HTMLDivElement>(null)
  const isDark = useIsDark()
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)")
    const onChange = () => setShowLabels(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    const el = cycleRef.current
    if (!el) return
    let timer: number | undefined
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          timer = window.setTimeout(() => setCount(1), 700)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [])

  const ringColor = isDark ? "#34d399" : "#059669"
  const coreColor = isDark ? "#10b981" : "#047857"

  return (
    <div className="flex min-h-screen flex-col">
      <PublicNavbar />
      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="border-b">
          <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <Badge variant="secondary" className="items-center gap-1.5">
              <Rss className="size-3" />
              Quit Lab — Official Release Channel
            </Badge>
            <h1 className="font-display mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Quit <span className="text-primary">Blog</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Releases, lab notes and outcomes from Quit Initiative &amp;
              Research Lab — a STEM Lab working for human being and digital
              health.
            </p>
          </div>
        </section>

        {/* ── Three.js Orbit ────────────────────────────────── */}
        <section className="border-b bg-muted/30">
          <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
            <div className="mb-6 text-center">
              <Badge variant="secondary" className="items-center gap-1.5">
                <Sparkles className="size-3" />
                Live Orbit
              </Badge>
              <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                The patterns orbiting the modern world
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                Drag to orbit. At the center sits the lab — beneath it, the
                blogging cycle counts every release, starting from 0.
              </p>
            </div>

            <div className="relative h-[340px] overflow-hidden rounded-2xl border bg-gradient-to-b from-primary/5 to-background sm:h-[440px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.14),transparent_60%)]" />
              <Canvas
                camera={{ position: [0, 2, 8.5], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                style={{ position: "relative" }}
              >
                <OrbitScene
                  ringColor={ringColor}
                  coreColor={coreColor}
                  showLabels={showLabels}
                  animate={!reduced}
                />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={!reduced}
                  autoRotateSpeed={0.7}
                  minPolarAngle={Math.PI / 5}
                  maxPolarAngle={Math.PI / 2.1}
                />
              </Canvas>
              <span className="pointer-events-none absolute right-3 bottom-3 text-[11px] text-muted-foreground">
                Drag to orbit
              </span>
            </div>
          </div>
        </section>

        {/* ── Blogging Cycle ────────────────────────────────── */}
        <section ref={cycleRef} className="scroll-mt-20">
          <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center">
              <Badge variant="secondary" className="items-center gap-1.5">
                <Rss className="size-3" />
                Blogging Cycle
              </Badge>
              <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Where Quit Lab publishes its work
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                The Quit Lab Blog is the official publishing channel of Quit
                Initiative &amp; Research Lab — where release notes, research
                findings and project outcomes are shared openly with our
                community. Every published post advances the counter below;
                the cycle begins at 0.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-4">
                <span
                  key={count}
                  className="font-display animate-in fade-in zoom-in-95 text-7xl font-extrabold text-primary tabular-nums sm:text-8xl"
                >
                  {count}
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold">
                    {count === 0 ? "awaiting first release" : "post published"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Quit Lab blogging cycle · starting from 0
                  </p>
                </div>
              </div>

              {count >= 1 && (
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="group animate-in fade-in slide-in-from-bottom-4 mt-10 w-full cursor-pointer rounded-2xl border bg-card p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="gap-1.5">
                      <Calendar className="size-3" />
                      {post.date}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold transition-colors group-hover:text-primary sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t pt-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-xs font-bold text-primary">
                        AB
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {post.author}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {post.role}
                        </p>
                      </div>
                    </div>
                    <span className="ml-3 flex shrink-0 items-center gap-1 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </button>
              )}

              <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
                <HeartPulse className="size-3.5 text-primary" />
                Science · Engineering · Technology · Mathematics — for human
                being &amp; digital health
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* ── Medium-like article dialog ────────────────────── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[88vh] w-full overflow-y-auto p-0 sm:max-w-3xl">
          <div className="p-6 sm:p-10">
            <DialogHeader className="gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="gap-1.5">
                  <Sparkles className="size-3" />
                  Release
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3" />
                  {post.readTime}
                </span>
              </div>

              <DialogTitle className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {post.title}
              </DialogTitle>

              <div className="flex items-center gap-3 border-b pb-5">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                  AB
                </div>
                <div>
                  <p className="text-sm font-semibold">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.role}</p>
                </div>
              </div>
            </DialogHeader>

            <ArticleBody />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
