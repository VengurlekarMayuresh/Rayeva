import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Leaf, 
  ShoppingBag, 
  Utensils, 
  Flower2, 
  Recycle, 
  Gift, 
  LayoutGrid 
} from 'lucide-react';
import ViewAllCategoriesModal from './ViewAllCategoriesModal';

export default function CategoryNavigation({ onSelectCategory, activeCategoryId }) {
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const navigate = useNavigate();

  const mainCategories = [
    { id: 'home-living', label: 'Home & Living', icon: Leaf },
    { id: 'fashion-kids', label: 'Fashion & Accessories', icon: ShoppingBag },
    { id: 'food-wellness', label: 'Food & Wellness', icon: Utensils },
    { id: 'beauty-care', label: 'Personal Care', icon: Flower2 },
    { id: 'zero-waste', label: 'Zero Waste', icon: Recycle },
    { id: 'gifting', label: 'Conscious Gifting', icon: Gift },
    { id: 'view-all', label: 'View All', icon: LayoutGrid, isViewAll: true },
  ];

  const handleCategoryClick = (cat) => {
    if (cat.isViewAll) {
      setIsViewAllOpen(true);
    } else {
      if (onSelectCategory) {
        onSelectCategory(cat.id);
      }
      navigate(`/category/${cat.id}`);
    }
  };

  return (
    <>
      <div className="relative z-30 w-full max-w-[1240px] mx-auto px-3 pb-2.5 sm:pb-3 md:pb-4 shrink-0">
        <div className="glass-category-bar rounded-full py-1.5 px-3 sm:px-4 md:px-5 shadow-lg flex items-center justify-between overflow-x-auto no-scrollbar scroll-smooth">
          
          <div className="flex items-center gap-1 sm:gap-2 w-full justify-between min-w-max">
            {mainCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              const isActive = activeCategoryId === cat.id;

              return (
                <React.Fragment key={cat.id}>
                  {/* Category Button */}
                  <button
                    onClick={() => handleCategoryClick(cat)}
                    className={`flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full transition-all duration-200 cursor-pointer group whitespace-nowrap ${
                      isActive
                        ? 'bg-emerald-50/90 text-emerald-950 font-bold'
                        : 'text-gray-700 font-medium hover:text-emerald-800 hover:bg-white/60'
                    }`}
                  >
                    {/* Icon Container */}
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#7fe7c4] text-[#065f36] shadow-2xs scale-105'
                        : cat.isViewAll
                          ? 'bg-emerald-100/80 text-emerald-900 group-hover:bg-emerald-600 group-hover:text-white'
                          : 'bg-transparent text-gray-700 group-hover:bg-emerald-100/60 group-hover:text-emerald-800'
                    }`}>
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                    </div>

                    {/* Label */}
                    <span className="text-xs sm:text-[13px] font-bold tracking-tight">
                      {cat.label}
                    </span>
                  </button>

                  {/* Vertical Divider */}
                  {idx < mainCategories.length - 1 && (
                    <div className="h-4 w-[1px] bg-gray-300/60 shrink-0 hidden md:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </div>

      {/* TRANSLUCENT VIEW ALL CATEGORIES MODAL */}
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
