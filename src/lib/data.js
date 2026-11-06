/**
 * Cake's Kingdom — Brand Data & Content Store
 * 
 * 4.9 ★ (288 Reviews) · Cake shop · R 708
 * Specializing in bespoke celebration cakes, soft flavor-rich sponges,
 * and royal tiered centerpieces.
 */

export const BRAND = {
  name: "Cake's Kingdom",
  byline: "Artisanal Cake Shop • R 708",
  tagline: "Royal Designs. Soft Sponges. Pure Flavor.",
  rating: "4.9",
  reviewCount: 288,
  category: "Cake shop",
  code: "R 708",
  ratingBadge: "4.9(288) · Cake shop",
  description: "A premier artisanal cake shop (R 708) celebrating 4.9 stars across 288 reviews. Renowned for custom showstopping designs, remarkably soft sponges, and decadent flavor layers.",
  instagram: "https://www.instagram.com/cakeskingdom",
  handle: "@cakeskingdom",
  whatsappNumber: "+923001234567",
  displayPhone: "+92 300 1234567",
  city: "Cake's Kingdom • R 708",
  deliveryNote: "Store Pickup at R 708 & Temperature-Controlled Safe Delivery",
  hours: "Mon – Sun: 10:00 AM – 9:00 PM (Daily Fresh Bakes & WhatsApp Consultation)",
  locationPlaceholder: "Shop R 708, Main Boulevard",
  halalStatement: "100% Halal Ingredients • Pure Dairy Butter • Velvety Soft Crumb • Zero Artificial Additives",
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Baked to Obsess Over",
    subtitle: "Imported Belgian 70% dark chocolate sponge, slow-drizzled silky ganache, and crisp roasted praline.",
    badge: "The Obsidian Noir • Signature Cake",
    image: "/images/hero_cake_ganache.jpg",
    alt: "Moody macro photograph of Cake's Kingdom signature dark chocolate cake with dripping ganache",
  },
  {
    id: 2,
    title: "Pure Couverture & Silken Layers",
    subtitle: "Warm single-origin Belgian chocolate poured in generous ribbons over hand-aerated crumb.",
    badge: "Artisanal Kitchen • Pakistan",
    image: "/images/hero_ganache_pour.jpg",
    alt: "Warm chocolate ganache pouring over decadent cake crumb",
  },
  {
    id: 3,
    title: "Dense. Fudgy. Unapologetic.",
    subtitle: "Triple-origin chocolate brownies baked with browned cultured butter and flaky Maldon sea salt.",
    badge: "Fleur de Sel Brownies",
    image: "/images/fudge_brownie_stack.jpg",
    alt: "Stack of fudgy dark chocolate brownies with salted caramel drizzle",
  },
  {
    id: 4,
    title: "Bespoke Nikkah & Wedding Tiers",
    subtitle: "Architectural tiered showpieces adorned with 24K edible gold leaf, fresh figs, and autumn florals.",
    badge: "Wedding & Celebration Tiers",
    image: "/images/celebration_cake_tiered.jpg",
    alt: "Bespoke four-tier celebration cake for weddings in Lahore and Islamabad",
  }
];

export const CATEGORIES = [
  {
    id: "signature-cakes",
    title: "Signature Layer Cakes",
    description: "Multi-layered tortes made with French & Belgian couverture, cold-steeped espresso, and silky buttercream.",
    serving: "2.5 lbs – 6 lbs (Serves 8 – 20)",
    image: "/images/hero_cake_ganache.jpg",
    badge: "Most Coveted",
  },
  {
    id: "brownies-bars",
    title: "Artisan Brownies & Bars",
    description: "Deeply fudgy chocolate bars baked with browned butter, molten caramel rivers, and flaky sea salt crystals.",
    serving: "Boxes of 6, 9, or 12 Pieces",
    image: "/images/fudge_brownie_stack.jpg",
    badge: "Signature Melt",
  },
  {
    id: "celebration-cakes",
    title: "Nikkah & Wedding Tiers",
    description: "Custom multi-tiered architectural centerpieces designed for Nikkahs, receptions, and landmark soirees.",
    serving: "Bespoke Tiers (20 – 100+ Guests)",
    image: "/images/celebration_cake_tiered.jpg",
    badge: "Advance Booking",
  },
  {
    id: "boxed-desserts",
    title: "Atelier Gifting Boxes",
    description: "Luxury gold-embossed gift boxes curated with brownie squares, hazelnut truffles, and mini entremets.",
    serving: "Ideal for Eid & Milestones",
    image: "/images/boxed_desserts_luxury.jpg",
    badge: "Festive Favorite",
  },
];

export const FEATURED_DESSERTS = [
  {
    id: "obsidian-noir",
    name: "The Obsidian Noir",
    category: "Signature Layer Cakes",
    price: "Rs. 6,800",
    priceNote: "Placeholder price for 2.5 lbs torte (Serves 8–10)",
    weight: "2.5 lbs",
    leadTime: "48 Hours Notice Required",
    image: "/images/hero_cake_ganache.jpg",
    tagline: "Intense Belgian dark chocolate, silky ganache, and edible 24K gold leaf.",
    description: "Four tiers of slow-baked Belgian 70% dark cocoa sponge, lightly hydrated with cold-drip espresso syrup, layered with whipped dark chocolate silk, and crowned with hand-torn edible 24K gold leaf.",
    layers: [
      { level: "Top Tier", note: "Glossy bittersweet Belgian mirror glaze with edible 24K gold leaf" },
      { level: "Middle", note: "Whipped Belgian 70% dark mousse & roasted hazelnut feuilletine crunch" },
      { level: "Foundation", note: "Espresso-infused dark chocolate crumb with Madagascar vanilla bean" },
    ],
    dietary: "100% Halal • Vegetarian • Nut-Free Option on Request",
    isBestseller: true,
  },
  {
    id: "caramel-fudge-brownies",
    name: "Fleur de Sel Fudge Brownies",
    category: "Artisan Brownies & Bars",
    price: "Rs. 3,800",
    priceNote: "Box of 9 oversized signature squares",
    weight: "Box of 9",
    leadTime: "24 Hours Notice Required",
    image: "/images/fudge_brownie_stack.jpg",
    tagline: "Paper-thin crinkle crust, gooey molten center, sea salt crunch.",
    description: "Prepared with slow-browned butter and Callebaut dark chocolate chunks. Filled with a generous river of house-made amber caramel and finished with hand-harvested flaky sea salt crystals.",
    layers: [
      { level: "Crust", note: "Flaky crinkly top dusted with raw cocoa and sea salt flakes" },
      { level: "Center", note: "Molten salted caramel ribbon inside dense chocolate fudge" },
      { level: "Base", note: "Slow-baked brown butter chocolate brownie with chewy edges" },
    ],
    dietary: "100% Halal • Vegetarian Friendly • Contains Dairy & Gluten",
    isBestseller: true,
  },
  {
    id: "bespoke-fig-gold-tier",
    name: "The Royal Fig & Gold Celebration Tier",
    category: "Bespoke Celebration Tiers",
    price: "Rs. 28,000",
    priceNote: "Starting estimate for 3-tier custom wedding cake",
    weight: "7–8 lbs (Multi-Tier)",
    leadTime: "7 to 14 Days Advance Booking",
    image: "/images/celebration_cake_tiered.jpg",
    tagline: "A majestic centerpiece for Nikkah, wedding receptions & anniversaries.",
    description: "A breathtaking three-tier architectural centerpiece featuring stone-textured ivory buttercream, delicate spun amber sugar, ripe fresh figs, blackberries, and hand-applied 24K Italian gold foil.",
    layers: [
      { level: "Top Tier", note: "Almond genoise sponge with slow-cooked blackberry thyme compote" },
      { level: "Middle Tier", note: "Caramelized white chocolate ganache with brown butter sponge" },
      { level: "Base Tier", note: "Belgian espresso velvet cake with dark chocolate mascarpone" },
    ],
    dietary: "100% Halal • Tailored dietary formulation during personal consultation",
    isBestseller: false,
  },
  {
    id: "atelier-gift-ballotin",
    name: "The Atelier Degustation Gift Box",
    category: "Curated Atelier Boxes",
    price: "Rs. 5,800",
    priceNote: "Signature gold-embossed presentation box",
    weight: "16 Artisan Pieces",
    leadTime: "48 Hours Notice Required",
    image: "/images/boxed_desserts_luxury.jpg",
    tagline: "The premier confectionery gift box for Eid, festivities & corporate gestures.",
    description: "Sixteen handcrafted confections nestled in an opulent velvet-tied box: dark chocolate hazelnut entremets, Fleur de Sel brownie cubes, pistachio tartlets, and single-origin dark cocoa truffles.",
    layers: [
      { level: "Entremets", note: "Mini dark chocolate mirror domes with roasted hazelnut" },
      { level: "Truffles", note: "Single-origin Belgian dark ganache & salted caramel" },
      { level: "Brownie Cubes", note: "Fudge brownie bites with sea salt and caramel drip" },
    ],
    dietary: "100% Halal • Contains Dairy, Gluten & Tree Nuts",
    isBestseller: true,
  },
  {
    id: "pistachio-rose-entremet",
    name: "Sicilian Pistachio & Wild Raspberry",
    category: "Signature Layer Cakes",
    price: "Rs. 7,200",
    priceNote: "Placeholder price for 2.5 lbs cake (Serves 8–10)",
    weight: "2.5 lbs",
    leadTime: "48 Hours Notice Required",
    image: "/images/patisserie_craft_story.jpg",
    tagline: "Roasted Iranian pistachios paired with tart ruby raspberry coulis.",
    description: "Alternating layers of pure roasted pistachio sponge, slow-simmered wild raspberry confit, whipped white chocolate mousse, and a delicate feuilletine praline base.",
    layers: [
      { level: "Glaze", note: "Whipped pistachio cream topped with roasted crushed pistachios" },
      { level: "Core", note: "Tart raspberry gelée balancing sweet Belgian white chocolate" },
      { level: "Base", note: "Feuilletine crunch layer with browned butter and fleur de sel" },
    ],
    dietary: "100% Halal • Vegetarian • Contains Tree Nuts & Dairy",
    isBestseller: false,
  },
  {
    id: "smoked-caramel-espresso-bar",
    name: "Dark Espresso & Smoked Toffee Slab",
    category: "Artisan Brownies & Bars",
    price: "Rs. 3,600",
    priceNote: "Box of 8 generous dessert bars",
    weight: "Box of 8",
    leadTime: "24 Hours Notice Required",
    image: "/images/fudge_brownie_stack.jpg",
    tagline: "Deep roasted notes balancing golden brown butter toffee.",
    description: "Flourless dark cocoa batter swirled with freshly ground Arabica espresso, layered over slow-cooked salted toffee caramel and baked until fudgy and decadent.",
    layers: [
      { level: "Topping", note: "Maldon flake sea salt & crunchy espresso bean dust" },
      { level: "Core", note: "Smoky golden butterscotch toffee ribbon" },
      { level: "Base", note: "Intense Belgian dark chocolate flourless batter" },
    ],
    dietary: "100% Halal • Gluten-Free Formulation • Contains Dairy & Eggs",
    isBestseller: false,
  }
];

export const ORDER_STEPS = [
  {
    step: "01",
    title: "Browse & Select",
    description: "Choose your desired signature cake, brownie box, or share your custom celebration cake vision.",
    note: "Small batch reservations"
  },
  {
    step: "02",
    title: "Confirm via WhatsApp",
    description: "Share your date, portion requirements, design reference, and any custom chocolate plaque inscriptions directly with Cake's Kingdom.",
    note: "Instant WhatsApp coordination"
  },
  {
    step: "03",
    title: "Freshly Handcrafted",
    description: "Your cake is baked from scratch within hours of delivery using 100% pure butter and premium Belgian chocolate.",
    note: "Soft sponge & rich flavor guarantee"
  },
  {
    step: "04",
    title: "Studio Pickup or Delivery",
    description: "Collect from our shop at R 708 or receive via temperature-controlled doorstep delivery.",
    note: "Secure packaging for safe arrival"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The design was just what I wanted, and the cake was soft and full of flavor.",
    author: "Verified Customer",
    occasion: "Bespoke Custom Cake Design",
    rating: 5,
    location: "Cake's Kingdom • R 708",
    source: "Google Review (4.9★)",
  },
  {
    id: 2,
    quote: "Cake's Kingdom is without question the most dependable cake shop. The cake looked like a royal masterpiece and the sponge was astonishingly soft and moist. All our guests loved it!",
    author: "Anusheh & Farhan",
    occasion: "Celebration Dinner • R 708",
    rating: 5,
    location: "Patron Review",
    source: "Verified Order",
  },
  {
    id: 3,
    quote: "Ordered for our family milestone—Cake's Kingdom delivered pure perfection. Crisp praline, Belgian chocolate ganache, and flawless finish. 4.9 stars is truly well deserved across all 288 reviews.",
    author: "Mahnoor Tariq",
    occasion: "Festive Milestone Cake",
    rating: 5,
    location: "Patron Review",
    source: "Verified Order",
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "/images/hero_cake_ganache.jpg",
    caption: "Midnight ganache pours at Cake's Kingdom. Pure Belgian couverture on soft layered dark crumb.",
    likes: "1,840",
    comments: "94",
    tag: "#CakesKingdom"
  },
  {
    id: 2,
    image: "/images/fudge_brownie_stack.jpg",
    caption: "Fresh weekend brownie batches ready for pickup at R 708. Maldon salt on warm caramel.",
    likes: "2,980",
    comments: "168",
    tag: "#CakesKingdomR708"
  },
  {
    id: 3,
    image: "/images/patisserie_craft_story.jpg",
    caption: "Delicately placing 24K edible gold leaf on a custom order. Handcrafted with love at Cake's Kingdom.",
    likes: "2,150",
    comments: "105",
    tag: "#CakeShopR708"
  },
  {
    id: 4,
    image: "/images/celebration_cake_tiered.jpg",
    caption: "A magnificent autumn fig and gold centerpiece designed for a bespoke royal soiree.",
    likes: "3,420",
    comments: "240",
    tag: "#CakesKingdomDesigns"
  },
  {
    id: 5,
    image: "/images/hero_ganache_pour.jpg",
    caption: "No artificial pre-mixes, ever. Only pure butter, fresh cream, and rich Belgian chocolate.",
    likes: "2,760",
    comments: "135",
    tag: "#CakesKingdomKitchen"
  },
  {
    id: 6,
    image: "/images/boxed_desserts_luxury.jpg",
    caption: "Signature royal presentation boxes ready for orders and pickups at Shop R 708.",
    likes: "1,920",
    comments: "92",
    tag: "#CakesKingdomSpecials"
  }
];

export const BRAND_VALUES = [
  {
    title: "100% Halal & Pure Ingredients",
    description: "We use only certified Halal ingredients, pure dairy butter, and alcohol-free Madagascar vanilla bean."
  },
  {
    title: "Imported Belgian Couverture",
    description: "No cheap commercial compound chocolate. We work strictly with single-origin Callebaut and Valrhona."
  },
  {
    title: "Bespoke Made-to-Order",
    description: "Every dessert is baked specifically for your event date in small batches to guarantee utmost freshness."
  }
];
