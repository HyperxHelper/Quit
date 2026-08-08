import { Link, useNavigate } from "react-router-dom"
import { ArrowRight, Flame, Megaphone, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AuthLayout } from "@/components/auth/auth-layout"

export function SignupPage() {
  const navigate = useNavigate()

  return (
    <AuthLayout
      title="Full membership is coming soon"
      subtitle="We're still in anonymous-preview. Real accounts open at launch."
      footer={
        <>
          Already in?{" "}
          <Link
            to="/login?tab=anonymous"
            className="font-medium text-primary hover:underline"
          >
            Sign in anonymously now
          </Link>
        </>
      }
    >
      <div className="space-y-4">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
            <Rocket className="size-7 text-primary" />
          </div>
          <h2 className="font-display mt-4 text-xl font-bold tracking-tight">
            We're not open for full signups yet.
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            You're browsing the preview build on GitHub. No need for a real
            email, password or identity — explore everything with Anonymous
            mode, then create your full account when we launch.
          </p>
        </div>

        <Button size="lg" className="w-full" onClick={() => navigate("/login?tab=anonymous")}>
          <Flame className="size-4" />
          Sign in anonymously
          <ArrowRight />
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          className="w-full"
          onClick={() => navigate("/")}
        >
          Back to the homepage
        </Button>

        <div className="flex items-start gap-3 rounded-xl border bg-muted/50 p-4">
          <Megaphone className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            When full membership launches, your Anonymous-compatible profile and
            plan can be upgraded — your streak travels with you.
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}