'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

export default function Navigation() {
  const { user, isLoading } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-steel/20 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
              About
            </Link>

            {/* What We Do Dropdown */}
            <div className="relative group">
              <button className="text-charcoal hover:text-primary font-medium text-sm transition-colors flex items-center gap-1">
                What We Do
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
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
            
            {!isLoading && (
              <>
                {user ? (
                  <>
                    <Link
                      href="/portal"
                      className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium"
                    >
                      Client Portal
                    </Link>
                    <a
                      href="/api/auth/logout"
                      className="text-charcoal hover:text-primary font-medium text-sm transition-colors"
                    >
                      Logout
                    </a>
                  </>
                ) : (
                  <a
                    href="/api/auth/login"
                    className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium"
                  >
                    Client Portal
                  </a>
                )}
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-steel/20">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-charcoal hover:text-primary font-medium text-sm">Home</Link>
              <Link href="/about" className="text-charcoal hover:text-primary font-medium text-sm">About</Link>

              {/* Mobile What We Do Section */}
              <div className="flex flex-col gap-2">
                <span className="text-charcoal font-semibold text-sm">What We Do</span>
                <Link href="/services/financial-planning" className="text-charcoal hover:text-primary font-medium text-sm pl-4">Financial Planning</Link>
                <Link href="/services/investment-management" className="text-charcoal hover:text-primary font-medium text-sm pl-4">Investment Management</Link>
                <Link href="/services/retirement-planning" className="text-charcoal hover:text-primary font-medium text-sm pl-4">Retirement Planning</Link>
                <Link href="/services/tax-strategies" className="text-charcoal hover:text-primary font-medium text-sm pl-4">Tax-Efficient Strategies</Link>
                <Link href="/services/business-owner-planning" className="text-charcoal hover:text-primary font-medium text-sm pl-4">Business Owner Planning</Link>
                <Link href="/services/estate-planning" className="text-charcoal hover:text-primary font-medium text-sm pl-4">Estate Planning</Link>
              </div>

              <Link href="/testimonials" className="text-charcoal hover:text-primary font-medium text-sm">Testimonials</Link>
              <Link href="/contact" className="text-charcoal hover:text-primary font-medium text-sm">Contact</Link>
              {!isLoading && (
                user ? (
                  <>
                    <Link href="/portal" className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium text-center">
                      Client Portal
                    </Link>
                    <a href="/api/auth/logout" className="text-charcoal hover:text-primary font-medium text-sm text-center">
                      Logout
                    </a>
                  </>
                ) : (
                  <a href="/api/auth/login" className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium text-center">
                    Client Portal
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
