interface TechIconProps {
  name: string
  className?: string
}

// Simple icon rendering without embedded SVG data
export function TechIcon({ name, className = "w-6 h-6" }: TechIconProps) {
  const techIcons: Record<string, string> = {
    react: "⚛️",
    nextjs: "▲",
    typescript: "TS",
    javascript: "JS",
    csharp: "C#",
    angular: "Ng",
    bootstrap: "B",
    "spring boot": "SB",
    dotnet: ".NET",
    laravel: "L",
    symfony: "SF",
    postgresql: "PG",
    mongodb: "M",
    mysql: "SQL",
    docker: "🐳",
    git: "Git",
    github: "GH",
    figma: "F",
    tailwind: "TW",
  }

  const icon = techIcons[name.toLowerCase()]

  return (
    <div
      className={`${className} flex items-center justify-center bg-gradient-to-br from-primary to-primary/70 rounded text-white font-bold text-xs`}
      title={name}
    >
      {icon || name.charAt(0).toUpperCase()}
    </div>
  )
}
