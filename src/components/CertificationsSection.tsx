'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Globe2, Calendar, BadgeCheck, ArrowUpRight, Github } from 'lucide-react';
import { certificationsData, languagesData, personalData, Certification } from '@/data/portfolioData';

function BadgeVisual({ cert, size }: { cert: Certification; size: 'lg' | 'sm' }) {
  const box = size === 'lg' ? 'w-28 h-28 sm:w-32 sm:h-32' : 'w-16 h-16';
  if (cert.image) {
    return (
      <img
        src={cert.image}
        alt={`Badge ${cert.title}`}
        loading="lazy"
        className={`${box} object-contain shrink-0 drop-shadow-[0_8px_24px_rgba(201,169,97,0.18)] group-hover:scale-105 transition-transform duration-500`}
      />
    );
  }
  return (
    <div className={`${box} shrink-0 rounded-2xl bg-dark-900 border border-gold-400/25 flex items-center justify-center`}>
      <Github className={size === 'lg' ? 'w-12 h-12 text-gold-300' : 'w-7 h-7 text-gold-300'} />
    </div>
  );
}

function VerifyLink({ cert }: { cert: Certification }) {
  if (!cert.verifyUrl) {
    return <span className="text-[11px] font-medium text-gray-500">Certificat disponible sur demande</span>;
  }
  return (
    <a
      href={cert.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Vérifier ${cert.title} sur Credly`}
      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
    >
      <BadgeCheck className="w-3.5 h-3.5" />
      Vérifier sur Credly
      <ArrowUpRight className="w-3 h-3" />
    </a>
  );
}

export default function CertificationsSection() {
  const featured = certificationsData.filter((c) => c.featured);
  const others = certificationsData.filter((c) => !c.featured);

  return (
    <section id="certifications" className="py-16 sm:py-24 relative bg-dark-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-gold-400/30 text-xs font-semibold text-gold-300 uppercase tracking-widest mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>04. Certifications & Langues</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Certifications <span className="text-gold-gradient">Vérifiées</span>
          </motion.h2>
          <p className="text-gray-400 text-xs sm:text-base mt-3">
            {certificationsData.length} certifications — Cisco, AWS, Python Institute et GitHub. Chaque badge est vérifiable publiquement.
          </p>
        </div>

        {/* Featured credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {featured.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-card rounded-2xl p-5 sm:p-7 relative overflow-hidden group border-gold-400/30 hover:border-gold-400/60"
            >
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <BadgeVisual cert={cert} size="lg" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-400/15 border border-gold-400/35 text-gold-300">
                      {cert.badgeText}
                    </span>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold-400" />
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug group-hover:text-gold-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-400/90 mt-1 mb-3">{cert.issuer}</p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">{cert.description}</p>
                  <VerifyLink cert={cert} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {others.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="glass-card rounded-2xl p-4 sm:p-5 group flex items-start gap-4"
            >
              <BadgeVisual cert={cert} size="sm" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">{cert.badgeText}</span>
                  <span className="text-[10px] text-gray-500">•</span>
                  <span className="text-[10px] text-gray-400">{cert.date}</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white leading-snug group-hover:text-gold-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5 mb-2.5">{cert.issuer}</p>
                <VerifyLink cert={cert} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credly CTA + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mt-5 sm:mt-6">
          <motion.a
            href={personalData.credly}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 group flex flex-col justify-between gap-6 border-gold-400/30 bg-gradient-to-br from-gold-400/10 to-transparent"
          >
            <div>
              <div className="p-2.5 rounded-xl bg-gold-400/15 border border-gold-400/30 w-fit mb-4">
                <ShieldCheck className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Profil Credly officiel</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Tous mes badges numériques, émis directement par Cisco et AWS, au même endroit et vérifiables en un clic.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 group-hover:text-gold-200">
              credly.com/users/mouhib-fahem
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6"
          >
            <h3 className="text-xl font-serif font-bold text-white mb-5 flex items-center gap-2 pb-4 border-b border-gold-400/10">
              <Globe2 className="w-5 h-5 text-gold-400" />
              Langues
            </h3>
            <div className="space-y-5">
              {languagesData.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-center gap-3 text-sm">
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-xs font-mono text-gold-300 text-right">{lang.level}</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
