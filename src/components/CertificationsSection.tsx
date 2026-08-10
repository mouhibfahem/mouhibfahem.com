'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Globe2, Calendar, CheckCircle } from 'lucide-react';
import { certificationsData, languagesData } from '@/data/portfolioData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative bg-dark-800/40">
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
            <Award className="w-3.5 h-3.5" />
            <span>07. Certifications & Langues</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Accréditations & <span className="text-gold-gradient">Langues</span>
          </motion.h2>
        </div>

        {/* Content Grid: Certifications + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Certifications */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              Certifications Officielles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-card rounded-2xl p-6 relative group hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gold-400/15 border border-gold-400/30 text-gold-300">
                        {cert.badgeText}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gold-400" />
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-xs font-semibold text-gold-400/90 mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-gray-300 leading-relaxed pt-3 border-t border-gold-400/10">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gold-400/10 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Vérifié / Certifié</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages */}
          <div className="lg:col-span-4">
            <div className="glass-card rounded-2xl p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2 pb-4 border-b border-gold-400/10">
                  <Globe2 className="w-5 h-5 text-gold-400" />
                  Langues Pratiquées
                </h3>

                <div className="space-y-6">
                  {languagesData.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-white">{lang.name}</span>
                        <span className="text-xs font-mono text-gold-300">{lang.level}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-dark-900 overflow-hidden border border-gold-400/15">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gold-400/10 text-xs text-gray-400 leading-relaxed">
                Pratique quotidienne du français et de l'anglais dans le cadre des études d'ingénieur et de la documentation technique informatique.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
