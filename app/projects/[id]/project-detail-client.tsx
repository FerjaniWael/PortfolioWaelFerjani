"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import { TechIcon } from "@/components/tech-icons"
import type { Project } from "@/lib/projects-data"

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.pathname.includes("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1]?.split("/")[0]?.split("?")[0] ?? null
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v")
    }

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "")
    }
  } catch {
    return null
  }

  return null
}

function getVideoThumbnail(url: string, thumbnail?: string): string {
  if (thumbnail) {
    return thumbnail
  }

  const videoId = getYouTubeVideoId(url)
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return "/placeholder.svg"
}

function getVideoEmbedUrl(url: string): string {
  const videoId = getYouTubeVideoId(url)
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }

  return url
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; url: string } | null>(null)

  const heroMedia = [
    ...project.screenshots.map((screenshot, index) => ({
      type: "image" as const,
      src: screenshot,
      title: `${project.title} screenshot ${index + 1}`,
    })),
    ...(project.videos ?? [])
      .filter((video) => Boolean(video.url))
      .map((video) => ({
        type: "video" as const,
        src: video.url,
        title: video.title,
      })),
  ]

  const nextScreenshot = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % heroMedia.length)
  }

  const prevScreenshot = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + heroMedia.length) % heroMedia.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{project.shortDescription}</p>
          </div>

          {/* Screenshots Gallery / Video */}
          <Card className="mb-12 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {heroMedia.length > 0 && (
                  <>
                    {heroMedia[currentMediaIndex]?.type === "image" ? (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={heroMedia[currentMediaIndex]?.src || "/placeholder.svg"}
                          alt={heroMedia[currentMediaIndex]?.title || `${project.title} media`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <button
                        onClick={() =>
                          setSelectedVideo({
                            title: heroMedia[currentMediaIndex]?.title || "Project video",
                            url: heroMedia[currentMediaIndex]?.src || "",
                          })
                        }
                        className="w-full aspect-video overflow-hidden relative bg-muted"
                      >
                        <img
                          src={getVideoThumbnail(heroMedia[currentMediaIndex]?.src || "")}
                          alt={heroMedia[currentMediaIndex]?.title || "Project video"}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      </button>
                    )}

                    {/* Navigation buttons */}
                    <button
                      onClick={prevScreenshot}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextScreenshot}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {heroMedia.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentMediaIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentMediaIndex ? "bg-primary" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>

                    {heroMedia[currentMediaIndex]?.type === "image" && currentMediaIndex > 0 && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary/80 text-secondary-foreground font-semibold">
                          Figma Design Prototype
                        </Badge>
                      </div>
                    )}

                    {heroMedia[currentMediaIndex]?.type === "video" && (
                      <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">Video</Badge>
                    )}
                  </>
                )}
                {heroMedia.length === 0 && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={`${project.title} media`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {project.videos && project.videos.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Project Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.videos.map((video, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all overflow-hidden group cursor-pointer"
                    onClick={() => {
                      if (video.url) {
                        setSelectedVideo(video)
                      }
                    }}
                  >
                    <div className="aspect-video overflow-hidden relative bg-muted">
                      <img
                        src={getVideoThumbnail(video.url, video.thumbnail)}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {video.url && (
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                      )}
                      {!video.url && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <div className="text-center">
                            <Badge variant="secondary" className="bg-secondary/80">
                              Coming Soon
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {selectedVideo && selectedVideo.url && (
            <div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <div
                className="bg-background rounded-lg overflow-hidden max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">{selectedVideo.title}</h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="p-1 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>
                <div className="aspect-video bg-black">
                  <iframe
                    src={getVideoEmbedUrl(selectedVideo.url)}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">About This Project</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </CardContent>
              </Card>

              {/* Skills Acquired */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Skills Acquired</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.skillsAcquired.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/20 text-secondary-foreground px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Tech Stack</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <TechIcon name={tech} className="w-5 h-5 text-primary" />
                        <span className="text-sm text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Project Links</h2>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent justify-start"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-3" />
                        View Source Code
                      </a>
                    </Button>
                    <Button className="w-full bg-primary hover:bg-primary/90 justify-start" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-3" />
                        Visit Live Application
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
