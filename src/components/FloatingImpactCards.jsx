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
      positionClass: 'lg:absolute lg:top-[12%] lg:left-[38%] xl:left-[41%] lg:translate-x-[30px] float-slow',
    },
    {
      id: 'business',
      icon: Users,
      iconBg: 'bg-[#90caee]',
      iconColor: 'text-[#0e4a7b]',
      title: 'For Businesses',
      description: 'Sustainable sourcing\nat scale',
      positionClass: 'lg:absolute lg:top-[28%] lg:left-[55%] xl:left-[57%] lg:translate-x-[80px] float-slow-delay-1',
    },
    {
      id: 'impact',
      icon: Sprout,
      iconBg: 'bg-[#7fe7c4]',
      iconColor: 'text-[#065f36]',
      title: 'Real Impact',
      description: 'Stronger communities\nand a healthier planet',
      positionClass: 'lg:absolute lg:top-[48%] lg:left-[44%] xl:left-[46%] lg:translate-x-[30px] float-slow-delay-2',
    }
  ];

  return (
    <></>
    // <>
    //   {/* DESKTOP FLOATING LAYOUT (Full Cards with Titles & Descriptions) */}
    //   <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
    //     {cards.map((card) => {
    //       const IconComponent = card.icon;
    //       return (
    //         <div
    //           key={card.id}
    //           onClick={() => onCardClick ? onCardClick(card.id) : alert(`Clicked ${card.title}`)}
    //           className={`${card.positionClass} pointer-events-auto glass-panel rounded-[22px] px-4 py-3 flex items-center gap-3.5 max-w-[270px] xl:max-w-[285px] shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-white/80 group`}
    //         >
    //           {/* Circular Icon Container */}
    //           <div className={`w-10 h-10 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform`}>
    //             <IconComponent className="w-5 h-5 stroke-[2.2]" />
    //           </div>

    //           {/* Title & Description */}
    //           <div className="flex-1 min-w-0">
    //             <h3 className="text-[13.5px] font-bold text-gray-900 leading-tight group-hover:text-emerald-800 transition-colors">
    //               {card.title}
    //             </h3>
    //             <p className="text-[10.5px] text-gray-600 font-medium leading-snug mt-0.5 whitespace-pre-line">
    //               {card.description}
    //             </p>
    //           </div>

    //           {/* Arrow Button */}
    //           <div className="w-6.5 h-6.5 rounded-full bg-white/60 group-hover:bg-white flex items-center justify-center text-gray-700 group-hover:text-emerald-700 shrink-0 transition-all border border-white/60">
    //             <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>

    //   {/* TABLET / DESKTOP ONLY (Completely hidden on mobile < 500px) */}
    //   <div className="hidden sm:flex lg:hidden relative z-20 w-full mt-3 justify-center gap-3 sm:gap-4">
    //     {cards.map((card) => {
    //       const IconComponent = card.icon;
    //       return (
    //         <div
    //           key={card.id}
    //           onClick={() => onCardClick ? onCardClick(card.id) : alert(`Clicked ${card.title}`)}
    //           className="glass-panel rounded-full p-2.5 sm:px-3 sm:py-2 flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer border border-white/80"
    //           title={card.title}
    //         >
    //           <div className={`w-8 h-8 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0`}>
    //             <IconComponent className="w-4 h-4 stroke-[2.2]" />
    //           </div>
    //           <span className="hidden sm:inline text-xs font-bold text-gray-900">
    //             {card.title}
    //           </span>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
  );
}
