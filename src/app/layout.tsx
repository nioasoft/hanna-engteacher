import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Channa David | English Teacher - Personalized 1-on-1 Lessons",
  description: "CELTA-certified English teacher offering personalized virtual lessons for business professionals, travelers, and test preparation.",
  keywords: "English teacher, CELTA, online English lessons, business English, travel English"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}