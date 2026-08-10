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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070709] text-gray-100 selection:bg-gold-400/30 selection:text-white">
      {/* Translucent Sticky Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* Marquee horizontal défilant pour les logos / technologies */}
      <TechMarquee />

      {/* 2. À propos Section */}
      <AboutSection />

      {/* 3. Éducation Section */}
      <EducationSection />

      {/* 4. Projets Section */}
      <ProjectsSection />

      {/* 5. Expérience Professionnelle Section */}
      <ExperienceSection />

      {/* 6. Compétences Techniques Section */}
      <SkillsSection />

      {/* 7. Certifications & Langues Section */}
      <CertificationsSection />

      {/* 8. Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
