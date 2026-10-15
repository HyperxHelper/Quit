import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useScrollToSection } from "@/lib/nav"
import { useAuth } from "@/lib/auth"

const SECTIONS = [
  { label: "Science", id: "science" },
  { label: "Programs", id: "programs" },
  { label: "Method", id: "method" },
  { label: "Impact", id: "impact" },
]

const PAGES = [
  { label: "Research", to: "/research" },
  { label: "Blog", to: "/blog" },
  { label: "Code", to: "/code" },
]

export function PublicNavbar() {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const navigate = useNavigate()
  const scrollToSection = useScrollToSection()

  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setCtaVisible(window.scrollY > 320)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-ink-line bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link to="/" onClick={close} className="flex items-baseline gap-2">
          <span className="font-mono-d text-sm font-semibold tracking-[0.22em] uppercase">
            Quit<span className="text-primary">⁄</span>Lab
          </span>
          <span className="font-mono-d hidden text-[10px] tracking-[0.18em] text-ink-muted uppercase sm:inline">
            Initiative &amp; R&amp;D
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => {
                close()
                scrollToSection(section.id)
              }}
              className="font-mono-d cursor-pointer text-[11px] tracking-[0.18em] text-ink-muted uppercase transition-colors hover:text-ink-fg"
            >
              {section.label}
            </button>
          ))}
          {PAGES.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              className="font-mono-d text-[11px] tracking-[0.18em] text-ink-muted uppercase transition-colors hover:text-ink-fg"
            >
              {page.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <Button
              className="hidden rounded-none font-mono-d text-[11px] tracking-[0.18em] uppercase sm:inline-flex"
              asChild
            >
              <Link to="/app">
                Dashboard <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                className="hidden font-mono-d text-[11px] tracking-[0.18em] text-ink-muted uppercase hover:text-accent-foreground sm:inline-flex"
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
              <Button
                className="hidden rounded-none font-mono-d text-[11px] tracking-[0.18em] uppercase sm:inline-flex"
                asChild
              >
                <Link to="/signup">
                  Join the lab <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </>
          )}
          <button
            type="button"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-ink-line text-ink-fg transition-colors hover:border-primary hover:text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-line bg-ink max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain px-5 py-4 lg:hidden">
          <nav className="flex flex-col">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  close()
                  scrollToSection(section.id)
                }}
                className="font-mono-d cursor-pointer border-b border-ink-line/60 py-3 text-left text-xs tracking-[0.18em] text-ink-muted uppercase last:border-0 hover:text-ink-fg"
              >
                {section.label}
              </button>
            ))}
            {PAGES.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                onClick={close}
                className="font-mono-d border-b border-ink-line/60 py-3 text-xs tracking-[0.18em] text-ink-muted uppercase last:border-0 hover:text-ink-fg"
              >
                {page.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            {user ? (
              <Button className="rounded-none font-mono-d text-[11px] tracking-[0.18em] uppercase" asChild>
                <Link to="/app" onClick={close}>
                  Dashboard <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="rounded-none border-ink-line bg-transparent font-mono-d text-[11px] tracking-[0.18em] text-ink-fg uppercase hover:border-primary hover:bg-transparent hover:text-primary"
                  onClick={() => {
                    close()
                    navigate("/login")
                  }}
                >
                  Log in
                </Button>
                <Button className="rounded-none font-mono-d text-[11px] tracking-[0.18em] uppercase" asChild>
                  <Link to="/signup" onClick={close}>
                    Join the lab <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
      </header>

      {ctaVisible && !open && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-200 fixed inset-x-0 bottom-0 z-40 border-t border-ink-line bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
          <div className="flex h-16 items-center gap-2 px-5">
            {user ? (
              <Button
                className="h-11 w-full rounded-none font-mono-d text-[11px] tracking-[0.18em] uppercase"
                asChild
              >
                <Link to="/app">
                  Open dashboard <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="h-11 flex-1 rounded-none border-ink-line bg-transparent font-mono-d text-[11px] tracking-[0.18em] text-ink-fg uppercase hover:border-primary hover:bg-transparent hover:text-primary"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </Button>
                <Button
                  className="h-11 flex-1 rounded-none font-mono-d text-[11px] tracking-[0.18em] uppercase"
                  asChild
                >
                  <Link to="/signup">
                    Join the lab <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
