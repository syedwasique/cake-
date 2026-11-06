import React, { useState } from 'react';
import { Sparkles, Eye, Layers } from 'lucide-react';
import { WhatsAppIcon } from '../ui/Icons';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FEATURED_DESSERTS } from '../../lib/data';

export default function FeaturedDesserts({ onInspectProduct, onEnquireProduct }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const categories = ['All', 'Signature Layer Cakes', 'Artisan Brownies & Bars', 'Bespoke Celebration Tiers', 'Curated Atelier Boxes'];

  const filteredProducts = activeFilter === 'All'
    ? FEATURED_DESSERTS
    : FEATURED_DESSERTS.filter((p) => p.category === activeFilter);

  const signatureCake = FEATURED_DESSERTS[0]; // The Obsidian Noir

  return (
    <section id="featured-desserts" className="py-24 sm:py-32 bg-cream-100 text-espresso-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="The Atelier Repertoire"
          title="Best-Selling Confections &"
          italicWord="Seasonal Creations"
          subtitle="Formulated with French & Belgian Grand Cru couverture, pure browned butter, and sea salt flakes. Freshly handcrafted in Lahore for your special dates."
          theme="light"
          align="center"
          className="mb-12"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs uppercase font-sans tracking-luxury px-4 py-2 transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-espresso-900 text-cream-100 border-espresso-900 shadow-md'
                  : 'bg-transparent text-espresso-800 border-espresso-900/20 hover:border-gold-400 hover:text-caramel-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-cream-50 border border-gold-400/25 shadow-xl hover:shadow-2xl hover:border-gold-400/60 transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Image & Badges */}
              <div
                className="relative h-72 sm:h-80 overflow-hidden bg-espresso-950 cursor-pointer"
                onClick={() => onInspectProduct(product)}
                data-cursor="Inspect"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  {product.isBestseller && (
                    <span className="text-[10px] uppercase tracking-wide-luxury bg-caramel-500 text-cream-50 px-2.5 py-1 font-sans shadow-sm">
                      Bestseller in Lahore
                    </span>
                  )}
                  <span className="text-[10px] uppercase tracking-wide-luxury bg-espresso-900/90 border border-gold-400/30 text-gold-300 px-2.5 py-0.5 font-sans backdrop-blur-sm">
                    {product.weight || product.category}
                  </span>
                </div>

                {/* Price Tag in PKR */}
                <div className="absolute bottom-4 right-4 z-10 bg-espresso-900/95 border border-gold-400/40 text-cream-50 px-3.5 py-1 font-serif text-base tracking-tight shadow-md flex items-center gap-1.5">
                  <span className="text-gold-300">{product.price}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onInspectProduct(product)}
                    className="font-serif text-2xl font-medium text-espresso-950 group-hover:text-caramel-600 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs font-serif italic text-caramel-600 mt-1 mb-3">
                    "{product.tagline}"
                  </p>

                  <p className="text-xs font-sans font-light text-espresso-800/80 leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Flavor Layers Preview */}
                  <div className="space-y-1.5 py-3 border-t border-espresso-900/10 text-[11px] text-espresso-700 font-sans">
                    <span className="text-[10px] uppercase tracking-luxury text-gold-500 font-semibold block mb-1">
                      Flavor Architecture:
                    </span>
                    {product.layers?.slice(0, 2).map((layer, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-caramel-500 shrink-0" />
                        <span className="font-light truncate">{layer.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 mt-4 border-t border-espresso-900/10 grid grid-cols-2 gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Eye}
                    onClick={() => onInspectProduct(product)}
                    className="w-full"
                  >
                    Inspect
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    icon={WhatsAppIcon}
                    onClick={() => onEnquireProduct(product)}
                    className="w-full"
                  >
                    Order (WA)
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Layer Breakdown Walkthrough (Pinned / Feature Spotlight) */}
        <div className="mt-24 p-8 sm:p-12 bg-espresso-950 text-cream-100 border border-gold-400/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Interactive Layer Navigator (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-caramel-400 text-xs font-sans tracking-wide-luxury uppercase">
                <Layers className="w-4 h-4 text-gold-400" />
                <span>Anatomy of Pakistan's Signature Torte</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-cream-100 font-normal">
                Inside <span className="italic font-serif text-caramel-400">The Obsidian Noir</span>
              </h3>

              <p className="text-xs sm:text-sm font-sans font-light text-cream-300/80 leading-relaxed">
                Click through the architectural tiers below to explore how Cake's Kingdom confectioners balance soft, moisture-rich dark chocolate sponge with cold-drip espresso, crunchy roasted praline, and Madagascar vanilla bean.
              </p>

              {/* Layer Selection Buttons */}
              <div className="space-y-3 pt-2">
                {signatureCake.layers.map((layer, idx) => {
                  const isActive = idx === activeLayerIndex;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveLayerIndex(idx)}
                      className={`p-4 border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-espresso-900 border-gold-400 shadow-lg'
                          : 'bg-espresso-900/40 border-gold-400/20 hover:border-gold-400/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs uppercase font-sans tracking-luxury text-gold-300 font-medium">
                          Tier {idx + 1}: {layer.level}
                        </span>
                        {isActive && (
                          <span className="text-[10px] uppercase tracking-wide-luxury text-caramel-400 bg-espresso-950 px-2 py-0.5 border border-gold-400/30">
                            Active Tier
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-sans text-cream-200/90 font-light">
                        {layer.note}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button
                  variant="caramel"
                  size="md"
                  icon={WhatsAppIcon}
                  onClick={() => onEnquireProduct(signatureCake)}
                >
                  Order The Obsidian Noir (Rs. 6,800)
                </Button>
              </div>
            </div>

            {/* Right: Macro Image Display (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-gold-400/40 p-2 shadow-2xl bg-espresso-900">
                <img
                  src="/images/hero_cake_ganache.jpg"
                  alt="Obsidian Noir cross-section texture"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 bg-espresso-950/90 backdrop-blur-md border border-gold-400/30 text-cream-100">
                  <span className="text-[10px] uppercase tracking-wide-luxury text-caramel-400 block">
                    Belgian Couverture Blend
                  </span>
                  <p className="text-xs font-serif italic text-gold-300">
                    Callebaut 70% Dark Couverture • 100% Halal Ingredients • Lahore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
