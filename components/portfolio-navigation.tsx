"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const HERO_ORBS = [
  { left: "8%", top: "22%", delay: "0s", duration: "5s" },
  { left: "22%", top: "72%", delay: "0.9s", duration: "6s" },
  { left: "41%", top: "30%", delay: "1.3s", duration: "4.6s" },
  { left: "61%", top: "68%", delay: "0.4s", duration: "5.4s" },
  { left: "79%", top: "24%", delay: "1.7s", duration: "6.2s" },
  { left: "89%", top: "58%", delay: "0.7s", duration: "4.4s" },
]

export function PortfolioNavigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-display text-xl tracking-wide text-foreground transition-colors hover:text-primary"
            >
              Wael Portfolio
            </button>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(color-mix(in oklab, var(--primary) 25%, transparent) 1px, transparent 1px),
                linear-gradient(90deg, color-mix(in oklab, var(--primary) 25%, transparent) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
                animation: "grid-move 20s linear infinite",
              }}
            />
          </div>

          <div className="absolute inset-0">
            {HERO_ORBS.map((orb, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: orb.left,
                  top: orb.top,
                  animationDelay: orb.delay,
                  animationDuration: orb.duration,
                }}
              >
                <div
                  className="h-2 w-2 rounded-full bg-primary/35 animate-ping"
                  style={{ animationDelay: orb.delay }}
                />
              </div>
            ))}
          </div>

          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(67, 97, 238)" stopOpacity="0.55" />
                <stop offset="50%" stopColor="rgb(245, 183, 0)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="rgb(67, 97, 238)" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            <path
              d="M100,200 L300,200 L300,400 L600,400 L600,600 L900,600"
              stroke="url(#circuit-gradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <path
              d="M200,100 L200,300 L500,300 L500,500 L800,500 L800,700"
              stroke="url(#circuit-gradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            <circle cx="300" cy="200" r="4" fill="rgb(67, 97, 238)" className="animate-ping" />
            <circle
              cx="600"
              cy="400"
              r="4"
              fill="rgb(245, 183, 0)"
              className="animate-ping"
              style={{ animationDelay: "1.5s" }}
            />
            <circle
              cx="500"
              cy="300"
              r="4"
              fill="rgb(67, 97, 238)"
              className="animate-ping"
              style={{ animationDelay: "2s" }}
            />
          </svg>

          <div
            className={`section-fade-up relative z-10 mx-auto max-w-4xl text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="mb-16 pt-32">
              <div className="hero-ring mx-auto mb-8 h-48 w-48 overflow-hidden rounded-3xl bg-linear-to-br from-primary to-accent p-1 shadow-xl">
                <div className="h-full w-full overflow-hidden rounded-3xl bg-background">
                  <img src="/images/cv.png" alt="Wael Ferjani" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                Open to Software Engineering Opportunities
              </div>

              <h1 className="font-display mb-4 bg-linear-to-r from-primary via-foreground to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
                Wael Ferjani
              </h1>
              <p className="mb-2 text-xl font-semibold text-muted-foreground md:text-2xl">Software Engineer</p>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                I design and build full-stack products with a focus on clean architecture, practical business impact,
                and reliable delivery.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
                <span className="rounded-full border border-border bg-card/70 px-4 py-2 font-semibold text-foreground">
                  Full-Stack Engineering
                </span>
                <span className="rounded-full border border-border bg-card/70 px-4 py-2 font-semibold text-foreground">
                  React • Spring Boot • DevOps
                </span>
                <span className="rounded-full border border-border bg-card/70 px-4 py-2 font-semibold text-foreground">
                  Tunisia
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="h-12 rounded-full bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="h-12 rounded-full border-primary/60 bg-card/70 px-8 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-primary hover:text-secondary transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>

          <style jsx>{`
            @keyframes grid-move {
              0% { transform: translate(0, 0); }
              100% { transform: translate(50px, 50px); }
            }
          `}</style>
        </div>
      </section>
    </>
  )
}
