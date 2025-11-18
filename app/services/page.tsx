import ContactCTA from '@/components/ContactCTA'

export default function Services() {
  const services = [
    {
      title: 'Financial Planning',
      description: 'Comprehensive analysis of your financial situation, goals, and objectives. We develop customized strategies covering cash flow, debt management, insurance, estate planning, and education funding to create a roadmap for your financial future.',
      details: [
        'Cash flow analysis and budgeting',
        'Debt management strategies',
        'Insurance needs assessment',
        'Estate planning coordination',
        'Education funding strategies',
      ],
    },
    {
      title: 'Investment Management',
      description: 'Evidence-based portfolio construction and ongoing management designed to align with your risk tolerance and long-term objectives. We utilize diversified, low-cost investment strategies with regular rebalancing and performance monitoring.',
      details: [
        'Portfolio construction and asset allocation',
        'Risk tolerance assessment',
        'Regular rebalancing and monitoring',
        'Performance reporting and analysis',
        'Cost-efficient investment selection',
      ],
    },
    {
      title: 'Retirement Planning',
      description: 'Strategic planning to ensure you can retire on your terms. We analyze retirement income needs, optimize Social Security claiming strategies, manage required minimum distributions, and develop withdrawal strategies to sustain your lifestyle throughout retirement.',
      details: [
        'Retirement income analysis',
        'Social Security optimization',
        'Required minimum distribution planning',
        'Withdrawal strategy development',
        'Retirement account optimization',
      ],
    },
    {
      title: 'Tax-Efficient Strategies',
      description: 'Integration of tax planning into your investment and financial decisions. We focus on asset location, tax-loss harvesting, qualified account optimization, and coordination with your tax professionals to minimize your overall tax burden.',
      details: [
        'Asset location optimization',
        'Tax-loss harvesting',
        'Qualified account strategies',
        'Tax professional coordination',
        'Multi-year tax planning',
      ],
    },
    {
      title: 'Business Owner Planning',
      description: 'Specialized guidance for business owners including succession planning, business valuation, key person insurance, buy-sell agreements, and strategies to optimize business value while planning for personal financial security.',
      details: [
        'Business succession planning',
        'Business valuation analysis',
        'Key person insurance strategies',
        'Buy-sell agreement structuring',
        'Business and personal wealth integration',
      ],
    },
    {
      title: 'Estate Planning',
      description: 'Comprehensive estate planning strategies to preserve and transfer wealth efficiently. We coordinate with estate attorneys and tax professionals to develop plans that align with your family\'s goals and minimize transfer taxes.',
      details: [
        'Estate planning coordination',
        'Wealth transfer strategies',
        'Trust and gifting strategies',
        'Estate tax minimization',
        'Multi-generational planning',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Comprehensive wealth management solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-offwhite to-white p-10 rounded-lg border border-steel/20 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-3xl font-bold text-charcoal mb-4">{service.title}</h2>
                <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-charcoal/70 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

