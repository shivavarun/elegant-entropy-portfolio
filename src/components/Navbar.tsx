
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SparklesText } from "@/components/ui/sparkles-text";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Animate the brand text into the header as the user scrolls down
  const { scrollY } = useScroll();
  const brandOpacityRaw = useTransform(scrollY, [0, 120, 280], [0, 0.6, 1]);
  const brandYRaw = useTransform(scrollY, [0, 280], [-20, 0]);
  const brandScaleRaw = useTransform(scrollY, [0, 280], [1.08, 1]);

  const brandOpacity = useSpring(brandOpacityRaw, { stiffness: 120, damping: 20 });
  const brandY = useSpring(brandYRaw, { stiffness: 120, damping: 20 });
  const brandScale = useSpring(brandScaleRaw, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <motion.div
            style={{ opacity: brandOpacity, y: brandY, scale: brandScale }}
            aria-label="Site brand"
          >
            <SparklesText
              text="entropydev.vercel"
              className="text-lg md:text-xl text-gray-900"
              colors={{ first: "#FFB7C5", second: "#4FABFF" }}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
