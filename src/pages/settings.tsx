import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Bell, Eye, Sparkles, User } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/lib/auth"

export function SettingsPage() {
  const { user } = useAuth()
  const [name, setName] = useState(user?.name ?? "")
  const [anonymous, setAnonymous] = useState(false)

  if (!user) return null

  function saveProfile() {
    // Concept: would call to user service. Local-only for now.
    toast.success("Profile updated (local). Syncs when the API lands.")
  }

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8">
      {/* Page header */}
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Account
        </p>
        <h1 className="font-display mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Profile details, privacy and how we reach you.
        </p>
      </header>

      {user.isAnonymous && (
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <div className="text-sm font-semibold">
                Anonymous mode is on.
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Your progress lives on this device. Upgrade to a full account
                so you can pick the streak back up on any device.
              </div>
            </div>
          </div>
          <Button size="sm" className="gap-1.5" asChild>
            <Link to="/signup">
              Create full account <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}

      <Card className="mt-6 gap-0 rounded-2xl border bg-card shadow-sm">
        <CardContent className="py-6">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <User className="size-5" />
            </span>
            <h2 className="text-base font-semibold">Profile</h2>
          </div>
        </CardContent>
        <div className="px-6">
          <Separator />
        </div>
        <CardContent className="space-y-4 py-6">
          <div className="space-y-2">
            <Label htmlFor="display-name">Display name</Label>
            <Input
              id="display-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={user.isAnonymous ? "Anonymous — upgrade to add an email" : user.email}
              disabled
            />
            <p className="text-xs text-muted-foreground">
              {user.isAnonymous
                ? "Full membership adds a real email so your streak can travel with you."
                : "Email changes come with the backend phase."}
            </p>
          </div>
          <Button onClick={saveProfile}>Save changes</Button>
        </CardContent>
      </Card>

      <Card className="mt-4 gap-0 rounded-2xl border bg-card shadow-sm">
        <CardContent className="py-6">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Eye className="size-5" />
            </span>
            <h2 className="text-base font-semibold">Privacy</h2>
          </div>
        </CardContent>
        <div className="px-6">
          <Separator />
        </div>
        <CardContent className="py-6">
          <button
            type="button"
            onClick={() => setAnonymous((v) => !v)}
            className="flex w-full items-start justify-between gap-4 rounded-lg border p-4 text-left"
          >
            <div>
              <div className="text-sm font-semibold">Anonymous mode</div>
              <div className="text-xs text-muted-foreground">
                Hide your name on any future community features.
              </div>
            </div>
            <span
              className={
                "relative h-6 w-11 shrink-0 rounded-full transition-colors " +
                (anonymous ? "bg-primary" : "bg-muted")
              }
            >
              <span
                className={
                  "absolute top-0.5 size-5 rounded-full bg-background shadow transition-all " +
                  (anonymous ? "left-[22px]" : "left-0.5")
                }
              />
            </span>
          </button>
        </CardContent>
      </Card>

      <Card className="mt-4 gap-0 rounded-2xl border bg-card shadow-sm">
        <CardContent className="py-6">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Bell className="size-5" />
            </span>
            <h2 className="text-base font-semibold">Notifications</h2>
          </div>
        </CardContent>
        <div className="px-6">
          <Separator />
        </div>
        <CardContent className="space-y-3 py-6">
          <Label className="text-sm font-medium">Daily science prompt</Label>
          <p className="text-sm text-muted-foreground">
            Push + email delivery is wired up in the backend phase. Timing is
            already chosen to match your study window.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
