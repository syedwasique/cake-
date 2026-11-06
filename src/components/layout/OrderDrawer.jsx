import React, { useState, useEffect } from 'react';
import { X, Send, Copy, Check, Calendar, Users, Sparkles, MapPin, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import Button from '../ui/Button';
import { WhatsAppIcon } from '../ui/Icons';
import { BRAND, CATEGORIES, FEATURED_DESSERTS } from '../../lib/data';

export default function OrderDrawer({ isOpen, onClose, selectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Lahore (Studio Pickup / Delivery)',
    confectionCategory: 'Signature Layer Cakes',
    productName: 'The Obsidian Noir',
    portions: '2.5 lbs (8–10 Guests)',
    occasion: 'Birthday Celebration',
    date: '',
    notes: '',
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        confectionCategory: selectedProduct.category || prev.confectionCategory,
        productName: selectedProduct.name || prev.productName,
      }));
    }
  }, [selectedProduct]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const message = `Salam! I would like to place an order / enquiry with Cake's Kingdom (R 708):
- Confection: ${formData.productName} (${formData.confectionCategory})
- Portion / Weight: ${formData.portions}
- Occasion: ${formData.occasion}
- Event Date: ${formData.date || 'Flexible / To be confirmed'}
- Location / Pickup: ${formData.city}
- Name: ${formData.name || 'Anonymous'}
- Contact Phone: ${formData.phone || 'Provided via WhatsApp'}
- Custom Plaque & Inscription / Notes: ${formData.notes || 'None'}

Please let me know if your baking slot is available. Thank you!`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C5A880', '#B8793E', '#FAF6F0'],
    });
    const url = `https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleCopySummary = () => {
    const summary = `Cake's Kingdom (Shop R 708) — Order Enquiry:
Item: ${formData.productName}
Portions: ${formData.portions}
Occasion: ${formData.occasion}
Date: ${formData.date || 'To be confirmed'}
Location: ${formData.city}
Client: ${formData.name || 'Enquiry'}
Notes: ${formData.notes || 'Standard recipe'}`;
    
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-espresso-950/80 backdrop-blur-sm transition-opacity duration-500">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-espresso-900 text-cream-100 h-full overflow-y-auto shadow-2xl border-l border-gold-400/30 flex flex-col justify-between z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-gold-400/20 sticky top-0 bg-espresso-900/95 backdrop-blur z-20 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-wide-luxury text-caramel-400 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Bespoke Order • Cake's Kingdom (R 708)</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-cream-100 font-normal">
              Order via WhatsApp
            </h2>
            <p className="text-xs font-sans text-cream-300/70 mt-1">
              Connect directly with Cake's Kingdom for order bookings and custom celebration cakes.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-espresso-800 text-cream-200 hover:text-white border border-gold-400/30 transition-colors focus:outline-none"
            aria-label="Close drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSend} className="p-6 sm:p-8 space-y-4 flex-1">
          <div className="p-3 bg-espresso-850 border border-gold-400/20 text-xs text-cream-300/80 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-caramel-400 shrink-0 mt-0.5" />
            <p>
              Freshly baked at Cake's Kingdom (R 708). Please provide minimum 48 hours notice for signature cakes, and 7–14 days for custom celebration tiers.
            </p>
          </div>

          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ayesha Khan"
                className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 placeholder-cream-300/30 focus:border-gold-400 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans">
                WhatsApp Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0300-1234567"
                className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 placeholder-cream-300/30 focus:border-gold-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* City / Delivery Method */}
          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-caramel-400" />
              <span>Location / Pickup Preference</span>
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 focus:border-gold-400 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="Shop R 708 — Store Pickup">Shop R 708 — Store Pickup</option>
              <option value="Temperature-Controlled Doorstep Delivery">Temperature-Controlled Doorstep Delivery</option>
              <option value="Express Celebration Venue Dispatch">Express Celebration Venue Dispatch</option>
            </select>
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans">
              Confection Category
            </label>
            <select
              name="confectionCategory"
              value={formData.confectionCategory}
              onChange={handleChange}
              className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 focus:border-gold-400 focus:outline-none transition-colors cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title}
                </option>
              ))}
              <option value="Custom Bespoke Celebration Cake">Custom Bespoke Celebration Cake</option>
            </select>
          </div>

          {/* Product Selection */}
          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans">
              Select Creation
            </label>
            <select
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 focus:border-gold-400 focus:outline-none transition-colors cursor-pointer"
            >
              {FEATURED_DESSERTS.map((prod) => (
                <option key={prod.id} value={prod.name}>
                  {prod.name} ({prod.price})
                </option>
              ))}
              <option value="Custom Flavor Request">Custom Flavor / Design Request</option>
            </select>
          </div>

          {/* Occasion & Portions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans">
                Occasion
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 focus:border-gold-400 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="Birthday Celebration">Birthday Celebration</option>
                <option value="Nikkah Ceremony">Nikkah Ceremony</option>
                <option value="Wedding Reception / Barat / Walima">Wedding Reception / Barat / Walima</option>
                <option value="Dholki / Mehndi Soiree">Dholki / Mehndi Soiree</option>
                <option value="Eid / Festive Gifting">Eid / Festive Gifting</option>
                <option value="Anniversary / Private Dinner">Anniversary / Private Dinner</option>
                <option value="Baby Announcement / Aqeeqah">Baby Announcement / Aqeeqah</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans flex items-center gap-1.5">
                <Users className="w-3 h-3 text-caramel-400" />
                <span>Size / Weight</span>
              </label>
              <select
                name="portions"
                value={formData.portions}
                onChange={handleChange}
                className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 focus:border-gold-400 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="Box of 6 or 9 Brownies">Box of 6 or 9 Brownies</option>
                <option value="2.5 lbs Cake (Serves 8–10)">2.5 lbs Cake (Serves 8–10)</option>
                <option value="4 lbs Cake (Serves 14–18)">4 lbs Cake (Serves 14–18)</option>
                <option value="6 lbs 2-Tier Cake (Serves 22–26)">6 lbs 2-Tier Cake (Serves 22–26)</option>
                <option value="Multi-Tier Wedding Cake (50+ Guests)">Multi-Tier Wedding Cake (50+ Guests)</option>
                <option value="Atelier Gift Ballotin Box">Atelier Gift Ballotin Box</option>
              </select>
            </div>
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-caramel-400" />
              <span>Event / Required Date</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 focus:border-gold-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Custom Notes / Plaque Inscription */}
          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-gold-300/90 mb-1.5 font-sans">
              Plaque Inscription & Special Instructions
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g. Inscription: 'Happy Birthday Aiman', or 'Nikkah Mubarak', nut allergy, delivery time preference..."
              className="w-full bg-espresso-950 border border-gold-400/30 px-3.5 py-2.5 text-xs text-cream-100 placeholder-cream-300/30 focus:border-gold-400 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <Button
              type="submit"
              variant="caramel"
              size="lg"
              icon={WhatsAppIcon}
              className="w-full"
            >
              Send WhatsApp Order to Cake's Kingdom
            </Button>

            <button
              type="button"
              onClick={handleCopySummary}
              className="w-full py-2.5 px-4 text-xs font-sans uppercase tracking-luxury border border-cream-200/20 text-cream-300 hover:text-gold-300 hover:border-gold-400/50 flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-gold-400" />
                  <span>Enquiry Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Order Details to Clipboard</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="p-5 border-t border-gold-400/20 bg-espresso-950 text-center text-[11px] text-cream-300/70">
          <p className="text-gold-300">
            {BRAND.deliveryNote}
          </p>
          <p className="mt-1 text-cream-300/50">
            Halal Certified Ingredients • Imported Belgian Couverture
          </p>
        </div>
      </div>
    </div>
  );
}
