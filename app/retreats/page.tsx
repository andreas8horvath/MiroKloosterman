'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Users, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import CallToActionSection from '@/components/CallToActionSection';

export default function RetreatsHubPage() {
  return (
    <div className="bg-[#FBF8F3]">
      
      {/* Page Header */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8852E] block">
          Immersive Containers
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#322C2B] leading-tight">
          Real change needs <span className="font-display italic text-[#C8852E]">time, depth,</span> and a container that holds you.
        </h1>
        <p className="font-body text-lg md:text-xl text-[#6E655E] font-light leading-relaxed max-w-2xl mx-auto">
          A single session can open a door. But the deepest shifts I have seen come from staying with the work — days, not hours. That is why retreats are the heart of what I do.
        </p>
        <p className="font-body text-sm font-semibold tracking-wide text-[#322C2B] uppercase">
          There are two ways to go on this journey with me:
        </p>
      </section>

      {/* Containers split - Alternating Layout, NOT a simple card grid */}
      <section className="py-20 bg-white border-y border-[#F2ECE3] space-y-24 md:space-y-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Row 1: Private Retreat */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8852E]">
                <Compass className="w-4 h-4" />
                <span>One-on-One Synthesis</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light leading-tight">
                Private Retreats — <span className="font-display italic text-[#C8852E]">one-on-one in Bali</span>
              </h2>
              <p className="font-body text-base text-[#6E655E] font-light leading-relaxed">
                The whole experience, built entirely around you. Deep, personal, and held at your pace, with my full attention from before you arrive until after you leave. This encompasses custom-tailored detox, movement, hypnotherapy, breathwork, and sacred temple water blessings designed for your specific health requirements.
              </p>
              <div className="pt-2">
                <Link
                  href="/retreats/private"
                  className="bg-[#C8852E] hover:bg-[#9E6418] text-white font-body text-sm px-8 py-3.5 rounded-full transition-all tracking-wide inline-flex items-center gap-2 font-medium"
                >
                  Explore Private Retreats
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-xl border border-[#F2ECE3] group">
                <img
                  src="https://picsum.photos/seed/private_bali_pool/800/450"
                  alt="Bali sacred private retreat sanctuary pool and nature"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-4 py-1.5 rounded-full text-xs font-body font-medium flex items-center gap-1.5 text-[#322C2B]">
                  <MapPin className="w-3.5 h-3.5 text-[#C8852E]" /> Ubud, Bali
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Row 2: Group Retreat */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image swap for responsive layout stack */}
            <div className="lg:col-span-6 lg:order-last space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8852E]">
                <Users className="w-4 h-4" />
                <span>Sacred Group Medicine</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light leading-tight">
                Group Retreats — <span className="font-display italic text-[#C8852E]">Bali and around the world</span>
              </h2>
              <p className="font-body text-base text-[#6E655E] font-light leading-relaxed">
                A shared journey in a safe, loving container — alongside others walking their own path, woven together with my partner Damla Yaku through breath, water, voice, movement, ecstatic dance, and Balinese fire ceremony.
              </p>
              <div className="pt-2">
                <Link
                  href="/retreats/group"
                  className="bg-[#2C4A47] hover:bg-[#1A2E2C] text-white font-body text-sm px-8 py-3.5 rounded-full transition-all tracking-wide inline-flex items-center gap-2 font-medium"
                >
                  Explore Group Retreats
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-xl border border-[#F2ECE3] group">
                <img
                  src="https://picsum.photos/seed/group_ceremony/800/450"
                  alt="Bali group waterfall sound circle"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-4 py-1.5 rounded-full text-xs font-body font-medium flex items-center gap-1.5 text-[#322C2B]">
                  <MapPin className="w-3.5 h-3.5 text-[#C8852E]" /> Bali, Europe & Worldwide
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Mid Transition Note */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-center space-y-4">
        <Heart className="w-6 h-6 text-[#C8852E] mx-auto" />
        <h3 className="font-display text-2xl text-[#322C2B] font-light">
          Not sure which format fits your path?
        </h3>
        <p className="font-body text-sm text-[#6E655E] max-w-md mx-auto font-light leading-relaxed">
          That is exactly what a discovery call is for. We can talk about your health context, timeframes, and alignment together.
        </p>
      </section>

      {/* Final CTA Section */}
      <CallToActionSection />
    </div>
  );
}
