import ContactForm from '@/components/ContactForm'

export default function FinancialPlanning() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Financial Planning
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Comprehensive strategies to help you achieve your financial goals
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Description (60% = 3/5) */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Building Your Financial Roadmap
                </h2>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Our comprehensive financial planning process begins with understanding your unique circumstances,
                  goals, and values. We develop customized strategies that address every aspect of your financial life,
                  creating a roadmap designed to help you achieve your most important objectives.
                </p>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Financial planning is not a one-time event but an ongoing process. We work with you to adapt your
                  plan as your life circumstances change, ensuring you stay on track toward your goals while navigating
                  life&apos;s inevitable transitions.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mt-10 mb-4">
                  Our Financial Planning Services Include:
                </h3>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Cash Flow Analysis & Budgeting:</strong>
                      <span className="text-charcoal/70"> Understand where your money goes and optimize your spending to align with your priorities.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Debt Management Strategies:</strong>
                      <span className="text-charcoal/70"> Develop efficient approaches to manage and eliminate debt while building wealth.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Insurance Needs Assessment:</strong>
                      <span className="text-charcoal/70"> Ensure you have appropriate coverage to protect what matters most.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Estate Planning Coordination:</strong>
                      <span className="text-charcoal/70"> Work with your estate attorney to ensure your assets transfer according to your wishes.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Education Funding Strategies:</strong>
                      <span className="text-charcoal/70"> Plan for education expenses while balancing other financial priorities.</span>
                    </div>
                  </li>
                </ul>

                <div className="bg-offwhite p-6 rounded-lg border border-steel/20 mt-8">
                  <h4 className="text-xl font-semibold text-charcoal mb-3">Why Choose Foundry Wealth Group?</h4>
                  <p className="text-charcoal/70">
                    As an independent, fee-only fiduciary, we provide unbiased advice that&apos;s always in your best interest.
                    Our comprehensive approach ensures all aspects of your financial life work together harmoniously to
                    support your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (40% = 2/5) */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
