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
    <div className="w-full px-4 py-5 sm:px-6 sm:py-8">
      {/* Page header */}
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
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
        <Button variant="outline" size="sm" className="shrink-0 gap-1.5" asChild>
          <Link to="/app/settings">
            <Settings className="size-3.5" /> <span className="hidden sm:inline">Edit settings</span>
            <span className="sm:hidden">Edit</span>
          </Link>
        </Button>
      </header>

      {/* Identity */}
      <Card className="mt-5 gap-4 rounded-2xl border bg-card p-4 shadow-sm sm:mt-6 sm:p-6">
        <div className="flex items-center gap-4">
          <Avatar className="size-16 shrink-0 sm:size-20">
            <AvatarImage src="" alt={user.name} />
            <AvatarFallback className="bg-primary/10 text-xl text-primary sm:text-2xl">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-lg font-bold tracking-tight sm:text-xl">
              {user.name}
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {user.isAnonymous
                ? "Anonymous mode — progress lives on this device"
                : user.email}
            </p>
            {user.isAnonymous && (
              <Badge variant="secondary" className="mt-2 gap-1">
                <Shield className="size-3" /> Preview account
              </Badge>
            )}
          </div>
        </div>
      </Card>

      {/* Upgrade callout */}
      {user.isAnonymous && (
        <Card className="mt-3 gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 shadow-sm sm:mt-4 sm:flex-row sm:items-center sm:gap-4 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="size-5" />
            </span>
            <div className="min-w-0">
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
        className="mt-7 sm:mt-8"
      />
      <div className="mt-3 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
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
        className="mt-7 sm:mt-8"
      />
      <div className="mt-3 space-y-2.5 sm:space-y-3">
        <Card className="rounded-2xl border bg-card shadow-sm">
          <CardContent className="flex items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-10">
                <Palette className="size-4.5 sm:size-5" />
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
          <CardContent className="flex items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-10">
                <Bell className="size-4.5 sm:size-5" />
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
      <div className="mt-8 pb-4 sm:mt-10">
        <Button
          variant="outline"
          className="h-11 w-full gap-2 rounded-xl text-sm font-semibold text-destructive sm:h-12"
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
    <Card className="group rounded-2xl border bg-card p-0.5 shadow-sm sm:p-1">
      <Link to={to} className="flex items-center gap-3 p-3 sm:gap-4 sm:p-3.5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-11">
          <Icon className="size-4.5 sm:size-5" strokeWidth={2} />
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
