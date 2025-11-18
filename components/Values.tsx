export default function Values() {
  const values = [
    {
      title: 'Fiduciary Excellence',
      description: 'We are legally bound to act in your best interest, always. Every recommendation, every strategy, and every decision is made with your financial well-being as the sole priority.',
    },
    {
      title: 'Independent Stewardship',
      description: 'As an independent RIA, we are free from conflicts of interest that can arise from proprietary products or sales quotas. Our independence allows us to select the best solutions for your unique situation.',
    },
    {
      title: 'Disciplined Process',
      description: 'We combine rigorous analysis, evidence-based strategies, and systematic execution to build and preserve wealth. Our disciplined approach ensures consistency and reduces emotional decision-making.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-light">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-offwhite to-white rounded-lg border border-steel/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-charcoal mb-4">
                {value.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
