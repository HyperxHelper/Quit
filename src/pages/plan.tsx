import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, CalendarDays, Target } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ADDICTIONS,
  addictionMeta,
  daySuffix,
} from "@/lib/addiction"
import { useAuth, type Addiction } from "@/lib/auth"

export function PlanPage() {
  const { user, setPlan } = useAuth()
  const navigate = useNavigate()
  const [addiction, setAddiction] = useState<Addiction | null>(null)
  const [goal, setGoal] = useState("")
  const [submitting, setSubmitting] = useState(false)

  if (!user) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!addiction) {
      toast.error("Pick the one thing you're quitting first.")
      return
    }
    setSubmitting(true)
    // start today — day zero, right now
    setPlan({
      addiction,
      startDate: todayISO(),
      goal: goal.trim() || "Show up sober and show up consistently.",
      dailySaving: addictionMeta(addiction)?.saving ?? 0,
    })
    setSubmitting(false)
    toast.success("Day zero starts now. Let's get it.")
    navigate("/app")
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Link
        to="/app"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to dashboard
      </Link>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Step 1 of 1 · Set up your plan
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold tracking-tight">
          What are you quitting?
        </h1>
        <p className="mt-2 text-muted-foreground">
          One clear target beats five vague ones. You can change it anytime.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {ADDICTIONS.map((a) => {
            const selected = addiction === a.value
            return (
              <button
                key={a.value}
                type="button"
                onClick={() => setAddiction(a.value)}
                className={
                  "rounded-xl border p-4 text-left transition-colors " +
                  (selected
                    ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                    : "border-border bg-card hover:border-primary/60")
                }
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{a.label}</span>
                  {selected && (
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      ✓
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {a.description}
                </p>
              </button>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Target className="size-4 text-primary" />
              Your daily intention
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="goal">What will you tell yourself each morning?</Label>
              <Input
                id="goal"
                placeholder="Today I stay present, sober and on time."
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                maxLength={120}
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
              <CalendarDays className="size-4 text-primary" />
              Starts today —{" "}
              <span className="font-medium text-foreground">day zero</span>,
              and every screen after this is another {daySuffix(1)} won.
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/app")}
            disabled={submitting}
          >
            Not today
          </Button>
          <Button type="submit" size="lg" disabled={submitting || !addiction}>
            Start my comeback <ArrowRight />
          </Button>
        </div>
      </form>
    </div>
  )
}

function todayISO() {
  return new Date().toISOString()
}