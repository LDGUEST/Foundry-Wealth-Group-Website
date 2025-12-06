import { getSession } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  
  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const auth0Id = session.user.sub;
    const documentId = params.id;

    // Get document and verify user has access
    const { rows } = await sql`
      SELECT * FROM documents
      WHERE id = ${documentId}
        AND user_id = ${auth0Id}
        AND deleted_at IS NULL
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    const document = rows[0];

    // Return document info (file_url is already public from Vercel Blob)
    return NextResponse.json({
      id: document.id,
      filename: document.filename,
      url: document.file_url,
      size: document.file_size,
      uploaded_at: document.uploaded_at,
    });
    
  } catch (error) {
    console.error('Document fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch document' },
      { status: 500 }
    );
  }
}

