import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Star, 
  Heart, 
  ShieldCheck, 
  Check, 
  Truck, 
  RotateCcw, 
  Recycle, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Droplet, 
  Leaf, 
  Zap, 
  Box, 
  ArrowLeft,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Sprout,
  Users,
  FlaskConical,
  Mountain,
  Sun
} from 'lucide-react';
import RayevaNavbar from '../components/RayevaNavbar';
import CategoryNavigation from '../components/CategoryNavigation';
import { categoriesData, findProductById } from '../data/categoriesData';

export default function ProductDetailPage({ onAddToCart }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find dynamic product data from backend/data store
  const product = findProductById(productId);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product && product.image) {
      setSelectedImage(product.image);
    }
  }, [productId]);

  // Interactive state management
  const [selectedImage, setSelectedImage] = useState(product.image || product.gallery[0]);
  const [purchaseType, setPurchaseType] = useState('one-time'); // 'one-time' or 'subscribe'
  const [quantity, setQuantity] = useState(1);
  const [impactTab, setImpactTab] = useState('per-purchase'); // 'per-purchase', '1-year', '3-years'
  const [activeTab, setActiveTab] = useState('why-better'); // 'why-better', 'materials', 'care'
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  // Gallery images array
  const galleryImages = product.gallery || [product.image, product.image, product.image, product.image];

  // Price calculations
  const unitPrice = purchaseType === 'subscribe' ? Math.round(product.price * 0.95) : product.price;
  const originalPrice = product.originalPrice || Math.round(product.price * 1.25);
  const discountPercent = Math.round(((originalPrice - unitPrice) / originalPrice) * 100);

  // Impact Projections Dynamic Multipliers
  let timeframeMultiplier = 1;
  if (impactTab === '1-year') timeframeMultiplier = 4;
  if (impactTab === '3-years') timeframeMultiplier = 12;

  const totalMultiplier = quantity * timeframeMultiplier;

  const metrics = product.impactMetrics || {
    waterSavedPerUnit: 14.0,
    plasticPreventedPerUnit: 0.5,
    carbonAvoidedPerUnit: 2.4,
    energySavedPerUnit: 4.5,
    waterEquiv: 'liters water saved',
    plasticEquiv: 'plastic bottles eliminated',
    carbonEquiv: 'kg CO2 absorbed by crop',
    energyEquiv: 'hours processing energy'
  };

  const waterSaved = (metrics.waterSavedPerUnit * totalMultiplier).toFixed(2);
  const plasticPrevented = (metrics.plasticPreventedPerUnit * totalMultiplier).toFixed(2);
  const carbonAvoided = (metrics.carbonAvoidedPerUnit * totalMultiplier).toFixed(2);
  const energySaved = (metrics.energySavedPerUnit * totalMultiplier).toFixed(2);

  const handleAddToCart = () => {
    setAdded(true);
    if (onAddToCart) {
      onAddToCart({
        id: product.id,
        name: product.name,
        price: unitPrice * quantity,
        originalPrice: originalPrice * quantity,
        badge: product.badge,
        image: selectedImage
      });
    }
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  // Thumbnail scrolling handlers
  const handleThumbnailUp = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleThumbnailDown = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f8f5] text-slate-900 flex flex-col justify-between selection:bg-emerald-500 selection:text-white relative font-sans">
      
      {/* Greenish Landscape Soft Backdrop Layer */}
      <div 
        className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: "url('/greenish.png')",
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          filter: 'blur(10px)',
          transform: 'scale(1.05)',
        }}
      />

      {/* Luminous veil overlay for clean contrast */}
      <div className="fixed inset-0 bg-[#f4f8f5]/55 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col flex-1">
        
        {/* Top Header Navbar */}
        <RayevaNavbar />

        {/* Main Content Area */}
        <main className="w-full max-w-[1360px] mx-auto px-4 md:px-8 pt-4 sm:pt-6 pb-20 flex-1">
          
          {/* Breadcrumbs Navigation Bar */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 flex-wrap">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-1.5 glass-panel px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 hover:text-emerald-800 hover:bg-white transition-all cursor-pointer border border-white/80 shadow-2xs mr-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
              <span className="text-slate-400">›</span>
              <Link to="/shop" className="hover:text-emerald-700 cursor-pointer">Shop</Link>
              <span className="text-slate-400">›</span>
              <span className="text-slate-700 font-bold">{product.categoryPath}</span>
              <span className="text-slate-400">›</span>
              <span className="text-emerald-900 font-bold truncate max-w-[200px] sm:max-w-xs">
                {product.name}
              </span>
            </div>
          </div>

          {/* ========================================== */}
          {/* SECTION 1: HERO PRODUCT SHOWCASE & ORDER UI */}
          {/* ========================================== */}
          <div className="glass-panel rounded-[32px] p-6 sm:p-8 md:p-10 mb-10 border border-white/90 shadow-2xl bg-white/85 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* LEFT COLUMN: Vertical Thumbnails Selector */}
              <div className="lg:col-span-1 hidden lg:flex flex-col items-center gap-3 pt-2">
                <button
                  onClick={handleThumbnailUp}
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-2xs flex items-center justify-center text-gray-600 hover:text-emerald-700 hover:border-emerald-300 transition-all cursor-pointer"
                  title="Previous image"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-3">
                  {galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`w-16 h-16 rounded-2xl overflow-hidden border-2 p-1 bg-white transition-all cursor-pointer shadow-2xs ${
                        selectedImage === img
                          ? 'border-[#02b3b0] ring-2 ring-[#02b3b0]/30 scale-105'
                          : 'border-gray-200 hover:border-gray-300 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleThumbnailDown}
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-2xs flex items-center justify-center text-gray-600 hover:text-emerald-700 hover:border-emerald-300 transition-all cursor-pointer"
                  title="Next image"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* CENTER COLUMN: Main Product Showcase Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[28px] overflow-hidden border border-white/90 shadow-xl bg-white aspect-[4/5] flex items-center justify-center group">
                  
                  {/* Top-Left Eco Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-[#0b4d3c]/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md border border-emerald-700/50">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{product.badge || 'Zero Additives'}</span>
                  </div>

                  {/* Top-Right Wishlist Heart Button */}
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-600 hover:text-rose-500 transition-colors cursor-pointer border border-white"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Main Product Showcase Image */}
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                </div>

                {/* Mobile Thumbnails Horizontal Row */}
                <div className="flex lg:hidden items-center justify-center gap-3 overflow-x-auto no-scrollbar pt-4">
                  {galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`w-14 h-14 rounded-xl overflow-hidden border-2 p-0.5 bg-white shrink-0 transition-all cursor-pointer ${
                        selectedImage === img
                          ? 'border-[#02b3b0] scale-105 shadow-sm'
                          : 'border-gray-200 opacity-70'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: Product Title, Pricing, Micro-cards & Purchase Panel */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-5">
                
                <div>
                  {/* Category Path Header */}
                  <div className="text-xs font-extrabold text-[#02b3b0] tracking-wider uppercase mb-1.5">
                    {product.categoryPath ? product.categoryPath.replace('›', '•').toUpperCase() : 'FOOD & WELLNESS • ZERO ADDITIVES'}
                  </div>

                  {/* Product Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                    {product.name}
                  </h1>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Star Rating Row */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-extrabold text-slate-900">{product.rating || 4.8}</span>
                    <span className="text-xs font-semibold text-slate-500">({product.reviews || 98} reviews)</span>
                  </div>

                  {/* Price & Discount Display */}
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      ₹{unitPrice.toLocaleString('en-IN')}
                    </span>
                    {originalPrice > unitPrice && (
                      <span className="text-sm text-slate-400 line-through font-medium">
                        ₹{originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    {discountPercent > 0 && (
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full border border-emerald-300">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* 2x2 Feature Micro-Cards Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-100/80 rounded-2xl p-3 border border-slate-200/80 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <Leaf className="w-4 h-4 text-emerald-700" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-snug">
                        Cold-Pressed Extraction
                      </span>
                    </div>

                    <div className="bg-slate-100/80 rounded-2xl p-3 border border-slate-200/80 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                        <FlaskConical className="w-4 h-4 text-teal-700" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-snug">
                        Non-GMO Formula
                      </span>
                    </div>

                    <div className="bg-slate-100/80 rounded-2xl p-3 border border-slate-200/80 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                        <Mountain className="w-4 h-4 text-sky-700" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-snug">
                        Himalayan Sourced
                      </span>
                    </div>

                    <div className="bg-slate-100/80 rounded-2xl p-3 border border-slate-200/80 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-snug">
                        Zero Chemical Additives
                      </span>
                    </div>
                  </div>

                  {/* Quantity Counter & Add to Cart Action Row */}
                  <div className="flex items-center gap-3 mb-5">
                    {/* Quantity Pill Input */}
                    <div className="flex items-center border border-gray-300 rounded-2xl bg-white px-3 py-2.5 shadow-2xs shrink-0">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 text-slate-600 hover:text-slate-900 cursor-pointer font-bold"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-black text-slate-900 text-sm">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 text-slate-600 hover:text-slate-900 cursor-pointer font-bold"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-extrabold transition-all duration-300 shadow-lg cursor-pointer ${
                        added
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#0b4d3c] hover:bg-[#06382b] text-white shadow-emerald-900/20 hover:shadow-xl'
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="w-5 h-5 stroke-[3]" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4.5 h-4.5" />
                          <span>Add to Cart — ₹{(unitPrice * quantity).toLocaleString('en-IN')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Purchase Type Option Toggle (One-Time vs Subscribe) */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <button
                      onClick={() => setPurchaseType('one-time')}
                      className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        purchaseType === 'one-time'
                          ? 'border-[#02b3b0] bg-teal-50/80 font-extrabold text-[#02b3b0] shadow-2xs'
                          : 'border-gray-200 bg-white text-slate-700 hover:border-gray-300 font-semibold'
                      }`}
                    >
                      <div className="text-[11px] uppercase tracking-wider font-extrabold">One-time purchase</div>
                      <div className="text-sm font-black mt-0.5">₹{product.price.toLocaleString('en-IN')}</div>
                    </button>

                    <button
                      onClick={() => setPurchaseType('subscribe')}
                      className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        purchaseType === 'subscribe'
                          ? 'border-[#02b3b0] bg-teal-50/80 font-extrabold text-[#02b3b0] shadow-2xs'
                          : 'border-gray-200 bg-white text-slate-700 hover:border-gray-300 font-semibold'
                      }`}
                    >
                      <div className="text-[11px] uppercase tracking-wider font-extrabold">Subscribe & Save (5%)</div>
                      <div className="text-sm font-black mt-0.5">₹{Math.round(product.price * 0.95).toLocaleString('en-IN')}</div>
                    </button>
                  </div>

                  {/* Trust Authenticity Badge */}
                  <div className="bg-emerald-50/90 rounded-2xl p-3.5 border border-emerald-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                      <ShieldCheck className="w-4.5 h-4.5 text-emerald-700 shrink-0" />
                      <span>Authenticity Guaranteed — Direct from verified maker</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* ========================================== */}
          {/* SECTION 2: DYNAMIC IMPACT PROJECTIONS UI   */}
          {/* ========================================== */}
          <div className="glass-panel rounded-[32px] p-6 sm:p-10 md:p-12 mb-10 border border-white/90 shadow-2xl bg-white/85 backdrop-blur-xl text-center">
            
            {/* Top Tag Header */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-900 text-xs font-extrabold px-4 py-1.5 rounded-full mb-3 border border-emerald-300/80">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>IMPACT PROJECTIONS • POWERED BY RAYEVA AI</span>
            </div>

            {/* Main Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              Your impact with this <span className="text-[#02b3b0]">purchase.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium mb-8">
              Every purchase is driven by seller details and backed by verified benchmarks.
            </p>

            {/* Quantity Selector Bar */}
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6">
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                How many <strong className="text-[#02b3b0]">sets</strong> would you love to have ?
              </span>
              <div className="flex items-center gap-3 bg-slate-100 rounded-full px-3 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-slate-600 hover:text-slate-900 cursor-pointer text-base font-bold"
                >
                  -
                </button>
                <span className="font-extrabold text-slate-900 text-sm px-1">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-slate-600 hover:text-slate-900 cursor-pointer text-base font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Timeframe Toggle Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { id: 'per-purchase', label: `Per purchase (${quantity} set)` },
                { id: '1-year', label: `Over 1 year (${quantity * 4} sets)` },
                { id: '3-years', label: `Over 3 years (${quantity * 12} sets)` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setImpactTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    impactTab === tab.id
                      ? 'bg-[#02b3b0] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 4 Impact Metric Cards Grid (1x4 grid on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              {/* Card 1: Water Saved */}
              <div className="glass-panel rounded-3xl p-6 border border-teal-200/80 bg-emerald-50/40 backdrop-blur-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-extrabold text-teal-800 uppercase tracking-wider mb-3">
                    <span>WATER SAVED</span>
                    <Droplet className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">
                    {waterSaved} <span className="text-sm font-semibold text-slate-600">liters</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Water saved compared to conventional production methods
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-teal-200/60 bg-teal-100/60 rounded-xl p-2.5 text-[11px] font-bold text-teal-900">
                  ≈ {metrics.waterEquiv || 'liters water saved'}
                </div>
              </div>

              {/* Card 2: Plastic Waste Prevented */}
              <div className="glass-panel rounded-3xl p-6 border border-sky-200/80 bg-sky-50/40 backdrop-blur-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-extrabold text-sky-800 uppercase tracking-wider mb-3">
                    <span>PLASTIC WASTE PREVENTED</span>
                    <Leaf className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">
                    {plasticPrevented} <span className="text-sm font-semibold text-slate-600">kg</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Plastic waste prevented by using eco-friendly packaging
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-sky-200/60 bg-sky-100/60 rounded-xl p-2.5 text-[11px] font-bold text-sky-900">
                  ≈ {metrics.plasticEquiv || 'plastic bottles eliminated'}
                </div>
              </div>

              {/* Card 3: Carbon Emissions Avoided */}
              <div className="glass-panel rounded-3xl p-6 border border-amber-200/80 bg-amber-50/40 backdrop-blur-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-3">
                    <span>CARBON EMISSIONS AVOIDED</span>
                    <Box className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">
                    {carbonAvoided} <span className="text-sm font-semibold text-slate-600">kg CO₂</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Carbon emissions avoided through sustainable production practices
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-amber-200/60 bg-amber-100/60 rounded-xl p-2.5 text-[11px] font-bold text-amber-900">
                  ≈ {metrics.carbonEquiv || 'kg CO2 absorbed by crop'}
                </div>
              </div>

              {/* Card 4: Energy Saved */}
              <div className="glass-panel rounded-3xl p-6 border border-emerald-200/80 bg-emerald-50/40 backdrop-blur-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-3">
                    <span>ENERGY SAVED</span>
                    <Zap className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">
                    {energySaved} <span className="text-sm font-semibold text-slate-600">kWh</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Energy saved through efficient manufacturing processes
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-emerald-200/60 bg-emerald-100/60 rounded-xl p-2.5 text-[11px] font-bold text-emerald-900">
                  ≈ {metrics.energyEquiv || 'hours processing energy'}
                </div>
              </div>

            </div>

          </div>

          {/* ========================================== */}
          {/* SECTION 3: IMPACT BEYOND PURCHASE (MAKER) */}
          {/* ========================================== */}
          <div className="glass-panel rounded-[32px] p-6 sm:p-10 md:p-12 mb-10 border border-white/90 shadow-2xl bg-white/85 backdrop-blur-xl">
            
            {/* Section Tab Controls */}
            <div className="flex items-center gap-8 border-b border-gray-200 mb-8 pb-3">
              {[
                { id: 'why-better', label: "Why It's Better" },
                { id: 'materials', label: 'Materials & specs' },
                { id: 'care', label: 'Care & take-back' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`text-sm sm:text-base font-extrabold transition-all cursor-pointer relative pb-3 -mb-3.5 ${
                    activeTab === t.id
                      ? 'text-[#02b3b0] border-b-2 border-[#02b3b0]'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Active Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Story & 6 Vertical Stack Badges */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 tracking-wider uppercase">
                  <span>SOURCED RESPONSIBLY</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Impact beyond <span className="text-[#02b3b0]">purchase.</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {product.makerStory || product.description}
                </p>

                {/* 6 Vertical Stack Feature Badges */}
                <div className="flex flex-col gap-2.5 pt-2">
                  {(product.makerBadges || [
                    'Wildcrafted Himalayan seeds',
                    'Sub-30°C cold extraction',
                    'Zero artificial additives',
                    'Supports mountain farmers',
                    'UV Miron glass protection',
                    '100% Biodegradable waste',
                  ]).map((badge, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 bg-white/90 p-3 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all"
                    >
                      <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-emerald-700 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-800">{badge}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Large Photo Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="rounded-[28px] overflow-hidden shadow-2xl border border-white/90 max-w-md w-full aspect-[4/5] relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* ========================================== */}
          {/* SECTION 4: GOOD FOR YOU. GREATER FOR PLANET */}
          {/* ========================================== */}
          {/* <div className="relative rounded-[32px] overflow-hidden p-8 sm:p-12 shadow-2xl border border-white/90 bg-gradient-to-r from-[#eaf5ef] via-[#e2f2e9] to-[#d6ebd9] text-slate-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-900 tracking-wider uppercase">
                  <Sprout className="w-4 h-4 text-emerald-700" />
                  <span>A SMALL SEED. A BIGGER TOMORROW</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                  Good for you. Greater for <span className="text-[#02b3b0]">the planet.</span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-2xl">
                  Nutritious, sustainable and responsibly sourced — a choice that supports people, regenerates soil and builds a cleaner, greener future.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={product.image}
                    alt="Eco Harvest"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div> */}

        </main>
      </div>

    </div>
  );
}
