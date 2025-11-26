import ContactForm from '@/components/ContactForm'

export default function BusinessOwnerPlanning() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Business Owner Planning
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Specialized guidance for entrepreneurs and business owners
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
                  Navigate Business and Personal Wealth
                </h2>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  As a business owner, your personal and business finances are deeply intertwined. We provide
                  specialized guidance to help you navigate the unique challenges and opportunities that come with
                  business ownership, from succession planning to optimizing your compensation structure.
                </p>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Whether you&apos;re building your business, preparing to sell, or planning the transition to the next
                  generation, we help you make strategic decisions that maximize the value of your business while
                  ensuring your personal financial security.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mt-10 mb-4">
                  Our Business Owner Services:
                </h3>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Business Succession Planning:</strong>
                      <span className="text-charcoal/70"> Develop strategies for transitioning ownership and leadership of your business.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Business Valuation Analysis:</strong>
                      <span className="text-charcoal/70"> Understand your business&apos;s current value and strategies to enhance it.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Key Person Insurance Strategies:</strong>
                      <span className="text-charcoal/70"> Protect your business from the loss of critical team members.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Buy-Sell Agreement Structuring:</strong>
                      <span className="text-charcoal/70"> Create agreements that provide clarity and protection for all business partners.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Business &amp; Personal Wealth Integration:</strong>
                      <span className="text-charcoal/70"> Coordinate business decisions with personal financial goals and retirement planning.</span>
                    </div>
                  </li>
                </ul>

                <div className="bg-offwhite p-6 rounded-lg border border-steel/20 mt-8">
                  <h4 className="text-xl font-semibold text-charcoal mb-3">Exit Planning & Transitions</h4>
                  <p className="text-charcoal/70">
                    Most business owners will eventually exit their business through sale, succession, or closure.
                    We help you plan years in advance to maximize value and ensure a smooth transition that achieves
                    your financial and personal objectives.
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
