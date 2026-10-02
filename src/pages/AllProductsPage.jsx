import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  SlidersHorizontal, 
  CheckCircle2, 
  ShoppingBag,
  Sparkles,
  Leaf,
  X
} from 'lucide-react';
import RayevaNavbar from '../components/RayevaNavbar';
import ProductCard from '../components/ProductCard';
import { categoriesData, starterKitProduct } from '../data/categoriesData';

export default function AllProductsPage({ onAddToCart }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Consolidate all products into one comprehensive array
  const allProductsList = [
    starterKitProduct,
    ...categoriesData.flatMap(cat => cat.products)
  ];

  // Unique category tabs list
  const categoryTabs = [
    { id: 'all', label: 'All Products' },
    ...categoriesData.map(cat => ({ id: cat.id, label: cat.title }))
  ];

  // Filter products by category, search query, and price range
  let filteredProducts = allProductsList.filter(product => {
    // 1. Category Filter
    if (activeCategory !== 'all') {
      const matchCat = categoriesData.find(c => c.id === activeCategory);
      if (matchCat) {
        const belongsToCat = matchCat.products.some(p => p.id === product.id);
        if (!belongsToCat) return false;
      }
    }

    // 2. Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchBadge = product.badge.toLowerCase().includes(q);
      const matchImpact = product.impact.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchBadge && !matchImpact) {
        return false;
      }
    }

    // 3. Price Filter
    if (priceFilter === 'under-1000') {
      if (product.price >= 1000) return false;
    } else if (priceFilter === '1000-2500') {
      if (product.price < 1000 || product.price > 2500) return false;
    } else if (priceFilter === 'above-2500') {
      if (product.price <= 2500) return false;
    }

    return true;
  });

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setPriceFilter('all');
    setSortBy('featured');
  };

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

      {/* LUMINOUS SOFT BOTANICAL TRANSLUCENT FILM OVERLAY */}
      <div className="fixed inset-0 bg-emerald-950/15 backdrop-blur-xl pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#e6f2ec]/80 via-[#edf6f1]/70 to-[#e6f2ec]/80 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col flex-1">
        
        {/* Top Navbar */}
        <RayevaNavbar onAddToCart={onAddToCart} />

        {/* Main Content Container */}
        <main className="w-full max-w-[1360px] mx-auto px-4 md:px-8 pt-4 sm:pt-6 pb-20 flex-1">
          
          {/* Breadcrumbs & Eco Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
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
                <span className="text-emerald-800 font-bold">All Eco Products</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-md border border-white/90 text-emerald-900 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Certified Microplastic-Free Guarantee</span>
            </div>
          </div>

          {/* PAGE HERO HEADER BLOCK */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 mb-8 border border-white/80 shadow-xl bg-white/80 backdrop-blur-xl relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-800 text-xs font-extrabold px-3.5 py-1.5 rounded-full mb-3 border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>FULL SUSTAINABLE CATALOG</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                All Eco-Conscious <span className="text-emerald-700">Essentials</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed mt-2">
                Discover our complete collection of certified organic, zero-waste, plastic-free, and ethically crafted products. Verified for minimal environmental impact.
              </p>
            </div>
          </div>

          {/* CATEGORY FILTER TABS BAR */}
          <div className="glass-panel rounded-2xl p-2.5 sm:p-3 mb-6 border border-white/80 shadow-md bg-white/80 backdrop-blur-xl">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5 ml-2 mr-1 shrink-0">
                <Filter className="w-4 h-4 text-emerald-700" /> Categories:
              </span>
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeCategory === tab.id
                      ? 'bg-emerald-800 text-white shadow-md'
                      : 'bg-white/80 hover:bg-white text-gray-800 hover:text-emerald-900 border border-white/80 shadow-2xs'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* SECONDARY FILTER & SEARCH BAR */}
          <div className="glass-panel rounded-2xl p-4 mb-8 border border-white/80 shadow-lg flex flex-wrap items-center justify-between gap-4 bg-white/85 backdrop-blur-xl">
            
            {/* Search Input Box */}
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, badge, or impact..."
                className="w-full pl-10 pr-9 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Price Filter & Sort Dropdowns */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              
              {/* Price Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-700 hidden sm:inline">Price:</span>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer shadow-2xs"
                >
                  <option value="all">All Prices</option>
                  <option value="under-1000">Under ₹1,000</option>
                  <option value="1000-2500">₹1,000 - ₹2,500</option>
                  <option value="above-2500">Above ₹2,500</option>
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-bold text-gray-700 hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer shadow-2xs"
                >
                  <option value="featured">Featured Collection</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <div className="h-4 w-[1px] bg-gray-300 hidden md:block" />

              <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-full">
                {filteredProducts.length} Products
              </span>
            </div>

          </div>

          {/* ALL PRODUCTS GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="glass-panel rounded-3xl p-12 text-center bg-white/80 backdrop-blur-xl border border-white/80 my-8">
              <Leaf className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No eco items match your filters</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                Try adjusting your search query or price filter to view items in our catalog.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </main>

      </div>
    </div>
  );
}
