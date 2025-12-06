-- FOUNDRY WEALTH GROUP - FOLDER SYSTEM & ENHANCED DOCUMENT MANAGEMENT
-- Run this AFTER the main DATABASE_SCHEMA.sql

-- ============================================================
-- FOLDERS TABLE
-- Support nested folder organization for documents
-- ============================================================

CREATE TABLE IF NOT EXISTS folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  parent_folder_id UUID REFERENCES folders(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(auth0_id) ON DELETE CASCADE,
  created_by TEXT NOT NULL, -- Admin email or 'system'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, parent_folder_id, name) -- Prevent duplicate folder names in same location
);

-- Indexes for folder queries
CREATE INDEX IF NOT EXISTS idx_folders_user_id ON folders(user_id);
CREATE INDEX IF NOT EXISTS idx_folders_parent_id ON folders(parent_folder_id);
CREATE INDEX IF NOT EXISTS idx_folders_user_parent ON folders(user_id, parent_folder_id);

-- ============================================================
-- UPDATE DOCUMENTS TABLE
-- Add folder_id column for folder organization
-- ============================================================

ALTER TABLE documents 
ADD COLUMN IF NOT EXISTS folder_id UUID REFERENCES folders(id) ON DELETE SET NULL;

-- Index for folder queries
CREATE INDEX IF NOT EXISTS idx_documents_folder_id ON documents(folder_id);

-- ============================================================
-- UPDATE CATEGORIES
-- Expand category options for better organization
-- ============================================================

-- Drop the old check constraint
ALTER TABLE documents DROP CONSTRAINT IF EXISTS documents_category_check;

-- Add new check constraint with expanded categories
ALTER TABLE documents 
ADD CONSTRAINT documents_category_check 
CHECK (category IN (
  'Tax Documents',
  'Investment Statements',
  'Agreements',
  'Insurance',
  'Estate Planning',
  'Business Documents',
  'client_upload',
  'advisor_shared',
  'signed_contract',
  'tax_document',
  'statement',
  'Other'
));

-- ============================================================
-- SAVED SEARCHES TABLE (Optional - for admin search filters)
-- ============================================================

CREATE TABLE IF NOT EXISTS saved_searches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  user_id TEXT NOT NULL REFERENCES users(auth0_id) ON DELETE CASCADE,
  search_filters JSONB NOT NULL, -- Store filter criteria as JSON
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, name)
);

CREATE INDEX IF NOT EXISTS idx_saved_searches_user_id ON saved_searches(user_id);

-- ============================================================
-- UPDATE ACTIVITY LOG
-- Track document management actions
-- ============================================================

-- Add document-specific action types
-- (No schema change needed, action field is TEXT, just document the new values)
-- New action types: 'document_uploaded', 'document_deleted', 'document_moved', 
-- 'document_category_changed', 'folder_created', 'folder_deleted', 'folder_renamed'

