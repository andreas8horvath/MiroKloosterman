'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Wind, RefreshCw, Activity, Waves, Heart, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

const modalitiesList = [
  {
    slug: 'breathwork',
    title: 'Transformative Breathwork',
    excerpt: 'Access and release what traditional talk therapy cannot reach. By changing how you breathe, you bypass the cognitive mind to purge deep emotional baggage and physical patterns.',
    icon: Wind,
    detailLink: '/modalities/breathwork'
  },
  {
    slug: 'body-reset',
    title: 'Body Reset Therapy',
    excerpt: 'Whole-system structural realignment. When one part of the body is restricted, the entire organism compensates. Realign the skeleton and release years of muscular binding.',
    icon: RefreshCw,
    detailLink: '/modalities/body-reset'
  },
  {
    slug: 'massages',
    title: 'Massages & Chi Core Release',
    excerpt: 'Chi Core Release (Chi Nei Tsang) and intuitive bodywork to let the somatic tissue let go. Massaging the belly to digest emotions, toxins, and historic trauma.',
    icon: Activity,
    detailLink: '/modalities/massages'
  },
  {
    slug: 'water-therapy',
    title: 'Harmonic Flow Aquatic Healing Arts',
    excerpt: 'Surrender completely, held with care by the oldest and gentlest element of all. Surface float meditation and brief, safe submersions developed under Damla Yaku.',
    icon: Waves,
    detailLink: '/modalities/water-therapy'
  },
  {
    slug: 'hypnotherapy',
    title: 'Hypnotherapy',
    excerpt: 'Work directly with the subconscious blueprint in person or online. Eradicate stubborn lifestyle patterns, release anxiety, and shift long-standing structural fears.',
    icon: Heart,
    detailLink: '/modalities/hypnotherapy'
  },
  {
    slug: 'coaching',
    title: 'Coaching & Mentoring',
    excerpt: 'Practical, down-to-earth support for health, mindset, herbs, and diet in person or online. Miro in your corner, listening deeply to help you structure your next active step.',
    icon: MessageCircle,
    detailLink: '/modalities/coaching'
  }
];

export default function ModalitiesHubPage() {
  return (
    <div className="bg-[#FBF8F3]">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.5}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            Integrated Modalities
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            I don&apos;t work in one method. I work in what <span className="font-display italic text-[#D9A38A]">your moment</span> needs.
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-[#E6E1DA]/95 font-light leading-relaxed max-w-2xl mx-auto">
            Each of these is powerful on its own. The real depth comes from how they are combined — drawn together around you, the way a craftsman reaches for the right tool at the right time.
          </p>
          <p className="font-body text-xs sm:text-sm font-light text-[#D9A38A] italic tracking-wider">
            You do not need to select from this list prior to our call. This serves purely to show what lives in the toolkit.
          </p>
        </div>
      </FullscreenHero>

      {/* Asymmetric Alternating Row Layout (Scheme B rule) */}
      <section className="py-16 bg-white border-y border-[#F2ECE3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 divide-y divide-[#F2ECE3] space-y-24">
          
          {modalitiesList.map((mod, idx) => {
            const IconComponent = mod.icon;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={mod.slug} 
                className="pt-24 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Asymmetric positioning based on Even/Odd */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                  <ScrollReveal variant={isEven ? 'right' : 'left'} duration={0.85}>
                    <div className="w-12 h-12 bg-[#D9A38A]/15 rounded-full flex items-center justify-center text-[#C08264]">
                      <IconComponent className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    
                    <span className="font-mono text-[10px] uppercase font-semibold text-[#6E655E] tracking-widest block mt-4">
                      Pathway 0{idx + 1}
                    </span>
                    
                    <h3 className="font-display text-2xl sm:text-3xl text-[#322C2B] font-light tracking-wide leading-snug mt-2">
                      {mod.title}
                    </h3>
                    
                    <p className="font-body text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-3">
                      {mod.excerpt}
                    </p>

                    <div className="pt-4">
                      <Link
                        href={mod.detailLink}
                        className="text-[#C08264] hover:text-[#8C5135] font-body text-sm font-medium inline-flex items-center gap-1 group transition-all"
                      >
                        Explore this modality 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Alternating illustrative imagery with thin arched frames */}
                <div className="lg:col-span-6 flex justify-center">
                  <ScrollReveal variant={isEven ? 'left' : 'right'} duration={0.85} delay={0.15} className="w-full max-w-md">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-[#F2ECE3] group">
                      <img
                        src={`https://picsum.photos/seed/miro_mod_${mod.slug}/800/600`}
                        alt={mod.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[10%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#322C2B]/15 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </ScrollReveal>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Main Closing Section */}
      <CallToActionSection />
    </div>
  );
}
