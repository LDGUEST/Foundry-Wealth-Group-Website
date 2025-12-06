'use client';

import { useState } from 'react';

export default function WhoWeServe() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const clientTypes = [
    {
      title: 'Professionals & Executives',
      description: 'High-income individuals seeking comprehensive wealth management and tax-efficient strategies to preserve and grow their assets.',
    },
    {
      title: 'Business Owners',
      description: 'Entrepreneurs and business owners requiring specialized planning for business succession, valuation, and personal financial security.',
    },
    {
      title: 'Families & Retirees',
      description: 'Families planning for retirement, education funding, and multi-generational wealth transfer with disciplined, long-term strategies.',
    },
    {
      title: 'High Net Worth Individuals',
      description: 'Sophisticated investors seeking independent, fiduciary-focused advisory services with transparent fee structures and personalized attention.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center gap-3 mx-auto group md:cursor-default"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight">
              Who We Serve
            </h2>
            <span className="text-3xl text-primary transition-transform duration-300 group-hover:scale-110 md:hidden">
              {isExpanded ? '−' : '+'}
            </span>
          </button>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-light">
            We work with discerning clients who value independent, fiduciary-focused wealth management
          </p>
        </div>

        {/* Client Grid - Collapsible on mobile, always visible on desktop */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 md:max-h-[5000px] md:opacity-100'
          } overflow-hidden`}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="group p-8 lg:p-10 bg-gradient-to-br from-offwhite to-white rounded-lg border border-steel/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-charcoal mb-4 group-hover:text-primary transition-colors">
                {client.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Connect with an Advisor
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}

