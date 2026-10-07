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
  description: 'Portfolio officiel de Mouhib Fahem, élève ingénieur en Génie Informatique à l\'ENICarthage (Dernière année) et Délégué Général des Étudiants. Développeur full-stack (Next.js, Node.js, Spring Boot), certifié CCNA et AWS Cloud Foundations. Recherche un stage PFE dès février 2027.',
  applicationName: 'Mouhib Fahem',
  appleWebApp: {
    title: 'Mouhib Fahem',
  },
  keywords: [
    'Mouhib Fahem',
    'ENICarthage',
    'Ingénieur Informatique',
    'Génie Informatique Dernière Année',
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
    'AWS Cloud Foundations',
    'Stage PFE 2027',
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
    title: 'Mouhib Fahem — Élève Ingénieur en Génie Informatique (Dernière année)',
    description: 'Portfolio officiel de Mouhib Fahem — Élève ingénieur GI à l\'ENICarthage & Délégué Général des Étudiants. Découvrez mes projets, compétences et stages.',
    url: 'https://mouhibfahem.vercel.app',
    siteName: 'Mouhib Fahem',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouhib Fahem — Élève Ingénieur en Génie Informatique',
    description: 'Portfolio officiel de Mouhib Fahem - ENICarthage Dernière année GI',
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
      'url': 'https://mouhibfahem.vercel.app/',
      'name': 'Mouhib Fahem',
      'alternateName': ['Mouhib Fahem', 'Mouhib Fahem Portfolio', 'Mouhib Fahem ENICarthage', 'mouhibfahem'],
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
      'image': 'https://mouhibfahem.vercel.app/mouhibfh.jpg',
      'sameAs': [
        'https://www.linkedin.com/in/mouhib-fahem-17a1b4342/',
        'https://github.com/mouhibfahem',
        'https://www.credly.com/users/mouhib-fahem',
      ],
      'jobTitle': 'Élève Ingénieur en Génie Informatique',
      'description': 'Élève ingénieur en dernière année de Génie Informatique à l\'ENICarthage, développeur logiciel full-stack et réseaux CCNA.',
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
        'AWS Cloud',
        'Python',
        'Cybersecurity',
      ],
      'hasCredential': [
        ['CCNA: Switching, Routing, and Wireless Essentials', 'Cisco', 'https://www.credly.com/badges/d3c2c599-a13b-4135-9858-9597f3bcd8bc/public_url'],
        ['AWS Academy Graduate - Cloud Foundations', 'Amazon Web Services', 'https://www.credly.com/badges/0f3b35a5-7f1d-41c4-a795-bfcca85dbe39/public_url'],
        ['Python Essentials 1', 'Cisco', 'https://www.credly.com/badges/24d3526c-105d-42b2-8c10-83ed6dab4816/public_url'],
        ['Python Essentials 2', 'Cisco', 'https://www.credly.com/badges/5f92e95e-7c76-4b1d-89ad-d50f73e0b4a7/public_url'],
        ['Introduction to Cybersecurity', 'Cisco', 'https://www.credly.com/badges/dbec3510-adc7-4829-a308-94db07e99b3a/public_url'],
        ['Introduction to Data Science', 'Cisco', 'https://www.credly.com/badges/4624f1cb-aaf3-4c20-b5b1-2efd723d215f/public_url'],
        ['Introduction to IoT', 'Cisco', 'https://www.credly.com/badges/fa35c7b4-7d86-4db5-92d9-3b058c6ce2b6/public_url'],
      ].map(([name, issuer, url]) => ({
        '@type': 'EducationalOccupationalCredential',
        'name': name,
        'credentialCategory': 'badge',
        'url': url,
        'recognizedBy': { '@type': 'Organization', 'name': issuer },
      })),
      'email': 'mailto:mouhib.fahem@enicar.ucar.tn',
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
