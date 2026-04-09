import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects-data"

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-fade-up px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Portfolio</p>
        <h2 className="font-display mb-4 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects I've worked on. Click to view details, screenshots, and demos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group">
              <Card className="glass-card h-full overflow-hidden rounded-3xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/15">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.screenshots[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary">
                      {project.featured ? "Featured" : "Project"}
                    </Badge>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full bg-muted/70 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary" className="rounded-full bg-muted/70 text-xs">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
