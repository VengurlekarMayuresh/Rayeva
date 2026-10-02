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
  Sparkles
} from 'lucide-react';
import RayevaNavbar from '../components/RayevaNavbar';
import CategoryNavigation from '../components/CategoryNavigation';
import { categoriesData, findProductById } from '../data/categoriesData';

export default function ProductDetailPage({ onAddToCart }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find dynamic product data
  const product = findProductById(productId);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product && product.image) {
      setSelectedImage(product.image);
    }
  }, [productId]);

  // State management for interactive controls
  const [selectedImage, setSelectedImage] = useState(product.image || product.gallery[0]);
  const [purchaseType, setPurchaseType] = useState('one-time'); // 'one-time' or 'subscribe'
  const [quantity, setQuantity] = useState(1);
  const [impactTab, setImpactTab] = useState('per-purchase'); // 'per-purchase', '1-year', '3-years'
  const [activeTab, setActiveTab] = useState('why-better'); // 'why-better', 'materials', 'care'
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  // Gallery thumbnails
  const galleryImages = product.gallery || [product.image, product.image];

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
    waterSavedPerUnit: 12.0,
    plasticPreventedPerUnit: 0.5,
    carbonAvoidedPerUnit: 1.2,
    energySavedPerUnit: 5.0,
    waterEquiv: 'liters water saved',
    plasticEquiv: 'plastic bottles saved',
    carbonEquiv: 'miles not driven',
    energyEquiv: 'hours energy saved'
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

  return (
    <div className="min-h-screen w-full bg-slate-900 text-gray-900 flex flex-col justify-between selection:bg-emerald-500 selection:text-white relative">
      
      {/* BACKGROUND MP4 VIDEO & LUMINOUS OVERLAY */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/rayeva-hero.mp4" type="video/mp4" />
      </video>

      {/* LUMINOUS SOFT BOTANICAL GREENISH TRANSLUCENT FILM OVERLAY */}
      <div className="fixed inset-0 bg-emerald-950/15 backdrop-blur-xl pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#e6f2ec]/80 via-[#edf6f1]/75 to-[#e6f2ec]/80 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Navbar */}
        <RayevaNavbar />

        {/* Main Product Container */}
        <main className="w-full max-w-[1360px] mx-auto px-4 md:px-8 pt-4 sm:pt-6 pb-20 flex-1">
          
          {/* Breadcrumbs Navigation Bar */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 flex-wrap">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-1.5 glass-panel px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 hover:text-emerald-800 hover:bg-white transition-all cursor-pointer border border-white/80 shadow-2xs mr-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="hover:text-emerald-700 cursor-pointer">Shop</span>
              <span className="text-gray-400">›</span>
              <span className="text-gray-700 font-bold">{product.categoryPath}</span>
              <span className="text-gray-400">›</span>
              <span className="text-emerald-900 font-bold truncate max-w-[220px] sm:max-w-xs">
                {product.name}
              </span>
            </div>
          </div>

          {/* SECTION 1: MAIN PRODUCT HEADER & GALLERY GRID */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 mb-10 border border-white/80 shadow-2xl bg-white/80 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* LEFT COLUMN: Main Gallery & Thumbnails */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Main Product Card */}
                <div className="relative rounded-3xl overflow-hidden border border-white/90 shadow-xl bg-white p-6 aspect-square flex items-center justify-center group">
                  
                  {/* Verified Piece Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-[#02b3b0] text-white text-xs font-extrabold px-3 py-1.5 rounded-md shadow-md">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{product.badge || 'VERIFIED PIECE'}</span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-gray-600 hover:text-rose-500 transition-colors cursor-pointer"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Main Product Image */}
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Eco Feature Circular Badges on Main Image */}
                  <div className="absolute right-4 top-16 flex flex-col gap-2 z-10">
                    {(product.ecoBadges || ['NON-TOXIC', 'LOW EMISSION', 'CARBON NEUTRAL', 'PARTIALLY PLASTIC FREE']).map((b, i) => {
                      const bgColors = ['bg-teal-700', 'bg-emerald-700', 'bg-cyan-700', 'bg-sky-700'];
                      return (
                        <div key={i} className={`w-9 h-9 rounded-full ${bgColors[i % 4]} text-white text-[8px] font-black leading-tight flex items-center justify-center text-center p-1 shadow-md border border-white/40`}>
                          {b.split(' ')[0]}
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Thumbnails Row */}
                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
                  {galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 p-1 bg-white shrink-0 transition-all cursor-pointer ${
                        selectedImage === img
                          ? 'border-[#02b3b0] shadow-md scale-105'
                          : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>

              </div>

              {/* RIGHT COLUMN: Product Details & Purchase Panel */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                
                <div>
                  {/* Category Tagline */}
                  <div className="text-xs font-bold text-[#02b3b0] tracking-widest uppercase mb-2">
                    {product.categoryPath.toUpperCase()}
                  </div>

                  {/* Main Product Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                    {product.name}
                  </h1>

                  {/* Detailed Description Bullet List */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed mb-6">
                    {product.bulletPoints ? (
                      product.bulletPoints.map((pt, idx) => (
                        <p key={idx}>
                          <strong className="font-bold text-slate-900">• </strong>{pt}
                        </p>
                      ))
                    ) : (
                      <p>{product.description}</p>
                    )}
                  </div>

                  {/* Ratings */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-900">{product.rating || 4.9}</span>
                    <span className="text-xs font-bold text-gray-500">({product.reviews || 120} reviews)</span>
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                      ₹{unitPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">inclusive of all taxes</span>
                    {originalPrice > unitPrice && (
                      <span className="text-sm text-gray-400 line-through font-medium ml-2">
                        ₹{originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    {discountPercent > 0 && (
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-extrabold px-3 py-1 rounded-md border border-cyan-300">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* Purchase Type Options Toggle */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                      onClick={() => setPurchaseType('one-time')}
                      className={`p-3.5 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        purchaseType === 'one-time'
                          ? 'border-[#02b3b0] bg-teal-50/80 font-bold text-[#02b3b0] shadow-sm'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 font-semibold'
                      }`}
                    >
                      <div className="text-xs uppercase tracking-wider font-extrabold">ONE-TIME</div>
                      <div className="text-base font-black mt-0.5">₹{product.price.toLocaleString('en-IN')}</div>
                    </button>

                    <button
                      onClick={() => setPurchaseType('subscribe')}
                      className={`p-3.5 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        purchaseType === 'subscribe'
                          ? 'border-[#02b3b0] bg-teal-50/80 font-bold text-[#02b3b0] shadow-sm'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 font-semibold'
                      }`}
                    >
                      <div className="text-xs uppercase tracking-wider font-extrabold">SUBSCRIBE (SAVE 5%)</div>
                      <div className="text-base font-black mt-0.5">₹{Math.round(product.price * 0.95).toLocaleString('en-IN')}</div>
                    </button>
                  </div>

                  {/* Quantity Counter & Add to Cart Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center border border-gray-300 rounded-2xl bg-white px-3 py-2 shadow-2xs">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 text-gray-600 hover:text-gray-900 cursor-pointer"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-extrabold text-slate-900 text-base">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 text-gray-600 hover:text-gray-900 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-base font-extrabold transition-all duration-300 shadow-lg cursor-pointer ${
                        added
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#02b3b0] hover:bg-[#009da0] text-white shadow-teal-500/30 hover:shadow-xl'
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="w-5 h-5 stroke-[3]" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-5 h-5" />
                          <span>Add to Cart — ₹{(unitPrice * quantity).toLocaleString('en-IN')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Maker Guarantee Box */}
                  <div className="bg-teal-50/90 rounded-2xl p-4 border border-teal-200/80 mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-xs font-bold text-teal-900">
                      <ShieldCheck className="w-5 h-5 text-teal-600" />
                      <span>Authenticity Guaranteed — Direct from verified maker</span>
                    </div>
                  </div>

                  {/* Delivery & Service Badges */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 text-center text-[11px] font-bold text-gray-600">
                    <div className="flex flex-col items-center gap-1">
                      <Truck className="w-5 h-5 text-teal-600" />
                      <span>DELIVERY<br /><span className="text-gray-400 font-normal">3-7 DAYS</span></span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-x border-gray-200 px-2">
                      <RotateCcw className="w-5 h-5 text-teal-600" />
                      <span>EXCHANGE<br /><span className="text-gray-400 font-normal">WITHIN 7 DAYS</span></span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Recycle className="w-5 h-5 text-gray-400" />
                      <span>CIRCULAR IMPACT<br /><span className="text-gray-400 font-normal">100% RECYCLABLE</span></span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* SECTION 2: DYNAMIC INTERACTIVE IMPACT PROJECTIONS CALCULATOR */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 mb-10 border border-white/80 shadow-2xl bg-white/85 backdrop-blur-xl text-center">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-900 text-xs font-extrabold px-4 py-1.5 rounded-full mb-3 border border-teal-300">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>IMPACT PROJECTIONS · POWERED BY RAYEVA AI</span>
            </div>

            {/* Main Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
              Your impact with this <span className="text-[#02b3b0]">purchase.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium mb-8">
              Every projection is driven by seller details and backed by verified benchmarks.
            </p>

            {/* Quantity Selector Bar */}
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6">
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                How many <strong className="text-[#02b3b0]">sets</strong> would you love to have ?
              </span>
              <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg font-bold"
                >
                  -
                </button>
                <span className="font-extrabold text-slate-900 text-sm px-1">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Duration Timeframe Toggle Tabs */}
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
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 4 Calculated Impact Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              {/* Card 1: Water Saved */}
              <div className="glass-panel rounded-3xl p-6 border border-teal-200 bg-teal-50/50 backdrop-blur-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
                    <span>WATER SAVED</span>
                    <Droplet className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">
                    {waterSaved} <span className="text-sm font-normal text-slate-600">liters</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Water saved compared to conventional production methods
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-teal-200/60 bg-teal-100/60 rounded-xl p-2.5 text-[11px] font-bold text-teal-900">
                  ≈ {metrics.waterEquiv || 'liters water saved'}
                </div>
              </div>

              {/* Card 2: Plastic Waste Prevented */}
              <div className="glass-panel rounded-3xl p-6 border border-sky-200 bg-sky-50/50 backdrop-blur-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-sky-800 uppercase tracking-wider mb-2">
                    <span>PLASTIC WASTE PREVENTED</span>
                    <Leaf className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">
                    {plasticPrevented} <span className="text-sm font-normal text-slate-600">kg</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Plastic waste prevented by using eco-friendly packaging
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-sky-200/60 bg-sky-100/60 rounded-xl p-2.5 text-[11px] font-bold text-sky-900">
                  ≈ {metrics.plasticEquiv || 'plastic bottles saved'}
                </div>
              </div>

              {/* Card 3: Carbon Emissions Avoided */}
              <div className="glass-panel rounded-3xl p-6 border border-amber-200 bg-amber-50/50 backdrop-blur-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                    <span>CARBON EMISSIONS AVOIDED</span>
                    <Box className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">
                    {carbonAvoided} <span className="text-sm font-normal text-slate-600">kg CO₂</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Carbon emissions avoided through sustainable production practices
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-200/60 bg-amber-100/60 rounded-xl p-2.5 text-[11px] font-bold text-amber-900">
                  ≈ {metrics.carbonEquiv || 'miles not driven'}
                </div>
              </div>

              {/* Card 4: Energy Saved */}
              <div className="glass-panel rounded-3xl p-6 border border-emerald-200 bg-emerald-50/50 backdrop-blur-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                    <span>ENERGY SAVED</span>
                    <Zap className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">
                    {energySaved} <span className="text-sm font-normal text-slate-600">kWh</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Energy saved through efficient manufacturing processes
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/60 bg-emerald-100/60 rounded-xl p-2.5 text-[11px] font-bold text-emerald-900">
                  ≈ {metrics.energyEquiv || 'hours energy saved'}
                </div>
              </div>

            </div>

          </div>

          {/* SECTION 3: DEEP SPECS & MAKER STORY */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 mb-10 border border-white/80 shadow-2xl bg-white/85 backdrop-blur-xl">
            
            {/* Top Tab Controls */}
            <div className="flex items-center gap-8 border-b border-gray-200 mb-8 pb-3">
              {[
                { id: 'why-better', label: "Why it's Better" },
                { id: 'materials', label: 'Materials & specs' },
                { id: 'care', label: 'Care & take-back' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`text-sm sm:text-base font-bold transition-all cursor-pointer relative pb-3 -mb-3.5 ${
                    activeTab === t.id
                      ? 'text-[#02b3b0] border-b-2 border-[#02b3b0]'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Editorial Content */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Impact beyond <span className="text-[#02b3b0]">purchase.</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {product.makerStory || product.description}
                </p>

                {/* Maker Source Tag */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                    <span>Directly from the source</span>
                    <Leaf className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-xs font-semibold text-gray-500 block mb-4">
                    What the maker wants you to know
                  </span>

                  {/* 6 Attribute Grid Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
                    {(product.makerBadges || [
                      'Eco-conscious material choice',
                      'Offsets carbon emissions',
                      'Supports sustainable forestry',
                      'Reduces environmental footprint',
                      'No animal testing',
                      'Eco-conscious materials',
                    ]).map((badge, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                        <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-teal-600 stroke-[3]" />
                        </div>
                        <span>{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: High Quality Photo Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/90 max-w-md w-full aspect-4/3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>

        </main>
      </div>

      {/* Floating Category Navigation Bar */}
      <div className="relative z-20">
        <CategoryNavigation />
      </div>

    </div>
  );
}
