import React from 'react';
import { Leaf, CheckCircle2, MousePointerClick } from 'lucide-react';

export default function ImpactDetailCard({ activeNode }) {
  const IconComp = activeNode.icon || Leaf;

  return (
    <div className="glass-panel rounded-[24px] p-6 sm:p-8 border border-white/90 shadow-xl bg-white/85 backdrop-blur-xl flex flex-col justify-between h-full transition-all duration-500 animate-fadeIn">
      
      <div>
        {/* Top Header: Icon Disc + Title */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#21B573] to-[#00BFAE] text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
            <IconComp className="w-6 h-6 stroke-[2.2]" />
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#102A43] tracking-tight">
              {activeNode.fullTitle || activeNode.title}
            </h4>
            <span className="text-[11px] font-bold text-[#00BFAE] uppercase tracking-wider block">
              Rayeva Impact Module
            </span>
          </div>
        </div>

        {/* Detailed Node Description */}
        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-6">
          {activeNode.description}
        </p>

        {/* Benefit Items Checklist */}
        <div className="flex flex-col gap-2.5 mb-6">
          {activeNode.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-xl px-3.5 py-2.5 border border-slate-200/80 shadow-2xs flex items-center gap-3"
            >
              <CheckCircle2 className="w-4.5 h-4.5 text-[#21B573] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Instructions Hint */}
      <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500 font-semibold">
        <MousePointerClick className="w-4 h-4 text-[#00BFAE] animate-bounce" />
        <span>Click on different sections on the tree to explore more</span>
      </div>

    </div>
  );
}
