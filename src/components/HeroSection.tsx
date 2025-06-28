
"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { SparklesText } from "@/components/ui/sparkles-text";

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
    <section id="home" className="h-screen relative">
      <div
        className="h-[100vh] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-hidden bg-black"
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <SparklesText 
            text="Entropydev.vercel" 
            className="text-4xl md:text-7xl text-white mb-4"
            colors={{ first: "#FFB7C5", second: "#4FABFF" }}
          />
          <p className="text-sm md:text-lg text-neutral-400 font-light tracking-wide">
            by Shiva Varun
          </p>
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
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
