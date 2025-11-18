'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your backend or email service
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-offwhite via-white to-offwhite pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Connect with an Advisor
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light max-w-3xl mx-auto">
            Schedule a consultation to discuss how Foundry Wealth Group can help you achieve your financial goals
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Get in Touch</h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                We're here to help you navigate your financial journey. Reach out to schedule a consultation or learn more about our services.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Email</h3>
                  <a href="mailto:info@foundrywealth.group" className="text-primary hover:text-primary-700 transition-colors">
                    info@foundrywealth.group
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Website</h3>
                  <a href="https://www.foundrywealth.group" className="text-primary hover:text-primary-700 transition-colors">
                    www.foundrywealth.group
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-charcoal"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-charcoal"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-charcoal"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-charcoal resize-none"
                    placeholder="Tell us about your financial goals and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

