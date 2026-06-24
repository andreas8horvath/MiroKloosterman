'use client';

import React from 'react';
import Link from 'next/link';
import { Wind, ShieldAlert, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function BreathworkPage() {
  return (
    <div className="bg-[#FBF8F3] overflow-hidden">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.45}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            The Breath Engine
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            Transformative Breathwork
          </h1>
          <p className="font-body text-base sm:text-lg md:text-2xl text-[#E6E1DA]/95 font-light leading-relaxed max-w-2xl mx-auto italic">
            &ldquo;The most ordinary thing you do — and one of the most powerful when you do it differently.&rdquo;
          </p>
        </div>
      </FullscreenHero>

      {/* Somatic Context */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="left" duration={0.8}>
              <h2 className="font-display text-2xl md:text-3xl text-[#322C2B] font-light">
                Bypassing the conscious wall.
              </h2>
              <div className="space-y-4 text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-4">
                <p>
                  You breathe all day, every day, without thinking. But breathe with intention, with the right technique and the right guidance, and it can reach places talking never gets to.
                </p>
                <p>
                  In my twenty-plus years on this path, breath has been one of the most powerful tools I have found. This style is gentle, yet it goes incredibly deep. It helps you reach the memories, emotions, and patterns held in the body — the ones quietly keeping you from feeling fully alive — and it lets them move and release.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal variant="right" duration={0.8}>
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-[#F2ECE3] group">
                <img
                  src="https://picsum.photos/seed/miro_breathe_air/800/450"
                  alt="Breathing meditation in nature"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Formats row - grid representation */}
      <section className="py-24 max-w-6xl mx-auto px-6 space-y-16">
        <div className="text-center">
          <ScrollReveal variant="up" duration={0.8}>
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#6E655E] block">
              Flexible Structures
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light mt-2">
              Settings & Formats
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
          
          {/* Format 1: In person or online */}
          <ScrollReveal variant="up" duration={0.8} delay={0.05}>
            <div className="bg-white border border-[#F2ECE3] p-8 rounded-xl shadow-sm space-y-3 h-full">
              <h4 className="font-display text-xl text-[#322C2B] font-light pb-2 border-b border-[#F2ECE3]/60">
                In person or online
              </h4>
              <p className="font-body text-xs text-[#6E655E] font-light leading-relaxed">
                In person, I bring in bodywork and everything else I have trained in, which makes it a different experience even for people who have done breathwork before. Online, I weave in hypnotherapy, tailored to you. Both work — they just work differently.
              </p>
            </div>
          </ScrollReveal>

          {/* Format 2: Group, private, in water */}
          <ScrollReveal variant="up" duration={0.8} delay={0.15}>
            <div className="bg-white border border-[#F2ECE3] p-8 rounded-xl shadow-sm space-y-3 h-full">
              <h4 className="font-display text-xl text-[#322C2B] font-light pb-2 border-b border-[#F2ECE3]/60">
                Group, private, & water
              </h4>
              <p className="font-body text-xs text-[#6E655E] font-light leading-relaxed">
                Group sessions usually run about three hours. Private sessions start around three hours and can build to longer as we go. When you are ready to go even deeper, we can move the breathwork into the water element.
              </p>
            </div>
          </ScrollReveal>

          {/* Format 3: Safety Guard */}
          <ScrollReveal variant="up" duration={0.8} delay={0.25}>
            <div className="bg-white border border-[#F2ECE3] p-8 rounded-xl shadow-sm border-t-4 border-t-[#C08264] space-y-3 h-full">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C08264] uppercase">
                <ShieldAlert className="w-4 h-4 text-[#C08264]" />
                <span>Safety Parameters</span>
              </div>
              <p className="font-body text-xs text-[#6E655E] font-light leading-relaxed">
                This is challenging work — physically and emotionally. For safety, there are some organic or psychological conditions where deep breathwork is not suitable; we will always verify this comprehensively prior to starting your session.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Call to action section */}
      <CallToActionSection />
    </div>
  );
}
