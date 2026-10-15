import {
  BarChart3,
  Brain,
  Globe,
  GraduationCap,
  Users,
  Cigarette,
  Wine,
  Pill,
  Play,
  Clock,
  Sparkles,
  BadgeCheck,
  HeartHandshake,
  BookOpen,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Video,
  Palette,
  TrendingUp,
  Dumbbell,
  FlaskConical,
  Stethoscope,
  Laptop,
  Lock,
  ArrowRight,
} from "lucide-react"

import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PublicNavbar } from "@/components/layout/public-navbar"
import { Footer } from "@/components/layout/footer"
import Reveal from "@/hooks/reveal"

const researchDomains = [
  {
    icon: Dumbbell,
    title: "Gambling",
    description:
      "Examining behavioural patterns, risk factors and the growing intersection of online platforms with gambling addiction among young populations.",
  },
  {
    icon: Wine,
    title: "Alcohol Addiction",
    description:
      "Studying prevalence, cultural drivers and the effectiveness of digital interventions for alcohol use disorders across demographics.",
  },
  {
    icon: Pill,
    title: "Drug Use & Substance Abuse",
    description:
      "Investigating substance dependency trends, harm-reduction strategies and data-driven approaches to prevention and recovery.",
  },
  {
    icon: Sparkles,
    title: "Cannabis",
    description:
      "Analysing shifting legal landscapes, usage patterns and the health impact of cannabis use — particularly among students and early-career adults.",
  },
  {
    icon: Cigarette,
    title: "Tobacco",
    description:
      "Tracking tobacco prevalence, evaluating cessation programs and measuring the reach of anti-smoking campaigns in under-served communities.",
  },
  {
    icon: Stethoscope,
    title: "Vaping",
    description:
      "Researching the rise of e-cigarette use, marketing tactics targeting youth and the long-term health implications still emerging in the data.",
  },
  {
    icon: Play,
    title: "Addiction to Reels & Doom-Scrolling",
    description:
      "Probing the neuroscience of short-form content loops, algorithmic amplification and the mental-health toll of compulsive social-media consumption.",
  },
  {
    icon: Clock,
    title: "Time & Health-Wasting Phenomena",
    description:
      "Quantifying how passive entertainment, excessive screen time and sedentary behaviours erode physical and cognitive well-being across the population.",
  },
]

const capabilities = [
  {
    icon: FlaskConical,
    title: "Hypothesis-Driven Research",
    description:
      "We formulate and test hypotheses grounded in real-world market and population data, turning observations into peer-reviewable evidence.",
  },
  {
    icon: BarChart3,
    title: "Research & Statistics",
    description:
      "From survey design to longitudinal analysis, we produce rigorous statistics that inform both academic discourse and public-health strategy.",
  },
  {
    icon: TrendingUp,
    title: "Data-Backed Insights",
    description:
      "Every claim we make is traceable to a dataset. We publish our methodology so others can replicate, challenge and build upon our findings.",
  },
]

const aiPillars = [
  {
    icon: Brain,
    title: "AI for Health-Promoting Behaviour",
    description:
      "We build models that identify at-risk individuals early, recommend personalised interventions and nudge users toward healthier daily choices.",
  },
  {
    icon: ShieldCheck,
    title: "Fighting Malicious Information",
    description:
      "Our NLP pipelines detect and flag misinformation about addiction and health, protecting communities from harmful content that delays recovery.",
  },
  {
    icon: Laptop,
    title: "Enhancing Care with Data",
    description:
      "Machine-learning tools help counsellors and clinicians prioritise cases, predict relapse risk and allocate resources where they are needed most.",
  },
  {
    icon: Lock,
    title: "Compliance & Security",
    description:
      "Every system we deploy adheres to ethical guidelines and data-protection standards — because research that compromises trust is research that fails.",
  },
]

const translationFormats = [
  { icon: Palette, label: "Promotional Graphics" },
  { icon: Video, label: "Short-Form Videos" },
  { icon: BookOpen, label: "Posters & Infographics" },
  { icon: Globe, label: "Interactive Web Content" },
  { icon: Lightbulb, label: "Audio Explainers" },
]

const languages = [
  "English",
  "French",
  "German",
  "Arabic",
  "Tunisian Dialect",
]

const volunteerPerks = [
  {
    icon: BadgeCheck,
    title: "Certificates & Badges",
    description:
      "Earn verified certificates of contribution and digital badges that showcase your commitment to public-health research on your CV and LinkedIn.",
  },
  {
    icon: GraduationCap,
    title: "Hands-On Research Experience",
    description:
      "Work alongside researchers, contribute to real papers and gain skills in data collection, analysis and science communication.",
  },
  {
    icon: Users,
    title: "Campus & Community Impact",
    description:
      "Drive awareness events, workshops and campaigns on your campus and in your local community — backed by Quit Lab resources and mentorship.",
  },
  {
    icon: HeartHandshake,
    title: "Perks & Recognition",
    description:
      "Access exclusive Quit Initiative merchandise, priority opportunities and a network of like-minded peers and professionals across health disciplines.",
  },
]

export function ResearchPage() {
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
                § — Quit Lab · Research division
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-7xl">
                Where technology meets{" "}
                <span className="font-serif-d font-normal italic">
                  health research.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted md:text-lg">
                Quit Lab is the research engine behind Quit Initiative. We use
                data science, AI and community-driven fieldwork to understand
                addiction — and to turn that understanding into content,
                education and tools that every person with a phone can access.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="rounded-none bg-primary font-mono-d text-xs tracking-[0.18em] uppercase hover:bg-primary/90"
                  asChild
                >
                  <a
                    href="https://x.com/Quit_Initiative"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore our research
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none border-ink-line bg-transparent font-mono-d text-xs tracking-[0.18em] text-ink-fg uppercase hover:border-primary hover:bg-transparent hover:text-primary"
                  asChild
                >
                  <Link to="/app/volunteer">
                    <Users className="h-4 w-4" />
                    Join as a volunteer
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Mission Strip ─────────────────────────────────── */}
        <section className="border-b border-ink-line bg-ink text-ink-fg">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-3 sm:px-6">
            {[
              {
                value: "+5",
                label: "Languages",
                sub: "Research translated for everyone",
              },
              {
                value: "6+",
                label: "Research Domains",
                sub: "From gambling to doom-scrolling",
              },
              {
                value: "∞",
                label: "Open Access",
                sub: "Free content, always",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono-d text-3xl font-semibold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold">{stat.label}</div>
                <div className="font-mono-d text-[10px] tracking-[0.14em] text-ink-muted uppercase">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Research Domains ──────────────────────────────── */}
        <section id="domains">
          <div className="mx-auto w-full max-w-4xl px-4 pb-20 pt-16 sm:px-6">
            <div className="mb-10 text-center">
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                §01 — What we study
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Research{" "}
                <span className="font-serif-d font-normal italic text-lime-strong">
                  domains.
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We formulate hypotheses on current market and population
                trends across the behaviours and phenomena that most
                undermine human health and potential.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {researchDomains.map((domain) => (
                <Card key={domain.title} className="gap-0 py-5">
                  <CardHeader className="px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lime-strong">
                        <domain.icon className="size-5" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-base leading-snug">
                        {domain.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-5">
                    <CardDescription className="leading-relaxed">
                      {domain.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Research & Statistics ─────────────────────────── */}
        <section className="border-y border-border bg-grid-paper">
          <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center">
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                §02 — Our methodology
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Research &amp;{" "}
                <span className="font-serif-d font-normal italic text-lime-strong">
                  statistics.
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Rigour is not optional. Every study we conduct follows
                transparent methodology so findings can be replicated,
                challenged and improved upon.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {capabilities.map((cap) => (
                <Card key={cap.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-lime-strong">
                      <cap.icon className="size-6" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-base">{cap.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {cap.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI, Data Science & ML ────────────────────────── */}
        <section id="ai">
          <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center">
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                §03 — Technology for good
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                AI, data science &amp; machine learning{" "}
                <span className="font-serif-d font-normal italic text-lime-strong">
                  in digital health.
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We don't just study problems — we engineer solutions. Our
                technical stack turns raw data into actionable health
                outcomes while safeguarding the people behind every data point.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aiPillars.map((pillar) => (
                <Card key={pillar.title} className="gap-0 py-5">
                  <CardHeader className="px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lime-strong">
                        <pillar.icon className="size-5" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-base leading-snug">
                        {pillar.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-5">
                    <CardDescription className="leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Research Translation ──────────────────────────── */}
        <section className="border-y border-border bg-grid-paper">
          <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center">
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                §04 — Accessibility
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                From paper to{" "}
                <span className="font-serif-d font-normal italic text-lime-strong">
                  people.
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Research that stays in a journal doesn't save lives. We
                translate peer-reviewed findings into content every person
                with a phone can understand — in their own language.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Formats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Content Formats
                  </CardTitle>
                  <CardDescription>
                    We adapt findings across multiple media to meet people
                    where they are.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {translationFormats.map((fmt) => (
                      <Badge
                        key={fmt.label}
                        variant="secondary"
                        className="gap-1.5"
                      >
                        <fmt.icon className="size-3" />
                        {fmt.label}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Available Languages
                  </CardTitle>
                  <CardDescription>
                    And growing. We prioritise underserved languages where
                    health misinformation spreads unchecked.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Badge key={lang} variant="outline">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Our goal:
                </span>{" "}
                Make the latest addiction and health research as accessible as
                a Instagram story — in every major African and global language.
              </p>
            </div>
          </div>
        </section>

        {/* ── Training & Education ──────────────────────────── */}
        <section id="training">
          <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center">
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                §05 — Empowerment
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Training &amp;{" "}
                <span className="font-serif-d font-normal italic text-lime-strong">
                  education.
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We use our research to elevate the cognitive level of
                communities — educating, empowering and equipping people to
                make informed health decisions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Educate",
                  text: "Structured learning paths built from the latest evidence, delivered in plain language through our Academy and social channels.",
                },
                {
                  icon: Dumbbell,
                  title: "Empower",
                  text: "Workshops, toolkits and mentorship that give students and early-career workers the confidence to act on what they know.",
                },
                {
                  icon: Rocket,
                  title: "Enable",
                  text: "We connect trained individuals with real projects, campaigns and research opportunities so knowledge becomes impact.",
                },
              ].map((item) => (
                <Card key={item.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-lime-strong">
                      <item.icon className="size-6" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {item.text}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Volunteer Program ─────────────────────────────── */}
        <section
          id="volunteer"
          className=" border-t border-border bg-primary/10"
        >
          <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center">
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                §06 — Join the movement
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Quit Lab{" "}
                <span className="font-serif-d font-normal italic text-lime-strong">
                  volunteer program.
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We encourage Medical, Nursing, Health and all allied
                students to volunteer with Quit Lab &amp; Quit Initiative.
                Drive awareness on your campus, earn credentials and grow
                with a community that puts health first.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {volunteerPerks.map((perk) => (
                <Card key={perk.title} className="gap-0 py-5">
                  <CardHeader className="px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lime-strong">
                        <perk.icon className="size-5" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-base leading-snug">
                        {perk.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-5">
                    <CardDescription className="leading-relaxed">
                      {perk.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border-t-2 border-primary/30 bg-background p-6 text-center shadow-sm">
              <p className="text-sm text-muted-foreground">
                Whether you're a medical student, a data scientist, a nurse
                or simply someone who cares — there's a place for you in
                Quit Lab. Together, we turn research into real-world change.
              </p>
              <Button size="lg" className="mt-5 gap-1.5" asChild>
                <Link to="/login">
                  <Rocket className="size-4" />
                  Get Started — It's Free
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
