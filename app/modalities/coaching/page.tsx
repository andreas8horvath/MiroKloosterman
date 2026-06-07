'use client';

import React from 'react';
import { HelpCircle, CheckCircle, Heart, Phone } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';

export default function CoachingPage() {
  return (
    <div className="bg-[#FBF8F3] overflow-hidden">
      
      {/* Editorial Header */}
      <ScrollReveal variant="up" duration={0.8}>
        <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8852E] block">
            Lifestyle Anchoring
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#322C2B] leading-tight mt-2">
            Coaching & Mentoring
          </h1>
          <p className="font-body text-lg md:text-2xl text-[#6E655E] font-light leading-relaxed max-w-2xl mx-auto italic mt-4">
            &ldquo;Online and in person, in Bali.&rdquo;
          </p>
        </section>
      </ScrollReveal>

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
                  Sessions are available in person in Ubud, Bali, or via secure video call anywhere in the world. I also offer customized health workshops and stress training for corporate businesses, local schools, and groups.
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

      {/* Testimonials */}
      <section className="py-24 bg-[#F2ECE3]/40">
        <div className="max-w-4xl mx-auto px-6 space-y-12 overflow-hidden">
          <ScrollReveal variant="up" duration={0.8}>
            <h3 className="font-display text-2xl lg:text-3xl text-center text-[#322C2B] font-light font-sans">
              Client Backstories
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal variant="up" duration={0.8} delay={0.05}>
              <div className="bg-white p-8 rounded-xl border border-[#F2ECE3] shadow-sm flex flex-col justify-between h-full">
                <blockquote className="font-display italic text-base text-[#322C2B] leading-relaxed mb-4 font-light">
                  &ldquo;What I needed most was someone to listen, to hold space, to help me see that I was enough. His gentleness, kindness, and vulnerability let me feel comfortable being myself. I&apos;ll be forever grateful.&rdquo;
                </blockquote>
                <span className="font-body text-xs font-semibold text-[#6E655E]">— Coaching client</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="up" duration={0.8} delay={0.15}>
              <div className="bg-white p-8 rounded-xl border border-[#F2ECE3] shadow-sm flex flex-col justify-between h-full">
                <blockquote className="font-display italic text-base text-[#322C2B] leading-relaxed mb-4 font-light">
                  &ldquo;Miro quietly listens carefully and thinks constructively about the right solution at that moment. My blood values were back to a healthy level within three months. The doctor was surprised and impressed.&rdquo;
                </blockquote>
                <span className="font-body text-xs font-semibold text-[#6E655E]">— Edith & Norbert</span>
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
