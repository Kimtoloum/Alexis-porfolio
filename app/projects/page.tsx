"use client"

import { useState } from "react"
import { projects, Project } from "@/lib/data"
import ProjectCard from "@/components/projects/ProjectCard"

type Filter = "all" | Project["status"]

const filters: { label: string; value: Filter }[] = [
  { label: "Tous",     value: "all" },
  { label: "Terminé",  value: "done" },
  { label: "En cours", value: "in-progress" },
  { label: "À venir",  value: "planned" },
]

export default function Projects() {
  const [active, setActive] = useState<Filter>("all")

  const filtered = active === "all" ? projects : projects.filter(p => p.status === active)
  const count = (f: Filter) => f === "all" ? projects.length : projects.filter(p => p.status === f).length

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
      <h1 className="text-2xl font-medium tracking-tight">Mes projets</h1>
      <p className="mt-2 text-sm text-neutral-400">
        Réalisations, analyses et outils construits dans le cadre de mon activité et de ma montée en compétences.
      </p>

      <div className="flex flex-wrap gap-2 mt-6 mb-8">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
              active === value
                ? "bg-white text-black border-white"
                : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-300"
            }`}
          >
            {label} ({count(value)})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  )
}