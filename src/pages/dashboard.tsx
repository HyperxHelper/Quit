import { Link } from "react-router-dom"
import {
  ArrowRight,
  Banknote,
  CalendarCheck,
  Dumbbell,
  Flame,
  HeartPulse,
  Lightbulb,
  Sparkles,
} from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { addictionLabel, daySuffix, formatDin } from "@/lib/addiction"
import { streakDays, useAuth } from "@/lib/auth"

const milestones = [1, 3, 7, 14, 21, 30, 66]

export function DashboardPage() {
  const { user } = useAuth()
  if (!user) return null

  const plan = user.plan

  if (!plan) {
    return (
      <div className="flex w-full flex-col items-center justify-center px-6 pb-12 pt-16 text-center sm:pb-16 sm:pt-24">
        <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10">
          <Flame className="size-16 text-primary" strokeWidth={2} />
        </div>
        <h1 className="font-display mt-6 max-w-md text-2xl font-bold tracking-tight text-foreground">
          You haven't picked your comeback yet.
        </h1>
        <p className="mx-auto mt-3 max-w-xs text-base text-muted-foreground">
          Choose the one habit you're ready to quit, set your start date as
          today — and let the science do the heavy lifting.
        </p>
        <Button
          size="lg"
          className="mt-8 h-14 w-full max-w-sm rounded-xl text-base font-semibold"
          asChild
        >
          <Link to="/app/plan">
            Pick your habit <ArrowRight />
          </Link>
        </Button>
        <p className="mt-4 text-xs text-muted-foreground/70">
          Takes 30 seconds. No email required to start.
        </p>
      </div>
    )
  }

  const streak = streakDays(plan)
  const saved = streak * plan.dailySaving
  const milestone = milestones.find((m) => m > streak) ?? 66

  return (
    <div className="w-full px-4 py-6 sm:px-6">
      {/* Streak hero card */}
      <Card className="gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Day {streak} · {daySuffix(streak)} streak
            </p>
            <h1 className="font-display mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              You're doing it.
            </h1>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {plan.goal} — {addictionLabel(plan.addiction)} is behind you for
              {streak} {daySuffix(streak)}.
            </p>
          </div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Flame className="size-7" strokeWidth={2} />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            className="h-14 w-full gap-2 rounded-xl text-base font-semibold sm:w-auto sm:px-8"
            onClick={() => toast.success("Nice — today checked in as clean.")}
          >
            <CalendarCheck className="size-5" strokeWidth={2} /> Check in today
          </Button>
          <div className="flex items-center gap-4 text-sm">
            <div>
              <div className="font-semibold text-foreground">
                {formatDin(saved)}
              </div>
              <div className="text-xs text-muted-foreground">Saved all-time</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-semibold text-foreground">Day {milestone}</div>
              <div className="text-xs text-muted-foreground">Next milestone</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quit-march progress */}
      <Card className="mt-4 rounded-2xl border bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Your quit-march</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={atPct(streak)} className="h-2.5" />
          <div className="flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
            {milestones.map((m) => (
              <span
                key={m}
                className={"font-medium " + (streak >= m ? "text-primary" : "")}
              >
                {m} {daySuffix(m)}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats row */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={Flame}
          label="Days clean"
          value={String(streak)}
          sub="Every streak is a win"
        />
        <StatCard
          icon={Banknote}
          label="Saved so far"
          value={formatDin(saved)}
          sub={`≈ ${formatDin(plan.dailySaving)} / day`}
        />
        <StatCard
          icon={HeartPulse}
          label="Habit automaticity"
          value={`${atPct(streak)}%`}
          sub="On the road to Day 66"
        />
      </div>

      {/* Feed */}
      <div className="mt-4 grid gap-5 lg:grid-cols-2">
        <Card className="rounded-2xl border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Lightbulb className="size-4 text-primary" />
              Today's science prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm leading-relaxed">{dailyPrompt(streak)}</p>
            <Button size="sm" className="gap-1.5">
              <CalendarCheck className="size-4" /> Mark today as clean
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Dumbbell className="size-4 text-primary" />
              What you regained
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <RegainedRow label="Money not spent" value={formatDin(saved)} />
            <RegainedRow
              label="Streak momentum"
              value={`${streak} ${daySuffix(streak)}`}
            />
            <RegainedRow
              label="Willpower trained"
              value={`${Math.min(streak, 100)}% rewired`}
            />
            <p className="text-xs text-muted-foreground">
              Based on habit-formation research: automaticity typically lands
              between 18 and 254 days of consistent repetition.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Sparkles className="size-6 text-primary" />
          <div>
            <div className="text-sm font-semibold">Your identity is forming</div>
            <div className="text-xs text-muted-foreground">
              Every day you keep the streak, you become the person who quit.
            </div>
          </div>
        </div>
        <Button variant="outline" asChild>
          <Link to="/app/science" className="gap-1.5">
            Read the research <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Flame
  label: string
  value: string
  sub: string
}) {
  return (
    <Card className="gap-2 rounded-2xl border bg-card shadow-sm">
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Icon className="size-4" />
          </span>
          {label}
        </div>
        <div className="font-display text-3xl font-extrabold tracking-tight">
          {value}
        </div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </CardContent>
    </Card>
  )
}

function RegainedRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b pb-2 text-sm last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold text-primary">{value}</span>
    </div>
  )
}

function atPct(streak: number) {
  const next = milestones.find((m) => m > streak) ?? 1
  const prev = (milestones.filter((m) => m <= streak).pop() ?? 0)
  return Math.min(100, Math.round(((streak - prev) / (next - prev)) * 100))
}

function dailyPrompt(streak: number) {
  const prompts = [
    "Name the craving, shrink it. Cravings pass in ~15 minutes — label the urge as a guest, not a boss.",
    "Your brain rewards 'almost quitting'. Today, log one moment you resisted, even if it was small.",
    "Compare this morning with day one. Notice the changes honestly — energy, patience, time.",
  ]
  const idx = streak % prompts.length
  return prompts[idx] + " " + "You're building evidence that you're different now."
}