import React from 'react';
import { Home, Recycle, Package, FlaskConical, Cpu, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SustainabilityCategories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'essentials',
      title: 'Everyday\nessentials',
      icon: Home,
      bgColor: 'bg-emerald-500',
      shadowColor: 'shadow-emerald-500/30',
      borderRing: 'border-emerald-200'
    },
    {
      id: 'recycling',
      title: 'Recycling &\nupcycling solutions',
      icon: Recycle,
      bgColor: 'bg-teal-500',
      shadowColor: 'shadow-teal-500/30',
      borderRing: 'border-teal-200'
    },
    {
      id: 'packaging',
      title: 'Plastic-free\npackaging options',
      icon: Package,
      bgColor: 'bg-cyan-500',
      shadowColor: 'shadow-cyan-500/30',
      borderRing: 'border-cyan-200'
    },
    {
      id: 'nontoxic',
      title: 'Non-toxic\nproducts',
      icon: FlaskConical,
      bgColor: 'bg-sky-500',
      shadowColor: 'shadow-sky-500/30',
      borderRing: 'border-sky-200'
    },
    {
      id: 'cleantech',
      title: 'Clean\ntech',
      icon: Cpu,
      bgColor: 'bg-emerald-600',
      shadowColor: 'shadow-emerald-600/30',
      borderRing: 'border-emerald-200'
    },
  ];

  return (
    <div className="flex flex-col items-center text-center mb-14 w-full">
      
      {/* Platform Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-[#102A43] via-[#00BFAE] to-[#079BD3] bg-clip-text text-transparent">
        All-Access Sustainability Platform
      </h3>
      
      <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-600 mb-8">
        Rayeva brings together everything you need for sustainable living:
      </p>

      {/* 5 Circular Category Feature Cards Row */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 max-w-5xl">
        {categories.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => navigate('/category/food-wellness')}
              className="group flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Outer Circular Glass Disc (approx 100-110px) */}
              <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 p-2 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden`}>
                
                {/* Inner Colored Circle Icon Holder */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${item.bgColor} text-white flex items-center justify-center shadow-md ${item.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>

              </div>

              {/* Category Label Text */}
              <span className="text-xs sm:text-sm font-bold text-[#102A43] group-hover:text-[#00BFAE] transition-colors mt-2.5 leading-snug whitespace-pre-line text-center max-w-[120px]">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Explore Platform CTA Button */}
      <button
        onClick={() => navigate('/category/food-wellness')}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#21B573] to-[#00BFAE] hover:from-[#1b9a62] hover:to-[#00a899] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
      >
        <span>Explore Our Platform</span>
        <ArrowRight className="w-4 h-4" />
      </button>

    </div>
  );
}
