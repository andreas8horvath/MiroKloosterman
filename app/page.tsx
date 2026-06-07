'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Check, X, ShieldAlert, Heart, Star, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import DiscoveryModal from '@/components/DiscoveryModal';
import CallToActionSection from '@/components/CallToActionSection';
import ScrollReveal from '@/components/ScrollReveal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
} as const;

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 bg-gradient-to-b from-[#FBF8F3] to-[#F7F0E6] overflow-hidden">
        {/* Soft amber radial sunset glow */}
        <div id="hero-glow" className="absolute top-[10%] right-[-10%] w-[80vw] h-[80vw] max-w-[800px] bg-gradient-radial from-[#C8852E]/12 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#D9A38A]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              variants={itemVariants}
              className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C8852E] block"
            >
              Body - Mind - Soul
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#322C2B] leading-[1.08] tracking-tight"
            >
              Some part of you already <span className="font-display italic text-[#C8852E]">knows</span> it&apos;s time to come home to yourself.
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="font-body text-lg md:text-2xl font-light text-[#6E655E] tracking-wide"
            >
              Come home to yourself. <span className="font-semibold text-[#322C2B]">Feel alive again.</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="font-body text-base text-[#6E655E]/90 leading-relaxed font-light max-w-xl"
            >
              Private retreats in Bali. Group retreats around the world. One-on-one healing and coaching, in person or online.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#C8852E] hover:bg-[#9E6418] text-white font-body text-sm px-8 py-4 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] tracking-wide text-center cursor-pointer shadow-md hover:shadow-lg hover:brightness-[1.03] inline-flex items-center justify-center gap-2 font-medium"
              >
                <Calendar className="w-4.5 h-4.5" />
                Book a free discovery call
              </button>
              
              <Link
                href="/retreats"
                className="border border-[#C8852E]/30 text-[#322C2B] hover:border-[#C8852E] hover:bg-white/40 font-body text-sm px-8 py-4 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] tracking-wide text-center inline-flex items-center justify-center gap-2 font-light hover:shadow-sm"
              >
                Explore Retreats
                <ArrowRight className="w-4 h-4 text-[#C8852E]" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 1.04, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          >
            {/* Elegant Arch Framing over portrait */}
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-t-full border border-[#C8852E]/20 p-3 bg-[#FBF8F3]/50 shadow-xl overflow-hidden group">
              <div className="absolute inset-0 border border-[#C8852E]/10 rounded-t-full p-2 m-2 pointer-events-none" />
              <div className="w-full h-full relative rounded-t-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dt806m3nm/image/upload/c_scale,w_800,f_auto,q_auto/v1776505357/4-1920w.jpg_uiikl9.webp"
                  alt="Miro Kloosterman - Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] brightness-[1.02] contrast-[0.98] transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A47]/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-0 right-0 text-center text-white px-4 leading-tight">
                  <span className="font-display text-lg italic block text-[#D9A38A]">Miro Kloosterman</span>
                  <span className="font-body text-[9px] uppercase tracking-widest text-[#FBF8F3]/80 select-none">Bali & Worldwide Guide</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MIRROR / RECOGNITION */}
      <section className="py-24 bg-[#FBF8F3] relative overflow-hidden">
        <ScrollReveal variant="up" duration={0.85}>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#6E655E] block">
              Recognition
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#322C2B] font-light tracking-tight leading-tight">
              Maybe you know this feeling.
            </h2>
            
            <div className="space-y-6 text-[#6E655E] font-body text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-left">
              <p>
                You&apos;ve been functioning. Holding it together. From the outside, maybe it even looks fine.
              </p>
              <p>
                But somewhere underneath, something has gone quiet. Your body keeps sending signals you&apos;ve learned to ignore. You feel stuck — like there&apos;s more in you than the life you&apos;re actually living. Or you&apos;ve been unwell for so long that you&apos;ve half-stopped believing it can change.
              </p>
              <p className="italic text-[#322C2B] font-display text-center text-2xl py-2">
                &ldquo;Is this just how it&apos;s going to be now?&rdquo;
              </p>
              <p>
                I want you to know two things. <span className="font-semibold text-[#322C2B]">You are not broken</span>. And you don&apos;t have to figure this out alone.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. THE TURN / POSSIBILITY */}
      <section className="py-24 bg-[#F2ECE3]/50 relative border-y border-[#F2ECE3] overflow-hidden">
        <ScrollReveal variant="up" duration={0.85}>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C8852E] block">
              The Awakening
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#322C2B] font-light tracking-tight leading-tight max-w-2xl mx-auto">
              It&apos;s not gone. It&apos;s just been buried for a while.
            </h2>

            <div className="space-y-6 text-[#6E655E] font-body text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                Everything you&apos;re looking for — your health, your energy, your sense of who you actually are, the aliveness you remember — none of it is gone. It&apos;s underneath the stress, the old patterns, the things life piled on over the years.
              </p>
              <p>
                My work isn&apos;t to hand you something you&apos;re missing. It&apos;s to help you clear away what&apos;s been sitting on top of it, so what was always yours can come back to the surface.
              </p>
              <p className="font-display italic text-[#C8852E] text-2xl pt-4">
                &ldquo;You do the walking. I walk beside you, and I know the terrain.&rdquo;
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. WHO IS MIRO — why him (GROUNDING DEEP TEAL MOMENT) */}
      <section className="bg-[#2C4A47] text-white py-24 relative overflow-hidden">
        {/* Subtle radial top glow to avoid going flat */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#5A7470]/25 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            {/* Elegant portrait with thin amber arch line framing portrait */}
            <ScrollReveal variant="right" duration={0.9} className="w-full max-w-[340px]">
              <div className="relative aspect-[4/5] rounded-t-full border border-[#D9A38A]/30 p-2 overflow-hidden shadow-2xl">
                <div className="w-full h-full relative rounded-t-full overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/miro_bali/700/875"
                    alt="Miro Kloosterman walking by Balinese stream"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] brightness-95"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="left" duration={0.9} delay={0.15}>
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#D9A38A] block">
                Meet Your Guide
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-light text-white leading-tight">
                I&apos;ve been further down than I let on. That&apos;s exactly why I can meet you here.
              </h2>
              
              <div className="space-y-4 font-body text-base text-[#FBF8F3]/90 font-light leading-relaxed mt-4">
                <p className="italic text-[#D9A38A] text-lg font-display">
                  &ldquo;I&apos;m Miro.&rdquo;
                </p>
                <p>
                  I learned about loss early, and I learned about my own body the hard way — years of unexplained illness, a collapse at thirty that doctors first called burnout, and finally a diagnosis of Lyme disease. I healed it. Not with a single magic answer, but slowly, naturally, building my own way back step by step.
                </p>
                <p>
                  I went far enough down to understand why people give up. And far enough back to know, in my body, that it&apos;s possible to return — and to feel genuinely alive again on the other side.
                </p>
                <p>
                  That&apos;s what I bring to this work. Not theory. Lived experience, on a lot of different levels. People tell me I have a big heart and the energy of a golden retriever — warm, present, fully here for them. And when the moment calls for it, I can be very direct. I&apos;ll meet you with both.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="bg-[#D9A38A] hover:bg-[#C8852E] text-[#2C4A47] hover:text-white font-body text-sm px-8 py-3.5 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] tracking-wide inline-flex items-center gap-2 font-medium hover:shadow-md"
                >
                  Read my full story 
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 5. HOW I WORK — the integration principle */}
      <section className="py-24 bg-[#FBF8F3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <ScrollReveal variant="right" duration={0.9}>
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C8852E] block">
                The Integration Principle
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#322C2B] font-light leading-tight tracking-tight">
                One approach, drawn from many sources.
              </h2>
              
              <div className="space-y-4 text-[#6E655E] font-body text-base font-light leading-relaxed mt-4">
                <p>
                  There&apos;s a reason I didn&apos;t stop at one method.
                </p>
                <p>
                  Think of Bruce Lee — he built his own martial art out of everything he&apos;d trained in, because no single style held all of it. I work the same way. Breath, bodywork, the subconscious, water, deep listening, and the lessons life handed me — I draw on whatever your moment actually needs, and I combine them into something that goes deeper than any one of them alone.
                </p>
                <p>
                  That&apos;s why I rarely work in single sessions when real change is the goal. We start before we meet, we go deep together, and I stay with you after. Healing isn&apos;t a treatment you receive. It&apos;s a process you live.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/modalities"
                  className="text-[#C8852E] hover:text-[#9E6418] font-body text-base font-medium inline-flex items-center gap-1.5 group transition-all"
                >
                  Explore how I work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Graphical/Interactive representating Bruce Lee style integration */}
          <div>
            <ScrollReveal variant="left" duration={0.9} delay={0.15}>
              <div className="bg-[#F2ECE3]/40 border border-[#F2ECE3] rounded-2xl p-8 md:p-10 space-y-6 relative hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out">
                <div className="absolute top-4 right-4 text-[#C8852E]/10 select-none">
                  <Compass className="w-24 h-24 stroke-[1]" />
                </div>
                
                <h4 className="font-display text-xl text-[#322C2B] tracking-wide border-b border-[#F2ECE3] pb-3 font-light">
                  Miro&apos;s Healing Synthesis Toolkit
                </h4>
                
                <div className="space-y-4">
                  {[
                    { title: 'Subconscious Layer', tech: 'Hypnotherapy', desc: 'Direct patterns rewrite' },
                    { title: 'Physiological Release', tech: 'Whole Body Reset & Massages', desc: 'Somatic alignment & deep tension purge' },
                    { title: 'Atmospheric surrender', tech: 'Transformative Breath & Flowing Water', desc: 'Meditation in absolute natural element support' },
                    { title: 'Mentorship core', tech: 'Lifestyle Coaching', desc: 'Long-term anchoring & integration' }
                  ].map((val, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="font-mono text-xs text-[#C8852E] bg-white border border-[#F2ECE3] w-6 h-6 flex items-center justify-center rounded-full mt-0.5 shrink-0">
                        0{idx+1}
                      </span>
                      <div>
                        <h5 className="font-body text-sm font-semibold text-[#322C2B]">{val.tech}</h5>
                        <p className="font-body text-xs text-[#6E655E] font-light">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 6. PROOF / TESTIMONIALS */}
      <section className="py-24 bg-[#F2ECE3]/40 border-y border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          <ScrollReveal variant="up" duration={0.8}>
            <div className="space-y-3">
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#6E655E] block">
                Proof of Alignment
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#322C2B] font-light tracking-tight">
                What people say after working with me
              </h2>
            </div>
          </ScrollReveal>

          {/* Testimonial cards - gallery aesthetic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                quote: "I had so much tension and pain in my neck and shoulders for years that I couldn't even turn my head anymore. After only one session it was all gone.",
                author: "Anna",
                location: "Ubud"
              },
              {
                quote: "Investing time with Miro has transformed my life on multiple levels. I am now stronger, healthier, happier, and more fulfilled… This transformation has also made me a better entrepreneur. I now consider him one of my absolute closest friends.",
                author: "Steven",
                location: "Entrepreneur"
              },
              {
                quote: "He made me feel seen and heard. He really took the time to give me advice that fit. That is a gift not many people have. It changed my view on things — but also on myself and my self-worth.",
                author: "Fauzy",
                location: "Client"
              }
            ].map((card, idx) => (
              <ScrollReveal 
                key={idx} 
                variant="up" 
                duration={0.8} 
                delay={idx * 0.12}
                className="flex"
              >
                <div 
                  className="bg-white border border-[#F2ECE3] shadow-lg shadow-[#322C2B]/5 rounded-xl p-8 relative flex flex-col justify-between items-start hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#322C2B]/6 transition-all duration-300 ease-out cursor-pointer w-full"
                >
                  <div className="text-[#C8852E] flex gap-0.5 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <blockquote className="font-display italic text-[#322C2B] text-lg leading-relaxed mb-6 font-light">
                    &ldquo;{card.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-[#F2ECE3] pt-4 w-full text-xs font-body">
                    <span className="font-semibold text-[#322C2B] block">{card.author}</span>
                    <span className="text-[#6E655E] text-[10px] uppercase tracking-wider">{card.location}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="pt-4">
            <ScrollReveal variant="up" duration={0.8} delay={0.3}>
              <Link
                href="/reviews"
                className="border-b border-[#C8852E] text-[#C8852E] hover:text-[#9E6418] hover:border-[#9E6418] pb-1 font-body text-sm font-medium transition-colors"
              >
                Read more reviews &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. WHO THIS IS FOR / NOT FOR — values filter */}
      <section className="py-24 bg-[#FBF8F3]">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <ScrollReveal variant="up" duration={0.8}>
            <div className="text-center space-y-3">
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C8852E] block">
                Values Filter
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#322C2B] font-light tracking-tight pb-2">
                Who I work with
              </h2>
              <p className="font-body text-base text-[#6E655E] max-w-xl mx-auto font-light leading-relaxed">
                I meet you fully — but you keep the wheel. That is what makes it last. Here is how we know if we are aligned.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* THIS IS FOR YOU IF */}
            <ScrollReveal variant="right" duration={0.85}>
              <div className="bg-white border border-[#F2ECE3] rounded-2xl p-8 md:p-10 shadow-lg shadow-[#322C2B]/5 border-t-4 border-t-[#C8852E] space-y-6 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#C8852E]/10 rounded-lg text-[#C8852E]">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="font-display text-xl text-[#322C2B] tracking-wide font-light">
                    This with serve you beautifully if:
                  </h4>
                </div>

                <ul className="space-y-4 font-body text-sm text-[#6E655E] font-light leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C8852E] shrink-0 mt-0.5" />
                    <span>You feel stuck — like there is real potential in you that your current life is not holding.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C8852E] shrink-0 mt-0.5" />
                    <span>You have been unwell for a while, you have tried a lot of things, and part of you still hopes change is possible.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C8852E] shrink-0 mt-0.5" />
                    <span>You are tired of feeling afraid of life, and you want to feel the joy of it again.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C8852E] shrink-0 mt-0.5" />
                    <span>You believe — even faintly — that people are good at the core, and that things can get better.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C8852E] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#322C2B]">You are ready to do the work, not have it done to you.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* NOT FOR YOU */}
            <ScrollReveal variant="left" duration={0.85} delay={0.15}>
              <div className="bg-white border border-[#F2ECE3] rounded-2xl p-8 md:p-10 shadow-lg shadow-[#322C2B]/5 border-t-4 border-t-[#6E655E] space-y-6 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#6E655E]/10 rounded-lg text-[#6E655E]">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="font-display text-xl text-[#322C2B] tracking-wide font-light">
                    This resides outside your path if:
                  </h4>
                </div>

                <ul className="space-y-4 font-body text-sm text-[#6E655E] font-light leading-relaxed">
                  <li className="flex items-start gap-2.5 opacity-85">
                    <X className="w-4 h-4 text-[#6E655E] shrink-0 mt-0.5" />
                    <span>You want someone to fix you while you stay a passenger in your own healing.</span>
                  </li>
                  <li className="flex items-start gap-2.5 opacity-85">
                    <X className="w-4 h-4 text-[#6E655E] shrink-0 mt-0.5" />
                    <span>You are looking for a quick, passive patch rather than a real structural transformation.</span>
                  </li>
                  <li className="flex items-start gap-2.5 opacity-85">
                    <X className="w-4 h-4 text-[#6E655E] shrink-0 mt-0.5" />
                    <span>You would rather avoid looking at what deep roots are living underneath the surface.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 8. INVITATION CTA SECTION */}
      <CallToActionSection />

      {/* Discovery Modal Popup Handler */}
      <DiscoveryModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
