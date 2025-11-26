import ContactForm from '@/components/ContactForm'

export default function InvestmentManagement() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Investment Management
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Evidence-based portfolio strategies aligned with your goals
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Description */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Disciplined Investment Strategies
                </h2>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Our investment management approach is grounded in academic research and decades of market evidence.
                  We construct diversified portfolios designed to align with your risk tolerance, time horizon, and
                  long-term financial objectives while minimizing unnecessary costs.
                </p>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  We believe in strategic asset allocation, disciplined rebalancing, and maintaining perspective
                  during market volatility. Our evidence-based approach helps you stay invested through market cycles
                  and avoid the costly mistakes that come from emotional decision-making.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mt-10 mb-4">
                  Our Investment Management Services:
                </h3>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Portfolio Construction & Asset Allocation:</strong>
                      <span className="text-charcoal/70"> Customized portfolios built on modern portfolio theory and your specific needs.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Risk Tolerance Assessment:</strong>
                      <span className="text-charcoal/70"> Comprehensive evaluation to determine the appropriate risk level for your portfolio.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Regular Rebalancing & Monitoring:</strong>
                      <span className="text-charcoal/70"> Systematic rebalancing to maintain target allocations and manage risk.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Performance Reporting &amp; Analysis:</strong>
                      <span className="text-charcoal/70"> Clear, comprehensive reports on your portfolio&apos;s performance and progress.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Cost-Efficient Investment Selection:</strong>
                      <span className="text-charcoal/70"> Focus on low-cost index funds and ETFs to maximize your net returns.</span>
                    </div>
                  </li>
                </ul>

                <div className="bg-offwhite p-6 rounded-lg border border-steel/20 mt-8">
                  <h4 className="text-xl font-semibold text-charcoal mb-3">Custody with Leading Institutions</h4>
                  <p className="text-charcoal/70">
                    Your assets are held at Charles Schwab and Anchorage Digital, providing institutional-grade
                    security and transparency. We never take custody of your assets, ensuring an additional layer
                    of protection and oversight.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
