# Channa David - English Teacher Website

This is the source code for the personal website of Channa David, a CELTA-certified English teacher. The website is built with Next.js and Tailwind CSS, and it is fully bilingual (English and Hebrew).

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** `next-intl`
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd hanna-engteacher
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To run the website in development mode, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/src
  /app
    /[locale]         # Dynamic routes for internationalization
      /about          # About page
      /contact        # Contact page
      /process        # Process page
      /services       # Services page
      /layout.tsx     # Locale-specific layout
      /page.tsx       # Home page
    /layout.tsx       # Root layout
  /components
    /layout         # Header, Footer, LanguageSwitcher
    /sections       # Page-specific sections (e.g., ContactForm)
    /ui             # Reusable UI components (Button, Card, etc.)
  /content          # Translation files
    /en.json
    /he.json
  /lib
    /i18n.ts        # next-intl configuration
    /utils.ts       # Utility functions (e.g., cn)
  /navigation.ts    # next-intl navigation
/public
  /images           # Static images
/middleware.ts      # next-intl middleware for routing
```

## Deployment

The website is designed for deployment on [Vercel](https://vercel.com/). Simply connect your Git repository to Vercel to deploy.