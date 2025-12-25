import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AiServicesSection from "@/components/AiServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { StarsBackground } from "@/components/ui/StarsBackground";

import Shuffle from "@/components/Shuffle";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiGraphql, SiPostgresql, SiMongodb } from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiGraphql className="text-[#E10098]" />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
];

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
          <div className="flex flex-col justify-center items-center py-20 space-y-8">
            <Shuffle
              text="Tech Stack"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
            <div className="w-full max-w-4xl px-4 filter grayscale hover:grayscale-0 transition-all duration-500">
              <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={48}
                gap={60}
                hoverSpeed={20}
                scaleOnHover
                fadeOut
                fadeOutColor="transparent"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
          <ContactSection />
        </StarsBackground>
      </main>
    </div>
  );
};

export default Index;
