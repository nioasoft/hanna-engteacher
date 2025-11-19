'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Mail, Whatsapp } from 'lucide-react'; // Placeholder for social media icons, using Lucide for now

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');

  const quickLinks = [
    { href: '/', label: navT('home') },
    { href: '/about', label: navT('about') },
    { href: '/services', label: navT('services') },
    { href: '/process', label: navT('process') },
    { href: '/contact', label: navT('contact') },
  ];

  return (
    <footer className="bg-text-primary text-surface py-10 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('quick_links.title' || "Quick Links")}</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary-accent transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('contact.title' || "Contact Info")}</h3>
          <address className="not-italic space-y-2">
            <p className="flex items-center gap-2">
              <Mail size={18} />
              <Link href="mailto:channa@example.com" className="hover:text-primary-accent transition-colors duration-200">
                channa@example.com
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Whatsapp size={18} />
              <Link href="https://wa.me/972XXXYYYY" className="hover:text-primary-accent transition-colors duration-200">
                +972-XX-XXX-XXXX
              </Link>
            </p>
          </address>
        </div>

        {/* Language Switcher & Social Media */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <LanguageSwitcher />
          {/* Placeholder for Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Add actual social media icons here later */}
          </div>
        </div>
      </div>

      <div className="border-t border-border-medium mt-8 pt-8 text-center text-text-secondary">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
}