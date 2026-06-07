'use client';

import React, { useState } from 'react';
import DiscoveryModal from './DiscoveryModal';
import { Calendar, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function CallToActionSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#2C4A47] text-white py-20 md:py-28 relative overflow-hidden text-center">
      {/* Light-bloom: Amber radial glow radiating out of the deep teal grounding section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-[#C8852E]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6 md:space-y-8">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#D9A38A] block">
          The Invitation
        </span>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-3xl mx-auto leading-tight">
          Let&apos;s start with a <span className="font-display italic text-[#D9A38A]">conversation.</span>
        </h2>
        
        <p className="font-body text-base md:text-lg text-[#FBF8F3]/80 leading-relaxed max-w-2xl mx-auto font-light">
          No pressure, no script. A free call where you tell me what&apos;s going on, I listen properly, and we feel out together whether I am the right person to walk this stretch of the path with you.
        </p>

        <p className="font-display italic text-lg md:text-xl text-[#D9A38A]">
          Most people know within the first few minutes.
        </p>

        <div className="pt-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#C8852E] hover:bg-[#9E6418] text-white font-body text-base px-10 py-4 rounded-full transition-all duration-300 ease-out tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 cursor-pointer inline-flex items-center gap-2.5 font-medium relative overflow-hidden group"
          >
            <Calendar className="w-5 h-5" />
            Book a free discovery call
          </button>
        </div>

        <div className="pt-6 flex justify-center items-center gap-2 text-xs text-[#FBF8F3]/50 font-light">
          <Heart className="w-3.5 h-3.5 text-[#D9A38A]" />
          <span>I respond personally over WhatsApp/Email within 24 hours.</span>
        </div>
      </div>

      <DiscoveryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
