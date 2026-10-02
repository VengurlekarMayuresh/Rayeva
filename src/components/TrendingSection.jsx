import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Flame, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';
import ProductCard from './ProductCard';
import { categoriesData } from '../data/categoriesData';

export default function TrendingSection({ onAddToCart }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  // Gather trending products across categories
  const allTrendingProducts = categoriesData.flatMap(cat => cat.products);

  // Filter products based on selected tab
  let displayedProducts = allTrendingProducts;
  if (activeTab === 'best-sellers') {
    displayedProducts = allTrendingProducts.filter(p => p.rating >= 4.9);
  } else if (activeTab === 'zero-waste') {
    displayedProducts = allTrendingProducts.filter(p => p.badge.toLowerCase().includes('zero') || p.badge.toLowerCase().includes('gots'));
  } else if (activeTab === 'clean-beauty') {
    displayedProducts = allTrendingProducts.filter(p => p.badge.toLowerCase().includes('glass') || p.badge.toLowerCase().includes('organic'));
  }

  // Limit to top 8 items for a balanced 4-column layout display
  const featuredTrending = displayedProducts.slice(0, 8);

  return (
    <section id="trending-section" className="w-full max-w-[1360px] mx-auto px-4 md:px-8 py-4 sm:py-15 relative z-10 scroll-mt-6">

      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-5">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md text-amber-800 text-xs font-extrabold px-3.5 py-1.5 rounded-full mb-3 border border-amber-500/20 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>CURATED ECO SELECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Trending Eco Essentials
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed mt-2">
            Explore our highest-rated sustainable products, ethically crafted and verified for zero microplastics and minimal carbon footprint.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: 'all', label: 'All Trending' },
            { id: 'best-sellers', label: '★ Best Sellers' },
            { id: 'zero-waste', label: '🌱 Zero Waste' },
            { id: 'clean-beauty', label: '✨ Clean Care' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === tab.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white/80 hover:bg-white text-gray-800 hover:text-emerald-900 border border-white/80 shadow-2xs'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TRENDING PRODUCT CARDS GRID (4-COLUMN LAYOUT) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {featuredTrending.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* FOOTER CTA BAR */}
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate('/shop')}
          className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
        >
          <span>Browse All Categories</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
