import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { isAdmin, updateFolder, deleteFolder } from '@/lib/db';
import { sql } from '@vercel/postgres';

export async function PATCH(
  request: Request,
  { params }: { params: { folderId: string } }
) {
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
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: 'name required' }, { status: 400 });
    }

    const folder = await updateFolder(params.folderId, name);

    // Log activity
    await sql`
      INSERT INTO activity_log (action, details)
      VALUES ('folder_renamed', ${JSON.stringify({ folder_id: folder.id, new_name: name })})
    `;

    return NextResponse.json({ folder });
  } catch (error: any) {
    console.error('Failed to update folder:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { folderId: string } }
) {
  const session = await getSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const adminCheck = await isAdmin(session.user.email);
  if (!adminCheck) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    await deleteFolder(params.folderId);

    // Log activity
    await sql`
      INSERT INTO activity_log (action, details)
      VALUES ('folder_deleted', ${JSON.stringify({ folder_id: params.folderId })})
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Failed to delete folder:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

