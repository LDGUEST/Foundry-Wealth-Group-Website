import ContactCTA from '@/components/ContactCTA'

export default function Testimonials() {
  // Empty testimonial cards to show structure
  const testimonialPlaceholders = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Hear from clients who trust Foundry Wealth Group with their financial future
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Coming Soon Message */}
          <div className="text-center mb-16">
            <div className="inline-block bg-offwhite border border-steel/20 rounded-lg px-8 py-6">
              <p className="text-lg text-charcoal/70">
                Testimonials coming soon - currently gathering client feedback
              </p>
            </div>
          </div>

          {/* Empty Testimonial Cards (showing structure) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialPlaceholders.map((placeholder) => (
              <div
                key={placeholder.id}
                className="bg-gradient-to-br from-offwhite to-white p-8 rounded-lg border border-steel/20 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="text-primary text-4xl mb-4">"</div>

                {/* Testimonial Text Placeholder */}
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-steel/20 rounded w-full"></div>
                  <div className="h-4 bg-steel/20 rounded w-5/6"></div>
                  <div className="h-4 bg-steel/20 rounded w-4/6"></div>
                </div>

                {/* Client Info Placeholder */}
                <div className="border-t border-steel/20 pt-4">
                  <div className="h-4 bg-steel/20 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-steel/20 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Context */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Building Trust Through Service
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              At Foundry Wealth Group, we're committed to providing exceptional, fiduciary-focused financial guidance
              to every client. As we grow our practice, we're collecting testimonials from clients who have experienced
              the value of independent, objective advice. Check back soon to read their stories.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
