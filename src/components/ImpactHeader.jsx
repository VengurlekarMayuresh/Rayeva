import React from 'react';

export default function ImpactHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
      
      {/* OUR IMPACT Headline with Navy -> Turquoise -> Blue Gradient */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3 bg-gradient-to-r from-[#102A43] via-[#00BFAE] to-[#008FD5] bg-clip-text text-transparent">
        Our Impact
      </h2>

      {/* Small Turquoise Horizontal Accent Line */}
      <div className="w-16 h-1 bg-gradient-to-r from-[#00BFAE] to-[#079BD3] rounded-full mb-4 shadow-xs" />

      {/* Subtitle Description */}
      <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl text-shadow-xs">
        We exist to redefine how the world consumes. At Rayeva, impact is action—measurable change for people, communities, and the planet.
      </p>

    </div>
  );
}
