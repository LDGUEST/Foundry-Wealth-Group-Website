import React from 'react';
import Team from '@/components/Team';
import Process from '@/components/Process';
import ContactCTA from '@/components/ContactCTA';

const AboutPage = () => {
  return (
    <main>
      <section className="py-24 bg-gradient-to-b from-white to-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal tracking-tight">
            About Foundry Wealth Group
          </h1>
          <p className="mt-6 text-xl text-charcoal/70 leading-relaxed">
            Independent, fiduciary-focused wealth management.
          </p>
        </div>
      </section>

      <Team />

      <section className="py-24 bg-offwhite/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-lg text-charcoal/70 leading-relaxed space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Mission</h2>
            <p>
              Our mission is to provide disciplined, evidence-based investment management and financial planning that empowers our clients to achieve their long-term financial goals. We are committed to delivering this with the highest level of integrity and transparency, always acting as a fiduciary.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Why Independence Matters</h2>
            <p>
              As an independent Registered Investment Advisor (RIA), we are not tied to any single company's products. This freedom from proprietary constraints allows us to provide objective, unbiased advice and select from a vast universe of financial instruments to construct portfolios that truly serve our clients' best interests.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">The Fiduciary Standard</h2>
            <p>
              The fiduciary standard is the bedrock of our practice. It legally requires us to put your interests first. This is a higher standard than the "suitability" standard that brokers often follow, ensuring that our recommendations are free from the conflicts of interest that can arise from commissions or sales incentives.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Approach to Wealth Management</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive financial planning that integrates all aspects of your financial life.</li>
              <li>Investment strategies grounded in academic research and long-term principles.</li>
              <li>A focus on tax efficiency to maximize your net returns.</li>
              <li>Transparent, fee-only compensation that aligns our interests with yours.</li>
              <li>Proactive communication and a commitment to client education.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Specialized Expertise</h2>
            <p>
              In addition to broad market knowledge, we bring specialized expertise in the nuclear energy and technology sectors. This allows us to offer unique insights and identify potential growth opportunities for clients interested in these innovative and complex fields, providing a level of analysis that is rare in the advisory space.
            </p>
          </div>
        </div>
      </section>

      <Process />
      <ContactCTA />
    </main>
  );
};

export default AboutPage;
