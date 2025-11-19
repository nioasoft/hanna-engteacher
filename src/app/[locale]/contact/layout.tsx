import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslator(locale, 'meta.contact');

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}