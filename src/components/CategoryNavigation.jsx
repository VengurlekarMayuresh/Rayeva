import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ViewAllCategoriesModal from './ViewAllCategoriesModal';

export default function CategoryNavigation({ onSelectCategory }) {
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const navigate = useNavigate();

  // 6 Categories matching the sample UI exactly
  const categories = [
    {
      id: 'home-living',
      label: 'Home & Living',
      image: '/viewUI/home and living.png',
    },
    {
      id: 'beauty-care',
      label: 'Personal Care',
      image: '/viewUI/beauty and personal care.png',
    },
    {
      id: 'food-wellness',
      label: 'Kitchen & Dining',
      image: '/viewUI/food and wellness.png',
    },
    {
      id: 'fashion-kids',
      label: 'Fashion & Accessories',
      image: '/viewUI/fashion and acc.png',
    },
    {
      id: 'gifting',
      label: 'Eco Gifts',
      image: '/viewUI/gift.png',
    },
    {
      id: 'zero-waste',
      label: 'Stationery',
      image: '/viewUI/zero waste everday ess.png',
    },
  ];

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    navigate(`/category/${catId}`);
  };

  return (
    <>
      <section className="w-full bg-transparent py-4 sm:py-6 px-3 sm:px-6 md:px-12">
        <div className="w-full max-w-[1440px] mx-auto">
          
          {/* Header Row: Title on Left | View All on Right */}
          <div className="flex items-center justify-between mb-3.5 sm:mb-5">
            <h2 className="text-lg sm:text-2xl font-bold font-serif text-gray-900 tracking-tight">
              Shop by Category
            </h2>

            <button
              onClick={() => setIsViewAllOpen(true)}
              className="group flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 hover:text-emerald-900 transition-colors cursor-pointer"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-gray-800 group-hover:text-emerald-900" />
            </button>
          </div>

          {/* 6 Category Cards Grid - Optimized for < 500px */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 min-[380px]:gap-2.5 sm:gap-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="group relative bg-white/85 hover:bg-white backdrop-blur-md rounded-xl sm:rounded-2xl p-2 min-[380px]:p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-lg cursor-pointer border border-white/80 hover:border-emerald-500/50"
              >
                {/* Category Thumbnail Image */}
                <div className="w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-white shrink-0">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Category Label + Arrow Button */}
                <div className="flex-1 min-w-0 flex flex-col justify-center items-start gap-1">
                  <span className="text-[11px] min-[380px]:text-xs sm:text-sm font-bold text-gray-900 group-hover:text-emerald-950 transition-colors line-clamp-2 leading-tight">
                    {cat.label}
                  </span>
                  <div className="w-5 h-5 min-[380px]:w-6 min-[380px]:h-6 rounded-full bg-white shadow-2xs flex items-center justify-center text-gray-700 group-hover:bg-[#11472e] group-hover:text-white transition-all shrink-0">
                    <ArrowRight className="w-3 h-3 stroke-[2.2]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TRANSLUCENT VIEW ALL CATEGORIES MODAL (Preserved with full UI) */}
      <ViewAllCategoriesModal
        isOpen={isViewAllOpen}
        onClose={() => setIsViewAllOpen(false)}
        onSelectCategory={(catId) => {
          if (onSelectCategory) {
            onSelectCategory(catId);
          }
          navigate(`/category/${catId}`);
        }}
      />
    </>
  );
}
