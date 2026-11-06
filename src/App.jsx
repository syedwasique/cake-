import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';

// Layout & Global Components
import CustomCursor from './components/layout/CustomCursor';
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import OrderDrawer from './components/layout/OrderDrawer';

// Section Components
import Hero from './components/sections/Hero';
import BrandStory from './components/sections/BrandStory';
import Categories from './components/sections/Categories';
import FeaturedDesserts from './components/sections/FeaturedDesserts';
import HowToOrder from './components/sections/HowToOrder';
import Testimonials from './components/sections/Testimonials';
import InstagramGallery from './components/sections/InstagramGallery';
import CustomOrderBanner from './components/sections/CustomOrderBanner';

// UI Components
import ProductModal from './components/ui/ProductModal';

export default function App() {
  // Initialize Lenis smooth scroll synced with GSAP
  useLenis();

  // Preloader state
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Order Drawer State
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedProductForOrder, setSelectedProductForOrder] = useState(null);

  // Product Inspection Modal State
  const [inspectingProduct, setInspectingProduct] = useState(null);

  const handleOpenOrder = (product = null) => {
    setSelectedProductForOrder(product);
    setIsOrderOpen(true);
  };

  const handleInspectProduct = (product) => {
    setInspectingProduct(product);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-espresso-950 font-sans selection:bg-caramel-500 selection:text-cream-50 relative">
      {/* Subtle Cinematic Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* Luxury Magnetic Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Page Load Unveiling Transition */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Fixed Sticky Header */}
      <Navbar onOpenOrder={() => handleOpenOrder(null)} />

      {/* Main Page Flow */}
      <main>
        {/* A. Hero Section */}
        <Hero onOpenOrder={() => handleOpenOrder(null)} />

        {/* B. Brand Story / Our Atelier Craft */}
        <BrandStory />

        {/* C. Signature Categories Showcase */}
        <Categories
          onSelectCategory={(cat) => handleOpenOrder({ category: cat.title })}
          onOpenOrder={() => handleOpenOrder(null)}
        />

        {/* D. Featured & Best-Selling Desserts & Layer Architecture */}
        <FeaturedDesserts
          onInspectProduct={handleInspectProduct}
          onEnquireProduct={handleOpenOrder}
        />

        {/* E. How to Order / 4-Step Visual Process */}
        <HowToOrder onOpenOrder={() => handleOpenOrder(null)} />

        {/* F. Social Proof & Testimonials */}
        <Testimonials />

        {/* G. Instagram Teaser Strip for @cakeskingdom */}
        <InstagramGallery />

        {/* H. Custom Order / Bespoke Celebration Banner */}
        <CustomOrderBanner onOpenOrder={() => handleOpenOrder(null)} />
      </main>

      {/* I. Editorial Multi-Column Footer */}
      <Footer onOpenOrder={() => handleOpenOrder(null)} />

      {/* Interactive Detail Modal (Flavor Layers & Tasting Notes) */}
      <ProductModal
        product={inspectingProduct}
        isOpen={!!inspectingProduct}
        onClose={() => setInspectingProduct(null)}
        onEnquire={(prod) => {
          setInspectingProduct(null);
          handleOpenOrder(prod);
        }}
      />

      {/* Interactive Order & WhatsApp Consultation Drawer */}
      <OrderDrawer
        isOpen={isOrderOpen}
        onClose={() => {
          setIsOrderOpen(false);
          setSelectedProductForOrder(null);
        }}
        selectedProduct={selectedProductForOrder}
      />
    </div>
  );
}
