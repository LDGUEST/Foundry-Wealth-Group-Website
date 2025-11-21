import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl container py-12 px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <h3>Foundry Wealth Group</h3>
            <p>Independent Registered Investment Advisor</p>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              <a href="mailto:info@foundrywealth.group" className="text-steel hover:text-white transition-colors">info@foundrywealth.group</a>
            </p>
          </div>
          <div>
            <h3>Compliance</h3>
            <ul className="space-y-3">
              <li><Link href="/form-adv" className="text-sm text-steel hover:text-white transition-colors">Form ADV</Link></li>
              <li><Link href="/client-relationship-summary" className="text-sm text-steel hover:text-white transition-colors">Client Relationship Summary</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-steel hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/code-of-ethics" className="text-sm text-steel hover:text-white transition-colors">Code of Ethics</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-6 pt-6 text-center text-gray-500">
          <p>Disclaimer: This is a sample disclaimer text.</p>
        </div>
        <div className="mt-6 text-center text-gray-500">
          <p>&copy; 2025 Foundry Wealth Group. All rights reserved.</p>
          <p><Link href="/terms">Terms</Link> | <Link href="/privacy">Privacy</Link></p>
        </div>
      </div>
    </footer>
  );
}