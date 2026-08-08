import { Link, useNavigate } from "react-router-dom"
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  LogOut,
  Settings,
  Shield,
  Shirt,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/brand/theme-toggle"
import { useAuth } from "@/lib/auth"

const menu = [
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
  {
    to: "/app/settings",
    icon: Settings,
    title: "Settings",
    sub: "Profile, privacy and notifications.",
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
    <div className="w-full px-4 py-6 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <Avatar className="size-20">
          <AvatarImage src="" alt={user.name} />
          <AvatarFallback className="bg-primary/10 text-2xl text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h1 className="font-display mt-3 text-xl font-bold tracking-tight">
          {user.name}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {user.isAnonymous ? "Anonymous mode" : user.email}
        </p>
        {user.isAnonymous && (
          <Badge variant="secondary" className="mt-2">
            <Shield className="size-3" /> Preview account
          </Badge>
        )}
      </div>

      {user.isAnonymous && (
        <Card className="mt-6 gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <div className="text-sm font-semibold text-foreground">
            Save your progress
          </div>
          <p className="text-sm text-muted-foreground">
            Upgrade to a full account so your streak survives with the browser
            closed and follows you anywhere.
          </p>
          <Button size="sm" className="mt-1 w-full gap-1.5" asChild>
            <Link to="/signup">
              Get the full account <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Card>
      )}

      <div className="mt-6 space-y-3">
        {menu.map((item) => (
          <Card
            key={item.to}
            className="rounded-2xl border bg-card p-4 shadow-sm"
          >
            <Link to={item.to} className="flex items-center gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-5" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="mt-0.5 truncate text-xs text-muted-foreground">
                  {item.sub}
                </div>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Card className="flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm">
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold">Theme</div>
            <div className="mt-0.5 text-xs text-muted-foreground">
              Light or dark
            </div>
          </div>
          <ThemeToggle />
        </Card>
      </div>

      <div className="mt-3">
        <Button
          variant="outline"
          className="h-12 w-full rounded-xl gap-2 text-sm font-semibold text-destructive"
          onClick={handleSignOut}
        >
          <LogOut className="size-4" strokeWidth={2} /> Sign out
        </Button>
      </div>
    </div>
  )
}