'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    question: "What does it mean that you're a fiduciary?",
    answer:
      'As a fiduciary, we are legally and ethically bound to act in your best interest at all times. This is the highest standard of care in the financial industry. Our advice and recommendations are based solely on what is best for you, not on commissions or sales incentives.',
  },
  {
    question: 'How are you compensated?',
    answer:
      'We are a fee-only advisory firm. Our compensation comes directly from our clients as a percentage of assets under management (AUM).\n\n' +
      'Standard Fee Schedule (for traditional portfolios with moderate risk):\n' +
      '• First $500,000: 1.50% annually\n' +
      '• $500,001 - $1,000,000: 1.25% annually\n' +
      '• $1,000,001 - $2,000,000: 1.00% annually\n' +
      '• $2,000,001 - $5,000,000: 0.85% annually\n' +
      '• Above $5,000,000: 0.75% annually\n\n' +
      'Higher Risk Fee Schedule (for strategies involving higher risk, active management, or specialized assets):\n' +
      '• First $500,000: 2.50% annually\n' +
      '• $500,001 - $1,000,000: 2.00% annually\n' +
      '• $1,000,001 - $2,000,000: 1.75% annually\n' +
      '• $2,000,001 - $5,000,000: 1.50% annually\n' +
      '• Above $5,000,000: 1.00% annually\n\n' +
      'Fees are determined based on strategy involvement, risk level, client involvement, and total assets under management. This structure aligns our success with yours and eliminates commissions or third-party incentives.\n\n' +
      'For financial planning services, we may charge hourly fees ($100-$500 per hour) or fixed-fee projects ($1,000-$25,000) depending on complexity. Business consulting services are charged at $250-$750 per hour or on a project basis.',
  },
  {
    question: 'What makes you different from a broker at a large firm?',
    answer:
      'Our independence is a key differentiator. Unlike brokers at large firms who may be incentivized to sell proprietary products, we have the freedom to choose from the entire universe of investment options to find the best solutions for you. We are not subject to sales quotas or corporate pressures, allowing for truly objective advice.\n\n' +
      'Additionally, we do not maintain custody of client assets. Your funds are held at independent, qualified custodians (Charles Schwab & Co., Inc. for traditional securities and Anchorage Digital Bank for digital assets), providing an extra layer of security and transparency. We never have the ability to withdraw your funds—only to manage your investments and deduct agreed-upon advisory fees.',
  },
  {
    question: 'What is your minimum account size?',
    answer:
      'We generally require a minimum account size of $10,000 for investment management services. This minimum is often waived or reduced at our discretion based on:\n' +
      '• The complexity of your financial situation\n' +
      '• The potential for additional assets to be added over time\n' +
      '• Family relationships with existing clients\n' +
      '• The nature of our advisory relationship\n\n' +
      'For financial planning-only engagements, there is no minimum asset requirement.',
  },
  {
    question: 'How often will we meet?',
    answer:
      'We believe in proactive and consistent communication. For investment management clients, we conduct formal account reviews at least quarterly and provide quarterly performance reports. We are always available for meetings as needed whenever you have questions or experience life changes.\n\n' +
      'For financial planning clients, meeting frequency is customized based on your engagement agreement and needs. Our goal is to build a long-term partnership, and we remain accessible throughout our relationship.',
  },
  {
    question: 'What sets your investment approach apart?',
    answer:
      'Our investment approach is evidence-based, disciplined, and focused on the long term. We emphasize:\n\n' +
      'Diversification Across Asset Classes - We manage traditional securities (stocks, bonds, ETFs, mutual funds), digital assets (cryptocurrency through qualified custody), and alternative investments for qualified clients, creating truly comprehensive portfolios.\n\n' +
      'Cost Control and Tax Efficiency - We focus on strategic use of tax-advantaged accounts, tax-loss harvesting, and consideration of tax implications in all investment decisions.\n\n' +
      'Comprehensive Asset Management - Traditional securities are held at Charles Schwab & Co., Inc., while cryptocurrency holdings are custodied at Anchorage Digital Bank, a qualified institutional custodian. We also provide guidance on held-away retirement accounts (401(k), 403(b)) through third-party platforms.\n\n' +
      'Integrated Wealth Management - We connect your personal finances, business operations, and investment strategy into one cohesive plan. Our services extend beyond investment management to include business consulting, AI implementation, bookkeeping services, and strategic planning.\n\n' +
      'Specialized Expertise - We offer insights in emerging sectors including alternative energy, technology, and cryptocurrency, providing a unique edge for clients interested in these opportunities.',
  },
  {
    question: 'Do you work with clients outside of Minneapolis?',
    answer:
      'Yes. While we are registered with the State of Minnesota and based in Minneapolis, we leverage modern technology to serve clients throughout Minnesota and potentially beyond (subject to state registration requirements). We work with clients remotely through video conferencing, secure client portals, and phone calls, ensuring you receive high-quality service regardless of your location within our service area.',
  },
  {
    question: 'What credentials do you hold?',
    answer:
      'Our founder, Logan Guest, holds:\n' +
      '• FINRA Series 65 - Uniform Investment Adviser Law Examination, the primary qualification for investment adviser representatives\n' +
      '• Managing Member & Chief Compliance Officer of Foundry Wealth Group LLC\n\n' +
      'Foundry Wealth Group LLC is a registered investment adviser with the State of Minnesota. Registration does not imply a certain level of skill or training, but it does mean we are subject to regulatory oversight and examination by the Minnesota Department of Commerce.',
  },
  {
    question: 'How do you handle market downturns?',
    answer:
      'We approach market downturns with a disciplined, long-term perspective. Our strategies are built to be resilient through various market cycles. During volatile periods, we focus on:\n\n' +
      'Clear Communication - We keep you informed and reinforce the principles of your financial plan, helping you stay focused on long-term goals rather than short-term market noise.\n\n' +
      'Strategic Opportunities - Market downturns often present opportunities for tax-loss harvesting, rebalancing to target allocations at more attractive valuations, and deploying cash reserves strategically.\n\n' +
      'Risk Management - We ensure your portfolio remains aligned with your risk tolerance and time horizon, making adjustments only when warranted by your personal circumstances, not market sentiment.\n\n' +
      'Asset Security - Your assets remain secure at independent, qualified custodians (Charles Schwab and Anchorage Digital Bank) regardless of market conditions. We never have custody of your funds.',
  },
  {
    question: 'What is the first step to working together?',
    answer:
      'The first step is an informal, no-obligation Discovery Meeting. This conversation allows us to:\n' +
      '• Get to know each other and discuss your financial goals\n' +
      '• Understand your current financial situation and challenges\n' +
      '• Explain our services, approach, and fee structure\n' +
      '• Determine if our services are a good fit for your needs\n\n' +
      'You can schedule this meeting by:\n' +
      '• Email: logan@foundrywealth.group\n' +
      '• Phone: (612) 512-7507\n' +
      '• Website: foundrywealth.group\n\n' +
      'There is no cost or obligation for this initial consultation.',
  },
  {
    question: 'What types of clients do you work with?',
    answer:
      'We work with:\n' +
      '• Individuals and families seeking comprehensive wealth management\n' +
      '• High net worth individuals with complex financial situations\n' +
      '• Business owners who need integrated personal and business financial guidance\n' +
      '• Professionals navigating career transitions or significant financial decisions\n' +
      '• Forward-thinking investors exploring traditional and alternative asset classes including cryptocurrency\n\n' +
      'Our integrated approach is particularly valuable for clients who want a single adviser who understands both their personal wealth and business operations.',
  },
  {
    question: 'How are my assets protected?',
    answer:
      'Client asset protection is built into our business structure:\n\n' +
      'Independent Custody - All client assets are held at independent, qualified custodians: Charles Schwab & Co., Inc. (traditional securities) and Anchorage Digital Bank (digital assets). We do not maintain custody of client funds or securities.\n\n' +
      'Limited Authority - Our authority is strictly limited to: (1) placing trade orders for securities purchases and sales, and (2) deducting agreed-upon advisory fees. We cannot withdraw funds from your accounts for any other purpose.\n\n' +
      'Regulatory Oversight - As a registered investment adviser with the State of Minnesota, we are subject to regulatory examination and must comply with strict recordkeeping, disclosure, and fiduciary duty requirements.\n\n' +
      'Professional Liability Insurance - We maintain Errors & Omissions (E&O) insurance to protect clients in the unlikely event of professional negligence.\n\n' +
      'Transparent Reporting - You receive account statements directly from your custodian (not from us), providing independent verification of all account activity and balances.',
  },
  {
    question: 'Do you offer cryptocurrency investment services?',
    answer:
      'Yes. We provide strategic guidance and portfolio management for digital assets including Bitcoin, Ethereum, and other cryptocurrencies. Key features of our cryptocurrency services:\n\n' +
      'Qualified Custody - All cryptocurrency holdings are custodied at Anchorage Digital Bank, an OCC-chartered national trust bank and qualified custodian specifically designed for digital assets.\n\n' +
      'Risk-Appropriate Allocation - We typically recommend cryptocurrency allocations of 1-20% of portfolio value, depending on your risk tolerance, time horizon, and financial objectives.\n\n' +
      'Comprehensive Integration - Cryptocurrency holdings are integrated into your overall portfolio strategy and asset allocation, not managed in isolation.\n\n' +
      'Education and Guidance - We help you understand the risks, opportunities, and tax implications of digital asset investing.\n\n' +
      'Cryptocurrency investments are subject to significant volatility and risk, and may not be suitable for all investors. We carefully assess suitability before recommending digital asset allocations.',
  },
  {
    question: 'What business services do you offer?',
    answer:
      'Beyond investment management, we provide comprehensive business consulting services including:\n' +
      '• Business Formation and Structure - Entity selection, formation assistance, and operational setup for new businesses.\n' +
      '• AI Implementation and Technology Integration - Strategic guidance on incorporating artificial intelligence and technology solutions to improve business efficiency and competitiveness.\n' +
      '• Bookkeeping and Financial Management - Professional bookkeeping services, financial statement preparation, and cash flow management through our affiliated entity, Guest Ventures LLC.\n' +
      '• Succession Planning and Exit Strategy - Comprehensive planning for business transitions, sales, or generational transfers.\n' +
      '• Growth Strategy Development - Strategic planning for business expansion, capital structure optimization, and operational scaling.\n\n' +
      'Business consulting fees are separate from investment advisory fees and are charged on an hourly ($250-$750/hour) or project basis depending on complexity and scope.',
  },
];

// START: Type Definitions (from fix/typescript-build-errors)
interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  onClick: () => void;
}
// END: Type Definitions

// START: FaqItem Component (using types)
const FaqItem = ({ item, isOpen, onClick }: FaqItemProps) => (
  <div className="border-b border-steel/20">
    <button
      className="w-full text-left py-6 flex justify-between items-center"
      onClick={onClick}
    >
      <span className="text-xl font-semibold text-charcoal">{item.question}</span>
      <span className="text-2xl text-primary">{isOpen ? '-' : '+'}</span>
    </button>
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className="pb-6 text-lg text-charcoal/70 leading-relaxed whitespace-pre-line">
          {item.answer}
        </div>
      </div>
    </div>
  </div>
);
// END: FaqItem Component

const FAQ = () => {
  // START: State initialization (using types)
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
  // END: State initialization
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <button
            onClick={() => setIsSectionOpen(!isSectionOpen)}
            className="flex items-center justify-center gap-3 mx-auto group"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
              Frequently Asked Questions
            </h2>
            <span className="text-3xl text-primary transition-transform duration-300 group-hover:scale-110">
              {isSectionOpen ? '−' : '+'}
            </span>
          </button>
        </div>
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isSectionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <FaqItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
            <div className="mt-20 text-center">
              <p className="text-sm text-charcoal/60 mb-4">
                Have more questions? Contact us:
              </p>
              <p className="text-sm text-charcoal/70 mb-2">
                Logan Guest | Foundry Wealth Group LLC
              </p>
              <p className="text-sm text-charcoal/70 mb-2">
                Email: <a href="mailto:logan@foundrywealth.group" className="text-primary hover:underline">logan@foundrywealth.group</a> | Phone: <a href="tel:612-512-7507" className="text-primary hover:underline">(612) 512-7507</a>
              </p>
              <p className="text-sm text-charcoal/70 mb-6">
                Website: <a href="https://foundrywealth.group" className="text-primary hover:underline">foundrywealth.group</a>
              </p>
              <p className="text-xs text-charcoal/50 mb-6">
                Foundry Wealth Group LLC is a registered investment adviser with the State of Minnesota. Registration does not imply a certain level of skill or training.
              </p>
              <Link href="/contact" passHref>
                <span className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg cursor-pointer hover:bg-primary-600 transition-colors duration-300">
                  Schedule a Discovery Meeting
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;