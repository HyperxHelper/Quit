import { useEffect, useRef, useState } from "react"
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
import Reveal from "@/hooks/reveal"

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

function OrbitVisual() {
  const nodes = addictivePatterns.map((label, i) => {
    const angle = (i / addictivePatterns.length) * Math.PI * 2
    return {
      label,
      left: 50 + 48 * Math.cos(angle),
      top: 50 + 48 * Math.sin(angle),
    }
  })

  return (
    <div className="relative h-[340px] overflow-hidden border border-ink-line bg-ink sm:h-[440px]">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(163,230,53,0.14),transparent_60%)]" />

      {/* rings */}
      <div className="absolute top-1/2 left-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-line sm:h-[300px] sm:w-[300px]" />
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-line/70 sm:h-[420px] sm:w-[420px]" />

      {/* orbiting nodes */}
      <div className="absolute top-1/2 left-1/2 h-0 w-0">
        <div className="animate-orbit">
          <div className="relative h-[220px] w-[220px] sm:h-[300px] sm:w-[300px]">
            {nodes.map((node) => (
              <span
                key={node.label}
                className="absolute"
                style={{ left: `${node.left}%`, top: `${node.top}%` }}
              >
                <span className="block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                <span className="animate-orbit-rev absolute top-1/2 left-4 hidden -translate-y-1/2 whitespace-nowrap border border-ink-line bg-ink-2/85 px-2 py-0.5 font-mono-d text-[10px] tracking-[0.14em] text-ink-muted uppercase backdrop-blur sm:block">
                  {node.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary sm:size-20">
          <span className="font-mono-d text-[10px] font-semibold tracking-[0.16em] text-accent-foreground uppercase">
            Lab
          </span>
        </div>
      </div>

      <span className="font-mono-d pointer-events-none absolute right-3 bottom-3 text-[10px] tracking-[0.16em] text-ink-muted uppercase">
        Drag-free · live orbit
      </span>
    </div>
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

      <div className="grid gap-px border border-border bg-border py-0 sm:grid-cols-2">
        {stemPillars.map((pillar) => (
          <div key={pillar.title} className="bg-card p-4 leading-relaxed">
            <div className="mb-1.5 flex items-center gap-2">
              <pillar.icon className="size-4 text-lime-strong" />
              <span className="font-mono-d text-xs font-semibold tracking-[0.14em] text-foreground uppercase">
                {pillar.title}
              </span>
            </div>
            <p className="text-[13.5px] text-muted-foreground">{pillar.text}</p>
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

      <div className="border border-primary/40 bg-primary/10 p-5 font-serif-d text-[19px] italic leading-relaxed text-foreground/90">
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

      <div className="mt-8 border border-border bg-muted/60 p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary font-mono-d text-sm font-bold text-accent-foreground">
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
          <MapPin className="inline size-3.5 text-lime-strong" /> If our mission
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
  const cycleRef = useRef<HTMLDivElement>(null)

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

  return (
    <div className="flex min-h-screen flex-col">
      <PublicNavbar />
      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="bg-ink relative overflow-hidden border-b border-ink-line text-ink-fg">
          <div className="bg-grid absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,230,53,0.08),transparent_60%)]" />
          <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
            <Reveal>
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-primary uppercase">
                § — Quit Lab · Official release channel
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-7xl">
                Quit{" "}
                <span className="font-serif-d text-primary font-normal italic">
                  Blog.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted md:text-lg">
                Releases, lab notes and outcomes from Quit Initiative &amp;
                Research Lab — a STEM Lab working for human being and digital
                health.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink-line pt-5">
                <span className="font-mono-d flex items-center gap-2 text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                  <Rss className="h-3.5 w-3.5 text-primary" /> Release notes
                </span>
                <span className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                  Lab notes
                </span>
                <span className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                  Research outcomes
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Live orbit (pure CSS — no WebGL) ─────────────── */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
            <div className="mb-6 text-center">
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                Live orbit
              </p>
              <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                The patterns orbiting the modern world
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                At the center sits the lab — beneath it, the blogging cycle
                counts every release, starting from 0.
              </p>
            </div>
            <OrbitVisual />
          </div>
        </section>

        {/* ── Blogging Cycle ────────────────────────────────── */}
        <section ref={cycleRef}>
          <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center">
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                Blogging cycle
              </p>
              <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Where Quit Lab publishes its work
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                The Quit Lab Blog is the official publishing channel of Quit
                Initiative &amp; Research Lab — where release notes, research
                findings and project outcomes are shared openly with our
                community. Every published post advances the counter below; the
                cycle begins at 0.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-4">
                <span
                  key={count}
                  className="font-mono-d animate-in fade-in zoom-in-95 text-7xl font-semibold text-lime-strong tabular-nums sm:text-8xl"
                >
                  {count}
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold">
                    {count === 0 ? "awaiting first release" : "post published"}
                  </p>
                  <p className="font-mono-d text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                    Quit Lab blogging cycle · starting from 0
                  </p>
                </div>
              </div>

              {count >= 1 && (
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="group animate-in fade-in slide-in-from-bottom-4 mt-10 w-full cursor-pointer border border-border bg-card p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="font-mono-d flex items-center gap-1.5 border border-border px-2.5 py-1 text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                      <Calendar className="size-3" />
                      {post.date}
                    </span>
                    <span className="font-mono-d flex items-center gap-1 text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold transition-colors group-hover:text-lime-strong sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-mono-d text-xs font-bold text-accent-foreground">
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
                    <span className="ml-3 flex shrink-0 items-center gap-1 text-sm font-medium text-lime-strong">
                      Read article
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </button>
              )}

              <div className="font-mono-d mt-8 flex items-center gap-2 text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                <HeartPulse className="size-3.5 text-lime-strong" />
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
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="gap-1.5">
                  <Sparkles className="size-3" />
                  Release
                </Badge>
                <span className="font-mono-d flex items-center gap-1 text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                  <Calendar className="size-3" />
                  {post.date}
                </span>
                <span className="font-mono-d flex items-center gap-1 text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                  <Clock className="size-3" />
                  {post.readTime}
                </span>
              </div>

              <DialogTitle className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {post.title}
              </DialogTitle>

              <div className="flex items-center gap-3 border-b border-border pb-5">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary font-mono-d text-sm font-bold text-accent-foreground">
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
