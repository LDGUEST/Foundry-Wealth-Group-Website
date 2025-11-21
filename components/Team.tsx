import React from 'react';
import Image from 'next/image';
import { Link } from 'next/link';
import { PhoneIcon } from '@heroicons/react/outline';

const Team = () => {
    return (
        <div className="team-container">
            <h1>Meet Logan Guest</h1>
            <Image 
                src="/My Professional Headshot.png" 
                alt="Logan Guest Professional Headshot" 
                width={200} 
                height={200} 
            />
            <p>
                Logan Guest has 2 years of experience as a portfolio manager,
                over a decade trading, 6 years as an educator, and nearly 9 years
                in financial operations. He has specialized knowledge in the
                nuclear energy and technology sectors, holding a degree in finance
                specializing in financial markets and the economic impacts on markets.
                Logan also holds a Series 65 license.
            </p>
            <section>
                <h2>Professional Background</h2>
                <ul>
                    <li>Portfolio Manager</li>
                    <li>Trader</li>
                    <li>Financial Educator</li>
                    <li>Financial Operations Specialist</li>
                </ul>
            </section>
            <section>
                <h2>Investment Philosophy</h2>
                <p>
                    Logan’s investment philosophy centers around evidence-based
                    research, tax-efficient strategies, a disciplined long-term
                    approach, and a focus on what you can control.
                </p>
            </section>
            <section>
                <h2>Core Competencies</h2>
                <ul className="competencies">
                    <li><PhoneIcon className="icon" /> Portfolio Management</li>
                    <li><PhoneIcon className="icon" /> Financial Planning</li>
                    <li><PhoneIcon className="icon" /> Sector Expertise</li>
                </ul>
            </section>
            <Link href="/schedule-conversation">
                <button>Schedule a Conversation</button>
            </Link>
        </div>
    );
};

export default Team;