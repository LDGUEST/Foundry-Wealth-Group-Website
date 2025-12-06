import { getSession } from '@auth0/nextjs-auth0';
import { getUserDocuments } from '@/lib/db';
import { DocumentUploader } from '@/components/portal/DocumentUploader';
import { DocumentList } from '@/components/portal/DocumentList';
import { Card } from '@/components/ui/card';

interface Document {
  id: string;
  filename: string;
  file_url: string;
  file_size: number;
  uploaded_at: string;
  uploaded_by: string;
  category: string;
}

export default async function DocumentsPage() {
  const session = await getSession();
  
  if (!session?.user) {
    return null;
  }

  const auth0Id = session.user.sub;
  const documents = await getUserDocuments(auth0Id) as Document[];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#36454F]">Documents</h1>
        <p className="text-gray-600 mt-2">
          Upload and manage your documents securely
        </p>
      </div>

      {/* Upload Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-[#36454F] mb-4">
          Upload Documents
        </h2>
        <DocumentUploader />
      </Card>

      {/* Document List */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-[#36454F] mb-4">
          Your Documents ({documents.length})
        </h2>
        <DocumentList documents={documents} />
      </Card>
    </div>
  );
}

