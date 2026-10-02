import React from 'react';
import { Recycle, Flame, Trash2 } from 'lucide-react';

export default function PlasticCrisisCard() {
  return (
    <div className="glass-panel rounded-[24px] p-6 sm:p-8 border border-red-400/35 shadow-xl bg-white/80 backdrop-blur-xl flex flex-col justify-between h-full">
      
      <div>
        {/* Heading */}
        <h4 className="text-xl sm:text-2xl font-extrabold text-[#FF3038] tracking-tight mb-6 flex items-center justify-center lg:justify-start gap-2">
          The Plastic Crisis
        </h4>

        {/* 3 Metric Rows */}
        <div className="flex flex-col gap-5 mb-6">
          
          {/* Metric 1: 9% Recycled */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-red-100/80 text-[#FF3038] flex items-center justify-center shrink-0 border border-red-200">
              <Recycle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[#FF3038] leading-none block">
                9%
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Recycled
              </span>
            </div>
          </div>

          {/* Metric 2: 12% Incinerated */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-red-100/80 text-[#FF3038] flex items-center justify-center shrink-0 border border-red-200">
              <Flame className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[#FF3038] leading-none block">
                12%
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Incinerated
              </span>
            </div>
          </div>

          {/* Metric 3: 79% In landfills or nature */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-red-100/80 text-[#FF3038] flex items-center justify-center shrink-0 border border-red-200">
              <Trash2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[#FF3038] leading-none block">
                79%
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                In landfills or nature
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Detailed Explanation */}
      <div className="pt-4 border-t border-red-200/60">
        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
          Only 9% of all plastic ever made has been recycled and 12% incinerated. The remaining 79% has accumulated in landfills or the natural environment. Plastic leaching pollutes both land and air.
        </p>
      </div>

    </div>
  );
}
