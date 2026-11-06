import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../lib/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-cream-50 text-espresso-950 relative overflow-hidden border-b border-cream-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Words from Discerning Palates"
          title="Celebrated in Private"
          italicWord="Company"
          subtitle="Rated 4.9 across 288 customer reviews. Experience what makes Cake's Kingdom the premier cake shop."
          theme="light"
          align="center"
          className="mb-10"
        />

        {/* 4.9(288) · Cake shop · R 708 Social Proof Showcase Card */}
        <div className="mb-10 max-w-2xl mx-auto bg-cream-100 border border-gold-400/40 p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-espresso-950 flex flex-col items-center justify-center text-cream-50 border border-gold-400/40 shadow-inner shrink-0">
              <span className="font-serif font-bold text-2xl leading-none text-gold-300">4.9</span>
              <span className="text-[9px] uppercase tracking-widest text-caramel-400 mt-0.5">Rating</span>
            </div>
            <div>
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
                <span className="font-sans font-semibold text-xs text-espresso-900 ml-1.5">
                  4.9 out of 5
                </span>
              </div>
              <p className="text-xs font-sans text-espresso-700 mt-1">
                Based on <strong className="text-espresso-950 font-semibold">288 Customer Reviews</strong>
              </p>
            </div>
          </div>

          <div className="sm:border-l sm:border-gold-400/30 sm:pl-6 text-center sm:text-left">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-caramel-500/15 text-caramel-800 text-[10px] font-sans uppercase tracking-wider font-semibold mb-1">
              Cake shop
            </span>
            <p className="font-serif text-sm font-medium text-espresso-950">
              Cake's Kingdom • R 708
            </p>
          </div>
        </div>

        {/* Editorial Feature Testimonial Card */}
        <div className="relative bg-cream-100 border border-gold-400/30 p-8 sm:p-14 shadow-xl transition-all duration-500">
          <Quote className="absolute top-6 right-6 w-12 h-12 text-gold-400/20 pointer-events-none" />

          {/* Star Rating & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-caramel-600 font-medium ml-1">
              Verified Patron Review
            </span>
            {current.id === 1 && (
              <span className="ml-auto px-2.5 py-0.5 bg-caramel-500/15 border border-gold-400/40 text-caramel-800 text-[10px] font-sans uppercase tracking-widest font-semibold">
                Spotlight Review
              </span>
            )}
          </div>

          {/* Quote Text */}
          <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-espresso-950 leading-relaxed min-h-[120px] transition-opacity duration-500">
            "{current.quote}"
          </blockquote>

          {/* Author & Occasion */}
          <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-medium text-espresso-950">
                {current.author}
              </h4>
              <p className="text-xs font-sans text-caramel-600 uppercase tracking-wider mt-0.5">
                {current.occasion} • <span className="text-espresso-600">{current.location}</span>
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                aria-label="Previous quote"
                className="w-10 h-10 border border-gold-400/40 hover:border-gold-500 hover:bg-espresso-900 hover:text-cream-50 flex items-center justify-center transition-colors text-espresso-900"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next quote"
                className="w-10 h-10 border border-gold-400/40 hover:border-gold-500 hover:bg-espresso-900 hover:text-cream-50 flex items-center justify-center transition-colors text-espresso-900"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-caramel-500' : 'w-2 bg-cream-300 hover:bg-cream-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
