import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
      <Image
        src="/foundry-logo.png"
        alt="Foundry Wealth Group"
        width={320}
        height={96}
        className="h-19 w-auto object-contain"
        priority
      />
    </Link>
  )
}