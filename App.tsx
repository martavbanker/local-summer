import React from 'react';
import { Header } from './Header.tsx';
import { Hero } from './Hero';
import { Pillars } from './Pillars';
import { WhySpain } from './WhySpain';
import { IncludedServices } from './IncludedServices';
import { DayInLife } from './DayInLife';
import { FirstEditionCallout } from './FirstEditionCallout';
import { WaitlistSection } from './WaitlistSection';
import { FaqSection } from './FaqSection';
import { Footer } from './Footer';

export default function App() {
  const handleScrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Focus first input field after scrolling completes
      setTimeout(() => {
        const input = document.getElementById('firstName');
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#132E2D] font-sans antialiased overflow-x-hidden selection:bg-[#7ED2C8] selection:text-[#132E2D]">
      <Header onJoinWaitlist={handleScrollToWaitlist} />
      
      <main>
        {/* Hero Section with Spanish Mediterranean Mallorca image replacing Santorini */}
        <Hero onJoinWaitlist={handleScrollToWaitlist} />

        {/* Core Pillars: Designed around real family life */}
        <Pillars />

        {/* Why Spain section */}
        <WhySpain onJoinWaitlist={handleScrollToWaitlist} />

        {/* What's Included / No tourist traps */}
        <IncludedServices />

        {/* Daily rhythm & US working hours alignment */}
        <DayInLife />

        {/* First Edition Callout */}
        <FirstEditionCallout onJoinWaitlist={handleScrollToWaitlist} />

        {/* FAQ Section */}
        <FaqSection />

        {/* Waitlist Sign-up Form integrated directly into the footer area */}
        <WaitlistSection />
      </main>

      <Footer onJoinWaitlist={handleScrollToWaitlist} />
    </div>
  );
}

