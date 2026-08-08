import { UsersRound, Video, Radio } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <UsersRound className="size-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">
            Community
          </h1>
          <p className="text-sm text-muted-foreground">
            The movement is being built. Bound to be social, with creators and
            reels — soon.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card className="gap-3 p-6 text-center">
          <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary/10">
            <UsersRound className="size-5 text-primary" />
          </div>
          <h3 className="text-base font-semibold">Student circles</h3>
          <p className="text-sm text-muted-foreground">
            Campus-based squads that check in on each other's streaks.
          </p>
        </Card>
        <Card className="gap-3 p-6 text-center">
          <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary/10">
            <Video className="size-5 text-primary" />
          </div>
          <h3 className="text-base font-semibold">Creator streams</h3>
          <p className="text-sm text-muted-foreground">
            Influencers and reels curated around evidence-based quitting.
          </p>
        </Card>
        <Card className="gap-3 p-6 text-center">
          <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary/10">
            <Radio className="size-5 text-primary" />
          </div>
          <h3 className="text-base font-semibold">Live accountability</h3>
          <p className="text-sm text-muted-foreground">
            Anonymous live sessions with recovery peers, scheduled later.
          </p>
        </Card>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:flex-row">
        <div>
          <Badge variant="secondary">Phase 3 · coming soon</Badge>
          <h2 className="mt-3 text-lg font-semibold">
            This is the part that becomes a platform.
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Quit will grow into a social space where students share streaks,
            creators post evidence-first reels, and quitting stops being a solo
            fight.
          </p>
        </div>
        <Button disabled>Get notified (soon)</Button>
      </div>
    </div>
  )
}