'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import DiscoveryModal from './DiscoveryModal';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const pathname = usePathname();
  const isBioPage = pathname === '/bio';

  if (isBioPage) {
    return (
      <>
        <main className="flex-grow min-h-screen flex flex-col bg-bg-light">
          {children}
        </main>
        <DiscoveryModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </>
    );
  }

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
