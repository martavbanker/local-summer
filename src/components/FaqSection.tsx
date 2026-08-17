import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F5F0E6] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#016278]/20">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#016278] uppercase inline-flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#D97757]" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#016278] font-normal">
            Everything you need to know about a family summer in Spain
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A40] max-w-xl mx-auto">
            Clear insights on US work schedules, accommodation standards, and children's programs in Spain.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FDFBF7] rounded-2xl border border-[#016278]/20 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#016278] px-2.5 py-0.5 rounded bg-[#016278]/10">
                      {item.category}
                    </span>
                    <span className="font-serif text-lg sm:text-2xl text-[#016278] font-normal group-hover:text-[#00A692] transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#016278] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D97757]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#5A5A40] leading-relaxed border-t border-[#016278]/10">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
