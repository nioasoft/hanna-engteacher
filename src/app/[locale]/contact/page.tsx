'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, Phone } from 'lucide-react';
import { Link } from '@/navigation';

export default function Contact() {
  const t = useTranslations('contact');

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

        {/* Contact Form & Info */}
        <Section className="bg-surface">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                {t('form_title' || 'Send me a message')}
              </h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                {t('alternative_contact.direct_contact_title')}
              </h2>
              <address className="not-italic space-y-4">
                <p className="flex items-center gap-3">
                  <Mail size={20} className="text-primary-accent" />
                  <Link href={`mailto:${t('alternative_contact.email')}`} className="text-lg text-text-secondary hover:underline">
                    {t('alternative_contact.email')}
                  </Link>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} className="text-primary-accent" />
                  <span className="text-lg text-text-secondary">{t('alternative_contact.whatsapp')}</span>
                </p>
              </address>
              <div className="mt-8 border-t border-border-light pt-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {t('alternative_contact.talk_first_title')}
                </h3>
                <p className="text-text-secondary">
                  {t('alternative_contact.talk_first_description')}
                </p>
                {/* Calendly link can be added here */}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}