import React from 'react';
import Image from 'next/image';
import { BuildingLibraryIcon, LockClosedIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const TrustIndicators = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-offwhite border-y border-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Why Choose Foundry Wealth Group
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div className="p-3 md:p-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">Trader</h3>
            <p className="mt-2 text-sm md:text-lg text-charcoal/70 leading-tight">For Nearly a Decade</p>
            <p className="text-xs md:text-md text-charcoal/60 leading-tight mt-1">Financial Markets & Economic Analysis</p>
          </div>
          <div className="p-3 md:p-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">8</h3>
            <p className="mt-2 text-sm md:text-lg text-charcoal/70 leading-tight">Years in Financial Industry</p>
            <p className="text-xs md:text-md text-charcoal/60 leading-tight mt-1">Comprehensive Experience</p>
          </div>
          <div className="p-3 md:p-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">2</h3>
            <p className="mt-2 text-sm md:text-lg text-charcoal/70 leading-tight">Years Experience</p>
            <p className="text-xs md:text-md text-charcoal/60 leading-tight mt-1">Portfolio Management & Advisory</p>
          </div>
          <div className="p-3 md:p-4">
            <h3 className="text-xl md:text-3xl font-bold text-primary break-words">Independent</h3>
            <p className="mt-2 text-sm md:text-lg text-charcoal/70 leading-tight">RIA Structure</p>
            <p className="text-xs md:text-md text-charcoal/60 leading-tight mt-1">No Conflicts of Interest</p>
          </div>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center max-w-6xl mx-auto">
          <div className="p-3 md:p-4 flex flex-col items-center">
            <BuildingLibraryIcon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h4 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-charcoal leading-tight">100% Fiduciary</h4>
            <p className="mt-1 md:mt-2 text-xs md:text-sm text-charcoal/60 leading-tight">Always In Your Interest</p>
          </div>
          <div className="p-3 md:p-4 flex flex-col items-center">
            <LockClosedIcon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h4 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-charcoal leading-tight">Client Privacy</h4>
          </div>
          <div className="p-3 md:p-4 flex flex-col items-center">
            <BriefcaseIcon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h4 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-charcoal leading-tight">4 Years Business Consulting</h4>
          </div>
          <div className="p-3 md:p-4 flex flex-col items-center">
            <BuildingLibraryIcon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h4 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-charcoal leading-tight">Series 65</h4>
            <p className="mt-1 md:mt-2 text-xs md:text-sm text-charcoal/60 leading-tight">Licensed Advisor</p>
          </div>
        </div>

        {/* Custody Statement */}
        <div className="mt-20 border-t border-steel/20 pt-16">
          <div className="text-center max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-charcoal mb-6">
              Institutional-Grade Custody
            </h3>
            <p className="text-2xl text-charcoal/80 mb-12 leading-relaxed font-medium">
              Custody provided by Charles Schwab & Anchorage Digital
            </p>

            {/* Custodian Logos */}
            <div className="flex flex-row items-center justify-center gap-4 md:gap-20 mb-10">
              {/* Charles Schwab Logo */}
              <div className="flex flex-col items-center flex-1 max-w-[280px] md:max-w-none">
                <div className="bg-white p-4 md:p-8 rounded-lg border border-steel/20 shadow-sm w-full h-24 md:h-32 flex items-center justify-center">
                  <a 
                    href="https://advisorservices.schwab.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <span className="text-charcoal font-bold text-lg md:text-2xl tracking-tight">
                      Charles <span className="text-[#4A90E2]">Schwab</span>
                    </span>
                  </a>
                </div>
                <p className="text-xs md:text-base text-charcoal/70 mt-2 md:mt-4 font-medium">Traditional Assets</p>
              </div>

              {/* Anchorage Digital Logo */}
              <div className="flex flex-col items-center flex-1 max-w-[280px] md:max-w-none">
                <div className="bg-charcoal p-4 md:p-8 rounded-lg border border-steel/20 shadow-sm w-full h-24 md:h-32 flex items-center justify-center">
                  <a 
                    href="https://www.anchorage.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                  >
                    <Image
                      src="/logos/anchorage-logo.svg"
                      alt="Anchorage Digital"
                      width={157}
                      height={36}
                      className="object-contain w-auto h-6 md:h-9"
                    />
                  </a>
                </div>
                <p className="text-xs md:text-base text-charcoal/70 mt-2 md:mt-4 font-medium">Digital Assets</p>
              </div>
            </div>

            <p className="text-lg text-charcoal/70 mt-10 max-w-3xl mx-auto leading-relaxed">
              Your assets are held with leading financial institutions, providing institutional-grade security,
              transparency, and regulatory oversight. We never take custody of client assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
