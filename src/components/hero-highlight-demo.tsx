"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <div className="px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug mx-auto"
        >
          <Highlight className="text-black dark:text-white">AI Future</Highlight> is here
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, 0] }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="mt-4 text-lg md:text-xl text-white/90 font-semibold"
        >
          Supercharge your business with AI native solutions — scale smarter, grow faster.
        </motion.p>
      </div>
    </HeroHighlight>
  );
}


