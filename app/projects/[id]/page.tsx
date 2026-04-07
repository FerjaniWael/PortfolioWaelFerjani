import { notFound } from "next/navigation"
import { projects, getProjectBySlug } from "@/lib/projects-data"
import ProjectDetailClient from "./project-detail-client"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectBySlug(id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
