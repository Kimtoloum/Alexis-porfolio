import Link from "next/link"

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
]

export default function Header() {
  return (
    <header className="border-b border-neutral-800">
      <nav className="flex items-center justify-between max-w-4xl mx-auto px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          AK
        </Link>
        <ul className="flex gap-3 sm:gap-6 text-xs sm:text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}