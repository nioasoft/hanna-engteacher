import { HTMLAttributes } from 'react';
import { Card } from './Card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface IconCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function IconCard({
  icon: Icon,
  title,
  description,
  className,
  ...props
}: IconCardProps) {
  return (
    <Card className={cn("flex flex-col items-center text-center p-6", className)} {...props}>
      <div className="mb-4 rounded-full bg-gray-200 p-3">
        <Icon size={32} className="text-blue-500" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}