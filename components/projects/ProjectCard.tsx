 import { Project } from "@/lib/data"

const statusLabels: Record<Project["status"], string> = {
  done: "Terminé",
  "in-progress": "En cours",
  planned: "À venir",
}

const statusColors: Record<Project["status"], string> = {
  done: "text-green-400 border-green-900",
  "in-progress": "text-amber-400 border-amber-900",
  planned: "text-neutral-400 border-neutral-700",
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-neutral-800 rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium">{project.title}</h3>
        <span
          className={`text-xs border rounded-full px-2 py-0.5 whitespace-nowrap ${statusColors[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <p className="text-sm text-neutral-400 mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-neutral-900 text-neutral-400 rounded-full px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            Démo →
          </a>
        )}
      </div>
    </div>
  )
}
