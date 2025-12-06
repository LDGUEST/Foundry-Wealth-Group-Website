'use client'

import { Calendar } from 'lucide-react'
import { useState } from 'react'

interface MeetingBookingButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function MeetingBookingButton({
  variant = 'primary',
  size = 'md',
  text,
  className = '',
}: MeetingBookingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const bookingUrl = 'https://urlgeni.us/excel/Foundry'

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5',
  }

  const handleClick = () => {
    // Analytics tracking (can be enhanced with actual analytics service)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'booking_link_click', {
        event_category: 'engagement',
        event_label: 'schedule_consultation',
      })
    }
    
    // Open booking URL in new tab
    window.open(bookingUrl, '_blank', 'noopener,noreferrer')
  }

  const buttonText = text || (variant === 'primary' ? 'Schedule a Consultation' : 'Book a Meeting')

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold rounded-md
        transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      aria-label={buttonText}
    >
      <Calendar 
        className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
        size={size === 'sm' ? 18 : size === 'md' ? 20 : 24}
      />
      <span>{buttonText}</span>
    </button>
  )
}

