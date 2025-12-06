import { getSession } from '@auth0/nextjs-auth0';
import { put } from '@vercel/blob';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/db';

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
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = (formData.get('category') as string) || 'Other';
    const userId = formData.get('userId') as string;
    const folderId = formData.get('folderId') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!userId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 });
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large (max 10MB)' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    // Save to database
    const { rows } = await sql`
      INSERT INTO documents (
        user_id, 
        filename, 
        file_url, 
        file_size, 
        mime_type, 
        category, 
        uploaded_by,
        folder_id
      )
      VALUES (
        ${userId},
        ${file.name},
        ${blob.url},
        ${file.size},
        ${file.type},
        ${category},
        'advisor',
        ${folderId || null}
      )
      RETURNING *
    `;

    // Log activity
    await sql`
      INSERT INTO activity_log (action, details, user_id)
      VALUES ('document_uploaded', ${JSON.stringify({ document_id: rows[0].id, filename: file.name })}, ${userId})
    `;

    return NextResponse.json({ 
      success: true,
      document: rows[0],
      url: blob.url 
    });
    
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

