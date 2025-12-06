'use client'

import { UserProvider as Auth0UserProvider, useUser } from '@auth0/nextjs-auth0/client'
import { useEffect } from 'react'

function UserSync({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUser()

  useEffect(() => {
    if (!isLoading && user) {
      // Sync user to database on client side
      fetch('/api/auth/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }).catch(err => {
        console.error('Failed to sync user:', err)
      })
    }
  }, [user, isLoading])

  return <>{children}</>
}

export default function UserProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Auth0UserProvider>
      <UserSync>{children}</UserSync>
    </Auth0UserProvider>
  )
}

