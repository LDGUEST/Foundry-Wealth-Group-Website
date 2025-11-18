'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Logo() {
  const [imageError, setImageError] = useState(false)

  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      {/* Logo Emblem */}
      <div className="relative h-12 w-12 flex-shrink-0">
        {!imageError ? (
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
          <div className="h-12 w-12 bg-steel/20 rounded flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">F</span>
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
