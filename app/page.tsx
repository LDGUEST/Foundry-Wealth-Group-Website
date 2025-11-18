import Hero from '@/components/Hero'
import Values from '@/components/Values'
import AboutPreview from '@/components/AboutPreview'
import Services from '@/components/Services'
import WhoWeServe from '@/components/WhoWeServe'
import ContactCTA from '@/components/ContactCTA'
import TechnologyNote from '@/components/TechnologyNote'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Values />
      <AboutPreview />
      <Services />
      <WhoWeServe />
      <ContactCTA />
      <TechnologyNote />
    </main>
  )
}

