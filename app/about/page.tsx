import ContactCTA from '@/components/ContactCTA'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            About Foundry Wealth Group
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Independent, fiduciary-focused wealth management built on trust and excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Our Mission</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Foundry Wealth Group is an independent Registered Investment Advisor dedicated to providing exceptional financial guidance and investment management services. We believe that true wealth management goes beyond investment returns—it&apos;s about crafting comprehensive strategies that align with your unique goals, values, and vision for the future.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Independence Matters</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Our independence ensures that we operate without the conflicts of interest that can compromise advice at larger institutions. We are free from proprietary product requirements, sales quotas, and corporate pressures that can influence recommendations. This independence allows us to select the best solutions for your unique situation, regardless of provider.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Fiduciary Commitment</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We are bound by fiduciary duty, meaning we are legally obligated to act solely in your best interest. Every recommendation, every strategy, and every decision is made with your financial well-being as the sole priority. This isn&apos;t just our legal obligation—it&apos;s our fundamental commitment to you.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Our Approach</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
                Through a disciplined, process-driven approach, we craft personalized financial strategies that align with your goals, risk tolerance, and time horizon. Our methodology combines:
              </p>
              <ul className="list-disc list-inside space-y-2 text-charcoal/70 text-lg ml-4">
                <li>Rigorous analysis and evidence-based strategies</li>
                <li>Systematic execution and ongoing monitoring</li>
                <li>Transparent communication and regular review</li>
                <li>Long-term relationship building based on trust</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Why Choose Foundry</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We believe in transparency, clear communication, and building long-term relationships based on trust and results. Our clients value our independent perspective, our fiduciary commitment, and our disciplined approach to wealth management. We&apos;re not just managing investments—we&apos;re helping you forge your financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

