import React from 'react';
import { Heart, Coffee, Globe, Compass, Users } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative background subtle glows/blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D97757]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#016278]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F0E6] border border-[#016278]/15 text-[#016278] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-[#D97757]" />
            About Us
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#016278] font-normal leading-tight">
            Two friends, two perspectives, <br className="hidden sm:inline" />
            <span className="italic text-[#D97757]">one shared idea</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5A40] leading-relaxed pt-2">
            Marta, from Zaragoza, and Pilar, from Mallorca, met in Madrid in 2006, during their very first week at university. They quickly became close friends, beginning a friendship that would eventually span countries, careers, families, and countless summers in Spain.
          </p>
        </div>

        {/* Two Founders Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
          
          {/* Pilar Profile */}
          <div className="bg-[#F8F6F0] rounded-3xl p-8 sm:p-10 border border-[#016278]/15 shadow-sm relative flex flex-col justify-between space-y-6 hover:border-[#016278]/30 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#016278]/15 pb-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#016278] font-semibold">Pilar</h3>
                  <p className="text-xs uppercase tracking-wider font-bold text-[#D97757]">Mallorca & Madrid</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#016278]/10 flex items-center justify-center text-[#016278]">
                  <Compass className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-[#5A5A40] leading-relaxed">
                Pilar began her career internationally, living in Berlin and Paris before returning to Madrid. She now lives there with her husband Javi, and their three children, ages two, four, and five.
              </p>
            </div>
            <div className="pt-4 border-t border-[#016278]/10 bg-[#F5F0E6]/60 p-4 rounded-2xl">
              <p className="text-xs font-semibold text-[#016278] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D97757] shrink-0" />
                The Local Mediterranean Perspective
              </p>
              <p className="text-xs text-[#5A5A40] mt-1 leading-normal">
                With deep roots in Mallorca and first-hand knowledge of Mediterranean coastal life, Pilar brings the authentic local knowledge, partnerships, and relationships behind A Local Summer.
              </p>
            </div>
          </div>

          {/* Marta Profile */}
          <div className="bg-[#F8F6F0] rounded-3xl p-8 sm:p-10 border border-[#016278]/15 shadow-sm relative flex flex-col justify-between space-y-6 hover:border-[#016278]/30 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#016278]/15 pb-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#016278] font-semibold">Marta</h3>
                  <p className="text-xs uppercase tracking-wider font-bold text-[#D97757]">Marin County, CA & Zaragoza</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#D97757]/10 flex items-center justify-center text-[#D97757]">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-[#5A5A40] leading-relaxed">
                Marta moved to the United States 14 years ago to pursue her MBA. There, she met her husband, James, and built a life and family in Marin County, California, where they live with their two boys, ages three and five.
              </p>
            </div>
            <div className="pt-4 border-t border-[#016278]/10 bg-[#F5F0E6]/60 p-4 rounded-2xl">
              <p className="text-xs font-semibold text-[#016278] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D97757] shrink-0" />
                The US Working Family Perspective
              </p>
              <p className="text-xs text-[#5A5A40] mt-1 leading-normal">
                Having navigated dual-career remote schedules and international travel with young kids, Marta represents the needs and aspirations of US-based remote families.
              </p>
            </div>
          </div>

        </div>

        {/* Three Lives in One Day Showcase */}
        <div className="bg-[#016278] text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 sm:mb-20 relative overflow-hidden">
          <div className="max-w-4xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D2EFEC] block">
              Marta's Summer Discovery
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-normal leading-relaxed">
              Every summer, Marta returns to Spain with her children. Over time, she developed what she calls <span className="italic text-[#F8C3B1]">“three lives in one day”</span>. This is the concept we want to bring to more families.
            </h3>
          </div>
        </div>

        {/* The Spark & Mission Quote Box */}
        <div className="bg-[#F5F0E6] border border-[#016278]/20 rounded-3xl p-8 sm:p-12 relative">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mx-auto">
                <Coffee className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#016278]">
                Over coffee in Madrid
              </p>
              <blockquote className="font-serif text-xl sm:text-3xl text-[#016278] italic leading-snug max-w-3xl mx-auto">
                “What if families did not have to choose between staying committed to their careers and creating unforgettable summer memories abroad?”
              </blockquote>
              <p className="text-sm font-bold text-[#D97757] uppercase tracking-wider">
                That question became A Local Summer.
              </p>
            </div>

            <div className="border-t border-[#016278]/15 pt-8 text-center max-w-3xl mx-auto space-y-4">
              <p className="text-sm sm:text-base text-[#5A5A40] leading-relaxed">
                Together, Marta and Pilar combine two essential perspectives: a deep understanding of the needs of US-based working families and genuine local knowledge of Mediterranean life and relationships.
              </p>
              <p className="text-sm sm:text-base text-[#5A5A40] leading-relaxed font-medium">
                Their goal is to create a thoughtfully designed summer experience where parents can continue working, children can enjoy enriching local activities, and the whole family can experience Spain in a way that feels authentic, connected, and unhurried.
              </p>
              <p className="text-xs text-[#016278] italic font-serif text-center pt-2">
                An idea rooted in their own lives, and in a shared belief that families should not have to wait to enjoy them.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
