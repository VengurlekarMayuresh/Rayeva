import React, { useState } from 'react';
import { Search, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';

export default function RayevaNavbar({ cartCount = 2, onOpenCart, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { label: 'Shop', hasDropdown: true, items: ['All Products', 'New Arrivals', 'Best Sellers', 'Eco Home', 'Sustainable Fashion'] },
    { label: 'For Business', hasDropdown: true, items: ['Corporate Gifting', 'Bulk Sourcing', 'ESG Solutions', 'Partner With Us'] },
    { label: 'Our Impact', hasDropdown: false },
    { label: 'Sustainability', hasDropdown: false },
    { label: 'Resources', hasDropdown: true, items: ['Impact Reports', 'Guides & Articles', 'Eco Calculators', 'Community Forum'] },
    { label: 'About', hasDropdown: false },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  return (
    <header className="relative z-30 w-full pt-4 md:pt-6 px-4 md:px-8 max-w-[1440px] mx-auto">
      <nav className="flex items-center justify-between py-2">
        
        {/* LEFT: Rayeva Logo + Brand Name */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2.5 group">
            <img 
              src="/rayeva_logo.png" 
              alt="Rayeva Logo" 
              className="h-9 w-auto md:h-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-2xl md:text-[28px] font-bold tracking-tight text-gray-900 font-sans">
              Rayeva
            </span>
          </a>
        </div>

        {/* CENTER: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-emerald-700 transition-colors py-1 cursor-pointer"
                onClick={() => alert(`Navigating to ${link.label}`)}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-700 transition-transform group-hover:rotate-180" />
                )}
              </button>

              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-52 py-2 glass-panel rounded-2xl shadow-xl z-50 animate-fadeIn">
                  {link.items.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50/80 hover:text-emerald-800 font-medium transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Opening category: ${item}`);
                        setActiveDropdown(null);
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT: Search, Cart, User Profile */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Search Input (Desktop) */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden sm:flex items-center relative min-w-[240px] md:min-w-[280px] lg:min-w-[320px]"
          >
            <input
              type="text"
              placeholder="Search sustainable products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-4 pr-10 rounded-full text-sm font-normal text-gray-800 placeholder-gray-500 glass-search focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 shadow-sm transition-all"
            />
            <button 
              type="submit" 
              className="absolute right-3 text-gray-700 hover:text-emerald-700 transition-colors cursor-pointer"
              aria-label="Submit Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Cart Icon with Notification Badge */}
          <button
            onClick={onOpenCart || (() => alert("Cart opened! You have 2 eco-friendly items."))}
            className="relative p-2.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-white/80 shadow-sm text-gray-800 hover:text-emerald-700 transition-all cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile Button */}
          <button
            onClick={() => alert("User account settings")}
            className="p-2.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-white/80 shadow-sm text-gray-800 hover:text-emerald-700 transition-all cursor-pointer"
            aria-label="User Account"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-white/80 text-gray-800 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 glass-panel rounded-3xl shadow-2xl flex flex-col gap-4 animate-fadeIn border border-white/80">
          
          {/* Mobile Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search sustainable products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-4 pr-10 rounded-full text-sm glass-search focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-600">
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Mobile Links */}
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-100/50 pb-2">
                <button
                  className="w-full flex items-center justify-between text-base font-semibold text-gray-800 py-1"
                  onClick={() => alert(`Navigating to ${link.label}`)}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>© Rayeva Conscious Commerce</span>
            <span className="text-emerald-700 font-bold">100% Eco Verified</span>
          </div>
        </div>
      )}
    </header>
  );
}
