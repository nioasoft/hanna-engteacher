import "./globals.css";
import { Inter, Heebo } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const heebo = Heebo({
  subsets: ['hebrew'],
  variable: '--font-heebo',
  display: 'swap',
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <body
        className={`${
          locale === 'he' ? heebo.variable : inter.variable
        } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}