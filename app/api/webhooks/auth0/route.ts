import { NextResponse } from 'next/server';
import { createUser, getUser } from '@/lib/db';

/**
 * Auth0 Webhook Handler
 * Optional: Can be configured in Auth0 dashboard for real-time user sync
 * For now, we sync on login via /api/auth/sync
 */
export async function POST(request: Request) {
  try {
    // Verify webhook signature if AUTH0_WEBHOOK_SECRET is set
    const webhookSecret = process.env.AUTH0_WEBHOOK_SECRET;
    
    if (webhookSecret) {
      // Add signature verification here if needed
      // For now, we'll trust the webhook if secret is configured
    }

    const body = await request.json();
    const { type, data } = body;

    if (type === 'user.created' || type === 'user.updated') {
      const auth0Id = data.user_id || data.sub;
      const email = data.email;
      const name = data.name || '';
      const firstName = data.given_name || name.split(' ')[0] || '';
      const lastName = data.family_name || name.split(' ').slice(1).join(' ') || '';

      if (!auth0Id || !email) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }

      // Create or update user
      await createUser({
        auth0_id: auth0Id,
        email,
        first_name: firstName,
        last_name: lastName,
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true, message: 'Event not handled' });
  } catch (error) {
    console.error('Auth0 webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

