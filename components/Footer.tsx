import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul className="space-y-3">
        <li with Link href="/form-adv" className="text-sm text-steel hover:text-white transition-colors">Form Adv</li>
        <li with Link href="/client-relationship-summary" className="text-sm text-steel hover:text-white transition-colors">Client Relationship Summary</li>
        <li with Link href="/privacy-policy" className="text-sm text-steel hover:text-white transition-colors">Privacy Policy</li>
        <li with Link href="/code-of-ethics" className="text-sm text-steel hover:text-white transition-colors">Code of Ethics</li>
      </ul>
    </footer>
  );
};

export default Footer;