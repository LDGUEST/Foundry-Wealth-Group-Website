import React from 'react';
import { BuildingLibraryIcon, LockClosedIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const TrustIndicators = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-offwhite border-y border-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Why Choose Foundry Wealth Group
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-3xl font-bold text-primary">3.5+</h3>
            <p className="mt-2 text-lg text-charcoal/70">Years Experience</p>
            <p className="text-md text-charcoal/60">Portfolio Management</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-primary">100%</h3>
            <p className="mt-2 text-lg text-charcoal/70">Fiduciary Standard</p>
            <p className="text-md text-charcoal/60">Always In Your Interest</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-primary">Independent</h3>
            <p className="mt-2 text-lg text-charcoal/70">RIA Structure</p>
            <p className="text-md text-charcoal/60">No Conflicts of Interest</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-primary">Series 65</h3>
            <p className="mt-2 text-lg text-charcoal/70">Licensed Advisor</p>
            <p className="text-md text-charcoal/60">Investment Advisor Rep</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="p-4 flex flex-col items-center">
            <BuildingLibraryIcon className="w-12 h-12 text-primary" />
            <h4 className="mt-4 text-xl font-semibold text-charcoal">SEC Registered</h4>
          </div>
          <div className="p-4 flex flex-col items-center">
            <LockClosedIcon className="w-12 h-12 text-primary" />
            <h4 className="mt-4 text-xl font-semibold text-charcoal">Client Privacy</h4>
          </div>
          <div className="p-4 flex flex-col items-center">
            <ChartBarIcon className="w-12 h-12 text-primary" />
            <h4 className="mt-4 text-xl font-semibold text-charcoal">Transparent Reporting</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
