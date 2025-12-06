import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { isAdmin, deleteDocument } from '@/lib/db';
import { sql } from '@vercel/postgres';

export async function DELETE(
  request: Request,
  { params }: { params: { documentId: string } }
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
    const doc = await deleteDocument(params.documentId);

    // Log activity
    await sql`
      INSERT INTO activity_log (action, details, user_id)
      VALUES ('document_deleted', ${JSON.stringify({ document_id: params.documentId })}, ${doc.user_id})
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Failed to delete document:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

