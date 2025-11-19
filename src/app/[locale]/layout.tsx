import { NextIntlClientProvider } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channa David | English Teacher - Personalized 1-on-1 Lessons",
  description: "CELTA-certified English teacher offering personalized virtual lessons for business professionals, travelers, and test preparation.",
  keywords: "English teacher, CELTA, online English lessons, business English, travel English"
};

export default async function LocaleLayout({children, params: {locale}}: {children: React.ReactNode, params: {locale: string}}) {
  const messages = (await getRequestConfig({locale})).messages;
 
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}