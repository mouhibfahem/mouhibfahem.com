'use client';

import { motion } from 'framer-motion';
import { User, CheckCircle, GraduationCap, Building2 } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-gold-400/30 text-xs font-semibold text-gold-300 uppercase tracking-widest mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>02. À propos</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Ingénierie Informatique & <span className="text-gold-gradient">Vision Système</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Original Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card rounded-2xl p-4 border border-gold-400/30 relative overflow-hidden group">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gold-400/20 mb-4">
                <img
                  src="/mouhib.jpg"
                  alt="Mouhib Fahem - Élève Ingénieur ENICarthage"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="space-y-1.5 px-2 text-center sm:text-left">
                <div className="text-lg font-serif font-bold text-white">Mouhib Fahem</div>
                <div className="text-xs font-medium text-gold-300 flex items-center gap-1.5 justify-center sm:justify-start">
                  <GraduationCap className="w-4 h-4 text-gold-400" />
                  <span>Élève Ingénieur en Génie Informatique (Classe Terminale)</span>
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1.5 justify-center sm:justify-start">
                  <Building2 className="w-4 h-4 text-gold-400" />
                  <span>ENICarthage • Promo 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Main Bio Card & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <h3 className="text-2xl font-serif font-bold text-gold-300 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gold-400 rounded-full" />
                Ingénieur Logiciel, Architecte & Leader
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed font-light text-base">
                <p>
                  {personalData.bio}
                </p>
                <p className="text-gray-400 text-sm">
                  Issu du cycle préparatoire scientifique et actuellement en dernière année de diplôme d'ingénieur à l'ENICarthage, je combine des fondations mathématiques et algorithmiques avec une spécialisation approfondie en génie logiciel moderne (Spring Boot 3, Next.js, Node.js, Oracle, PostgreSQL, Docker, CCNA).
                </p>
              </div>

              {/* Core Strengths */}
              <div className="mt-8 pt-6 border-t border-gold-400/15 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Rigueur & Logique</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Autonomie</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Esprit d'analyse</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Leadership</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Communication</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Travail d'équipe</span>
                </div>
              </div>
            </div>

            {/* Key Metric Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalData.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-xl border border-gold-400/15 hover:border-gold-400/40 transition-all duration-300 text-center"
                >
                  <div className="text-xl font-serif font-bold text-gold-gradient mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
