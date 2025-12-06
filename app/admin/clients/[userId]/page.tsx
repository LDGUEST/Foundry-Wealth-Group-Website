import { getSession } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/db';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Download } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ClientDetailPage({
  params,
}: {
  params: { userId: string };
}) {
  const session = await getSession();
  
  if (!session?.user?.email) {
    redirect('/api/auth/login');
  }

  const adminCheck = await isAdmin(session.user.email);
  if (!adminCheck) {
    redirect('/portal');
  }

  const userId = params.userId;

  // Get user details
  const { rows: [user] } = await sql`
    SELECT * FROM users WHERE auth0_id = ${userId}
  `;

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-500">Client not found</p>
      </div>
    );
  }

  // Get form completions
  const { rows: completions } = await sql`
    SELECT * FROM form_completions WHERE user_id = ${userId}
    ORDER BY completed_at DESC
  `;

  // Get documents
  const { rows: documents } = await sql`
    SELECT * FROM documents 
    WHERE user_id = ${userId} AND deleted_at IS NULL
    ORDER BY uploaded_at DESC
  `;

  const forms = [
    { name: 'CIS', label: 'Client Information Survey' },
    { name: 'IPS', label: 'Investment Policy Statement' },
    { name: 'Account_Setup', label: 'Account Setup' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link href="/admin/clients" className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-block">
          ← Back to Clients
        </Link>
        <h1 className="text-3xl font-bold text-[#36454F]">
          {user.first_name} {user.last_name}
        </h1>
        <p className="text-gray-600 mt-2">{user.email}</p>
      </div>

      {/* Status */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-[#36454F] mb-4">Onboarding Status</h2>
        <div className="flex items-center gap-4">
          <Badge className={user.onboarding_completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
            {user.onboarding_completed ? 'Complete' : 'In Progress'}
          </Badge>
          <span className="text-sm text-gray-600">
            Joined {new Date(user.created_at).toLocaleDateString()}
          </span>
        </div>
      </Card>

      {/* Form Completions */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-[#36454F] mb-4">Form Completions</h2>
        <div className="space-y-3">
          {forms.map(form => {
            const completion = completions.find((c: any) => c.form_name === form.name);
            return (
              <div key={form.name} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium text-[#36454F]">{form.label}</p>
                  {completion && (
                    <p className="text-sm text-gray-500">
                      Completed {new Date(completion.completed_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
                {completion ? (
                  <Badge className="bg-green-100 text-green-800">✓ Completed</Badge>
                ) : (
                  <Badge variant="outline">Pending</Badge>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Documents */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-[#36454F] mb-4">
          Documents ({documents.length})
        </h2>
        {documents.length === 0 ? (
          <p className="text-gray-500 text-sm">No documents uploaded</p>
        ) : (
          <div className="space-y-3">
            {documents.map((doc: any) => (
              <div key={doc.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div className="flex items-center gap-3">
                  <FileText className="text-[#7A0026]" size={20} />
                  <div>
                    <p className="font-medium text-[#36454F]">{doc.filename}</p>
                    <p className="text-sm text-gray-500">
                      Uploaded {new Date(doc.uploaded_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <a
                  href={doc.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#7A0026] hover:underline flex items-center gap-1"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

