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
      logo: "/placeholder.svg",
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
    <div className="min-h-screen bg-background">
      <PortfolioNavigation />

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
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
                  <Badge key={trait} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    {trait}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Skills & Technologies</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies, frameworks, and tools I work with to build amazing products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <TechIcon name={skill.icon} className="w-6 h-6" />
                        </div>
                        <span className="text-foreground">{skill.name}</span>
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
      <section id="experience" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
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
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
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
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
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
                      <p className="text-foreground">github.com/alexjohnson</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="bg-background/50 border-border focus:border-primary" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wael Ferjani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
