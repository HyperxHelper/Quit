import {
  lazy,
  Suspense,
  useEffect,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from "react"
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"

import { AuthProvider } from "@/lib/auth"
import { Toaster } from "@/components/ui/sonner"

type PageModule = Record<string, ComponentType> & { default?: ComponentType }

function page(load: () => Promise<PageModule>, name: string): LazyExoticComponent<ComponentType> {
  return lazy(() =>
    load().then((mod) => ({ default: (mod[name] ?? mod.default) as ComponentType }))
  )
}

/* Route-level code splitting — every page ships as its own chunk. */
const LandingPage = page(() => import("@/pages/landing"), "LandingPage")
const CodePage = page(() => import("@/pages/code"), "CodePage")
const ResearchPage = page(() => import("@/pages/research"), "ResearchPage")
const LoginPage = page(() => import("@/pages/login"), "LoginPage")
const SignupPage = page(() => import("@/pages/signup"), "SignupPage")
const AppShell = page(() => import("@/pages/app-shell"), "AppShell")
const DashboardPage = page(() => import("@/pages/dashboard"), "DashboardPage")
const BlogPage = page(() => import("@/pages/blog"), "BlogPage")
const PlanPage = page(() => import("@/pages/plan"), "PlanPage")
const SciencePage = page(() => import("@/pages/science"), "SciencePage")
const CommunityPage = page(() => import("@/pages/community"), "CommunityPage")
const AcademyPage = page(() => import("@/pages/academy"), "AcademyPage")
const ClothingPage = page(() => import("@/pages/clothing"), "ClothingPage")
const SettingsPage = page(() => import("@/pages/settings"), "SettingsPage")
const ProfilePage = page(() => import("@/pages/profile"), "ProfilePage")
const HelpPage = page(() => import("@/pages/help"), "HelpPage")
const VolunteerPage = page(() => import("@/pages/volunteer"), "VolunteerPage")

export function RouteFallback({ full = false }: { full?: boolean }) {
  return (
    <div
      className={
        full
          ? "bg-background flex min-h-screen flex-col items-center justify-center gap-3"
          : "flex min-h-[60vh] flex-col items-center justify-center gap-3"
      }
    >
      <span className="h-2 w-2 animate-blink rounded-full bg-primary" />
      <span className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
        Loading
      </span>
    </div>
  )
}

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<RouteFallback />}>{element}</Suspense>
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback full />}>
          <Routes>
            <Route path="/" element={withSuspense(<LandingPage />)} />
            <Route path="/code" element={withSuspense(<CodePage />)} />
            <Route path="/research" element={withSuspense(<ResearchPage />)} />
            <Route path="/login" element={withSuspense(<LoginPage />)} />
            <Route path="/signup" element={withSuspense(<SignupPage />)} />
            <Route path="/blog" element={withSuspense(<BlogPage />)} />

            <Route path="/app" element={withSuspense(<AppShell />)}>
              <Route index element={withSuspense(<DashboardPage />)} />
              <Route path="plan" element={withSuspense(<PlanPage />)} />
              <Route path="help" element={withSuspense(<HelpPage />)} />
              <Route path="science" element={withSuspense(<SciencePage />)} />
              <Route path="community" element={withSuspense(<CommunityPage />)} />
              <Route path="academy" element={withSuspense(<AcademyPage />)} />
              <Route path="clothing" element={withSuspense(<ClothingPage />)} />
              <Route path="settings" element={withSuspense(<SettingsPage />)} />
              <Route path="profile" element={withSuspense(<ProfilePage />)} />
              <Route path="volunteer" element={withSuspense(<VolunteerPage />)} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Toaster position="top-center" richColors />
      </HashRouter>
    </AuthProvider>
  )
}
