'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Stars, Calendar, Layers, MapPin, Feather, CheckSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import DiscoveryModal from '@/components/DiscoveryModal';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function GroupRetreatPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const programOfferings = [
    { title: 'Breathwork Journeys', desc: 'Somatic journeying to release emotional tissue blockages.' },
    { title: 'Harmonic Flow Aquatic Healing Arts', desc: 'Water therapy surrendering in warm water, shifting nervous systems to restorative state.' },
    { title: 'Voice Activation & Singing Circles', desc: 'Awakening expression frequencies, collective singing therapy, and throat chakra release.' },
    { title: 'Somatic Body & Energy Practices', desc: 'Morning practices to activate the body. And awareness of energies true playfull practices.' },
    { title: 'Ecstatic Dance & Sound Healing', desc: 'Rhythmic, judgment-free movement meditation. And drift away while listening to different sounds to calm the mind.' },
    { title: 'The Art of Expression', desc: 'Creative arts, journaling, acting, sharing circle.' },
    { title: 'Manifestation & Mindset Practice', desc: 'Aligning vision, belief design, and conscious habit integration.' }
  ];

  return (
    <div className="bg-[#FBF8F3] overflow-hidden">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.5}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            Shared Alchemy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            Group retreats for your body, mind, and soul. <span className="font-display italic text-[#D9A38A]">In Bali & worldwide.</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-2xl text-[#E6E1DA]/95 max-w-3xl mx-auto font-light leading-relaxed">
            Awaken your true self, in the company of others walking the same way.
          </p>
        </div>
      </FullscreenHero>

      {/* Philosophy of Communion */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 lg:order-last">
            <ScrollReveal variant="right" duration={0.8}>
              <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light leading-tight">
                Some journeys are best taken together.
              </h2>
              
              <div className="space-y-5 text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-4">
                <p>
                  In a group retreat you do your own deep, highly personal inner work — but inside a safe, loving, beautifully held collective. Surrounded by like-minded people, connection and vulnerability themselves become key ingredients of the medicine.
                </p>
                <p>
                  These retreats open expansive space for emotional, energetic and spiritual healing, for unconditional self-love, creative visual expression, absolute joy, and a real, grounding sense of belonging — to yourself, to others, and to nature.
                </p>
              </div>
              
              <div className="pt-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#D9A38A] text-[#1E1918] hover:bg-[#C08264] hover:text-[#1E1918] font-body text-sm px-8 py-3.5 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 tracking-wide inline-flex items-center gap-2 cursor-pointer font-medium shadow-sm hover:shadow-md"
                >
                  Inquire about upcoming dates 
                  <Calendar className="w-4.5 h-4.5" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            {/* Elegant full-bleed Bali nature */}
            <ScrollReveal variant="left" duration={0.8}>
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden border border-[#F2ECE3] shadow-xl group">
                <img
                  src="https://picsum.photos/seed/bali_waterfall/800/600"
                  alt="Beautiful sacred Balinese turquoise waterfall in jungle"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[5%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-4 py-1.5 rounded-full text-xs font-body font-medium text-[#322C2B] shadow">
                  ✨ Sacred Water Blessing Spots
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Water To Stars Signature Experience */}
      <section className="py-24 max-w-6xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 space-y-4 text-center">
            <ScrollReveal variant="up" duration={0.8}>
              <span className="font-mono text-[10px] tracking-widest text-[#C08264] uppercase font-semibold block">
                Damla Yaku & Miro Kloosterman presents
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#322C2B] font-light tracking-tight mt-2 animate-pulse">
                Water to Stars
              </h2>
              <p className="font-body text-base text-[#6E655E] max-w-2xl mx-auto font-light leading-relaxed mt-4">
                Together with my partner Damla Yaku, I guide retreats called <strong className="font-semibold text-[#322C2B]">Water to Stars</strong> — a journey from the depths of water to the openness of the stars, woven into the spirit of Bali.
              </p>
              <p className="font-body text-sm text-[#6E655E] max-w-xl mx-auto font-light leading-relaxed mt-2">
                We have been holding safe, sacred spaces for years, through water, breath, voice, movement, and ceremony. Joining forces with invited guest facilitators, we open a grounded, loving space for your transformation, expression, rest, and play.
              </p>
            </ScrollReveal>
          </div>

        </div>

        {/* Dynamic Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 overflow-hidden">
          {programOfferings.map((prog, idx) => (
            <ScrollReveal key={idx} variant="up" duration={0.8} delay={idx * 0.08}>
              <div 
                className="bg-white border border-[#F2ECE3] hover:border-[#D9A38A]/30 rounded-xl p-6 space-y-3 transition-all duration-300 shadow-sm h-full"
              >
                <div className="w-10 h-10 rounded-full bg-[#D9A38A]/10 flex items-center justify-center text-[#C08264]">
                  <Stars className="w-5 h-5 text-[#C08264]" />
                </div>
                <h4 className="font-display text-lg text-[#322C2B] font-light">
                  {prog.title}
                </h4>
                <p className="font-body text-xs text-[#6E655E] leading-relaxed font-light">
                  {prog.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Sacred Bali Ceremonies Segment */}
      <section className="py-20 bg-[#2C4A47] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#D9A38A]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <ScrollReveal variant="up" duration={0.8}>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#D9A38A] block">
              Rituals & Blessings
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-white leading-tight">
              Woven with the living ritual medicine of Bali.
            </h2>
            <p className="font-body text-sm md:text-base text-[#FBF8F3]/90 font-light leading-relaxed max-w-2xl mx-auto">
              Experience sacred fire and water purification blessings led by traditional Balinese High Priests, meditation in ancient waterfalls, standard performance of the local Kecak fire dance, and exploration of sacred places like the Monkey Forest.
            </p>
            <div className="h-px bg-[#5A7470]/40 w-36 mx-auto my-6" />
            <p className="font-display italic text-[#D9A38A] text-xl">
              &ldquo;A complete return to your core essence — from Water to Stars.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Dates Modal Toggle Handler */}
      <DiscoveryModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
