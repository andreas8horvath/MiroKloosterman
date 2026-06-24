'use client';

import React from 'react';
import { HelpCircle, CheckCircle, Heart, Phone } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function CoachingPage() {
  return (
    <div className="bg-[#FBF8F3] overflow-hidden">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.48}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            Lifestyle Anchoring
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            Coaching & Mentoring
          </h1>
          <p className="font-body text-base sm:text-lg md:text-2xl text-[#E6E1DA]/95 font-light leading-relaxed max-w-2xl mx-auto italic">
            &ldquo;Online and in person, in Bali.&rdquo;
          </p>
        </div>
      </FullscreenHero>

      {/* Somatic Context */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="left" duration={0.8}>
              <h2 className="font-display text-2xl md:text-3xl text-[#322C2B] font-light">
                Someone in your corner.
              </h2>
              <div className="space-y-4 text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-4">
                <p>
                  Sometimes what you need is not a physical treatment or energetic realignment — it is someone in your corner. Someone who listens properly, sees you clearly, and helps you identify your own next integrated step.
                </p>
                <p>
                  I have worked directly with health, nutrition, and lifestyle since 2001. As your performance coach and mentor, I bring all of that — specialized nutrition plans, functional lifestyle alterations, focus mindset training, herbal recommendations — but the real therapeutic core is much simpler.
                </p>
                <p>
                  I listen to where you currently are and map exactly where you seek to go. We implement practical, down-to-earth support that fits the realities of your current career and daily environment. I am direct when you require focus, and gentle when you need rest.
                </p>
                <p className="font-medium text-[#322C2B] mt-2">
                  Sessions are available in person in Bali, or via secure video call anywhere in the world. I also offer customized health workshops and stress training for corporate businesses, local schools, and groups.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal variant="right" duration={0.8}>
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-[#F2ECE3] group">
                <img
                  src="https://picsum.photos/seed/miro_coach/800/450"
                  alt="One on one coaching conversation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <CallToActionSection />
    </div>
  );
}
