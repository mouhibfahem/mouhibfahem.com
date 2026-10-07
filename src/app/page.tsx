import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import QuickActions from '@/components/QuickActions';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070709] text-gray-100 selection:bg-gold-400/30 selection:text-white">
      {/* Translucent Sticky Navbar */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Marquee horizontal défilant pour les logos / technologies */}
      <TechMarquee />

      {/* 1. À propos */}
      <AboutSection />

      {/* 2. Expérience */}
      <ExperienceSection />

      {/* 3. Projets */}
      <ProjectsSection />

      {/* 4. Certifications & Langues */}
      <CertificationsSection />

      {/* 5. Compétences */}
      <SkillsSection />

      {/* 6. Formation */}
      <EducationSection />

      {/* 7. Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Barre d'actions rapides (mobile) */}
      <QuickActions />
    </main>
  );
}
