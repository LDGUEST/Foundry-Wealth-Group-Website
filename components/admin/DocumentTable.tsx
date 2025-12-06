'use client';

import { useState } from 'react';
import { DocumentWithUser } from '@/lib/db';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Eye, Download, Trash2, Edit } from 'lucide-react';
import Link from 'next/link';

interface DocumentTableProps {
  documents: DocumentWithUser[];
  viewMode: 'table' | 'grid' | 'list';
  selectedDocuments: Set<string>;
  onSelectDocuments: (selected: Set<string>) => void;
  onPreview: (doc: DocumentWithUser) => void;
  onRefresh: () => void;
  currentPage: number;
  totalPages: number;
  loading: boolean;
}

const categoryColors: Record<string, string> = {
  'Tax Documents': 'bg-blue-100 text-blue-800',
  'Investment Statements': 'bg-green-100 text-green-800',
  'Agreements': 'bg-purple-100 text-purple-800',
  'Insurance': 'bg-yellow-100 text-yellow-800',
  'Estate Planning': 'bg-pink-100 text-pink-800',
  'Business Documents': 'bg-indigo-100 text-indigo-800',
  'Other': 'bg-gray-100 text-gray-800',
  'client_upload': 'bg-gray-100 text-gray-800',
  'advisor_shared': 'bg-blue-100 text-blue-800',
  'signed_contract': 'bg-green-100 text-green-800',
  'tax_document': 'bg-yellow-100 text-yellow-800',
  'statement': 'bg-purple-100 text-purple-800',
};

function formatFileSize(bytes: number) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function DocumentTable({
  documents,
  viewMode,
  selectedDocuments,
  onSelectDocuments,
  onPreview,
  onRefresh,
  currentPage,
  totalPages,
  loading,
}: DocumentTableProps) {
  function toggleSelect(id: string) {
    const newSelected = new Set(selectedDocuments);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    onSelectDocuments(newSelected);
  }

  function toggleSelectAll() {
    if (selectedDocuments.size === documents.length) {
      onSelectDocuments(new Set());
    } else {
      onSelectDocuments(new Set(documents.map(d => d.id)));
    }
  }

  if (viewMode === 'table') {
    return (
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedDocuments.size === documents.length && documents.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Client</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Filename</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Folder</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Upload Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Size</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {documents.map(doc => (
                <tr
                  key={doc.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => onPreview(doc)}
                >
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selectedDocuments.has(doc.id)}
                      onChange={() => toggleSelect(doc.id)}
                      className="rounded"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-[#36454F]">
                      {doc.client_name || 'Unknown'}
                    </div>
                    <div className="text-xs text-gray-500">{doc.client_email}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#7A0026]" />
                      <span className="text-sm text-[#36454F]">{doc.filename}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className={categoryColors[doc.category] || categoryColors['Other']}>
                      {doc.category}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">
                      {doc.folder_name || '—'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">
                      {formatDate(doc.uploaded_at)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">
                      {formatFileSize(doc.file_size)}
                    </span>
                  </td>
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onPreview(doc)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <a
                        href={doc.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-4 py-3 border-t flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex gap-2">
              <Link href={`/admin/documents?page=${Math.max(1, currentPage - 1)}`}>
                <Button variant="outline" size="sm" disabled={currentPage === 1}>
                  Previous
                </Button>
              </Link>
              <Link href={`/admin/documents?page=${Math.min(totalPages, currentPage + 1)}`}>
                <Button variant="outline" size="sm" disabled={currentPage === totalPages}>
                  Next
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Card>
    );
  }

  // Grid view
  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map(doc => (
          <Card
            key={doc.id}
            className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onPreview(doc)}
          >
            <div className="flex items-start justify-between mb-2">
              <input
                type="checkbox"
                checked={selectedDocuments.has(doc.id)}
                onChange={(e) => {
                  e.stopPropagation();
                  toggleSelect(doc.id);
                }}
                className="rounded"
              />
              <FileText className="w-8 h-8 text-[#7A0026]" />
            </div>
            <h3 className="font-medium text-[#36454F] mb-1 truncate">{doc.filename}</h3>
            <p className="text-sm text-gray-600 mb-2">{doc.client_name}</p>
            <Badge className={categoryColors[doc.category] || categoryColors['Other']}>
              {doc.category}
            </Badge>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span>{formatFileSize(doc.file_size)}</span>
              <span>{formatDate(doc.uploaded_at)}</span>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  // List view
  return (
    <Card className="p-4">
      <div className="space-y-2">
        {documents.map(doc => (
          <div
            key={doc.id}
            className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded cursor-pointer"
            onClick={() => onPreview(doc)}
          >
            <input
              type="checkbox"
              checked={selectedDocuments.has(doc.id)}
              onChange={(e) => {
                e.stopPropagation();
                toggleSelect(doc.id);
              }}
              className="rounded"
            />
            <FileText className="w-5 h-5 text-[#7A0026]" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[#36454F] truncate">{doc.filename}</p>
              <p className="text-sm text-gray-600">
                {doc.client_name} • {formatDate(doc.uploaded_at)} • {formatFileSize(doc.file_size)}
              </p>
            </div>
            <Badge className={categoryColors[doc.category] || categoryColors['Other']}>
              {doc.category}
            </Badge>
            <a
              href={doc.file_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
}

