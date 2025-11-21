import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Contact</h2>
                <p>
                    Phone: (123) 456-7890
                </p>
                <p>
                    <a href="mailto:info@foundrywealth.group" className="text-steel hover:text-white transition-colors">info@foundrywealth.group</a>
                </p>
            </div>
            {/* Other footer content here */}
        </footer>
    );
};

export default Footer;