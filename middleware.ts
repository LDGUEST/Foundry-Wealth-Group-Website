import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/about',
    '/services',
    '/process',
    '/contact',
    '/testimonials',
    '/faq',
    '/privacy-policy',
    '/terms-of-service',
    '/code-of-ethics',
    '/api/auth',
    '/api/webhooks',
    '/api/contact',
  ];

  // Check if route is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Protected routes require authentication
  const isPortalRoute = pathname.startsWith('/portal');
  const isAdminRoute = pathname.startsWith('/admin');

  if (isPortalRoute || isAdminRoute) {
    // Check for Auth0 session cookie
    const sessionCookie = request.cookies.get('appSession');
    
    if (!sessionCookie) {
      // Redirect to login
      const loginUrl = new URL('/api/auth/login', request.url);
      loginUrl.searchParams.set('returnTo', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // User appears to be authenticated, allow access
    // Actual session verification happens in the layout
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

