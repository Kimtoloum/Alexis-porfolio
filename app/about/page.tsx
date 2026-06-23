import { MapPin, Briefcase, Globe } from "lucide-react"
import { skillCategories, timeline, certifications } from "@/lib/data"

const badges = [
  { icon: MapPin,    label: "Lomé, Togo" },
  { icon: Briefcase, label: "Disponible pour missions" },
  { icon: Globe,     label: "Afrique de l'Ouest & ailleurs" },
]

export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">

      {/* Intro */}
      <div className="mb-10 pb-10 border-b border-neutral-800">
        <h1 className="text-2xl font-medium text-white leading-snug mb-3">
          Développeur web & Data Scientist
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
          Basé à Lomé, Togo. J'accompagne PME, startups, ONG et entrepreneurs
          d'Afrique de l'Ouest dans leur transformation digitale — du
          développement sur mesure à l'analyse de données, en passant par le
          SEO, le marketing digital et la formation.
        </p>
        <div className="flex flex-wrap gap-5 mt-5">
          {badges.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-1.5 text-xs text-neutral-500">
              <Icon size={13} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Compétences */}
      <section className="mb-12">
        <p className="text-[11px] font-medium tracking-widest uppercase text-neutral-500 mb-6">
          Compétences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <p className="text-xs font-medium text-neutral-400 mb-3">
                {cat.category}
              </p>
              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <span className="text-xs text-neutral-300 w-44 shrink-0">
                      {skill.name}
                    </span>
                    <div className="flex-1 h-[3px] bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-neutral-600 w-8 text-right shrink-0">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parcours */}
      <section className="mb-12">
        <p className="text-[11px] font-medium tracking-widest uppercase text-neutral-500 mb-6">
          Parcours
        </p>
        <div>
          {timeline.map((item) => (
            <div key={item.title} className="flex gap-5 mb-6">
              <span className="text-xs text-neutral-600 w-12 shrink-0 pt-0.5">
                {item.year}
              </span>
              <div className="relative w-px bg-neutral-800 shrink-0 mt-1">
                <span className="absolute top-1 -left-[3px] w-[7px] h-[7px] rounded-full bg-white" />
              </div>
              <div className="pb-6">
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-xs text-neutral-500 mt-0.5 mb-1">
                  {item.organization}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}