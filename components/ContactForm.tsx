'use client'

import { useState } from 'react'

export default function ContactForm() {
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
    <div className="bg-white p-8 rounded-lg border border-steel/20 shadow-md sticky top-24">
      <h3 className="text-2xl font-bold text-charcoal mb-2">Get in Touch</h3>
      <p className="text-charcoal/70 mb-6">Schedule a consultation to discuss your financial goals</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-steel/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-charcoal"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-steel/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-charcoal"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-steel/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-charcoal"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-steel/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-charcoal resize-none"
            placeholder="Tell us about your financial goals..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
