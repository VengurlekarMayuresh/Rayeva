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
      description: 'Everyday choices for a cleaner planet',
      desktopOffset: 'lg:-translate-x-12 xl:-translate-x-16 lg:self-start float-slow',
    },
    {
      id: 'business',
      icon: Users,
      iconBg: 'bg-[#90caee]',
      iconColor: 'text-[#0e4a7b]',
      title: 'For Businesses',
      description: 'Sustainable sourcing at scale',
      desktopOffset: 'lg:translate-x-4 xl:translate-x-8 lg:self-end float-slow-delay-1',
    },
    {
      id: 'impact',
      icon: Sprout,
      iconBg: 'bg-[#7fe7c4]',
      iconColor: 'text-[#065f36]',
      title: 'Real Impact',
      description: 'Stronger communities and a healthier planet',
      desktopOffset: 'lg:-translate-x-4 xl:-translate-x-6 lg:self-center float-slow-delay-2',
    }
  ];

  return (
    <div className="w-full lg:w-1/2 flex-1 relative z-20 flex flex-col gap-3.5 sm:gap-4 lg:gap-5 justify-center max-w-[540px] lg:max-w-[460px] xl:max-w-[500px] mx-auto lg:mx-0">
      {cards.map((card) => {
        const IconComponent = card.icon;
        return (
          <div
            key={card.id}
            onClick={() => onCardClick ? onCardClick(card.id) : alert(`Clicked ${card.title}`)}
            className={`w-full max-w-full lg:max-w-[270px] xl:max-w-[290px] ${card.desktopOffset} glass-panel rounded-[20px] md:rounded-[24px] p-3 sm:p-3.5 md:p-4 flex items-center gap-3 sm:gap-3.5 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-white/80 group shrink-0`}
          >
            {/* Circular Colored Icon Container */}
            <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform`}>
              <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>

            {/* Title & Description */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xs sm:text-[13px] md:text-[14px] font-bold text-gray-900 leading-tight group-hover:text-emerald-800 transition-colors">
                {card.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-gray-600 font-medium leading-snug mt-0.5 line-clamp-2">
                {card.description}
              </p>
            </div>

            {/* Arrow Button */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/60 group-hover:bg-white flex items-center justify-center text-gray-700 group-hover:text-emerald-700 shrink-0 transition-all border border-white/60">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
