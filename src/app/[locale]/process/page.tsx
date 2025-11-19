'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/ui/Timeline';

export default function Process() {
  const t = useTranslations('process');

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

        {/* Timeline/Steps Section */}
        <Section className="bg-surface">
          <div className="max-w-4xl mx-auto">
            <Timeline>
              <Timeline.Item
                step={1}
                title={t('steps.consultation.title')}
                description={
                  <ul className="list-disc list-inside space-y-1">
                    {t.raw('steps.consultation.description').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              />
              <Timeline.Item
                step={2}
                title={t('steps.assessment.title')}
                description={
                  <ul className="list-disc list-inside space-y-1">
                    {t.raw('steps.assessment.description').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              />
              <Timeline.Item
                step={3}
                title={t('steps.plan.title')}
                description={
                  <ul className="list-disc list-inside space-y-1">
                    {t.raw('steps.plan.description').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              />
              <Timeline.Item
                step={4}
                title={t('steps.begin.title')}
                description={
                  <ul className="list-disc list-inside space-y-1">
                    {t.raw('steps.begin.description').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              />
              <Timeline.Item
                step={5}
                title={t('steps.track.title')}
                description={
                  <ul className="list-disc list-inside space-y-1">
                    {t.raw('steps.track.description').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              />
            </Timeline>
          </div>
        </Section>
        
        {/* My Expectations from Students */}
        <Section className="bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {t('expectations.title')}
            </h2>
            <p className="text-lg text-text-secondary mb-8">{t('expectations.introduction')}</p>
            <ul className="list-none space-y-3 text-lg text-text-secondary">
              {t.raw('expectations.items').map((item: string, index: number) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="text-secondary-accent mr-3 text-2xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-text-secondary mt-8">{t('expectations.conclusion')}</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}