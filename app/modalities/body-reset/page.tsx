'use client';

import React from 'react';
import { RefreshCw, CheckCircle, Heart, Award } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';

export default function BodyResetPage() {
  const benefits = [
    'Back, hip, knee, neck, shoulder and joint discomfort, whiplash, & RSI',
    'Headaches, chronic migraines, and stress/tension-related complaints',
    'Issues linked to the nervous system — from digestion to restless legs and emotional heaviness'
  ];

  return (
    <div className="bg-[#FBF8F3]">
      
      {/* Editorial Header */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8852E] block">
          Structural Realignment
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#322C2B] leading-tight">
          Whole Body Reset Therapy
        </h1>
        <p className="font-body text-lg md:text-2xl text-[#6E655E] font-light leading-relaxed max-w-2xl mx-auto italic">
          &ldquo;When one part of the body is stuck, the whole system compensates. This resets the whole.&rdquo;
        </p>
      </section>

      {/* Somatic Context */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl md:text-3xl text-[#322C2B] font-light">
              Restoring system efficiency.
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#6E655E] font-light leading-relaxed">
              <p>
                Body Reset is a hands-on, non-invasive developmental therapy that works with the joints and the way your entire body moves together as a singular, unified machine.
              </p>
              <p>
                Restricted movement in one simple spot (e.g. your hip or foot) quietly forces other distant parts to overwork. Over time, that compounding mechanical strain shows up elsewhere as structural pain, chronic stiffness, tension, and headaches that you cannot quite explain or pinpoint.
              </p>
              <p>
                Rather than endlessly chasing and patching isolated symptoms, this works with the skeleton and nervous pathways as a single connected grid. By freeing up restricted motion, your body can finally function the way it was designed to.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border border-[#F2ECE3]">
              <img
                src="https://picsum.photos/seed/miro_reset_body/800/450"
                alt="Therapeutical joint alignment stretch"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Benefits grid layout */}
      <section className="py-24 max-w-5xl mx-auto px-6 space-y-12">
        <h3 className="font-display text-3xl text-center text-[#322C2B] font-light">
          What the Whole Reset can treat:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((ben, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white border border-[#F2ECE3] shadow-sm rounded-xl space-y-3 hover:border-[#C8852E]/30 transition-all flex flex-col justify-start"
            >
              <CheckCircle className="w-6 h-6 text-[#C8852E] flex-shrink-0" />
              <p className="font-body text-sm font-light text-[#322C2B] leading-relaxed">
                {ben}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-[#6E655E] italic max-w-md mx-auto pt-4 leading-relaxed">
          &ldquo;Many people feel a real difference after a single session — lighter, more flexible, more at ease. Deeper change usually takes a few sessions, with time in between for the body to integrate. Healing takes patience, and the body sets the pace.&rdquo;
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-[#F2ECE3]/40 border-t border-[#F2ECE3]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <h3 className="font-display text-2xl text-center text-[#322C2B] font-light">
            Somatic results
          </h3>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-[#F2ECE3] shadow-sm">
              <blockquote className="font-display italic text-lg text-[#322C2B] leading-relaxed mb-4 font-light">
                &ldquo;His body reset therapy is unique and helps the body realign itself. It helped me a lot with my back pain and always makes me feel lighter, more flexible, balanced and more energised in the days after.&rdquo;
              </blockquote>
              <span className="font-body text-xs font-semibold text-[#322C2B]">Steffi — Client</span>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#F2ECE3] shadow-sm">
              <blockquote className="font-display italic text-lg text-[#322C2B] leading-relaxed mb-4 font-light">
                &ldquo;I had tension and pain in my neck and shoulders for years — I couldn&apos;t even turn my head. After only one session it was all gone. Every cent worth it.&rdquo;
              </blockquote>
              <span className="font-body text-xs font-semibold text-[#322C2B]">Anna — Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToActionSection />
    </div>
  );
}
