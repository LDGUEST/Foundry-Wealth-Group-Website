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
}) {
  const { rows } = await sql`
    INSERT INTO users (auth0_id, email, first_name, last_name)
    VALUES (${data.auth0_id}, ${data.email}, ${data.first_name || null}, ${data.last_name || null})
    RETURNING *
  `;
  return rows[0];
}

export async function updateUser(auth0Id: string, data: {
  first_name?: string;
  last_name?: string;
  onboarding_completed?: boolean;
}) {
  const updates: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;

  if (data.first_name !== undefined) {
    updates.push(`first_name = $${paramIndex}`);
    values.push(data.first_name);
    paramIndex++;
  }
  if (data.last_name !== undefined) {
    updates.push(`last_name = $${paramIndex}`);
    values.push(data.last_name);
    paramIndex++;
  }
  if (data.onboarding_completed !== undefined) {
    updates.push(`onboarding_completed = $${paramIndex}`);
    values.push(data.onboarding_completed);
    paramIndex++;
  }

  if (updates.length === 0) return null;

  values.push(auth0Id);
  const updateClause = updates.join(', ');
  const query = `UPDATE users SET ${updateClause} WHERE auth0_id = $${paramIndex} RETURNING *`;
  
  const { rows } = await sql.query(query, values);
  return rows[0];
}

export async function getAllClients() {
  const { rows } = await sql`
    SELECT * FROM users ORDER BY created_at DESC
  `;
  return rows;
}

export async function isAdmin(email: string): Promise<boolean> {
  return email === 'logan@foundrywealth.group';
}

export async function getFormCompletions(userId: string) {
  const { rows } = await sql`
    SELECT * FROM form_completions
    WHERE user_id = ${userId}
    ORDER BY completed_at DESC
  `;
  return rows;
}

export async function markFormComplete(userId: string, formName: string) {
  const { rows } = await sql`
    INSERT INTO form_completions (user_id, form_name, completed_at)
    VALUES (${userId}, ${formName}, NOW())
    ON CONFLICT (user_id, form_name) DO UPDATE SET completed_at = NOW()
    RETURNING *
  `;
  return rows[0];
}

export async function getUserDocuments(userId: string) {
  const { rows } = await sql`
    SELECT d.*, f.name as folder_name
    FROM documents d
    LEFT JOIN folders f ON d.folder_id = f.id
    WHERE d.user_id = ${userId} AND d.deleted_at IS NULL
    ORDER BY d.uploaded_at DESC
  `;
  return rows;
}

export interface Document {
  id: string;
  user_id: string;
  filename: string;
  file_url: string;
  file_size: number;
  mime_type: string;
  category: string;
  uploaded_by: string;
  notes?: string;
  folder_id?: string | null;
  deleted_at?: string | null;
  uploaded_at: string;
  created_at: string;
}

export interface DocumentWithUser extends Document {
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
  // Build base query with conditional WHERE clauses
  let baseQuery = sql`
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

  // Add conditional filters
  if (filters?.userId) {
    baseQuery = sql`${baseQuery} AND d.user_id = ${filters.userId}`;
  }

  if (filters?.category) {
    baseQuery = sql`${baseQuery} AND d.category = ${filters.category}`;
  }

  if (filters?.folderId !== undefined) {
    if (filters.folderId === null) {
      baseQuery = sql`${baseQuery} AND d.folder_id IS NULL`;
    } else {
      baseQuery = sql`${baseQuery} AND d.folder_id = ${filters.folderId}`;
    }
  }

  if (filters?.search) {
    const searchTerm = `%${filters.search}%`;
    baseQuery = sql`${baseQuery} AND (d.filename ILIKE ${searchTerm} OR u.first_name || ' ' || u.last_name ILIKE ${searchTerm})`;
  }

  if (filters?.dateFrom) {
    baseQuery = sql`${baseQuery} AND d.uploaded_at >= ${filters.dateFrom}`;
  }

  if (filters?.dateTo) {
    baseQuery = sql`${baseQuery} AND d.uploaded_at <= ${filters.dateTo}`;
  }

  // Sorting - validate and use safe values
  const sortBy = filters?.sortBy || 'uploaded_at';
  const sortOrder = filters?.sortOrder || 'DESC';
  const validSortColumns = ['uploaded_at', 'filename', 'file_size', 'category'];
  const sortColumn = validSortColumns.includes(sortBy) ? sortBy : 'uploaded_at';
  const validSortOrders = ['ASC', 'DESC'];
  const sortOrderSafe = validSortOrders.includes(sortOrder) ? sortOrder : 'DESC';
  
  // Build ORDER BY clause
  if (sortColumn === 'uploaded_at') {
    baseQuery = sortOrderSafe === 'ASC' 
      ? sql`${baseQuery} ORDER BY d.uploaded_at ASC`
      : sql`${baseQuery} ORDER BY d.uploaded_at DESC`;
  } else if (sortColumn === 'filename') {
    baseQuery = sortOrderSafe === 'ASC'
      ? sql`${baseQuery} ORDER BY d.filename ASC`
      : sql`${baseQuery} ORDER BY d.filename DESC`;
  } else if (sortColumn === 'file_size') {
    baseQuery = sortOrderSafe === 'ASC'
      ? sql`${baseQuery} ORDER BY d.file_size ASC`
      : sql`${baseQuery} ORDER BY d.file_size DESC`;
  } else if (sortColumn === 'category') {
    baseQuery = sortOrderSafe === 'ASC'
      ? sql`${baseQuery} ORDER BY d.category ASC`
      : sql`${baseQuery} ORDER BY d.category DESC`;
  }

  // Pagination
  if (filters?.limit) {
    baseQuery = sql`${baseQuery} LIMIT ${filters.limit}`;
  }

  if (filters?.offset) {
    baseQuery = sql`${baseQuery} OFFSET ${filters.offset}`;
  }

  const { rows } = await baseQuery;
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
  let baseQuery = sql`
    SELECT COUNT(*) as count
    FROM documents d
    JOIN users u ON d.user_id = u.auth0_id
    WHERE d.deleted_at IS NULL
  `;

  if (filters?.userId) {
    baseQuery = sql`${baseQuery} AND d.user_id = ${filters.userId}`;
  }

  if (filters?.category) {
    baseQuery = sql`${baseQuery} AND d.category = ${filters.category}`;
  }

  if (filters?.folderId !== undefined) {
    if (filters.folderId === null) {
      baseQuery = sql`${baseQuery} AND d.folder_id IS NULL`;
    } else {
      baseQuery = sql`${baseQuery} AND d.folder_id = ${filters.folderId}`;
    }
  }

  if (filters?.search) {
    const searchTerm = `%${filters.search}%`;
    baseQuery = sql`${baseQuery} AND (d.filename ILIKE ${searchTerm} OR u.first_name || ' ' || u.last_name ILIKE ${searchTerm})`;
  }

  if (filters?.dateFrom) {
    baseQuery = sql`${baseQuery} AND d.uploaded_at >= ${filters.dateFrom}`;
  }

  if (filters?.dateTo) {
    baseQuery = sql`${baseQuery} AND d.uploaded_at <= ${filters.dateTo}`;
  }

  const { rows } = await baseQuery;
  return parseInt(rows[0].count as string);
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

export async function getFolders(userId?: string) {
  if (userId) {
    const { rows } = await sql`
      SELECT f.*, COUNT(d.id) as document_count
      FROM folders f
      LEFT JOIN documents d ON f.id = d.folder_id AND d.deleted_at IS NULL
      WHERE f.user_id = ${userId}
      GROUP BY f.id
      ORDER BY f.name
    `;
    return rows as Folder[];
  } else {
    const { rows } = await sql`
      SELECT f.*, COUNT(d.id) as document_count
      FROM folders f
      LEFT JOIN documents d ON f.id = d.folder_id AND d.deleted_at IS NULL
      GROUP BY f.id
      ORDER BY f.name
    `;
    return rows as Folder[];
  }
}

export async function getFolderTree(userId?: string): Promise<(Folder & { children: Folder[] })[]> {
  const folders = await getFolders(userId);
  const folderMap = new Map<string, Folder & { children: Folder[] }>();
  const rootFolders: (Folder & { children: Folder[] })[] = [];

  // Initialize all folders with empty children array
  folders.forEach(folder => {
    folderMap.set(folder.id, { ...folder, children: [] });
  });

  // Build tree structure
  folders.forEach(folder => {
    const folderWithChildren = folderMap.get(folder.id)!;
    if (!folder.parent_folder_id) {
      rootFolders.push(folderWithChildren);
    } else {
      const parent = folderMap.get(folder.parent_folder_id);
      if (parent) {
        parent.children.push(folderWithChildren);
      }
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

  // Delete the folder
  const { rows } = await sql`
    DELETE FROM folders
    WHERE id = ${folderId}
    RETURNING *
  `;
  return rows[0] as Folder;
}
