'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-10 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-500 transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <address className="not-italic space-y-2">
            <p className="flex items-center gap-2">
              <Mail size={18} />
              <Link href="mailto:channa@example.com" className="hover:text-blue-500 transition-colors duration-200">
                channa@example.com
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} />
              <Link href="https://wa.me/972XXXYYYY" className="hover:text-blue-500 transition-colors duration-200">
                +972-XX-XXX-XXXX
              </Link>
            </p>
          </address>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          {/* Placeholder for Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Add actual social media icons here later */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-400">
        <p>© 2025 Channa David - English Teacher. All Rights Reserved.</p>
      </div>
    </footer>
  );
}