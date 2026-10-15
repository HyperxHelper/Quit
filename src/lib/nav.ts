import { useLocation, useNavigate } from "react-router-dom"

/**
 * Smooth-scrolls to a landing-page section. When the visitor is on another
 * route (HashRouter), navigate home first and scroll once the page mounts.
 */
export function useScrollToSection() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (id: string) => {
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

    if (pathname !== "/") {
      navigate("/")
      window.setTimeout(scroll, 150)
    } else {
      scroll()
    }
  }
}
