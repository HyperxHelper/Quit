import { PublicNavbar } from "@/components/layout/public-navbar"
import { Footer } from "@/components/layout/footer"
import Hero from "@/components/landing/hero"
import Marquee from "@/components/landing/marquee"
import Pillars from "@/components/landing/pillars"
import ResearchLab from "@/components/landing/research-lab"
import Programs from "@/components/landing/programs"
import Method from "@/components/landing/method"
import Impact from "@/components/landing/impact"
import Philosophy from "@/components/landing/philosophy"
import Volunteer from "@/components/landing/volunteer"
import Donate from "@/components/landing/donate"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicNavbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Pillars />
        <ResearchLab />
        <Programs />
        <Method />
        <Impact />
        <Philosophy />
        <Volunteer />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}
