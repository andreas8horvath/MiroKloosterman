'use client';

import React from 'react';
import { RefreshCw, CheckCircle, Heart, Award } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function BodyResetPage() {
  const benefits = [
    'Back, hip, knee, neck, shoulder and joint discomfort, whiplash, & RSI',
    'Headaches, chronic migraines, and stress/tension-related complaints',
    'Issues linked to the nervous system — from digestion to restless legs and emotional heaviness'
  ];

  return (
    <div className="bg-[#FBF8F3] overflow-hidden">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1505236858219-8359eb29e3a9?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.45}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            Structural Realignment
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            Whole Body Reset Therapy
          </h1>
          <p className="font-body text-base sm:text-lg md:text-2xl text-[#E6E1DA]/95 font-light leading-relaxed max-w-2xl mx-auto italic">
            &ldquo;When one part of the body is stuck, the whole system compensates. This resets the whole.&rdquo;
          </p>
        </div>
      </FullscreenHero>

      {/* Somatic Context */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="left" duration={0.8}>
              <h2 className="font-display text-2xl md:text-3xl text-[#322C2B] font-light">
                Restoring system efficiency.
              </h2>
              <div className="space-y-4 text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-4">
                <p>
                  Body Reset is a hands-on, non-invasive developmental therapy that works with the joints and the way your entire body moves together as a singular, unified machine.
                </p>
                <p>
                  Restricted movement in one simple spot (e.g. your hip or foot) quietly forces other distant parts to overwork. Over time, that compounding mechanical strain shows up elsewhere as structural pain, chronic stiffness, tension, and headaches that you cannot quite explain or pinpoint.
                </p>
                <p>
                  Rather than endlessly chasing and patching isolated symptoms, this works with the skeleton and nervous pathways as a single connected grid. By freeing up restricted motion, your body can finally function the way it was designed to.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal variant="right" duration={0.8}>
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-[#F2ECE3] group">
                <img
                  src="https://picsum.photos/seed/miro_reset_body/800/450"
                  alt="Therapeutical joint alignment stretch"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Benefits grid layout */}
      <section className="py-24 max-w-5xl mx-auto px-6 space-y-12">
        <ScrollReveal variant="up" duration={0.8}>
          <h3 className="font-display text-3xl text-center text-[#322C2B] font-light">
            What the Whole Reset can treat:
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
          {benefits.map((ben, idx) => (
            <ScrollReveal key={idx} variant="up" duration={0.8} delay={idx * 0.08}>
              <div 
                className="p-8 bg-white border border-[#F2ECE3] shadow-sm rounded-xl space-y-3 hover:border-[#C08264]/30 transition-all flex flex-col justify-start h-full"
              >
                <CheckCircle className="w-6 h-6 text-[#C08264] flex-shrink-0" />
                <p className="font-body text-sm font-light text-[#322C2B] leading-relaxed">
                  {ben}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="up" duration={0.8}>
          <div className="text-center text-xs text-[#6E655E] italic max-w-md mx-auto pt-4 leading-relaxed font-light">
            &ldquo;Many people feel a real difference after a single session — lighter, more flexible, more at ease. Deeper change usually takes a few sessions, with time in between for the body to integrate. Healing takes patience, and the body sets the pace.&rdquo;
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <CallToActionSection />
    </div>
  );
}
