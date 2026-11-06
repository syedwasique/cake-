import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { CATEGORIES } from '../../lib/data';

export default function Categories({ onSelectCategory, onOpenOrder }) {
  const handleCardClick = (cat) => {
    // Scroll to featured desserts with category filter or trigger order drawer
    const featuredSection = document.querySelector('#featured-desserts');
    if (featuredSection) {
      if (window.__lenis) {
        window.__lenis.scrollTo(featuredSection, { offset: -40, duration: 1.2 });
      } else {
        featuredSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="categories" className="py-24 sm:py-32 bg-espresso-950 text-cream-100 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-caramel-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Curated Confectionery Lines"
          title="Signature Categories &"
          italicWord="Editions"
          subtitle="Explore our four core dessert lines, each made fresh to order in Lahore with imported Belgian couverture, pure dairy butter, and artisanal technique."
          theme="dark"
          align="center"
          className="mb-16"
        />

        {/* 4-Card Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat)}
              data-cursor="Discover"
              className="group relative h-[420px] bg-espresso-900 overflow-hidden border border-gold-400/20 hover:border-gold-400/60 transition-all duration-500 cursor-pointer shadow-xl"
            >
              {/* Card Image with Hover Zoom */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-luxury"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/50 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 bg-caramel-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-sans uppercase tracking-wide-luxury bg-espresso-950/80 border border-gold-400/30 text-gold-300 px-2.5 py-1 backdrop-blur-sm">
                  {cat.badge}
                </span>
              </div>

              {/* Slide-Up Content Drawer on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-luxury">
                <div className="flex items-center justify-between text-xs text-caramel-400 font-sans tracking-wide-luxury uppercase mb-1">
                  <span>{cat.serving}</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                <h3 className="font-serif text-2xl text-cream-100 font-normal mb-2 group-hover:text-gold-200 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs font-sans text-cream-300/70 font-light leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {cat.description}
                </p>

                {/* Thin gold reveal line */}
                <div className="mt-4 pt-3 border-t border-gold-400/20 flex items-center justify-between text-[11px] text-gold-300 uppercase tracking-widest font-medium">
                  <span>View Offerings</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
