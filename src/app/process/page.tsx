'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/ui/Timeline';

export default function Process() {
  const expectations = [
    "Prepared & Engaged - Come ready to participate actively.",
    "Practice Consistently - Complete exercises and practice between lessons.",
    "Be Patient - Progress takes time; trust the process.",
    "Communicate Openly - Let me know what works and what doesn't.",
    "Use English Daily - Try to practice outside our lessons when possible."
  ];
  
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <Section className="text-center bg-gray-50">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            How We Work Together
          </h1>
          <p className="text-xl text-gray-600">
            A clear path to English confidence
          </p>
        </Section>

        {/* Timeline/Steps Section */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto">
            <Timeline>
              <Timeline.Item
                step={1}
                title="Free Consultation (20-30 mins)"
                description={
                  <ul className="list-disc list-inside space-y-1">
                    <li>Discuss your English goals and needs</li>
                    <li>Get to know each other</li>
                    <li>Ask any questions you have</li>
                    <li>No commitment or payment required</li>
                  </ul>
                }
              />
              <Timeline.Item
                step={2}
                title="Level Assessment"
                description={
                  <ul className="list-disc list-inside space-y-1">
                    <li>Evaluate your current English proficiency</li>
                    <li>Identify strengths and areas for improvement</li>
                    <li>Understand your learning style and preferences</li>
                    <li>Determine the best approach for you</li>
                  </ul>
                }
              />
              <Timeline.Item
                step={3}
                title="Personalized Curriculum"
                description={
                  <ul className="list-disc list-inside space-y-1">
                    <li>Design a custom curriculum just for you</li>
                    <li>Set clear, achievable goals</li>
                    <li>Choose lesson frequency and schedule</li>
                    <li>Select materials relevant to your interests</li>
                  </ul>
                }
              />
              <Timeline.Item
                step={4}
                title="Begin Learning"
                description={
                  <ul className="list-disc list-inside space-y-1">
                    <li>Weekly (or your preferred frequency) virtual lessons</li>
                    <li>Interactive and engaging sessions</li>
                    <li>Practical homework and exercises</li>
                    <li>Ongoing support between lessons</li>
                  </ul>
                }
              />
              <Timeline.Item
                step={5}
                title="Track & Adapt"
                description={
                  <ul className="list-disc list-inside space-y-1">
                    <li>Regular feedback on your progress</li>
                    <li>Adjust the curriculum as needed</li>
                    <li>Celebrate milestones and achievements</li>
                    <li>Lessons evolve as your skills grow</li>
                  </ul>
                }
              />
            </Timeline>
          </div>
        </Section>
        
        {/* My Expectations from Students */}
        <Section className="bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              My Expectations from Students
            </h2>
            <p className="text-lg text-gray-600 mb-8">Language learning is a partnership. To get the most out of our lessons, I ask that you be:</p>
            <ul className="list-none space-y-3 text-lg text-gray-600">
              {expectations.map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="text-green-500 mr-3 text-2xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600 mt-8">I'm here to guide, support, and challenge you—but your commitment is what makes real progress possible. Together, we'll achieve your English goals.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}