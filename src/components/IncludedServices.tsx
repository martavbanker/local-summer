import React from 'react';
import { INCLUDED_SERVICES } from '../data';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const IncludedServices: React.FC = () => {
  return (
    <section id="what-we-cover" className="bg-[#F5F0E6] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#016278]/20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#016278] uppercase block">
            WHAT'S INCLUDED
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#5A5A40] leading-[1.12]">
            Everything you need for a family summer in Spain, handled for you.
          </h2>
          <p className="text-base sm:text-lg text-[#5A5A40]/85 font-normal">
            Our inaugural Summer 2027 edition includes comprehensive logistical support:
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4">
          {INCLUDED_SERVICES.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#016278]/20 pb-5 flex items-start gap-3 group"
            >
              <CheckCircle2 className="w-5 h-5 text-[#D97757] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="space-y-1">
                <h3 className="font-bold text-base sm:text-lg text-[#016278] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5A40] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Peace of mind callout */}
        <div className="pt-8 space-y-6">
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 border border-[#016278]/20 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-[#016278] font-bold text-xs tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4 text-[#D97757]" />
              PEACE OF MIND GUARANTEE
            </div>
            <p className="text-base sm:text-lg text-[#5A5A40] font-normal leading-relaxed">
              No tourist traps. No endless research rabbit holes. No awkward message threads asking acquaintances if they “know someone in Spain.”
            </p>
          </div>

          <p className="font-serif text-3xl sm:text-5xl text-[#016278] font-normal pt-2">
            We have Spain covered.
          </p>
        </div>

      </div>
    </section>
  );
};
