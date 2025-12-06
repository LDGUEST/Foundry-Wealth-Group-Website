import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MeetingBookingButton from './MeetingBookingButton';

const Hero = () => {
  return (
    <section className="py-24 text-center relative overflow-hidden bg-[#FAF9F6]">
      {/* Background Pattern Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/hero-background-pattern-2.0.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>
      
      {/* Content with relative positioning to appear above background */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
          ✓ Independent Fiduciary RIA • Series 65 Licensed
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-charcoal tracking-tight">
          Wealth Management for <br />
          <span className="text-primary">Discerning Investors</span>
        </h1>
        <p className="mt-6 text-xl text-charcoal/70 leading-relaxed">
          Independent financial advisory built on fiduciary excellence and specialized expertise.
        </p>
        <div className="mt-8 text-lg text-charcoal/70 leading-relaxed">
          <p>
            Foundry Wealth Group delivers institutional-quality investment management and comprehensive financial planning to professionals, executives, and business owners. Experience the clarity of independent advice, free from conflicts of interest.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <MeetingBookingButton variant="primary" size="lg" />
          <Link href="/process" passHref>
            <span className="inline-block w-full sm:w-auto bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-md font-semibold text-lg cursor-pointer hover:bg-primary/5 transition-colors duration-300">
              Learn About Our Approach
            </span>
          </Link>
        </div>
        <div className="mt-8 sm:hidden">
          <a href="tel:612-512-7507" className="text-lg font-semibold text-primary">
            📞 (612) 512-7507
          </a>
          <p className="text-xs text-charcoal/50 mt-1">Note: Phone number is a placeholder.</p>
        </div>
        <div className="mt-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-charcoal/80">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>100% Fiduciary</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Fee-Only Advisory</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Independent RIA</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>SEC Registered</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
