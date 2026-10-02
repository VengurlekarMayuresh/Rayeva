import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Leaf, 
  Filter, 
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import RayevaNavbar from '../components/RayevaNavbar';
import CategoryNavigation from '../components/CategoryNavigation';
import ProductCard from '../components/ProductCard';
import { categoriesData } from '../data/categoriesData';

export default function CategoryPage({ onAddToCart }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const category = categoriesData.find(c => c.id === categoryId) || categoriesData[0];

  const handleSelectCategory = (catId) => {
    navigate(`/category/${catId}`);
  };

  // Filter products
  let filteredProducts = [...category.products];
  if (filter === 'best-sellers') {
    filteredProducts = filteredProducts.filter(p => p.rating >= 4.8);
  } else if (filter === 'under-1500') {
    filteredProducts = filteredProducts.filter(p => p.price <= 1500);
  } else if (filter === 'certified-organic') {
    filteredProducts = filteredProducts.filter(p => p.badge.toLowerCase().includes('organic') || p.badge.toLowerCase().includes('zero'));
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen w-full bg-slate-900 text-gray-900 flex flex-col justify-between selection:bg-emerald-500 selection:text-white relative">
      
      {/* BACKGROUND MP4 VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/rayeva-hero.mp4" type="video/mp4" />
      </video>

      {/* LUMINOUS MORE TRANSLUCENT WHITE FILM OVERLAY */}
      <div className="fixed inset-0 bg-white/45 backdrop-blur-xl pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Navbar */}
        <RayevaNavbar />

        {/* Main Category Content Area */}
        <main className="w-full max-w-[1360px] mx-auto px-4 md:px-8 pt-4 sm:pt-6 pb-16 flex-1">
          
          {/* Back Button & Breadcrumbs */}
          <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-xs font-bold text-gray-900 hover:text-emerald-800 hover:bg-white transition-all cursor-pointer border border-white/80 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
              <div className="text-xs text-gray-800 font-semibold hidden sm:block">
                <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-emerald-800 font-bold">{category.title}</span>
              </div>
            </div>

            {/* Quick Impact Guarantee Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/90 text-emerald-900 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Certified Eco Guarantee</span>
            </div>
          </div>



          {/* HIGH-END FILTER & SORT CONTROL BAR */}
          <div className="glass-panel rounded-2xl p-3 sm:p-4 mb-8 border border-white/80 shadow-xl flex flex-wrap items-center justify-between gap-4 bg-white/85 backdrop-blur-xl">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5 mr-2 shrink-0">
                <Filter className="w-4 h-4 text-emerald-700" /> Filter By:
              </span>
              {[
                { id: 'all', label: 'All Products' },
                { id: 'best-sellers', label: '★ Best Sellers' },
                { id: 'certified-organic', label: '🌱 Certified Organic' },
                { id: 'under-1500', label: '⚡ Under ₹1,500' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    filter === f.id
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-white/80 hover:bg-white text-gray-800 hover:text-emerald-900 border border-white/80 shadow-2xs'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Sort & Grid Controls */}
            <div className="flex items-center gap-3 shrink-0 ml-auto">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-bold text-gray-700 hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/90 border border-white rounded-full text-xs font-bold text-gray-800 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer shadow-2xs"
                >
                  <option value="featured">Featured Collection</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <div className="h-4 w-[1px] bg-gray-300 hidden sm:block" />

              <span className="text-xs font-bold text-gray-700 hidden sm:inline">
                {filteredProducts.length} items
              </span>
            </div>

          </div>

          {/* PRODUCT CARDS GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="glass-panel rounded-3xl p-12 text-center bg-white/90 border border-white shadow-xl my-8">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products match your filter</h3>
              <p className="text-sm text-gray-600 mb-4">Try selecting another filter or browse our entire sustainable collection.</p>
              <button
                onClick={() => setFilter('all')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </main>
      </div>

      {/* Bottom Floating Category Navigation Bar */}
      <div className="relative z-20">
        <CategoryNavigation
          onSelectCategory={handleSelectCategory}
          activeCategoryId={category.id}
        />
      </div>

    </div>
  );
}
