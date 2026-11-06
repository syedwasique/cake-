import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Eye, Star } from 'lucide-react';
import { WhatsAppIcon } from '../ui/Icons';
import Button from '../ui/Button';
import { HERO_SLIDES } from '../../lib/data';

export default function Hero({ onOpenOrder }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimerRef = useRef(null);

  useEffect(() => {
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const scrollToCategories = () => {
    const target = document.querySelector('#categories');
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -40, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden select-none bg-espresso-950">
      {/* Slow Crossfading Slideshow Background */}
      {HERO_SLIDES.map((item, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-luxury overflow-hidden ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-out ${
                isActive ? 'scale-108 translate-x-1 translate-y-1' : 'scale-100'
              }`}
            />
          </div>
        );
      })}

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/30" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(184,121,62,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Hero Content Center */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center pt-8 sm:pt-0">
        {/* Rating & Social Proof Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-900/90 border border-gold-400/50 backdrop-blur-md shadow-xl text-cream-100">
            <span className="flex items-center text-gold-400 text-xs">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            </span>
            <span className="font-serif font-semibold text-xs text-cream-50">4.9</span>
            <span className="text-[11px] text-cream-300/80 font-sans">(288)</span>
            <span className="text-gold-500/50 text-[10px]">•</span>
            <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-caramel-300">Cake shop</span>
            <span className="text-gold-500/50 text-[10px]">•</span>
            <span className="text-[11px] font-sans font-semibold tracking-wider text-gold-300">R 708</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-900/70 border border-gold-400/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-sans font-medium uppercase tracking-wide-luxury text-gold-300">
              {slide.badge}
            </span>
          </div>
        </div>

        {/* Grand Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 font-normal leading-[1.05] tracking-tight max-w-4xl">
          Crafted in layers.{' '}
          <span className="italic font-serif text-caramel-400 block sm:inline">
            Savored in moments.
          </span>
        </h1>

        {/* Narrative Sub-copy */}
        <p className="mt-5 text-sm sm:text-base md:text-lg font-sans font-light text-cream-200/85 max-w-2xl leading-relaxed">
          {slide.subtitle}
        </p>

        {/* Customer Review Quote Callout */}
        <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-espresso-900/60 border border-gold-400/25 backdrop-blur-md max-w-xl text-left shadow-lg">
          <span className="text-gold-400 text-sm leading-none shrink-0 font-serif italic">“</span>
          <p className="font-serif italic text-xs sm:text-sm text-cream-100/90 leading-snug">
            The design was just what I wanted, and the cake was soft and full of flavor.
          </p>
          <span className="text-[10px] uppercase font-sans tracking-widest text-caramel-400 whitespace-nowrap hidden sm:inline">
            — Verified Review
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button
            variant="caramel"
            size="lg"
            icon={WhatsAppIcon}
            onClick={onOpenOrder}
            className="w-full sm:w-auto"
          >
            Order via WhatsApp
          </Button>

          <Button
            variant="secondary"
            size="lg"
            icon={Eye}
            onClick={scrollToCategories}
            className="w-full sm:w-auto"
          >
            Explore Menu & Prices
          </Button>
        </div>

        {/* Slide Progress / Dots Indicator */}
        <div className="mt-12 flex items-center gap-3">
          {HERO_SLIDES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className="group py-2 focus:outline-none"
            >
              <div
                className={`h-[2px] transition-all duration-500 rounded-full ${
                  idx === currentSlide
                    ? 'w-10 bg-gold-400'
                    : 'w-4 bg-cream-100/30 group-hover:bg-cream-100/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <button
        onClick={scrollToCategories}
        data-cursor="Scroll"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cream-300/60 hover:text-gold-300 transition-colors focus:outline-none"
      >
        <span className="text-[10px] font-sans uppercase tracking-wide-luxury">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
      </button>
    </section>
  );
}
