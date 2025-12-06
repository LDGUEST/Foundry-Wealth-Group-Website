'use client'

import { useEffect, useState } from 'react'

interface TableOfContentsProps {
  headings: Array<{ id: string; text: string; level: number }>
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav 
      className="hidden lg:block sticky top-24 self-start w-64 ml-8"
      aria-label="Table of contents"
    >
      <div className="bg-white p-6 rounded-lg border border-steel/20 shadow-sm">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block text-sm py-1 transition-colors ${
                  activeId === heading.id
                    ? 'text-primary font-semibold'
                    : 'text-charcoal/70 hover:text-primary'
                }`}
                style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

