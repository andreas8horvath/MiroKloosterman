'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import DiscoveryModal from './DiscoveryModal';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-grow pt-20 md:pt-24 min-h-screen flex flex-col">
        {children}
      </main>
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />
      <DiscoveryModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
