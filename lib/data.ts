 export type Project = {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  status: "done" | "in-progress" | "planned"
}

export const projects: Project[] = [
  {
    title: "Portfolio Next.js avec dashboard GitHub",
    description:
      "Portfolio personnel connecté en temps réel à l'API GitHub : stats, graphique de commits, top repositories.",
    tags: ["Next.js", "TypeScript", "GitHub API", "Recharts"],
    githubUrl: "https://github.com/Kimtoloum/Alexis-porfolio",
    demoUrl: "https://alexis-porfolio.vercel.app",
    status: "in-progress",
  },
  {
    title: "Analyse exploratoire de données (EDA)",
    description:
      "Notebook d'analyse de données publiques avec visualisations et insights commentés.",
    tags: ["Python", "Pandas", "Seaborn", "Jupyter"],
    status: "planned",
  },
  {
    title: "Chatbot RAG sur documents PDF",
    description:
      "Assistant IA capable de répondre à des questions à partir de documents PDF, avec recherche vectorielle.",
    tags: ["LangChain", "ChromaDB", "FastAPI", "React"],
    status: "planned",
  },
]
