import { Project } from "@/lib/data"
import { Code2, ExternalLink } from "lucide-react"

const statusConfig: Record<Project["status"], { label: string; className: string }> = {
  done:          { label: "Terminé",  className: "text-green-400 border-green-900 bg-green-950" },
  "in-progress": { label: "En cours", className: "text-amber-400 border-amber-900 bg-amber-950" },
  planned:       { label: "À venir",  className: "text-neutral-400 border-neutral-700 bg-neutral-900" },
}

export default function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status]

  return (
    <div className="border border-neutral-800 hover:border-neutral-700 transition-colors rounded-xl p-5 flex flex-col gap-3">

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-medium text-white leading-snug">{project.title}</h3>
        <span className={`text-[11px] border rounded-full px-2.5 py-0.5 whitespace-nowrap shrink-0 ${status.className}`}>
          {status.label}
        </span>
      </div>

      <p className="text-xs text-neutral-400 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] bg-neutral-900 text-neutral-500 rounded-full px-2.5 py-1">
            {tag}
          </span>
        ))}
      </div>

      {(project.githubUrl || project.demoUrl) && (
        <div className="flex gap-4 pt-2 border-t border-neutral-800">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors">
              <Code2 size={13} /> GitHub
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors">
              <ExternalLink size={13} /> Démo
            </a>
          )}
        </div>
      )}

    </div>
  )
}