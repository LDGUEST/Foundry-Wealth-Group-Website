import { getAllClients } from '@/lib/db';
import { ClientTable } from '@/components/admin/ClientTable';

export const dynamic = 'force-dynamic';

interface Client {
  auth0_id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  onboarding_completed: boolean;
  forms_completed: number;
  documents_uploaded: number;
}

export default async function AdminClientsPage() {
  const clients = await getAllClients() as unknown as Client[];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#36454F]">Clients</h1>
        <p className="text-gray-600 mt-2">
          Manage all client accounts and onboarding status
        </p>
      </div>

      <ClientTable clients={clients} />
    </div>
  );
}

