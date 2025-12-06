import { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
  title: 'Website Terms of Service | Foundry Wealth Group',
  description: 'Terms of service for using the Foundry Wealth Group website, including disclaimers, limitations of liability, and user responsibilities.',
  robots: 'index, follow',
  openGraph: {
    title: 'Website Terms of Service | Foundry Wealth Group',
    description: 'Terms of service for using the Foundry Wealth Group website, including disclaimers and limitations of liability.',
    url: 'https://foundrywealth.group/terms-of-service',
    type: 'website',
  },
}

const headings = [
  { id: 'acceptance', text: '1. Acceptance of Terms', level: 2 },
  { id: 'no-investment-advice', text: '2. No Investment Advice Disclaimer', level: 2 },
  { id: 'educational-content', text: '3. Educational Content Only', level: 2 },
  { id: 'consult-adviser', text: '4. Must Consult Adviser Before Investing', level: 2 },
  { id: 'website-use', text: '5. Website Use Restrictions', level: 2 },
  { id: 'no-guarantee-accuracy', text: '6. No Guarantee of Website Accuracy', level: 2 },
  { id: 'intellectual-property', text: '7. Copyright and Trademark Protection', level: 2 },
  { id: 'limitation-liability', text: '8. Limitation of Liability', level: 2 },
  { id: 'governing-law', text: '9. Governing Law', level: 2 },
  { id: 'changes', text: '10. Changes to Terms', level: 2 },
  { id: 'contact', text: '11. Contact Information', level: 2 },
]

const currentDate = new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

export default function TermsOfService() {
  return (
    <>
      <LegalPageLayout
        title="Website Terms of Service"
        effectiveDate={currentDate}
        lastUpdated={currentDate}
      >
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <p className="text-sm text-amber-800">
                  <strong>Important:</strong> These Website Terms of Service govern your use of our public website 
                  (foundrywealth.group). The terms of your investment advisory relationship (if you become a client) 
                  are set forth in a separate Investment Advisory Agreement. Please read these terms carefully before 
                  using our website.
                </p>
              </div>

              <section id="acceptance" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  1. Acceptance of Terms
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  By accessing or using the Foundry Wealth Group LLC (&quot;Foundry Wealth Group,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) 
                  website, you agree to be bound by these Website Terms of Service and all applicable laws and regulations. 
                  If you do not agree with any of these terms, you are prohibited from using or accessing this website.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  These terms apply to all visitors, users, and others who access or use the website. Your use of our 
                  investment advisory services (if you become a client) is governed by a separate Investment Advisory Agreement.
                </p>
              </section>

              <section id="no-investment-advice" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  2. No Investment Advice Disclaimer
                </h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="text-sm text-red-800 leading-relaxed">
                    <strong>Important Disclosure:</strong> Foundry Wealth Group LLC is a registered investment adviser 
                    in the state of Minnesota. However, <strong>the information on this website does not constitute 
                    investment advice, financial planning advice, trading advice, or any other type of advice.</strong>
                  </p>
                </div>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  The content on this website is provided for informational and educational purposes only. Nothing on 
                  this website should be construed as:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>An offer to sell or a solicitation to buy any securities or investment products</li>
                  <li>Investment, financial, tax, or legal advice</li>
                  <li>A recommendation to buy, sell, or hold any security</li>
                  <li>Personalized investment advice tailored to your specific situation</li>
                  <li>A complete description of our investment advisory services</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We are not a broker-dealer and do not effect securities transactions. Investment advisory services 
                  are provided only to clients who have entered into a written Investment Advisory Agreement with us.
                </p>
              </section>

              <section id="educational-content" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  3. Educational Content Only
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  All content on this website, including but not limited to articles, blog posts, service descriptions, 
                  market commentary, and educational materials, is provided for <strong>educational and informational 
                  purposes only</strong>.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  This educational content is intended to:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Provide general information about financial planning and investment concepts</li>
                  <li>Explain our services and approach to wealth management</li>
                  <li>Share educational resources about financial topics</li>
                  <li>Help visitors understand our firm and philosophy</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  This content is not intended to provide specific advice for your individual circumstances. Every 
                  individual&apos;s financial situation is unique, and what may be appropriate for one person may not 
                  be appropriate for another.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-800">
                    <strong>Remember:</strong> Educational content on a website cannot replace personalized advice 
                    from a qualified financial professional who understands your complete financial picture, goals, 
                    risk tolerance, and circumstances.
                  </p>
                </div>
              </section>

              <section id="consult-adviser" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  4. Must Consult Adviser Before Investing
                </h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="text-sm text-red-800 leading-relaxed mb-3">
                    <strong>Critical Warning:</strong> You must consult with a qualified investment adviser or financial 
                    professional before making any investment decisions. Do not rely solely on information from this 
                    website when making investment decisions.
                  </p>
                  <p className="text-sm text-red-800 leading-relaxed">
                    Past performance is not indicative of future results. All investments involve risk, including the 
                    possible loss of principal. No investment strategy or risk management technique can guarantee returns 
                    or eliminate risk in any market environment.
                  </p>
                </div>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Before making any investment decisions, you should:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Consult with a qualified investment adviser who understands your financial situation, goals, and risk tolerance</li>
                  <li>Review your complete financial picture, including income, expenses, assets, liabilities, and tax situation</li>
                  <li>Consider your investment time horizon and liquidity needs</li>
                  <li>Understand the risks associated with any investment strategy</li>
                  <li>Review all relevant disclosure documents and agreements</li>
                  <li>Consult with tax and legal professionals as appropriate</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you are interested in becoming a client of Foundry Wealth Group, we will conduct a thorough 
                  consultation and analysis of your financial situation before providing any investment advice or 
                  recommendations. This process is formalized in our Investment Advisory Agreement.
                </p>
              </section>

              <section id="website-use" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  5. Website Use Restrictions
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You agree to use our website only for lawful purposes and in accordance with these Terms of Service. 
                  You agree not to use the website:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate Foundry Wealth Group, an employee, another user, or any other person or entity</li>
                  <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                  <li>To engage in any form of automated data collection (scraping, crawling, etc.) without our express written permission</li>
                  <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
                  <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any part of the website, 
                  the server on which the website is stored, or any server, computer, or database connected to the website</li>
                  <li>To attack the website via a denial-of-service attack or a distributed denial-of-service attack</li>
                  <li>In any other manner that could damage, disable, overburden, or impair the website or interfere with any 
                  other party&apos;s use of the website</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Violation of these restrictions may result in termination of your access to the website and may subject 
                  you to civil and criminal penalties.
                </p>
              </section>

              <section id="no-guarantee-accuracy" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  6. No Guarantee of Website Accuracy
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  While we strive to provide accurate and up-to-date information on our website, we make no representations 
                  or warranties regarding the accuracy, completeness, reliability, or timeliness of any information on this website.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  The information on this website is provided &quot;as is&quot; without warranty of any kind, either express or implied. 
                  We do not warrant that:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>The website will be available at all times or free from errors or interruptions</li>
                  <li>The information on the website is accurate, complete, or current</li>
                  <li>The website will meet your requirements or expectations</li>
                  <li>Any defects or errors will be corrected</li>
                  <li>The website is free of viruses or other harmful components</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We reserve the right to modify, update, or remove any content on the website at any time without notice. 
                  We are not obligated to update information on the website, and information may become outdated.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You should verify any information before relying on it. If you notice any errors or outdated information, 
                  please contact us at{' '}
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                    info@foundrywealth.group
                  </a>.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  7. Copyright and Trademark Protection
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  The website and its original content, features, and functionality are owned by Foundry Wealth Group LLC 
                  and are protected by United States and international copyright, trademark, patent, trade secret, and other 
                  intellectual property or proprietary rights laws.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  <strong>Copyright:</strong> All content on this website, including but not limited to text, graphics, logos, 
                  images, audio clips, digital downloads, and software, is the property of Foundry Wealth Group LLC or its 
                  content suppliers and is protected by United States and international copyright laws.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  <strong>Trademarks:</strong> &quot;Foundry Wealth Group,&quot; the Foundry Wealth Group logo, and other marks 
                  displayed on this website are trademarks or registered trademarks of Foundry Wealth Group LLC. You may not 
                  use these marks without our prior written permission.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                  republish, download, store, or transmit any of the material on our website without our prior written consent, 
                  except as follows:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                  <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
                  <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, 
                  non-commercial use and not for further reproduction, publication, or distribution</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Any unauthorized use of the website or its content may violate copyright, trademark, and other laws and 
                  may result in civil or criminal penalties.
                </p>
              </section>

              <section id="limitation-liability" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  8. Limitation of Liability
                </h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="text-sm text-red-800">
                    <strong>Important:</strong> To the fullest extent permitted by applicable law, Foundry Wealth Group LLC, 
                    its officers, directors, employees, agents, and affiliates shall not be liable for any damages arising 
                    from your use of this website.
                  </p>
                </div>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law, Foundry Wealth Group LLC, its officers, directors, 
                  employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any 
                  loss of data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Your use or inability to use the website</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                  <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
                  <li>Any interruption or cessation of transmission to or from the website</li>
                  <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the website</li>
                  <li>Any investment decisions made based on information from this website</li>
                  <li>Any loss or damage resulting from reliance on website content</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Our total liability to you for all claims arising from or related to the use of the website shall not 
                  exceed the amount you paid to us, if any, for accessing the website in the twelve (12) months prior to 
                  the action giving rise to liability, or $100, whichever is greater.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental 
                  damages, so the above limitation may not apply to you. In such jurisdictions, our liability is limited 
                  to the fullest extent permitted by law.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  9. Governing Law
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  These Website Terms of Service shall be governed by and construed in accordance with the laws of the 
                  State of Minnesota, without regard to its conflict of law provisions.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You agree to submit to the personal and exclusive jurisdiction of the courts located in Hennepin County, 
                  Minnesota, for the resolution of any disputes arising from or related to these terms or your use of the website.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If any provision of these terms is found to be invalid or unenforceable by a court of competent jurisdiction, 
                  the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section id="changes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  10. Changes to Terms
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Website Terms of Service at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. 
                  What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We may notify you of changes by:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Posting the new terms on this page</li>
                  <li>Updating the &quot;Last Updated&quot; date at the top of this page</li>
                  <li>Sending an email notification (if we have your email address)</li>
                  <li>Posting a notice on our website homepage</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  By continuing to access or use our website after any revisions become effective, you agree to be bound by 
                  the revised terms. If you do not agree to the new terms, you are no longer authorized to use the website.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We encourage you to review these terms periodically to stay informed of any updates.
                </p>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  11. Contact Information
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you have any questions about these Website Terms of Service, please contact us:
                </p>
                <div className="bg-offwhite p-6 rounded-lg border border-steel/20 mt-6">
                  <p className="text-base text-charcoal/80 leading-relaxed mb-2">
                    <strong>Foundry Wealth Group LLC</strong>
                  </p>
                  <p className="text-base text-charcoal/80 leading-relaxed mb-2">
                    1072 24th Ave SE #1<br />
                    Minneapolis, MN 55414
                  </p>
                  <p className="text-base text-charcoal/80 leading-relaxed mb-2">
                    Email:{' '}
                    <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                      info@foundrywealth.group
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          <TableOfContents headings={headings} />
        </div>
      </LegalPageLayout>
    </>
  )
}
