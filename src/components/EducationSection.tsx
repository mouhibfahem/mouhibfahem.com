'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '@/data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative bg-dark-800/40">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>03. Éducation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Parcours <span className="text-gold-gradient">Académique</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Golden Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold-300 via-gold-500/40 to-transparent -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold-300 via-gold-500/40 to-transparent sm:hidden" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-0 z-10 w-10 h-10 rounded-full bg-dark-900 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-gold-glow">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-14 sm:ml-0">
                    <div className="glass-card p-6 sm:p-8 rounded-2xl relative group hover:border-gold-400/50 transition-all duration-300">
                      {item.current && (
                        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gold-400/20 border border-gold-400/40 text-gold-300 uppercase tracking-wider">
                          En cours
                        </span>
                      )}

                      <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                        {item.degree}
                      </h3>

                      <div className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gold-400/70" />
                        <span>{item.institution}</span>
                      </div>

                      {item.description && (
                        <p className="text-sm text-gray-400 leading-relaxed pt-3 border-t border-gold-400/10">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
