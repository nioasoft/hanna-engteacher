import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Channa David | Your Guide to Confident English',
  description: 'Meet Channa David, a CELTA-certified English teacher with a passion for personalized instruction. A native English speaker specializing in virtual, one-on-one lessons for adults.',
  keywords: 'Channa David, English teacher, CELTA, online English lessons, personalized English, native English speaker',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}