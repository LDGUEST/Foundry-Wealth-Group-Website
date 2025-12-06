'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function DocumentUploader() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', 'client_upload');

      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Upload failed');
      }

      setSuccess(true);
      router.refresh(); // Refresh to show new document
      
      // Reset file input
      e.target.value = '';
      
      setTimeout(() => setSuccess(false), 3000);
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#7A0026] transition">
        <input
          type="file"
          onChange={handleUpload}
          className="hidden"
          id="file-upload"
          accept=".pdf,.jpg,.jpeg,.png"
          disabled={uploading}
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Upload className="mx-auto mb-3 text-gray-400" size={48} />
          <p className="font-medium text-[#36454F]">
            {uploading ? 'Uploading...' : 'Click to upload documents'}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            PDF, JPG, PNG up to 10MB
          </p>
        </label>
      </div>
      
      {error && (
        <p className="text-red-600 text-sm mt-2">{error}</p>
      )}
      
      {success && (
        <p className="text-green-600 text-sm mt-2">Document uploaded successfully!</p>
      )}
    </div>
  );
}

