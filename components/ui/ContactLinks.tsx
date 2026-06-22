import { Mail, Phone, Link2, Code2, Users } from "lucide-react"

const contacts = [
  {
    label: "Email",
    value: "akimtoloum@gmail.com",
    href: "mailto:akimtoloum@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+228 92 98 26 91",
    href: "https://wa.me/22892982691",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alexis-kimtoloum",
    href: "https://www.linkedin.com/in/alexis-kimtoloum-64629a2a1",
    icon: Users,
  },
  {
    label: "GitHub",
    value: "github.com/Kimtoloum",
    href: "https://github.com/Kimtoloum",
    icon: Code2,
  },
  {
    label: "Site web",
    value: "alexis-kimtoloum.com",
    href: "https://alexis-kimtoloum.com",
    icon: Link2,
  },
]

export default function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
      {contacts.map((contact) => {
        const Icon = contact.icon
        return (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            title={contact.value}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-600 rounded-full px-3 py-1.5"
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{contact.label}</span>
          </a>
        )
      })}
    </div>
  )
}
