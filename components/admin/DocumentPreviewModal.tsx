'use client';

import { useState } from 'react';
import { DocumentWithUser } from '@/lib/db';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Download, Edit2, Save, Trash2 } from 'lucide-react';

interface DocumentPreviewModalProps {
  document: DocumentWithUser;
  onClose: () => void;
  onUpdate: () => void;
}

const categoryOptions = [
  'Tax Documents',
  'Investment Statements',
  'Agreements',
  'Insurance',
  'Estate Planning',
  'Business Documents',
  'Other',
];

export function DocumentPreviewModal({
  document,
  onClose,
  onUpdate,
}: DocumentPreviewModalProps) {
  const [notes, setNotes] = useState(document.notes || '');
  const [category, setCategory] = useState(document.category);
  const [editingNotes, setEditingNotes] = useState(false);
  const [saving, setSaving] = useState(false);

  const isImage = document.mime_type?.startsWith('image/');
  const isPDF = document.mime_type === 'application/pdf';

  async function saveNotes() {
    setSaving(true);
    try {
      await fetch(`/api/admin/documents/${document.id}/notes`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
      });
      setEditingNotes(false);
      onUpdate();
    } catch (error) {
      console.error('Failed to save notes:', error);
      alert('Failed to save notes');
    } finally {
      setSaving(false);
    }
  }

  async function saveCategory() {
    setSaving(true);
    try {
      await fetch(`/api/admin/documents/${document.id}/category`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category }),
      });
      onUpdate();
    } catch (error) {
      console.error('Failed to save category:', error);
      alert('Failed to save category');
    } finally {
      setSaving(false);
    }
  }

  async function deleteDocument() {
    if (!confirm('Delete this document?')) return;

    try {
      await fetch(`/api/admin/documents/${document.id}`, {
        method: 'DELETE',
      });
      onClose();
      onUpdate();
    } catch (error) {
      console.error('Failed to delete document:', error);
      alert('Failed to delete document');
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-[#36454F] truncate">{document.filename}</h2>
            <p className="text-sm text-gray-600">
              {document.client_name} • {new Date(document.uploaded_at).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={document.file_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={deleteDocument}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Preview */}
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-lg p-4 min-h-[500px] flex items-center justify-center">
                {isPDF ? (
                  <iframe
                    src={document.file_url}
                    className="w-full h-full min-h-[500px] border-0 rounded"
                    title={document.filename}
                  />
                ) : isImage ? (
                  <img
                    src={document.file_url}
                    alt={document.filename}
                    className="max-w-full max-h-[600px] rounded"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <p>Preview not available for this file type</p>
                    <a
                      href={document.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7A0026] hover:underline mt-2 inline-block"
                    >
                      Open in new tab
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Metadata */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Category</label>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    saveCategory();
                  }}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                >
                  {categoryOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">File Size</label>
                <p className="text-sm text-gray-600">
                  {(document.file_size / 1024).toFixed(1)} KB
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Upload Date</label>
                <p className="text-sm text-gray-600">
                  {new Date(document.uploaded_at).toLocaleString()}
                </p>
              </div>

              {document.folder_name && (
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Folder</label>
                  <p className="text-sm text-gray-600">{document.folder_name}</p>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-medium text-gray-700">Notes</label>
                  {!editingNotes ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingNotes(true)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={saveNotes}
                      disabled={saving}
                    >
                      <Save className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                {editingNotes ? (
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm min-h-[100px]"
                    placeholder="Add notes about this document..."
                  />
                ) : (
                  <p className="text-sm text-gray-600 min-h-[100px] p-2 bg-gray-50 rounded">
                    {notes || 'No notes'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

