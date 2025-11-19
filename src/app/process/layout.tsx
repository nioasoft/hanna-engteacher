import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Work Together | A Clear Path to English Confidence',
  description: 'Learn how we work together, from a free consultation to a personalized curriculum. Discover my teaching process and what to expect from our lessons.',
  keywords: 'English learning process, personalized curriculum, free consultation, English lesson structure',
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}