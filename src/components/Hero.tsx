import React from 'react';
import { IMAGES, FALLBACK_IMAGES } from '../data';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Spanish Mediterranean coastline turquoise cove and rustic stone architecture"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = FALLBACK_IMAGES.hero;
          }}
        />
        {/* Vibrant Teal Green Mediterranean Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#132E2D]/90 via-[#016278]/70 to-[#02858D]/45 backdrop-brightness-[0.88]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6 sm:space-y-8 mt-10">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest text-white/95 uppercase">
          <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse"></span>
          SPAIN · SUMMER 2027
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08] text-white max-w-4xl mx-auto drop-shadow-sm">
  Spend your summer <br className="hidden sm:block" />
  <span className="italic text-[#F8C3B1]">living in Spain</span>.
</h1>

        {/* Lead statement */}
        <p className="text-lg sm:text-2xl font-medium text-white/95 max-w-2xl mx-auto leading-relaxed">
          Live in Spain. Keep working. Give your family an unforgettable Spanish summer.
        </p>

        {/* Narrative Body */}
        <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto font-normal leading-relaxed text-balance pt-2">
          A thoughtfully designed summer immersion for remote-working families. Keep your US schedule and career routine while your children explore, learn Spanish, and play along the Mediterranean coast.
        </p>

        {/* Action Button & Micro-copy */}
        <div className="pt-4 flex flex-col items-center space-y-4">
          <button
            onClick={onJoinWaitlist}
            id="hero-cta-button"
            className="bg-[#D97757] hover:bg-[#c46142] text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D97757]"
          >
            JOIN THE SUMMER 2027 WAITLIST
          </button>

          <p className="text-xs text-white/75 max-w-md italic">
            Intentionally small cohort for our inaugural edition. Join the waitlist for priority access to dates and curated apartments.
          </p>
        </div>
      </div>

      {/* Subtle Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none" />
    </section>
  );
};
