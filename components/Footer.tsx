export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Foundry Wealth Group</h3>
            <p className="text-sm">
              Independent Registered Investment Advisor
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              <a href="mailto:info@foundrywealth.group" className="hover:text-white transition-colors">
                info@foundrywealth.group
              </a>
            </p>
            <p className="text-sm mt-2">
              <a href="https://foundrywealth.group" className="hover:text-white transition-colors">
                foundrywealth.group
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <p className="text-xs leading-relaxed">
              Foundry Wealth Group is a Registered Investment Advisor. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results. All investments involve risk of loss. This website is for informational purposes only and does not constitute a solicitation or offer to sell securities or investment advisory services.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Foundry Wealth Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

