import React, { useState } from 'react';
import { Star, ShoppingBag, Check, ShieldCheck, Leaf } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
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
    <div className="group glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-white/90 hover:border-emerald-400 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-xl">
      
      {/* Product Image Container */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Eco Badge */}
        <div className="absolute top-3 left-3 bg-emerald-900/90 backdrop-blur-md text-emerald-100 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1 border border-emerald-700/50">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{product.badge}</span>
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-rose-600 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Product Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-3">
        <div>
          {/* Sustainability Impact Metric Tag */}
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-2">
            <Leaf className="w-3 h-3 text-emerald-600 shrink-0" />
            <span className="truncate">{product.impact}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-bold text-gray-900">{product.rating}</span>
            <span>({product.reviews} reviews)</span>
          </div>

          {/* Product Title */}
          <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-xs text-gray-600 font-normal leading-relaxed mt-1.5 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through font-medium">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold block">
              Free Eco Shipping
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
              added
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
}
