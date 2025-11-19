'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Briefcase, Plane, GraduationCap, BookOpen } from 'lucide-react';

export default function Services() {
  const ServiceCard = ({ icon: Icon, title, whatYouLearn, idealFor }: {
    icon: any; // LucideIcon type
    title: string;
    whatYouLearn: string[];
    idealFor: string;
  }) => (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        <Icon size={32} className="text-blue-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <h4 className="font-medium text-gray-800 mb-2">What You'll Learn:</h4>
      <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
        {whatYouLearn.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4 className="font-medium text-gray-800 mb-2">Ideal for:</h4>
      <p className="text-gray-600">{idealFor}</p>
    </Card>
  );
  
  const approachItems = [
    "100% Customized Curriculum - Every lesson is designed for your specific needs.",
    "Flexible Virtual Scheduling - Learn when and where it's convenient for you.",
    "Real-World Materials - Practical content you'll actually use.",
    "Constant Progress Tracking - Clear goals and measurable results.",
    "Supportive Environment - Patient, encouraging instruction that builds confidence."
  ];

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <Section className="text-center bg-gray-50">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            How I Can Help
          </h1>
          <p className="text-xl text-gray-600">
            English instruction tailored to your goals
          </p>
        </Section>

        {/* Service Categories */}
        <Section className="bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Briefcase}
              title="Business English"
              whatYouLearn={[
                "Write clear, professional emails and reports",
                "Deliver presentations with confidence",
                "Participate effectively in meetings",
                "Handle negotiations and business discussions",
                "Build industry-specific vocabulary"
              ]}
              idealFor="Professionals, managers, entrepreneurs, and anyone advancing their career"
            />
            <ServiceCard
              icon={Plane}
              title="Travel English"
              whatYouLearn={[
                "Handle everyday conversations with confidence",
                "Book transportation and accommodations",
                "Order at restaurants and cafes",
                "Ask for directions and help",
                "Navigate common travel situations"
              ]}
              idealFor="Travelers planning international trips and anyone who wants to explore the world"
            />
            <ServiceCard
              icon={GraduationCap}
              title="Test Preparation"
              whatYouLearn={[
                "Reading comprehension strategies",
                "Academic vocabulary and terminology",
                "Time management techniques",
                "Test-taking strategies",
                "Critical analysis skills"
              ]}
              idealFor="Students preparing for university entrance exams"
            />
            <ServiceCard
              icon={BookOpen}
              title="General English Improvement"
              whatYouLearn={[
                "Master English grammar fundamentals",
                "Expand your vocabulary naturally",
                "Improve speaking fluency and pronunciation",
                "Strengthen reading comprehension",
                "Develop writing skills"
              ]}
              idealFor="Anyone who wants to strengthen their overall English abilities"
            />
          </div>
        </Section>

        {/* What Makes My Approach Different */}
        <Section className="bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Makes My Approach Different
            </h2>
            <ul className="list-none space-y-3 text-lg text-gray-600">
              {approachItems.map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="text-green-500 mr-3 text-2xl">✓</span>
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