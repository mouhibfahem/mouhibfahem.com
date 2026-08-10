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
  description: 'Portfolio officiel de Mouhib Fahem, élève ingénieur en Génie Informatique à l\'ENICarthage (Classe Terminale) et Délégué Général des Étudiants. Spécialisé en ingénierie logicielle, Java, Spring Boot 3, Next.js & Réseaux CCNA.',
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
    description: 'Portfolio officiel de Mouhib Fahem — Élève ingénieur GI à l\'ENICarthage & Délégué Général des Étudiants. Découvrez mes projets, compétences et stages.',
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

// Schema.org Graph combining ProfilePage, Person, WebSite, and WebApplications
const structuredDataGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://mouhibfahem.vercel.app/#website',
      'url': 'https://mouhibfahem.vercel.app',
      'name': 'Mouhib Fahem',
      'alternateName': ['Mouhib Fahem Portfolio', 'Mouhib Fahem ENICarthage'],
      'publisher': {
        '@id': 'https://mouhibfahem.vercel.app/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://mouhibfahem.vercel.app/#webpage',
      'url': 'https://mouhibfahem.vercel.app',
      'name': 'Mouhib Fahem — Portfolio Officiel',
      'isPartOf': {
        '@id': 'https://mouhibfahem.vercel.app/#website',
      },
      'mainEntity': {
        '@id': 'https://mouhibfahem.vercel.app/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://mouhibfahem.vercel.app/#person',
      'name': 'Mouhib Fahem',
      'url': 'https://mouhibfahem.vercel.app',
      'image': 'https://mouhibfahem.vercel.app/mouhib.jpg',
      'sameAs': [
        'https://www.linkedin.com/in/mouhib-fahem-17a1b4342/',
        'https://github.com/mouhibfahem',
      ],
      'jobTitle': 'Élève Ingénieur en Génie Informatique',
      'description': 'Élève ingénieur en Classe Terminale de Génie Informatique à l\'ENICarthage, développeur logiciel full-stack et réseaux CCNA.',
      'affiliation': {
        '@type': 'EducationalOrganization',
        'name': 'ENICarthage (École Nationale d\'Ingénieurs de Carthage)',
      },
      'alumniOf': [
        {
          '@type': 'EducationalOrganization',
          'name': 'École Nationale d\'Ingénieurs de Carthage (ENICarthage)',
          'url': 'https://enicarthage.rnu.tn',
        },
        {
          '@type': 'EducationalOrganization',
          'name': 'Faculté des Sciences de Monastir (FSM)',
        },
      ],
      'memberOf': [
        {
          '@type': 'Organization',
          'name': 'Délégué Général des Étudiants de l\'ENICarthage',
        },
        {
          '@type': 'Organization',
          'name': 'Microsoft Tech Club ENICarthage',
        },
      ],
      'knowsAbout': [
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
      'email': 'mailto:mouhib.fahem28@gmail.com',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://mouhibfahem.vercel.app/#sage100',
      'name': 'Plateforme SaaS Sage 100 Web',
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Web Browser',
      'author': {
        '@id': 'https://mouhibfahem.vercel.app/#person',
      },
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://mouhibfahem.vercel.app/#scoutini',
      'name': 'Scoutini Platform',
      'applicationCategory': 'SportsApplication',
      'operatingSystem': 'Web Browser',
      'author': {
        '@id': 'https://mouhibfahem.vercel.app/#person',
      },
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://enigov.tn',
      'name': 'EniGov',
      'url': 'https://enigov.tn',
      'applicationCategory': 'GovernanceApplication',
      'operatingSystem': 'Web Browser',
      'author': {
        '@id': 'https://mouhibfahem.vercel.app/#person',
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
        />
      </head>
      <body className="antialiased bg-[#070709] text-gray-100 min-h-screen selection:bg-gold-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
