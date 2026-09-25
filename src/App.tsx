import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCanvas } from './components/HeroCanvas';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('');
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-gold selection:text-ink">
      {/* Fixed Glass Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content */}
      <main className="w-full">
        {/* Section 1: Hero with 300-Frame Scroll Canvas Scrubber */}
        <HeroCanvas onOpenBooking={() => handleOpenBooking()} />

        {/* Section 2: What We Do (9 Services Grid) */}
        <Services onOpenBooking={(svc) => handleOpenBooking(svc)} />

        {/* Section 3: Real Results (Portfolio Case Studies) */}
        <Portfolio onOpenBooking={(caseStudy) => handleOpenBooking(caseStudy)} />

        {/* Section 4: Pricing & Add-ons */}
        <Pricing onOpenBooking={(plan) => handleOpenBooking(plan)} />

        {/* Section 5: How We Work (5-Step Protocol) */}
        <Process onOpenBooking={() => handleOpenBooking('Discovery Strategy Call')} />

        {/* Section 6: Why Beyond Horizon (2x2 Grid) */}
        <WhyUs />

        {/* Section 7: Final CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking / Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
