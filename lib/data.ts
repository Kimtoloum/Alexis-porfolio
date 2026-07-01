export type Skill = { name: string; level: number }
export type SkillCategory = {
  category: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Développement",
    skills: [
      { name: "PHP / Laravel", level: 85 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "React / Next.js", level: 75 },
      { name: "WordPress", level: 90 },
      { name: "Java", level: 60 },
    ],
  },
  {
    category: "Data & Intelligence Artificielle",
    skills: [
      { name: "Python (Data Science)", level: 70 },
      { name: "Analyse de données / EDA", level: 75 },
      { name: "Machine Learning", level: 60 },
      { name: "Business Intelligence", level: 65 },
    ],
  },
  {
    category: "Marketing & Design",
    skills: [
      { name: "SEO", level: 80 },
      { name: "Marketing digital", level: 75 },
      { name: "Design UX/UI", level: 75 },
      { name: "Identité visuelle (Canva)", level: 85 },
    ],
  },
  {
    category: "Gestion de projet",
    skills: [
      { name: "Planification & suivi", level: 80 },
      { name: "Gestion d'équipe", level: 75 },
      { name: "Méthodes Agile / Scrum", level: 70 },
      { name: "Reporting & livrables", level: 80 },
    ],
  },
  {
    category: "Autres expertises",
    skills: [
      { name: "Cryptomonnaie & blockchain", level: 65 },
      { name: "Formation & accompagnement", level: 80 },
    ],
  },
]

export type Certification = {
  title: string
  organization: string
  year: string
}

export const certifications: Certification[] = [
  {
    title: "Certification en gestion de projets ONG",
    organization: "À préciser",
    year: "2025",
  },
]

export type TimelineItem = {
  year: string
  title: string
  organization: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    year: "2022 - Présent",
    title: "Développeur web & Consultant digital",
    organization: "Indépendant · Lomé, Togo",
    description:
      "Création de sites web modernes, responsives et optimisés SEO. Développement de plateformes e-commerce avec catalogue et panier dynamique. Intégration JS, PHP, Firebase et MySQL. Accompagnement digital de PME et auto-entrepreneurs locaux.",
  },
  {
    year: "Juin 2025 - Avril 2026",
    title: "Chargé de communication & développement digital",
    organization: "Eliasse · Lomé, Togo",
    description:
      "Participation au développement et à la gestion de solutions digitales. Création, optimisation et publication de contenus numériques multi-plateformes. Appui à la communication digitale et amélioration de la visibilité en ligne.",
  },
  {
    year: "Septembre 2024 - Decembre 2024",
    title: "Conseiller client & solutions digitales",
    organization: "WIICOM · Lomé, Togo",
    description:
      "Assistance, conseil et fidélisation client dans un contexte de solutions numériques. Présentation et démonstration de solutions digitales auprès de prospects. Gestion des besoins clients sur des projets transversaux.",
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  status: "done" | "in-progress" | "planned"
  githubUrl?: string
  demoUrl?: string
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
    title: "EDA : Espérance de vie en Afrique de l'Ouest",
    description:
      "Analyse exploratoire de l'évolution de l'espérance de vie au Togo et ses voisins (1952–2007), croisée avec le PIB par habitant.",
    tags: ["Python", "Pandas", "Plotly"],
    githubUrl: "https://github.com/Kimtoloum/eda-sante-afrique",
    status: "done",
  },
  {
    title: "Système de gestion des stocks pour PME africaines",
    description:
      "Application web de gestion de stocks, ventes, approvisionnements et rapports. Alertes de rupture, tableau de bord analytique, génération de rapports PDF, gestion des rôles utilisateurs.",
    tags: ["PHP", "Laravel", "MySQL", "Tableau de bord"],
    status: "in-progress",
  },
  {
    title: "Système de gestion de commandes - maison de mode",
    description:
      "Application pour ateliers de couture et créateurs : suivi des commandes en temps réel, gestion des paiements, impression de reçus et étiquettes, tableau de bord avec statistiques.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    status: "done",
  },
  {
    title: "Site web professionnel - Bleaz Architecture",
    description:
      "Développement complet du site vitrine d'un cabinet d'architecture : conception UI, responsive design, optimisation SEO et performance, déploiement en production.",
    tags: ["Développement web", "SEO", "UX/UI", "Déploiement"],
    demoUrl: "https://bleazarchitecture.com",
    status: "done",
  },
  {
    title: "Identité visuelle & UX/UI - Bleaz Architecture",
    description:
      "Conception de l'identité visuelle et du système UX/UI d'un cabinet d'architecture : univers graphique, charte de couleurs, composants d'interface cohérents.",
    tags: ["Design UX/UI", "Identité visuelle", "Canva"],
    status: "done",
  },
]