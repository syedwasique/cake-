import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Fast, indulgent load animation under 1.2s
    const startTime = Date.now();
    const duration = 1100; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsHiding(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[99999] bg-espresso-950 text-cream-100 flex flex-col items-center justify-center select-none transition-transform duration-700 ease-luxury cursor-pointer ${
        isHiding ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Brand Monogram & Seal */}
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <svg className="w-16 h-16 animate-spin-slow" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#C5A880"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              className="opacity-40"
            />
          </svg>
          <span className="absolute font-serif text-xl tracking-tight text-gold-400 font-medium">
            CK
          </span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl tracking-widest text-cream-50 font-normal">
          CAKE'S KINGDOM
        </h1>
        <span className="font-sans text-[10px] uppercase tracking-wide-luxury text-caramel-400 mt-1">
          4.9 ★ (288 Reviews) • Cake shop • R 708
        </span>

        {/* Thin Gold Progress Line */}
        <div className="w-48 h-[1px] bg-espresso-800 relative mt-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-caramel-500 via-gold-400 to-caramel-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[10px] text-cream-300/40 tracking-widest uppercase mt-4">
          Unveiling Confections • {progress}%
        </span>
      </div>

      {/* Skip button prompt */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDismiss();
        }}
        className="absolute bottom-6 text-[10px] uppercase tracking-luxury text-cream-300/50 hover:text-gold-300 transition-colors"
      >
        Skip [Press Any Key]
      </button>
    </div>
  );
}
