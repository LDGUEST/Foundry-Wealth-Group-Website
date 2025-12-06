import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import { PortalNav } from '@/components/portal/PortalNav';
import { syncAuth0User } from '@/lib/auth0-sync';

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  
  if (!session?.user) {
    redirect('/api/auth/login?returnTo=/portal');
  }

  // Sync user to database
  await syncAuth0User();

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <PortalNav />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

