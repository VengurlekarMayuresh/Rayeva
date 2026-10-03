import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingBag, Check, ShieldCheck, Leaf } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const handleCardClick = () => {
    navigate(`/product/${product.id || 'impact-water'}`);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setAdded(true);
    if (onAddToCart) {
      onAddToCart(product);
    }
    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div
      onClick={handleCardClick}
      className="group glass-panel rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between border border-white/90 hover:border-emerald-400 shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/85 backdrop-blur-xl cursor-pointer"
    >
      
      {/* Product Image Container */}
      <div className="relative w-full aspect-square sm:aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Eco Badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-emerald-900/90 backdrop-blur-md text-emerald-100 text-[9px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm flex items-center gap-1 border border-emerald-700/50 max-w-[85%] truncate">
          <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">{product.badge}</span>
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-rose-600 text-white text-[9px] sm:text-[11px] font-extrabold px-1.5 py-0.5 sm:px-2.5 rounded-full shadow-sm">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Product Details Body */}
      <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between gap-1.5 sm:gap-3">
        <div>
          {/* Sustainability Impact Metric Tag */}
          <div className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md mb-1 sm:mb-2 max-w-full">
            <Leaf className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 shrink-0" />
            <span className="truncate">{product.impact}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">
            <div className="flex items-center text-amber-500">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            </div>
            <span className="font-bold text-gray-900">{product.rating}</span>
            <span className="hidden min-[400px]:inline">({product.reviews})</span>
          </div>

          {/* Product Title */}
          <h3 onClick={handleCardClick} className="text-xs sm:text-base font-bold text-gray-900 leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2 cursor-pointer">
            {product.name}
          </h3>

          {/* Product Description - visible on larger screens */}
          <p className="hidden sm:block text-xs text-gray-600 font-normal leading-relaxed mt-1.5 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="pt-2 sm:pt-3 border-t border-gray-100 flex items-center justify-between mt-auto gap-1">
          <div className="min-w-0">
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="text-xs min-[380px]:text-sm sm:text-lg font-extrabold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-[10px] sm:text-xs text-gray-400 line-through font-medium">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-700 font-semibold hidden min-[420px]:block truncate">
              Free Eco Shipping
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-1 p-2 sm:px-4 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm shrink-0 ${
              added
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md'
            }`}
            title="Add to Cart"
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add to Cart</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
}
