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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

