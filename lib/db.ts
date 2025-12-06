import { sql } from '@vercel/postgres';

export async function getUser(auth0Id: string) {
  const { rows } = await sql`
    SELECT * FROM users WHERE auth0_id = ${auth0Id}
  `;
  return rows[0] || null;
}

export async function getUserByEmail(email: string) {
  const { rows } = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;
  return rows[0] || null;
}

export async function createUser(data: {
  auth0_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
}) {
  const { rows } = await sql`
    INSERT INTO users (auth0_id, email, first_name, last_name, phone)
    VALUES (${data.auth0_id}, ${data.email}, ${data.first_name || ''}, ${data.last_name || ''}, ${data.phone || ''})
    ON CONFLICT (auth0_id) DO UPDATE SET
      email = ${data.email},
      first_name = ${data.first_name || ''},
      last_name = ${data.last_name || ''},
      phone = ${data.phone || ''},
      updated_at = NOW()
    RETURNING *
  `;
  return rows[0];
}

export async function getUserDocuments(auth0Id: string) {
  const { rows } = await sql`
    SELECT * FROM documents 
    WHERE user_id = ${auth0Id} 
      AND deleted_at IS NULL
    ORDER BY uploaded_at DESC
  `;
  return rows;
}

export async function getFormCompletions(auth0Id: string) {
  const { rows } = await sql`
    SELECT * FROM form_completions 
    WHERE user_id = ${auth0Id}
  `;
  return rows;
}

export async function getAllClients() {
  const { rows } = await sql`
    SELECT 
      u.*,
      COUNT(DISTINCT fc.form_name) as forms_completed,
      COUNT(DISTINCT d.id) as documents_uploaded
    FROM users u
    LEFT JOIN form_completions fc ON u.auth0_id = fc.user_id
    LEFT JOIN documents d ON u.auth0_id = d.user_id AND d.deleted_at IS NULL
    GROUP BY u.id
    ORDER BY u.created_at DESC
  `;
  return rows;
}

export async function isAdmin(email: string) {
  return email === 'logan@foundrywealth.group';
}

// ============================================================
// FOLDER MANAGEMENT FUNCTIONS
// ============================================================

export interface Folder {
  id: string;
  name: string;
  parent_folder_id: string | null;
  user_id: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  document_count?: number;
}

export async function getFolders(userId: string) {
  const { rows } = await sql`
    SELECT 
      f.*,
      COUNT(d.id) as document_count
    FROM folders f
    LEFT JOIN documents d ON f.id = d.folder_id AND d.deleted_at IS NULL
    WHERE f.user_id = ${userId}
    GROUP BY f.id
    ORDER BY f.name
  `;
  return rows as Folder[];
}

export async function getFolderTree(userId: string) {
  const folders = await getFolders(userId);
  
  // Build tree structure
  const folderMap = new Map<string, Folder & { children: Folder[] }>();
  const rootFolders: (Folder & { children: Folder[] })[] = [];
  
  folders.forEach(folder => {
    folderMap.set(folder.id, { ...folder, children: [] });
  });
  
  folders.forEach(folder => {
    const folderWithChildren = folderMap.get(folder.id)!;
    if (folder.parent_folder_id) {
      const parent = folderMap.get(folder.parent_folder_id);
      if (parent) {
        parent.children.push(folderWithChildren);
      }
    } else {
      rootFolders.push(folderWithChildren);
    }
  });
  
  return rootFolders;
}

export async function createFolder(data: {
  name: string;
  parent_folder_id?: string | null;
  user_id: string;
  created_by: string;
}) {
  const { rows } = await sql`
    INSERT INTO folders (name, parent_folder_id, user_id, created_by)
    VALUES (${data.name}, ${data.parent_folder_id || null}, ${data.user_id}, ${data.created_by})
    RETURNING *
  `;
  return rows[0] as Folder;
}

export async function updateFolder(folderId: string, name: string) {
  const { rows } = await sql`
    UPDATE folders
    SET name = ${name}, updated_at = NOW()
    WHERE id = ${folderId}
    RETURNING *
  `;
  return rows[0] as Folder;
}

export async function deleteFolder(folderId: string) {
  // Move documents to root (set folder_id to NULL)
  await sql`
    UPDATE documents
    SET folder_id = NULL
    WHERE folder_id = ${folderId}
  `;
  
  // Delete folder (cascade will delete subfolders)
  await sql`
    DELETE FROM folders WHERE id = ${folderId}
  `;
}

// ============================================================
// DOCUMENT MANAGEMENT FUNCTIONS
// ============================================================

export interface DocumentWithUser {
  id: string;
  user_id: string;
  filename: string;
  file_url: string;
  file_size: number;
  mime_type: string;
  category: string;
  uploaded_by: string;
  uploaded_at: string;
  notes: string | null;
  folder_id: string | null;
  client_name?: string;
  client_email?: string;
  folder_name?: string;
}

export async function getAllDocuments(filters?: {
  userId?: string;
  category?: string;
  folderId?: string | null;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'uploaded_at' | 'filename' | 'file_size' | 'category';
  sortOrder?: 'ASC' | 'DESC';
}) {
  // Build query using template literals with conditional parts
  let query = sql`
    SELECT 
      d.*,
      u.first_name || ' ' || u.last_name as client_name,
      u.email as client_email,
      f.name as folder_name
    FROM documents d
    JOIN users u ON d.user_id = u.auth0_id
    LEFT JOIN folders f ON d.folder_id = f.id
    WHERE d.deleted_at IS NULL
  `;

  if (filters?.userId) {
    query = sql`${query} AND d.user_id = ${filters.userId}`;
  }

  if (filters?.category) {
    query = sql`${query} AND d.category = ${filters.category}`;
  }

  if (filters?.folderId !== undefined) {
    if (filters.folderId === null) {
      query = sql`${query} AND d.folder_id IS NULL`;
    } else {
      query = sql`${query} AND d.folder_id = ${filters.folderId}`;
    }
  }

  if (filters?.search) {
    const searchTerm = `%${filters.search}%`;
    query = sql`${query} AND (d.filename ILIKE ${searchTerm} OR u.first_name || ' ' || u.last_name ILIKE ${searchTerm})`;
  }

  if (filters?.dateFrom) {
    query = sql`${query} AND d.uploaded_at >= ${filters.dateFrom}`;
  }

  if (filters?.dateTo) {
    query = sql`${query} AND d.uploaded_at <= ${filters.dateTo}`;
  }

  // Sorting - validate and use safe values
  const sortBy = filters?.sortBy || 'uploaded_at';
  const sortOrder = filters?.sortOrder || 'DESC';
  const validSortColumns = ['uploaded_at', 'filename', 'file_size', 'category'];
  const sortColumn = validSortColumns.includes(sortBy) ? sortBy : 'uploaded_at';
  const validSortOrders = ['ASC', 'DESC'];
  const sortOrderSafe = validSortOrders.includes(sortOrder) ? sortOrder : 'DESC';
  
  // Build ORDER BY clause safely
  if (sortColumn === 'uploaded_at') {
    query = sortOrderSafe === 'ASC' 
      ? sql`${query} ORDER BY d.uploaded_at ASC`
      : sql`${query} ORDER BY d.uploaded_at DESC`;
  } else if (sortColumn === 'filename') {
    query = sortOrderSafe === 'ASC'
      ? sql`${query} ORDER BY d.filename ASC`
      : sql`${query} ORDER BY d.filename DESC`;
  } else if (sortColumn === 'file_size') {
    query = sortOrderSafe === 'ASC'
      ? sql`${query} ORDER BY d.file_size ASC`
      : sql`${query} ORDER BY d.file_size DESC`;
  } else if (sortColumn === 'category') {
    query = sortOrderSafe === 'ASC'
      ? sql`${query} ORDER BY d.category ASC`
      : sql`${query} ORDER BY d.category DESC`;
  }

  // Pagination
  if (filters?.limit) {
    query = sql`${query} LIMIT ${filters.limit}`;
  }

  if (filters?.offset) {
    query = sql`${query} OFFSET ${filters.offset}`;
  }

  const { rows } = await query;
  return rows as DocumentWithUser[];
}

export async function getDocumentCount(filters?: {
  userId?: string;
  category?: string;
  folderId?: string | null;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}) {
  let query = sql`
    SELECT COUNT(*) as count
    FROM documents d
    JOIN users u ON d.user_id = u.auth0_id
    WHERE d.deleted_at IS NULL
  `;

  if (filters?.userId) {
    query = sql`${query} AND d.user_id = ${filters.userId}`;
  }

  if (filters?.category) {
    query = sql`${query} AND d.category = ${filters.category}`;
  }

  if (filters?.folderId !== undefined) {
    if (filters.folderId === null) {
      query = sql`${query} AND d.folder_id IS NULL`;
    } else {
      query = sql`${query} AND d.folder_id = ${filters.folderId}`;
    }
  }

  if (filters?.search) {
    const searchTerm = `%${filters.search}%`;
    query = sql`${query} AND (d.filename ILIKE ${searchTerm} OR u.first_name || ' ' || u.last_name ILIKE ${searchTerm})`;
  }

  if (filters?.dateFrom) {
    query = sql`${query} AND d.uploaded_at >= ${filters.dateFrom}`;
  }

  if (filters?.dateTo) {
    query = sql`${query} AND d.uploaded_at <= ${filters.dateTo}`;
  }

  const { rows } = await query;
  return parseInt(rows[0].count);
}

export async function updateDocumentCategory(documentId: string, category: string) {
  const { rows } = await sql`
    UPDATE documents
    SET category = ${category}
    WHERE id = ${documentId}
    RETURNING *
  `;
  return rows[0];
}

export async function updateDocumentNotes(documentId: string, notes: string) {
  const { rows } = await sql`
    UPDATE documents
    SET notes = ${notes}
    WHERE id = ${documentId}
    RETURNING *
  `;
  return rows[0];
}

export async function moveDocument(documentId: string, folderId: string | null) {
  const { rows } = await sql`
    UPDATE documents
    SET folder_id = ${folderId}
    WHERE id = ${documentId}
    RETURNING *
  `;
  return rows[0];
}

export async function deleteDocument(documentId: string) {
  const { rows } = await sql`
    UPDATE documents
    SET deleted_at = NOW()
    WHERE id = ${documentId}
    RETURNING *
  `;
  return rows[0];
}

// ============================================================
// ACTIVITY LOG FUNCTIONS
// ============================================================

export async function logActivity(data: {
  user_id?: string;
  action: string;
  details?: any;
  ip_address?: string;
  user_agent?: string;
}) {
  await sql`
    INSERT INTO activity_log (user_id, action, details, ip_address, user_agent)
    VALUES (${data.user_id || null}, ${data.action}, ${JSON.stringify(data.details || {})}, ${data.ip_address || null}, ${data.user_agent || null})
  `;
}

