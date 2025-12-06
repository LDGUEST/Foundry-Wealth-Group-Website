export default function AccountSetupPage() {
  const formUrl = process.env.MICROSOFT_FORM_ACCOUNT_URL;

  if (!formUrl) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            Microsoft Form not configured yet. Please add MICROSOFT_FORM_ACCOUNT_URL to environment variables.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#36454F]">
          Account Setup
        </h1>
        <p className="text-gray-600 mt-2">
          Complete your account registration and custodian selection.
        </p>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
          <span>⏱️</span> Estimated time: 5 minutes
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={formUrl}
          width="100%"
          height="1000px"
          frameBorder="0"
          className="w-full"
          title="Account Setup"
        />
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>Note:</strong> This is the final form! After submission,{' '}
          you&apos;ll upload required documents and we&apos;ll prepare your contracts.
        </p>
      </div>
    </div>
  );
}

