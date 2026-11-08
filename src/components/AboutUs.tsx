import React from 'react';
import { Heart, Coffee, Globe, Linkedin } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative background subtle glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D97757]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#016278]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F0E6] border border-[#016278]/15 text-[#016278] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-[#D97757]" />
            About Us
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#016278] font-bold leading-tight tracking-tight">
            Two friends. Two perspectives. <br className="hidden sm:inline" />
            <span className="italic text-[#D97757]">One shared idea.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5A40] leading-relaxed pt-2">
            Marta, from Zaragoza, and Pilar, from Mallorca, met in Madrid in 2006, during their very first week at university. They quickly became close friends, beginning a friendship that would eventually span countries, careers, families, and countless summers in Spain.
          </p>
        </div>

        {/* Two Founders Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-8 sm:mb-10">
          
          {/* Marta Profile */}
          <div className="bg-[#E4F2EF] rounded-3xl p-7 sm:p-9 border border-[#016278]/20 shadow-sm relative flex flex-col justify-between hover:border-[#016278]/40 transition-all">
            <div className="space-y-5">
              <div className="flex items-center gap-4 sm:gap-5">
                <img
                  src="/marta.png"
                  alt="Marta"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white shadow-md object-cover shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#016278] font-bold tracking-tight">
                      Marta
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/marta-valer-74a82a41/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/80 hover:bg-[#016278] text-[#016278] hover:text-white transition-all shadow-xs"
                      title="Marta on LinkedIn"
                      aria-label="Marta's LinkedIn profile"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#016278]/90">
                    The US Family Perspective
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#016278]/90 leading-relaxed">
                A Spanish mom living in Marin County, California, raising two young boys and working full-time. For years, she’s spent her summers between the US and Spain, and knows firsthand the challenge of making work, childcare and a meaningful summer abroad fit together.
              </p>

              <div className="pt-1">
                <a
                  href="https://www.linkedin.com/in/marta-valer-74a82a41/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#016278] hover:text-[#D97757] transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Connect with Marta on LinkedIn</span>
                  <span className="text-[#D97757] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#016278]/15 bg-white/70 p-4 rounded-2xl">
              <p className="text-xs font-bold text-[#016278] uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D97757] shrink-0" />
                The US Working Family Perspective
              </p>
              <p className="text-xs text-[#5A5A40] mt-1.5 leading-relaxed">
                Having navigated dual-career remote schedules and international travel with young kids, Marta represents the needs of US-based remote families.
              </p>
            </div>
          </div>

          {/* Pilar Profile */}
          <div className="bg-[#E4F2EF] rounded-3xl p-7 sm:p-9 border border-[#016278]/20 shadow-sm relative flex flex-col justify-between hover:border-[#016278]/40 transition-all">
            <div className="space-y-5">
              <div className="flex items-center gap-4 sm:gap-5">
                <img
                  src="/pilar.png"
                  alt="Pilar"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white shadow-md object-cover shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#016278] font-bold tracking-tight">
                      Pilar
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/zafortezapilar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/80 hover:bg-[#016278] text-[#016278] hover:text-white transition-all shadow-xs"
                      title="Pilar on LinkedIn"
                      aria-label="Pilar's LinkedIn profile"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#016278]/90">
                    The Mallorca Perspective
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#016278]/90 leading-relaxed">
                Born and raised in Mallorca, a working mom of three and a marketer. She brings the local knowledge, relationships and instinct for where to go, and where not to go in high season.
              </p>

              <div className="pt-1">
                <a
                  href="https://www.linkedin.com/in/zafortezapilar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#016278] hover:text-[#D97757] transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Connect with Pilar on LinkedIn</span>
                  <span className="text-[#D97757] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#016278]/15 bg-white/70 p-4 rounded-2xl">
              <p className="text-xs font-bold text-[#016278] uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D97757] shrink-0" />
                The Local Mediterranean Perspective
              </p>
              <p className="text-xs text-[#5A5A40] mt-1.5 leading-relaxed">
                With deep roots in Mallorca and first-hand knowledge of Mediterranean coastal life, Pilar brings the authentic local knowledge, partnerships, and relationships behind A Local Summer.
              </p>
            </div>
          </div>

        </div>

        {/* Tagline from Screenshot */}
        <div className="text-center my-10 sm:my-14 max-w-3xl mx-auto px-4">
          <p className="font-serif italic text-2xl sm:text-3xl text-[#016278] font-bold leading-snug">
            “Together, we’re creating the summer experience we wish already existed.”
          </p>
        </div>

        {/* Three Lives in One Day Showcase */}
        <div className="bg-[#016278] text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-14 sm:mb-16 relative overflow-hidden">
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
