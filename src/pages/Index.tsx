
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AiServicesSection from "@/components/AiServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AiServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
