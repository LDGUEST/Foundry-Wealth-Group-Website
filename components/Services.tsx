export default function Services() {
  const services = [
    {
      title: 'Financial Planning',
      description: 'Comprehensive analysis of your financial situation, goals, and objectives. We develop customized strategies covering cash flow, debt management, insurance, estate planning, and education funding to create a roadmap for your financial future.',
      icon: '📊',
    },
    {
      title: 'Investment Management',
      description: 'Evidence-based portfolio construction and ongoing management designed to align with your risk tolerance and long-term objectives. We utilize diversified, low-cost investment strategies with regular rebalancing and performance monitoring.',
      icon: '📈',
    },
    {
      title: 'Retirement Planning',
      description: 'Strategic planning to ensure you can retire on your terms. We analyze retirement income needs, optimize Social Security claiming strategies, manage required minimum distributions, and develop withdrawal strategies to sustain your lifestyle throughout retirement.',
      icon: '🎯',
    },
    {
      title: 'Tax-Efficient Strategies',
      description: 'Integration of tax planning into your investment and financial decisions. We focus on asset location, tax-loss harvesting, qualified account optimization, and coordination with your tax professionals to minimize your overall tax burden.',
      icon: '💼',
    },
    {
      title: 'Business Owner Planning',
      description: 'Specialized guidance for business owners including succession planning, business valuation, key person insurance, buy-sell agreements, and strategies to optimize business value while planning for personal financial security.',
      icon: '🏢',
    },
    {
      title: 'Estate Planning',
      description: 'Comprehensive estate planning strategies to preserve and transfer wealth efficiently. We coordinate with estate attorneys and tax professionals to develop plans that align with your family\'s goals and minimize transfer taxes.',
      icon: '🔐',
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-light">
            Comprehensive wealth management solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg border border-steel/20 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-block text-primary font-semibold text-base hover:text-primary-700 transition-colors"
          >
            Learn More About Our Services →
          </a>
        </div>
      </div>
    </section>
  )
}
