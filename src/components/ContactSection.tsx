'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Send, Download, ArrowUpRight, Globe } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject || 'Prise de contact portfolio'
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
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
            <Mail className="w-3.5 h-3.5" />
            <span>08. Contact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Travaillons <span className="text-gold-gradient">Ensemble</span>
          </motion.h2>
          <p className="text-gray-400 text-xs sm:text-base mt-3">
            Pour toute proposition de collaboration, opportunité d'ingénierie ou projet, contactez-moi directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-gold-400/20">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-4 sm:mb-6">
                Coordonnées Directes
              </h3>

              <div className="space-y-3 sm:space-y-5">
                {/* Email with copy button */}
                <div className="flex items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl bg-dark-900/60 border border-gold-400/15 min-w-0">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase">Email</div>
                      <a href={`mailto:${personalData.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-gold-300 transition-colors truncate block">
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copier l'email"
                    className="p-2 rounded-lg hover:bg-gold-400/20 text-gold-300 transition-colors shrink-0"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-dark-900/60 border border-gold-400/15">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase">Téléphone</div>
                    <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold text-white hover:text-gold-300 transition-colors">
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl bg-dark-900/60 border border-gold-400/15 min-w-0">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase">LinkedIn</div>
                      <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-white hover:text-gold-300 transition-colors truncate block">
                        {personalData.linkedinDisplay}
                      </a>
                    </div>
                  </div>
                  <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gold-400/20 text-gold-300 transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Location & Domain */}
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-dark-900/60 border border-gold-400/15">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase">Domaine Web</div>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalData.domain}
                    </span>
                  </div>
                </div>
              </div>

              {/* Download CV CTA */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gold-400/10">
                <a
                  href={personalData.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-dark-900 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 hover:brightness-110 shadow-gold-sm transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Télécharger le CV Complet (PDF)
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-5 sm:p-8 rounded-2xl border border-gold-400/20"
          >
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-4 sm:mb-6">
              Envoyer un message
            </h3>

            {submitted ? (
              <div className="p-5 sm:p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-3">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-emerald-400" />
                <h4 className="text-base sm:text-lg font-bold">Message préparé avec succès !</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Votre client de messagerie a été ouvert avec les informations pré-remplies. Vous pouvez également m'écrire directement sur <span className="font-semibold text-gold-300 break-all">{personalData.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-semibold text-gold-400 underline hover:text-gold-200"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Votre Nom</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-dark-900/80 border border-gold-400/20 text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Votre Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: jean.dupont@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-dark-900/80 border border-gold-400/20 text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Sujet</label>
                  <input
                    type="text"
                    placeholder="Ex: Offre de projet / Prise de contact"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-dark-900/80 border border-gold-400/20 text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-dark-900/80 border border-gold-400/20 text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 rounded-xl font-semibold text-xs text-dark-900 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 shadow-gold-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
