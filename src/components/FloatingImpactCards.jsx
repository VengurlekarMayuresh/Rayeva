import React from 'react';
import { Leaf, Users, Sprout, ArrowRight } from 'lucide-react';

export default function FloatingImpactCards({ onCardClick }) {
  const cards = [
    {
      id: 'products',
      icon: Leaf,
      iconBg: 'bg-[#7fe7c4]',
      iconColor: 'text-[#065f36]',
      title: 'Sustainable Products',
      description: 'Everyday choices\nfor a cleaner planet',
      positionClass: 'lg:absolute lg:top-[12%] lg:left-[43%] xl:left-[45%] float-slow',
    },
    {
      id: 'business',
      icon: Users,
      iconBg: 'bg-[#90caee]',
      iconColor: 'text-[#0e4a7b]',
      title: 'For Businesses',
      description: 'Sustainable sourcing\nat scale',
      positionClass: 'lg:absolute lg:top-[28%] lg:left-[60%] xl:left-[62%] float-slow-delay-1',
    },
    {
      id: 'impact',
      icon: Sprout,
      iconBg: 'bg-[#7fe7c4]',
      iconColor: 'text-[#065f36]',
      title: 'Real Impact',
      description: 'Stronger communities\nand a healthier planet',
      positionClass: 'lg:absolute lg:top-[48%] lg:left-[48%] xl:left-[50%] float-slow-delay-2',
    }
  ];

  return (
    <>
      {/* DESKTOP FLOATING LAYOUT (Absolute floating overlay matching reference screenshot) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onCardClick ? onCardClick(card.id) : alert(`Clicked ${card.title}`)}
              className={`${card.positionClass} pointer-events-auto glass-panel rounded-[22px] px-4 py-3.5 flex items-center gap-3.5 max-w-[270px] xl:max-w-[285px] shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-white/80 group`}
            >
              {/* Circular Colored Icon Container */}
              <div className={`w-11 h-11 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform`}>
                <IconComponent className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-bold text-gray-900 leading-tight group-hover:text-emerald-800 transition-colors">
                  {card.title}
                </h3>
                <p className="text-[11px] text-gray-600 font-medium leading-snug mt-0.5 whitespace-pre-line">
                  {card.description}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="w-7 h-7 rounded-full bg-white/60 group-hover:bg-white flex items-center justify-center text-gray-700 group-hover:text-emerald-700 shrink-0 transition-all border border-white/60">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE & TABLET LAYOUT (Stacked grid below text so cards don't cover text or video visual) */}
      <div className="lg:hidden relative z-20 w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onCardClick ? onCardClick(card.id) : alert(`Clicked ${card.title}`)}
              className="glass-panel rounded-2xl p-3.5 flex items-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer border border-white/80"
            >
              <div className={`w-10 h-10 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0`}>
                <IconComponent className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold text-gray-900 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[10px] text-gray-600 font-medium leading-tight mt-0.5">
                  {card.description.replace('\n', ' ')}
                </p>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-gray-700 shrink-0">
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
