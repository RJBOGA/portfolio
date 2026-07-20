import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import HeaderSection from "@/components/sections/HeaderSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Index() {
  useActiveSection(100);
  return (
    <Layout>
      <Navigation />
      <HeaderSection />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <SpeakingSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}