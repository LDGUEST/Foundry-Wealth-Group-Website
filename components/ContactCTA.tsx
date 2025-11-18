export default function ContactCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Begin Your Financial Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Schedule a consultation to discuss how Foundry Wealth Group can help you achieve your financial goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-md font-semibold text-base hover:bg-offwhite transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[200px] text-center"
          >
            Connect with an Advisor
          </a>
          <a
            href="tel:+1-555-000-0000"
            className="bg-primary-700 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-800 transition-all border-2 border-white/20 min-w-[200px] text-center"
          >
            Call Us Today
          </a>
        </div>
      </div>
    </section>
  )
}

