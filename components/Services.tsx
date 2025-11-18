export default function Services() {
  const services = [
    {
      title: 'Financial Planning',
      description: 'Comprehensive analysis of your financial situation, goals, and objectives. We develop customized strategies covering cash flow, debt management, insurance, estate planning, and education funding to create a roadmap for your financial future.',
    },
    {
      title: 'Investment Management',
      description: 'Evidence-based portfolio construction and ongoing management designed to align with your risk tolerance and long-term objectives. We utilize diversified, low-cost investment strategies with regular rebalancing and performance monitoring.',
    },
    {
      title: 'Retirement Planning',
      description: 'Strategic planning to ensure you can retire on your terms. We analyze retirement income needs, optimize Social Security claiming strategies, manage required minimum distributions, and develop withdrawal strategies to sustain your lifestyle throughout retirement.',
    },
    {
      title: 'Tax-Efficient Strategies',
      description: 'Integration of tax planning into your investment and financial decisions. We focus on asset location, tax-loss harvesting, qualified account optimization, and coordination with your tax professionals to minimize your overall tax burden.',
    },
    {
      title: 'Business Owner Planning',
      description: 'Specialized guidance for business owners including succession planning, business valuation, key person insurance, buy-sell agreements, and strategies to optimize business value while planning for personal financial security.',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-slate-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

