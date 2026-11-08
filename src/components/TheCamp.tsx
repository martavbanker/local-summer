import React from 'react';
import { School, Languages, Waves, Clock, Users, Tag, MapPin, Utensils, CheckCircle2, Sparkles } from 'lucide-react';

interface TheCampProps {
  onJoinWaitlist: () => void;
}

export const TheCamp: React.FC<TheCampProps> = ({ onJoinWaitlist }) => {
  return (
    <section id="the-camp" className="bg-[#FDFBF7] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#016278]/20 scroll-mt-12">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4F2EF] border border-[#016278]/20 text-[#016278] text-xs font-bold uppercase tracking-widest">
              <School className="w-3.5 h-3.5 text-[#D97757]" />
              Agora Portals International School · Portals Nous, Mallorca
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=Agora+Portals+International+School,+Portals+Nous,+Mallorca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#016278] hover:text-[#D97757] transition-colors group"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D97757] group-hover:scale-110 transition-transform" />
                <span>View Portals Nous, Mallorca on Google Maps</span>
                <span className="text-[#D97757] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#016278] leading-[1.12]">
            The Camp
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-[#5A5A40] leading-snug">
            The Afternoon Program at Agora Portals International School in Portals Nous, Mallorca: a blend of sport, languages and adventure for children and young people, designed for A Local Summer.
          </p>

          <p className="text-base sm:text-lg text-[#5A5A40]/90 leading-relaxed max-w-3xl pt-1">
            Carefully curated so parents can work undisturbed during US business hours while children enjoy a memorable, active Mediterranean summer in a safe, world-class international school setting.
          </p>
        </div>

        {/* 5 Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Languages */}
          <div className="bg-[#F5F0E6] rounded-3xl p-7 border border-[#016278]/20 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#016278]/40 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#016278]/10 flex items-center justify-center text-[#016278]">
                <Languages className="w-6 h-6 text-[#016278]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#016278]">
                Bilingual Staff & Spanish Lessons
              </h3>
              <p className="text-sm text-[#5A5A40] leading-relaxed">
                English-speaking staff ensure children feel secure from day one, paired with daily Spanish lessons taught by native educators.
              </p>
            </div>
            <div className="pt-2 border-t border-[#016278]/10 text-xs font-bold text-[#016278] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757]" />
              Native Spanish instruction
            </div>
          </div>

          {/* 2. Swimming */}
          <div className="bg-[#F5F0E6] rounded-3xl p-7 border border-[#016278]/20 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#016278]/40 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#016278]/10 flex items-center justify-center text-[#016278]">
                <Waves className="w-6 h-6 text-[#016278]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#016278]">
                Daily Swimming Lessons
              </h3>
              <p className="text-sm text-[#5A5A40] leading-relaxed">
                Daily swimming instruction led by certified aquatic instructors in the school’s dedicated pool facilities.
              </p>
            </div>
            <div className="pt-2 border-t border-[#016278]/10 text-xs font-bold text-[#016278] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757]" />
              Qualified, certified instructors
            </div>
          </div>

          {/* 3. Schedule & Meals */}
          <div className="bg-[#F5F0E6] rounded-3xl p-7 border border-[#016278]/20 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#016278]/40 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#016278]/10 flex items-center justify-center text-[#016278]">
                <Clock className="w-6 h-6 text-[#016278]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#016278]">
                2:00 PM – 9:00 PM
              </h3>
              <p className="text-sm text-[#5A5A40] leading-relaxed">
                Camp hours run into the evening to align seamlessly with parents' afternoon US working block. Both a wholesome afternoon snack (merienda) and balanced dinner are included.
              </p>
            </div>
            <div className="pt-2 border-t border-[#016278]/10 text-xs font-bold text-[#016278] uppercase tracking-wider flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-[#D97757]" />
              Snack & dinner included daily
            </div>
          </div>

          {/* 4. Ages & Ratios */}
          <div className="bg-[#F5F0E6] rounded-3xl p-7 border border-[#016278]/20 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#016278]/40 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#016278]/10 flex items-center justify-center text-[#016278]">
                <Users className="w-6 h-6 text-[#016278]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#016278]">
                Kids Ages 3–13 & 1:10 Ratio
              </h3>
              <p className="text-sm text-[#5A5A40] leading-relaxed">
                Age-appropriate tracks for children ages 3 to 13. A low 1:10 kid-to-instructor ratio guarantees close supervision, safety, and individual encouragement for every child.
              </p>
            </div>
            <div className="pt-2 border-t border-[#016278]/10 text-xs font-bold text-[#016278] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757]" />
              1:10 kid:instructor ratio
            </div>
          </div>

          {/* 5. Early Bird Pricing */}
          <div className="bg-[#E4F2EF] rounded-3xl p-7 border-2 border-[#016278]/30 shadow-sm flex flex-col justify-between space-y-4 md:col-span-2 lg:col-span-2 hover:border-[#016278] transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#016278] flex items-center justify-center text-white shadow-sm">
                  <Tag className="w-6 h-6 text-[#7ED2C8]" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#016278] text-white">
                  Limited Cohort Pricing
                </span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#016278]">Inaugural Edition Tuition</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#016278]">€590</span>
                  <span className="text-sm font-semibold text-[#5A5A40]">per child, per week</span>
                  <span className="text-xs text-[#D97757] font-bold uppercase tracking-wide ml-2 bg-[#D97757]/10 px-2.5 py-0.5 rounded-full">Early Bird</span>
                </div>
              </div>
              <p className="text-sm text-[#5A5A40] leading-relaxed">
                Inclusive of all sports, swimming instruction, Spanish language modules, afternoon snack, and dinner at Agora Portals International School.
              </p>
            </div>
            <div className="pt-2 border-t border-[#016278]/15 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs text-[#5A5A40] font-medium flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D97757]" />
                Priority booking access for waitlist members
              </span>
              <button
                onClick={onJoinWaitlist}
                className="text-xs font-bold uppercase tracking-wider text-[#016278] hover:text-[#D97757] transition-colors underline cursor-pointer"
              >
                Join waitlist for early-bird access &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Location & Facility Showcase Card */}
        <div className="bg-[#016278] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7ED2C8]">
              <MapPin className="w-4 h-4 text-[#D97757]" />
              The Campus Setting · Portals Nous
            </div>
            
            <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-tight">
              A premier international educational environment on Mallorca’s coast.
            </h3>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Agora Portals International School is situated in Portals Nous, just minutes from the coast. The school features state-of-the-art sports courts, an aquatic center, secure open-air play areas, and modern indoor facilities, ensuring a stimulating, safe, and enriching summer experience.
            </p>

            <div className="pt-2">
              <button
                onClick={onJoinWaitlist}
                className="bg-[#D97757] hover:bg-[#c46142] text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                JOIN THE SUMMER 2027 WAITLIST
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
