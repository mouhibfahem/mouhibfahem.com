'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github, Code, ShieldCheck, Cloud, BadgeCheck, ArrowRight, MapPin } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

const socials = [
  { href: personalData.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
  { href: personalData.github, label: 'GitHub', Icon: Github, external: true },
  { href: personalData.credly, label: 'Credly — badges vérifiés', Icon: BadgeCheck, external: true },
  { href: `mailto:${personalData.email}`, label: 'Email', Icon: Mail, external: false },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[750px] h-[320px] sm:h-[600px] lg:h-[750px] bg-gold-400/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none animate-gold-pulse" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-gold-600/5 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e0a_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Availability */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 pl-2.5 pr-3.5 py-1.5 rounded-full glass-pill border border-emerald-400/30 text-[11px] sm:text-xs font-semibold text-emerald-200 mb-6 hover:border-emerald-400/60 transition-colors max-w-full"
            >
              <span className="relative flex w-2.5 h-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="truncate">Disponible pour un PFE — février 2027 · 4 mois min.</span>
            </motion.a>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-4 leading-[1.05] break-words"
            >
              Mouhib <span className="text-gold-gradient italic font-normal">Fahem</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-gray-100">
                {personalData.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
                <span className="text-gold-300 font-semibold">ENICarthage</span>
                <span className="text-gold-400/40">•</span>
                <span>Dernière année · Promo 2027</span>
                <span className="text-gold-400/40">•</span>
                <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gold-400/70" />{personalData.location}</span>
              </p>
            </motion.div>

            {/* Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Développeur <span className="text-white font-medium">full-stack</span> — Next.js, React, Node.js, Prisma, PostgreSQL et Spring Boot.
              Stage chez Clickovate <span className="text-gold-300 font-semibold">évalué 19/20</span>, plateforme EniGov
              {' '}<span className="text-gold-300 font-semibold">en production</span>, certifié <span className="text-white font-medium">CCNA</span> et <span className="text-white font-medium">AWS Cloud Foundations</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-8 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0"
            >
              <a
                href={personalData.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full font-semibold text-sm text-dark-900 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 hover:brightness-110 shadow-gold-glow transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Télécharger le CV
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full font-semibold text-sm text-gold-200 border border-gold-400/40 hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                Me contacter
              </a>
              <a
                href="#projects"
                className="px-4 py-3.5 rounded-full font-medium text-sm text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 group"
              >
                Voir les projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Proof strip */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-gold-400/15 bg-gold-400/10 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {personalData.highlights.map((item) => (
                <div key={item.label} className="bg-[#0b0b0f] px-3 py-3.5 text-center lg:text-left">
                  <dt className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">{item.label}</dt>
                  <dd className="text-base sm:text-lg font-serif font-bold text-gold-gradient leading-tight mt-1">{item.value}</dd>
                  <dd className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 leading-snug">{item.description}</dd>
                </div>
              ))}
            </motion.dl>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {socials.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={label}
                  title={label}
                  className="p-2.5 rounded-full glass-card text-gray-400 hover:text-gold-300 hover:border-gold-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px] aspect-[3/4] rounded-3xl p-1 bg-gradient-to-b from-gold-300/50 via-gold-500/25 to-gold-700/10 shadow-gold-glow">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative border border-gold-400/30 group">
                <img
                  src="/mouhib.jpg"
                  alt="Mouhib Fahem - Élève Ingénieur ENICarthage"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 glass-card p-2.5 sm:p-3.5 rounded-xl border border-gold-400/40 flex items-center justify-between backdrop-blur-xl">
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white">Mouhib Fahem</h4>
                    <p className="text-[9px] sm:text-[10px] text-gold-300">Délégué Général des Étudiants</p>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-wider bg-gold-400/20 text-gold-300 border border-gold-400/40">
                    Promo 2027
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 left-2 sm:-top-4 sm:-left-4 z-30 glass-card px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-gold-400/40 text-[10px] sm:text-xs font-semibold text-gold-300 shadow-lg flex items-center gap-1.5"
              >
                <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400" />
                <span>Next.js & Node.js</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 right-2 sm:-right-4 z-30 glass-card px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-gold-400/40 text-[10px] sm:text-xs font-semibold text-gray-200 shadow-lg flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400" />
                <span>CCNA Cisco</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 left-2 sm:bottom-20 sm:-left-4 z-30 glass-card px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-gold-400/40 text-[10px] sm:text-xs font-semibold text-gray-200 shadow-lg flex items-center gap-1.5"
              >
                <Cloud className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400" />
                <span>AWS Cloud</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
