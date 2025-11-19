'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <Section className="text-center bg-gray-50">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Let's Start Your English Journey
          </h1>
          <p className="text-xl text-gray-600">
            Schedule your free consultation today and take the first step towards confident English.
          </p>
        </Section>

        {/* Contact Form & Info */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send me a message
              </h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Or contact me directly:
              </h2>
              <address className="not-italic space-y-4">
                <p className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-500" />
                  <Link href="mailto:channa@example.com" className="text-lg text-gray-600 hover:underline">
                    channa@example.com
                  </Link>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-500" />
                  <span className="text-lg text-gray-600">+972-XX-XXX-XXXX</span>
                </p>
              </address>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prefer to talk first?
                </h3>
                <p className="text-gray-600">
                  Schedule a free 20-minute video call to discuss your goals with no obligation.
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