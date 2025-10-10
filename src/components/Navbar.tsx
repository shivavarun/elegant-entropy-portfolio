
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
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
      const scrolled = window.scrollY > 50;
      // Avoid unnecessary re-renders
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    // Use passive listener for better performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Also listen for resize events to ensure navbar stays fixed
    const handleResize = () => {
      // Force a small delay to ensure layout is complete
      setTimeout(() => {
        handleScroll();
      }, 100);
    };
    
    window.addEventListener("resize", handleResize, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-sm" : "bg-transparent" // Removed backdrop-blur for lighter performance
      }`}
      style={{ 
        position: 'fixed'
        // Removed GPU acceleration for lighter performance
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          <motion.div
            style={{ opacity: brandOpacity, y: brandY, scale: brandScale }}
            aria-label="Site brand"
            className="relative z-10"
          >
            <SparklesText
              text="entropydev.vercel"
              className="text-2xl md:text-3xl lg:text-4xl text-gray-900"
              colors={{ first: "#FFB7C5", second: "#4FABFF" }}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
