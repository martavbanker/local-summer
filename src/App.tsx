import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { WhySpain } from './components/WhySpain';
import { IncludedServices } from './components/IncludedServices';
import { DayInLife } from './components/DayInLife';
import { FirstEditionCallout } from './components/FirstEditionCallout';
import { WaitlistSection } from './components/WaitlistSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

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
        {/* Hero Section with Spanish Mediterranean landscape */}
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

