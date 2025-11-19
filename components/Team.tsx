import React from 'react';
import Link from 'next/link';
import { ChartBarIcon, CheckCircleIcon, BoltIcon } from '@heroicons/react/24/outline';

const Team = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Meet Your Advisor
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="bg-steel/20 rounded-lg w-full h-96 flex items-center justify-center">
              <span className="text-charcoal/50">Placeholder Image</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-3xl font-bold text-charcoal">Logan Kahnke</h3>
            <p className="text-xl text-primary font-semibold">Founder & Investment Advisor Representative</p>
            <div className="mt-6 text-lg text-charcoal/70 leading-relaxed space-y-4">
              <p>
                With over 3.5 years of experience at Pivotal Wealth & Tax, Logan developed a strong foundation in comprehensive financial planning and investment management. He is dedicated to upholding the fiduciary standard, ensuring that his clients' interests are always placed first.
              </p>
              <p>
                Logan possesses specialized knowledge in the nuclear energy and technology sectors, allowing him to provide unique insights and identify investment opportunities in these complex fields. His expertise is backed by a Series 65 license, which qualifies him as an Investment Advisor Representative.
              </p>
              <p>
                His commitment to fiduciary excellence means he operates with full transparency and a singular focus: helping you achieve your financial goals without the conflicts of interest inherent in traditional brokerage models.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-offwhite to-white border border-steel/20 rounded-lg p-8">
            <h4 className="text-2xl font-bold text-charcoal">Professional Background</h4>
            <ul className="mt-4 text-lg text-charcoal/70 leading-relaxed list-disc list-inside space-y-2">
              <li>Portfolio Manager for 3.5+ years</li>
              <li>Series 65 Licensed Investment Advisor</li>
              <li>Specialized expertise in nuclear & tech sectors</li>
              <li>Experience with institutional-level proposals</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-offwhite to-white border border-steel/20 rounded-lg p-8">
            <h4 className="text-2xl font-bold text-charcoal">Investment Philosophy</h4>
            <ul className="mt-4 text-lg text-charcoal/70 leading-relaxed list-disc list-inside space-y-2">
              <li>Evidence-based and rooted in academic research</li>
              <li>Tax-efficient and cost-conscious strategies</li>
              <li>Disciplined, long-term approach</li>
              <li>Focus on what you can control</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-charcoal">Core Competencies</h4>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <ChartBarIcon className="w-12 h-12 text-primary" />
              <p className="mt-2 text-xl font-semibold text-charcoal">Portfolio Management</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircleIcon className="w-12 h-12 text-primary" />
              <p className="mt-2 text-xl font-semibold text-charcoal">Financial Planning</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BoltIcon className="w-12 h-12 text-primary" />
              <p className="mt-2 text-xl font-semibold text-charcoal">Sector Expertise</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/contact" passHref>
            <span className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg cursor-pointer hover:bg-primary-600 transition-colors duration-300">
              Schedule a Conversation
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
