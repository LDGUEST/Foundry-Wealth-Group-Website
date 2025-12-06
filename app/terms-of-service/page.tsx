import { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
  title: 'Terms of Service | Foundry Wealth Group',
  description: 'Terms of service for using the Foundry Wealth Group website, including disclaimers, limitations of liability, and user responsibilities.',
  robots: 'index, follow',
  openGraph: {
    title: 'Terms of Service | Foundry Wealth Group',
    description: 'Terms of service for using the Foundry Wealth Group website, including disclaimers and limitations of liability.',
    url: 'https://foundrywealth.group/terms-of-service',
    type: 'website',
  },
}

const headings = [
  { id: 'acceptance', text: '1. Acceptance of Terms', level: 2 },
  { id: 'advisory-relationship', text: '2. Investment Advisory Relationship', level: 2 },
  { id: 'use-of-website', text: '3. Use of Website', level: 2 },
  { id: 'disclaimers', text: '4. Disclaimers and Limitations', level: 2 },
  { id: 'no-guarantees', text: '5. No Guarantees or Warranties', level: 2 },
  { id: 'limitation-liability', text: '6. Limitation of Liability', level: 2 },
  { id: 'intellectual-property', text: '7. Intellectual Property', level: 2 },
  { id: 'user-accounts', text: '8. User Accounts and Security', level: 2 },
  { id: 'prohibited-uses', text: '9. Prohibited Uses', level: 2 },
  { id: 'termination', text: '10. Termination', level: 2 },
  { id: 'governing-law', text: '11. Governing Law and Jurisdiction', level: 2 },
  { id: 'dispute-resolution', text: '12. Dispute Resolution', level: 2 },
  { id: 'changes', text: '13. Changes to Terms', level: 2 },
  { id: 'contact', text: '14. Contact Information', level: 2 },
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
        title="Terms of Service"
        effectiveDate={currentDate}
        lastUpdated={currentDate}
      >
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <p className="text-sm text-amber-800">
                  <strong>Important:</strong> These Terms of Service govern your use of our website. 
                  The terms of your investment advisory relationship are set forth in your Investment Advisory Agreement. 
                  Please read these terms carefully before using our website.
                </p>
              </div>

              <section id="acceptance" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  1. Acceptance of Terms
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  By accessing or using the Foundry Wealth Group LLC (&quot;Foundry Wealth Group,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) 
                  website, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                  If you do not agree with any of these terms, you are prohibited from using or accessing this website.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  These terms apply to all visitors, users, and others who access or use the website. 
                  Your use of our investment advisory services is governed by a separate Investment Advisory Agreement.
                </p>
              </section>

              <section id="advisory-relationship" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  2. Investment Advisory Relationship
                </h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="text-sm text-red-800">
                    <strong>Important Disclosure:</strong> Foundry Wealth Group LLC is a registered investment adviser 
                    in the state of Minnesota. We are not a broker-dealer and do not effect securities transactions. 
                    Investment advisory services are provided only to clients who have entered into an Investment Advisory Agreement.
                  </p>
                </div>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  The information on this website is for informational and educational purposes only and does not constitute:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>An offer to sell or a solicitation to buy any securities or investment products</li>
                  <li>Investment, financial, tax, or legal advice</li>
                  <li>A recommendation to buy, sell, or hold any security</li>
                  <li>A complete description of our investment advisory services</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Past performance is not indicative of future results. All investments involve risk, including the possible 
                  loss of principal. No investment strategy or risk management technique can guarantee returns or eliminate 
                  risk in any market environment.
                </p>
              </section>

              <section id="use-of-website" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  3. Use of Website
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You may use our website for lawful purposes only. You agree not to use the website:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate Foundry Wealth Group, an employee, another user, or any other person or entity</li>
                  <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
                </ul>
              </section>

              <section id="disclaimers" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  4. Disclaimers and Limitations
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  The information on this website is provided &quot;as is&quot; without warranty of any kind, either express or implied. 
                  We do not warrant that:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>The website will be available at all times or free from errors or interruptions</li>
                  <li>The information on the website is accurate, complete, or current</li>
                  <li>The website will meet your requirements or expectations</li>
                  <li>Any defects or errors will be corrected</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We reserve the right to modify, suspend, or discontinue the website or any part thereof at any time 
                  without notice. We shall not be liable to you or any third party for any modification, suspension, or 
                  discontinuance of the website.
                </p>
              </section>

              <section id="no-guarantees" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  5. No Guarantees or Warranties
                </h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="text-sm text-red-800">
                    <strong>Investment Risk Warning:</strong> All investments involve risk, including the possible loss 
                    of principal. There can be no assurance that any investment strategy will be successful or that any 
                    investment will achieve its objectives. Past performance is not indicative of future results.
                  </p>
                </div>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We make no representations or warranties regarding:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>The accuracy, reliability, or completeness of information on this website</li>
                  <li>The suitability of any investment strategy for your particular circumstances</li>
                  <li>Future investment performance or returns</li>
                  <li>The tax consequences of any investment or strategy</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You should consult with qualified professionals, including financial advisors, tax advisors, and legal 
                  counsel, before making any investment decisions.
                </p>
              </section>

              <section id="limitation-liability" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  6. Limitation of Liability
                </h2>
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
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Our total liability to you for all claims arising from or related to the use of the website shall not 
                  exceed the amount you paid to us, if any, for accessing the website in the twelve (12) months prior to 
                  the action giving rise to liability.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  7. Intellectual Property
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  The website and its original content, features, and functionality are owned by Foundry Wealth Group LLC 
                  and are protected by United States and international copyright, trademark, patent, trade secret, and other 
                  intellectual property or proprietary rights laws.
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
              </section>

              <section id="user-accounts" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  8. User Accounts and Security
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you create an account on our website, you are responsible for maintaining the confidentiality of your 
                  account and password and for restricting access to your computer. You agree to accept responsibility for 
                  all activities that occur under your account or password.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of security. 
                  We will not be liable for any loss or damage arising from your failure to comply with this section.
                </p>
              </section>

              <section id="prohibited-uses" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  9. Prohibited Uses
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You may not use the website:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To engage in any form of automated data collection (scraping, crawling, etc.) without our express written permission</li>
                  <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
                  <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any part of the website, 
                  the server on which the website is stored, or any server, computer, or database connected to the website</li>
                  <li>To attack the website via a denial-of-service attack or a distributed denial-of-service attack</li>
                </ul>
              </section>

              <section id="termination" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  10. Termination
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We may terminate or suspend your access to the website immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms of Service.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Upon termination, your right to use the website will immediately cease. If you wish to terminate your 
                  account, you may simply discontinue using the website.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  11. Governing Law and Jurisdiction
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of 
                  Minnesota, without regard to its conflict of law provisions. You agree to submit to the personal and 
                  exclusive jurisdiction of the courts located in Hennepin County, Minnesota, for the resolution of any 
                  disputes arising from or related to these terms or your use of the website.
                </p>
              </section>

              <section id="dispute-resolution" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  12. Dispute Resolution
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Any dispute arising out of or relating to these Terms of Service or your use of the website shall be 
                  resolved through good faith negotiations. If such negotiations are unsuccessful, disputes shall be resolved 
                  through binding arbitration in accordance with the rules of the American Arbitration Association, conducted 
                  in Minneapolis, Minnesota.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You agree that any cause of action arising out of or related to the website must commence within one (1) 
                  year after the cause of action accrues. Otherwise, such cause of action is permanently barred.
                </p>
              </section>

              <section id="changes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  13. Changes to Terms
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. 
                  What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  By continuing to access or use our website after any revisions become effective, you agree to be bound by 
                  the revised terms. If you do not agree to the new terms, you are no longer authorized to use the website.
                </p>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  14. Contact Information
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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

