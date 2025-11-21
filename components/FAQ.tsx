'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    question: "What does it mean that you're a fiduciary?",
    answer:
      'As a fiduciary, we are legally and ethically bound to act in your best interest at all times. This is the highest standard of care in the financial industry, eliminating conflicts of interest that are common at traditional brokerage firms. Our advice and recommendations are based solely on what is best for you.',
  },
  {
    question: 'How are you compensated?',
    answer:
      'We are a fee-only advisory firm. Our compensation comes directly from our clients, typically as a percentage of assets under management (AUM). Our fees range from 0.75% to 1.25% annually, depending on the complexity and size of the portfolio. This structure aligns our success with yours and removes commissions or third-party incentives.',
  },
  {
    question: 'What makes you different from a broker at a large firm?',
    answer:
      'Our independence is a key differentiator. Unlike brokers at large firms who may be incentivized to sell proprietary products, we have the freedom to choose from the entire universe of investment options to find the best solutions for you. We are not subject to sales quotas or corporate pressures, allowing for truly objective advice.',
  },
  {
    question: 'What is your minimum account size?',
    answer:
      'We typically work with clients who have a minimum of $250,000 in investable assets. This allows us to provide the comprehensive, personalized level of service that our clients deserve. However, we do make exceptions for individuals with unique circumstances and strong growth potential, so we encourage you to reach out.',
  },
  {
    question: 'How often will we meet?',
    answer:
      'We believe in proactive and consistent communication. At a minimum, we conduct annual in-depth reviews. However, we are always available for meetings as needed and provide quarterly performance reports. Our goal is to build a long-term partnership, and we are accessible whenever you have questions or life changes.',
  },
  {
    question: 'What sets your investment approach apart?',
    answer:
      'Our investment approach is evidence-based, disciplined, and focused on the long term. We emphasize diversification, cost control, and tax efficiency. Additionally, our specialized expertise in sectors like nuclear energy and technology allows us to offer insights that go beyond conventional investment strategies, providing a unique edge for interested clients.',
  },
  {
    question: 'Do you work with clients outside of Minneapolis?',
    answer:
      'Yes. While we are based in Minneapolis, we leverage modern technology to serve clients nationwide. We are equipped to work with you remotely through video conferencing, secure document portals, and phone calls, ensuring you receive the same high level of service regardless of your location.',
  },
  {
    question: 'What credentials do you hold?',
    answer:
      'Our founder, Logan Kahnke, is a Series 65 licensed Investment Advisor Representative. This license is a critical qualification for investment advisers, covering a broad range of topics including laws, regulations, and ethics. This, combined with our fiduciary commitment, ensures we are held to a high professional standard.',
  },
  {
    question: 'How do you handle market downturns?',
    answer:
      'We approach market downturns with a disciplined, long-term perspective. Our strategies are built to be resilient through various market cycles. During volatile periods, we focus on communication, reinforcing the principles of your financial plan, and identifying potential strategic opportunities, such as tax-loss harvesting or rebalancing.',
  },
  {
    question: 'What is the first step to working together?',
    answer:
      'The first step is an informal, no-obligation Discovery Meeting. This 30-minute conversation allows us to get to know each other, discuss your financial goals, and determine if our services are a good fit for your needs. You can schedule this meeting directly through our website.',
  },
];

interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  onClick: () => void;
}

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
        <p className="pb-6 text-lg text-charcoal/70 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
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
          <Link href="/contact" passHref>
            <span className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg cursor-pointer hover:bg-primary-600 transition-colors duration-300">
              Schedule a Discovery Meeting
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
