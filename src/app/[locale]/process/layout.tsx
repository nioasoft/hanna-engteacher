import { getTranslator } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslator(locale, 'meta.process');

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}