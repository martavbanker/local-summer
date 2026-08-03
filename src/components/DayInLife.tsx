import React from 'react';
import { Sun, Briefcase, Moon } from 'lucide-react';

export const DayInLife: React.FC = () => {
  return (
    <section id="a-day-in-life" className="bg-[#016278] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#D97757]/20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#D97757] uppercase block">
            SPANISH SUMMER RHYTHM
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Three lives in one day
          </h2>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed">
            Designed around US working hours (EDT/CDT/PDT) so parents focus deeply while kids build lifelong Mediterranean memories.
          </p>
        </div>

        {/* Three Lives in One Day Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          {/* Mornings */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-white/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#D97757] flex items-center justify-center text-white">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white">Mornings: Living Locally</h3>
            <p className="text-xs sm:text-sm text-[#D2EFEC] leading-relaxed">
              Exploring with the children, enjoying long breakfasts, visiting the beach, wandering through towns, and settling into the everyday rhythm of Spain.
            </p>
          </div>

          {/* Afternoons */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-white/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#00A692] flex items-center justify-center text-white">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white">Afternoons: Remote Work</h3>
            <p className="text-xs sm:text-sm text-[#D2EFEC] leading-relaxed">
              Afternoons and early evenings are for work. Parents work remotely during US business hours while the children spend time with trusted caregivers and fun activities.
            </p>
          </div>

          {/* Nights & Weekends */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-white/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#D97757] flex items-center justify-center text-white">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white">Nights & Weekends: Family Time</h3>
            <p className="text-xs sm:text-sm text-[#D2EFEC] leading-relaxed">
              Thanks to Spain’s later schedule, there is still time after work to meet friends, enjoy dinner together, or spend warm evenings outside. Weekends are reserved for fully immersing in Spanish life.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};


