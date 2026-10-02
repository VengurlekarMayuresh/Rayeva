import React from 'react';
import { 
  Leaf, 
  ShieldCheck, 
  Recycle, 
  RefreshCw, 
  Users, 
  Box 
} from 'lucide-react';

export const impactNodesData = [
  {
    id: "carbon",
    title: "Carbon Footprint",
    fullTitle: "Carbon Footprint Reduction",
    icon: Leaf,
    description: "Understanding and reducing emissions associated with products and activities throughout their lifecycle.",
    benefits: [
      "Tracks supply chain emissions",
      "Promotes renewable energy use",
      "Offsets unavoidable footprint",
      "Encourages local sourcing"
    ],
    position: "top-[-10px] left-[8%] sm:left-[12%]"
  },
  {
    id: "verification",
    title: "Verification",
    fullTitle: "Supplier & Impact Verification",
    icon: ShieldCheck,
    description: "Building trust through measurable, third-party certified and transparent sustainability practices.",
    benefits: [
      "100% verified eco certifications",
      "Fair-trade labor standards",
      "Microplastic-free compliance",
      "Transparent impact reports"
    ],
    position: "top-[-10px] right-[8%] sm:right-[12%]"
  },
  {
    id: "recycle",
    title: "Recycle",
    fullTitle: "Recycling",
    icon: Recycle,
    description: "Transforming used materials into new resources, reducing waste and environmental impact.",
    benefits: [
      "Conserves natural resources",
      "Reduces landfill waste",
      "Lowers carbon emissions",
      "Supports circular economy"
    ],
    position: "top-[40%] right-[-16px] sm:right-[-28px]"
  },
  {
    id: "plastic-free",
    title: "Plastic Free",
    fullTitle: "Plastic Free Packaging & Living",
    icon: Box,
    description: "Eliminating dependence on unnecessary single-use plastics across packaging, shipping, and daily essentials.",
    benefits: [
      "Home-compostable mailers",
      "Zero microplastic shedding",
      "Plant-based protective wrap",
      "Infinite recyclable packaging"
    ],
    position: "bottom-[-10px] right-[8%] sm:right-[12%]"
  },
  {
    id: "enterprises",
    title: "Supporting Ethical Enterprises",
    fullTitle: "Supporting Ethical Enterprises",
    icon: Users,
    description: "Empowering responsible grass-root businesses, artisan co-ops, and sustainable production networks.",
    benefits: [
      "Fair wages for makers",
      "Direct artisan partnership",
      "Empowers rural communities",
      "Supports green innovation"
    ],
    position: "bottom-[-10px] left-[8%] sm:left-[12%]"
  },
  {
    id: "upcycle",
    title: "Upcycle",
    fullTitle: "Upcycling & Circular Design",
    icon: RefreshCw,
    description: "Giving existing post-consumer materials a new high-value purpose and extending their useful life.",
    benefits: [
      "Diverts textile & plastic waste",
      "Requires less raw energy",
      "Creates unique artisan goods",
      "Zero landfill degradation"
    ],
    position: "top-[40%] left-[-16px] sm:left-[-28px]"
  }
];

export default function ImpactGlobe({ activeNodeId, onSelectNode }) {
  return (
    <div className="relative w-full aspect-square max-w-[450px] sm:max-w-[500px] mx-auto flex items-center justify-center py-8">
      
      {/* SVG Connecting Curved Glowing Orbital Rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        <circle
          cx="50%"
          cy="50%"
          r="44%"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          className="animate-spin-slow opacity-75"
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00BFAE" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#21B573" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#008FD5" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      {/* CENTRAL 3D GLOBE SPHERE */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full shadow-2xl flex items-center justify-center z-10 group overflow-hidden border-4 border-teal-300/50">
        
        {/* High Quality Globe Earth Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-full transform group-hover:scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: "url('/globe.jpg')"
          }}
        />

        {/* Luminous Atmospheric Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#003d32]/70 via-[#005f4e]/40 to-[#00bfae]/25 backdrop-blur-3xs rounded-full" />
        <div className="absolute inset-0 shadow-inner rounded-full pointer-events-none border-2 border-emerald-300/50" />

        {/* Central Headline inside Globe */}
        <div className="relative z-10 text-center px-4">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-lg">
            Scaling<br />Sustainable<br />Practices
          </h3>
        </div>
      </div>

      {/* 6 CIRCULAR GLASS NODES ORBITING IN PERFECT RING */}
      {impactNodesData.map((node) => {
        const NodeIcon = node.icon;
        const isActive = activeNodeId === node.id;

        return (
          <div
            key={node.id}
            onClick={() => onSelectNode(node)}
            className={`absolute z-20 ${node.position} cursor-pointer transition-all duration-300 transform group`}
          >
            {/* Circular Glass Disc Badge matching reference image */}
            <div
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border flex flex-col items-center justify-center p-2 text-center transition-all duration-300 shadow-xl ${
                isActive
                  ? 'bg-gradient-to-b from-[#00bfae]/95 to-[#21b573]/95 text-white border-white scale-110 shadow-emerald-500/50 shadow-2xl ring-4 ring-emerald-400/40'
                  : 'bg-teal-900/60 hover:bg-teal-800/80 text-white border-teal-300/70 backdrop-blur-md hover:scale-105 hover:border-white hover:shadow-2xl'
              }`}
            >
              {/* Inner Emerald Circle Icon Badge */}
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-md mb-1 transition-transform group-hover:scale-110 shrink-0 ${
                  isActive
                    ? 'bg-white text-emerald-800'
                    : 'bg-emerald-600 text-white border border-emerald-400/60'
                }`}
              >
                <NodeIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.3]" />
              </div>

              {/* Centered White Title Text inside Circle */}
              <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight text-center max-w-[75px] drop-shadow-md">
                {node.title}
              </span>
            </div>
          </div>
        );
      })}

      {/* FLOATING AMBIENT LEAF ACCENTS */}
      <div className="absolute top-6 left-6 text-emerald-400/70 animate-bounce pointer-events-none">
        <Leaf className="w-5 h-5" />
      </div>
      <div className="absolute bottom-8 right-8 text-teal-400/70 animate-pulse pointer-events-none">
        <Leaf className="w-6 h-6 rotate-45" />
      </div>

    </div>
  );
}
