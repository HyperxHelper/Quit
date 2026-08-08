import { Link } from "react-router-dom"
import { Heart, HandHeart, LockIcon, ShieldCheck, Sparkles } from "lucide-react"

import { Logo, Wordmark } from "@/components/brand/logo"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
              <Wordmark />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              A science-backed initiative to quit addiction and quit being a
              failure. Built for students, by students.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Heart className="size-4 text-primary" />
              Starts as a student project. Grows into a movement.
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Quit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#why" className="hover:text-foreground">
                  Why Quit
                </a>
              </li>
              <li>
                <a href="/#science" className="hover:text-foreground">
                  The science
                </a>
              </li>
              <li>
                <a href="/#how" className="hover:text-foreground">
                  How it works
                </a>
              </li>
              <li>
                <a href="/#stories" className="hover:text-foreground">
                  Stories
                </a>
              </li>
              <li>
                <Link to="/app/academy" className="hover:text-foreground">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/app/clothing" className="hover:text-foreground">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/code" className="hover:text-foreground">
                  Our Code
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://ko-fi.com/quitnow"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <HandHeart className="size-4 text-primary" /> Sponsor us
                </a>
              </li>
              <li>
                <Link to="/code" className="hover:text-foreground">
                  Our Code
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-foreground">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-foreground">
                  Create account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Stay safe</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" /> Privacy first
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="size-4 text-primary" /> Anonymous mode
              </li>
              <li className="flex items-center gap-2">
                <LockIcon /> Encrypted future-proofing
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Quit — Start your comeback.</p>
          <p>Built by students, for students.</p>
        </div>
      </div>
    </footer>
  )
}