'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Logo() {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Check if image exists by trying to load it
    const img = new window.Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageError(true)
    img.src = '/foundry-logo.png'
  }, [])

  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      {/* Logo Emblem - Always show container */}
      <div className="relative h-12 w-12 flex-shrink-0 flex items-center justify-center">
        {imageLoaded && !imageError ? (
          <Image
            src="/foundry-logo.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback: Stylized "F" placeholder matching your brand colors
          <div className="h-12 w-12 flex items-center justify-center">
            <div className="relative">
              {/* 3D F effect */}
              <div className="text-3xl font-bold text-charcoal" style={{
                textShadow: `
                  1px 1px 0px rgba(0,0,0,0.1),
                  2px 2px 0px rgba(0,0,0,0.05)
                `
              }}>
                F
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Text */}
      <div>
        <div className="text-xl font-bold text-charcoal tracking-tight leading-tight">
          FOUNDRY
        </div>
        <div className="text-xs text-steel tracking-wide uppercase">
          WEALTH GROUP
        </div>
      </div>
    </Link>
  )
}
