import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Leaf, 
  Utensils, 
  Flower2, 
  Recycle, 
  Shirt, 
  Home, 
  Gift, 
  ArrowRight 
} from 'lucide-react';

const CATEGORIES_MODAL_DATA = [
  {
    id: 'food-wellness',
    title: 'Food & Wellness',
    description: 'Organic, ethically sourced & regenerative nutrition for a healthier tomorrow.',
    itemCount: '4 Items',
    icon: Utensils,
    image: '/viewUI/food and wellness.png',
    fallbackImage: '/viewUI/food.png',
  },
  {
    id: 'beauty-care',
    title: 'Beauty & Personal Care',
    description: 'Clean, cruelty-free & zero-waste personal care essentials.',
    itemCount: '3 Items',
    icon: Flower2,
    image: '/viewUI/beauty and personal care.png',
    fallbackImage: '/viewUI/beauty.png',
  },
  {
    id: 'zero-waste',
    title: 'Zero Waste Everyday Essentials',
    description: 'Eliminate single-use plastic from daily life.',
    itemCount: '3 Items',
    icon: Recycle,
    image: '/viewUI/zero waste everday ess.png',
    fallbackImage: '/viewUI/zerowaste.png',
  },
  {
    id: 'fashion-kids',
    title: 'Fashion, Accessories & Kids',
    description: 'Ethical apparel, upcycled accessories & sustainable wear for all ages.',
    itemCount: '2 Items',
    icon: Shirt,
    image: '/viewUI/fashion and acc.png',
    fallbackImage: '/viewUI/fashion.png',
  },
  {
    id: 'home-living',
    title: 'Home & Living',
    description: 'Sustainable home decor, kitchenware & eco-friendly living essentials.',
    itemCount: '2 Items',
    icon: Home,
    image: '/viewUI/home and living.png',
    fallbackImage: '/viewUI/home.png',
  },
  {
    id: 'gifting',
    title: 'Conscious Gifting',
    description: 'Meaningful eco gift boxes & corporate solutions.',
    itemCount: '2 Items',
    icon: Gift,
    image: '/viewUI/gift.png',
    fallbackImage: '/viewUI/gifts.png',
  },
];

export default function ViewAllCategoriesModal({ isOpen, onClose, onSelectCategory }) {
  const [searchQuery, setSearchQuery] = useState('');

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

  if (!isOpen) return null;

  const filteredCategories = CATEGORIES_MODAL_DATA.filter((cat) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      cat.title.toLowerCase().includes(q) ||
      cat.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/60 backdrop-blur-md animate-fadeIn">
      
      {/* Backdrop overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card Container */}
      <div className="relative z-10 w-full max-w-6xl bg-[#fbfbf9] rounded-[28px] sm:rounded-[36px] shadow-2xl border border-white/90 overflow-hidden transform transition-all duration-300 max-h-[92vh] flex flex-col">

        {/* ── BOTANICAL CORNER LEAF ACCENT (TOP RIGHT) ── */}
        <div className="absolute top-0 right-0 w-36 sm:w-52 h-36 sm:h-52 pointer-events-none opacity-40 z-0">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-800">
            <path d="M200 0C170 30 140 80 150 130C120 100 110 50 140 10C170 -30 200 0 200 0Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M190 20C150 40 120 90 130 140C100 110 90 70 120 30C150 0 190 20 190 20Z" fill="currentColor" fillOpacity="0.25" />
            <path d="M160 5C130 30 100 80 110 120C90 90 80 60 100 25C125 0 160 5 160 5Z" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        {/* ── BOTANICAL CORNER LEAF ACCENT (BOTTOM LEFT) ── */}
        <div className="absolute bottom-0 left-0 w-32 sm:w-44 h-32 sm:h-44 pointer-events-none opacity-30 z-0 rotate-180">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-800">
            <path d="M200 0C170 30 140 80 150 130C120 100 110 50 140 10C170 -30 200 0 200 0Z" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>

        {/* ── MODAL HEADER ── */}
        <div className="relative z-10 px-5 sm:px-8 md:px-10 pt-6 sm:pt-8 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
          
          {/* Header Titles */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-900 uppercase tracking-[0.16em] mb-1">
              <Leaf className="w-3.5 h-3.5 text-emerald-700" />
              <span>RAYEVA CONSCIOUS ECOSYSTEM</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold font-serif text-gray-900 tracking-tight flex items-center gap-2">
              <span>Explore All Eco Categories</span>
              <span className="text-emerald-700 text-2xl font-normal inline-block">🌿</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
              Sustainable choices for a healthier you and a greener planet
            </p>
          </div>

          {/* Right Header: Search Bar & Close Button */}
          <div className="flex items-center gap-3">
            
            {/* Pill Search Input */}
            <div className="relative w-full sm:w-60 md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search categories..."
                className="w-full bg-[#f6f2ec] border border-[#ece4d8] rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/40 shadow-2xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Circular Close Button (Top Right) */}
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 border border-gray-200/80 shadow-xs flex items-center justify-center transition-all cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>

          </div>

        </div>

        {/* ── CATEGORY CARDS GRID (2 ROWS × 3 COLUMNS MATCHING SAMPLE UI) ── */}
        <div className="relative z-10 px-5 sm:px-8 md:px-10 pb-6 sm:pb-8 pt-2 overflow-y-auto flex-1">
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {filteredCategories.map((cat) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={cat.id}
                    onClick={() => {
                      if (onSelectCategory) {
                        onSelectCategory(cat.id);
                      }
                      onClose();
                    }}
                    className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between h-[210px] sm:h-[230px] md:h-[240px] bg-slate-900 border border-black/5"
                  >
                    {/* Photographic Background Image */}
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 z-0"
                      onError={(e) => {
                        e.target.src = cat.fallbackImage;
                      }}
                    />

                    {/* Dark Scrim Gradient for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent z-10 pointer-events-none" />

                    {/* ── CARD TOP BAR: Icon on Left | Item Count on Right ── */}
                    <div className="relative z-20 flex items-center justify-between p-3.5 sm:p-4">
                      {/* White circular pill for icon */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md text-emerald-800 border border-white/80 flex items-center justify-center shadow-md group-hover:bg-[#11472e] group-hover:text-white transition-all">
                        <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
                      </div>

                      {/* Item count badge pill */}
                      <span className="text-[11px] font-bold text-gray-800 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-xs border border-white/80">
                        {cat.itemCount}
                      </span>
                    </div>

                    {/* ── CARD BOTTOM BAR: Title & Subtitle on Left | Circular Arrow on Right ── */}
                    <div className="relative z-20 flex items-end justify-between gap-3 p-3.5 sm:p-4 mt-auto">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-bold font-serif text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-emerald-300 transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-white/85 line-clamp-2 mt-0.5 leading-snug font-normal">
                          {cat.description}
                        </p>
                      </div>

                      {/* Circular Arrow Button */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-gray-800 flex items-center justify-center shadow-md group-hover:bg-[#11472e] group-hover:text-white transition-all shrink-0">
                        <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Leaf className="w-10 h-10 text-emerald-600 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold">No categories match "{searchQuery}"</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
