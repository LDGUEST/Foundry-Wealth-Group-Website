import Hero from '@/components/Hero'
import Values from '@/components/Values'
import AboutPreview from '@/components/AboutPreview'
import Services from '@/components/Services'
import TechnologyNote from '@/components/TechnologyNote'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Values />
      <AboutPreview />
      <Services />
      <TechnologyNote />
    </main>
  )
}

