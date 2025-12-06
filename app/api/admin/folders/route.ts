import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { isAdmin, getFolders, createFolder } from '@/lib/db';
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
  const session = await getSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const adminCheck = await isAdmin(session.user.email);
  if (!adminCheck) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'userId required' }, { status: 400 });
  }

  try {
    const folders = await getFolders(userId);
    return NextResponse.json({ folders });
  } catch (error: any) {
    console.error('Failed to get folders:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const adminCheck = await isAdmin(session.user.email);
  if (!adminCheck) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { name, parent_folder_id, user_id } = body;

    if (!name || !user_id) {
      return NextResponse.json({ error: 'name and user_id required' }, { status: 400 });
    }

    const folder = await createFolder({
      name,
      parent_folder_id: parent_folder_id || null,
      user_id,
      created_by: session.user.email,
    });

    // Log activity
    await sql`
      INSERT INTO activity_log (action, details, user_id)
      VALUES ('folder_created', ${JSON.stringify({ folder_id: folder.id, folder_name: name })}, ${user_id})
    `;

    return NextResponse.json({ folder });
  } catch (error: any) {
    console.error('Failed to create folder:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

