import { projects } from "@/lib/data"
import ProjectCard from "@/components/projects/ProjectCard"

export default function Projects() {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">
        Mes projets
      </h1>
      <p className="mt-2 text-neutral-400">
        Les projets que je construis dans le cadre de ma montée en compétences dev & IA.
      </p>

      <div className="grid gap-4 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  )
}