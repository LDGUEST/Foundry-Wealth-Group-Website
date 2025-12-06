import ContactForm from '@/components/ContactForm'
import MeetingBookingButton from '@/components/MeetingBookingButton'

export default function RetirementPlanning() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Retirement Planning
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Strategic planning to help you retire with confidence
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
                  Retire on Your Terms
                </h2>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Retirement planning is about more than accumulating assets—it&apos;s about creating sustainable income
                  streams that support your desired lifestyle for decades to come. We help you develop a comprehensive
                  retirement strategy that addresses income needs, healthcare costs, longevity risk, and legacy goals.
                </p>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Whether you&apos;re decades from retirement or already enjoying your golden years, we provide guidance
                  on complex decisions like Social Security claiming strategies, pension options, required minimum
                  distributions, and sustainable withdrawal rates.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mt-10 mb-4">
                  Our Retirement Planning Services:
                </h3>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Retirement Income Analysis:</strong>
                      <span className="text-charcoal/70"> Project your retirement income needs and identify potential shortfalls or surpluses.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Social Security Optimization:</strong>
                      <span className="text-charcoal/70"> Develop claiming strategies to maximize your lifetime benefits.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Required Minimum Distribution Planning:</strong>
                      <span className="text-charcoal/70"> Navigate RMD requirements while minimizing tax impact.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Withdrawal Strategy Development:</strong>
                      <span className="text-charcoal/70"> Create sustainable withdrawal strategies designed to last throughout retirement.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Retirement Account Optimization:</strong>
                      <span className="text-charcoal/70"> Maximize tax-advantaged retirement savings opportunities.</span>
                    </div>
                  </li>
                </ul>

                <div className="bg-offwhite p-6 rounded-lg border border-steel/20 mt-8">
                  <h4 className="text-xl font-semibold text-charcoal mb-3">Planning for Longevity</h4>
                  <p className="text-charcoal/70">
                    With people living longer than ever, your retirement could span 30+ years. We build plans that
                    account for longevity, helping ensure your assets can support you throughout a long and fulfilling
                    retirement.
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
