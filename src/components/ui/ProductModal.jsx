import React, { useEffect } from 'react';
import { X, Clock, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import Button from './Button';

export default function ProductModal({ product, isOpen, onClose, onEnquire }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso-950/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-cream-50 text-espresso-950 rounded-none shadow-2xl border border-gold-400/30 overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-espresso-900/60 hover:bg-espresso-900 text-cream-100 rounded-full transition-colors border border-gold-400/30 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual Column */}
        <div className="md:w-1/2 relative bg-espresso-950 min-h-[260px] md:min-h-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-transparent to-transparent pointer-events-none" />

          {/* Badge & Category */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream-100">
            <span className="text-[10px] tracking-wide-luxury uppercase bg-espresso-900/90 border border-gold-400/40 px-3 py-1 font-sans">
              {product.weight || product.category}
            </span>
            <span className="text-gold-300 font-serif text-xl tracking-tight">
              {product.price}
            </span>
          </div>
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-caramel-500 text-[11px] font-sans tracking-wide-luxury uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Handcrafted • Cake's Kingdom (R 708)</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso-950 mt-1 mb-2">
              {product.name}
            </h3>

            <p className="text-xs font-serif italic text-caramel-600 mb-4">
              "{product.tagline}"
            </p>

            <p className="text-sm font-sans font-light text-espresso-800 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Flavor Architecture (Layers) */}
            <div className="border-t border-b border-gold-500/20 py-4 my-4">
              <h4 className="flex items-center gap-2 text-xs font-sans uppercase tracking-luxury text-espresso-900 font-semibold mb-3">
                <Layers className="w-3.5 h-3.5 text-caramel-500" />
                Flavor Architecture & Layers
              </h4>
              <div className="space-y-2.5">
                {product.layers?.map((layer, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs">
                    <span className="font-serif font-medium text-caramel-600 min-w-[65px] uppercase tracking-wider text-[11px]">
                      {layer.level}:
                    </span>
                    <span className="text-espresso-800 font-light">
                      {layer.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Time & Dietary */}
            <div className="space-y-2 text-xs text-espresso-700 mb-6 bg-cream-200/50 p-3.5 border-l-2 border-caramel-500">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-caramel-600 shrink-0" />
                <span><strong>Advance Notice:</strong> {product.leadTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-caramel-600 shrink-0" />
                <span><strong>Dietary & Purity:</strong> {product.dietary}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 border-t border-espresso-900/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <span className="text-[11px] text-espresso-500 italic">
              * Store pickup at Shop R 708 or safe express delivery
            </span>
            <Button
              variant="caramel"
              size="md"
              icon={WhatsAppIcon}
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              className="w-full sm:w-auto"
            >
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
