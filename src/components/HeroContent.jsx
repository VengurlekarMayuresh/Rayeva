import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import TrustSection from './TrustSection';

export default function HeroContent({ onExploreClick, onWatchStoryClick }) {
  return (
    <div className="relative z-20 flex flex-col justify-center max-w-[520px] lg:max-w-[560px] xl:max-w-[600px] pt-4 md:pt-8 pb-4">
      
      {/* Eyebrow */}
      <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.18em] uppercase text-gray-700/90 mb-2 sm:mb-3 block">
        CONSCIOUS CHOICES × BRIGHTER TOMORROWS
      </span>

      {/* Main Heading with Exact Line Breaks */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[68px] font-extrabold leading-[1.08] tracking-tight text-gray-900 font-sans">
        Sustainable<br />
        Solutions<br />
        for a Better<br />
        <span className="relative inline-block text-rayeva-green pb-1.5">
          Tomorrow
          {/* Organic Green Underline Brush Stroke matching reference image */}
          <svg 
            className="absolute left-0 bottom-0 w-full h-3 md:h-3.5 text-rayeva-green pointer-events-none" 
            viewBox="0 0 240 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M3 14C50 4 150 2 237 11C180 15 80 16 10 13" 
              stroke="currentColor" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </span>
      </h1>

      {/* Hero Description */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-[16px] leading-relaxed text-gray-700/95 max-w-[430px] font-normal">
        Rayeva is an end-to-end platform for conscious consumption, connecting people, businesses and communities for a cleaner, greener, and more equitable world.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
        
        {/* Primary CTA */}
        <button
          onClick={onExploreClick || (() => alert("Navigating to Rayeva Sustainable Store..."))}
          className="group inline-flex items-center justify-center gap-2.5 bg-rayeva-green hover:bg-[#09683a] text-white font-semibold text-sm sm:text-base px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full shadow-lg shadow-emerald-950/15 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Explore Products</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Secondary CTA */}
        <button
          onClick={onWatchStoryClick || (() => alert("Playing Rayeva Impact Story video..."))}
          className="group inline-flex items-center justify-center gap-3 glass-cta-secondary hover:bg-white text-gray-900 font-semibold text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5 rounded-full shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          {/* Black circle with play icon */}
          <span className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          </span>
          <span>Watch Our Story</span>
        </button>
      </div>

      {/* Trust Section */}
      <TrustSection />

    </div>
  );
}
