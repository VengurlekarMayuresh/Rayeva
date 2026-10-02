import React, { useState } from 'react';
import { Star, Leaf, Recycle, Heart, Globe, ShoppingBag, ArrowRight, Sparkles, Check } from 'lucide-react';

export default function StarterKitSection({ onAddToCart }) {
  const [added, setAdded] = useState(false);

  const kitProduct = {
    id: 'starter-kit-1',
    name: 'Rayeva Starter Kit: Begin Your Journey',
    price: 499.0,
    originalPrice: 650.0,
    rating: 4.9,
    reviews: 234,
    badge: '100% Sustainable',
    impact: 'Saves 15kg plastic per year',
    image: '/starter-kit.png',
    description: 'Curated starter kit containing everything you need to begin your sustainable lifestyle transformation.'
  };

  const handleAdd = () => {
    setAdded(true);
    if (onAddToCart) {
      onAddToCart(kitProduct);
    }
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <section className="w-full max-w-[1360px]  mx-auto px-4 md:px-8 py-2 sm:py-2 relative z-10">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 border border-white/80 shadow-2xl bg-white/70 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Product Image with Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative rounded-[28px] overflow-hidden border-2 border-teal-400/80 shadow-2xl bg-white group max-w-lg w-full">

              {/* Product Image */}
              <img
                src="/starter-kit.png"
                alt="Rayeva Starter Kit"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Top Left Discount Badge */}
              <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md border border-white/30">
                Save ₹150.0!
              </div>

              {/* Top Right Floating Sparkle Circle Badge */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg border-2 border-white">
                <Sparkles className="w-4 h-4 fill-white" />
              </div>

              {/* Bottom Left Floating Leaf Circle Badge */}
              <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white text-teal-600 flex items-center justify-center shadow-xl border-2 border-teal-500">
                <Leaf className="w-5 h-5 text-teal-600" />
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Product Title, Details & Add to Cart */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-5">

            {/* Main Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Rayeva: Begin Your <span className="text-teal-500 font-extrabold">Journey</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mt-3 max-w-xl">
                Our curated starter kit contains everything you need to begin your sustainable lifestyle transformation. Each product is carefully selected for maximum impact and ease of use.
              </p>
            </div>

            {/* Rating Stars Row */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600">
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                ))}
              </div>
              <span className="text-slate-700 font-bold ml-1">(4.9/5 from 234 reviews)</span>
            </div>

            {/* Price & Discount Row */}
            <div className="flex items-baseline gap-3 my-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-teal-500 tracking-tight">
                ₹499.0
              </span>
              <span className="text-base text-slate-400 line-through font-medium">
                ₹650.0
              </span>
              <span className="bg-rose-100 text-rose-600 text-xs font-extrabold px-3 py-1 rounded-full border border-rose-200">
                23% OFF
              </span>
            </div>

            {/* 2x2 Feature Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">100% Sustainable</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Recycle className="w-4 h-4 text-teal-600" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Zero Waste</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-rose-500" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Ethically Sourced</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-sky-600" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Planet Friendly</span>
              </div>
            </div>

            {/* Shop the Kit Action Button with Generous Padding */}
            <div className="pt-3">
              <button
                onClick={handleAdd}
                className={`inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl text-base font-extrabold transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer ${added
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#00b4d8] hover:bg-[#0096c7] text-white hover:-translate-y-0.5'
                  }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 stroke-[3]" />
                    <span>Starter Kit Added!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Shop the Kit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
