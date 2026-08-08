import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Heart, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Logo, Wordmark } from "@/components/brand/logo"
import { ThemeToggle } from "@/components/brand/theme-toggle"
import { useAuth } from "@/lib/auth"
import { cn } from "@/lib/utils"

type NavLinkItem =
  | { label: string; to: string }
  | { label: string; href: string }

const links: NavLinkItem[] = [
  { label: "Why Quit", href: "/#why" },
  { label: "The Science", href: "/#science" },
  { label: "How it works", href: "/#how" },
  { label: "Stories", href: "/#stories" },
  { label: "Academy", to: "/app/academy" },
  { label: "Clothing", to: "/app/clothing" },
  { label: "Our Code", to: "/code" },
]

const sponsorHref = "/#sponsor"

export function PublicNavbar() {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            "to" in link ? (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button variant="ghost" asChild className="gap-1.5 text-primary">
            <a href={sponsorHref}>
              <Heart className="size-4" /> Sponsor us
            </a>
          </Button>
          {user ? (
            <Button onClick={() => navigate("/app")}>Open dashboard</Button>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate("/login")}>
                Log in
              </Button>
              <Button onClick={() => navigate("/signup")}>Get started</Button>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "border-t bg-background/95 backdrop-blur md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            "to" in link ? (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            )
          ))}
          <div className="mt-2 flex flex-col gap-2">
            {user ? (
              <Button onClick={() => navigate("/app")}>
                Open dashboard
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <a href={sponsorHref}>
                    <Heart className="size-4" /> Sponsor us
                  </a>
                </Button>
                <Button variant="outline" onClick={() => navigate("/login")}>
                  Log in
                </Button>
                <Button onClick={() => navigate("/signup")}>Get started</Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}