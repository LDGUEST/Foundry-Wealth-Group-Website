import { sql } from '@vercel/postgres';
import { Card } from '@/components/ui/card';
import { Users, FileText, Upload, CheckCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  // Get stats
  const { rows: [stats] } = await sql`
    SELECT 
      COUNT(DISTINCT u.auth0_id) as total_clients,
      COUNT(DISTINCT CASE WHEN u.onboarding_completed THEN u.auth0_id END) as completed_clients,
      COUNT(DISTINCT fc.id) as total_form_submissions,
      COUNT(DISTINCT d.id) as total_documents
    FROM users u
    LEFT JOIN form_completions fc ON u.auth0_id = fc.user_id
    LEFT JOIN documents d ON u.auth0_id = d.user_id AND d.deleted_at IS NULL
  `;

  // Get recent form submissions
  const { rows: recentForms } = await sql`
    SELECT 
      fc.*,
      u.first_name,
      u.last_name,
      u.email
    FROM form_completions fc
    JOIN users u ON u.auth0_id = fc.user_id
    ORDER BY fc.completed_at DESC
    LIMIT 5
  `;

  // Get recent document uploads
  const { rows: recentDocs } = await sql`
    SELECT 
      d.*,
      u.first_name,
      u.last_name
    FROM documents d
    JOIN users u ON u.auth0_id = d.user_id
    WHERE d.deleted_at IS NULL
    ORDER BY d.uploaded_at DESC
    LIMIT 5
  `;

  const completionRate = stats.total_clients > 0
    ? Math.round((stats.completed_clients / stats.total_clients) * 100)
    : 0;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#36454F]">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Monitor client onboarding and manage documents
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Clients</p>
              <p className="text-3xl font-bold text-[#7A0026] mt-2">
                {stats.total_clients || 0}
              </p>
            </div>
            <Users className="text-gray-400" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Onboarding Complete</p>
              <p className="text-3xl font-bold text-[#7A0026] mt-2">
                {stats.completed_clients || 0}
              </p>
            </div>
            <CheckCircle className="text-gray-400" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Form Submissions</p>
              <p className="text-3xl font-bold text-[#7A0026] mt-2">
                {stats.total_form_submissions || 0}
              </p>
            </div>
            <FileText className="text-gray-400" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completion Rate</p>
              <p className="text-3xl font-bold text-[#7A0026] mt-2">
                {completionRate}%
              </p>
            </div>
            <CheckCircle className="text-gray-400" size={32} />
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-[#36454F] mb-4">
            Recent Form Submissions
          </h2>
          
          {recentForms.length === 0 ? (
            <p className="text-gray-500 text-sm">No form submissions yet</p>
          ) : (
            <div className="space-y-3">
              {recentForms.map((form: any) => (
                <div key={form.id} className="flex justify-between items-start border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium text-[#36454F]">
                      {form.first_name} {form.last_name}
                    </p>
                    <p className="text-sm text-gray-600">{form.form_name}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(form.completed_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-[#36454F] mb-4">
            Recent Document Uploads
          </h2>
          
          {recentDocs.length === 0 ? (
            <p className="text-gray-500 text-sm">No document uploads yet</p>
          ) : (
            <div className="space-y-3">
              {recentDocs.map((doc: any) => (
                <div key={doc.id} className="flex justify-between items-start border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium text-[#36454F]">
                      {doc.first_name} {doc.last_name}
                    </p>
                    <p className="text-sm text-gray-600 truncate max-w-[200px]">
                      {doc.filename}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(doc.uploaded_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

