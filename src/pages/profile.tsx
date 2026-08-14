import { Link, useNavigate } from "react-router-dom"
import {
  ArrowRight,
  Bell,
  BookOpen,
  GraduationCap,
  LogOut,
  Palette,
  Settings,
  Shield,
  Shirt,
  Sparkles,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/brand/theme-toggle"
import { useAuth } from "@/lib/auth"
import { cn } from "@/lib/utils"

const tools = [
  {
    to: "/app/academy",
    icon: GraduationCap,
    title: "Academy",
    sub: "Videos, articles and materials that build resistance.",
  },
  {
    to: "/app/clothing",
    icon: Shirt,
    title: "Clothing",
    sub: "Wear the identity of the person who quit.",
  },
  {
    to: "/app/science",
    icon: BookOpen,
    title: "Science library",
    sub: "Peer-reviewed literature, rewritten for a student.",
  },
]

export function ProfilePage() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  if (!user) return null

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8">
      {/* Page header */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Account
          </p>
          <h1 className="font-display mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            Your profile
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your identity, preferences and the tools on your side of the
            app.
          </p>
        </div>
        <Button variant="outline" className="shrink-0 gap-1.5" asChild>
          <Link to="/app/settings">
            <Settings className="size-4" /> Edit settings
          </Link>
        </Button>
      </header>

      {/* Identity */}
      <Card className="mt-6 gap-4 rounded-2xl border bg-card p-6 shadow-sm sm:p-7">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <Avatar className="size-20 shrink-0">
            <AvatarImage src="" alt={user.name} />
            <AvatarFallback className="bg-primary/10 text-2xl text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h2 className="font-display text-xl font-bold tracking-tight">
              {user.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {user.isAnonymous
                ? "Anonymous mode — progress lives on this device"
                : user.email}
            </p>
            <div className="mt-2 flex justify-center gap-2 sm:justify-start">
              {user.isAnonymous && (
                <Badge variant="secondary">
                  <Shield className="size-3" /> Preview account
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Upgrade callout */}
      {user.isAnonymous && (
        <Card className="mt-4 gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="size-5" />
            </span>
            <div>
              <div className="text-sm font-semibold">Save your progress</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Upgrade to a full account so your streak survives with the
                browser closed and follows you anywhere.
              </p>
            </div>
          </div>
          <Button className="w-full gap-1.5 sm:w-auto" asChild>
            <Link to="/signup">
              Get the full account <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Card>
      )}

      {/* Tools */}
      <SectionLabel
        title="Tools"
        sub="Everything on your side of the app"
        className="mt-8"
      />
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {tools.map((item) => (
          <ToolCard key={item.to} {...item} />
        ))}
        <ToolCard
          to="/app/settings"
          icon={Settings}
          title="Settings"
          sub="Profile, privacy and notifications."
        />
      </div>

      {/* Preferences */}
      <SectionLabel
        title="Preferences"
        sub="Look and feel, and how we reach you"
        className="mt-8"
      />
      <div className="mt-3 space-y-3">
        <Card className="rounded-2xl border bg-card shadow-sm">
          <CardContent className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Palette className="size-5" />
              </span>
              <div>
                <div className="text-sm font-semibold">Appearance</div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  Light or dark, across the whole app.
                </div>
              </div>
            </div>
            <ThemeToggle />
          </CardContent>
        </Card>
        <Card className="rounded-2xl border bg-card shadow-sm">
          <CardContent className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Bell className="size-5" />
              </span>
              <div>
                <div className="text-sm font-semibold">
                  Notifications & privacy
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  Anonymous mode, alerts and email delivery.
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Open settings"
              asChild
            >
              <Link to="/app/settings">
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Sign out */}
      <div className="mt-10">
        <Button
          variant="outline"
          className="h-12 w-full gap-2 rounded-xl text-sm font-semibold text-destructive"
          onClick={handleSignOut}
        >
          <LogOut className="size-4" strokeWidth={2} /> Sign out
        </Button>
      </div>
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
      {sub && <p className="mt-1 text-sm text-muted-foreground/80">{sub}</p>}
    </div>
  )
}

function ToolCard({
  to,
  icon: Icon,
  title,
  sub,
}: {
  to: string
  icon: typeof Settings
  title: string
  sub: string
}) {
  return (
    <Card className="group rounded-2xl border bg-card p-1 shadow-sm">
      <Link to={to} className="flex items-center gap-4 p-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-0.5 truncate text-xs text-muted-foreground">
            {sub}
          </div>
        </div>
        <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Card>
  )
}
