'use client';

import React from 'react';
import { ShieldCheck, CheckCircle, Info, Heart } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function HypnotherapyPage() {
  const issues = [
    'Easing anxiety, chronic stress, and mental chatter',
    'Softening phobias, structural fears, and somatic panic',
    'Shifting stubborn, subconscious habits and dependencies',
    'Soothe and manage chronic pain and physical exhaustion',
    'Improving deep, restorative sleep quality and insomnia roots'
  ];

  return (
    <div className="bg-[#FBF8F3] overflow-hidden">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.48}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            Subconscious Pattern Shift
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            Hypnotherapy
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
                Rewriting the core blueprint.
              </h2>
              <div className="space-y-4 text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-4">
                <p>
                  Beneath your everyday thinking mind is the deep, subconscious layer that runs all of your default operating programs — the habits, irrational fears, automatic ticks, and biochemical reactions you cannot seem to think or talk your way out of.
                </p>
                <p>
                  Hypnotherapy works directly with that deeper layer of consciousness. Through relaxed, guided meditation, slow focus, and tailored, supportive suggestions, it helps you release long-standing mental blocks.
                </p>
                <p>
                  One thing worth clearing up immediately: <strong className="font-semibold text-[#322C2B]">you do not lose control</strong>. You are not on a stage. Throughout the session, you remain entirely awake, present, and fully capable of accepting or declining any suggestion. It is a collaborative tool requiring your active willingness.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal variant="right" duration={0.8}>
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-[#F2ECE3] group">
                <img
                  src="https://picsum.photos/seed/miro_hypno/800/450"
                  alt="Calm guided transcendental state"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* What Hypno Can Assist With */}
      <section className="py-24 max-w-5xl mx-auto px-6 space-y-12">
        <ScrollReveal variant="up" duration={0.8}>
          <h3 className="font-display text-3xl text-center text-[#322C2B] font-light">
            What Hypnotherapy supports:
          </h3>
        </ScrollReveal>

        <div className="max-w-xl mx-auto space-y-4 overflow-hidden">
          {issues.map((issue, idx) => (
            <ScrollReveal key={idx} variant="up" duration={0.8} delay={idx * 0.05}>
              <div 
                className="flex items-start gap-3 p-4 bg-white border border-[#F2ECE3] rounded-lg shadow-sm h-full"
              >
                <CheckCircle className="w-5 h-5 text-[#C08264] flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm font-light text-[#322C2B] leading-relaxed">
                  {issue}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="up" duration={0.8}>
          <div className="text-center text-xs text-[#6E655E] italic max-w-md mx-auto pt-4 leading-relaxed font-light">
            &ldquo;It often works beautifully online. Many people go deeper and surrender quicker from the security and comfort of their own home environment, where they already feel safe or protected.&rdquo;
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <CallToActionSection />
    </div>
  );
}
