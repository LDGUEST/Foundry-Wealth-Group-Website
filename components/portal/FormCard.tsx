import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

interface FormCardProps {
  name: string;
  description: string;
  estimatedTime: string;
  href: string;
  completed: boolean;
}

export function FormCard({
  name,
  description,
  estimatedTime,
  href,
  completed,
}: FormCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-[#36454F]">{name}</h3>
        {completed && (
          <Badge className="bg-green-100 text-green-800 border-green-300">
            ✓ Completed
          </Badge>
        )}
      </div>
      
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      
      <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
        <Clock size={14} />
        <span>{estimatedTime}</span>
      </div>
      
      <Button 
        asChild 
        className={completed ? 'bg-gray-600' : 'bg-[#7A0026]'}
        variant={completed ? 'outline' : 'default'}
      >
        <Link href={href}>
          {completed ? 'View Response' : 'Start Form →'}
        </Link>
      </Button>
    </Card>
  );
}

