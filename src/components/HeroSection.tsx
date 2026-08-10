'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github, GraduationCap, Code, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[750px] h-[320px] sm:h-[600px] lg:h-[750px] bg-gold-400/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none animate-gold-pulse" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-gold-600/5 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e0a_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Pill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-5 sm:mb-6"
            >
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-pill border border-gold-400/30 text-[11px] sm:text-xs font-semibold text-gold-300 shadow-gold-sm flex items-center gap-1.5 max-w-full truncate">
                <GraduationCap className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="truncate">CLASSE TERMINALE — GÉNIE INFORMATIQUE</span>
              </span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-pill border border-white/10 text-[11px] sm:text-xs font-medium text-gray-300">
                ENICarthage
              </span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-3 sm:mb-4 leading-tight break-words"
            >
              Mouhib <span className="text-gold-gradient italic font-normal">Fahem</span>
            </motion.h1>

            {/* Title Subheading & Specialty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-1.5 sm:space-y-2 mb-6"
            >
              <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-gray-200">
                {personalData.title}
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-gold-400 font-semibold">
                Classe Terminale — Cycle d'Ingénieur
              </p>
              <p className="text-xs sm:text-base md:text-lg text-gold-400/90 font-medium tracking-wide">
                {personalData.subtitle}
              </p>
            </motion.div>

            {/* Current Focus Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="glass-card p-3 sm:p-4 rounded-xl border border-gold-400/25 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 backdrop-blur-xl text-left"
            >
              <div className="text-[10px] sm:text-[11px] font-semibold text-gold-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Domaine d'expertise principal</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-200 leading-relaxed">
                {personalData.currentFocus}
              </p>
            </motion.div>

            {/* Specialization Tags Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personalData.specializationPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 sm:px-3 rounded-lg glass-pill border border-gold-400/15 text-[11px] sm:text-xs text-gray-300 font-medium"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* 2 Main Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm text-dark-900 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 hover:brightness-110 shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Code className="w-4 h-4" />
                Voir les projets
              </a>

              <a
                href={personalData.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm text-gold-300 border border-gold-400/40 hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Télécharger le CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-5 sm:gap-6 pt-4 border-t border-gold-400/10 max-w-xs mx-auto lg:mx-0"
            >
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full glass-card text-gray-400 hover:text-gold-300 hover:border-gold-400/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-full glass-card text-gray-400 hover:text-gold-300 hover:border-gold-400/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full glass-card text-gray-400 hover:text-gold-300 hover:border-gold-400/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Full Aspect-Ratio Original Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0"
          >
            {/* Glowing Golden Architectural Frame with exact 3:4 aspect ratio */}
            <div className="relative w-full max-w-[320px] sm:max-w-[370px] lg:max-w-[400px] aspect-[3/4] rounded-3xl p-1 bg-gradient-to-b from-gold-300/50 via-gold-500/25 to-gold-700/10 shadow-gold-glow">
              
              {/* Inner Card Container: 100% full photo visibility */}
              <div className="w-full h-full rounded-[22px] overflow-hidden relative border border-gold-400/30 group">
                <img
                  src="/mouhib.jpg"
                  alt="Mouhib Fahem - Élève Ingénieur ENICarthage"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient vignette overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/20 pointer-events-none" />

                {/* Bottom Signature Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 glass-card p-2.5 sm:p-3.5 rounded-xl border border-gold-400/40 flex items-center justify-between backdrop-blur-xl">
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-serif font-bold text-white">Mouhib Fahem</h4>
                    <p className="text-[9px] sm:text-[10px] text-gold-300">Classe Terminale GI @ ENICarthage</p>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-wider bg-gold-400/20 text-gold-300 border border-gold-400/40">
                    Promo 2026
                  </span>
                </div>
              </div>

              {/* Floating Tech Badges around the portrait */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 left-2 sm:-top-4 sm:-left-4 z-30 glass-card px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-gold-400/40 text-[10px] sm:text-xs font-semibold text-gold-300 shadow-lg flex items-center gap-1.5"
              >
                <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400" />
                <span>Spring Boot 3</span>
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
                className="absolute bottom-14 left-2 sm:bottom-16 sm:-left-4 z-30 glass-card px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-gold-400/40 text-[10px] sm:text-xs font-semibold text-gray-200 shadow-lg flex items-center gap-1.5"
              >
                <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400" />
                <span>Next.js & Node.js</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
