import React from 'react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '../ui/Icons';
import Button from '../ui/Button';

export default function CustomOrderBanner({ onOpenOrder }) {
  const scrollToMenu = () => {
    const el = document.querySelector('#featured-desserts');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="custom-enquiry" className="relative py-28 sm:py-36 bg-espresso-950 text-cream-100 overflow-hidden select-none border-t border-b border-gold-400/20">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/celebration_cake_tiered.jpg"
          alt="Bespoke Nikkah and wedding cake centerpiece"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/90 to-espresso-950" />
        <div className="absolute inset-0 bg-espresso-950/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-espresso-900/90 border border-gold-400/40 text-gold-300 text-[11px] font-sans uppercase tracking-wide-luxury mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Bespoke Celebration Cakes • Cake's Kingdom (R 708)</span>
        </div>

        {/* Grand Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream-50 font-normal leading-tight tracking-tight">
          Planning a Celebration That Demands{' '}
          <span className="italic font-serif text-caramel-400">
            Uncompromising Artistry?
          </span>
        </h2>

        {/* Narrative Paragraph */}
        <p className="mt-6 text-sm sm:text-base font-sans font-light text-cream-200/80 max-w-2xl leading-relaxed">
          From opulent multi-tier wedding centerpieces and celebration dessert spreads to intimate birthday dinners and corporate gifting — every custom commission at Cake's Kingdom begins with a personal WhatsApp consultation to tailor your design, velvety soft sponge flavors, and exquisite handcrafted details.
        </p>

        {/* Lead time notice */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-caramel-400 font-sans tracking-wider uppercase">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Signature Cakes: 48 Hours Notice</span>
          </span>
          <span className="text-gold-500/40">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Wedding Tiers: 7–14 Days Advance Booking</span>
          </span>
        </div>

        {/* Action Button Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button
            variant="caramel"
            size="lg"
            icon={WhatsAppIcon}
            onClick={onOpenOrder}
            className="w-full sm:w-auto shadow-2xl"
          >
            Start WhatsApp Consultation
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToMenu}
            className="w-full sm:w-auto"
          >
            Explore Flavor Repertoire
          </Button>
        </div>
      </div>
    </section>
  );
}
