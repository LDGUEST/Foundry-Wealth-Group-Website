import { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
  title: 'Code of Ethics | Foundry Wealth Group',
  description: 'Foundry Wealth Group\'s Code of Ethics outlining our commitment to ethical conduct, fiduciary responsibility, and client interests.',
  robots: 'index, follow',
  openGraph: {
    title: 'Code of Ethics | Foundry Wealth Group',
    description: 'Foundry Wealth Group\'s Code of Ethics outlining our commitment to ethical conduct and fiduciary responsibility.',
    url: 'https://foundrywealth.group/code-of-ethics',
    type: 'website',
  },
}

const headings = [
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'fiduciary-duty', text: 'Fiduciary Duty', level: 2 },
  { id: 'conflicts-of-interest', text: 'Conflicts of Interest', level: 2 },
  { id: 'personal-trading', text: 'Personal Trading', level: 2 },
  { id: 'gifts-entertainment', text: 'Gifts and Entertainment', level: 2 },
  { id: 'confidentiality', text: 'Confidentiality', level: 2 },
  { id: 'compliance', text: 'Compliance and Reporting', level: 2 },
  { id: 'violations', text: 'Violations and Enforcement', level: 2 },
  { id: 'contact', text: 'Contact Information', level: 2 },
]

const currentDate = new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

export default function CodeOfEthics() {
  return (
    <>
      <LegalPageLayout
        title="Code of Ethics"
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
                  Foundry Wealth Group LLC (&quot;Foundry Wealth Group,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed 
                  to maintaining the highest standards of ethical conduct in all aspects of our business. This Code of Ethics 
                  establishes the principles and standards that guide our conduct and reflects our commitment to fiduciary excellence, 
                  integrity, and the protection of client interests.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  As a registered investment adviser, we are subject to the fiduciary standard, which requires us to act in the 
                  best interests of our clients at all times. This Code of Ethics applies to all employees, officers, directors, 
                  and supervised persons of Foundry Wealth Group.
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                  <p className="text-sm text-charcoal/90 leading-relaxed">
                    <strong>Our Commitment:</strong> We are dedicated to conducting our business with the highest level of integrity, 
                    transparency, and professionalism. This Code of Ethics is not merely a set of rules, but a reflection of our 
                    core values and commitment to serving our clients&apos; best interests.
                  </p>
                </div>
              </section>

              <section id="fiduciary-duty" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Fiduciary Duty
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  As fiduciaries, we have a legal and ethical obligation to act in the best interests of our clients. This means:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><strong>Duty of Loyalty:</strong> We must place our clients&apos; interests above our own and avoid conflicts 
                  of interest whenever possible. When conflicts cannot be avoided, we must fully disclose them and obtain client consent.</li>
                  <li><strong>Duty of Care:</strong> We must exercise reasonable care, skill, and diligence in providing investment 
                  advice and managing client assets.</li>
                  <li><strong>Duty of Disclosure:</strong> We must provide full and fair disclosure of all material facts, including 
                  fees, conflicts of interest, and risks associated with investment recommendations.</li>
                  <li><strong>Duty to Act in Good Faith:</strong> We must act honestly and in good faith in all client relationships.</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We will always prioritize our clients&apos; financial well-being and long-term success over any potential benefit to 
                  Foundry Wealth Group or its employees.
                </p>
              </section>

              <section id="conflicts-of-interest" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Conflicts of Interest
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We recognize that conflicts of interest can arise in the investment advisory business. We are committed to identifying, 
                  disclosing, and managing conflicts of interest in a manner that protects our clients&apos; interests.
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Prohibited Activities</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  The following activities are strictly prohibited:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Engaging in any transaction that creates a conflict between our interests and those of our clients</li>
                  <li>Receiving compensation or other benefits from third parties in connection with client transactions, 
                  except as fully disclosed to clients</li>
                  <li>Recommending investments in which we have a material financial interest without full disclosure</li>
                  <li>Engaging in principal transactions with clients without proper disclosure and consent</li>
                  <li>Using client assets for our own benefit or the benefit of other clients without authorization</li>
                </ul>

                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Disclosure Requirements</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  When conflicts of interest cannot be avoided, we will:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Fully disclose the conflict to affected clients in writing</li>
                  <li>Obtain informed consent from clients before proceeding</li>
                  <li>Document the disclosure and consent in client files</li>
                  <li>Take steps to mitigate the impact of the conflict on clients</li>
                </ul>
              </section>

              <section id="personal-trading" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Personal Trading
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Employees and supervised persons are subject to personal trading policies designed to prevent conflicts of interest 
                  and ensure that client interests come first.
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Key Principles</h3>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li><strong>Client Priority:</strong> Client transactions always take priority over personal trading</li>
                  <li><strong>Pre-Clearance:</strong> Personal trades in securities recommended to clients must be pre-cleared</li>
                  <li><strong>Restricted Securities:</strong> Trading in certain securities may be restricted or prohibited</li>
                  <li><strong>Reporting:</strong> All personal securities transactions must be reported to the Chief Compliance Officer</li>
                  <li><strong>Holding Periods:</strong> Minimum holding periods may apply to personal trades</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Prohibited Practices</h3>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Trading ahead of client orders</li>
                  <li>Front-running client transactions</li>
                  <li>Using material non-public information</li>
                  <li>Short-term trading in securities recommended to clients</li>
                  <li>Trading in securities that conflict with client positions without disclosure</li>
                </ul>
              </section>

              <section id="gifts-entertainment" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Gifts and Entertainment
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We maintain strict policies regarding gifts and entertainment to prevent conflicts of interest and maintain our 
                  independence and objectivity.
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">General Policy</h3>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Employees may not solicit or accept gifts, favors, or entertainment that could influence or appear to influence 
                  their professional judgment</li>
                  <li>Modest business meals and entertainment are generally acceptable if they serve a legitimate business purpose</li>
                  <li>All gifts and entertainment exceeding $100 in value must be reported to the Chief Compliance Officer</li>
                  <li>Gifts from clients are generally prohibited, except for items of nominal value</li>
                  <li>Gifts to clients must be reasonable and not create an appearance of impropriety</li>
                </ul>
              </section>

              <section id="confidentiality" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Confidentiality
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We are committed to protecting the confidentiality of client information. All employees and supervised persons must:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Maintain the confidentiality of all client information, including financial data, investment objectives, 
                  and personal information</li>
                  <li>Use client information only for legitimate business purposes</li>
                  <li>Not disclose client information to third parties without authorization, except as required by law or regulation</li>
                  <li>Protect client information from unauthorized access, use, or disclosure</li>
                  <li>Comply with all applicable privacy laws and regulations, including SEC Regulation S-P</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Client information may only be shared with:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Authorized employees and service providers who need the information to serve clients</li>
                  <li>Regulatory authorities when required by law</li>
                  <li>Third parties with explicit client authorization</li>
                </ul>
              </section>

              <section id="compliance" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Compliance and Reporting
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  All employees and supervised persons are required to:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Read and acknowledge receipt of this Code of Ethics</li>
                  <li>Report any violations or potential violations of this Code to the Chief Compliance Officer</li>
                  <li>Cooperate fully with any investigation of potential violations</li>
                  <li>Complete annual training on ethics and compliance</li>
                  <li>Certify annually that they have complied with this Code of Ethics</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Chief Compliance Officer</h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  The Chief Compliance Officer is responsible for:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Administering and enforcing this Code of Ethics</li>
                  <li>Reviewing personal trading reports and pre-clearance requests</li>
                  <li>Investigating potential violations</li>
                  <li>Maintaining records of compliance activities</li>
                  <li>Providing training and guidance on ethical conduct</li>
                </ul>
              </section>

              <section id="violations" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Violations and Enforcement
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  Violations of this Code of Ethics will not be tolerated and may result in:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-base text-charcoal/80 leading-relaxed mb-4">
                  <li>Disciplinary action, up to and including termination of employment</li>
                  <li>Reporting to regulatory authorities when required</li>
                  <li>Legal action if violations involve illegal conduct</li>
                  <li>Restitution to affected clients if applicable</li>
                </ul>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  We encourage employees to report suspected violations without fear of retaliation. We are committed to investigating 
                  all reports thoroughly and taking appropriate action.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-800">
                    <strong>Whistleblower Protection:</strong> Employees who report violations in good faith will be protected from 
                    retaliation. We will not tolerate any form of retaliation against employees who report suspected violations.
                  </p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4 border-b-2 border-steel/20 pb-2">
                  Contact Information
                </h2>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  If you have questions about this Code of Ethics or wish to report a potential violation, please contact:
                </p>
                <div className="bg-offwhite p-6 rounded-lg border border-steel/20 mt-6">
                  <p className="text-base text-charcoal/80 leading-relaxed mb-2">
                    <strong>Foundry Wealth Group LLC</strong>
                  </p>
                  <p className="text-base text-charcoal/80 leading-relaxed mb-2">
                    Chief Compliance Officer<br />
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
                    <strong>Compliance Inquiries:</strong> Please include &quot;Code of Ethics Inquiry&quot; in the subject line 
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

