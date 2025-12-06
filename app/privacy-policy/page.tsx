import { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
  title: 'Website Privacy Policy | Foundry Wealth Group',
  description: 'Foundry Wealth Group\'s website privacy policy explaining how we collect, use, and protect information collected through our public website.',
  robots: 'index, follow',
  openGraph: {
    title: 'Website Privacy Policy | Foundry Wealth Group',
    description: 'Foundry Wealth Group\'s website privacy policy explaining how we collect, use, and protect information collected through our public website.',
    url: 'https://foundrywealth.group/privacy-policy',
    type: 'website',
  },
}

const headings = [
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'for-advisory-clients', text: 'For Advisory Clients', level: 2 },
  { id: 'information-we-collect', text: 'Information We Collect', level: 2 },
  { id: 'contact-form-data', text: 'Contact Form Data', level: 2 },
  { id: 'newsletter-signup', text: 'Newsletter Signup Data', level: 2 },
  { id: 'cookies-tracking', text: 'Cookies and Tracking Technologies', level: 2 },
  { id: 'ip-address-logging', text: 'IP Address Logging', level: 2 },
  { id: 'third-party-services', text: 'Third-Party Services', level: 2 },
  { id: 'how-we-use', text: 'How We Use Your Information', level: 2 },
  { id: 'user-rights', text: 'Your Rights and Choices', level: 2 },
  { id: 'data-security', text: 'Data Security', level: 2 },
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
        title="Website Privacy Policy"
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
                  This <strong>Website Privacy Policy</strong> explains how we collect, use, disclose, and safeguard information 
                  collected through our public website (foundrywealth.group).
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  This policy applies to information collected through our website, including when you visit our site, 
                  submit contact forms, sign up for our newsletter, or interact with our website in any way. By using 
                  our website, you consent to the data practices described in this policy.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> This Website Privacy Policy covers information collected through our public website. 
                    If you are a current advisory client, additional privacy protections apply under our Firm Privacy Policy 
                    and SEC Regulation S-P. Please see the &quot;For Advisory Clients&quot; section below.
                  </p>
                </div>
              </section>

              <section id="for-advisory-clients" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  For Advisory Clients
                </h2>
                <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                  <p className="text-sm text-charcoal/90 leading-relaxed mb-3">
                    <strong>Important:</strong> If you are a current advisory client of Foundry Wealth Group, additional 
                    privacy protections apply under our Firm Privacy Policy and SEC Regulation S-P.
                  </p>
                  <p className="text-sm text-charcoal/90 leading-relaxed mb-3">
                    Please refer to the privacy notice you received when establishing your advisory relationship, or contact 
                    us to request a copy of our Firm Privacy Policy.
                  </p>
                  <p className="text-sm text-charcoal/90 leading-relaxed">
                    <strong>This Website Privacy Policy covers information collected through our public website.</strong> Our 
                    Firm Privacy Policy covers information collected through our advisory relationship, including financial 
                    information, account details, and investment data.
                  </p>
                </div>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you have questions about how we handle your information as an advisory client, please contact us at{' '}
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                    info@foundrywealth.group
                  </a>.
                </p>
              </section>

              <section id="information-we-collect" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Information We Collect
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We collect information that you provide directly to us and information that is automatically collected 
                  when you visit our website.
                </p>
              </section>

              <section id="contact-form-data" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Contact Form Data
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  When you submit a contact form on our website, we collect the following information:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone number (if provided)</li>
                  <li>Message content</li>
                  <li>IP address (automatically collected)</li>
                  <li>Timestamp of submission</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  This information is used to respond to your inquiry, provide information about our services, and 
                  improve our customer service. Contact form submissions are sent via email to{' '}
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                    info@foundrywealth.group
                  </a> using our email service provider (Resend).
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We retain contact form submissions for up to two years, unless you request deletion or become a client 
                  (in which case your information is subject to our Firm Privacy Policy).
                </p>
              </section>

              <section id="newsletter-signup" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Newsletter Signup Data
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you sign up for our newsletter or marketing communications, we collect:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Email address</li>
                  <li>IP address (automatically collected)</li>
                  <li>Signup timestamp</li>
                  <li>Email engagement data (opens, clicks) if you interact with our emails</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We use this information to send you newsletters, market updates, and other marketing communications. 
                  You can unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us at{' '}
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                    info@foundrywealth.group
                  </a>.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Newsletter data is managed through HubSpot, our customer relationship management platform.
                </p>
              </section>

              <section id="cookies-tracking" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to collect information about your use of our website. 
                  Cookies are small data files stored on your device that help us improve your experience and understand 
                  how visitors use our site.
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Types of Cookies We Use</h3>
                
                <h4 className="text-lg font-semibold text-charcoal mt-4 mb-2">Essential Cookies</h4>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  These cookies are necessary for the website to function properly and cannot be disabled. They include:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Session cookies for website functionality</li>
                  <li>Authentication cookies (if you log into a client portal)</li>
                </ul>

                <h4 className="text-lg font-semibold text-charcoal mt-4 mb-2">Analytics Cookies</h4>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We use Google Analytics to understand how visitors interact with our website. Google Analytics uses 
                  cookies to collect information such as:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Pages visited and time spent on pages</li>
                  <li>How you arrived at our website (referring sites)</li>
                  <li>Device and browser information</li>
                  <li>General geographic location (city/region level, not precise location)</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Google Analytics data is aggregated and anonymized. We do not use Google Analytics to collect personally 
                  identifiable information. You can opt out of Google Analytics by installing the{' '}
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>

                <h4 className="text-lg font-semibold text-charcoal mt-4 mb-2">Marketing Cookies</h4>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We may use tracking pixels and cookies from marketing platforms (such as HubSpot) to:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Track website visitors for marketing purposes</li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                  <li>Personalize your experience on our website</li>
                </ul>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Managing Cookies</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>See what cookies are stored on your device</li>
                  <li>Delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  However, disabling cookies may limit your ability to use certain features of our website.
                </p>
              </section>

              <section id="ip-address-logging" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  IP Address Logging
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  When you visit our website, we automatically collect and log your IP address. IP addresses are collected 
                  for the following purposes:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Security and fraud prevention</li>
                  <li>Website analytics and traffic analysis</li>
                  <li>Geographic location analysis (city/region level only)</li>
                  <li>Server logs for troubleshooting and maintenance</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  IP addresses are typically anonymized in our analytics tools and are not linked to personally identifiable 
                  information unless you submit a form or contact us directly.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Our hosting provider (Vercel) may also log IP addresses as part of their standard security and performance 
                  monitoring practices.
                </p>
              </section>

              <section id="third-party-services" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Third-Party Services
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We use the following third-party services that may collect or process information about you:
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Website Hosting and Infrastructure</h3>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><strong>Vercel:</strong> Website hosting and content delivery. Vercel may collect IP addresses, 
                  device information, and usage data as part of their hosting services.</li>
                </ul>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Analytics and Marketing</h3>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><strong>Google Analytics:</strong> Website analytics and visitor tracking (see Cookies section above)</li>
                  <li><strong>HubSpot:</strong> Customer relationship management, marketing automation, and email marketing. 
                  HubSpot may track website visitors and collect information through forms and cookies.</li>
                </ul>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Email Services</h3>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><strong>Resend:</strong> Email delivery service for contact form submissions. Resend processes email 
                  addresses and message content to deliver emails to our inbox.</li>
                </ul>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Authentication (if applicable)</h3>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><strong>Auth0:</strong> User authentication service (if you create an account or log into a client portal). 
                  Auth0 processes login credentials and authentication data.</li>
                </ul>

                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  These third-party service providers are contractually obligated to protect your information and use it 
                  only for the purposes for which it was disclosed. They are not permitted to use your information for 
                  their own marketing purposes without your consent.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  For more information about how these services handle your data, please review their respective privacy policies:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vercel Privacy Policy</a></li>
                  <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></li>
                  <li><a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">HubSpot Privacy Policy</a></li>
                  <li><a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Resend Privacy Policy</a></li>
                  <li><a href="https://auth0.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Auth0 Privacy Policy</a></li>
                </ul>
              </section>

              <section id="how-we-use" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  How We Use Your Information
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We use the information we collect through our website for the following purposes:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>To respond to your inquiries and provide information about our services</li>
                  <li>To send you newsletters and marketing communications (with your consent)</li>
                  <li>To improve our website and user experience</li>
                  <li>To analyze website usage and traffic patterns</li>
                  <li>To detect and prevent fraud or security issues</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and the rights of our users</li>
                </ul>
              </section>

              <section id="user-rights" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Your Rights and Choices
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Access</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You may request access to the personal information we hold about you by contacting us at{' '}
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                    info@foundrywealth.group
                  </a>.
                </p>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Correction</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You may request correction of inaccurate or incomplete information.
                </p>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Deletion</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You may request deletion of your personal information, subject to legal and regulatory retention requirements. 
                  We will delete your information unless we are required to retain it by law.
                </p>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Opt-Out</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You may opt out of marketing communications at any time by:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Clicking the unsubscribe link in any marketing email</li>
                  <li>Contacting us at{' '}
                    <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                      info@foundrywealth.group
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Cookie Preferences</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  You can control cookies through your browser settings. See the &quot;Cookies and Tracking Technologies&quot; 
                  section above for more information.
                </p>

                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                    info@foundrywealth.group
                  </a>. We will respond to your request within 30 days.
                </p>
              </section>

              <section id="data-security" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Data Security
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We implement reasonable security measures to protect your information, including:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>SSL/TLS encryption for data in transit</li>
                  <li>Secure hosting infrastructure through Vercel</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Access controls and authentication procedures</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive 
                  to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section id="data-retention" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Data Retention
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless 
                  a longer retention period is required by law. Specifically:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Contact form submissions: Up to 2 years, unless you request deletion</li>
                  <li>Newsletter signups: Until you unsubscribe or request deletion</li>
                  <li>Website analytics data: Aggregated and anonymized, retained according to Google Analytics policies</li>
                  <li>Server logs: Typically retained for 30-90 days for security and troubleshooting purposes</li>
                </ul>
              </section>

              <section id="children-privacy" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Children&apos;s Privacy
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Our website is not directed to individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If you become aware that a child has provided us with personal information, 
                  please contact us immediately at{' '}
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                    info@foundrywealth.group
                  </a>, and we will delete such information.
                </p>
              </section>

              <section id="changes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We may update this Website Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new policy on this page and updating the &quot;Last Updated&quot; date. For significant changes, 
                  we may also notify you by email if we have your contact information.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Your continued use of our website after any changes to this policy constitutes acceptance of those changes.
                </p>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Contact Us About Privacy Concerns
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you have questions or concerns about this Website Privacy Policy or our data practices, please contact us:
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
                  <p className="text-base text-charcoal/80 leading-relaxed mt-4">
                    <strong>Privacy Inquiries:</strong> Please include &quot;Privacy Policy Inquiry&quot; in the subject line 
                    of your email for faster processing.
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
