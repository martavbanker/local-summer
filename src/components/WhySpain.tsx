import React, { useState } from 'react';
import { SPAIN_HIGHLIGHTS, FALLBACK_IMAGES } from '../data';
import { Sun, Utensils, HeartHandshake, Compass, Sparkles, Trophy, MapPin } from 'lucide-react';

interface WhySpainProps {
  onJoinWaitlist: () => void;
}

export const WhySpain: React.FC<WhySpainProps> = ({ onJoinWaitlist }) => {
  const [selectedHighlight, setSelectedHighlight] = useState(SPAIN_HIGHLIGHTS[0]);

  return (
    <section id="why-spain" className="bg-[#FDFBF7] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Content - Elegant & Concise */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#016278] uppercase block">
            WHY SPAIN?
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#5A5A40] leading-[1.12]">
            A slow-paced life under 12 hours of guaranteed summer sunshine.
          </h2>

          <p className="text-base sm:text-xl text-[#5A5A40]/90 font-normal leading-relaxed">
            Sunny days. A vibrant Mediterranean culture, incredible food scene, world-class sports facilities, and an unforgettable environment for remote-working families.
          </p>

          {/* Key Highlight Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-4">
            <div className="bg-[#F5F0E6] p-3.5 rounded-2xl border border-[#016278]/15 space-y-1 text-center">
              <Sparkles className="w-5 h-5 text-[#D97757] mx-auto" />
              <span className="text-xs font-bold text-[#016278] block">Slow-Paced Life</span>
            </div>

            <div className="bg-[#F5F0E6] p-3.5 rounded-2xl border border-[#016278]/15 space-y-1 text-center">
              <Sun className="w-5 h-5 text-[#D97757] mx-auto" />
              <span className="text-xs font-bold text-[#016278] block">12h Sunshine</span>
            </div>

            <div className="bg-[#F5F0E6] p-3.5 rounded-2xl border border-[#016278]/15 space-y-1 text-center">
              <Utensils className="w-5 h-5 text-[#D97757] mx-auto" />
              <span className="text-xs font-bold text-[#016278] block">Incredible Food</span>
            </div>

            <div className="bg-[#F5F0E6] p-3.5 rounded-2xl border border-[#016278]/15 space-y-1 text-center">
              <HeartHandshake className="w-5 h-5 text-[#D97757] mx-auto" />
              <span className="text-xs font-bold text-[#016278] block">Vibrant Culture</span>
            </div>

            <div className="bg-[#F5F0E6] col-span-2 sm:col-span-1 p-3.5 rounded-2xl border border-[#016278]/15 space-y-1 text-center">
              <Trophy className="w-5 h-5 text-[#D97757] mx-auto" />
              <span className="text-xs font-bold text-[#016278] block">Sports, Clubs & Adventures</span>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onJoinWaitlist}
              className="bg-[#D97757] hover:bg-[#c46142] text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              JOIN THE SUMMER 2027 WAITLIST
            </button>
          </div>
        </div>

        {/* Highlights Selector Grid */}
        <div className="pt-8 border-t border-[#016278]/20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#016278] uppercase flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#D97757]" />
                THE SPANISH SUMMER EXPERIENCE
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#5A5A40] font-normal mt-1">
                Why Spain is the ultimate summer home
              </h3>
            </div>
            <p className="text-xs text-[#5A5A40]/70 mt-2 md:mt-0">
              Click any element to explore Mediterranean life
            </p>
          </div>

          {/* Selector Tabs & Preview Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Tabs List */}
            <div className="lg:col-span-5 space-y-3">
              {SPAIN_HIGHLIGHTS.map((item) => {
                const isActive = selectedHighlight.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedHighlight(item)}
                    className={`w-full text-left p-4 rounded-xl transition-all border flex items-start justify-between ${
                      isActive
                        ? 'bg-[#016278] text-white border-[#016278] shadow-md'
                        : 'bg-[#F5F0E6] text-[#5A5A40] border-transparent hover:bg-[#EDE6D8]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${isActive ? 'text-[#D97757]' : 'text-[#016278]'}`} />
                        <span className="font-serif text-lg font-medium">{item.name}</span>
                      </div>
                      <span className={`text-xs block mt-0.5 ${isActive ? 'text-white/80' : 'text-[#5A5A40]/70'}`}>
                        {item.region}
                      </span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] bg-[#D97757] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Location Feature Visual Card */}
            <div className="lg:col-span-7 bg-[#F5F0E6] rounded-2xl overflow-hidden border border-[#016278]/20 shadow-sm flex flex-col md:flex-row min-h-[340px]">
              <div className="w-full md:w-1/2 min-h-[280px] md:min-h-[340px] relative overflow-hidden bg-[#E2D9C8]">
                <img
                  key={selectedHighlight.id}
                  src={selectedHighlight.image}
                  alt={selectedHighlight.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const fallbackKey = selectedHighlight.id === 'slow-life' ? 'village' :
                                       selectedHighlight.id === 'sunshine' ? 'cove' :
                                       selectedHighlight.id === 'food-scene' ? 'tapasTable' :
                                       selectedHighlight.id === 'culture' ? 'palmaOldTown' : 'sailing';
                    (e.target as HTMLImageElement).src = FALLBACK_IMAGES[fallbackKey as keyof typeof FALLBACK_IMAGES] || FALLBACK_IMAGES.village;
                  }}
                />
                <div className="absolute top-3 left-3 z-10 bg-[#016278]/90 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                  {selectedHighlight.region}
                </div>
              </div>

              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h4 className="font-serif text-2xl text-[#016278] font-normal">
                    {selectedHighlight.name}
                  </h4>
                  <p className="text-sm text-[#5A5A40] leading-relaxed">
                    {selectedHighlight.description}
                  </p>
                </div>

                <div className="bg-[#016278]/5 border border-[#016278]/15 rounded-xl p-3.5 space-y-1">
                  <span className="text-[11px] font-bold text-[#D97757] uppercase tracking-wider block">
                    Daily Highlight
                  </span>
                  <p className="text-xs text-[#5A5A40] italic font-medium">
                    "{selectedHighlight.highlight}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
