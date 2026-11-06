import React, { useRef, useEffect } from 'react';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BRAND, BRAND_VALUES } from '../../lib/data';
import { gsap, ScrollTrigger } from '../../lib/gsap';

export default function BrandStory() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && imageRef.current && sectionRef.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const anim = gsap.fromTo(
        imageRef.current,
        { y: -30 },
        {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      return () => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
      };
    }
  }, []);

  return (
    <section
      id="brand-story"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-cream-50 text-espresso-900 relative overflow-hidden border-b border-cream-300/40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Copy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-caramel-500" />
              <span className="text-[11px] font-sans font-medium uppercase tracking-wide-luxury text-caramel-600">
                Atelier Craft • Cake's Kingdom • R 708
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-espresso-950">
              The Architecture of{' '}
              <span className="italic font-serif text-caramel-600">
                Pure Indulgence.
              </span>
            </h2>

            {/* Italicized Serif Pull Quote */}
            <div className="relative pl-6 py-2 border-l-2 border-caramel-500/60 my-6">
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-espresso-900 leading-relaxed">
                "The design was just what I wanted, and the cake was soft and full of flavor."
              </p>
              <span className="block text-xs font-sans uppercase tracking-luxury text-caramel-600 mt-2 font-medium">
                — Verified Patron Review • Cake's Kingdom (4.9 ★ / 288 Reviews • R 708)
              </span>
            </div>

            {/* Narrative Body */}
            <p className="text-sm sm:text-base font-sans font-light text-espresso-800 leading-relaxed">
              Cake's Kingdom (R 708) was founded with a singular ambition: to offer our patrons an uncompromising cake shop experience where visual majesty meets extraordinarily soft, moist crumb and authentic, rich flavor. We strictly avoid pre-packaged sponge mixes, vegetable shortening, artificial syrups, or synthetic colorings.
            </p>

            <p className="text-sm sm:text-base font-sans font-light text-espresso-800 leading-relaxed">
              Every creation is made fresh to order in small daily batches using Grand Cru Belgian couverture (Callebaut & Valrhona), pure dairy cream, and 100% Halal alcohol-free vanilla bean. From lavish wedding reception showpieces to our coveted Fleur de Sel salted caramel brownies, every piece is baked to make your celebrations truly unforgettable.
            </p>

            {/* Value Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-espresso-900/10">
              {BRAND_VALUES.map((val, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2 text-caramel-600">
                    <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                    <h4 className="text-xs uppercase font-sans tracking-wider font-semibold text-espresso-900">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-xs font-sans text-espresso-700 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Visual Column with Parallax (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 border border-gold-400/40 translate-x-3 translate-y-3 -z-0 pointer-events-none" />

            <div className="relative z-10 bg-espresso-950 overflow-hidden shadow-2xl">
              <img
                ref={imageRef}
                src="/images/patisserie_craft_story.jpg"
                alt="Cake's Kingdom pastry artisans carefully applying 24k gold leaf in shop studio R 708"
                className="w-full h-auto object-cover transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Atelier Seal */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-espresso-900/90 backdrop-blur-md border border-gold-400/40 text-cream-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wide-luxury text-caramel-400 block">
                    Bespoke Cake Shop
                  </span>
                  <p className="font-serif text-sm tracking-wide text-cream-50">
                    Cake's Kingdom • Shop R 708
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-gold-400 flex items-center justify-center text-gold-300 font-serif font-bold text-xs tracking-wider">
                  CK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
