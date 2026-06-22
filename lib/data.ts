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

export type Skill = {
  name: string
  level: number
}

export const skills: Skill[] = [
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "PHP / Laravel", level: 85 },
  { name: "Python", level: 70 },
  { name: "React / Next.js", level: 75 },
  { name: "WordPress", level: 90 },
  { name: "Java", level: 60 },
]

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "Developpeur web/mobile & IA",
    description:
      "Developpeur web/mobile, Big Data, UX/UI, IA générative.",
  },
  {
    year: "2025",
    title: "Audit digital pour un cabinet d'architecture",
    description:
      "Stratégie SEO, UX/UI et structuration de données pour bleazarchitecture.com sur 4 marchés africains.",
  },
  {
    year: "Avant",
    title: "Développeur web freelance",
    description:
      "Développement sur mesure pour PME, startups et entrepreneurs en Afrique de l'Ouest.",
  },
]
