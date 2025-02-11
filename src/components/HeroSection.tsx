
import { SplineSceneBasic } from "@/components/ui/code.demo";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center mb-12">
          <p className="text-base sm:text-lg text-muted-foreground mb-5 animate-fadeIn">
            Welcome to entropy.dev
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Crafting Digital
            <span className="block">Experiences</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            We specialize in creating beautiful, functional websites and applications 
            that help businesses grow and succeed in the digital world.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full border border-border hover:bg-secondary/80 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <SplineSceneBasic />
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-foreground">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          }
        >
          <img
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75"
            alt="hero"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default HeroSection;
