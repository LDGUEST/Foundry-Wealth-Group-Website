import ContactForm from '@/components/ContactForm'

export default function EstatePlanning() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Estate Planning
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Preserve and transfer your wealth according to your wishes
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
                  Protect Your Legacy
                </h2>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Estate planning is about more than distributing assets—it's about ensuring your wishes are honored,
                  your loved ones are cared for, and your legacy is preserved. We work closely with estate attorneys
                  and tax professionals to develop comprehensive strategies that address your unique family situation
                  and financial goals.
                </p>

                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Whether your estate is modest or substantial, proper planning can help minimize taxes, avoid probate
                  delays, and provide clarity for your heirs. We help coordinate all aspects of your estate plan to
                  ensure it aligns with your overall financial strategy.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mt-10 mb-4">
                  Our Estate Planning Services:
                </h3>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Estate Planning Coordination:</strong>
                      <span className="text-charcoal/70"> Work with your attorney to ensure your estate documents align with your financial plan.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Wealth Transfer Strategies:</strong>
                      <span className="text-charcoal/70"> Develop efficient strategies to transfer wealth to heirs and charitable causes.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Trust & Gifting Strategies:</strong>
                      <span className="text-charcoal/70"> Utilize trusts and lifetime gifts to minimize estate taxes and control asset distribution.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Estate Tax Minimization:</strong>
                      <span className="text-charcoal/70"> Implement strategies to reduce or eliminate estate taxes for your beneficiaries.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">•</span>
                    <div>
                      <strong className="text-charcoal">Multi-Generational Planning:</strong>
                      <span className="text-charcoal/70"> Create lasting strategies that benefit multiple generations of your family.</span>
                    </div>
                  </li>
                </ul>

                <div className="bg-offwhite p-6 rounded-lg border border-steel/20 mt-8">
                  <h4 className="text-xl font-semibold text-charcoal mb-3">Charitable Giving</h4>
                  <p className="text-charcoal/70">
                    For clients with philanthropic goals, we help structure charitable giving strategies that maximize
                    tax benefits while supporting the causes you care about. From donor-advised funds to charitable
                    trusts, we'll help you create a lasting impact.
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
