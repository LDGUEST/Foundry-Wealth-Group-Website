'use client';

import { useState, useRef } from 'react';
import { Folder } from '@/lib/db';
import { Button } from '@/components/ui/button';
import { X, Upload, FileText, CheckCircle, XCircle } from 'lucide-react';

interface BulkUploadModalProps {
  clients: any[];
  folders: Folder[];
  selectedClientId?: string;
  selectedFolderId?: string | null;
  onClose: () => void;
  onUploadComplete: () => void;
}

interface UploadFile {
  file: File;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
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

export function BulkUploadModal({
  clients,
  folders,
  selectedClientId,
  selectedFolderId,
  onClose,
  onUploadComplete,
}: BulkUploadModalProps) {
  const [selectedClient, setSelectedClient] = useState(selectedClientId || '');
  const [selectedFolder, setSelectedFolder] = useState(selectedFolderId || '');
  const [category, setCategory] = useState('Other');
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(e.target.files || []);
    const newFiles = selectedFiles.map(file => ({
      file,
      status: 'pending' as const,
    }));
    setFiles([...files, ...newFiles]);
  }

  function removeFile(index: number) {
    setFiles(files.filter((_, i) => i !== index));
  }

  async function uploadFiles() {
    if (!selectedClient || files.length === 0) {
      alert('Please select a client and at least one file');
      return;
    }

    setUploading(true);

    const uploadPromises = files.map(async (fileItem, index) => {
      setFiles(prev => {
        const updated = [...prev];
        updated[index] = { ...updated[index], status: 'uploading' };
        return updated;
      });

      try {
        const formData = new FormData();
        formData.append('file', fileItem.file);
        formData.append('category', category);
        formData.append('userId', selectedClient);
        if (selectedFolder) {
          formData.append('folderId', selectedFolder);
        }

        const response = await fetch('/api/admin/documents/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Upload failed');
        }

        setFiles(prev => {
          const updated = [...prev];
          updated[index] = { ...updated[index], status: 'success' };
          return updated;
        });
      } catch (error: any) {
        setFiles(prev => {
          const updated = [...prev];
          updated[index] = {
            ...updated[index],
            status: 'error',
            error: error.message,
          };
          return updated;
        });
      }
    });

    await Promise.all(uploadPromises);
    setUploading(false);

    // Check if all uploads succeeded
    const allSuccess = files.every(f => f.status === 'success' || f.status === 'pending');
    if (allSuccess) {
      setTimeout(() => {
        onUploadComplete();
        onClose();
      }, 1000);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-[#36454F]">Bulk Upload Documents</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 space-y-4">
          {/* Client Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Client *</label>
            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-sm"
            >
              <option value="">Select a client</option>
              {clients.map(client => (
                <option key={client.auth0_id} value={client.auth0_id}>
                  {client.first_name} {client.last_name} ({client.email})
                </option>
              ))}
            </select>
          </div>

          {/* Folder Selection */}
          {selectedClient && (
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Folder (Optional)</label>
              <select
                value={selectedFolder}
                onChange={(e) => setSelectedFolder(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-sm"
              >
                <option value="">All Documents</option>
                {folders.map(folder => (
                  <option key={folder.id} value={folder.id}>
                    {folder.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Category Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-sm"
            >
              {categoryOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Files</label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#7A0026] transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Click to select files or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PDF, JPG, PNG (max 10MB each)
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Selected Files ({files.length})</label>
              <div className="border rounded-lg p-2 max-h-48 overflow-auto space-y-2">
                {files.map((fileItem, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <FileText className="w-4 h-4 text-[#7A0026] flex-shrink-0" />
                      <span className="text-sm text-gray-700 truncate">{fileItem.file.name}</span>
                      <span className="text-xs text-gray-500">
                        ({(fileItem.file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {fileItem.status === 'uploading' && (
                        <div className="w-4 h-4 border-2 border-[#7A0026] border-t-transparent rounded-full animate-spin" />
                      )}
                      {fileItem.status === 'success' && (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                      {fileItem.status === 'error' && (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={uploadFiles}
            disabled={!selectedClient || files.length === 0 || uploading}
            className="bg-[#7A0026] text-white"
          >
            {uploading ? 'Uploading...' : `Upload ${files.length} File${files.length !== 1 ? 's' : ''}`}
          </Button>
        </div>
      </div>
    </div>
  );
}

