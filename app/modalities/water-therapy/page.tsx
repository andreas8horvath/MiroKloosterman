'use client';

import React from 'react';
import { Waves, CheckCircle, Info, ShieldAlert, Heart } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function WaterTherapyPage() {
  const stages = [
    {
      title: 'Phase I — On the Surface',
      desc: 'Supported securely by specialized neck and knee floats and a warm water pillow. Your breathing and nervous system slow down into a deeply meditative, floating, and restful state — often accompanied by sound therapy and slow rotational movement.'
    },
    {
      title: 'Phase II — Under the Water',
      desc: 'For short, completely safe, and held moments. With prior agreement and nose clips, we transition the body beneath the warm water. Your mind drops into something close to the primordial storage memory of the womb — a profound, calm space for deep emotional release.'
    },
    {
      title: 'Phase III — Grounding',
      desc: "Gently and slowly, you are returned back to the ground. Supported and guided by Miro until you are fully checked back into your physical skin. You leave the water feeling incredibly light, empty, safe, and clean."
    }
  ];

  return (
    <div className="bg-[#FBF8F3] overflow-hidden">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.45}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            Aquatic Surrender
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            Harmonic Flow Aquatic Healing Arts
          </h1>
          <p className="font-body text-base sm:text-lg md:text-2xl text-[#E6E1DA]/95 font-light leading-relaxed max-w-2xl mx-auto italic">
            &ldquo;Held by water — the oldest, gentlest way back to yourself.&rdquo;
          </p>
        </div>
      </FullscreenHero>

      {/* Somatic Water Power */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="left" duration={0.8}>
              <h2 className="font-display text-2xl md:text-3xl text-[#322C2B] font-light">
                Water remembers.
              </h2>
              <div className="space-y-4 text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-4">
                <p>
                  Water is the element of letting go, of raw acceptance, of constant fluid flow and change — and it has a remarkable, scientifically supported capacity to soften tissues, release core stress, and completely renew your mind.
                </p>
                <p>
                  In an aquatic water therapy session, you are supported and held with care in warm water while you surrender into a state of absolute, deep nervous relaxation that most modern adults rarely experience.
                </p>
                <p className="font-medium text-[#322C2B] mt-2">
                  Harmonic Flow was developed by my partner, <strong className="font-semibold">Damla Yaku</strong>, through years of dedicated cross-cultural research into the aquatic healing sciences. We offer it within our retreats and as standalone Bali sessions.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal variant="right" duration={0.8}>
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-[#F2ECE3] group">
                <img
                  src="https://picsum.photos/seed/miro_water_flow/800/450"
                  alt="Aquatic water healing support session"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* The Three Stages in Depth */}
      <section className="py-24 max-w-5xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <ScrollReveal variant="up" duration={0.8}>
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#6E655E] block">
              The Journey Matrix
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light mt-2">
              Anatomy of an Aquatic Session
            </h2>
            <p className="font-body text-sm text-[#6E655E] italic mt-2">
              The less you expect, the more it can give you. Trusting the flow is the whole practice.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
          {stages.map((stg, idx) => (
            <ScrollReveal key={idx} variant="up" duration={0.8} delay={idx * 0.08}>
              <div 
                className="bg-white border border-[#F2ECE3] rounded-xl p-8 space-y-4 shadow-sm hover:border-[#C8852E]/30 transition-all h-full"
              >
                <div className="w-8 h-8 rounded-full bg-[#C8852E]/10 text-[#C8852E] flex items-center justify-center font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h4 className="font-display text-lg font-light text-[#322C2B] border-b border-[#F2ECE3] pb-2">
                  {stg.title}
                </h4>
                <p className="font-body text-xs text-[#6E655E] font-light leading-relaxed">
                  {stg.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Verified Reviews */}
      <section className="py-20 bg-[#F2ECE3]/40 border-t border-[#F2ECE3]">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-center overflow-hidden">
          <ScrollReveal variant="up" duration={0.8}>
            <h3 className="font-display text-2xl lg:text-3xl text-[#322C2B] font-light">
              Surrender Journals
            </h3>
          </ScrollReveal>
          <ScrollReveal variant="up" duration={0.8} delay={0.05}>
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#F2ECE3] shadow-md max-w-3xl mx-auto flex flex-col justify-between items-center text-left">
              <blockquote className="font-display italic text-lg md:text-xl text-[#322C2B] leading-relaxed mb-6 font-light">
                &ldquo;Something that felt more like an inner journey than a physical activity. The anxiety I was carrying completely melted away. The gentle floating felt like being held by nature itself — warm, embracing, deeply soothing. I felt truly safe in your presence, especially in the water.&rdquo;
              </blockquote>
              <span className="font-body text-xs font-semibold text-[#322C2B] uppercase tracking-wider block">
                — Water therapy client, Ubud
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CallToActionSection />
    </div>
  );
}
