import { skills, timeline } from "@/lib/data"
import SkillBar from "@/components/ui/SkillBar"

export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">
        À propos
      </h1>
      <p className="mt-4 text-neutral-400 max-w-2xl">
        Développeur web et consultant en transformation digitale basé à Lomé,
        Togo. J'accompagne PME, startups et entrepreneurs d'Afrique de l'Ouest
        dans leur présence digitale, du développement sur mesure à la stratégie
        de communication.
      </p>

      <h2 className="text-lg font-semibold mt-10 mb-4">Compétences</h2>
      <div className="space-y-4 max-w-md">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-10 mb-4">Parcours</h2>
      <div className="space-y-6">
        {timeline.map((item) => (
          <div key={item.title} className="flex gap-4">
            <p className="text-sm text-neutral-500 w-16 shrink-0 mt-0.5">
              {item.year}
            </p>
            <div className="border-l border-neutral-800 pl-4">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-neutral-400 mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}