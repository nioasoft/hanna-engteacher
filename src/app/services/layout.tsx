import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | English Instruction Tailored to Your Goals',
  description: 'Discover personalized English instruction: business English, travel English, test preparation, and general improvement. Virtual lessons tailored to your goals.',
  keywords: 'English services, business English, travel English, test preparation, general English improvement, personalized lessons',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}