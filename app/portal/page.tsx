import { getSession } from '@auth0/nextjs-auth0';
import { getUser, getFormCompletions, getUserDocuments } from '@/lib/db';
import { ProgressTracker } from '@/components/portal/ProgressTracker';
import { FormCard } from '@/components/portal/FormCard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function PortalDashboard() {
  const session = await getSession();
  
  if (!session?.user) {
    return null;
  }

  const auth0Id = session.user.sub;
  
  // Handle database errors gracefully
  let user = null;
  let completions: any[] = [];
  let documents: any[] = [];
  
  try {
    user = await getUser(auth0Id);
    completions = await getFormCompletions(auth0Id);
    documents = await getUserDocuments(auth0Id);
  } catch (error) {
    console.error('Database error:', error);
    // Continue with empty arrays if database fails
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

  const formsCompleted = completions.length;
  const totalForms = 3;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#36454F]">
          Welcome back, {session.user.name || session.user.email}
        </h1>
        <p className="text-gray-600 mt-2">
          Let&apos;s get you set up with Foundry Wealth Group
        </p>
      </div>

      {/* Progress Tracker */}
      <ProgressTracker 
        formsCompleted={formsCompleted}
        totalForms={totalForms}
        documentsUploaded={documents.length}
      />

      {/* Required Forms */}
      <section>
        <h2 className="text-2xl font-bold text-[#36454F] mb-4">
          Required Forms
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forms.map(form => (
            <FormCard key={form.id} {...form} />
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold text-[#36454F] mb-4">
          Quick Actions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-bold mb-2">Upload Documents</h3>
            <p className="text-sm text-gray-600 mb-4">
              Share required documents securely
            </p>
            <Button asChild className="bg-[#7A0026]">
              <Link href="/portal/documents">Upload Documents</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Schedule a call with your advisor
            </p>
            <Button variant="outline" asChild>
              <Link href="https://outlook.office.com/book/LoganGuest@foundrywealth.group/?ismsaljsauthenabled" target="_blank">
                Schedule Call
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}

