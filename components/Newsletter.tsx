'use client';

import React, { useState } from 'react';
import { ChartBarIcon, LightBulbIcon, BoltIcon } from '@heroicons/react/24/outline';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal/90 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Stay Informed on Market Trends & Financial Strategies
        </h2>
        <p className="mt-4 text-lg text-steel/90 leading-relaxed">
          Receive our quarterly insights on investment strategies, tax planning, and market analysis.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-charcoal/50 p-6 rounded-lg">
                <ChartBarIcon className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-xl mt-2">Market Analysis</h3>
            </div>
            <div className="bg-charcoal/50 p-6 rounded-lg">
                <LightBulbIcon className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-xl mt-2">Planning Strategies</h3>
            </div>
            <div className="bg-charcoal/50 p-6 rounded-lg">
                <BoltIcon className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-xl mt-2">Sector Insights</h3>
            </div>
        </div>

        <div className="mt-12">
          {submitted ? (
            <div className="text-2xl font-semibold text-green-400">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full md:w-80 px-4 py-3 rounded-md text-charcoal bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-primary-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-steel/70">
            Quarterly emails • No spam • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
