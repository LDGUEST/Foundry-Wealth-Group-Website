import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { isAdmin, updateDocumentNotes } from '@/lib/db';

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
    const { notes } = body;

    const doc = await updateDocumentNotes(params.documentId, notes || '');

    return NextResponse.json({ document: doc });
  } catch (error: any) {
    console.error('Failed to update notes:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

