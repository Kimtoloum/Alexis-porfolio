import Image from "next/image"
import { MapPin, Globe, Briefcase } from "lucide-react"
import FadeIn from "@/components/ui/FadeIn"
import ContactLinks from "@/components/ui/ContactLinks"

const stats = [
  { value: "6ans", label: "Développement & Marketing" },
  { value: "4ans", label: "Gestion de projet" },
  { value: "3ans", label: "Data & IA" },
  { value: "15+",  label: "Clients accompagnés" },
]

const badges = [
  { icon: MapPin,    label: "Lomé, Togo" },
  { icon: Briefcase, label: "Ouvert à tous projets" },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <FadeIn>
        <Image
          src="/profile.jpg"
          alt="Alexis Kimtoloum"
          width={88}
          height={88}
          className="rounded-full object-cover mx-auto"
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 text-[11px] text-neutral-500 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1"
            >
              <Icon size={11} />
              {label}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="text-3xl font-medium tracking-tight mt-4">
          Alexis Kimtoloum
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="mt-3 text-[15px] text-neutral-400 max-w-lg leading-relaxed">
          Je transforme des idées en produits digitaux qui fonctionnent - sites
          web, applications, analyses de données et stratégies de croissance
          pour les entreprises et organisations d'Afrique et d'ailleurs.
        </p>
        <p className="mt-2 text-xs text-neutral-600">
          Développeur full stack · Data Scientist · Consultant digital · Chef de projet
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="grid grid-cols-4 gap-2.5 mt-8 w-full max-w-md">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="border border-neutral-800 rounded-lg py-3 px-2 text-center"
            >
              <p className="text-lg font-medium text-white">{value}</p>
              <p className="text-[10px] text-neutral-500 mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <ContactLinks />
      </FadeIn>

    </main>
  )
}