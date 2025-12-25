import { ChevronDown } from "lucide-react";
import Orb from "./Orb";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black overflow-hidden">

      {/* Orb Background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Content */}
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in pointer-events-none">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            entropydev.vercel
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-white/80">
            Shiva Varun
          </p>
        </div>

        <div className="space-y-6 pt-8">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            From AI Agents to Apps
            <br />
            We Build What Scales
            <br />
            Your Business
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Custom AI automation, development, and digital solutions that work harder so you don't have to.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 p-4 animate-bounce text-white/50 hover:text-white transition-colors cursor-pointer z-10"
        aria-label="Scroll to services"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
