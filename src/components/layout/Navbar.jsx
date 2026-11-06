import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '../ui/Icons';
import Button from '../ui/Button';
import { BRAND } from '../../lib/data';

export default function Navbar({ onOpenOrder }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#categories' },
    { name: 'Signature Cakes', href: '#featured-desserts' },
    { name: 'Our Story', href: '#brand-story' },
    { name: 'How to Order', href: '#how-to-order' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Gallery', href: '#instagram-strip' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -60, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 select-none ${
          isScrolled
            ? 'bg-espresso-950/95 backdrop-blur-md py-3 border-b border-gold-400/20 shadow-2xl shadow-espresso-950/50'
            : 'bg-gradient-to-b from-espresso-950/90 via-espresso-950/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark / Logo with Dedicated Right Margin */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#root')}
            className="flex flex-col group text-left shrink-0 mr-6 lg:mr-10"
            data-cursor="Home"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-widest text-cream-50 font-normal group-hover:text-gold-300 transition-colors whitespace-nowrap flex items-center gap-1.5">
              CAKE'S KINGDOM
            </span>
            <span className="font-sans text-[9px] uppercase tracking-wide-luxury text-caramel-400 -mt-0.5 group-hover:text-gold-400 transition-colors whitespace-nowrap flex items-center gap-1.5">
              <span>★ 4.9 (288)</span>
              <span>•</span>
              <span>Cake shop</span>
              <span>•</span>
              <span className="text-gold-400 font-medium">R 708</span>
            </span>
          </a>

          {/* Desktop Navigation Links with Clean Spacing and Whitespace-Nowrap */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase font-sans tracking-luxury text-cream-200/85 hover:text-gold-300 transition-colors relative py-1 group whitespace-nowrap"
                data-cursor="Explore"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle with Shrink-0 */}
          <div className="flex items-center gap-3 shrink-0 ml-4">
            <Button
              variant="primary"
              size="sm"
              icon={WhatsAppIcon}
              onClick={onOpenOrder}
              className="hidden sm:inline-flex whitespace-nowrap"
            >
              Order / Enquire
            </Button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-cream-100 rounded-full bg-espresso-900/60 border border-gold-400/30 focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-espresso-950/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fadeIn">
          {/* Navigation Links */}
          <div className="space-y-4">
            <div className="text-[10px] tracking-wide-luxury uppercase text-caramel-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>Cake's Kingdom • 4.9 ★ (288) • R 708</span>
            </div>

            {navLinks.map((link, idx) => (
              <div key={link.name} className="overflow-hidden">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block font-serif text-2xl sm:text-3xl text-cream-100 hover:text-gold-300 transition-colors py-1"
                >
                  <span className="text-xs font-sans text-gold-400/60 mr-3 tracking-widest">
                    0{idx + 1}
                  </span>
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 border-t border-gold-400/20 space-y-3">
            <Button
              variant="caramel"
              size="lg"
              icon={WhatsAppIcon}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full"
            >
              Order via WhatsApp
            </Button>

            <div className="flex items-center justify-between text-xs text-cream-300/70 pt-2 font-sans">
              <span>{BRAND.city}</span>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gold-300 hover:underline"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{BRAND.handle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
