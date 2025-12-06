import { getSession } from '@auth0/nextjs-auth0';
import { getFormCompletions } from '@/lib/db';
import { FormCard } from '@/components/portal/FormCard';

export default async function FormsPage() {
  const session = await getSession();
  
  if (!session?.user) {
    return null;
  }

  const auth0Id = session.user.sub;
  
  // Handle database errors gracefully
  let completions: any[] = [];
  try {
    completions = await getFormCompletions(auth0Id);
  } catch (error) {
    console.error('Database error:', error);
    // Continue with empty array if database fails
  }

  const forms = [
    {
      id: 'cis',
      name: 'Client Information Survey',
      description: 'Tell us about your financial situation and goals',
      estimatedTime: '15-20 minutes',
      href: '/portal/forms/cis',
      completed: completions.some((c: any) => c.form_name === 'CIS'),
    },
    {
      id: 'ips',
      name: 'Investment Policy Statement',
      description: 'Define your investment objectives and risk tolerance',
      estimatedTime: '10 minutes',
      href: '/portal/forms/ips',
      completed: completions.some((c: any) => c.form_name === 'IPS'),
    },
    {
      id: 'account',
      name: 'Account Setup',
      description: 'Complete account registration information',
      estimatedTime: '5 minutes',
      href: '/portal/forms/account',
      completed: completions.some((c: any) => c.form_name === 'Account_Setup'),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#36454F]">Onboarding Forms</h1>
        <p className="text-gray-600 mt-2">
          Please complete all required forms to continue your onboarding process.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {forms.map(form => (
          <FormCard key={form.id} {...form} />
        ))}
      </div>
    </div>
  );
}

