import Image from "next/image"
import FadeIn from "@/components/ui/FadeIn"
import ContactLinks from "@/components/ui/ContactLinks"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <FadeIn>
        <Image
          src="/profile.jpg"
          alt="Alexis Kimtoloum"
          width={120}
          height={120}
          className="rounded-full object-cover mx-auto"
        />
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="text-4xl font-semibold tracking-tight text-center mt-6">
          Alexis Kimtoloum
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="mt-4 text-lg text-neutral-500 text-center max-w-xl">
          Développeur web & consultant en transformation digitale — Lomé, Togo
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <ContactLinks />
      </FadeIn>
    </main>
  )
}