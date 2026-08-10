'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Check, Calendar, Info, X } from 'lucide-react';
import { projectsData, Project } from '@/data/portfolioData';

const categories = ['Tous', 'Web', 'Mobile', 'Java/Systèmes', 'Architecture/UML', 'Algorithmique'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'Tous'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-gold-400/30 text-xs font-semibold text-gold-300 uppercase tracking-widest mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04. Projets</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Réalisations & <span className="text-gold-gradient">Projets Majeurs</span>
          </motion.h2>
          <p className="text-gray-400 text-xs sm:text-base mt-3 sm:mt-4">
            Projets web, mobiles, d'architecture logicielle et de systèmes.
          </p>
        </div>

        {/* Filter Categories (Touch scroll friendly on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-start sm:justify-center gap-2 mb-10 sm:mb-14 overflow-x-auto pb-2 px-2 no-scrollbar"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-dark-900 font-semibold shadow-gold-sm'
                  : 'glass-pill text-gray-300 hover:text-white hover:border-gold-400/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-5 sm:p-8 flex flex-col justify-between relative group hover:border-gold-400/60 transition-all duration-300"
              >
                <div>
                  {/* Top Badges & Year */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold ${
                        project.badgeType === 'Featured'
                          ? 'bg-gold-400/20 border border-gold-400/40 text-gold-300'
                          : 'bg-dark-900 border border-white/10 text-gray-300'
                      }`}>
                        {project.badgeType === 'Featured' ? '⭐ Featured' : '🎓 Académique'}
                      </span>
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-dark-900/60 border border-gold-400/10 text-gray-400">
                        {project.category}
                      </span>
                    </div>

                    <span className="text-[11px] sm:text-xs text-gold-400/80 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visiter ${project.title}`}
                          className="text-gold-400 hover:text-gold-200 transition-colors p-1 shrink-0"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-gold-400/80 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 sm:mb-6">
                    {project.description}
                  </p>

                  {/* Key Feature Bullets preview */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-gray-400 border-t border-gold-400/10 pt-4">
                    {project.detailedPoints.slice(0, 2).map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tech Stack Tags & Actions */}
                <div className="pt-4 border-t border-gold-400/10 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-dark-900/90 border border-gold-400/15 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2 pt-1 border-t sm:border-t-0 border-white/5">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 sm:flex-none justify-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-gold-300 bg-gold-400/10 border border-gold-400/30 hover:bg-gold-400/20 transition-colors flex items-center gap-1.5"
                    >
                      <Info className="w-3.5 h-3.5" />
                      Voir détails
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none justify-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-dark-900 bg-gold-400 hover:bg-gold-300 transition-colors flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Visiter
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal "Voir détails" (Mobile friendly overlay & scrolling) */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-card rounded-2xl max-w-2xl w-full p-5 sm:p-8 relative border border-gold-400/40 max-h-[88vh] overflow-y-auto">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass-pill text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3 pr-8">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gold-400/15 text-gold-300 border border-gold-400/30">
                  {activeProject.badgeType}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {activeProject.year}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1 pr-6">
                {activeProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gold-400 mb-4">
                {activeProject.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                {activeProject.description}
              </p>

              <h4 className="text-[11px] sm:text-xs font-semibold text-gold-300 uppercase tracking-wider mb-3">
                Points Clés & Implémentation
              </h4>
              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-gray-300">
                {activeProject.detailedPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-[11px] sm:text-xs font-semibold text-gold-300 uppercase tracking-wider mb-3">
                Technologies Utilisées
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-dark-900 border border-gold-400/20 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-gold-400/15">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 rounded-full text-xs font-medium text-gray-300 hover:text-white border border-white/10"
                >
                  Fermer
                </button>
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold text-dark-900 bg-gold-400 hover:bg-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Visiter le site
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
