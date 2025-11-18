import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
      <Image
        src="/foundry-logo.png"
        alt="Foundry Wealth Group"
        width={400}
        height={120}
        className="h-24 w-auto object-contain"
        priority
      />
    </Link>
  )
}
