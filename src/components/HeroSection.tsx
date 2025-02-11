
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fadeIn">
            Crafting Digital
            <span className="block text-gray-900">Experiences</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            We create beautiful, functional websites and applications that help businesses grow and succeed in the digital world.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
