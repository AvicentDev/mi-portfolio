import ContactSection from "../components/portfolio/ContactSection";
import EducationSection from "../components/portfolio/EducationSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import HeroSection from "../components/portfolio/HeroSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import CertificationsSection from "../components/portfolio/CertificationsSection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}