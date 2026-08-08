import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { AuthProvider } from "@/lib/auth"
import { Toaster } from "@/components/ui/sonner"
import { LandingPage } from "@/pages/landing"
import { CodePage } from "@/pages/code"
import { LoginPage } from "@/pages/login"
import { SignupPage } from "@/pages/signup"
import { AppShell } from "@/pages/app-shell"
import { DashboardPage } from "@/pages/dashboard"
import { PlanPage } from "@/pages/plan"
import { SciencePage } from "@/pages/science"
import { CommunityPage } from "@/pages/community"
import { AcademyPage } from "@/pages/academy"
import { ClothingPage } from "@/pages/clothing"
import { SettingsPage } from "@/pages/settings"
import { ProfilePage } from "@/pages/profile"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/app" element={<AppShell />}>
            <Route index element={<DashboardPage />} />
            <Route path="plan" element={<PlanPage />} />
            <Route path="science" element={<SciencePage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="academy" element={<AcademyPage />} />
            <Route path="clothing" element={<ClothingPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </AuthProvider>
  )
}