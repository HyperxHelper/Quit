import { useEffect, useState } from "react"
import { Navigate, NavLink, Outlet, Link, useNavigate } from "react-router-dom"
import {
  BookOpen,
  GraduationCap,
  Globe,
  HeartHandshake,
  LayoutDashboard,
  LogOut,
  Shirt,
  Target,
  User,
  Users,
  X,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Logo, Wordmark } from "@/components/brand/logo"
import { Skeleton } from "@/components/ui/skeleton"
import { useAuth } from "@/lib/auth"
import { cn } from "@/lib/utils"

const sidebarNav = [
  { to: "/app", label: "Home", icon: LayoutDashboard },
  { to: "/app/plan", label: "My plan", icon: Target },
  { to: "/app/help", label: "Seek help", icon: HeartHandshake },
  { to: "/app/science", label: "Science library", icon: BookOpen },
  { to: "/app/academy", label: "Academy", icon: GraduationCap },
  { to: "/app/clothing", label: "Clothing", icon: Shirt },
  { to: "/app/community", label: "Community", icon: Users },
  { to: "/app/volunteer", label: "Global Volunteer Program", icon: Globe },
  { to: "/app/profile", label: "Profile", icon: User },
]

const bottomNav = [
  { to: "/app", label: "Home", icon: LayoutDashboard },
  { to: "/app/plan", label: "My Plan", icon: Target },
  { to: "/app/science", label: "Science", icon: BookOpen },
  { to: "/app/community", label: "Community", icon: Users },
  { to: "/app/profile", label: "Profile", icon: User },
]

const BANNER_DISMISSED_KEY = "quit.banner.dismissed"

export function AppShell() {
  const { user, loading, signOut } = useAuth()
  const navigate = useNavigate()

  const [bannerDismissed, setBannerDismissed] = useState(false)

  useEffect(() => {
    setBannerDismissed(localStorage.getItem(BANNER_DISMISSED_KEY) === "1")
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-3">
        <Skeleton className="size-24 rounded-full" />
        <Skeleton className="h-4 w-40 rounded-full" />
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  function dismissBanner() {
    localStorage.setItem(BANNER_DISMISSED_KEY, "1")
    setBannerDismissed(true)
  }

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  return (
    <div className="flex min-h-dvh overflow-x-hidden">
      {/* Sidebar (desktop) */}
      <aside className="bg-card fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border md:flex">
        <Link to="/" className="flex h-16 items-center gap-2 border-b border-border px-5">
          <Logo className="size-7" />
          <Wordmark />
        </Link>

        <nav className="flex-1 space-y-1 p-3">
          {sidebarNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/app"}
              className={({ isActive }) =>
                cn(
                  "font-mono-d flex items-center gap-3 px-3 py-2 text-[11px] tracking-[0.14em] uppercase transition-colors",
                  isActive
                    ? "bg-primary font-semibold text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )
              }
            >
              <item.icon className="size-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t p-3">
          <div className="flex items-center gap-3 rounded-lg p-2">
            <Avatar className="size-9">
              <AvatarFallback className="bg-primary text-accent-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{user.name}</div>
              <div className="truncate text-xs text-muted-foreground">
                {user.email}
              </div>
            </div>
            <Button variant="ghost" size="icon-sm" aria-label="Log out" onClick={handleSignOut}>
              <LogOut />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-h-dvh flex-1 flex-col md:pl-64">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur-md md:hidden">
          <Link to="/app" className="flex items-center gap-2">
            <Logo className="size-7" />
            <Wordmark />
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-sm" aria-label="Log out" onClick={handleSignOut}>
              <LogOut />
            </Button>
          </div>
        </header>

        <main className="bg-grid-paper flex-1 pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-0">
          {user.isAnonymous && !bannerDismissed && (
            <div className="flex items-center justify-between gap-2 border-b border-border bg-primary/5 px-4 py-3">
              <p className="flex-1 text-sm text-foreground/90">
                You're previewing anonymously. Full memberships coming soon.
              </p>
              <button
                type="button"
                aria-label="Dismiss"
                onClick={dismissBanner}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="mx-auto w-full max-w-5xl">
            <Outlet />
          </div>
        </main>

        {/* Mobile bottom nav */}
        <MobileBottomNav />
      </div>
    </div>
  )
}

function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex h-[calc(4rem+env(safe-area-inset-bottom,0px))] border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-1px_8px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      {bottomNav.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/app"}
          className={({ isActive }) =>
            cn(
              "flex min-h-[44px] min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1",
              isActive ? "text-lime-strong" : "text-muted-foreground"
            )
          }
        >
          <item.icon strokeWidth={2} className={cn("h-5 w-5", "stroke-[2]")} />
          <span className="max-w-full truncate text-[10px] font-medium leading-none">
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  )
}