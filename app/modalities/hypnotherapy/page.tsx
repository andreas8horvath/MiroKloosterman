'use client';

import React from 'react';
import { ShieldCheck, CheckCircle, Info, Heart } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';

export default function HypnotherapyPage() {
  const issues = [
    'Easing anxiety, chronic stress, and mental chatter',
    'Softening phobias, structural fears, and somatic panic',
    'Shifting stubborn, subconscious habits and dependencies',
    'Soothe and manage chronic pain and physical exhaustion',
    'Improving deep, restorative sleep quality and insomnia roots'
  ];

  return (
    <div className="bg-[#FBF8F3]">
      
      {/* Editorial Header */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8852E] block">
          Subconscious Pattern Shift
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#322C2B] leading-tight">
          Hypnotherapy
        </h1>
        <p className="font-body text-lg md:text-2xl text-[#6E655E] font-light leading-relaxed max-w-2xl mx-auto italic">
          &ldquo;Online and in person, in Bali.&rdquo;
        </p>
      </section>

      {/* Somatic Water Power */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl md:text-3xl text-[#322C2B] font-light">
              Rewriting the core blueprint.
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#6E655E] font-light leading-relaxed">
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
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-[#F2ECE3]">
              <img
                src="https://picsum.photos/seed/miro_hypno/800/450"
                alt="Calm guided transcendental state"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* What Hypno Can Assist With */}
      <section className="py-24 max-w-5xl mx-auto px-6 space-y-12">
        <h3 className="font-display text-3xl text-center text-[#322C2B] font-light">
          What Hypnotherapy supports:
        </h3>

        <div className="max-w-xl mx-auto space-y-4">
          {issues.map((issue, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3 p-4 bg-white border border-[#F2ECE3] rounded-lg shadow-sm"
            >
              <CheckCircle className="w-5 h-5 text-[#C8852E] flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm font-light text-[#322C2B] leading-relaxed">
                {issue}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-[#6E655E] italic max-w-md mx-auto pt-4 leading-relaxed">
          &ldquo;It often works beautifully online. Many people go deeper and surrender quicker from the security and comfort of their own home environment, where they already feel safe or protected.&rdquo;
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-[#F2ECE3]/40 border-t border-[#F2ECE3]">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-center">
          <h3 className="font-display text-2xl text-[#322C2B] font-light font-sans">
            Transformational Feedback
          </h3>
          <div className="bg-white p-8 md:p-10 rounded-xl border border-[#F2ECE3] shadow-sm max-w-xl mx-auto text-left">
            <blockquote className="font-display italic text-lg text-[#322C2B] leading-relaxed mb-4 font-light">
              &ldquo;Our hypnotherapy sessions were deeply insightful and transformative, leaving me with more clarity and inner strength.&rdquo;
            </blockquote>
            <span className="font-body text-xs font-semibold text-[#322C2B]">— Awa</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToActionSection />
    </div>
  );
}
