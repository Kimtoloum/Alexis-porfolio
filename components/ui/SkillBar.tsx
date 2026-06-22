 import { Skill } from "@/lib/data"

export default function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm">{skill.name}</p>
        <p className="text-sm text-neutral-400">{skill.level}%</p>
      </div>
      <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#7F77DD] rounded-full"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}
