import React from 'react';
import { Heart, ArrowUp, Sparkles, MapPin, Clock } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '../ui/Icons';
import { BRAND, CATEGORIES } from '../../lib/data';
import Button from '../ui/Button';

export default function Footer({ onOpenOrder }) {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-espresso-950 text-cream-200 pt-20 pb-10 border-t border-gold-400/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-cream-200/10">
          {/* Column 1: Brand & Atelier Narrative */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-widest text-cream-50 font-normal">
                CAKE'S KINGDOM
              </span>
              <span className="font-sans text-[10px] uppercase tracking-wide-luxury text-caramel-400 mt-0.5">
                4.9 ★ (288 Reviews) • Cake shop • R 708
              </span>
            </div>

            <p className="text-xs font-sans font-light text-cream-300/75 leading-relaxed">
              Cake's Kingdom is an artisanal cake shop (R 708) celebrated for custom showstopping designs, velvety soft sponges, and rich authentic flavors. Rated 4.9★ across 288 patron reviews.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Follow"
                className="w-9 h-9 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-300 hover:bg-gold-400/10 hover:border-gold-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenOrder}
                data-cursor="WhatsApp"
                className="w-9 h-9 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-300 hover:bg-gold-400/10 hover:border-gold-400 transition-colors"
                aria-label="Order on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Atelier Directory */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-sans tracking-luxury text-gold-300 font-semibold mb-4">
              Our Creations
            </h3>
            <ul className="space-y-2 text-xs font-sans font-light text-cream-300/80">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#categories"
                    className="hover:text-gold-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
                    <span>{cat.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#how-to-order"
                  className="hover:text-gold-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
                  <span>How to Order at Cake's Kingdom</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier Hours & Location */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-sans tracking-luxury text-gold-300 font-semibold mb-4">
              Location & Schedule
            </h3>
            <div className="space-y-3 text-xs font-sans text-cream-300/75 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-caramel-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-cream-100">Studio & Delivery:</p>
                  <p>{BRAND.locationPlaceholder}</p>
                  <p className="text-[11px] text-gold-300/70 mt-0.5">Shop R 708 Store Pickup & Express Delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-caramel-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-cream-100">Baking Schedule:</p>
                  <p>{BRAND.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Private Consultation Booking */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-sans tracking-luxury text-gold-300 font-semibold mb-2">
              Order via WhatsApp
            </h3>
            <p className="text-xs font-sans font-light text-cream-300/75 leading-relaxed">
              Due to meticulous small-batch handcrafting, slots fill quickly during wedding seasons and festive holidays.
            </p>
            <Button
              variant="caramel"
              size="md"
              icon={WhatsAppIcon}
              onClick={onOpenOrder}
              className="w-full"
            >
              Order on WhatsApp
            </Button>
            <p className="text-[10px] text-cream-300/50">
              {BRAND.halalStatement}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-cream-300/50">
          <div>
            © {new Date().getFullYear()} Cake's Kingdom • 4.9 ★ (288 Reviews) • Cake shop • R 708. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="Top"
            className="flex items-center gap-2 hover:text-gold-300 transition-colors uppercase tracking-widest text-[10px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
