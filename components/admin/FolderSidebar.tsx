'use client';

import { useState } from 'react';
import { Folder } from '@/lib/db';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FolderIcon, Plus, ChevronRight, ChevronDown, MoreVertical } from 'lucide-react';

interface FolderSidebarProps {
  userId: string;
  folders: Folder[];
  selectedFolder: string | null;
  onFolderSelect: (folderId: string | null) => void;
  onFoldersChange: (folders: Folder[]) => void;
}

export function FolderSidebar({
  userId,
  folders,
  selectedFolder,
  onFolderSelect,
  onFoldersChange,
}: FolderSidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [editingFolder, setEditingFolder] = useState<string | null>(null);
  const [editFolderName, setEditFolderName] = useState('');

  function toggleFolder(folderId: string) {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  }

  function buildFolderTree(folders: Folder[], parentId: string | null = null): (Folder & { children: Folder[] })[] {
    const tree: (Folder & { children: Folder[] })[] = [];
    const folderMap = new Map<string, Folder & { children: Folder[] }>();

    folders.forEach(folder => {
      folderMap.set(folder.id, { ...folder, children: [] });
    });

    folders.forEach(folder => {
      const folderWithChildren = folderMap.get(folder.id)!;
      if (folder.parent_folder_id === parentId) {
        tree.push(folderWithChildren);
      } else if (folder.parent_folder_id) {
        const parent = folderMap.get(folder.parent_folder_id);
        if (parent) {
          parent.children.push(folderWithChildren);
        }
      }
    });

    return tree;
  }

  async function createFolder(parentId: string | null = null) {
    if (!newFolderName.trim()) return;

    try {
      const response = await fetch('/api/admin/folders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newFolderName.trim(),
          parent_folder_id: parentId,
          user_id: userId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        onFoldersChange([...folders, data.folder]);
        setNewFolderName('');
        setShowNewFolderInput(false);
      }
    } catch (error) {
      console.error('Failed to create folder:', error);
      alert('Failed to create folder');
    }
  }

  async function updateFolder(folderId: string) {
    if (!editFolderName.trim()) return;

    try {
      const response = await fetch(`/api/admin/folders/${folderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editFolderName.trim() }),
      });

      if (response.ok) {
        const data = await response.json();
        onFoldersChange(folders.map(f => f.id === folderId ? data.folder : f));
        setEditingFolder(null);
        setEditFolderName('');
      }
    } catch (error) {
      console.error('Failed to update folder:', error);
      alert('Failed to update folder');
    }
  }

  async function deleteFolder(folderId: string) {
    if (!confirm('Delete this folder? Documents will be moved to "All Documents".')) return;

    try {
      const response = await fetch(`/api/admin/folders/${folderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onFoldersChange(folders.filter(f => f.id !== folderId));
        if (selectedFolder === folderId) {
          onFolderSelect(null);
        }
      }
    } catch (error) {
      console.error('Failed to delete folder:', error);
      alert('Failed to delete folder');
    }
  }

  function renderFolder(folder: Folder & { children: Folder[] }, level: number = 0) {
    const isExpanded = expandedFolders.has(folder.id);
    const isSelected = selectedFolder === folder.id;
    const isEditing = editingFolder === folder.id;

    return (
      <div key={folder.id}>
        <div
          className={`flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100 cursor-pointer ${
            isSelected ? 'bg-[#7A0026]/10' : ''
          }`}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          {folder.children.length > 0 ? (
            <button
              onClick={() => toggleFolder(folder.id)}
              className="p-0.5 hover:bg-gray-200 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          ) : (
            <div className="w-5" />
          )}
          
          {isEditing ? (
            <input
              type="text"
              value={editFolderName}
              onChange={(e) => setEditFolderName(e.target.value)}
              onBlur={() => updateFolder(folder.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') updateFolder(folder.id);
                if (e.key === 'Escape') {
                  setEditingFolder(null);
                  setEditFolderName('');
                }
              }}
              autoFocus
              className="flex-1 px-2 py-1 text-sm border rounded"
            />
          ) : (
            <>
              <FolderIcon className="w-4 h-4 text-[#7A0026]" />
              <span
                className="flex-1 text-sm"
                onClick={() => onFolderSelect(folder.id)}
              >
                {folder.name} ({folder.document_count || 0})
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingFolder(folder.id);
                    setEditFolderName(folder.name);
                  }}
                  className="p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100"
                >
                  <MoreVertical className="w-3 h-3" />
                </button>
              </div>
            </>
          )}
        </div>
        
        {isExpanded && folder.children.map(child => renderFolder(child, level + 1))}
      </div>
    );
  }

  const folderTree = buildFolderTree(folders);

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[#36454F]">Folders</h3>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setShowNewFolderInput(true)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* All Documents */}
      <div
        className={`flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100 cursor-pointer mb-2 ${
          selectedFolder === null ? 'bg-[#7A0026]/10' : ''
        }`}
        onClick={() => onFolderSelect(null)}
      >
        <FolderIcon className="w-4 h-4 text-[#7A0026]" />
        <span className="text-sm">All Documents</span>
      </div>

      {/* New Folder Input */}
      {showNewFolderInput && (
        <div className="mb-2 px-2">
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            onBlur={() => {
              if (newFolderName.trim()) {
                createFolder();
              } else {
                setShowNewFolderInput(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') createFolder();
              if (e.key === 'Escape') {
                setShowNewFolderInput(false);
                setNewFolderName('');
              }
            }}
            placeholder="Folder name"
            autoFocus
            className="w-full px-2 py-1 text-sm border rounded"
          />
        </div>
      )}

      {/* Folder Tree */}
      <div className="space-y-1">
        {folderTree.map(folder => renderFolder(folder))}
      </div>
    </Card>
  );
}

