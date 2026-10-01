import React, { useState } from 'react';
import { Leaf, ShoppingBag, Utensils, Flower2, Laptop, Gift, LayoutGrid } from 'lucide-react';

export default function CategoryNavigation({ onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState('Home & Living');

  const categories = [
    { id: 'home', label: 'Home & Living', icon: Leaf },
    { id: 'fashion', label: 'Fashion', icon: ShoppingBag },
    { id: 'food', label: 'Food & Beverages', icon: Utensils },
    { id: 'care', label: 'Personal Care', icon: Flower2 },
    { id: 'office', label: 'Office & Workspace', icon: Laptop },
    { id: 'gifts', label: 'Gifts', icon: Gift },
    { id: 'all', label: 'View All', icon: LayoutGrid },
  ];

  const handleCategoryClick = (label) => {
    setActiveCategory(label);
    if (onSelectCategory) {
      onSelectCategory(label);
    }
  };

  return (
    <div className="relative z-30 w-full max-w-[1280px] mx-auto px-4 pb-4 md:pb-6">
      <div className="glass-category-bar rounded-full py-2 px-3 sm:px-4 md:px-6 shadow-xl flex items-center justify-between overflow-x-auto no-scrollbar scroll-smooth">
        
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 w-full justify-between min-w-max">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.label;

            return (
              <React.Fragment key={cat.id}>
                {/* Category Button */}
                <button
                  onClick={() => handleCategoryClick(cat.label)}
                  className={`flex items-center gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-200 cursor-pointer group whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-50/80 text-emerald-950 font-bold'
                      : 'text-gray-700 font-medium hover:text-emerald-800 hover:bg-white/60'
                  }`}
                >
                  {/* Icon Container - Highlighted Mint Green for active item (or first item by default) */}
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-[#7fe7c4] text-[#065f36] shadow-sm scale-105'
                      : 'bg-transparent text-gray-700 group-hover:bg-emerald-100/60 group-hover:text-emerald-800'
                  }`}>
                    <IconComponent className="w-4 h-4 md:w-4.5 md:h-4.5 stroke-[2]" />
                  </div>

                  {/* Label */}
                  <span className="text-xs sm:text-sm font-semibold tracking-tight">
                    {cat.label}
                  </span>
                </button>

                {/* Vertical Divider */}
                {idx < categories.length - 1 && (
                  <div className="h-5 w-[1px] bg-gray-300/60 shrink-0 hidden md:block" />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </div>
  );
}
