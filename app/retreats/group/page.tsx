'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Stars, Calendar, Layers, MapPin, Feather, CheckSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import DiscoveryModal from '@/components/DiscoveryModal';
import CallToActionSection from '@/components/CallToActionSection';

export default function GroupRetreatPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const programOfferings = [
    { title: 'Breathwork Journeys', desc: 'Somatic journeying utilizing hyper-oxygenation to release emotional tissue blockages.' },
    { title: 'Harmonic Flow Aquatic Healing', desc: 'Water therapy surrendering in warm pools, shifting nervous systems to restorative womb-like layers.' },
    { title: 'Voice Activation & Singing Circles', desc: 'Awakening expression frequencies, collective singing therapy, and throat chakra release.' },
    { title: 'Somatic Body & Energy Practices', desc: 'Reiki, meridian balancing, alignment therapies, and fluid chi movement.' },
    { title: 'Ecstatic Dance & Native Sound Healing', desc: 'Rhythmic, judgment-free movement meditation accompanied by organic bowls and vibrations.' },
    { title: 'The Art of Expression', desc: 'Creative workshops, writing circles, and shared presence containers.' }
  ];

  return (
    <div className="bg-[#FBF8F3]">
      
      {/* Editorial Header */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-6 text-center space-y-6 md:space-y-8">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8852E] block">
          Shared Alchemy
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#322C2B] leading-[1.1] tracking-tight">
          Group retreats for your body, mind, and soul. <span className="font-display italic text-[#C8852E]">In Bali & worldwide.</span>
        </h1>
        <p className="font-body text-lg md:text-2xl text-[#6E655E] max-w-3xl mx-auto font-light leading-relaxed">
          Awaken your true self, in the company of others walking the same way.
        </p>
      </section>

      {/* Philosophy of Communion */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 lg:order-last">
            <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light leading-tight">
              Some journeys are best taken together.
            </h2>
            
            <div className="space-y-5 text-sm md:text-base text-[#6E655E] font-light leading-relaxed">
              <p>
                In a group retreat you do your own deep, highly personal inner work — but inside a safe, loving, beautifully held collective. Surrounded by like-minded people, connection and vulnerability themselves become key ingredients of the medicine.
              </p>
              <p>
                These retreats open expansive space for emotional, energetic and spiritual healing, for unconditional self-love, creative visual expression, absolute joy, and a real, grounding sense of belonging — to yourself, to others, and to the overarching natural world.
              </p>
            </div>
            
            <div className="pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#C8852E] hover:bg-[#9E6418] text-white font-body text-sm px-8 py-3.5 rounded-full transition-all tracking-wide inline-flex items-center gap-2 cursor-pointer font-medium"
              >
                Inquire about upcoming dates 
                <Calendar className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            {/* Elegant full-bleed Bali nature */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden border border-[#F2ECE3] shadow-xl">
              <img
                src="https://picsum.photos/seed/bali_waterfall/800/600"
                alt="Beautiful sacred Balinese turquoise waterfall in jungle"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[5%] brightness-95"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-4 py-1.5 rounded-full text-xs font-body font-medium text-[#322C2B] shadow">
                ✨ Sacred Water Blessing Spots
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Water To Stars Signature Experience */}
      <section className="py-24 max-w-6xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 space-y-4 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#C8852E] uppercase font-semibold block">
              Damla Yaku & Miro Kloosterman presents
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#322C2B] font-light tracking-tight">
              Water to Stars
            </h2>
            <p className="font-body text-base text-[#6E655E] max-w-2xl mx-auto font-light leading-relaxed">
              Together with my partner Damla Yaku, I guide retreats called <strong className="font-semibold text-[#322C2B]">Water to Stars</strong> — a journey from the depths of water to the openness of the stars, woven into the spirit of Bali.
            </p>
            <p className="font-body text-sm text-[#6E655E] max-w-xl mx-auto font-light leading-relaxed">
              We have been holding safe, sacred spaces for years, through water, breath, voice, movement, and ceremony. Joining forces with invited guest facilitators, we open a grounded, loving space for your transformation, expression, rest, and play.
            </p>
          </div>

        </div>

        {/* Dynamic Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {programOfferings.map((prog, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#F2ECE3] hover:border-[#C8852E]/30 rounded-xl p-6 space-y-3 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8852E]/10 flex items-center justify-center text-[#C8852E]">
                <Stars className="w-5 h-5 text-[#C8852E]" />
              </div>
              <h4 className="font-display text-lg text-[#322C2B] font-light">
                {prog.title}
              </h4>
              <p className="font-body text-xs text-[#6E655E] leading-relaxed font-light">
                {prog.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sacred Bali Ceremonies Segment */}
      <section className="py-20 bg-[#2C4A47] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#C8852E]/10 to-transparent blur-[120px] pointer-events-none" />
        
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
      </section>

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Dates Modal Toggle Handler */}
      <DiscoveryModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
