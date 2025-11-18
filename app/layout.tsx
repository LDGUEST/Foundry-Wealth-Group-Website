import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import UserProvider from '@/components/UserProvider'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foundry Wealth Group | Independent Financial Advisory',
  description: 'Independent Registered Investment Advisor providing fiduciary-focused financial planning, investment management, and long-term wealth guidance.',
  keywords: 'financial planning, investment management, RIA, wealth management, retirement planning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Navigation />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  )
}

