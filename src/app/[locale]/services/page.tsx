'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Briefcase, Plane, GraduationCap, BookOpen } from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');

  const ServiceCard = ({ icon: Icon, title, whatYouLearn, idealFor }: {
    icon: any; // LucideIcon type
    title: string;
    whatYouLearn: string[];
    idealFor: string;
  }) => (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        <Icon size={32} className="text-primary-accent mr-3" />
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
      </div>
      <h4 className="font-medium text-text-primary mb-2">{t('what_you_learn_title')}</h4>
      <ul className="list-disc list-inside text-text-secondary mb-4 space-y-1">
        {whatYouLearn.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4 className="font-medium text-text-primary mb-2">{t('ideal_for_title' || 'Ideal for:')}</h4>
      <p className="text-text-secondary">{idealFor}</p>
    </Card>
  );

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

        {/* Service Categories */}
        <Section className="bg-surface">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
            {t('service_categories_title' || 'My Services')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Briefcase}
              title={t('business_english.title')}
              whatYouLearn={t.raw('business_english.what_you_learn')}
              idealFor={t('business_english.ideal_for')}
            />
            <ServiceCard
              icon={Plane}
              title={t('travel_english.title')}
              whatYouLearn={t.raw('travel_english.what_you_learn')}
              idealFor={t('travel_english.ideal_for')}
            />
            <ServiceCard
              icon={GraduationCap}
              title={t('test_preparation.title')}
              whatYouLearn={t.raw('test_preparation.what_you_learn')}
              idealFor={t('test_preparation.ideal_for')}
            />
            <ServiceCard
              icon={BookOpen}
              title={t('general_english.title')}
              whatYouLearn={t.raw('general_english.what_you_learn')}
              idealFor={t('general_english.ideal_for')}
            />
          </div>
        </Section>

        {/* What Makes My Approach Different */}
        <Section className="bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {t('approach_different.title')}
            </h2>
            <ul className="list-none space-y-3 text-lg text-text-secondary">
              {t.raw('approach_different.items').map((item: string, index: number) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="text-secondary-accent mr-3 text-2xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}