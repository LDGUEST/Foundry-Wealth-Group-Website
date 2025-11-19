import React from 'react';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: 'Discovery Meeting',
    description: 'A no-obligation introductory call to discuss your financial goals, current situation, and determine if we are a good fit.',
    duration: '30 Minutes',
    commitment: 'No Obligation',
  },
  {
    step: '02',
    title: 'Comprehensive Analysis',
    description: 'We gather your financial documents and perform a deep analysis of your investments, tax situation, and overall financial health.',
    duration: '1-2 Weeks',
    commitment: 'Data Gathering',
  },
  {
    step: '03',
    title: 'Strategy Presentation',
    description: 'We present our findings and a tailored financial plan and investment strategy. This is where you decide if you want to move forward.',
    duration: '60-90 Minutes',
    commitment: 'Review & Decide',
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'We handle all the paperwork and processes to onboard you as a client, transfer accounts, and implement the agreed-upon strategy.',
    duration: '2-4 Weeks',
    commitment: 'Onboarding',
  },
  {
    step: '05',
    title: 'Ongoing Management',
    description: 'We continuously monitor your portfolio, provide regular reporting, and meet periodically to review your progress and adjust as needed.',
    duration: 'Continuous',
    commitment: 'Long-Term Partnership',
  },
];

const Process = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Our Client Engagement Process
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-offwhite to-white border border-steel/20 rounded-lg p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl ${
                index >= 3 ? 'md:col-span-1 lg:col-span-1' : ''
              } ${index === 3 ? 'lg:col-start-2' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-6xl font-bold text-primary/20">{step.step}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-charcoal">{step.title}</h3>
              <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">{step.description}</p>
              <div className="mt-6 border-t border-steel/20 pt-4 flex justify-between text-charcoal/60">
                <span>{step.duration}</span>
                <span>{step.commitment}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link href="/contact" passHref>
            <span className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg cursor-pointer hover:bg-primary-600 transition-colors duration-300">
              Begin with a Discovery Meeting
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Adjust grid for 5 items - centering last two on the last row for medium screens
const ProcessWrapper = () => (
  <div className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
          Our Client Engagement Process
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
           <div key={index} className={`bg-gradient-to-br from-offwhite to-white border border-steel/20 rounded-lg p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl flex flex-col
             ${index === 3 ? 'sm:col-start-1 lg:col-start-auto' : ''}
             ${index === 4 ? 'sm:col-start-auto lg:col-start-auto' : ''}
             `}>
               <div className="flex-grow">
                <div className="flex items-start justify-between">
                    <span className="text-6xl font-bold text-primary/20">{step.step}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-charcoal">{step.title}</h3>
                <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">{step.description}</p>
                </div>
                <div className="mt-6 border-t border-steel/20 pt-4 flex justify-between text-charcoal/60">
                    <span>{step.duration}</span>
                    <span>{step.commitment}</span>
                </div>
           </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link href="/contact" passHref>
          <span className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg cursor-pointer hover:bg-primary-600 transition-colors duration-300">
            Begin with a Discovery Meeting
          </span>
        </Link>
      </div>
    </div>
  </div>
);


export default ProcessWrapper;