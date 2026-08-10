'use client';

import { motion } from 'framer-motion';
import { Cpu, Code2, Layers, Database, Network, Wrench } from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5 text-gold-400" />;
    case 'Layers':
      return <Layers className="w-5 h-5 text-gold-400" />;
    case 'Database':
      return <Database className="w-5 h-5 text-gold-400" />;
    case 'Network':
      return <Network className="w-5 h-5 text-gold-400" />;
    default:
      return <Cpu className="w-5 h-5 text-gold-400" />;
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
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
            <Cpu className="w-3.5 h-3.5" />
            <span>06. Compétences Techniques</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Stack & <span className="text-gold-gradient">Savoir-Faire</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Compétences informatiques structurées par domaines d'expertise.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold-400/10">
                  <div className="p-2.5 rounded-xl bg-gold-400/10 border border-gold-400/20">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg glass-pill border border-gold-400/15 text-xs font-medium text-gray-200 hover:border-gold-400/40 hover:text-white transition-colors flex items-center justify-between gap-2"
                    >
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-gold-400 font-mono">
                          • {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
