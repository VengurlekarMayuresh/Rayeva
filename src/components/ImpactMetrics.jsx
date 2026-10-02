import React from 'react';
import { Leaf, Users, Globe, Recycle } from 'lucide-react';

export default function ImpactMetrics() {
  const metrics = [
    {
      id: 'products',
      val: '10M+',
      label: 'Sustainable products made accessible',
      icon: Leaf,
      color: 'text-[#21B573]'
    },
    {
      id: 'brands',
      val: '500+',
      label: 'Sustainable brands and partners',
      icon: Users,
      color: 'text-[#00BFAE]'
    },
    {
      id: 'communities',
      val: '50K+',
      label: 'Communities impacted globally',
      icon: Globe,
      color: 'text-[#008FD5]'
    },
    {
      id: 'waste',
      val: '1M+',
      label: 'kg of waste diverted from landfills',
      icon: Recycle,
      color: 'text-emerald-600'
    },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto mt-14 relative z-10">
      <div className="glass-panel rounded-[24px] p-6 sm:p-8 border border-white/90 shadow-2xl bg-white/85 backdrop-blur-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/70">
          {metrics.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 pt-4 sm:pt-0 first:pt-0 lg:px-4 first:pl-0 last:pr-0"
              >
                <div className={`w-12 h-12 rounded-2xl bg-slate-100/90 ${item.color} flex items-center justify-center shrink-0 border border-slate-200/80 shadow-2xs`}>
                  <IconComp className="w-6 h-6 stroke-[2.2]" />
                </div>

                <div>
                  <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#102A43] via-[#00BFAE] to-[#079BD3] bg-clip-text text-transparent block leading-none mb-1">
                    {item.val}
                  </span>
                  <span className="text-xs font-bold text-slate-700 leading-snug block">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
