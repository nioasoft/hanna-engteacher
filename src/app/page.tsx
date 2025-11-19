'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import IconCard from '@/components/ui/IconCard';
import { User, Video, Globe, Briefcase, Plane, GraduationCap, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="relative flex flex-col items-center justify-center text-center bg-gray-50 py-80px lg:py-120px">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Personalized English Learning, Just for You
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master English with virtual, one-on-one lessons built around your goals, schedule, and learning style. CELTA-certified instruction that makes learning engaging and effective.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link href="/contact" passHref>
                <Button>Schedule a Free Consultation</Button>
              </Link>
              <Link href="/process" passHref>
                <Button variant="outline">Discover My Method</Button>
              </Link>
            </div>
          </div>
          {/* Placeholder for Channa's Profile Image */}
          <div className="mt-12 w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
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
        <Section className="bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Learn with Me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard
              icon={User}
              title="1-on-1 Personalized Learning"
              description="Every lesson is designed just for you. I build a custom curriculum based on your goals, interests, and learning style—no generic textbooks, just materials that matter to you."
            />
            <IconCard
              icon={Video}
              title="Virtual Convenience"
              description="Learn from anywhere with flexible scheduling. All you need is an internet connection and a device. No commutes, no fixed locations—just effective learning that fits your life."
            />
            <IconCard
              icon={Globe}
              title="Real-World English"
              description="Focus on practical, everyday English you’ll actually use. Whether it’s for work, travel, or casual conversations, you’ll learn skills that make an immediate difference in your life."
            />
          </div>
        </Section>

        {/* Who I Help (Target Audiences) */}
        <Section className="bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Who I Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <IconCard
              icon={Briefcase}
              title="Business Professionals"
              description="Excel in your career with professional English skills. Master presentations, email writing, meetings, and negotiations to communicate confidently in any business environment."
            />
            <IconCard
              icon={Plane}
              title="Travel Enthusiasts"
              description="Travel with confidence. Learn conversational English for navigating airports, booking hotels, ordering at restaurants, and connecting with people around the world."
            />
            <IconCard
              icon={GraduationCap}
              title="Test Preparation"
              description="Ace your university entrance exams with focused English instruction. Build reading comprehension, academic vocabulary, and test-taking strategies for success in higher education."
            />
            <IconCard
              icon={TrendingUp}
              title="General English Improvement"
              description="Strengthen your overall English abilities. Improve grammar, expand your vocabulary, build speaking confidence, and enhance your reading and writing skills at your own pace."
            />
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-blue-500 text-white text-center py-80px lg:py-100px">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your English Journey?
          </h2>
          <p className="text-xl mb-8">Let's talk about your goals and create a learning plan that works for you. Schedule a free, no-obligation 20-minute consultation call.</p>
          <Link href="/contact" passHref>
            <Button variant="secondary" className="bg-white text-blue-500 hover:bg-gray-200">
              Schedule a Free Consultation
            </Button>
          </Link>
        </Section>
      </main>
      <Footer />
    </>
  );
}