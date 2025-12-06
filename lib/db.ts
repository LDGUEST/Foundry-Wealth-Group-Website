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
  const adminEmail = process.env.ADMIN_EMAIL;
  return adminEmail && email === adminEmail;
}

