'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Heart, Shield, Sparkles, BookOpen, HeartHandshake, Wind, RefreshCw, Sparkle, Waves } from 'lucide-react';
import { motion } from 'motion/react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function AboutPage() {
  const credentials = [
    { name: 'Life Coach & Mentorship Practitioner', icon: HeartHandshake },
    { name: 'Breathwork Facilitator', icon: Wind },
    { name: 'Hypnotherapist', icon: Compass },
    { name: 'Body Reset Therapist', icon: RefreshCw },
    { name: 'Chi Core Release (Chi Nei Tsang) Massage', icon: Heart },
    { name: 'Reiki Master', icon: Sparkle },
    { name: 'Trained in Harmonic Flow Aquatic Healing Arts', icon: Waves }
  ];

  const beliefs = [
    {
      title: 'You are not broken.',
      desc: 'Most of what looks like brokenness is your true self buried under years of stress, patterns, and somatic pain. The work is uncovering and clearing away what sits on top — not repairing.'
    },
    {
      title: 'The body keeps the score — and the body can let it go.',
      desc: 'Stored emotion, old trauma, and unresolved tension live directly in the tissues. Given the right, safe, and nurturing conditions, the body perfectly knows how to release and realign itself.'
    },
    {
      title: 'No two people are the same.',
      desc: 'I do not run a standardized assembly-line program over you. I listen with total attention to exactly where you are in the moment, and we shape our focus entirely to meet that need.'
    },
    {
      title: 'Healing is a process, not a singular event.',
      desc: 'That is why I work with people over time, and why I am fully there before and after — not only when we are physically in the room together.'
    },
    {
      title: 'There is a sacred line, and I respect it.',
      desc: 'I will walk a long way with you. I will also tell you honestly and immediately when something belongs with a medical doctor or psychiatrist. Knowing that line is part of caring for you well.'
    }
  ];

  return (
    <div className="bg-[#FBF8F3]">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.5}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            Behind the Practice
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight max-w-4xl mx-auto mt-4">
            My work is simple to say and takes a lifetime to live: <span className="font-display italic text-[#D9A38A]">supporting you coming home to yourself,</span> and feel alive again.
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-[#E6E1DA]/95 max-w-2xl mx-auto font-light leading-relaxed mt-4">
            I am Miro Kloosterman. I guide people back to their health, their energy, and the version of themselves that has been waiting patiently underneath everything life piled on top.
          </p>
        </div>
      </FullscreenHero>

      {/* Backstory: Backlit Portrait & Two Column Bio */}
      <section className="py-16 bg-[#F2ECE3]/30 border-y border-[#F2ECE3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            {/* Elegant Arch Frame */}
            <ScrollReveal variant="right" duration={0.9}>
              <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-t-full border border-[#D9A38A]/25 p-2.5 bg-white shadow-xl overflow-hidden group">
                <div className="w-full h-full relative rounded-t-full overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/miro_about/700/930"
                    alt="Miro Kloosterman in Bali"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[5%] brightness-95 transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="left" duration={0.9} delay={0.15}>
              <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light">
                How I got here
              </h2>
              
              <div className="space-y-5 text-sm md:text-base text-[#6E655E] font-light leading-relaxed mt-4">
                <p>
                  I learned about death before I had words for it — my mother died when I was very young. It planted a question in me early that most people do not meet until much later in life: <span className="italic font-medium text-[#322C2B] font-display text-lg">&ldquo;What is this all really about?&rdquo;</span>
                </p>
                <p>
                  My own body became my next teacher. Stomach troubles and headaches as a kid. Later, years of pushing too hard, leaning on caffeine and old habits, until I collapsed at thirty. Everyone called it burnout. I read everything, tried everything, and still went downhill — until I finally discovered it was Lyme disease.
                </p>
                <p>
                  I healed it naturally. No antibiotics — herbs, diet, breath, movement, and the right support at the right moments. I built my own protocol out of necessity, and it worked. Along the way I came to understand the human experience from the inside: loss, illness, addiction, fear, and the long climb back toward feeling alive.
                </p>
                <p>
                  That climb is what I do now. Before this, I worked as a professional actor—a creative path born from a deep passion and a love for exploring the human experience. Even though acting has always been a great dream and something I still hold with immense gratitude, my journey guided me toward a different, more grounding calling. I transitioned fully toward healing because walking beside someone on their way back to themselves means more to me than any role I could ever perform.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* What I Believe: Alternating Blocks layout */}
      <section className="py-24 max-w-6xl mx-auto px-6 space-y-16 overflow-hidden">
        <ScrollReveal variant="up" duration={0.8}>
          <div className="text-center space-y-3">
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#6E655E] block">
              Core Beliefs
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#322C2B] font-light mt-2">
              Core tenets of my healing philosophy
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beliefs.map((belief, idx) => (
            <ScrollReveal 
              key={idx} 
              variant="up" 
              duration={0.8} 
              delay={idx * 0.12}
              className="flex"
            >
              <div 
                className="bg-white border border-[#F2ECE3] shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[#322C2B]/5 rounded-xl p-8 space-y-4 transition-all duration-300 ease-out flex flex-col justify-start w-full cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#D9A38A]/10 flex items-center justify-center text-[#C08264] font-mono text-xs shrink-0">
                  0{idx + 1}
                </div>
                <h4 className="font-display text-xl text-[#322C2B] tracking-wide font-light border-b border-[#F2ECE3] pb-2">
                  {belief.title}
                </h4>
                <p className="font-body text-sm text-[#6E655E] font-light leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How I Work & safe held seen */}
      <section className="py-20 bg-[#2C4A47] text-white overflow-hidden">
        <ScrollReveal variant="up" duration={0.85}>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#D9A38A] block">
              Craftsmanship
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white leading-tight mt-2">
              I combine modalities the way a craftsman uses a full set of tools.
            </h2>
            <p className="font-body text-sm md:text-base text-[#FBF8F3]/85 font-light leading-relaxed max-w-2xl mx-auto mt-4">
              Breathwork, body reset, Chi core release massage, water therapy, hypnotherapy, coaching, and two decades of lived experience. I draw on what your moment needs, and I weave them together so the work reaches deeper than any single method could on its own.
            </p>
            <p className="font-display italic text-[#D9A38A] text-xl md:text-2xl pt-4">
              &ldquo;What people tell me they feel, over and over, is safe. Held. Seen without judgment. That safety is not a technique — it is the ground everything else grows from.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Verified Credentials */}
      <section className="py-24 max-w-4xl mx-auto px-6 space-y-12 overflow-hidden">
        <ScrollReveal variant="up" duration={0.8}>
          <div className="text-center space-y-3">
            <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light">
              My Background & Training
            </h2>
            <p className="font-body text-xs md:text-sm text-[#6E655E] uppercase font-light tracking-[0.2em]">
              Working with health and lifestyle since 2001
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="up" duration={0.85} delay={0.15}>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {credentials.map((cred, idx) => {
              const isLast = idx === credentials.length - 1;
              const Icon = cred.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-white border border-[#F2ECE3] rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-[#D9A38A]/50 hover:bg-[#FBF8F3]/40 hover:shadow-md hover:shadow-[#322C2B]/5 flex items-center gap-4 group ${
                    isLast ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="text-[#C08264]/80 bg-[#FBF8F3] w-10 h-10 rounded-full border border-[#F2ECE3] flex items-center justify-center shrink-0 group-hover:bg-[#C08264]/10 group-hover:text-[#C08264] transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="font-display font-light text-base md:text-lg text-[#322C2B] leading-snug">
                    {cred.name}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="up" duration={0.8} delay={0.3}>
          <div className="text-center text-xs text-[#6E655E] italic max-w-sm mx-auto leading-relaxed mt-4">
            &ldquo;People often guess I am more than ten years younger than I am. I take that as a quiet, humble sign I am doing something right.&rdquo;
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA Section */}
      <CallToActionSection />
    </div>
  );
}
