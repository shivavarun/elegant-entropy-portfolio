
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AiServicesSection from "@/components/AiServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { StarsBackground } from "@/components/ui/StarsBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        
        {/* Stars background for all sections after hero */}
        <StarsBackground
          factor={0.05}
          speed={50}
          starColor="rgba(255, 255, 255, 0.8)"
          pointerEvents={true}
          className="min-h-screen"
        >
          <AiServicesSection />
          <ProjectsSection />
          <ContactSection />
        </StarsBackground>
      </main>
    </div>
  );
};

export default Index;
