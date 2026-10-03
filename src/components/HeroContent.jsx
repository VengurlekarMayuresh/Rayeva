import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Package, Globe, Sparkles } from 'lucide-react';

export default function HeroContent({ slide, onExploreClick, onWatchStoryClick }) {
  const currentTagline = slide?.tagline || 'SUSTAINABLE CHOICES. BRIGHTER TOMORROWS.';
  const currentTitle = slide?.title || 'Small Changes Global Impact';
  const currentSubtitle = slide?.subtitle || 'Discover thoughtfully curated, eco-friendly products for a more conscious and sustainable lifestyle.';

  const featureHighlights = [
    { label: 'Eco-Friendly Products', icon: Leaf },
    { label: 'Ethically Sourced', icon: ShieldCheck },
    { label: 'Plastic-Free Packaging', icon: Package },
    { label: 'Supporting A Greener Planet', icon: Globe },
  ];

  return (
    <div className="relative z-20 flex flex-col justify-center items-start text-left max-w-[540px] lg:max-w-[620px] py-4 sm:py-6">

      {/* Top Tagline Badge */}
      <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-900/10 shadow-sm mb-3 sm:mb-4">
        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.14em] uppercase text-emerald-950 font-sans">
          {currentTagline}
        </span>
      </div>

      {/* Main Heading with Organic Green Brush Stroke */}
      <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-tight text-gray-900 font-sans">
        Small Changes,{' '}
        <span className="relative inline-block text-[#115e3b] pb-1">
          Global Impact
          {/* Organic Green Underline Brush Stroke matching reference image */}
          <svg
            className="absolute left-0 bottom-0 w-full h-3 sm:h-3.5 text-emerald-600/80 pointer-events-none"
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

      {/* Hero Description Subtitle */}
      <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-gray-800 font-medium max-w-[480px]">
        {currentSubtitle}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 sm:mt-7">

        {/* Primary CTA */}
        <button
          onClick={onExploreClick}
          className="group inline-flex items-center justify-center gap-2.5 bg-[#11472e] hover:bg-[#0b3320] text-white font-bold text-xs sm:text-sm px-6 py-3 sm:px-7 sm:py-3.5 rounded-full shadow-lg shadow-emerald-950/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Shop Now</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Secondary CTA */}
        <button
          onClick={onWatchStoryClick || onExploreClick}
          className="group inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-gray-900 font-bold text-xs sm:text-sm px-5 py-3 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        >
          <span>Explore Categories</span>
          <ArrowRight className="w-4 h-4 text-emerald-800 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* 4 Feature Highlights with Icons matching reference image */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-8 sm:mt-10 pt-4 border-t border-emerald-900/10 w-full">
        {featureHighlights.map((feat, i) => {
          const IconComp = feat.icon;
          return (
            <div key={i} className="flex items-center gap-2 bg-white/50 backdrop-blur-sm p-2 rounded-xl border border-white/60 shadow-xs">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <IconComp className="w-3.5 h-3.5 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold text-gray-900 leading-tight">
                {feat.label}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

