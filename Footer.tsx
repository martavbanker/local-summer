import React from 'react';
import { Palmtree, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onJoinWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onJoinWaitlist }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#132E2D] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#D97757]/20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                LOCAL <span className="font-serif italic text-[#D97757]">SUMMER</span>
              </span>
              <span className="text-[11px] tracking-widest uppercase font-semibold text-[#F8C3B1] pt-1">
                Spain Mediterranean Summer Experience 2027
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/80 max-w-sm leading-relaxed">
              Curated summer programs in Spain for remote-working families. Keep your career, give your children an authentic Mediterranean summer.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-[#F8C3B1]">
              <Palmtree className="w-4 h-4 text-[#D97757]" />
              <span>Coastal Towns · Beaches · Tennis & Golf · Local Markets</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D97757]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li><a href="#pillars" className="hover:text-[#F8C3B1] transition-colors">The Experience</a></li>
              <li><a href="#why-spain" className="hover:text-[#F8C3B1] transition-colors">Why Spain</a></li>
              <li><a href="#what-we-cover" className="hover:text-[#F8C3B1] transition-colors">What's Included</a></li>
              <li><a href="#a-day-in-life" className="hover:text-[#F8C3B1] transition-colors">Spanish Schedule</a></li>
              <li><a href="#faq" className="hover:text-[#F8C3B1] transition-colors">Parent FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Waitlist CTA */}
          <div className="md:col-span-4 space-y-4 md:pl-8 md:border-l md:border-white/15">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D97757]">
              Join Summer 2027
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Intentionally limited cohort for our inaugural Spain edition.
            </p>
            <button
              onClick={onJoinWaitlist}
              className="bg-[#D97757] hover:bg-[#c46142] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow transition-all block text-center"
            >
              GO TO WAITLIST FORM
            </button>
            <p className="text-[11px] text-white/60">
              Questions? Reach us directly at <span className="text-[#F8C3B1] font-medium">hola@localsummer.com</span>
            </p>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Local Summer. All rights reserved. Designed for Spain Mediterranean Living.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/80 hover:text-[#D97757] transition-colors focus:outline-none font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
