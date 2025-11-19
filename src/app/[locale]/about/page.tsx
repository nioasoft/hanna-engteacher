'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function About() {
  const t = useTranslations('about');

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <Section className="text-center bg-background">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {t('header.title')}
          </h1>
          <p className="text-xl text-text-secondary">
            {t('header.subtitle')}
          </p>
        </Section>

        {/* My Story Section */}
        <Section className="bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {t('my_story_title' || 'My Story')}
            </h2>
            <p className="text-lg text-text-secondary whitespace-pre-line leading-relaxed">
              {t('main_story')}
            </p>
          </div>
        </Section>

        {/* Qualifications Box */}
        <Section className="bg-background">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
              {t('qualifications_title' || 'Qualifications')}
            </h2>
            <Card className="p-6 lg:p-8">
              <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary">
                {t.raw('qualifications').map((q: string, index: number) => (
                  <li key={index}>{q}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        {/* Teaching Philosophy */}
        <Section className="bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {t('teaching_philosophy_title' || 'Teaching Philosophy')}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {t('teaching_philosophy')}
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}