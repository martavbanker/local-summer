import React, { useState, useEffect } from 'react';
import { Anchor, Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#D97757]/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - LOCAL SUMMER */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#016278] group-hover:text-[#00A692] transition-colors">
                LOCAL <span className="font-serif italic text-[#D97757]">SUMMER</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#5A5A40] -mt-1 pl-0.5">
                Spain · Summer 2027
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Prominent Pill Tabs */}
          <nav className="hidden md:flex items-center bg-[#F5F0E6]/95 border border-[#016278]/20 backdrop-blur-md p-1.5 rounded-full shadow-xs space-x-1">
            <a
              href="#pillars"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#016278] hover:bg-[#016278] hover:text-white transition-all"
            >
              The Experience
            </a>
            <a
              href="#why-spain"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#016278] hover:bg-[#016278] hover:text-white transition-all"
            >
              Why Spain
            </a>
            <a
              href="#what-we-cover"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#016278] hover:bg-[#016278] hover:text-white transition-all"
            >
              What's Included
            </a>
            <a
              href="#a-day-in-life"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#016278] hover:bg-[#016278] hover:text-white transition-all"
            >
              Daily Life
            </a>
            <a
              href="#about"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#016278] hover:bg-[#016278] hover:text-white transition-all"
            >
              About Us
            </a>
            <a
              href="#faq"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#016278] hover:bg-[#016278] hover:text-white transition-all"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Button - Separated to the Right */}
          <div className="hidden sm:flex items-center ml-6 sm:ml-10 pl-6 border-l border-[#016278]/20">
            <button
              onClick={onJoinWaitlist}
              className="bg-[#D97757] hover:bg-[#c46142] text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all transform active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D2EFEC]" />
              Join 2027 Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onJoinWaitlist}
              className="bg-[#D97757] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full"
            >
              Waitlist
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#016278] hover:text-[#00A692] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#D97757]/20 px-4 pt-3 pb-6 shadow-lg space-y-3">
          <a
            href="#pillars"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#5A5A40] py-1"
          >
            The Experience
          </a>
          <a
            href="#why-spain"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#5A5A40] py-1"
          >
            Why Spain
          </a>
          <a
            href="#what-we-cover"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#5A5A40] py-1"
          >
            What's Included
          </a>
          <a
            href="#a-day-in-life"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#5A5A40] py-1"
          >
            Daily Life
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#5A5A40] py-1"
          >
            About Us
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#5A5A40] py-1"
          >
            FAQ
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onJoinWaitlist();
            }}
            className="w-full bg-[#D97757] hover:bg-[#c46142] text-white text-xs font-bold tracking-widest uppercase py-3 rounded-full mt-2"
          >
            JOIN THE SUMMER 2027 WAITLIST
          </button>
        </div>
      )}
    </header>
  );
};
