import React from 'react';

export default function TrustSection() {
  const avatars = [
    {
      name: "Emma Watson",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
    },
    {
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
    },
    {
      name: "Marcus Vance",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="flex items-center gap-3 pt-3 md:pt-4">
      {/* Overlapping Avatars */}
      <div className="flex items-center -space-x-2.5 overflow-hidden">
        {avatars.map((avatar, idx) => (
          <img
            key={idx}
            src={avatar.image}
            alt={avatar.name}
            className="inline-block h-8 w-8 md:h-9 md:w-9 rounded-full ring-2 ring-white/90 object-cover shadow-sm transition-transform hover:scale-110 hover:z-10"
          />
        ))}
      </div>

      {/* Trust Text */}
      <p className="text-[12px] md:text-[13px] font-medium leading-tight text-gray-800/90 max-w-[220px]">
        Trusted by individuals, businesses<br className="hidden sm:inline" /> and changemakers worldwide.
      </p>
    </div>
  );
}
