import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Lenis from 'lenis'

createRoot(document.getElementById("root")!).render(<App />);

// Initialize Lenis smooth scrolling (respect reduced motion preferences)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  const lenis = new Lenis();
  // Expose globally for programmatic scrolls (e.g., buttons/links)
  (window as any).lenis = lenis;

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}


