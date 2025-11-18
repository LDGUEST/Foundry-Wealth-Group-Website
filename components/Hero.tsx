export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Forge Your Financial Future
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          Independent Wealth Management Built on Fiduciary Excellence
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Foundry Wealth Group delivers precision-crafted financial strategies through disciplined investment management and comprehensive planning. As an independent Registered Investment Advisor, we are committed to your long-term success with unwavering fiduciary responsibility and transparent, client-first service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-700 hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

