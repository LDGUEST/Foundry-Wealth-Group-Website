export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-offwhite via-white to-offwhite pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
            Forge Your Financial Future
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-charcoal/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Independent Wealth Management Built on Fiduciary Excellence
          </h2>
          
          {/* Value Statement */}
          <p className="text-lg md:text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Foundry Wealth Group delivers precision-crafted financial strategies through disciplined investment management and comprehensive planning. As an independent Registered Investment Advisor, we are committed to your long-term success with unwavering fiduciary responsibility and transparent, client-first service.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[200px] text-center"
            >
              Schedule a Consultation
            </a>
            <a
              href="/services"
              className="bg-white text-primary px-8 py-4 rounded-md font-semibold text-base border-2 border-primary hover:bg-primary/5 transition-all shadow-md hover:shadow-lg min-w-[200px] text-center"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
