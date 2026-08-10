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
  description: 'Portfolio officiel de Mouhib Fahem, élève ingénieur en Génie Informatique à l\'ENICarthage (Classe Terminale). Spécialisé en ingénierie logicielle, Java, Spring Boot, Next.js & Réseaux CCNA.',
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
    'BengoDelivery',
    'CCNA',
    'Portfolio'
  ],
  authors: [{ name: 'Mouhib Fahem', url: 'https://mouhibfahem.com' }],
  creator: 'Mouhib Fahem',
  metadataBase: new URL('https://mouhibfahem.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.png'],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: 'Mouhib Fahem — Élève Ingénieur en Génie Informatique (Classe Terminale)',
    description: 'Élève ingénieur GI à l\'ENICarthage. Découvrez mes projets (SaaS Sage 100, EniGov, BengoDelivery), compétences et stages.',
    url: 'https://mouhibfahem.com',
    siteName: 'Mouhib Fahem Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouhib Fahem — Élève Ingénieur en Génie Informatique',
    description: 'Portfolio professionnel de Mouhib Fahem - ENICarthage Classe Terminale GI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="antialiased bg-[#070709] text-gray-100 min-h-screen selection:bg-gold-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
