
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AiServicesSection from "@/components/AiServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AiServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
