import type { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const heebo = Heebo({
  subsets: ['hebrew'],
  variable: '--font-heebo',
});

export const metadata: Metadata = {
  title: "Channa David | English Teacher - Personalized 1-on-1 Lessons",
  description: "CELTA-certified English teacher offering personalized virtual lessons for business professionals, travelers, and test preparation.",
  keywords: "English teacher, CELTA, online English lessons, business English, travel English"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${heebo.variable} bg-gray-50 text-gray-800 font-sans`}>
        {children}
      </body>
    </html>
  );
}