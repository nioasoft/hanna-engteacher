'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function About() {
  const qualifications = [
    "CELTA Certified (2025)",
    "B.A. in History & Languages, University of Memphis",
    "Native English Speaker (USA)",
    "5+ Years of Teaching Experience"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <Section className="text-center bg-gray-50">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Channa
          </h1>
          <p className="text-xl text-gray-600">
            Your guide to confident English
          </p>
        </Section>

        {/* My Story Section */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              My Story
            </h2>
            <p className="text-lg text-gray-600 whitespace-pre-line leading-relaxed">
              My name is Channa David, and I bring a lifetime of passion for language and teaching to my work.

              Born and raised in the United States, I developed a deep love for reading and languages. I studied history, foreign languages (French, Latin, Russian, and Spanish), and creative writing at the University of Memphis, all while volunteering to teach English to new immigrants.

              After moving to Israel in 2019, I decided to pursue my dream of becoming a professional English teacher. In January 2025, I completed the prestigious CELTA certification (an international credential for teaching English to adults), where I was mentored by experienced teachers and taught students from all over the world.

              During my training, I received high marks for:
              - Creating authentic and engaging learning materials
              - Building strong rapport with students
              - Designing relevant, practical lessons that make learning enjoyable

              Today, I am dedicated to helping you achieve your English goals through personalized, one-on-one instruction tailored to your unique needs and learning style.
            </p>
          </div>
        </Section>

        {/* Qualifications Box */}
        <Section className="bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Qualifications
            </h2>
            <Card className="p-6 lg:p-8">
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                {qualifications.map((q, index) => (
                  <li key={index}>{q}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        {/* Teaching Philosophy */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Teaching Philosophy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every student is unique, with their own goals, learning style, and pace. That’s why I don’t believe in a one-size-fits-all approach. Instead, I create a completely customized learning experience for each student, using materials and methods that are relevant to your life and interests. Whether you're preparing for a business presentation, planning a trip abroad, or simply want to feel more confident speaking English—we'll work together to get you there.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}