'use client';

import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-gold-400/15 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-8 border-b border-gold-400/10 text-center md:text-left">
          {/* Brand & Subtitle */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center text-dark-900 font-serif font-bold text-base shadow-gold-sm shrink-0">
              MF
            </span>
            <div>
              <span className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
                Mouhib Fahem<span className="text-gold-400">.</span>
              </span>
              <p className="text-xs text-gray-400">
                {personalData.title} • {personalData.institution}
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full glass-card text-gray-400 hover:text-gold-300 hover:border-gold-400/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full glass-card text-gray-400 hover:text-gold-300 hover:border-gold-400/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email"
              className="p-2.5 rounded-full glass-card text-gray-400 hover:text-gold-300 hover:border-gold-400/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="flex items-center gap-2 text-xs text-gold-400 hover:text-gold-200 transition-colors group"
          >
            <span>Haut de page</span>
            <div className="p-2 rounded-full glass-pill border border-gold-400/20 group-hover:border-gold-400/50">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Copyright & Discrete Signature */}
        <div className="pt-6 sm:pt-8 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="font-light">
            Conçu et développé par moi — <span className="font-semibold text-white">Mouhib Fahem</span>
          </p>
          <p className="font-mono text-gray-500">
            © {new Date().getFullYear()} • <span className="text-gold-400/80">{personalData.domain}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
