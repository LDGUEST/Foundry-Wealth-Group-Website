import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { syncAuth0User } from '@/lib/auth0-sync';

export async function POST() {
  try {
    const user = await syncAuth0User();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('User sync error:', error);
    return NextResponse.json(
      { error: 'Failed to sync user' },
      { status: 500 }
    );
  }
}

