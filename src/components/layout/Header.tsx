'use client';

'use client';

import { Link } from '@/navigation'; // Corrected import for next-intl Link
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/process', label: t('process') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="bg-surface shadow-sm py-4 px-4 sm:px-6 lg:px-8">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-text-primary">
          Channa David | English Teacher
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text-secondary hover:text-primary-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-surface shadow-md py-4 z-10">
            <ul className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary-accent transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}