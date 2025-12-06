import { getSession } from '@auth0/nextjs-auth0';
import { put } from '@vercel/blob';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const session = await getSession();
  
  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = (formData.get('category') as string) || 'client_upload';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large (max 10MB)' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/jpg',
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload PDF, JPG, or PNG' },
        { status: 400 }
      );
    }

    const auth0Id = session.user.sub;

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    // Save to database
    await sql`
      INSERT INTO documents (
        user_id, 
        filename, 
        file_url, 
        file_size, 
        mime_type, 
        category, 
        uploaded_by
      )
      VALUES (
        ${auth0Id},
        ${file.name},
        ${blob.url},
        ${file.size},
        ${file.type},
        ${category},
        'client'
      )
    `;

    return NextResponse.json({ 
      success: true,
      url: blob.url 
    });
    
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}

