import React, { useState } from 'react';
import ImpactHeader from './ImpactHeader';
import PlasticCrisisCard from './PlasticCrisisCard';
import ImpactGlobe, { impactNodesData } from './ImpactGlobe';
import ImpactDetailCard from './ImpactDetailCard';
import ImpactMetrics from './ImpactMetrics';

export default function OurImpact() {
  const [activeNode, setActiveNode] = useState(impactNodesData[0]);

  return (
    <section className="relative w-full py-12 sm:py-16 overflow-hidden text-slate-900 select-none">
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 md:px-8">
        
        {/* SECTION HEADER */}
        <ImpactHeader />

        {/* THREE-COLUMN MAIN IMPACT COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* LEFT: Plastic Crisis Card (3 cols on desktop) */}
          <div className="lg:col-span-3">
            <PlasticCrisisCard />
          </div>

          {/* CENTER: Interactive Sustainability Globe (6 cols on desktop) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <ImpactGlobe
              activeNodeId={activeNode.id}
              onSelectNode={(node) => setActiveNode(node)}
            />
          </div>

          {/* RIGHT: Dynamic Impact Detail Card (3 cols on desktop) */}
          <div className="lg:col-span-3">
            <ImpactDetailCard activeNode={activeNode} />
          </div>

        </div>

        {/* BOTTOM METRICS CARD */}
        <ImpactMetrics />

      </div>

    </section>
  );
}
