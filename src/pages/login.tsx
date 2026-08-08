import { useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { ArrowRight, Eye, Lock, Sparkles, User } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AuthLayout } from "@/components/auth/auth-layout"
import { anonymousSchema, type AnonymousValues } from "@/lib/schemas"
import { getLastAnonymousNickname, useAuth } from "@/lib/auth"
import { cn } from "@/lib/utils"

const emptyAnonymous: AnonymousValues = { nickname: "", password: "" }

export function LoginPage() {
  const { user, signInAnonymous, signOut } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const initialTab = searchParams.get("tab") === "anonymous" ? "anonymous" : "email"
  const [activeTab, setActiveTab] = useState(initialTab)

  const [anonymous, setAnonymous] = useState<AnonymousValues>({
    ...emptyAnonymous,
    nickname: getLastAnonymousNickname(),
  })
  const [anonymousFieldErrors, setAnonymousFieldErrors] = useState<
    Partial<Record<keyof AnonymousValues, string>>
  >({})
  const [anonymousError, setAnonymousError] = useState<string | null>(null)
  const [anonymousSubmitting, setAnonymousSubmitting] = useState(false)

  async function handleAnonymousSubmit(e: React.FormEvent) {
    e.preventDefault()
    setAnonymousError(null)
    setAnonymousFieldErrors({})

    const result = anonymousSchema.safeParse(anonymous)
    if (!result.success) {
      const next: Partial<Record<keyof AnonymousValues, string>> = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof AnonymousValues
        if (!next[key]) next[key] = issue.message
      }
      setAnonymousFieldErrors(next)
      return
    }

    setAnonymousSubmitting(true)
    try {
      await signInAnonymous(anonymous)
      toast.success(`On your way, ${anonymous.nickname.trim().split(" ")[0]}.`)
      navigate("/app")
    } catch (err) {
      setAnonymousError(
        err instanceof Error ? err.message : "Anonymous sign in failed. Try again."
      )
    } finally {
      setAnonymousSubmitting(false)
    }
  }

  function handleSignOut() {
    signOut()
    navigate("/login")
  }

  return (
    <AuthLayout
      title={user ? `Welcome back, ${user.name.split(" ")[0]}.` : "Welcome back"}
      subtitle={
        user
          ? "Your anonymous streak is right where you left it."
          : "Pick your streak back up — it missed you."
      }
      footer={
        <>
          Full membership coming soon.{" "}
          <Link to="/signup" className="font-medium text-primary hover:underline">
            See what's next
          </Link>
        </>
      }
    >
      {user ? (
        <div className="space-y-4">
          <div className="flex items-center gap-4 rounded-xl border bg-card p-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{user.name}</div>
              <div className="truncate text-xs text-muted-foreground">
                Anonymous mode · {user.email}
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full gap-1.5" asChild>
            <Link to="/app">
              Open your dashboard <ArrowRight />
            </Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full"
            onClick={handleSignOut}
          >
            Switch account
          </Button>
        </div>
      ) : (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email">Log in</TabsTrigger>
          <TabsTrigger value="anonymous">
            <Sparkles className="size-3.5" />
            Anonymous mode
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="mt-4">
          <div className="space-y-4">
            <div className="rounded-md border border-primary/30 bg-primary/5 px-3 py-3 text-xs text-muted-foreground">
              Full member logins open at launch. For now, the fastest way in is
              Anonymous mode — no email required.
            </div>
            <Button
              type="button"
              className="w-full"
              size="lg"
              onClick={() => setActiveTab("anonymous")}
            >
              <Sparkles className="size-4" />
              Use Anonymous mode instead
            </Button>
            <Button type="button" variant="ghost" className="w-full" size="sm" disabled>
              Need full access? Coming soon at launch.
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="anonymous" className="mt-4">
          <form onSubmit={handleAnonymousSubmit} className="space-y-4">
            <div className="rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-xs text-muted-foreground">
              Quick access for GitHub previews. No email needed — pick a
              nickname and a temporary password, then upgrade to a full account
              whenever you're ready.
            </div>

            <div className="space-y-2">
              <Label htmlFor="nickname">Nickname</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="nickname"
                  autoComplete="nickname"
                  placeholder="e.g. comeback_kid"
                  className={cn(
                    "pl-9",
                    anonymousFieldErrors.nickname &&
                      "aria-invalid:border-destructive"
                  )}
                  aria-invalid={!!anonymousFieldErrors.nickname}
                  value={anonymous.nickname}
                  onChange={(e) =>
                    setAnonymous((p) => ({ ...p, nickname: e.target.value }))
                  }
                />
              </div>
              {anonymousFieldErrors.nickname && (
                <p className="text-xs text-destructive">
                  {anonymousFieldErrors.nickname}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="anon-password">Temporary password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="anon-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Make one up — 4+ characters"
                  className={cn(
                    "pl-9 pr-9",
                    anonymousFieldErrors.password &&
                      "aria-invalid:border-destructive"
                  )}
                  aria-invalid={!!anonymousFieldErrors.password}
                  value={anonymous.password}
                  onChange={(e) =>
                    setAnonymous((p) => ({ ...p, password: e.target.value }))
                  }
                />
                <Eye className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              {anonymousFieldErrors.password && (
                <p className="text-xs text-destructive">
                  {anonymousFieldErrors.password}
                </p>
              )}
            </div>

            {anonymousError && (
              <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {anonymousError}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={anonymousSubmitting}
            >
              {anonymousSubmitting
                ? "Entering anonymously…"
                : "Sign in anonymously"}
            </Button>
          </form>
        </TabsContent>
        </Tabs>
      )}
    </AuthLayout>
  )
}