import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info section */}
          <div>
            <h2>Foundry Wealth Group</h2>
            <p>Independent Registered Investment Advisor</p>
          </div>
          {/* Navigation section */}
          <div>
            <h2 className="uppercase tracking-wider">Navigation</h2>
            <ul>
              <li><Link href="/" className="text-steel hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-steel hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-steel hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-steel hover:text-white">Contact</Link></li>
            </ul>
          </div>
          {/* Contact section */}
          <div>
            <h2 className="uppercase tracking-wider">Contact</h2>
            <p><a href="mailto:info@foundrywealth.group">info@foundrywealth.group</a></p>
            <p><a href="http://www.foundrywealth.group" className="text-steel hover:text-white">www.foundrywealth.group</a></p>
          </div>
          {/* Compliance section */}
          <div>
            <h2 className="uppercase tracking-wider">Compliance</h2>
            <ul className="text-sm text-steel hover:text-white transition-colors">
              <li><a href="/form-adv">Form ADV</a></li>
              <li><a href="/client-relationship-summary">Client Relationship Summary</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/code-of-ethics">Code of Ethics</a></li>
            </ul>
          </div>
        </div>
        {/* Disclosures section */}
        <div className="border-t border-charcoal/30 pt-8 mb-8">
          <p>Full disclaimer text about Registered Investment Advisor.</p>
        </div>
        {/* Copyright section */}
        <div className="border-t">
          <p>&copy; {new Date().getFullYear()} Foundry Wealth Group. All rights reserved.<br/>
          <Link href="/terms-of-use">Terms of Use</Link> | <Link href="/privacy">Privacy</Link></p>
        </div>
      </div>
    </footer>
  );
}