import React from 'react';

export const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="bg-[#016278] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#D97757]/20">
      <div className="max-w-6xl mx-auto space-y-12">
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

        {/* 3 Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6">
          
          {/* Card 1: FOR THE KIDS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#D97757]/60 transition-all group">
            <div className="space-y-4">
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
            <p className="text-xs text-white/75 italic border-t border-white/10 pt-4">
              They won't be waiting for your last call. They'll be on their own Mediterranean adventure.
            </p>
          </div>

          {/* Card 2: FOR THE PARENTS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#D97757]/60 transition-all group">
            <div className="space-y-4">
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
            <p className="text-xs text-[#F8C3B1] font-medium border-t border-white/10 pt-4">
              You bring the laptop. We provide the insider knowledge.
            </p>
          </div>

          {/* Card 3: FOR THE FAMILY */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#D97757]/60 transition-all group">
            <div className="space-y-4">
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
            <p className="text-xs text-white/75 italic border-t border-white/10 pt-4">
              We guide you to the genuine Spain away from tourist crowds.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
