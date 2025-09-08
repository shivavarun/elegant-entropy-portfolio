
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Fade and slide the hero title out as the user scrolls so it feels like
  // it transitions into the navbar brand.
  const heroTitleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.5, 0]);
  const heroTitleY = useTransform(scrollYProgress, [0, 0.3], [0, -24]);

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (!el) return;
    const lenis = (window as any).lenis as { scroll?: (to: HTMLElement | number | string, opts?: any) => void } | undefined;
    if (lenis && typeof lenis.scroll === 'function') {
      lenis.scroll(el, { offset: -16 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative">
      <div
        className="h-[90vh] md:h-[100vh] w-screen relative overflow-hidden bg-black"
        ref={ref}
      >
        <BackgroundLines className="absolute inset-0" svgOptions={{ duration: 6 }} />
        <div className="flex flex-col items-center justify-center gap-6 absolute inset-x-0 top-[35%] -translate-y-1/2 w-full">
          <motion.div style={{ opacity: heroTitleOpacity, y: heroTitleY }}>
            <SparklesText 
              text="entropydev.vercel" 
              className="text-5xl md:text-8xl text-white mb-4"
              colors={{ first: "#FFB7C5", second: "#4FABFF" }}
            />
          </motion.div>
          <p className="font-bold tracking-wide mt-1 mb-6 md:mb-8 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 text-2xl md:text-4xl lg:text-5xl">Shiva Varun</span>
          </p>
          <div className="max-w-5xl px-4 text-center">
            <p className="text-2xl md:text-6xl font-semibold pb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 leading-tight md:leading-[1.1]">
              <span className="block">From AI Agents to Apps</span>
              <span className="block">We Build What Scales</span>
              <span className="block">Your Business</span>
            </p>
            <p className="text-sm md:text-xl font-medium text-neutral-300 mt-5">
              Custom AI automation, development, and digital solutions that work harder so you don’t have to.
            </p>
          </div>
        </div>
        <motion.button
          onClick={scrollToServices}
          aria-label="Scroll to services"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/60 bg-white/5 backdrop-blur-sm"
          animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
