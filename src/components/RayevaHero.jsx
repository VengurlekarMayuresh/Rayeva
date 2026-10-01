import React, { useRef, useEffect } from 'react';
import RayevaNavbar from './RayevaNavbar';
import HeroContent from './HeroContent';
import FloatingImpactCards from './FloatingImpactCards';
import CategoryNavigation from './CategoryNavigation';

export default function RayevaHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented by browser policy:", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-900 select-none">
      
      {/* BACKGROUND MP4 VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[60%_center] z-0 pointer-events-none"
        preload="metadata"
      >
        <source src="/rayeva-hero.mp4" type="video/mp4" />
        <source src="./rayeva-hero.mp4" type="video/mp4" />
        Your browser does not support video play.
      </video>

      {/* SUBTLE OVERLAY for text readability without darkening background video */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/45 via-white/15 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20 pointer-events-none z-0" />

      {/* TOP NAVIGATION BAR */}
      <RayevaNavbar />

      {/* HERO MAIN BODY: Left typography content + Right floating impact cards */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex-1 flex flex-col justify-center my-auto py-3 md:py-6">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 min-h-[440px] md:min-h-[500px]">
          
          {/* Left Content Column */}
          <HeroContent />

          {/* Floating Glassmorphism Cards over the Video */}
          <FloatingImpactCards />
        </div>
      </div>

      {/* BOTTOM CATEGORY NAVIGATION BAR */}
      <CategoryNavigation />

    </section>
  );
}
