import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shirt, 
  Leaf, 
  Phone, 
  Gift, 
  Award, 
  Heart, 
  Instagram, 
  ArrowUp 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full relative z-20 font-sans text-gray-800">
      
      {/* ── TOP SECTION: PALE TEAL/ICE-BLUE WITH CATEGORIZED LINKS ── */}
      <div className="w-full bg-[#d3e9ef] py-12 sm:py-16 px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="max-w-[1360px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-14">
          
          {/* ── COLUMN 1: SHOP & BRANDS ── */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* Group: Shop */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#4da8b3] flex items-center justify-center text-teal-950 shrink-0 shadow-2xs">
                  <Shirt className="w-4 h-4 text-teal-950 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  Shop
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-gray-700">
                <li>
                  <Link to="/shop" className="hover:text-black transition-colors block">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <a href="/#starter-kit" className="hover:text-black transition-colors block">
                    Make Your Kit
                  </a>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-black transition-colors block">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>

            {/* Group: Brands */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#4da8b3] flex items-center justify-center text-teal-950 shrink-0 shadow-2xs">
                  <Award className="w-4 h-4 text-teal-950 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  Brands
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-gray-700">
                <li>
                  <Link to="/shop" className="hover:text-black transition-colors block">
                    Our Brands
                  </Link>
                </li>
                <li>
                  <a href="mailto:partners@rayeva.com" className="hover:text-black transition-colors block">
                    Partner with us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── COLUMN 2: ABOUT & CONNECT ── */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* Group: About */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#4da8b3] flex items-center justify-center text-teal-950 shrink-0 shadow-2xs">
                  <Leaf className="w-4 h-4 text-teal-950 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  About
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-gray-700">
                <li>
                  <a href="/#impact" className="hover:text-black transition-colors block">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="mailto:careers@rayeva.com" className="hover:text-black transition-colors block">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="mailto:press@rayeva.com" className="hover:text-black transition-colors block">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Group: Connect */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#4da8b3] flex items-center justify-center text-teal-950 shrink-0 shadow-2xs">
                  <Heart className="w-4 h-4 text-teal-950 stroke-[2.2] fill-teal-950" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  Connect
                </h3>
              </div>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/rayevaworld/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#01b09d] hover:bg-[#009e8c] text-[#05433d] font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 transform hover:scale-[1.02]"
              >
                <Instagram className="w-4 h-4 text-[#05433d] stroke-[2.2]" />
                <span>@rayevaworld</span>
              </a>
            </div>
          </div>

          {/* ── COLUMN 3: SUPPORT ── */}
          <div className="flex flex-col">
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#4da8b3] flex items-center justify-center text-teal-950 shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4 text-teal-950 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  Support
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-gray-700">
                <li>
                  <a href="mailto:support@rayeva.com" className="hover:text-black transition-colors block">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/#faqs" className="hover:text-black transition-colors block">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── COLUMN 4: BULK ORDERS ── */}
          <div className="flex flex-col">
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#4da8b3] flex items-center justify-center text-teal-950 shrink-0 shadow-2xs">
                  <Gift className="w-4 h-4 text-teal-950 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  Bulk Orders
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-gray-700">
                <li>
                  <a href="mailto:corporate@rayeva.com" className="hover:text-black transition-colors block">
                    Corporate
                  </a>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-black transition-colors block">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR: MUTED SLATE-TEAL WITH BRAND, COPYRIGHT, POLICIES & SCROLL TO TOP ── */}
      <div className="w-full bg-[#afc6cd] py-4 sm:py-5 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#9bb5bd]/50">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          
          {/* LEFT: Rayeva Logo & Brand Name */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
              <img
                src="/rayeva_logo.png"
                alt="Rayeva Logo"
                className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 font-sans">
                Rayeva
              </span>
            </Link>
          </div>

          {/* CENTER: Copyright & Eco Tagline */}
          <div className="text-xs sm:text-[13px] text-gray-800 font-medium tracking-tight">
            <span>&copy; {new Date().getFullYear()} Rayeva. Made with </span>
            <span className="inline-block text-emerald-600 font-normal">💚</span>
            <span> for the planet</span>
          </div>

          {/* RIGHT: Policy Links & Scroll-to-Top Button */}
          <div className="flex items-center gap-4 sm:gap-6 justify-center md:justify-end">
            {/* 2-Row Policy Links */}
            <div className="text-[11px] sm:text-xs text-gray-800 font-medium text-right leading-tight">
              <div className="flex items-center justify-center md:justify-end gap-1.5 mb-1">
                <a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a>
                <span className="text-gray-500 font-normal">|</span>
                <a href="#terms" className="hover:text-black transition-colors">Terms of Service</a>
                <span className="text-gray-500 font-normal">|</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-1.5">
                <a href="#refund" className="hover:text-black transition-colors">Refund Policy</a>
                <span className="text-gray-500 font-normal">|</span>
                <a href="#cancellation" className="hover:text-black transition-colors">Cancellation Policy</a>
              </div>
            </div>

            {/* Scroll-to-Top Floating Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#00d4d9] hover:bg-[#00bcc1] text-gray-900 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer shrink-0"
            >
              <ArrowUp className="w-5 h-5 text-gray-900 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
