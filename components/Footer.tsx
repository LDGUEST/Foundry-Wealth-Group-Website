import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Foundry Wealth Group</h3>
            <p className="text-sm text-gray-400 mb-4">
              Independent Registered Investment Advisor
            </p>
            <p className="text-sm text-gray-400">
              Delivering fiduciary-focused wealth management and financial planning services.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-steel hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-steel hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-steel hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-steel hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@foundrywealth.group" className="text-sm text-steel hover:text-white transition-colors">
                  info@foundrywealth.group
                </a>
              </li>
              <li>
                <a href="https://www.foundrywealth.group" className="text-sm text-steel hover:text-white transition-colors">
                  www.foundrywealth.group
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Compliance</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/form-adv" className="text-sm text-steel hover:text-white transition-colors">
                  Form ADV
                </Link>
              </li>
              <li>
                <Link href="/client-relationship-summary" className="text-sm text-steel hover:text-white transition-colors">
                  Client Relationship Summary
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-steel hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclosures */}
        <div className="border-t border-charcoal/30 pt-8 mb-8">
          <p className="text-xs text-steel leading-relaxed max-w-4xl">
            Foundry Wealth Group is a Registered Investment Advisor. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results. All investments involve risk of loss. This website is for informational purposes only and does not constitute a solicitation or offer to sell securities or investment advisory services. The information provided is not intended to be a substitute for specific individualized tax, legal, or investment planning advice. Where specific advice is necessary or appropriate, Foundry Wealth Group recommends consultation with a qualified tax advisor, attorney, or investment professional.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-charcoal/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-steel">
            © {new Date().getFullYear()} Foundry Wealth Group. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6 text-sm text-steel">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
