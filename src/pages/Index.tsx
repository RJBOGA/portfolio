import Layout from "@/components/Layout";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import BioSection from "@/components/sections/BioSection";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsBento from "@/components/sections/SkillsBento";
import AchievementsSection from "@/components/sections/AchievementsSection";
import EducationTimeline from "@/components/sections/EducationTimeline";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <Layout>
      <FloatingNav />
      <HeroSection />
      <MarqueeSection />
      <BioSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <SkillsBento />
      <AchievementsSection />
      <EducationTimeline />
      <ContactSection />
    </Layout>
  );
}
