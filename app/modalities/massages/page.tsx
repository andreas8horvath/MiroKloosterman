'use client';

import React from 'react';
import { Award, CheckCircle, Info, Heart } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';

export default function MassagesPage() {
  return (
    <div className="bg-[#FBF8F3]">
      
      {/* Editorial Header */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8852E] block">
          Healing Somatic Touch
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#322C2B] leading-tight">
          Chi Core Release & Intuitive Massage
        </h1>
        <p className="font-body text-lg md:text-2xl text-[#6E655E] font-light leading-relaxed max-w-2xl mx-auto italic">
          &ldquo;Sometimes the body is holding what the mind cannot reach. These massages help it let go.&rdquo;
        </p>
      </section>

      {/* Massages Sections Split - unbalanced asymmetric blocks */}
      <section className="py-16 bg-white border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          
          {/* Massage 1: Chi Core Release (Chi Nei Tsang) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-semibold text-[#C8852E] uppercase tracking-widest block">
                Part A — Core Release
              </span>
              <h2 className="font-display text-3xl text-[#322C2B] font-light tracking-wide leading-tight">
                Chi Core Release Massage (Chi Nei Tsang)
              </h2>
              <div className="space-y-4 font-body text-sm md:text-base text-[#6E655E] font-light leading-relaxed">
                <p>
                  A gentle but profound belly and deep organ massage that acts directly upon stored, blocked emotional energy in your physical core.
                </p>
                <p>
                  By softly massaging the abdominal cavity and activating specific acupressure trigger points, we connect with the physical roots of mental and emotional stress, helping to purge and realign what has been bound there — often for years.
                </p>
                <p>
                  It is completely common and natural for raw emotions to surface during a session — including quiet crying — as deep structural tension finally moves, liquefies, and dissolves. As your core organs begin to move more freely, you will digest physical nutrients better. And, often, you will digest the events of your life a little better too.
                </p>
                <p className="italic font-display text-[#C8852E] text-base">
                  A typical therapeutic session is around 90 minutes. Longer is possible.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#F2ECE3]/30 border border-[#F2ECE3] rounded-2xl p-8 shadow-sm">
              <div className="text-[#C8852E] italic font-display text-2xl leading-relaxed font-light mb-6">
                &ldquo;What seems to be &apos;just a massage&apos; has been life-changing for me. Miro created the safest space and took all the time to be there for me. After this session, my life shifted completely in a positive way.&rdquo;
              </div>
              <div className="border-t border-[#F2ECE3] pt-4 text-xs font-body">
                <span className="font-semibold text-[#322C2B] block">Maria Johanna</span>
                <span className="text-[#6E655E] text-[10px] uppercase tracking-wider">Chi Core Client</span>
              </div>
            </div>
          </div>

          <hr className="border-[#F2ECE3]" />

          {/* Massage 2: Intuitive Massage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 lg:order-last space-y-6">
              <span className="font-mono text-xs font-semibold text-[#C8852E] uppercase tracking-widest block">
                Part B — Custom Somatic Flow
              </span>
              <h2 className="font-display text-3xl text-[#322C2B] font-light tracking-wide leading-tight">
                Intuitive Massage
              </h2>
              <div className="space-y-4 font-body text-sm md:text-base text-[#6E655E] font-light leading-relaxed">
                <p>
                  I have loved giving massage therapy since I was young, developing my custom tactile touch across a lifetime of active practice.
                </p>
                <p>
                  During an Intuitive Massage, I draw upon everything I have trained in, reading your body in the fluid moment and designing each session entirely centered on what your musculature and nervous system require.
                </p>
                <p className="italic font-display text-[#C8852E] text-base">
                  Flexible durational formats — anywhere from 60 minutes to two full hours.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#F2ECE3]/30 border border-[#F2ECE3] rounded-2xl p-8 shadow-sm">
              <div className="text-[#C8852E] italic font-display text-2xl leading-relaxed font-light mb-6">
                &ldquo;Miro created a full relax session with sound bowls, palo santo and music. He has a warm personality and made me feel at ease. It was just what I needed.&rdquo;
              </div>
              <div className="border-t border-[#F2ECE3] pt-4 text-xs font-body">
                <span className="font-semibold text-[#322C2B] block">Intuitive Client</span>
                <span className="text-[#6E655E] text-[10px] uppercase tracking-wider">Amsterdam</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <CallToActionSection />
    </div>
  );
}
