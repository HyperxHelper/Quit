import {
  ArrowRight,
  ShoppingBag,
  Shirt,
  Sparkles,
  Truck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useAuth } from "@/lib/auth"

const products = [
  {
    name: "Quit t-shirt",
    detail: "100% cotton · fits every semester",
    price: "29 TND",
  },
  {
    name: "Quit hoodie",
    detail: "Heavyweight fleece for exam-season cosiness",
    price: "59 TND",
  },
  {
    name: "Quit cap",
    detail: "Low-profile, embroidered mark",
    price: "19 TND",
  },
]

export function ClothingPage() {
  const { user } = useAuth()

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <Shirt className="size-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">
            Clothing
          </h1>
          <p className="text-sm text-muted-foreground">
            Wear the identity of the person who quit. Reserved for students
            who want to carry Quit with them.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {products.map((product) => (
          <Card key={product.name} className="gap-3 p-6">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10">
              <ShoppingBag className="size-7 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="text-base font-semibold">{product.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {product.detail}
              </p>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2 border-t pt-3">
              <span className="font-display text-lg font-extrabold text-primary">
                {product.price}
              </span>
              <Button size="sm">
                {user ? "Order" : "Sign in to order"}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <div className="text-sm font-semibold">
              Every purchase funds the mission.
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Student-only orders, campaign pricing and a part of every sale
              goes back into the Academy's content and awareness materials.
            </div>
          </div>
        </div>
        <Button variant="outline" asChild>
          <a href={user ? "#" : "/signup"} className="gap-1.5">
            Browse the shop <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Truck className="size-4" /> Campus pickup available
        </span>
        <Badge variant="secondary">Students only</Badge>
        <Badge variant="secondary">New drops soon</Badge>
      </div>
    </div>
  )
}