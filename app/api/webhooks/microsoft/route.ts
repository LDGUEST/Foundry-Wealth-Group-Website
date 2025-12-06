import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { getUserByEmail } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, formName, submittedAt, responseId } = body;

    if (!email || !formName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate form name
    const validFormNames = ['CIS', 'IPS', 'Account_Setup'];
    if (!validFormNames.includes(formName)) {
      return NextResponse.json(
        { error: 'Invalid form name' },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await getUserByEmail(email);

    if (!user) {
      // User might not exist yet, log but don't fail
      console.warn(`Form submission for unknown email: ${email}`);
      return NextResponse.json(
        { error: 'User not found', email },
        { status: 404 }
      );
    }

    // Record completion
    await sql`
      INSERT INTO form_completions (user_id, form_name, completed_at, response_id)
      VALUES (
        ${user.auth0_id}, 
        ${formName}, 
        ${submittedAt || new Date().toISOString()},
        ${responseId || ''}
      )
      ON CONFLICT (user_id, form_name) 
      DO UPDATE SET 
        completed_at = ${submittedAt || new Date().toISOString()},
        response_id = ${responseId || ''}
    `;

    // Check if all forms are complete
    const { rows: completions } = await sql`
      SELECT COUNT(*) as count
      FROM form_completions
      WHERE user_id = ${user.auth0_id}
    `;

    if (completions[0].count >= 3) {
      await sql`
        UPDATE users
        SET onboarding_completed = true
        WHERE auth0_id = ${user.auth0_id}
      `;
    }

    return NextResponse.json({ 
      success: true,
      message: `Form ${formName} completion recorded for ${email}`
    });
    
  } catch (error) {
    console.error('Microsoft Forms webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

