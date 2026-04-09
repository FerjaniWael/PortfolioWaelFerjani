"use client"

import { useState, type FormEvent } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Github, GraduationCap, Calendar, Building } from "lucide-react"
import { TechIcon } from "@/components/tech-icons"
import ProjectsSection from "@/components/projects-section"
import { PortfolioNavigation } from "@/components/portfolio-navigation"

export default function Portfolio() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSubmitting(true)
    setSubmitMessage(null)
    setSubmitError(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { message?: string }

      if (!response.ok) {
        setSubmitError(data.message || "Failed to send message. Please try again.")
        return
      }

      setSubmitMessage(data.message || "Your message has been sent successfully.")
      form.reset()
    } catch {
      setSubmitError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "C#", icon: "csharp" },
        { name: "Java", icon: "java" },
        { name: "PHP", icon: "php" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "Angular", icon: "angular" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Bootstrap", icon: "bootstrap" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", icon: "springboot" },
        { name: ".NET", icon: "dotnet" },
        { name: "Laravel", icon: "laravel" },
        { name: "Symfony", icon: "symfony" },
      ],
    },
    {
      title: "Database Management Systems",
      skills: [
        { name: "MySQL", icon: "mysql" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Git", icon: "git" },
        { name: "Docker", icon: "docker" },
        { name: "GitHub Actions", icon: "githubactions" },
        { name: "Jenkins", icon: "jenkins" },
        { name: "SonarQube", icon: "sonarQube" },
        { name: "Artifactory", icon: "artifactory" },
      ],
    },
  ]

  const experience = [
    {
      title: "Intern",
      company: "Machinestalk Tunisia",
      logo: "/placeholder.svg",
      period: "February 2025 - August 2025",
      description:
        "Design and development of a no code platform to design web applications called Machinestalk Studio, a white-label application (a reusable product that can be rebranded and customized for different clients).",
    },
    {
      title: "Intern",
      company: "Station Neo Ledge",
      logo: "/placeholder.svg",
      period: "June 2024 - August 2024",
      description:
        "Develop in Java under Android Studio to connect the assistant to the application,Assist in the preparation of sprints and the division of tasks in the Scrum team,Deploy and test the application via Google Play Console, Design a mockup with Figma for a mobile application.",
    },
    {
      title: "Intern",
      company: "School Les Nouvelles Generations",
      logo: "/placeholder.svg",
      period: "2018 - 2020",
      description:
        "Design a mockup using Figma, Design and development of an application for managing school bus schedules and routes,Technologies: Angular, Spring Boot",
    },
    {
      title: "Intern",
      company: "BFI Groupe",
      period: " January 2022 - May 2022",
      description: "Design and development of a web application for project version management",
    },
  ]

  const education = [
    {
      degree: "Engineer in Computer Science",
      institution: "Esprit",
      logo: "/placeholder.svg",
      period: "2022 - 2025",
      location: "El Ghazela, Tunis",
      description:
        "Comprehensive training covering multiple IT domains, with a strong focus on software engineering. Specialized in web development, DevOps, and deployment while gaining broad technical exposure",
    },
    {
      degree: "Bachelor in information technologies",
      institution: "Higher Institute of Technological Studies",
      logo: "/placeholder.svg",
      period: "2019 - 2022",
      location: "Djerba, Tunisia",
      description:
        "Specialized in software development with strong foundations in programming, algorithms, and application design. Developed clean, maintainable code across multiple technologies..",
    },
  ]

  return (
    <div className="grain-overlay min-h-screen bg-background">
      <PortfolioNavigation />

      {/* About Section */}
      <section id="about" className="section-fade-up px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Profile</p>
          <h2 className="font-display mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            About Me
          </h2>
          <Card className="glass-card rounded-3xl">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm an entry-level software engineer passionate about building efficient, clean code and learning new
                technologies. I have a strong foundation in full-stack development and enjoy working on diverse projects
                that challenge me to expand my skills and solve meaningful problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm eager to collaborate with experienced developers, contribute to real-world applications, and grow as
                a software engineer. I'm committed to writing maintainable code, understanding best practices, and
                continuously improving my craft through both professional experience and self-directed learning.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Quick Learner", "Detail-Oriented", "Collaborative", "Driven to Grow"].map((trait) => (
                  <Badge
                    key={trait}
                    variant="secondary"
                    className="rounded-full border border-primary/20 bg-primary/10 text-secondary-foreground"
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-fade-up bg-muted/30 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Toolkit</p>
          <h2 className="font-display mb-4 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies, frameworks, and tools I work with to build amazing products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="glass-card rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex h-8 w-8 items-center justify-center text-primary transition-transform group-hover:scale-110">
                          <TechIcon name={skill.icon} className="w-6 h-6" />
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />

      {/* Experience Section */}
      <section id="experience" className="section-fade-up bg-muted/30 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Journey</p>
          <h2 className="font-display mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="glass-card rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-muted/50 border border-border overflow-hidden flex items-center justify-center">
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary mb-3">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-fade-up px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Academics</p>
          <h2 className="font-display mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="glass-card rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-muted/50 border border-border overflow-hidden flex items-center justify-center">
                        <img
                          src={edu.logo || "/placeholder.svg"}
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <GraduationCap className="w-4 h-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-fade-up bg-muted/30 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Connect</p>
          <h2 className="font-display mb-4 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card rounded-3xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground">ferjaniwael20@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Ariana, Tunis</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="text-foreground">github.com/FerjaniWael</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-3xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitMessage ? <p className="text-sm text-green-600">{submitMessage}</p> : null}
                  {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/80 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wael Ferjani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
