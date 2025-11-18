import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <Image
        src="/foundry-logo.png"
        alt="Foundry Wealth Group Logo"
        width={60}
        height={60}
        className="h-12 w-auto"
        priority
      />
      <div className="hidden sm:block">
        <div className="text-lg font-bold text-charcoal tracking-tight">
          FOUNDRY
        </div>
        <div className="text-xs text-steel tracking-wide">
          WEALTH GROUP
        </div>
      </div>
    </Link>
  )
}

