export default function CISFormPage() {
  const formUrl = process.env.MICROSOFT_FORM_CIS_URL;

  if (!formUrl) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            Microsoft Form not configured yet. Please add MICROSOFT_FORM_CIS_URL to environment variables.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#36454F]">
          Client Information Survey
        </h1>
        <p className="text-gray-600 mt-2">
          Please complete this form to help us understand your financial situation.
          All information is confidential and secure.
        </p>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
          <span>⏱️</span> Estimated time: 15-20 minutes
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={formUrl}
          width="100%"
          height="1400px"
          frameBorder="0"
          className="w-full"
          title="Client Information Survey"
        />
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>Note:</strong> After submitting this form, return to your{' '}
          <a href="/portal" className="underline ml-1">dashboard</a> to continue{' '}
          the onboarding process.
        </p>
      </div>
    </div>
  );
}

