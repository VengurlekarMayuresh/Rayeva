import React, { useEffect } from 'react';
import { 
  X, 
  Utensils, 
  Flower2, 
  Recycle, 
  ShoppingBag, 
  Leaf, 
  Gift, 
  Zap, 
  Box, 
  Layers, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import { categoriesData } from '../data/categoriesData';

const iconMap = {
  Utensils,
  Flower2,
  Recycle,
  ShoppingBag,
  Leaf,
  Gift,
  Zap,
  Box,
  Layers,
};

export default function ViewAllCategoriesModal({ isOpen, onClose, onSelectCategory }) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      
      {/* Backdrop Overlay Click to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Center Translucent Glass Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden transform transition-all duration-300 max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200/60 bg-white/60 backdrop-blur-md shrink-0">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Rayeva Conscious Ecosystem</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              Explore All Eco Categories
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Editorial Grid of Categories with High Quality Imagery */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categoriesData.map((cat) => {
            const IconComp = iconMap[cat.iconName] || Leaf;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  onClose();
                }}
                className="group relative rounded-3xl overflow-hidden min-h-[170px] sm:min-h-[190px] border border-white/70 hover:border-emerald-400 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-4 sm:p-5"
              >
                {/* Background Image with Zoom Effect */}
                <img
                  src={cat.coverImage}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 z-0"
                />

                {/* Editorial Botanical Greenish & Earthy Brownish Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062016]/95 via-[#18291f]/65 to-[#281b12]/30 group-hover:from-[#041911] group-hover:via-[#14251c]/80 transition-colors z-0" />

                {/* Top Header Controls over Image */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-emerald-300 border border-white/30 flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <IconComp className="w-4.5 h-4.5 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-bold text-white bg-emerald-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/40 shadow-xs">
                    {cat.products.length} Items
                  </span>
                </div>

                {/* Bottom Text Content over Image */}
                <div className="relative z-10 pt-4">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors leading-snug">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-300 font-medium line-clamp-1 mt-0.5">
                        {cat.tagline}
                      </p>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-emerald-500 flex items-center justify-center text-white shrink-0 transition-all border border-white/30 group-hover:border-emerald-400">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-gray-50/90 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-600 font-medium shrink-0">
          <span>Select any category to browse verified products</span>
          <span className="text-emerald-800 font-bold">100% Eco Verified</span>
        </div>

      </div>
    </div>
  );
}
