-- FOUNDRY WEALTH GROUP - CLIENT PORTAL DATABASE SCHEMA
-- Run this in Vercel Postgres after creating the database

-- ============================================================
-- USERS TABLE
-- Synced from Auth0 via user sync
-- ============================================================

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  auth0_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  onboarding_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_auth0_id ON users(auth0_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- ============================================================
-- DOCUMENTS TABLE
-- File uploads and downloads
-- ============================================================

CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(auth0_id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  category TEXT CHECK (category IN (
    'client_upload',
    'advisor_shared',
    'signed_contract',
    'tax_document',
    'statement',
    'other'
  )),
  uploaded_by TEXT CHECK (uploaded_by IN ('client', 'advisor')),
  uploaded_at TIMESTAMP DEFAULT NOW(),
  notes TEXT,
  deleted_at TIMESTAMP NULL  -- Soft delete
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_category ON documents(category);
CREATE INDEX IF NOT EXISTS idx_documents_uploaded_at ON documents(uploaded_at DESC);

-- ============================================================
-- FORM COMPLETIONS TABLE
-- Track which forms clients have completed
-- ============================================================

CREATE TABLE IF NOT EXISTS form_completions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(auth0_id) ON DELETE CASCADE,
  form_name TEXT NOT NULL CHECK (form_name IN ('CIS', 'IPS', 'Account_Setup')),
  completed_at TIMESTAMP DEFAULT NOW(),
  response_id TEXT,  -- Microsoft Forms response ID
  response_link TEXT, -- Link to view response in Microsoft Forms
  UNIQUE(user_id, form_name)  -- One completion per form per user
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_form_completions_user_id ON form_completions(user_id);
CREATE INDEX IF NOT EXISTS idx_form_completions_completed_at ON form_completions(completed_at DESC);

-- ============================================================
-- ACTIVITY LOG TABLE (Optional - for audit trail)
-- Track important actions in the portal
-- ============================================================

CREATE TABLE IF NOT EXISTS activity_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT REFERENCES users(auth0_id) ON DELETE CASCADE,
  action TEXT NOT NULL,  -- 'login', 'form_submitted', 'document_uploaded', etc.
  details JSONB,  -- Additional context
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index for queries by user and date
CREATE INDEX IF NOT EXISTS idx_activity_log_user_id ON activity_log(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_log_created_at ON activity_log(created_at DESC);

-- ============================================================
-- HELPER FUNCTIONS
-- ============================================================

-- Function to update updated_at timestamp automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at on users table
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- SAMPLE QUERIES (for testing)
-- ============================================================

-- Get all clients with their form completion status
-- SELECT 
--   u.first_name,
--   u.last_name,
--   u.email,
--   u.onboarding_completed,
--   COUNT(DISTINCT fc.form_name) as forms_completed
-- FROM users u
-- LEFT JOIN form_completions fc ON u.auth0_id = fc.user_id
-- GROUP BY u.auth0_id, u.first_name, u.last_name, u.email, u.onboarding_completed
-- ORDER BY u.created_at DESC;

-- Get documents for a specific user
-- SELECT 
--   filename,
--   category,
--   uploaded_by,
--   uploaded_at
-- FROM documents
-- WHERE user_id = 'auth0|xxxx'
--   AND deleted_at IS NULL
-- ORDER BY uploaded_at DESC;

-- Get recent activity
-- SELECT 
--   u.first_name,
--   u.last_name,
--   al.action,
--   al.created_at
-- FROM activity_log al
-- JOIN users u ON al.user_id = u.auth0_id
-- ORDER BY al.created_at DESC
-- LIMIT 20;

-- ============================================================
-- NOTES
-- ============================================================

-- This schema is designed for:
-- - ~15-150 clients (scales easily to 1000+)
-- - Simple, maintainable structure
-- - Easy integration with Auth0 and Microsoft Forms
-- - Future expansion (just add tables, don't change existing)

-- Security considerations:
-- - All queries use parameterized statements (prevent SQL injection)
-- - Auth0 user ID used as foreign key (not email, which can change)
-- - Soft deletes on documents (deleted_at instead of DELETE)
-- - Activity logging for audit trail

-- Performance considerations:
-- - Indexes on foreign keys and frequently queried columns
-- - User count expected to be small (<1000), so no need for partitioning
-- - Timestamps indexed for chronological queries

