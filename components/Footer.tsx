import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
        <div>
          <h4 className="font-bold">Company Info</h4>
          <p>Foundry Wealth Group - Your Trusted Financial Advisor</p>
        </div>
        <div>
          <h4 className="font-bold">Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p>Email: info@foundrywealth.group</p>
          <Link href="https://www.foundrywealth.group">Website</Link>
        </div>
        <div>
          <h4 className="font-bold">Compliance</h4>
          <ul>
            <li><Link href="https://www.sec.gov/files/formadv.pdf">Form ADV</Link></li>
            <li><Link href="https://www.sec.gov/ocrm/Client_Relationship_Summary.pdf">Client Relationship Summary</Link></li>
            <li><Link href="https://www.foundrywealth.group/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="https://www.foundrywealth.group/code-of-ethics">Code of Ethics</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-bold">Disclosures</h4>
        <p>This information is for educational purposes only and should not be considered financial advice.</p>
      </div>
      <div className="mt-4">
        <p>&copy; {new Date().getFullYear()} Foundry Wealth Group. All rights reserved.</p>
        <ul>
          <li><Link href="/terms">Terms</Link></li>
          <li><Link href="/privacy">Privacy</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
