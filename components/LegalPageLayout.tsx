import Link from 'next/link'
import { Metadata } from 'next'

interface LegalPageLayoutProps {
  title: string
  effectiveDate: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalPageLayout({
  title,
  effectiveDate,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-offwhite">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-charcoal/70">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-steel/50">/</li>
              <li className="text-charcoal">{title}</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{title}</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-charcoal/70 mb-8">
            <div>
              <span className="font-semibold">Effective Date:</span> {effectiveDate}
            </div>
            <div className="hidden sm:block text-steel/50">|</div>
            <div>
              <span className="font-semibold">Last Updated:</span> {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          {children}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-offwhite/80">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-steel/20">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Questions About This Policy?</h3>
            <p className="text-charcoal/70 mb-4">
              If you have questions about this policy or our practices, please contact us:
            </p>
            <ul className="space-y-2 text-charcoal/70">
              <li>
                <strong className="text-charcoal">Email:</strong>{' '}
                <a href="mailto:info@foundrywealth.group" className="text-primary hover:underline">
                  info@foundrywealth.group
                </a>
              </li>
              <li>
                <strong className="text-charcoal">Address:</strong> 1072 24th Ave SE #1, Minneapolis, MN 55414
              </li>
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-block text-primary hover:text-primary-700 font-semibold transition-colors"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

