import React from 'react';
import Process from '@/components/Process';
import ContactCTA from '@/components/ContactCTA';

const ProcessPage = () => {
  return (
    <main>
      <section className="py-24 bg-gradient-to-b from-white to-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal tracking-tight">
            How We Work Together
          </h1>
          <p className="mt-6 text-xl text-charcoal/70 leading-relaxed">
            A clear and structured process designed for your success.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">What to Expect</h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Our engagement process is designed to be thorough, transparent, and collaborative. We move at your pace, ensuring you have a complete understanding of our recommendations and feel confident at every stage of our partnership.
            </p>
          </div>
        </div>
      </section>

      <Process />

      <section className="py-24 bg-offwhite/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
              Investment Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-offwhite border border-steel/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-charcoal">What We Believe</h3>
              <ul className="mt-4 text-lg text-charcoal/70 leading-relaxed list-disc list-inside space-y-2">
                <li>Markets are largely efficient; long-term asset allocation is key.</li>
                <li>Costs, taxes, and investor behavior are the primary determinants of return.</li>
                <li>Global diversification reduces risk and improves consistency.</li>
                <li>A disciplined, evidence-based approach outperforms emotional decision-making.</li>
                <li>Your financial plan should be the blueprint for your investment strategy.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-offwhite border border-red-500/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-charcoal">What We Don't Do</h3>
              <ul className="mt-4 text-lg text-charcoal/70 leading-relaxed list-disc list-inside space-y-2">
                <li>Attempt to time the market or make short-term predictions.</li>
                <li>Chase performance or invest in the latest fads.</li>
                <li>Utilize high-cost, opaque, or overly complex financial products.</li>
                <li>Operate with the conflicts of interest inherent in commission-based models.</li>
                <li>Make unexplained changes to your long-term strategy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
              Transparent Fee Structure
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Our fee-only structure is simple, transparent, and aligns our interests with yours.
            </p>
            <div className="mt-12 text-left border border-steel/20 rounded-lg p-8 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-charcoal">Investment Management</h3>
                <ul className="mt-2 text-lg text-charcoal/70 list-disc list-inside">
                  <li><strong>First $1 Million:</strong> 1.00%</li>
                  <li><strong>Next $1 Million:</strong> 0.75%</li>
                  <li><strong>Above $2 Million:</strong> Negotiable</li>
                </ul>
              </div>
              <div className="border-t border-steel/20 pt-4">
                <h3 className="text-2xl font-bold text-charcoal">Financial Planning</h3>
                <p className="mt-2 text-lg text-charcoal/70">
                  Comprehensive financial planning services are included for all investment management clients. For standalone financial planning, fees begin at $2,500 and vary based on complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
};

export default ProcessPage;
