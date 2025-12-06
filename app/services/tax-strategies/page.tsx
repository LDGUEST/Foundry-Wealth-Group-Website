import ContactForm from '@/components/ContactForm'
import MeetingBookingButton from '@/components/MeetingBookingButton'

export default function TaxStrategies() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Tax-Efficient Strategies
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Minimize taxes and maximize your after-tax returns
          </p>
        </div>
      </section>

      {/* Meeting Booking CTA */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-offwhite">
        <div className="max-w-7xl mx-auto text-center">
          <MeetingBookingButton variant="primary" size="lg" />
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
                  Strategic Tax Planning
                </h2>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Taxes are one of the largest expenses you&apos;ll face over your lifetime. Our tax-efficient investment
                  strategies are designed to help minimize your tax burden, allowing you to keep more of what you earn
                  and compound your wealth more effectively over time.
                </p>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  We integrate tax planning into every investment decision, from asset location to rebalancing strategies.
                  While we don&apos;t prepare tax returns, we work closely with your tax professionals to ensure your
                  investment strategy complements your overall tax situation.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mt-10 mb-4">
                  Our Tax-Efficient Services:
                </h3>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Asset Location Optimization:</strong>
                      <span className="text-charcoal/70"> Strategically place investments in taxable vs. tax-advantaged accounts.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Tax-Loss Harvesting:</strong>
                      <span className="text-charcoal/70"> Systematically harvest losses to offset gains and reduce taxable income.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Qualified Account Strategies:</strong>
                      <span className="text-charcoal/70"> Optimize contributions and distributions from IRAs, 401(k)s, and other retirement accounts.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Tax Professional Coordination:</strong>
                      <span className="text-charcoal/70"> Collaborate with your CPA to ensure investment and tax strategies work together.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Multi-Year Tax Planning:</strong>
                      <span className="text-charcoal/70"> Plan ahead to smooth income and minimize lifetime tax liability.</span>
                    </div>
                  </li>
                </ul>

                <div className="bg-offwhite p-6 rounded-lg border border-steel/20 mt-8">
                  <h4 className="text-xl font-semibold text-charcoal mb-3">It&apos;s Not What You Earn, It&apos;s What You Keep</h4>
                  <p className="text-charcoal/70">
                    A thoughtful tax strategy can add significant value to your portfolio over time. By minimizing
                    unnecessary taxes, you can compound your wealth more effectively and achieve your financial goals
                    faster.
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
