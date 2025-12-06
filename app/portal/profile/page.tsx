import { getSession } from '@auth0/nextjs-auth0';
import { getUser } from '@/lib/db';
import { Card } from '@/components/ui/card';

export default async function ProfilePage() {
  const session = await getSession();
  
  if (!session?.user) {
    return null;
  }

  const auth0Id = session.user.sub;
  
  // Handle database errors gracefully
  let user = null;
  try {
    user = await getUser(auth0Id);
  } catch (error) {
    console.error('Database error:', error);
    // Continue with null user if database fails
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#36454F]">Profile</h1>
        <p className="text-gray-600 mt-2">
          Your account information
        </p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-500">Name</label>
            <p className="text-lg text-[#36454F]">
              {user?.first_name && user?.last_name 
                ? `${user.first_name} ${user.last_name}`
                : session.user.name || 'Not set'}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Email</label>
            <p className="text-lg text-[#36454F]">
              {session.user.email}
            </p>
          </div>

          {user?.phone && (
            <div>
              <label className="text-sm font-medium text-gray-500">Phone</label>
              <p className="text-lg text-[#36454F]">
                {user.phone}
              </p>
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-gray-500">Account Status</label>
            <p className="text-lg text-[#36454F]">
              {user?.onboarding_completed ? 'Onboarding Complete' : 'Onboarding In Progress'}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

