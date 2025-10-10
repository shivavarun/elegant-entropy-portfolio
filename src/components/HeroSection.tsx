
"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React from "react";
import { HoleBackground } from "@/components/ui/HoleBackground";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const ref = React.useRef(null);
  const [isMobileLandscape, setIsMobileLandscape] = React.useState(false);
  
  React.useEffect(() => {
    const checkOrientation = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      const isMobile = window.innerWidth <= 768;
      setIsMobileLandscape(isMobile && isLandscape);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);
  
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
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative w-full">
      <div
        className={`w-full relative overflow-hidden bg-black ${
          isMobileLandscape ? 'h-screen' : 'h-screen'
        }`}
        ref={ref}
      >
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <HoleBackground
              strokeColor="#737373"
              numberOfLines={isMobileLandscape ? 25 : window.innerWidth <= 768 ? 30 : 50}
              numberOfDiscs={isMobileLandscape ? 25 : window.innerWidth <= 768 ? 30 : 50}
              particleRGBColor={[255, 255, 255]}
            />
          </motion.div>
        </div>
        <div className={`flex flex-col items-center justify-center absolute inset-0 w-full h-full z-10 ${
          isMobileLandscape 
            ? 'gap-1 px-6 py-2' 
            : 'gap-3 md:gap-6 px-4 sm:px-6 lg:px-8 pt-16 md:pt-0'
        }`}>
          <motion.div style={{ opacity: heroTitleOpacity, y: heroTitleY }} className="text-center">
            <SparklesText 
              text="entropydev.vercel" 
              className={`text-white mb-1 md:mb-4 ${
                isMobileLandscape 
                  ? 'text-lg sm:text-xl' 
                  : 'text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl'
              }`}
              colors={{ first: "#FFB7C5", second: "#4FABFF" }}
            />
          </motion.div>
          <p className={`font-bold tracking-wide leading-tight text-center ${
            isMobileLandscape ? 'mb-1' : 'mb-3 md:mb-6 lg:mb-8'
          }`}>
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 ${
              isMobileLandscape 
                ? 'text-sm' 
                : 'text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl'
            }`}>Shiva Varun</span>
          </p>
          <div className={`text-center ${
            isMobileLandscape ? 'max-w-4xl px-2' : 'max-w-6xl px-2 sm:px-4'
          }`}>
            <p className={`font-semibold pb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 leading-tight ${
              isMobileLandscape 
                ? 'text-xs' 
                : 'text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-5xl'
            }`}>
              <span className="block mb-1">From AI Agents to Apps</span>
              <span className="block mb-1">We Build What Scales</span>
              <span className="block">Your Business</span>
            </p>
            <p className={`font-medium text-neutral-300 max-w-4xl mx-auto leading-relaxed ${
              isMobileLandscape 
                ? 'text-xs mt-1' 
                : 'text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 md:mt-6'
            }`}>
              Custom AI automation, development, and digital solutions that work harder so you don't have to.
            </p>
          </div>
        </div>
        <motion.button
          onClick={scrollToServices}
          aria-label="Scroll to services"
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/60 bg-white/5 backdrop-blur-sm"
          animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
