import React from 'react';
import { SCHEDULE_ITEMS } from './data';
import { Sun, Laptop, Compass, Utensils, Clock, Sparkles } from 'lucide-react';

export const DayInLife: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sun': return <Sun className="w-5 h-5 text-[#D97757]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#F8C3B1]" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-[#7ED2C8]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#D97757]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#F8C3B1]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D97757]" />;
    }
  };

  return (
    <section id="a-day-in-life" className="bg-[#016278] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#D97757]/20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-[#D97757] uppercase block">
            SPANISH SUMMER RHYTHM
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            A day in the life in Spain
          </h2>
          <p className="text-sm sm:text-base text-white/85">
            Designed around US working hours (EDT/CDT/PDT) so parents focus deeply while kids build lifelong Mediterranean memories.
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-4 pt-4">
          {SCHEDULE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#D97757]/60 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl shrink-0">
                  {getIcon(item.iconName)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-serif text-lg sm:text-xl font-normal text-white">
                      {item.title}
                    </span>
                    <span
                      className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        item.forWho === 'Kids'
                          ? 'bg-[#D97757]/30 text-[#F8C3B1]'
                          : item.forWho === 'Parents'
                          ? 'bg-[#00A692]/30 text-[#7ED2C8]'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      {item.forWho}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-left md:text-right border-t md:border-t-0 border-white/10 pt-2 md:pt-0 w-full md:w-auto">
                <span className="font-mono text-xs sm:text-sm text-[#F8C3B1] font-semibold block">
                  {item.time}
                </span>
                <span className="text-[11px] text-white/60 italic">Local Time (CEST)</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

