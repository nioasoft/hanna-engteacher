import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: '#FAFAF9',
        surface: '#FFFFFF',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
        'primary-accent': '#60A5FA',
        'secondary-accent': '#34D399',
        'tertiary-accent': '#F3F4F6',
        'border-light': '#E5E7EB',
        'border-medium': '#D1D5DB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        heebo: ['var(--font-heebo)', ...fontFamily.sans], // Custom font for Hebrew
      },
      lineHeight: {
        '1.6': '1.6',
      },
      spacing: {
        '80px': '80px',
        '40px': '40px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
      },
      borderRadius: {
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
      },
    },
  },
  plugins: [],
};

export default config;