
"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section id="home" className="min-h-screen relative">
      <div
        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Crafting Digital Experiences"
          description="We specialize in creating beautiful, functional websites and applications that help businesses grow and succeed in the digital world."
        />
      </div>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-50">
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
    </section>
  );
};

export default HeroSection;
