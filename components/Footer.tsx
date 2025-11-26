import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Foundry Wealth Group</h3>
            <p className="text-steel text-sm leading-relaxed mb-4">
              Independent Registered Investment Advisor
            </p>
            <p className="text-steel text-sm leading-relaxed">
              Series 65 Licensed • Fiduciary Standard
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-steel hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-steel hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services/financial-planning" className="text-steel hover:text-white transition-colors text-sm">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-steel hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-steel hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-sm">
                <a
                  href="mailto:info@foundrywealth.group"
                  className="text-steel hover:text-white transition-colors"
                >
                  info@foundrywealth.group
                </a>
              </p>
              <p className="text-steel text-sm leading-relaxed">
                Custody provided by<br />
                Charles Schwab & Anchorage Digital
              </p>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Compliance</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/form-adv" className="text-steel hover:text-white transition-colors text-sm">
                  Form ADV
                </Link>
              </li>
              <li>
                <Link href="/client-relationship-summary" className="text-steel hover:text-white transition-colors text-sm">
                  Client Relationship Summary
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-steel hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/code-of-ethics" className="text-steel hover:text-white transition-colors text-sm">
                  Code of Ethics
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-steel/30 mt-12 pt-8">
          <p className="text-steel/80 text-xs leading-relaxed text-center max-w-4xl mx-auto mb-6">
            Investment advisory services offered through Foundry Wealth Group LLC, a registered investment advisor.
            Information presented is for educational purposes only and does not intend to make an offer or solicitation
            for the sale or purchase of any specific securities, investments, or investment strategies. Investments involve
            risk and unless otherwise stated, are not guaranteed. Past performance is not indicative of future results.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-steel/30 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel text-sm">
              &copy; {new Date().getFullYear()} Foundry Wealth Group LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-steel hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-steel hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}