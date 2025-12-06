import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Document {
  id: string;
  filename: string;
  file_url: string;
  file_size: number;
  uploaded_at: string;
  uploaded_by: string;
  category: string;
}

export function DocumentList({ documents }: { documents: Document[] }) {
  if (documents.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <FileText className="mx-auto mb-3 text-gray-300" size={48} />
        <p>No documents uploaded yet</p>
      </div>
    );
  }

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

  return (
    <div className="space-y-3">
      {documents.map(doc => (
        <div 
          key={doc.id}
          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <FileText className="text-[#7A0026]" size={24} />
            <div>
              <p className="font-medium text-[#36454F]">{doc.filename}</p>
              <p className="text-sm text-gray-500">
                {formatFileSize(doc.file_size)} • Uploaded {formatDate(doc.uploaded_at)}
              </p>
            </div>
          </div>
          
          <Button
            size="sm"
            variant="outline"
            asChild
          >
            <a href={doc.file_url} target="_blank" rel="noopener noreferrer">
              <Download size={16} className="mr-2" />
              Download
            </a>
          </Button>
        </div>
      ))}
    </div>
  );
}

