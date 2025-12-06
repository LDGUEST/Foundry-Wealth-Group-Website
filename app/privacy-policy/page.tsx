import { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
  title: 'Privacy Policy | Foundry Wealth Group',
  description: 'Foundry Wealth Group\'s privacy policy explaining how we collect, use, and protect your personal and financial information in compliance with SEC regulations.',
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy | Foundry Wealth Group',
    description: 'Foundry Wealth Group\'s privacy policy explaining how we collect, use, and protect your personal and financial information.',
    url: 'https://foundrywealth.group/privacy-policy',
    type: 'website',
  },
}

const headings = [
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'information-we-collect', text: 'Information We Collect', level: 2 },
  { id: 'how-we-use-information', text: 'How We Use Your Information', level: 2 },
  { id: 'information-sharing', text: 'Information Sharing and Disclosure', level: 2 },
  { id: 'data-security', text: 'Data Security', level: 2 },
  { id: 'your-rights', text: 'Your Rights and Choices', level: 2 },
  { id: 'cookies', text: 'Cookies and Tracking Technologies', level: 2 },
  { id: 'third-party-services', text: 'Third-Party Service Providers', level: 2 },
  { id: 'data-retention', text: 'Data Retention', level: 2 },
  { id: 'children-privacy', text: 'Children\'s Privacy', level: 2 },
  { id: 'changes', text: 'Changes to This Privacy Policy', level: 2 },
  { id: 'contact', text: 'Contact Us', level: 2 },
]

const currentDate = new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

export default function PrivacyPolicy() {
  return (
    <>
      <LegalPageLayout
        title="Privacy Policy"
        effectiveDate={currentDate}
        lastUpdated={currentDate}
      >
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="prose prose-lg max-w-none">
              <section id="introduction" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Introduction
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Foundry Wealth Group LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website or use our investment advisory services. As a registered investment advisor, we are subject to 
                  Regulation S-P under the Securities and Exchange Commission (SEC), which requires us to protect the confidentiality 
                  and security of your nonpublic personal information.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  This policy applies to information we collect through our website, in connection with our advisory services, 
                  and through any other means. By using our website or services, you consent to the data practices described in this policy.
                </p>
              </section>

              <section id="information-we-collect" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Personal Information</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Name, address, email address, and phone number</li>
                  <li>Social Security number or Tax Identification Number</li>
                  <li>Date of birth</li>
                  <li>Financial information, including account numbers, investment objectives, and risk tolerance</li>
                  <li>Employment and income information</li>
                  <li>Bank account information for account transfers</li>
                  <li>Information about your investment experience and financial situation</li>
                </ul>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section id="how-we-use-information" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  How We Use Your Information
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>To provide, maintain, and improve our investment advisory services</li>
                  <li>To process transactions and manage your accounts</li>
                  <li>To communicate with you about your account, our services, and regulatory updates</li>
                  <li>To comply with legal and regulatory obligations, including SEC and state requirements</li>
                  <li>To detect and prevent fraud, money laundering, and other illegal activities</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you marketing communications (with your consent, where required)</li>
                  <li>To analyze website usage and improve user experience</li>
                </ul>
              </section>

              <section id="information-sharing" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Service Providers</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We may share information with third-party service providers who perform services on our behalf, including:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Custodians (Charles Schwab & Company, Inc. and Anchorage Digital)</li>
                  <li>Technology providers (HubSpot, Orion, and other software vendors)</li>
                  <li>Email and communication services</li>
                  <li>Cloud storage and hosting providers</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  These service providers are contractually obligated to protect your information and use it only for the 
                  purposes for which it was disclosed.
                </p>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Legal Requirements</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We may disclose your information if required by law, regulation, or legal process, including:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>In response to subpoenas, court orders, or other legal processes</li>
                  <li>To comply with SEC, FINRA, or state regulatory requirements</li>
                  <li>To protect our rights, property, or safety, or that of our clients</li>
                  <li>In connection with a merger, acquisition, or sale of assets (with notice to clients)</li>
                </ul>
              </section>

              <section id="data-security" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Data Security
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We implement reasonable administrative, technical, and physical safeguards to protect your personal information 
                  against unauthorized access, use, alteration, or destruction. These measures include:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure access controls and authentication procedures</li>
                  <li>Regular security assessments and monitoring</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Secure data centers and cloud infrastructure</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive 
                  to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section id="your-rights" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Your Rights and Choices
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><strong>Access:</strong> You may request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> You may request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> You may request deletion of your personal information, subject to legal and regulatory retention requirements</li>
                  <li><strong>Opt-Out:</strong> You may opt out of marketing communications at any time</li>
                  <li><strong>Account Closure:</strong> You may close your account, though we may retain certain information as required by law</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                    info@foundrywealth.group
                  </a>.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to collect information about your use of our website. 
                  Cookies are small data files stored on your device that help us improve your experience.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit your ability 
                  to use certain features of our website.
                </p>
              </section>

              <section id="third-party-services" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Third-Party Service Providers
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We work with the following third-party service providers who may have access to your information:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><strong>Charles Schwab & Company, Inc.:</strong> Custodian for client accounts</li>
                  <li><strong>Anchorage Digital:</strong> Custodian for digital asset accounts</li>
                  <li><strong>HubSpot:</strong> Customer relationship management and marketing</li>
                  <li><strong>Orion:</strong> Portfolio management and reporting</li>
                  <li><strong>Resend:</strong> Email delivery services</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  These providers are required to maintain the confidentiality of your information and are prohibited from 
                  using it for any purpose other than providing services to us.
                </p>
              </section>

              <section id="data-retention" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Data Retention
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to provide our services, comply with legal 
                  obligations, resolve disputes, and enforce our agreements. SEC regulations require us to retain certain 
                  records for specified periods, typically five to seven years after account closure.
                </p>
              </section>

              <section id="children-privacy" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Children&apos;s Privacy
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If you become aware that a child has provided us with personal information, 
                  please contact us immediately.
                </p>
              </section>

              <section id="changes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                  posting the new policy on this page and updating the &quot;Last Updated&quot; date. For significant changes, 
                  we may also notify you by email or through your account.
                </p>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Contact Us
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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

