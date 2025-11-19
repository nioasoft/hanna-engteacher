import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {}

const Section = forwardRef<HTMLElement, SectionProps>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      'py-40px lg:py-80px px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl',
      className
    )}
    {...props}
  />
));
Section.displayName = 'Section';

export { Section };