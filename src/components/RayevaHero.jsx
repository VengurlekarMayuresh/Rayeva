import React from 'react';
import { useNavigate } from 'react-router-dom';
import RayevaNavbar from './RayevaNavbar';
import HeroContent from './HeroContent';
import FloatingImpactCards from './FloatingImpactCards';
import CategoryNavigation from './CategoryNavigation';

export default function RayevaHero() {
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    const trendingElem = document.getElementById('trending-section');
    if (trendingElem) {
      trendingElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/category/home-living');
    }
  };

  return (
    <section className="relative h-screen max-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-900 select-none">
      
      {/* HERO BACKGROUND IMAGE (SOFTLY BLURRED TO FOCUS ON CONTENT) */}
      <img
        src="/new-img.png"
        alt="Rayeva Background"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[60%_center] z-0 pointer-events-none blur-[3px] scale-105 transition-all duration-700"
      />

      {/* SUBTLE OVERLAY WITH BACKDROP BLUR for text & card pop */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/25 to-transparent pointer-events-none z-0 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/20 pointer-events-none z-0" />

      {/* TOP NAVIGATION BAR */}
      <RayevaNavbar />

      {/* HERO MAIN BODY: Left typography content + Floating cards matching reference snippet */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex-1 min-h-0 flex items-center my-auto py-1 sm:py-2">
        <HeroContent onExploreClick={handleExploreProducts} />
        <FloatingImpactCards onCardClick={(cardId) => {
          if (cardId === 'products') navigate('/category/home-living');
          if (cardId === 'business') navigate('/category/packaging');
          if (cardId === 'impact') navigate('/category/zero-waste');
        }} />
      </div>

      {/* BOTTOM CATEGORY NAVIGATION BAR */}
      <CategoryNavigation />

    </section>
  );
}
