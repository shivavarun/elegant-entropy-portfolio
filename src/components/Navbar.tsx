
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-900">
              entropy.dev
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
