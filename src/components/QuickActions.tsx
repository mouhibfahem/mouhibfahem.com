'use client';

import { useEffect, useState } from 'react';
import { Download, Mail, Linkedin, BadgeCheck } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

const actions = [
  { href: personalData.cvPath, label: 'CV', Icon: Download, external: true, primary: true },
  { href: `mailto:${personalData.email}`, label: 'Email', Icon: Mail, external: false },
  { href: personalData.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
  { href: personalData.credly, label: 'Badges', Icon: BadgeCheck, external: true },
];

// Barre fixe en bas d'écran sur mobile : CV, email, LinkedIn et Credly toujours à un tap.
export default function QuickActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      aria-label="Actions rapides"
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="grid grid-cols-4 gap-1 p-1.5 rounded-2xl bg-[#0c0c10]/90 backdrop-blur-xl border border-gold-400/25 shadow-2xl shadow-black/60">
        {actions.map(({ href, label, Icon, external, primary }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl text-[11px] font-semibold transition-colors ${
              primary
                ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-dark-900'
                : 'text-gray-300 hover:text-gold-300 hover:bg-gold-400/10'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
