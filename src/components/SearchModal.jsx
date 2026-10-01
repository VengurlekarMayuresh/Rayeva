import React, { useState, useEffect } from 'react';
import { Search, X, Clock, TrendingUp, ArrowRight, Trash2 } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    'Bamboo Toothbrush',
    'Organic Cotton Tote Bag',
    'Reusable Coffee Cup',
    'Eco-friendly Office Kit',
    'Biodegradable Packaging'
  ]);

  const popularSearches = [
    'Zero Waste Kitchen',
    'Solar Chargers',
    'Sustainable Fashion',
    'Natural Skincare',
    'Recycled Paper'
  ];

  // Focus input when modal opens
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      if (!recentSearches.includes(query.trim())) {
        setRecentSearches([query.trim(), ...recentSearches.slice(0, 4)]);
      }
      alert(`Searching for: "${query}"`);
      onClose();
    }
  };

  const handleTagClick = (term) => {
    setQuery(term);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      
      {/* Backdrop overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Center Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden transform transition-all duration-300 scale-100">
        
        {/* Search Header Input */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center p-4 sm:p-6 border-b border-gray-100">
          <Search className="w-6 h-6 text-emerald-700 ml-2 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search sustainable products, brands & impact..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-4 pr-12 text-base sm:text-lg font-medium text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-14 text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Modal Content Area */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Recent Searches</span>
                </div>
                <button
                  type="button"
                  onClick={clearRecentSearches}
                  className="text-xs text-gray-400 hover:text-rose-600 flex items-center gap-1 font-medium transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {recentSearches.map((term, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTagClick(term)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gray-100/80 hover:bg-emerald-100/70 text-gray-700 hover:text-emerald-900 border border-gray-200/60 transition-all cursor-pointer"
                  >
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Trending Searches */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Trending Searches</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {popularSearches.map((term, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleTagClick(term)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/70 hover:bg-emerald-50/80 border border-gray-100 hover:border-emerald-200 text-left transition-all group cursor-pointer"
                >
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-emerald-900">
                    {term}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded shadow-2xs font-mono text-[10px]">ESC</kbd> to exit</span>
          <span className="text-emerald-700 font-semibold">Rayeva Eco Search</span>
        </div>

      </div>
    </div>
  );
}
