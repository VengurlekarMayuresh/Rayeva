import React from 'react';
import RayevaHero from '../components/RayevaHero';
import TrendingSection from '../components/TrendingSection';
import StarterKitSection from '../components/StarterKitSection';
import OurImpact from '../components/OurImpact';

export default function Home({ onAddToCart }) {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#f4f8f5] text-gray-900 relative selection:bg-emerald-500 selection:text-white">

      {/* Top Hero Section + Shop by Category */}
      <RayevaHero onAddToCart={onAddToCart} />

      {/* Remaining Home Page Sections (Below Shop by Category) */}
      <div className="relative z-10 text-gray-900 overflow-hidden">

        {/* Repeating Greenish Background Layer (Repeats naturally without zooming) */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/greenish.png')",
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            filter: 'blur(8px)',
            transform: 'scale(1.03)',
            transformOrigin: 'top center',
          }}
        />

        {/* Soft translucent veil for optimal card and text contrast */}
        <div className="absolute inset-0 bg-[#f4f8f5]/45 pointer-events-none z-0" />

        {/* Remaining Page Content: Trending, Starter Kit, Impact */}
        <div className="relative z-10 flex flex-col gap-8 py-6 sm:py-10">
          <TrendingSection onAddToCart={onAddToCart} />
          <StarterKitSection onAddToCart={onAddToCart} />
          <OurImpact />
        </div>

      </div>

    </main>
  );
}
