'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FileText, Upload, User, Home, Menu } from 'lucide-react';
import Logo from '@/components/Logo';

const navItems = [
  { href: '/portal', label: 'Dashboard', icon: Home },
  { href: '/portal/forms', label: 'Forms', icon: FileText },
  { href: '/portal/documents', label: 'Documents', icon: Upload },
  { href: '/portal/profile', label: 'Profile', icon: User },
];

export function PortalNav() {
  const pathname = usePathname();
  const { user } = useUser();
  const [showMainNav, setShowMainNav] = useState(false);

  return (
    <>
      {/* Main Navigation - shown when Menu button is clicked */}
      {showMainNav && (
        <nav className="border-b border-steel/20 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Logo />
              </div>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
                  About
                </Link>
                <div className="relative group">
                  <button className="text-charcoal hover:text-primary font-medium text-sm transition-colors flex items-center gap-1">
                    What We Do
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-steel/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link href="/services/financial-planning" className="block px-4 py-2 text-sm text-charcoal hover:bg-offwhite hover:text-primary transition-colors">
                        Financial Planning
                      </Link>
                      <Link href="/services/investment-management" className="block px-4 py-2 text-sm text-charcoal hover:bg-offwhite hover:text-primary transition-colors">
                        Investment Management
                      </Link>
                      <Link href="/services/retirement-planning" className="block px-4 py-2 text-sm text-charcoal hover:bg-offwhite hover:text-primary transition-colors">
                        Retirement Planning
                      </Link>
                      <Link href="/services/tax-strategies" className="block px-4 py-2 text-sm text-charcoal hover:bg-offwhite hover:text-primary transition-colors">
                        Tax-Efficient Strategies
                      </Link>
                      <Link href="/services/business-owner-planning" className="block px-4 py-2 text-sm text-charcoal hover:bg-offwhite hover:text-primary transition-colors">
                        Business Owner Planning
                      </Link>
                      <Link href="/services/estate-planning" className="block px-4 py-2 text-sm text-charcoal hover:bg-offwhite hover:text-primary transition-colors">
                        Estate Planning
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/testimonials" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
                  Testimonials
                </Link>
                <Link href="/contact" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
                  Contact
                </Link>
              </div>
              <button
                onClick={() => setShowMainNav(false)}
                className="text-charcoal hover:text-primary font-medium text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Portal Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {/* Always show logo in portal nav */}
              <Link href="/portal" className="flex items-center">
                <Logo />
              </Link>
            
            <div className="hidden md:flex gap-6">
              {navItems.map(item => {
                const Icon = item.icon;
                let isActive = false;
                
                if (item.href === '/portal') {
                  // Dashboard is only active on exact match
                  isActive = pathname === '/portal';
                } else {
                  // Other items are active if pathname starts with their href
                  isActive = pathname.startsWith(item.href);
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                      isActive
                        ? 'bg-[#7A0026] text-white'
                        : 'text-[#36454F] hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {user && (
              <div className="hidden sm:block text-sm text-gray-600 truncate max-w-[150px] md:max-w-none">
                {user.name || user.email}
              </div>
            )}
            <button
              onClick={() => setShowMainNav(!showMainNav)}
              className="bg-[#7A0026] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#7A0026]/90 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Menu size={16} />
              Menu
            </button>
            <a
              href="/api/auth/logout?returnTo=/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 text-sm font-medium transition-colors"
            >
              Sign Out
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

