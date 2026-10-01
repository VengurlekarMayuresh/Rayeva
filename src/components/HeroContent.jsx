import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroContent({ onExploreClick, onWatchStoryClick }) {
  return (
    <div className="relative z-20 flex flex-col justify-center items-center sm:items-start text-center sm:text-left mx-auto sm:mx-0 max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] py-1 md:py-2">
      
      {/* Eyebrow - Increased mobile font size */}
      <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-gray-800 mb-2 block drop-shadow-2xs">
        CONSCIOUS CHOICES × BRIGHTER TOMORROWS
      </span>

      {/* Main Heading - Increased mobile font size to text-3xl */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold leading-[1.08] sm:leading-[1.06] tracking-tight text-gray-900 font-sans">
        Sustainable<br />
        Solutions<br />
        for a Better<br />
        <span className="relative inline-block text-rayeva-green pb-1 sm:pb-1.5">
          Tomorrow
          {/* Organic Green Underline Brush Stroke matching reference image */}
          <svg 
            className="absolute left-0 bottom-0 w-full h-2.5 sm:h-3 md:h-3.5 text-rayeva-green pointer-events-none" 
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

      {/* Hero Description - Enhanced contrast and readable font size */}
      <p className="mt-3 sm:mt-4 text-[13.5px] sm:text-sm md:text-[15px] leading-relaxed text-gray-900 font-semibold max-w-[380px] sm:max-w-[420px] mx-auto sm:mx-0 bg-white/40 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none px-4 py-2 sm:p-0 rounded-2xl border border-white/50 sm:border-none shadow-sm sm:shadow-none">
        Rayeva is an end-to-end platform for conscious consumption, connecting people, businesses and communities for a cleaner, greener, and more equitable world.
      </p>

      {/* CTA Buttons - Bold legible text */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3.5 mt-4 sm:mt-5">
        
        {/* Primary CTA */}
        <button
          onClick={onExploreClick || (() => alert("Navigating to Rayeva Sustainable Store..."))}
          className="group inline-flex items-center justify-center gap-2 bg-rayeva-green hover:bg-[#09683a] text-white font-bold text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-md shadow-emerald-950/15 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Explore Products</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Secondary CTA */}
        <button
          onClick={onWatchStoryClick || (() => alert("Playing Rayeva Impact Story video..."))}
          className="group inline-flex items-center justify-center gap-2.5 glass-cta-secondary hover:bg-white text-gray-900 font-bold text-xs sm:text-sm px-4.5 py-2.5 sm:px-5 sm:py-2.5 rounded-full shadow-2xs transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          {/* Black circle with play icon */}
          <span className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
            <Play className="w-3 h-3 fill-current ml-0.5" />
          </span>
          <span>Watch Our Story</span>
        </button>
      </div>

    </div>
  );
}
