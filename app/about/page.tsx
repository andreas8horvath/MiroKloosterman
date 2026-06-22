'use client';

import React from 'react';
import Link from 'next/link';
import { Award, Compass, Heart, Shield, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  const credentials = [
    'Certified Life Coach & Mentorship Practitioner',
    'Breathwork Facilitator & Breath Mechanic',
    'Certified Hypnotherapist',
    'Whole Body Reset Therapist',
    'Chi Core Release (Chi Nei Tsang) Massage Specialist',
    'Traditional Reiki Master & Energy Guide',
    'Trained in Harmonic Flow Aquatic Healing Arts'
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
      
      {/* Editorial Header */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-6 text-center space-y-6 md:space-y-8 overflow-hidden">
        <ScrollReveal variant="up" duration={0.8}>
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8852E] block">
            Behind the Practice
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#322C2B] leading-tight max-w-4xl mx-auto mt-4">
            My work is simple to say and takes a lifetime to live: <span className="font-display italic text-[#C8852E]">supporting coming home to yourself,</span> and feel alive again.
          </h1>
          <p className="font-body text-lg md:text-xl text-[#6E655E] max-w-3xl mx-auto font-light leading-relaxed mt-4">
            I am Miro Kloosterman. I guide people back to their health, their energy, and the version of themselves that has been waiting patiently underneath everything life piled on top.
          </p>
        </ScrollReveal>
      </section>

      {/* Backstory: Backlit Portrait & Two Column Bio */}
      <section className="py-16 bg-[#F2ECE3]/30 border-y border-[#F2ECE3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            {/* Elegant Arch Frame */}
            <ScrollReveal variant="right" duration={0.9}>
              <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-t-full border border-[#C8852E]/20 p-2.5 bg-white shadow-xl overflow-hidden group">
                <div className="w-full h-full relative rounded-t-full overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/miro_about/700/930"
                    alt="Miro Kloosterman in Ubud, Bali"
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
                  That climb is what I do now. I stopped acting and turned fully toward this — because walking beside someone on their way back to themselves means more to me than anything I could ever perform.
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
                <div className="w-8 h-8 rounded-full bg-[#C8852E]/10 flex items-center justify-center text-[#C8852E] font-mono text-xs shrink-0">
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
            <Award className="w-8 h-8 text-[#C8852E] mx-auto opacity-80" />
            <h2 className="font-display text-3xl md:text-4xl text-[#322C2B] font-light mt-2">
              My Background & Training
            </h2>
            <p className="font-body text-sm text-[#6E655E] uppercase font-light tracking-wide mt-2">
              Working with health and lifestyle since 2001
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="up" duration={0.85} delay={0.15}>
          <div className="bg-white border border-[#F2ECE3] rounded-2xl p-6 md:p-10 shadow-lg shadow-[#322C2B]/5 divide-y divide-[#F2ECE3]/60 font-body text-sm text-[#322C2B] font-light">
            {credentials.map((cred, idx) => (
              <div key={idx} className="py-4 md:py-5 flex items-center justify-between first:pt-0 last:pb-0">
                <span className="font-medium text-[#322C2B]">{cred}</span>
                <span className="text-xs text-[#C8852E] font-medium uppercase tracking-widest pl-4 shrink-0">Verified</span>
              </div>
            ))}
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
