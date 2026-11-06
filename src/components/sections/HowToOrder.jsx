import React, { useRef, useEffect } from 'react';
import { CalendarCheck, MessageSquare, Flame, PackageCheck, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../ui/Icons';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { ORDER_STEPS } from '../../lib/data';
import { gsap, ScrollTrigger } from '../../lib/gsap';

export default function HowToOrder({ onOpenOrder }) {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && lineRef.current && containerRef.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const pathLength = lineRef.current.getTotalLength ? lineRef.current.getTotalLength() : 800;

      gsap.set(lineRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const anim = gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: 1,
        },
      });

      return () => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
      };
    }
  }, []);

  const icons = [CalendarCheck, MessageSquare, Flame, PackageCheck];

  return (
    <section
      id="how-to-order"
      ref={containerRef}
      className="py-24 sm:py-32 bg-espresso-950 text-cream-100 relative overflow-hidden border-t border-gold-400/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Simple 4-Step Process"
          title="How to Order at"
          italicWord="Cake's Kingdom"
          subtitle="All baking is done strictly to order in limited daily numbers to guarantee peak freshness. Here is how our ordering works:"
          theme="dark"
          align="center"
          className="mb-16"
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Connecting SVG Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 pointer-events-none z-0">
            <svg className="w-full h-8 overflow-visible">
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#3D271D"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <line
                ref={lineRef}
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#C5A880"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {ORDER_STEPS.map((step, idx) => {
              const IconComp = icons[idx] || Sparkles;
              return (
                <div
                  key={step.step}
                  className="bg-espresso-900 border border-gold-400/25 p-6 sm:p-8 flex flex-col justify-between hover:border-gold-400/60 transition-all duration-300 shadow-xl group"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-12 h-12 rounded-full bg-espresso-950 border border-gold-400/40 flex items-center justify-center font-serif text-lg text-gold-300 font-medium group-hover:bg-caramel-500 group-hover:text-cream-50 transition-colors">
                        {step.step}
                      </span>
                      <IconComp className="w-5 h-5 text-caramel-400 group-hover:text-gold-300 transition-colors" />
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-cream-100 font-normal mb-3 group-hover:text-gold-200 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs font-sans text-cream-300/75 font-light leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gold-400/15 flex items-center gap-2 text-[10px] uppercase tracking-wide-luxury text-caramel-400">
                    <span className="w-1 h-1 rounded-full bg-gold-400" />
                    <span>{step.note}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-xs font-sans text-cream-300/70">
            Have questions regarding wedding tasting boxes, delivery timings, or customized flavors?
          </p>
          <Button
            variant="caramel"
            size="md"
            icon={WhatsAppIcon}
            onClick={onOpenOrder}
          >
            Chat with Cake's Kingdom on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
