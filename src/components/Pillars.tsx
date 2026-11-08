import React from 'react';
import { Sun, Briefcase, Moon } from 'lucide-react';

export const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="bg-[#016278] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#D97757]/20 scroll-mt-12">
      <div className="max-w-6xl mx-auto space-y-12 lg:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-6 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#D97757] uppercase block">
            THE EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-white">
            A Mediterranean summer. Designed around real family life.
          </h2>

          <div className="space-y-4 text-white/90 text-base sm:text-lg font-normal leading-relaxed">
            <p>
              We are creating a curated summer experience in Spain for remote-working families.
            </p>
            <p className="text-white/80">
              Not a pre-packaged tour or hectic resort schedule. We handle the logistics and infrastructure so you can thrive.
            </p>
            <p className="text-[#F8C3B1] font-medium pt-1">
              We handle the complicated details so you have full freedom for the moments that matter.
            </p>
          </div>
        </div>

        {/* Row 1: Core Pillars (No subtexts) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
          
          {/* Card 1: FOR THE KIDS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-8 space-y-4 hover:border-[#D97757]/60 transition-all group">
            <span className="text-[11px] font-bold tracking-widest text-[#D97757] uppercase block">
              01. FOR THE KIDS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-[#F8C3B1] transition-colors leading-snug">
              A summer they'll talk about for years.
            </h3>
            <p className="text-sm text-white/85 leading-relaxed">
              A thoughtfully structured local summer program aligned with US working hours.
            </p>
            <p className="text-sm text-white/85 leading-relaxed">
              New international friends, marine sports, creative arts, nature discovery, and conversational Spanish with native instructors.
            </p>
          </div>

          {/* Card 2: FOR THE PARENTS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-8 space-y-4 hover:border-[#D97757]/60 transition-all group">
            <span className="text-[11px] font-bold tracking-widest text-[#D97757] uppercase block">
              02. FOR THE PARENTS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-[#F8C3B1] transition-colors leading-snug">
              Keep your career. Change your view.
            </h3>
            <p className="text-sm text-white/85 leading-relaxed">
              Seamlessly maintain your normal US work schedule from Spain.
            </p>
            <p className="text-sm text-white/85 leading-relaxed">
              Fast Wi-Fi workspaces, curated family apartments, local concierge support, and effortless logistics handled end-to-end.
            </p>
          </div>

          {/* Card 3: FOR THE FAMILY */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-8 space-y-4 hover:border-[#D97757]/60 transition-all group">
            <span className="text-[11px] font-bold tracking-widest text-[#D97757] uppercase block">
              03. FOR THE FAMILY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-[#F8C3B1] transition-colors leading-snug">
              Don't just visit Spain. Live it.
            </h3>
            <p className="text-sm text-white/85 leading-relaxed">
              Experience authentic coastal life: morning swims at the beach, bustling farmers markets, local cafes, and tapas dinners under the stars.
            </p>
            <p className="text-sm text-white/85 leading-relaxed">
              Boats, mountain hikes, coastal vineyards, tennis, golf, and the timeless Mediterranean pace of life.
            </p>
          </div>

        </div>

        {/* Row 2: Daily Life Title & Multi-Toned Tiles */}
        <div id="a-day-in-life" className="pt-8 border-t border-white/15 space-y-6 scroll-mt-16">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#D97757] uppercase block">
              THE RHYTHM
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white">
              Daily Life
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mornings: Living Locally (Warm Cream) */}
            <div className="bg-[#F5F0E6] rounded-3xl p-7 sm:p-8 space-y-4 shadow-sm border border-[#D97757]/20 hover:border-[#D97757]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D97757]/15 flex items-center justify-center text-[#D97757]">
                <Sun className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#016278]">
                Mornings: Living Locally
              </h4>
              <p className="text-xs sm:text-sm text-[#5A5A40] leading-relaxed">
                Exploring with the children, enjoying long breakfasts, visiting the beach, wandering through towns, and settling into the everyday rhythm of Spain.
              </p>
            </div>

            {/* Afternoons: Remote Work (Soft Mint / Light Teal) */}
            <div className="bg-[#E4F2EF] rounded-3xl p-7 sm:p-8 space-y-4 shadow-sm border border-[#016278]/25 hover:border-[#016278]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#016278]/15 flex items-center justify-center text-[#016278]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#016278]">
                Afternoons: Remote Work
              </h4>
              <p className="text-xs sm:text-sm text-[#016278]/90 leading-relaxed">
                Afternoons and early evenings are for work. Parents work remotely during US business hours while children spend time with trusted caregivers and fun activities.
              </p>
            </div>

            {/* Nights & Weekends: Family Time (Light Sand) */}
            <div className="bg-[#FDFBF7] rounded-3xl p-7 sm:p-8 space-y-4 shadow-sm border border-[#D97757]/20 hover:border-[#D97757]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D97757]/15 flex items-center justify-center text-[#D97757]">
                <Moon className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#016278]">
                Nights & Weekends: Family Time
              </h4>
              <p className="text-xs sm:text-sm text-[#5A5A40] leading-relaxed">
                Thanks to Spain’s later schedule, there is still time after work to meet friends, enjoy dinner together, or spend warm evenings outside. Weekends are reserved for fully immersing in Spanish life.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
