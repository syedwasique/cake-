import React, { useEffect, useState, useRef } from 'react';
import { useIsTouchDevice, usePrefersReducedMotion } from '../../hooks/useMediaQuery';

export default function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef(null);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check what element is under the cursor
      const target = e.target;
      const interactive = target.closest('[data-cursor], button, a, [role="button"], input, select');

      if (interactive) {
        setIsHovered(true);
        const label = interactive.getAttribute('data-cursor');
        if (label) {
          setCursorLabel(label);
        } else if (interactive.tagName === 'A' || interactive.tagName === 'BUTTON') {
          setCursorLabel('');
        }
      } else {
        setIsHovered(false);
        setCursorLabel('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isTouch, prefersReducedMotion, isVisible]);

  // Smooth lerp for trailing cursor
  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    const animate = () => {
      setCursorPos((prev) => {
        const ease = 0.18;
        return {
          x: prev.x + (mousePos.x - prev.x) * ease,
          y: prev.y + (mousePos.y - prev.y) * ease,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePos, isTouch, prefersReducedMotion]);

  if (isTouch || prefersReducedMotion || !isVisible) return null;

  return (
    <>
      {/* Precision inner gold dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gold-400 transition-transform duration-75"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate3d(${mousePos.x - 3}px, ${mousePos.y - 3}px, 0)`,
          opacity: isHovered && cursorLabel ? 0 : 1,
        }}
      />

      {/* Outer Luxury Magnetic Follower */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center transition-all duration-300 ease-luxury ${
          cursorLabel
            ? 'bg-espresso-950/90 border border-gold-400 text-cream-100 shadow-xl backdrop-blur-md px-3 py-1'
            : isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 border border-gold-400 bg-gold-400/10 backdrop-blur-[1px]'
            : 'w-9 h-9 -ml-[18px] -mt-[18px] border border-gold-400/60'
        }`}
        style={{
          transform: cursorLabel
            ? `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`
            : `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
        }}
      >
        {cursorLabel && (
          <span className="text-[10px] font-sans uppercase font-medium tracking-luxury text-gold-300 select-none whitespace-nowrap">
            {cursorLabel}
          </span>
        )}
      </div>
    </>
  );
}
