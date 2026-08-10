import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#070709',
};

export const metadata: Metadata = {
  title: 'Mouhib Fahem — Élève Ingénieur en Génie Informatique | ENICarthage',
  description: 'Né le 28 août 2003 (23 ans), originaire de Ben Guerdane et résidant à l\'Ariana (Tunis), Mouhib Fahem est élève ingénieur en Classe Terminale de Génie Informatique à l\'ENICarthage. Délégué Général des Étudiants.',
  applicationName: 'Mouhib Fahem',
  appleWebApp: {
    title: 'Mouhib Fahem',
  },
  keywords: [
    'Mouhib Fahem',
    'ENICarthage',
    'Ingénieur Informatique',
    'Génie Informatique Classe Terminale',
    'Tunisie',
    'Java',
    'Spring Boot 3',
    'Next.js',
    'Sage 100 SaaS',
    'Clickovate',
    'EniGov',
    'Scoutini Platform',
    'BengoDelivery',
    'CCNA',
    'Portfolio'
  ],
  authors: [{ name: 'Mouhib Fahem', url: 'https://mouhibfahem.vercel.app' }],
  creator: 'Mouhib Fahem',
  metadataBase: new URL('https://mouhibfahem.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: ['/favicon.png'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'Mouhib Fahem — Élève Ingénieur en Génie Informatique (Classe Terminale)',
    description: 'Né le 28 août 2003 (23 ans). Élève ingénieur GI à l\'ENICarthage & Délégué Général des Étudiants. Découvrez mes projets, compétences et stages.',
    url: 'https://mouhibfahem.vercel.app',
    siteName: 'Mouhib Fahem',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouhib Fahem — Élève Ingénieur en Génie Informatique',
    description: 'Portfolio officiel de Mouhib Fahem - ENICarthage Classe Terminale GI',
  },
  verification: {
    google: 'gJY-TGj-kIJy4LV73IgKzwO1MEKwVa1OXerpP52piBY',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mouhib Fahem',
  alternateName: ['Mouhib Fahem Portfolio', 'Mouhib Fahem ENICarthage'],
  url: 'https://mouhibfahem.vercel.app',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mouhib Fahem',
  birthDate: '2003-08-28',
  alternateName: ['Mouhib Fahem ENICarthage', 'mouhibfahem'],
  url: 'https://mouhibfahem.vercel.app',
  image: 'https://mouhibfahem.vercel.app/mouhib.jpg',
  sameAs: [
    'https://www.linkedin.com/in/mouhib-fahem-17a1b4342/',
    'https://github.com/mouhibfahem',
  ],
  jobTitle: 'Élève Ingénieur en Génie Informatique',
  worksFor: {
    '@type': 'EducationalOrganization',
    name: 'ENICarthage (École Nationale d\'Ingénieurs de Carthage)',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'ENICarthage',
  },
  knowsAbout: [
    'Software Engineering',
    'Génie Informatique',
    'Full-Stack Web Development',
    'Next.js',
    'React',
    'Node.js',
    'Express.js',
    'Spring Boot 3',
    'Prisma ORM',
    'PostgreSQL',
    'Sage 100 SaaS Migration',
    'Cisco CCNA Networking',
  ],
  email: 'mailto:mouhib.fahem28@gmail.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="512x512" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#070709] text-gray-100 min-h-screen selection:bg-gold-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
