import FadeIn from "@/components/ui/FadeIn"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight text-center">
          Alexis Kimtoloum
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mt-4 text-lg text-neutral-500 text-center max-w-xl">
          Développeur web & consultant en transformation digitale — Lomé, Togo
        </p>
      </FadeIn>
    </main>
  )
}