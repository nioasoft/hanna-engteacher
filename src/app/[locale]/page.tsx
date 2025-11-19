'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import IconCard from '@/components/ui/IconCard';
import { User, Video, Globe, Briefcase, Plane, GraduationCap, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="relative flex flex-col items-center justify-center text-center bg-background py-80px lg:py-120px">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link href="/contact" passHref>
                <Button>{t('hero.cta_primary')}</Button>
              </Link>
              <Link href="/process" passHref>
                <Button variant="outline">{t('hero.cta_secondary')}</Button>
              </Link>
            </div>
          </div>
          {/* Placeholder for Channa's Profile Image */}
          <div className="mt-12 w-48 h-48 rounded-full bg-tertiary-accent flex items-center justify-center text-text-secondary text-sm">
            <Image
              src="/images/placeholder.svg"
              alt="Channa David"
              width={192}
              height={192}
              className="rounded-full"
            />
          </div>
        </Section>

        {/* Value Propositions */}
        <Section className="bg-surface">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
            {t('value_propositions_title' || 'Why Learn with Me?')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard
              icon={User}
              title={t('value_propositions.personalized_learning.title')}
              description={t('value_propositions.personalized_learning.description')}
            />
            <IconCard
              icon={Video}
              title={t('value_propositions.virtual_convenience.title')}
              description={t('value_propositions.virtual_convenience.description')}
            />
            <IconCard
              icon={Globe}
              title={t('value_propositions.real_world_english.title')}
              description={t('value_propositions.real_world_english.description')}
            />
          </div>
        </Section>

        {/* Who I Help (Target Audiences) */}
        <Section className="bg-background">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
            {t('target_audiences_title' || 'Who I Help')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <IconCard
              icon={Briefcase}
              title={t('target_audiences.business_professionals.title')}
              description={t('target_audiences.business_professionals.description')}
            />
            <IconCard
              icon={Plane}
              title={t('target_audiences.travel_enthusiasts.title')}
              description={t('target_audiences.travel_enthusiasts.description')}
            />
            <IconCard
              icon={GraduationCap}
              title={t('target_audiences.test_preparation.title')}
              description={t('target_audiences.test_preparation.description')}
            />
            <IconCard
              icon={TrendingUp}
              title={t('target_audiences.general_improvement.title')}
              description={t('target_audiences.general_improvement.description')}
            />
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-primary-accent text-surface text-center py-80px lg:py-100px">
          <h2 className="text-3xl font-bold mb-4">
            {t('cta_section.title')}
          </h2>
          <p className="text-xl mb-8">{t('cta_section.description')}</p>
          <Link href="/contact" passHref>
            <Button variant="secondary" className="bg-surface text-primary-accent hover:bg-tertiary-accent">
              {t('cta_section.button')}
            </Button>
          </Link>
        </Section>
      </main>
      <Footer />
    </>
  );
}