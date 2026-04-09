export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  tech: string[]
  skillsAcquired: string[]
  screenshots: string[]
  demoVideo?: string
  videos?: Array<{
    title: string
    url: string
    thumbnail?: string
  }>
  github: string
  live: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "machinestalk-studio",
    title: "Machinestalk Studio",
    shortDescription: "White-label web application with microfrontend architecture, authentication, and multitenancy.",
    fullDescription:
      "Design and development of Machinestalk Studio, a white-label platform that can be fully rebranded and customized for multiple clients. Implemented a microfrontend architecture combining Angular and React, with a Spring Boot backend. Integrated authentication and multitenancy using a local Keycloak server. Built a custom Keycloak provider packaged as a JAR and deployed to the server to enable tenant administration directly from the application.",
    tech: ["React", "Angular", "Spring Boot", "Keycloak"],
    skillsAcquired: [
      "Microfrontend architecture",
      "Authentication & authorization",
      "Multitenancy",
      "Keycloak provider development",
      "Full-stack development",
      "Reusable white-label application design",
    ],
    screenshots: ["/machinestalk-studio-cover.png"],
    demoVideo: "",
    videos: [
      {
        title: "Media 1",
        url: "https://www.youtube.com/embed/lS3vAdGgqgY?si=m1UCP2dJMvYF5uuy",
      },
      {
        title: "Media 2",
        url: "https://www.youtube.com/embed/tfsg1q4QWWM?si=itH8TpEatl7-PPIQ",
      },
      {
        title: "Media 3",
        url: "https://www.youtube.com/embed/PXKxg6UsPEk?si=D6mBFn8nCbBElOhi",
      },
      {
        title: "Media 4",
        url: "https://www.youtube.com/embed/zLosvpxT_FA?si=dlSOMkz5391uEtQ4",
      },
    ],
    github: "",
    live: "",
    featured: true,
  },
  {
    id: "android-assistant-integration",
    title: "Android Assistant Integration",
    shortDescription: "Android application integrating Google Assistant with task coordination and deployment.",
    fullDescription:
      "Development of an Android application in Java using Android Studio, enabling interaction between the mobile app and the Google Assistant. Participated in Scrum sprint planning and task breakdown. Designed UI mockups in Figma. Deployed, tested, and validated releases through Google Play Console.",
    tech: ["Java", "Android SDK", "Android Studio", "Google Play Console", "Figma"],
    skillsAcquired: [
      "Android application development",
      "Voice assistant integration",
      "Scrum methodology",
      "Mobile UI/UX design",
      "App deployment & release management",
    ],
    screenshots: ["/AssistantIntegration.png", "/android-assistant-integration.jpg"],
    demoVideo: "",
    videos: [
      {
        title: "Assistant Integration Demo",
        url: "https://www.youtube.com/embed/T792c0s-2xo?si=7MYZcp-D8WvJJSug",
      },
    ],
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "docsharepeak",
    title: "DocSharePeak",
    shortDescription: "Document sharing and collaboration platform with media-rich project showcase and live demo.",
    fullDescription:
      "DocSharePeak is a collaborative platform for securely sharing, organizing, and reviewing documents. The project includes a modern dashboard, document previews, role-based access patterns, and a responsive UX optimized for daily professional workflows. This showcase includes screenshots, demo videos, and a live demo link.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    skillsAcquired: [
      "Product-focused frontend architecture",
      "Document workflow UX",
      "Role-based access design",
      "Responsive dashboard development",
      "Media showcase integration",
    ],
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    videos: [
      {
        title: "DocSharePeak Overview",
        url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
      },
      {
        title: "DocSharePeak Workflow Demo",
        url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      },
    ],
    github: "",
    live: "https://docsharepeak.com",
    featured: true,
  },
  {
    id: "generation-bus",
    title: "School Bus Management System",
    shortDescription: "Web application for managing school bus schedules and routes.",
    fullDescription:
      "Designed a complete mockup using Figma, followed by full development of a school bus management application. The system enables school administrators to manage schedules, routes, drivers, and tracking. Built with Angular for the frontend and Spring Boot for the backend.",
    tech: ["Angular", "Spring Boot", "Figma"],
    skillsAcquired: [
      "Frontend and backend development",
      "UI/UX mockup design",
      "REST API development",
      "Route and schedule management logic",
    ],
    screenshots: [
      "/generations-bus-cover.png",
      "/images/figma-prototype-1.png",
      "/images/figma-prototype-2.png",
      "/images/figma-prototype-3.png",
      "/images/figma-prototype-4.png",
      "/images/figma-prototype-5.png",
      "/images/figma-prototype-6.png",
      "/images/figma-prototype-7.png",
      "/images/figma-prototype-8.png",
      "/images/figma-prototype-9.png",
      "/images/figma-prototype-10.png",
    ],
    demoVideo: "",
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "project-version-manager",
    title: "Project Version Manager",
    shortDescription: "Web application for managing and tracking project versions.",
    fullDescription:
      "Design and development of a web application focused on project version management. Built with Angular for the frontend and Spring Boot for the backend. Integrated GitLab and Artifactory pipelines for version storage, dependency management, and CI/CD automation.",
    tech: ["Angular", "Spring Boot", "GitLab", "Artifactory"],
    skillsAcquired: [
      "Version management workflow",
      "CI/CD automation",
      "Dependency management",
      "Full-stack development",
    ],
    screenshots: ["/version-manager-dashboard.jpg", "/version-history-view.jpg"],
    demoVideo: "",
    github: "",
    live: "",
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
