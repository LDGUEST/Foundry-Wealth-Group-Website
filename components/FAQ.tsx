'use client';

import React, { useState } from 'react';
import { ChartBarIcon, LightBulbIcon, BoltIcon } from '@heroicons/react/24/outline';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // RESOLVED: Using the TypeScript type for the form event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    setSubmitted(true);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-charcoal to-charcoal/90 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Stay Informed on Market Trends & Financial Strategies
        </h2>
        <p className="mt-3 text-base md:text-lg text-steel/90 leading-relaxed">
          Receive our quarterly insights on investment strategies, tax planning, and market analysis.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg text-center">
                <ChartBarIcon className="w-7 h-7 text-white mx-auto mb-2" />
                <h3 className="font-semibold text-base md:text-lg">Market Analysis</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg text-center">
                <LightBulbIcon className="w-7 h-7 text-white mx-auto mb-2" />
                <h3 className="font-semibold text-base md:text-lg">Planning Strategies</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg text-center">
                <BoltIcon className="w-7 h-7 text-white mx-auto mb-2" />
                <h3 className="font-semibold text-base md:text-lg">Sector Insights</h3>
            </div>
        </div>

        <div className="mt-8">
          {submitted ? (
            <div className="text-xl font-semibold text-green-400">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full md:w-80 px-4 py-2.5 rounded-md text-charcoal bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white px-6 py-2.5 rounded-md font-semibold hover:bg-primary-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-3 text-xs md:text-sm text-steel/70">
            Quarterly emails • No spam • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;