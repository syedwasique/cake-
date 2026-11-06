import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Configure defaults for luxury, smooth feel
  gsap.defaults({
    ease: "power3.out",
    duration: 1.2,
  });
}

export { gsap, ScrollTrigger };
export default gsap;
