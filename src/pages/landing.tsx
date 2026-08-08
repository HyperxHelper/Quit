import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Brain,
  Check,
  Clock,
  EyeOff,
  Flame,
  Gamepad2,
  HeartPulse,
  Leaf,
  Pizza,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  TrendingUp,
  Wind,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PublicNavbar } from "@/components/layout/public-navbar"
import { Footer } from "@/components/layout/footer"
import { SponsorSection } from "@/components/layout/sponsor-section"
import { ScienceSources } from "@/components/layout/science-sources"
import { useAuth } from "@/lib/auth"

const habits = [
  { label: "Smoking", icon: Flame },
  { label: "Doom-scrolling", icon: Smartphone },
  { label: "Cannabis", icon: Leaf },
  { label: "Junk food", icon: Pizza },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Vaping", icon: Wind },
  { label: "Porn", icon: EyeOff },
  { label: "Procrastination", icon: Clock },
]

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=45",
  "https://i.pravatar.cc/64?img=68",
]

const liveQuotes = [
  "I quit doom-scrolling and got my GPA back. — Ahmed, 3rd year",
  "Stopped vaping a month ago. My mornings feel like mine again. — Meriem, 2nd year",
  "Cannabis gone for 66 days. The streak makes me not want to break it. — Yassine, 1st year",
]

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const science = [
  {
    icon: Brain,
    title: "Neuroplasticity",
    text: "The brain rewires every time you resist a craving. Each 'no' strengthens the prefrontal cortex that makes the next 'no' easier.",
  },
  {
    icon: Timer,
    title: "The 21–66 day window",
    text: "Research on habit formation shows automaticity typically lands between 18 and 254 days — we build your baseline around the median and celebrate every milestone.",
  },
  {
    icon: HeartPulse,
    title: "Dopamine redirection",
    text: "Addiction hijacks the dopamine reward loop. Quit plans replace the spike with earned, sustainable reward signals that keep you consistent.",
  },
  {
    icon: TrendingUp,
    title: "Measured progress",
    text: "What gets measured gets managed. Streaks, savings and health metrics keep your wins visible and your identity as someone who quits.",
  },
]

const steps = [
  {
    step: "01",
    title: "Pick one thing to quit",
    text: "Choose the habit that costs you the most right now. One clear target beats five vague ones.",
  },
  {
    step: "02",
    title: "Get your science-backed plan",
    text: "Your plan sets a start date, a savings estimate and daily science prompts engineered for relapse resistance.",
  },
  {
    step: "03",
    title: "Stack days, not excuses",
    text: "Track your streak, log how you feel, watch the money you never spent pile up into reward you actually earned.",
  },
]

const stories = [
  {
    name: "Sarra, 21",
    tag: "Quit smoking · 6 months",
    quote:
      "I tried quitting smoking five times. The streak counters and the money-tracking made this the first time it stuck.",
  },
  {
    name: "Ahmed, 19",
    tag: "Quit doomscrolling · 40 days",
    quote: "I reclaimed around 4 hours a day. My GPA — and my sleep — finally look like the student I wanted to be.",
  },
  {
    name: "Nour, 22",
    tag: "Quit cannabis · 1 year",
    quote: "Knowing why I relapsed was life-changing. The science section felt like it was written about me.",
  },
]

export function LandingPage() {
  const { user } = useAuth()

  return (
    <div className="flex min-h-screen flex-col">
      <PublicNavbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.85_0.08_160),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.28_0.06_160),transparent)]" />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
            style={{ backgroundImage: noiseTexture }}
          />

          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-10 pt-20 text-center sm:px-6 sm:pt-28">
            <Badge className="items-center gap-1.5">
              <Sparkles className="size-3" />
              Backed by peer-reviewed research
            </Badge>

            <h1 className="font-display mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Quit the habit.<br />
              <span className="font-bold text-primary">Keep the person.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Quit is a science-backed initiative by students, for students.
              Quit smoking, quit wasting time, quit anything that holds you
              back — with research-proven plans and a streak that makes you
              accountable.
            </p>

            {/* FIX 2 · Social proof */}
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex items-center">
                {avatars.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    loading="lazy"
                    className={"size-8 rounded-full border-2 border-white object-cover " + (i > 0 ? "-ml-2" : "ml-0")}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Join 200+ students building better habits
                </span>
                <span className="flex items-center gap-1.5 text-xs text-green-700 dark:text-green-500">
                  <span className="size-2 rounded-full bg-green-500" />
                  Live
                </span>
              </div>
            </div>

            {/* FIX 4 · CTA hierarchy */}
            <div className="mt-6 flex flex-col items-center">
              {user ? (
                <Button size="xl" className="px-8 py-4 text-base" asChild>
                  <Link to="/app">
                    Open your dashboard <ArrowRight />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button size="xl" className="px-8 py-4 text-base" asChild>
                    <Link to="/signup">
                      Start your comeback <ArrowRight />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="group mt-4 border-primary/40 px-8 py-4 text-base shadow-xs transition-transform duration-200 hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/15 active:scale-[0.98]"
                    asChild
                  >
                    <Link to="/login">
                      Log in
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* FIX 5 · Live stats micro-moment */}
          <LiveStats />

          {/* habit chips */}
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-6 pb-10 text-center sm:px-6">
            <div className="flex w-full max-w-2xl flex-nowrap items-center gap-3 overflow-x-auto whitespace-nowrap pb-2 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {habits.map((habit, i) => (
                <span
                  key={habit.label}
                  className={
                    "flex shrink-0 items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground " +
                    (i === habits.length - 1 ? "pr-4" : "")
                  }
                >
                  <habit.icon className="size-4" strokeWidth={2} />
                  {habit.label}
                </span>
              ))}
            </div>

            {/* stat strip */}
            <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-4 rounded-2xl border bg-card p-6 shadow-sm">
              <Stat value="21" label="days to rewire a habit" />
              <Stat value="66" label="days to full automaticity" />
              <Stat value="100%" label="free for students" />
            </div>
          </div>
        </section>

        {/* Why / science */}
        <section id="why" className="scroll-mt-24 border-t bg-white dark:bg-background">
          <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary">The why</Badge>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Willpower is a muscle.
                <br className="hidden sm:block" /> Train it with evidence.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every plan on Quit maps to research published in
                peer-reviewed journals—then translated into tools a student can
                actually use this semester.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {science.map((s) => (
                <Card
                  key={s.title}
                  className="group gap-4 rounded-2xl border-zinc-200 bg-card py-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 dark:border-zinc-800"
                >
                  <CardHeader className="gap-4 px-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-green-500/10 text-green-700 transition-transform duration-300 ease-out group-hover:scale-110 dark:text-green-500">
                      <s.icon className="size-5" strokeWidth={2} />
                    </div>
                    <CardTitle className="font-display text-base leading-snug">
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6">
                    <CardDescription className="leading-relaxed">
                      {s.text}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-24 border-t">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary">How it works</Badge>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                From craving to comeback, in three steps
              </h2>
            </div>

            <div className="relative mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.step} className="relative flex flex-col gap-3">
                  {i < steps.length - 1 && (
                    <div className="absolute -right-3 top-6 hidden text-muted-foreground/40 md:block">
                      <ArrowRight className="size-5" />
                    </div>
                  )}
                  <span className="font-display text-primary text-5xl font-extrabold opacity-90">
                    {s.step}
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stories */}
        <section id="stories" className="scroll-mt-24 border-t bg-muted/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary">Stories</Badge>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Proof it works on real students
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {stories.map((story) => (
                <Card key={story.name} className="p-6">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Flame className="size-5" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">“{story.quote}”</p>
                  <div className="mt-6">
                    <div className="text-sm font-semibold">{story.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {story.tag}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* science links strip */}
        <section id="science" className="scroll-mt-24 border-t">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
            <div>
              <Badge variant="secondary">The science</Badge>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Read the papers behind the plan
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every protocol links to its peer-reviewed source — including the
                NHS evidence base for smoking cessation and studies on habit
                formation and dopamine reconditioning.
              </p>
              <div className="mt-6 space-y-3">
                <SourceRow
                  icon={ShieldCheck}
                  title="Smoking cessation clinical practice"
                  source="U.S. Public Health Service"
                />
                <SourceRow
                  icon={Brain}
                  title="How habits rewire the basal ganglia"
                  source="Duke University habit research"
                />
                <SourceRow
                  icon={HeartPulse}
                  title="Dopamine and behavioural addiction"
                  source="Nature Reviews · Neuroscience"
                />
              </div>
            </div>

            <Card className="gap-4 p-8">
              <Check className="size-6 text-primary" />
              <h3 className="text-xl font-semibold">
                “A failure to quit is not a failure of the person.”
              </h3>
              <p className="text-sm text-muted-foreground">
                Relapse is a data point, not a verdict. Every study shows most
                quitters succeed after multiple attempts — our tools assume you
                will need them, and design for it.
              </p>
              <ul className="space-y-2 text-sm">
                {["Never quit quitting", "Track, don't judge", "Science over shame"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Source journal — the rigor behind the plan */}
        <ScienceSources />

        {/* Sponsor */}
        <SponsorSection />

        {/* CTA */}
        <section className="border-t bg-primary px-4 py-20 text-center text-primary-foreground sm:px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Today is the day it stops.
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Free for every student. Anonymous if you want. Science-backed
              always.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {user ? (
                <Button
                  size="xl"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link to="/app">
                    Go to dashboard <ArrowRight />
                  </Link>
                </Button>
              ) : (
                <Button
                  size="xl"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link to="/signup">
                    Create your free account <ArrowRight />
                  </Link>
                </Button>
              )}
              <Button
                size="xl"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground"
                asChild
              >
                <Link to="/signup">Join the community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
        {label}
      </div>
    </div>
  )
}

function LiveStats() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % liveQuotes.length)
        setVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full border-y border-stone-200 bg-stone-50 dark:border-white/10 dark:bg-stone-900/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <span className="text-lg font-bold text-green-700 dark:text-green-500">
            127
          </span>{" "}
          students smoke-free for 30+ days
        </div>
        <p
          aria-live="polite"
          className={"text-sm italic text-gray-600 transition-opacity duration-300 dark:text-gray-400 " + (visible ? "opacity-100" : "opacity-0")}
        >
          “{liveQuotes[index]}”
        </p>
      </div>
    </div>
  )
}

function SourceRow({
  icon: Icon,
  title,
  source,
}: {
  icon: typeof Brain
  title: string
  source: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
      <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{source}</div>
      </div>
    </div>
  )
}