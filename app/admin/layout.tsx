import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/db';
import Link from 'next/link';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  
  if (!session?.user) {
    redirect('/api/auth/login?returnTo=/admin');
  }

  const email = session.user.email;
  if (!email) {
    redirect('/portal');
  }

  const adminCheck = await isAdmin(email);
  
  if (!adminCheck) {
    redirect('/portal');
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/admin" className="font-bold text-xl text-[#7A0026]">
                Admin Panel
              </Link>
              
              <div className="flex gap-6">
                <Link 
                  href="/admin" 
                  className="text-sm font-medium text-[#36454F] hover:text-[#7A0026]"
                >
                  Dashboard
                </Link>
                <Link 
                  href="/admin/clients" 
                  className="text-sm font-medium text-[#36454F] hover:text-[#7A0026]"
                >
                  Clients
                </Link>
                <Link 
                  href="/admin/documents" 
                  className="text-sm font-medium text-[#36454F] hover:text-[#7A0026]"
                >
                  Documents
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link 
                href="/portal"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                ← Back to Portal
              </Link>
              <a
                href="/api/auth/logout?returnTo=/"
                className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

