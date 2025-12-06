import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import AboutPreview from '@/components/AboutPreview';
import Services from '@/components/Services';
import WhoWeServe from '@/components/WhoWeServe';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ContactCTA from '@/components/ContactCTA';
import TechnologyNote from '@/components/TechnologyNote';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <AboutPreview />
      <Services />
      <WhoWeServe />
      <FAQ />
      <Newsletter />
      <ContactCTA />
      <TechnologyNote />
    </main>
  );
}
