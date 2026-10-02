import React from 'react';
import RayevaHero from '../components/RayevaHero';
import TrendingSection from '../components/TrendingSection';
import StarterKitSection from '../components/StarterKitSection';
import OurImpact from '../components/OurImpact';

export default function Home({ onAddToCart }) {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-slate-900 text-gray-900 relative selection:bg-emerald-500 selection:text-white">
      
      {/* Top Hero Section */}
      <RayevaHero />

      {/* Trending & Starter Kit Sections below main banner with repeating bgtrans.png background */}
      <div className="relative z-10 text-gray-900 border-t border-emerald-300/30 overflow-hidden">
        
        {/* Root bgtrans.png repeating pattern background */}
        <div 
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/bgtrans.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'top left'
          }}
        />

        {/* Highly Translucent Glass Film Overlay */}
        <div className="absolute inset-0 bg-white/12 backdrop-blur-sm pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col gap-6">
          <TrendingSection onAddToCart={onAddToCart} />
          <StarterKitSection onAddToCart={onAddToCart} />
          <OurImpact />
        </div>

      </div>

    </main>
  );
}
