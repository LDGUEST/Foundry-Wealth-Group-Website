import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">Foundry Wealth Group</h3>
            <p className="text-gray-300 mt-2">Independent Registered Investment Advisor</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Navigation</h3>
            <nav className="mt-2">
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <p className="text-gray-300 mt-2">Email: info@foundrywealthgroup.com</p>
            <p className="text-gray-300">Website: www.foundrywealthgroup.com</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Compliance</h3>
            <ul className="space-y-3">
              <li><Link href="/form-adv" className="text-sm text-steel hover:text-white transition-colors">Form ADV</Link></li>
              <li><Link href="/client-relationship-summary" className="text-sm text-steel hover:text-white transition-colors">Client Relationship Summary</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-steel hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/code-of-ethics" className="text-sm text-steel hover:text-white transition-colors">Code of Ethics</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-12 pt-6">
          <p className="text-gray-300">Disclaimer: This is a sample disclaimer text.</p>
        </div>
        <div className="mt-6 text-center text-gray-300">
          <p>&copy; 2025 Foundry Wealth Group. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="text-sm hover:text-white transition-colors">Terms</Link> | 
            <Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}