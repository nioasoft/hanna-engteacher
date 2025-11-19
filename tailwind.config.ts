import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
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