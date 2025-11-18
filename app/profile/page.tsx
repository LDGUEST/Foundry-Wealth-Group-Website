'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

export default function Profile() {
  const { user, error, isLoading } = useUser()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600">Error: {error.message}</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Please log in to view your profile
          </h1>
          <a
            href="/api/auth/login"
            className="bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors inline-block"
          >
            Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">User Profile</h1>
          
          <div className="space-y-6">
            {user.picture && (
              <div>
                <img
                  src={user.picture}
                  alt={user.name || 'User'}
                  className="w-24 h-24 rounded-full"
                />
              </div>
            )}
            
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Name
              </h2>
              <p className="mt-1 text-lg text-gray-900">{user.name || 'Not provided'}</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Email
              </h2>
              <p className="mt-1 text-lg text-gray-900">{user.email || 'Not provided'}</p>
            </div>

            {user.nickname && (
              <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Nickname
                </h2>
                <p className="mt-1 text-lg text-gray-900">{user.nickname}</p>
              </div>
            )}

            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                User Data
              </h2>
              <pre className="bg-gray-50 p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

