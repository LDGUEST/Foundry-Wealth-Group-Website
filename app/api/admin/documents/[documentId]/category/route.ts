import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { isAdmin, updateDocumentCategory } from '@/lib/db';
import { sql } from '@vercel/postgres';

export async function PATCH(
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
    const body = await request.json();
    const { category } = body;

    if (!category) {
      return NextResponse.json({ error: 'category required' }, { status: 400 });
    }

    const doc = await updateDocumentCategory(params.documentId, category);

    // Log activity
    await sql`
      INSERT INTO activity_log (action, details, user_id)
      VALUES ('document_category_changed', ${JSON.stringify({ document_id: params.documentId, category })}, ${doc.user_id})
    `;

    return NextResponse.json({ document: doc });
  } catch (error: any) {
    console.error('Failed to update category:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

