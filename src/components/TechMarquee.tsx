'use client';

import { techLogosData } from '@/data/portfolioData';

export default function TechMarquee() {
  // Duplicate array for seamless infinite looping
  const marqueeItems = [...techLogosData, ...techLogosData, ...techLogosData];

  return (
    <div className="w-full py-6 bg-dark-900/90 border-y border-gold-400/15 overflow-hidden relative backdrop-blur-md">
      {/* Side gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-gold-400/15 text-xs font-semibold text-gray-300 hover:text-gold-300 hover:border-gold-400/40 transition-all duration-300 shrink-0 group cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400/80 group-hover:scale-125 transition-transform" />
            <span>{item.name}</span>
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
