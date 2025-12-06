import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import { isAdmin, getAllDocuments, getDocumentCount, getAllClients } from '@/lib/db';
import { AdminDocumentsClient } from '@/components/admin/AdminDocumentsClient';

export const dynamic = 'force-dynamic';

export default async function AdminDocumentsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getSession();
  
  if (!session?.user?.email) {
    redirect('/api/auth/login?returnTo=/admin/documents');
  }

  const adminCheck = await isAdmin(session.user.email);
  if (!adminCheck) {
    redirect('/portal');
  }

  // Parse search params
  const page = parseInt(searchParams.page as string) || 1;
  const limit = 25;
  const offset = (page - 1) * limit;
  
  const filters = {
    userId: searchParams.client as string | undefined,
    category: searchParams.category as string | undefined,
    folderId: searchParams.folder === 'null' ? null : (searchParams.folder as string | undefined),
    search: searchParams.search as string | undefined,
    dateFrom: searchParams.dateFrom as string | undefined,
    dateTo: searchParams.dateTo as string | undefined,
    sortBy: (searchParams.sortBy as 'uploaded_at' | 'filename' | 'file_size' | 'category') || 'uploaded_at',
    sortOrder: (searchParams.sortOrder as 'ASC' | 'DESC') || 'DESC',
    limit,
    offset,
  };

  // Get documents and count
  const [documents, totalCount, clients] = await Promise.all([
    getAllDocuments(filters),
    getDocumentCount(filters),
    getAllClients(),
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <AdminDocumentsClient
      initialDocuments={documents}
      totalCount={totalCount}
      currentPage={page}
      totalPages={totalPages}
      clients={clients}
      filters={filters}
    />
  );
}

