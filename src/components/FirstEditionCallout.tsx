import React from 'react';

interface FirstEditionCalloutProps {
  onJoinWaitlist: () => void;
}

export const FirstEditionCallout: React.FC<FirstEditionCalloutProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="bg-[#016278] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#D97757]/20 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Main Title */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-white">
          We're welcoming our inaugural Spain cohort.
        </h2>

        {/* Narrative Copy */}
        <div className="space-y-4 text-white/90 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
          <p className="font-semibold text-[#F8C3B1]">
            Summer 2027 marks our first edition. We are intentionally limiting group size.
          </p>
          <p>
            An intimate group of like-minded families, handpicked Spanish coastal living, and an experience built around real flexibility.
          </p>
          <p className="text-white/80 text-sm sm:text-base pt-2">
            By joining the waitlist, you secure priority access to dates, apartment options, and early-bird pricing before public release.
          </p>
        </div>

        {/* Bottom Inviting Hook */}
        <div className="pt-6 space-y-6">
          <h3 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-snug">
            Ready to reimagine your family's summer?
          </h3>

          <div className="flex flex-col items-center space-y-3">
            <button
              onClick={onJoinWaitlist}
              className="bg-[#D97757] hover:bg-[#c46142] text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
            >
              JOIN THE SUMMER 2027 WAITLIST
            </button>

            <p className="text-xs text-white/70 max-w-md italic">
              No commitment required. Priority notification and curated Spanish Mediterranean inspiration straight to your inbox.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
