export default function AboutPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-offwhite">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight">
            About Foundry Wealth Group
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none text-charcoal leading-relaxed space-y-6">
          <p className="text-xl text-charcoal/80 font-light">
            Foundry Wealth Group is an independent Registered Investment Advisor dedicated to providing exceptional financial guidance and investment management services.
          </p>
          <p className="text-lg text-charcoal/70">
            Our independence ensures that we operate without the conflicts of interest that can compromise advice at larger institutions. We are bound by fiduciary duty, meaning we are legally obligated to act solely in your best interest.
          </p>
          <p className="text-lg text-charcoal/70">
            Through a disciplined, process-driven approach, we craft personalized financial strategies that align with your goals, risk tolerance, and time horizon. We believe in transparency, clear communication, and building long-term relationships based on trust and results.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/about"
            className="inline-block text-primary font-semibold text-base hover:text-primary-700 transition-colors"
          >
            Learn More About Us →
          </a>
        </div>
      </div>
    </section>
  )
}
