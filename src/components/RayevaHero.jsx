import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import RayevaNavbar from './RayevaNavbar';
import CategoryNavigation from './CategoryNavigation';

// The 3 carousel images from public/corosel/
const CAROUSEL_IMAGES = [
  { src: '/corosel/Golden Eco Living Still Life.png', alt: 'Golden Eco Living Still Life' },
  { src: '/corosel/Small Choices, Big Changes.png', alt: 'Small Choices, Big Changes' },
  { src: '/corosel/Sunlit Sustainable Lifestyle Collection.png', alt: 'Sunlit Sustainable Lifestyle Collection' },
];

export default function RayevaHero({ onAddToCart }) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Continuous auto-rotation every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  }, []);

  return (
    <section className="relative w-full flex flex-col bg-[#f4f8f5]">

      {/* ══════════════════════════════════════════════════════════
          HALF-PAGE HERO BANNER (STARTS FROM VERY TOP EDGE)
          • Carousel images fill from top: 0 behind the navbar
          • Navbar floats at top: 0 over the carousel
          • All text/buttons pinned strictly to the LEFT SIDE
      ══════════════════════════════════════════════════════════ */}
      <div className="relative w-full h-[72vh] min-h-[440px] max-h-[690px] overflow-hidden select-none">

        {/* ── ROTATING BACKGROUND IMAGES ── */}
        {CAROUSEL_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* ── GRADIENT SCRIM FOR LEGIBILITY (Stronger on left, fades to right) ── */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/25 pointer-events-none" />

        {/* ── NAVBAR FLOATING ON TOP OF CAROUSEL AT THE VERY TOP ── */}
        <div className="absolute top-0 left-0 right-0 z-40">
          <RayevaNavbar onOpenCart={() => navigate('/shop')} />
        </div>

        {/* ── ALL CONTENT STRICTLY PLACED ON THE LEFT SIDE (Responsive for < 500px) ── */}
        <div className="absolute inset-0 z-20 flex items-center pt-20 min-[400px]:pt-24 sm:pt-20">
          <div className="w-full max-w-[1440px] mx-auto px-4 min-[400px]:px-6 sm:px-12 lg:px-16 flex justify-start">

            {/* Left Content Column */}
            <div className="w-full max-w-[520px] pl-0 sm:pl-8 lg:pl-10 flex flex-col items-start text-left gap-2.5 sm:gap-3.5">

              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-md text-white text-[8px] min-[380px]:text-[9px] sm:text-[10px] font-extrabold tracking-[0.12em] sm:tracking-[0.16em] uppercase px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/30 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SUSTAINABLE CHOICES. BRIGHTER TOMORROWS.
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md text-left">
                Small Changes,{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 pb-1">
                  Global Impact
                  {/* Organic Green Underline Accent */}
                  <svg
                    className="absolute left-0 -bottom-0.5 w-full h-2.5 sm:h-3 text-emerald-400/80 pointer-events-none"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C40 3 120 1 198 7C150 11 60 12 5 10"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-[11px] min-[380px]:text-xs sm:text-sm lg:text-[14px] text-white/90 font-medium leading-relaxed max-w-[440px] drop-shadow text-left line-clamp-3 sm:line-clamp-none">
                Discover thoughtfully curated, eco-friendly products for a more conscious and sustainable lifestyle.
              </p>

              {/* CTA Buttons - Aligned to Left */}
              <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mt-1">
                <button
                  onClick={() => navigate('/shop')}
                  className="group inline-flex items-center gap-1.5 sm:gap-2 bg-[#11472e] hover:bg-[#0b3220] text-white font-bold text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => navigate('/shop')}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-white font-semibold text-xs sm:text-sm px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/50 hover:border-white hover:bg-white/15 backdrop-blur-md transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Categories</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ── CAROUSEL ARROWS ── */}
        <button
          onClick={handlePrev}
          className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/25 hover:bg-white/50 text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/25 hover:bg-white/50 text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>

        {/* ── CAROUSEL INDICATOR DOTS ── */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex
                ? 'w-7 h-2 bg-white shadow-md'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* ── CATEGORY BAR IMMEDIATELY BELOW THE HALF-PAGE BANNER ── */}
      <CategoryNavigation />

    </section>
  );
}
