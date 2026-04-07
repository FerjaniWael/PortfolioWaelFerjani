"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
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
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
                animation: "grid-move 20s linear infinite",
              }}
            />
          </div>

          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <div
                  className="w-2 h-2 bg-primary/30 rounded-full animate-ping"
                  style={{ animationDelay: `${Math.random() * 2}s` }}
                />
              </div>
            ))}
          </div>

          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(236, 72, 153)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.6" />
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
            <circle cx="300" cy="200" r="4" fill="rgb(239, 68, 68)" className="animate-ping" />
            <circle
              cx="600"
              cy="400"
              r="4"
              fill="rgb(236, 72, 153)"
              className="animate-ping"
              style={{ animationDelay: "1.5s" }}
            />
            <circle
              cx="500"
              cy="300"
              r="4"
              fill="rgb(239, 68, 68)"
              className="animate-ping"
              style={{ animationDelay: "2s" }}
            />
          </svg>

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-16 pt-32">
              <div className="w-48 h-48 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 overflow-hidden shadow-xl">
                <div className="w-full h-full rounded-2xl bg-background overflow-hidden">
                  <img src="/images/cv.png" alt="Wael Ferjani" className="w-full h-full object-cover" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Wael Ferjani
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">Software Engineer</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
