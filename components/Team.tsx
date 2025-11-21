import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChartBarIcon, CheckCircleIcon, BoltIcon } from '@heroicons/react/24/outline';

const Team = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">Meet Your Advisor</h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="relative w-full h-[32rem] rounded-lg overflow-hidden">
              <Image
                src="/My Professional Headshot.png"
                alt="Logan Guest - Founder & Investment Advisor Representative"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold">Logan Guest</h3>
            <p className="text-lg mb-4">Founder & Investment Advisor Representative</p>
            <p className="mb-4">Logan has a degree in finance and holds a Series 65 license, providing him with a robust understanding of investment strategies and client needs.</p>
            <p className="mb-4">With years of experience in investment management, Logan is dedicated to helping clients achieve their financial goals.</p>
            <p className="mb-4">He emphasizes transparency and communication, ensuring clients are informed and confident in their financial decisions.</p>
            <h4 className="text-xl font-bold mt-12">Professional Background</h4>
            <ul className="list-disc list-inside ml-5">
              <li>Extensive experience in financial planning and wealth management.</li>
              <li>Proven track record of guiding clients through market fluctuations.</li>
              <li>Strong commitment to continuous education and professional development.</li>
              <li>Active member of local financial advisory groups.</li>
              <li>Regularly contributes to finance-related publications and workshops.</li>
              <li>Recognized for exceptional client service and satisfaction.</li>
              <li>Passionate about community involvement and mentorship.</li>
            </ul>
            <h4 className="text-xl font-bold mt-12">Investment Philosophy</h4>
            <ul className="list-disc list-inside ml-5">
              <li>Focus on long-term growth and sustainability.</li>
              <li>Diversification to manage risk effectively.</li>
              <li>Personalized strategies aligned with client goals.</li>
              <li>Continuous monitoring and adjustment of investment plans.</li>
            </ul>
            <h4 className="text-xl font-bold mt-12">Core Competencies</h4>
            <ul className="list-disc list-inside ml-5">
              <li className="flex items-center"><ChartBarIcon className="h-5 w-5 mr-2" /><span>Investment Management</span></li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-2" /><span>Client Engagement</span></li>
              <li className="flex items-center"><BoltIcon className="h-5 w-5 mr-2" /><span>Strategic Planning</span></li>
            </ul>
            <Link href="/contact">
              <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400">Schedule a Conversation</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;