'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const { user, isLoading } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-steel/20 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-charcoal tracking-tight hover:text-primary transition-colors">
              Foundry Wealth Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
              About
            </Link>
            <Link href="/services" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-charcoal hover:text-primary font-medium text-sm transition-colors">
              Contact
            </Link>
            
            {!isLoading && (
              <>
                {user ? (
                  <>
                    <Link
                      href="/profile"
                      className="text-charcoal hover:text-primary font-medium text-sm transition-colors"
                    >
                      Profile
                    </Link>
                    <a
                      href="/api/auth/logout"
                      className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium"
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
              <Link href="/services" className="text-charcoal hover:text-primary font-medium text-sm">Services</Link>
              <Link href="/contact" className="text-charcoal hover:text-primary font-medium text-sm">Contact</Link>
              {!isLoading && user && (
                <Link href="/profile" className="text-charcoal hover:text-primary font-medium text-sm">Profile</Link>
              )}
              {!isLoading && (
                user ? (
                  <a href="/api/auth/logout" className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-700 transition-all text-sm font-medium text-center">
                    Logout
                  </a>
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
