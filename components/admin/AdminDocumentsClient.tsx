'use client';

import { useState, useEffect } from 'react';
import { DocumentWithUser, Folder } from '@/lib/db';
import { DocumentTable } from './DocumentTable';
import { FolderSidebar } from './FolderSidebar';
import { DocumentPreviewModal } from './DocumentPreviewModal';
import { BulkUploadModal } from './BulkUploadModal';
import { ViewChanger } from './ViewChanger';
import { DocumentFilters } from './DocumentFilters';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Upload, Download, Trash2 } from 'lucide-react';

interface AdminDocumentsClientProps {
  initialDocuments: DocumentWithUser[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  clients: any[];
  filters: any;
}

export function AdminDocumentsClient({
  initialDocuments,
  totalCount,
  currentPage,
  totalPages,
  clients,
  filters: initialFilters,
}: AdminDocumentsClientProps) {
  const [documents, setDocuments] = useState(initialDocuments);
  const [selectedDocuments, setSelectedDocuments] = useState<Set<string>>(new Set());
  const [previewDocument, setPreviewDocument] = useState<DocumentWithUser | null>(null);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [viewMode, setViewMode] = useState<'table' | 'grid' | 'list'>('table');
  const [filters, setFilters] = useState(initialFilters);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(initialFilters.folderId || null);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(false);

  // Load folders for selected client
  useEffect(() => {
    if (filters.userId) {
      loadFolders(filters.userId);
    }
  }, [filters.userId]);

  async function loadFolders(userId: string) {
    try {
      const response = await fetch(`/api/admin/folders?userId=${userId}`);
      const data = await response.json();
      setFolders(data.folders || []);
    } catch (error) {
      console.error('Failed to load folders:', error);
    }
  }

  async function refreshDocuments() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.userId) params.set('client', filters.userId);
      if (filters.category) params.set('category', filters.category);
      if (selectedFolder !== null) params.set('folder', selectedFolder || 'null');
      if (filters.search) params.set('search', filters.search);
      if (filters.dateFrom) params.set('dateFrom', filters.dateFrom);
      if (filters.dateTo) params.set('dateTo', filters.dateTo);
      if (filters.sortBy) params.set('sortBy', filters.sortBy);
      if (filters.sortOrder) params.set('sortOrder', filters.sortOrder);
      params.set('page', currentPage.toString());

      window.location.href = `/admin/documents?${params.toString()}`;
    } catch (error) {
      console.error('Failed to refresh documents:', error);
      setLoading(false);
    }
  }

  function handleFilterChange(newFilters: any) {
    setFilters({ ...filters, ...newFilters });
    setSelectedDocuments(new Set());
  }

  function handleFolderSelect(folderId: string | null) {
    setSelectedFolder(folderId);
    handleFilterChange({ folderId });
  }

  async function handleBulkAction(action: 'delete' | 'download') {
    if (selectedDocuments.size === 0) return;

    if (action === 'delete') {
      if (!confirm(`Delete ${selectedDocuments.size} document(s)?`)) return;
      
      try {
        await Promise.all(
          Array.from(selectedDocuments).map(id =>
            fetch(`/api/admin/documents/${id}`, { method: 'DELETE' })
          )
        );
        setSelectedDocuments(new Set());
        refreshDocuments();
      } catch (error) {
        console.error('Failed to delete documents:', error);
        alert('Failed to delete documents');
      }
    } else if (action === 'download') {
      // Download as ZIP (would need backend implementation)
      alert('Bulk download feature coming soon');
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#36454F]">Document Management</h1>
          <p className="text-gray-600 mt-1">
            {totalCount} document{totalCount !== 1 ? 's' : ''} total
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ViewChanger viewMode={viewMode} onViewChange={setViewMode} />
          <Button
            onClick={() => setShowBulkUpload(true)}
            className="bg-[#7A0026] text-white"
          >
            <Upload className="w-4 h-4 mr-2" />
            Bulk Upload
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <DocumentFilters
          clients={clients}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </Card>

      {/* Bulk Actions */}
      {selectedDocuments.size > 0 && (
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-900">
              {selectedDocuments.size} document{selectedDocuments.size !== 1 ? 's' : ''} selected
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBulkAction('download')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download ZIP
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBulkAction('delete')}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Folder Sidebar */}
        {filters.userId && (
          <div className="w-64 flex-shrink-0">
            <FolderSidebar
              userId={filters.userId}
              folders={folders}
              selectedFolder={selectedFolder}
              onFolderSelect={handleFolderSelect}
              onFoldersChange={setFolders}
            />
          </div>
        )}

        {/* Documents Table/Grid */}
        <div className="flex-1">
          <DocumentTable
            documents={documents}
            viewMode={viewMode}
            selectedDocuments={selectedDocuments}
            onSelectDocuments={setSelectedDocuments}
            onPreview={setPreviewDocument}
            onRefresh={refreshDocuments}
            currentPage={currentPage}
            totalPages={totalPages}
            loading={loading}
          />
        </div>
      </div>

      {/* Modals */}
      {previewDocument && (
        <DocumentPreviewModal
          document={previewDocument}
          onClose={() => setPreviewDocument(null)}
          onUpdate={refreshDocuments}
        />
      )}

      {showBulkUpload && (
        <BulkUploadModal
          clients={clients}
          folders={folders}
          selectedClientId={filters.userId}
          selectedFolderId={selectedFolder}
          onClose={() => setShowBulkUpload(false)}
          onUploadComplete={refreshDocuments}
        />
      )}
    </div>
  );
}

