'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Map, Sparkles, Check, CheckCircle, Calendar, ShieldCheck, Mail, Heart } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function PrivateRetreatPage() {
  const customPractices = [
    'Health and lifestyle coaching and mentoring',
    'Customized detox and nutrition support',
    'morning practice Body movements, workouts, and Yoga',
    'Deep Transformative Breathwork sessions',
    'Body Reset therapy',
    'Chi Core Release (belly-organ) massage',
    'Intuitive massage therapy',
    'Harmonic Flow Water therapy',
    'Deep subconscious Hypnotherapy integration',
    'Reconnecting with your inner child, adventure, and play'
  ];

  return (
    <div className="bg-[#FBF8F3] overflow-hidden">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.48}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            One-On-One Sanctuary
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            A private retreat for your body, mind, and soul. <span className="font-display italic text-[#D9A38A]">In Bali.</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-2xl text-[#E6E1DA]/95 max-w-3xl mx-auto font-light leading-relaxed">
            A journey built entirely around you — no two are the same.
          </p>
        </div>
      </FullscreenHero>

      {/* Visual Anchor Row */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="left" duration={0.8}>
              <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light leading-tight">
                The deepest work I offer.
              </h2>
              
              <div className="space-y-5 text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-4">
                <p>
                  A one-on-one retreat, designed around your specific health and your specific life, in one of the most healing, spiritually grounded places on earth.
                </p>
                <p>
                  We do not start when you land and stop when you leave. The support begins weeks before you arrive in Bali and continues for a month afterward, or for as long as you need to anchor the shifts. This is how real, lasting change happens — not during an isolated weekend, but across a full somatic process you actually live through.
                </p>
                <p>
                  A private retreat runs ten days, two weeks, or longer. Long enough to make a genuine, structural difference. Together we shape your days from the practices that serve your physical and energetic systems.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            {/* Elegant large picture of Bali sanctuary */}
            <ScrollReveal variant="right" duration={0.8}>
              <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden border border-[#F2ECE3] shadow-lg group">
                <img
                  src="https://picsum.photos/seed/bali_temple/800/800"
                  alt="Balinese sacred temple surrounded by emerald water"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[8%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-4 py-1.5 rounded-full text-xs font-body font-medium text-[#322C2B] shadow">
                  🌴 Bali Jungle Sanctuary
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Custom Practices: Two column checklist */}
      <section className="py-24 max-w-6xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <ScrollReveal variant="up" duration={0.8}>
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#6E655E] block">
              The Toolkit
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#322C2B] font-light mt-2">
              Somatic elements of your container
            </h2>
            <p className="font-body text-sm text-[#6E655E] max-w-xl mx-auto font-light leading-relaxed mt-2">
              Your schedule is structured day-by-day, adjusting in real time to what your nervous system needs:
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto overflow-hidden">
          {customPractices.map((practice, idx) => (
            <ScrollReveal key={idx} variant="up" duration={0.8} delay={idx * 0.05}>
              <div 
                className="flex items-start gap-3.5 p-4 bg-white border border-[#F2ECE3] rounded-xl shadow-sm hover:border-[#C08264]/30 transition-all h-full"
              >
                <Check className="w-5 h-5 text-[#C08264] shrink-0 mt-0.5" />
                <span className="font-body text-sm md:text-base text-[#322C2B] font-light">{practice}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bali Medicine section */}
      <section className="py-20 bg-[#2C4A47] text-white">
        <ScrollReveal variant="up" duration={0.8}>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#D9A38A] block">
              Island Healing
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white leading-tight">
              Supported by the living heartbeat of Bali itself.
            </h2>
            <p className="font-body text-sm md:text-base text-[#FBF8F3]/90 font-light leading-relaxed max-w-2xl mx-auto font-light">
              Sacred temples, clean emerald waterfalls, ancient Balinese water purification ceremonies, quiet walks through heritage rice fields, and the simple medicine of a beautiful, slow place. We can incorporate surfing, snorkeling, or diving if your spirit calls for physical play and deep oceanic recharge.
            </p>
            <div className="h-px bg-[#5A7470]/40 w-36 mx-auto my-6" />
            <p className="font-display italic text-[#D9A38A] text-lg">
              &ldquo;Each retreat is personal. We decide the shape of it together, on your terms.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Beautiful Testimonials specifically for Private Retreats */}
      <section className="py-24 max-w-5xl mx-auto px-6 space-y-16">
        <div className="text-center">
          <ScrollReveal variant="up" duration={0.8}>
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#6E655E] block">
              Transformation Journals
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light mt-2">
              Shared experiences from Bali
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
          
          {/* Review 1 */}
          <ScrollReveal variant="up" duration={0.8} delay={0.05}>
            <div className="bg-white border border-[#F2ECE3] p-8 md:p-10 rounded-2xl shadow-xl shadow-[#322C2B]/5 flex flex-col justify-between h-full">
              <blockquote className="font-display italic text-lg text-[#322C2B] leading-relaxed mb-6 font-light">
                &ldquo;This special and gifted person is able to challenge you, to make you feel what needs to be felt, to see what needs to be seen… while he dedicatedly supports you through the darker parts toward the light. Go if you feel you &apos;have to go&apos;. I am very grateful I did.&rdquo;
              </blockquote>
              <div className="border-t border-[#F2ECE3] pt-4 text-xs font-body">
                <span className="font-semibold text-[#322C2B] block">Jacqueline</span>
                <span className="text-[#6E655E] text-[10px] uppercase tracking-wider">Private Retreat Guest</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Review 2 */}
          <ScrollReveal variant="up" duration={0.8} delay={0.15}>
            <div className="bg-white border border-[#F2ECE3] p-8 md:p-10 rounded-2xl shadow-xl shadow-[#322C2B]/5 flex flex-col justify-between h-full">
              <blockquote className="font-display italic text-lg text-[#322C2B] leading-relaxed mb-6 font-light">
                &ldquo;I had the pleasure of staying with Miro in Bali for 10 days. The rest, exercise, yoga, fitness, breathing exercises and activities gave me peace and intrinsic motivation to get out and be active. I often think fondly about what I did and learned from Miro.&rdquo;
              </blockquote>
              <div className="border-t border-[#F2ECE3] pt-4 text-xs font-body">
                <span className="font-semibold text-[#322C2B] block">Wouter Blom</span>
                <span className="text-[#6E655E] text-[10px] uppercase tracking-wider">Consultant & Founder</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        <ScrollReveal variant="up" duration={0.8}>
          <div className="text-center font-body text-sm text-[#6E655E] max-w-sm mx-auto leading-relaxed pt-4 border-t border-[#F2ECE3]/60 font-light">
            <span className="font-semibold text-[#322C2B] block mb-1">Strict Structural Constraint</span>
            Spaces are genuinely limited — a private retreat is reserved for only 1 person (or a couple retreat for up to 2 partners) at any given time, as it takes all of my energy, focus, and care.
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA Section */}
      <CallToActionSection />
    </div>
  );
}
