'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, ChevronRight, Award, Star } from 'lucide-react';
import { experienceData } from '@/data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-dark-800/40">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>05. Expérience Professionnelle</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Stages d'Ingénieur & <span className="text-gold-gradient">Leadership</span>
          </motion.h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-2xl p-6 sm:p-8 relative hover:border-gold-400/50 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-gold-400/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      exp.type === 'Stage'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-gold-400/10 text-gold-300 border border-gold-400/20'
                    }`}>
                      {exp.type}
                    </span>
                    {exp.score && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                        Évaluation : {exp.score} (Excellente)
                      </span>
                    )}
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        En cours
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-medium text-gray-300 mt-1">
                    <Building2 className="w-4 h-4 text-gold-400" />
                    <span>{exp.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 bg-gold-400/5 border border-gold-400/15 px-3 py-1.5 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-3">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
