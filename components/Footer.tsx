'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Instagram, Send, ArrowUp } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Footer({ onOpenBooking }: { onOpenBooking: () => void }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C4A47] text-white py-16 md:py-24 border-t border-[#5A7470]/30 relative overflow-hidden">
      {/* Background soft radial glow mapping "Rising Light" grounding energy */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#C8852E]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-[#5A7470]/40">
          
          {/* Brand & Mission Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="group flex flex-col items-start">
              <span className="font-display text-2xl tracking-wide text-white group-hover:text-[#D9A38A] transition-colors">
                Miro Kloosterman
              </span>
              <span className="font-body text-[10px] tracking-[0.25em] text-[#D9A38A] uppercase -mt-1 font-light">
                Body · Mind · Soul
              </span>
            </Link>
            <p className="font-body text-sm text-[#FBF8F3]/80 leading-relaxed max-w-xs font-light">
              Helping people who feel stuck, unwell, or weary of life reconnect with their true self and their health so they can feel alive to the core.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#D9A38A]">
              Quick Exploration
            </h4>
            <ul className="space-y-2.5 font-body text-sm font-light text-[#FBF8F3]/80">
              <li>
                <Link href="/" className="hover:text-[#D9A38A] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D9A38A] transition-colors">Meet Miro</Link>
              </li>
              <li>
                <Link href="/retreats" className="hover:text-[#D9A38A] transition-colors">Our Retreats</Link>
              </li>
              <li>
                <Link href="/modalities" className="hover:text-[#D9A38A] transition-colors">Integrated Modalities</Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#D9A38A] transition-colors">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Integrated Modalities Links Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#D9A38A]">
              Healing Pathways
            </h4>
            <ul className="space-y-2.5 font-body text-sm font-light text-[#FBF8F3]/80">
              <li>
                <Link href="/modalities/breathwork" className="hover:text-[#D9A38A] transition-colors">Transformative Breathwork</Link>
              </li>
              <li>
                <Link href="/modalities/body-reset" className="hover:text-[#D9A38A] transition-colors">Body Reset Therapy</Link>
              </li>
              <li>
                <Link href="/modalities/massages" className="hover:text-[#D9A38A] transition-colors">Chi Core & Massages</Link>
              </li>
              <li>
                <Link href="/modalities/water-therapy" className="hover:text-[#D9A38A] transition-colors">Harmonic Flow Aquatic Healing Arts</Link>
              </li>
              <li>
                <Link href="/modalities/hypnotherapy" className="hover:text-[#D9A38A] transition-colors">Hypnotherapy</Link>
              </li>
              <li>
                <Link href="/modalities/coaching" className="hover:text-[#D9A38A] transition-colors">Coaching & Mentoring</Link>
              </li>
            </ul>
          </div>

          {/* Contact Coordinates Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#D9A38A]">
              Connect Direct
            </h4>
            <ul className="space-y-3 font-body text-sm font-light text-[#FBF8F3]/80">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#D9A38A] shrink-0" />
                <a href="mailto:miro@mirokloosterman.com" className="hover:text-[#D9A38A] transition-colors truncate">
                  miro@mirokloosterman.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <WhatsAppIcon className="w-4 h-4 text-[#D9A38A] shrink-0" />
                <a href="https://wa.me/31681400180" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9A38A] transition-colors">
                  +31 6 8140 0180
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-[#D9A38A] shrink-0" />
                <div className="flex flex-col">
                  <a href="https://instagram.com/miro_kloosterman" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9A38A] transition-colors">
                    @miro_kloosterman
                  </a>
                  <a href="https://instagram.com/healthwithmiro" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9A38A] transition-colors text-xs text-[#FBF8F3]/60">
                    @healthwithmiro
                  </a>
                </div>
              </li>
            </ul>
            <div className="pt-3">
              <button 
                onClick={onOpenBooking}
                className="bg-white text-[#2C4A47] hover:bg-[#D9A38A] hover:text-white font-medium text-xs px-5 py-2.5 rounded-full transition-all uppercase tracking-widest text-center cursor-pointer inline-flex items-center gap-1.5 w-full justify-center"
              >
                Plan Discovery Call
              </button>
            </div>
          </div>
        </div>

        {/* Lower row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#FBF8F3]/60 font-light gap-4">
          <p>
            © {new Date().getFullYear()} Miro Kloosterman. All rights reserved. Bali & worldwide healing.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <button 
              onClick={handleScrollToTop}
              className="bg-[#5A7470]/30 hover:bg-[#5A7470]/50 p-2 rounded-full transition-colors group flex items-center justify-center cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#D9A38A] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
