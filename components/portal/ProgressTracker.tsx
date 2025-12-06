import { Card } from '@/components/ui/card';
import { CheckCircle, Circle } from 'lucide-react';

interface ProgressTrackerProps {
  formsCompleted: number;
  totalForms: number;
  documentsUploaded: number;
}

export function ProgressTracker({
  formsCompleted,
  totalForms,
  documentsUploaded,
}: ProgressTrackerProps) {
  const steps = [
    { 
      name: 'Complete Forms', 
      completed: formsCompleted === totalForms,
      detail: `${formsCompleted}/${totalForms} completed`
    },
    { 
      name: 'Upload Documents', 
      completed: documentsUploaded > 0,
      detail: `${documentsUploaded} uploaded`
    },
    { 
      name: 'Review Contracts', 
      completed: false,
      detail: 'Pending'
    },
    { 
      name: 'Sign Agreements', 
      completed: false,
      detail: 'Pending'
    },
  ];

  const completedSteps = steps.filter(s => s.completed).length;
  const progressPercent = (completedSteps / steps.length) * 100;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#36454F]">
          Onboarding Progress
        </h2>
        <span className="text-sm font-medium text-[#7A0026]">
          {completedSteps}/{steps.length} Complete
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-[#7A0026] h-2 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {step.completed ? (
                <CheckCircle className="text-green-600" size={20} />
              ) : (
                <Circle className="text-gray-300" size={20} />
              )}
              <span className={step.completed ? 'text-gray-900' : 'text-gray-400'}>
                {step.name}
              </span>
            </div>
            <span className="text-sm text-gray-500">{step.detail}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

