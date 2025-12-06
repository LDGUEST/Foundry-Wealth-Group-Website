'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

export default function Navigation() {
  const { user, isLoading } = useUser()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(pathname?.startsWith('/portal') || false)

  // Check if we're in portal
  const isInPortal = pathname?.startsWith('/portal')

  return (
    <nav className={`border-b border-steel/20 sticky top-0 z-50 bg-white transition-all duration-300 ${isInPortal && isMinimized ? 'h-12' : 'h-auto'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isInPortal && isMinimized ? (
          // Minimized view - just logo and expand button
          <div className="flex justify-between items-center h-12">
            <Logo />
            <button
              onClick={() => setIsMinimized(false)}
              className="text-charcoal hover:text-primary font-medium text-sm"
            >
              Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center h-20">
              {/* Logo - hidden when in portal since it's in PortalNav */}
              {!isInPortal && (
                <div className="flex items-center">
                  <Logo />
                </div>
              )}
              {isInPortal && (
                <div className="flex items-center w-0">
                  {/* Spacer to maintain layout */}
                </div>
              )}

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
                    {isInPortal ? (
                      <button
                        onClick={() => setIsMinimized(true)}
                        className="text-charcoal hover:text-primary font-medium text-sm transition-colors"
                      >
                        Minimize
                      </button>
                    ) : (
                      <Link
                        href="/portal"
                        className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium"
                      >
                        Client Portal
                      </Link>
                    )}
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
          </>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-steel/20">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>About</Link>

              {/* Mobile What We Do Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
                  className="text-charcoal hover:text-primary font-semibold text-sm flex items-center justify-between"
                >
                  <span>What We Do</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${whatWeDoOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {whatWeDoOpen && (
                  <div className="flex flex-col gap-2 mt-2 pl-4">
                    <Link href="/services/financial-planning" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Financial Planning</Link>
                    <Link href="/services/investment-management" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Investment Management</Link>
                    <Link href="/services/retirement-planning" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Retirement Planning</Link>
                    <Link href="/services/tax-strategies" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Tax-Efficient Strategies</Link>
                    <Link href="/services/business-owner-planning" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Business Owner Planning</Link>
                    <Link href="/services/estate-planning" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Estate Planning</Link>
                  </div>
                )}
              </div>

              <Link href="/testimonials" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
              <Link href="/contact" className="text-charcoal hover:text-primary font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              
              {/* Schedule Button */}
              <a
                href="https://urlgeni.us/excel/Foundry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule
              </a>

              {!isLoading && (
                user ? (
                  <>
                    <Link href="/portal" className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium text-center" onClick={() => setMobileMenuOpen(false)}>
                      Client Portal
                    </Link>
                    <a href="/api/auth/logout" className="text-charcoal hover:text-primary font-medium text-sm text-center" onClick={() => setMobileMenuOpen(false)}>
                      Logout
                    </a>
                  </>
                ) : (
                  <a href="/api/auth/login" className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium text-center" onClick={() => setMobileMenuOpen(false)}>
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
