import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import SearchModal from './SearchModal';

export default function RayevaNavbar({ cartCount = 2, onOpenCart }) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    'Home',
    'About Us',
    'Brands',
    'Shop',
    'Blog',
    'Contact',
  ];

  const handleNavClick = (label) => {
    setActiveLink(label);
    if (label === 'Home') {
      navigate('/');
    } else if (label === 'Shop') {
      navigate('/shop');
    } else if (label === 'Brands' || label === 'About Us') {
      navigate('/shop');
    }
  };

  return (
    <>
      <header className="relative z-30 w-full pt-2.5 sm:pt-4 md:pt-6 px-2.5 sm:px-4 flex justify-center mx-auto shrink-0">
        <nav className="inline-flex items-center justify-between gap-3 sm:gap-6 md:gap-10 py-1.5 sm:py-2 px-3 sm:px-6 md:px-8 rounded-full bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 transition-all max-w-full">

          {/* LEFT: Rayeva Logo + Brand Name (Redirects to Home Page /) */}
          <div className="flex items-center gap-2 shrink-0">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <img
                src="/rayeva_logo.png"
                alt="Rayeva Logo"
                className="h-7 w-auto md:h-8.5 object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#165a3d] font-sans">
                Rayeva
              </span>
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden sm:flex items-center gap-2 md:gap-4">
            {navLinks.map((label) => (
              <button
                key={label}
                onClick={() => handleNavClick(label)}
                className={`text-xs md:text-sm font-semibold tracking-wide transition-all py-1.5 px-3.5 rounded-full cursor-pointer whitespace-nowrap ${activeLink === label
                  ? 'text-gray-900 bg-white/70 shadow-2xs font-bold'
                  : 'text-gray-800 hover:text-emerald-800 hover:bg-white/45'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* RIGHT: Search, Cart, User Profile Icons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

            {/* Search Icon Button */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2.5 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 shadow-2xs text-gray-800 hover:text-emerald-700 transition-all cursor-pointer flex items-center justify-center"
              aria-label="Open Search Modal"
              title="Search sustainable products"
            >
              <Search className="w-4 h-4 md:w-4.5 md:h-4.5 stroke-[2.2]" />
            </button>

            {/* Shopping Cart Icon Button */}
            <button
              onClick={onOpenCart || (() => alert("Cart opened! You have 2 eco-friendly items."))}
              className="relative p-2.5 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 shadow-2xs text-gray-800 hover:text-emerald-700 transition-all cursor-pointer flex items-center justify-center"
              aria-label="Shopping Cart"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4 md:w-4.5 md:h-4.5 stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-2xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account Icon Button */}
            <button
              onClick={() => alert("User profile settings")}
              className="p-2.5 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 shadow-2xs text-gray-800 hover:text-emerald-700 transition-all cursor-pointer flex items-center justify-center"
              aria-label="User Account"
              title="User Account"
            >
              <User className="w-4 h-4 md:w-4.5 md:h-4.5 stroke-[2.2]" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 text-gray-800 cursor-pointer ml-1"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 glass-panel rounded-3xl shadow-2xl flex flex-col gap-3 animate-fadeIn border border-white/80 z-50 relative">
            <div className="flex flex-col gap-2">
              {navLinks.map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    handleNavClick(label);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-semibold py-2 px-3 rounded-xl transition-colors ${activeLink === label ? 'bg-emerald-100/80 text-emerald-900 font-bold' : 'text-gray-800 hover:bg-white/60'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* CENTERED POP-UP SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
}
