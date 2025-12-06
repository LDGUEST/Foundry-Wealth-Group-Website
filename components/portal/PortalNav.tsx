'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FileText, Upload, User, Home } from 'lucide-react';

const navItems = [
  { href: '/portal', label: 'Dashboard', icon: Home },
  { href: '/portal/forms', label: 'Forms', icon: FileText },
  { href: '/portal/documents', label: 'Documents', icon: Upload },
  { href: '/portal/profile', label: 'Profile', icon: User },
];

export function PortalNav() {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/portal" className="font-bold text-xl text-[#7A0026]">
              Foundry Wealth
            </Link>
            
            <div className="hidden md:flex gap-6">
              {navItems.map(item => {
                const Icon = item.icon;
                let isActive = false;
                
                if (item.href === '/portal') {
                  // Dashboard is only active on exact match
                  isActive = pathname === '/portal';
                } else {
                  // Other items are active if pathname starts with their href
                  isActive = pathname.startsWith(item.href);
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                      isActive
                        ? 'bg-[#7A0026] text-white'
                        : 'text-[#36454F] hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {user && (
              <div className="hidden sm:block text-sm text-gray-600 truncate max-w-[150px] md:max-w-none">
                {user.name || user.email}
              </div>
            )}
            <Link
              href="/"
              className="bg-[#7A0026] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#7A0026]/90 transition-colors whitespace-nowrap"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

