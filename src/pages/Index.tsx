
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="w-full">
        <HeroSection />
      </div>
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
