import { useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  HeartHandshake,
  HeartPulse,
  Info,
  LifeBuoy,
  MessagesSquare,
  Phone,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  memberStories,
  type MemberStoryCategory,
} from "@/data/member-stories"
import { cn } from "@/lib/utils"

const DISCORD_URL = "https://discord.gg/jVBhcJUGb3"

type Category = "All" | MemberStoryCategory

const whoStats = [
  {
    icon: HeartPulse,
    value: "720,000+",
    label: "people die by suicide every year",
    sub: "World Health Organization estimate — and almost every one is preventable when help arrives early.",
  },
  {
    icon: Users,
    value: "3rd",
    label: "leading cause of death in ages 15–29",
    sub: "The exact age group Quit is built for. WHO global health estimates.",
  },
  {
    icon: ShieldCheck,
    value: "1 in 7",
    label: "people live with a mental disorder",
    sub: "Nearly 1.1 billion people in 2021. Depression and anxiety are the most common. WHO.",
  },
]

const filters: Category[] = ["All", "Addiction", "Anxiety", "Suicidal thoughts"]

const sources = [
  {
    href: "https://www.who.int/news-room/fact-sheets/detail/suicide",
    title: "Suicide — fact sheet",
    publisher: "World Health Organization",
    usedFor: "720,000+ deaths and the 15–29 age group figures",
  },
  {
    href: "https://www.who.int/publications/i/item/9789240110069",
    title: "Suicide worldwide in 2021: Global Health Estimates",
    publisher: "World Health Organization",
    usedFor: "Leading causes of death among 15–29-year-olds",
  },
  {
    href: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
    title: "Mental disorders — fact sheet",
    publisher: "World Health Organization",
    usedFor: "1 in 7 people living with a mental disorder",
  },
  {
    href: "https://www.who.int/news-room/fact-sheets/detail/depression",
    title: "Depressive disorder (depression) — fact sheet",
    publisher: "World Health Organization",
    usedFor: "The link between depression, anxiety and suicide",
  },
  {
    href: "https://www.atps.tn/",
    title: "Association Tunisienne de Prévention du Suicide (ATPS)",
    publisher: "ATPS",
    usedFor: "The 8010 3666 crisis helpline details",
  },
]

interface CrisisLine {
  name: string
  number: string
  tel: string
  tag: string
  hours: string
  desc: string
  primary?: boolean
}

const crisisGroups: { label: string; lines: CrisisLine[] }[] = [
  {
    label: "In Tunisia",
    lines: [
      {
        name: "ATPS — Suicide Prevention Helpline",
        number: "8010 3666",
        tel: "80103666",
        tag: "Primary · 24/7",
        hours: "Free & confidential, around the clock",
        desc: "Association Tunisienne de Prévention du Suicide — crisis support, counseling and a calm voice when you need one.",
        primary: true,
      },
      {
        name: "190 — Medical emergency",
        number: "190",
        tel: "190",
        tag: "Emergency",
        hours: "24/7",
        desc: "Urgent medical help for immediate danger.",
      },
      {
        name: "197 — Police emergency",
        number: "197",
        tel: "197",
        tag: "Emergency",
        hours: "24/7",
        desc: "Police for urgent situations.",
      },
      {
        name: "Razi Psychiatric Hospital — Mental Health Helpline",
        number: "+216 71 576 000",
        tel: "+21671576000",
        tag: "Mental health",
        hours: "Mon–Fri · 9:00–17:00",
        desc: "National helpline for counseling, psychiatric support and suicide prevention.",
        primary: false,
      },
      {
        name: "UNICEF Tunisia — Youth Support Line",
        number: "+216 71 571 727",
        tel: "+21671571727",
        tag: "Students",
        hours: "Mon–Fri · 9:00–18:00",
        desc: "Psychological support and suicide prevention resources for young people.",
        primary: false,
      },
    ],
  },
  {
    label: "US & Canada",
    lines: [
      {
        name: "988 — Suicide & Crisis Lifeline",
        number: "988",
        tel: "988",
        tag: "24/7",
        hours: "Call or text, free & confidential",
        desc: "For students studying in the US or Canada — counselors you can call or text any time.",
        primary: false,
      },
    ],
  },
]

export function HelpPage() {
  const [filter, setFilter] = useState<Category>("All")

  const visible =
    filter === "All"
      ? memberStories
      : memberStories.filter((m) => m.category === filter)

  const countFor = (f: Category) =>
    f === "All"
      ? memberStories.length
      : memberStories.filter((m) => m.category === f).length

  return (
    <div className="w-full min-w-0 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
      {/* Header */}
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Support · 100% free for every member
        </p>
        <h1 className="font-display mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Seek help. You don't have to carry this alone.
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Struggling with your mental health, your addiction, or dark thoughts?
          That's exactly why Quit exists. A nurse is there for you, totally
          free — real human, zero judgement.
        </p>
      </header>

      {/* Nurse CTA */}
      <Card className="relative mt-6 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 shadow-sm">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-primary/10 to-transparent"
        />
        <div className="relative flex flex-col gap-4 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <HeartHandshake className="size-6" />
            </span>
            <div>
              <h2 className="text-base font-semibold">
                A nurse is online for you right now.
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                Seeking help is not weakness — it's the strongest move you can
                make. Hop into the Quit Discord and say the word. The nurse
                takes it from there, free, no sign-up strings attached.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-foreground/80 lg:justify-end">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Nurses online now — replies in minutes
            </div>
            <Button
              size="lg"
              className="h-12 w-full gap-2 rounded-xl sm:px-6 lg:w-auto"
              asChild
            >
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                <MessagesSquare className="size-5" /> Hop into Discord
              </a>
            </Button>
          </div>
        </div>
      </Card>

      {/* WHO stats */}
      <SectionLabel
        title="Why it matters"
        sub="The World Health Organization keeps the numbers honest — and they're why we built this."
        className="mt-8"
      />
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {whoStats.map((s) => (
          <Card
            key={s.label}
            className="gap-2 rounded-2xl border bg-card p-4 shadow-sm sm:gap-3 sm:p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="font-display text-2xl font-extrabold tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm font-semibold leading-tight">
                  {s.label}
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {s.sub}
            </p>
          </Card>
        ))}
      </div>

      {/* Suicide & mental health correlation */}
      <Card className="mt-4 rounded-2xl border bg-card p-6 shadow-sm sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <LifeBuoy className="size-5" />
          </span>
          <div>
            <h2 className="text-base font-semibold">
              Suicidal thoughts rarely arrive alone.
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              They almost always travel with untreated depression, anxiety or an
              addiction — the very things Quit is here to help you face. That's
              the correlation that matters most: when mental health is cared
              for, the risk drops and the recovery starts. Reaching out early is
              the single best predictor of a different outcome.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 sm:flex-row sm:items-start">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
            <PhoneCall className="size-5" />
          </span>
          <div className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              If you're in immediate danger:
            </span>{" "}
            call{" "}
            <a
              href="tel:190"
              className="font-semibold text-foreground underline decoration-primary/40 underline-offset-2"
            >
              190
            </a>{" "}
            (medical) or{" "}
            <a
              href="tel:197"
              className="font-semibold text-foreground underline decoration-primary/40 underline-offset-2"
            >
              197
            </a>{" "}
            (police) in Tunisia, reach the{" "}
            <a
              href="tel:80103666"
              className="font-semibold text-foreground underline decoration-primary/40 underline-offset-2"
            >
              8010 3666
            </a>{" "}
            suicide prevention line — free, confidential and open 24/7 — or, if
            you're in the US or Canada, call or text{" "}
            <a
              href="tel:988"
              className="font-semibold text-foreground underline decoration-primary/40 underline-offset-2"
            >
              988
            </a>
            . You matter, and there are people waiting to help right now —
            inside Quit and outside it.
          </div>
        </div>
      </Card>

      {/* Crisis lines */}
      <SectionLabel
        title="Crisis lines you can call right now"
        sub="Free and confidential. Tap a number to call — one tap is all it takes."
        className="mt-8"
      />
      <Card className="mt-3 gap-0 rounded-2xl border bg-card p-2 shadow-sm">
        {crisisGroups.map((group, gi) => (
          <div key={group.label}>
            {gi > 0 && <div className="mx-4 border-t" />}
            <div className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {group.label}
            </div>
            {group.lines.map((line) => (
              <a
                key={line.tel + line.name}
                href={`tel:${line.tel}`}
                className="group flex items-start gap-3 rounded-xl p-3 transition-colors active:bg-accent sm:hover:bg-accent"
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl",
                    line.primary
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  <Phone className="size-5" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-sm font-semibold leading-tight">
                      {line.name}
                    </span>
                    <Badge variant={line.primary ? "default" : "secondary"}>
                      {line.tag}
                    </Badge>
                  </span>
                  <span className="font-display text-lg font-bold tabular-nums text-primary">
                    {line.number}
                  </span>
                  <span className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="size-3.5 shrink-0" />
                      {line.hours}
                    </span>
                    <span
                      aria-hidden
                      className="hidden text-muted-foreground/60 sm:inline"
                    >
                      ·
                    </span>
                    <span className="line-clamp-2">{line.desc}</span>
                  </span>
                </span>
                <span
                  aria-label={`Call ${line.number}`}
                  className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs transition-transform group-active:scale-95 sm:group-hover:bg-primary/90"
                >
                  <Phone className="size-4" fill="currentColor" />
                </span>
              </a>
            ))}
          </div>
        ))}
      </Card>

      {/* Interactive members */}
      <SectionLabel
        title="Members who already got help"
        sub="Real people, real conversations — every one of them had a nurse on the other end."
        className="mt-8"
      />
      <div className="mt-3 flex items-start gap-2 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
        <Info className="mt-0.5 size-3.5 shrink-0 text-primary" />
        <p>
          These are mockup details showing how members get help. Real member
          stories will arrive with the real-accounts feature —{" "}
          <span className="font-medium text-foreground">coming soon</span>.
        </p>
      </div>
      <div
        role="tablist"
        aria-label="Filter member stories"
        className="mt-3 flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors",
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground"
            )}
          >
            {f}
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[11px] font-semibold tabular-nums",
                filter === f
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {countFor(f)}
            </span>
          </button>
        ))}
      </div>
      <div key={filter} className="mt-3 grid gap-3 sm:grid-cols-2">
        {visible.map((m, i) => (
          <Card
            key={m.name}
            style={{ animationDelay: `${i * 45}ms` }}
            className="animate-in fade-in slide-in-from-bottom-3 gap-0 rounded-2xl border bg-card p-1 shadow-sm"
          >
            <div className="flex items-start gap-3 p-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {m.name.charAt(0)}
              </span>
              <div className="min-w-0 flex-1 break-words">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">{m.name}</span>
                  <Badge variant="secondary">{m.category}</Badge>
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {m.struggle}
                </div>
              </div>
            </div>
            <div className="mx-4 border-t" />
            <div className="p-4">
              <div className="text-sm leading-relaxed text-muted-foreground">
                "{m.outcome}"
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                <Badge className="gap-1">
                  <HeartPulse className="size-3" /> Got help
                </Badge>
                {m.days && (
                  <span className="text-xs font-medium text-primary">
                    {m.days}-day streak and counting
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Discord deep-dive */}
      <Card className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="size-6" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold">
              Help lives in the Discord. That's where the nurses are.
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              The moment you join, there's a real human waiting — a nurse, not
              a bot. Anonymous if you want, free, and answered fast. You don't
              need a referral, an email, or a reason. You just need to walk in.
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button className="h-11 w-full gap-1.5 sm:w-auto" asChild>
                <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                  Join the Quit Discord <ArrowRight className="size-4" />
                </a>
              </Button>
              <span className="text-center text-xs text-muted-foreground sm:text-left">
                discord.gg/jVBhcJUGb3
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Empowerment */}
      <Card className="mt-4 rounded-2xl border bg-card p-6 shadow-sm sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <HeartHandshake className="size-5" />
          </span>
          <div>
            <h2 className="text-base font-semibold">
              Quit Initiative is empowering people to help each other.
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Every member who seeks help doesn't just save their own streak —
              they make it safer for the next person to speak up. That's the
              whole point: a community where a nurse is always a hop away, and
              where quitting stops being a solo fight. Your struggle becomes
              someone else's roadmap. That's empowerment — passing the help on.
            </p>
          </div>
        </div>
      </Card>

      {/* Sources */}
      <SectionLabel
        title="Sources"
        sub="The research behind the statistics above, straight from the World Health Organization."
        className="mt-8"
      />
      <Card className="mt-3 gap-0 rounded-2xl border bg-card p-2 shadow-sm">
        {sources.map((s, i) => (
          <div key={s.href}>
            {i > 0 && <div className="mx-4 border-t" />}
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-14 items-center gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">{s.title}</div>
                <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                  {s.publisher} · {s.usedFor}
                </div>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        ))}
        <div className="mx-4 border-t" />
        <p className="p-4 text-xs leading-relaxed text-muted-foreground">
          The member stories on this page are mockup details — illustrative
          samples of the support available inside Quit. Real member stories
          will arrive with the real-accounts feature (coming soon). For any
          medical emergency, contact your local emergency services.
        </p>
      </Card>
    </div>
  )
}

function SectionLabel({
  title,
  sub,
  className,
}: {
  title: string
  sub?: string
  className?: string
}) {
  return (
    <div className={cn(className)}>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      {sub && (
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground/80">
          {sub}
        </p>
      )}
    </div>
  )
}
