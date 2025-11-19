import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TimelineProps {
  children: ReactNode;
}

interface TimelineItemProps {
  step: number;
  title: string;
  description: string | ReactNode;
  className?: string;
}

function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative space-y-8 lg:space-y-12">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border-light lg:left-1/2 lg:-translate-x-1/2" />
      {children}
    </div>
  );
}

function TimelineItem({ step, title, description, className }: TimelineItemProps) {
  return (
    <div className={cn("relative flex items-start md:items-center justify-start md:justify-center w-full group", className)}>
      <div className="flex-shrink-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary-accent text-surface font-bold text-lg border-2 border-surface shadow-sm">
        {step}
      </div>
      <div className="flex-1 mr-4 md:ml-8 lg:mr-0 lg:w-1/2 lg:group-[&:nth-child(odd)]:-translate-x-full lg:group-[&:nth-child(odd)]:-mr-8 lg:group-[&:nth-child(even)]:-ml-8">
        <div className="bg-surface p-6 rounded-md shadow-md border border-border-light relative group-[&:nth-child(odd)]:ml-8 group-[&:nth-child(even)]:mr-8 lg:group-[&:nth-child(odd)]:ml-0 lg:group-[&:nth-child(even)]:mr-0">
          <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
          {typeof description === 'string' ? (
            <p className="text-text-secondary">{description}</p>
          ) : (
            <div className="text-text-secondary">{description}</div>
          )}
        </div>
      </div>
    </div>
  );
}

Timeline.Item = TimelineItem;

export { Timeline };