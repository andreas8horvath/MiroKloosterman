'use client';

import React, { useState } from 'react';
import { Mail, Phone, Instagram, Send, CheckCircle, Clock, Calendar, HelpCircle, User } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ScrollReveal from '@/components/ScrollReveal';
import FullscreenHero from '@/components/FullscreenHero';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    struggle: '',
    interest: 'Curious / Talk to Miro',
    timeframe: 'As soon as possible',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending real data to the backend / API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      struggle: '',
      interest: 'Curious / Talk to Miro',
      timeframe: 'As soon as possible',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#FBF8F3] min-h-screen">
      
      {/* Editorial Header (True Fullscreen) */}
      <FullscreenHero
        backgroundImage="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=2000"
        overlayOpacity={0.48}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#D9A38A] block">
            Open Door
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#FBF8F3] leading-[1.12] tracking-tight">
            Let&apos;s start with a <span className="font-display italic text-[#D9A38A]">conversation.</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-[#E6E1DA]/95 font-light leading-relaxed max-w-2xl mx-auto">
            If something here resonated, the best next step is simple: a free discovery call. You tell me what is going on, I listen properly, and together we feel out whether I am the right person to guide you on this stretch of the path.
          </p>
          <p className="font-body text-xs sm:text-sm font-light text-[#D9A38A] italic tracking-wider">
            No pressure, no script — just an honest, humane conversation.
          </p>
        </div>
      </FullscreenHero>

      {/* Main contact content segment */}
      <section className="py-12 bg-white border-t border-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 overflow-hidden">
          
          {/* Column A: Coordinates */}
          <div className="lg:col-span-5 space-y-10">
            <ScrollReveal variant="left" duration={0.8}>
              <div className="space-y-4">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#C08264] block">
                  Direct Coordinates
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-light text-[#322C2B]">
                  Reach me directly
                </h2>
                <p className="font-body text-sm text-[#6E655E] font-light leading-relaxed">
                  I read everything myself. I will respond to your WhatsApp message or email personally as soon as I can.
                </p>
              </div>

              {/* Links Block */}
              <ul className="space-y-6 font-body text-sm md:text-base text-[#322C2B] font-light mt-8">
                
                {/* Email */}
                <li className="flex items-start space-x-4 border-b border-[#F2ECE3] pb-4">
                  <div className="p-3 bg-[#D9A38A]/10 rounded-full text-[#C08264] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#6E655E] block font-semibold">Email Account</span>
                    <a href="mailto:miro@mirokloosterman.com" className="hover:text-[#C08264] transition-colors font-medium">
                      miro@mirokloosterman.com
                    </a>
                  </div>
                </li>

                {/* WhatsApp */}
                <li className="flex items-start space-x-4 border-b border-[#F2ECE3] pb-4">
                  <div className="p-3 bg-[#D9A38A]/10 rounded-full text-[#C08264] shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#6E655E] block font-semibold">WhatsApp Direct</span>
                    <a href="https://wa.me/31681400180" target="_blank" rel="noopener noreferrer" className="hover:text-[#C08264] transition-colors font-medium">
                      +31 6 8140 0180
                    </a>
                  </div>
                </li>

                {/* Instagram */}
                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-[#D9A38A]/10 rounded-full text-[#C08264] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#6E655E] block font-semibold">Instagram Portals</span>
                    <div className="flex flex-col space-y-1 font-medium">
                      <a href="https://instagram.com/miro_kloosterman" target="_blank" rel="noopener noreferrer" className="hover:text-[#C08264] transition-colors">
                        @miro_kloosterman
                      </a>
                      <a href="https://instagram.com/healthwithmiro" target="_blank" rel="noopener noreferrer" className="hover:text-[#C08264] transition-colors text-xs text-[#6E655E]">
                        @healthwithmiro
                      </a>
                    </div>
                  </div>
                </li>

              </ul>

              <div className="pt-4 flex flex-col items-start leading-tight mt-6">
                <span className="font-display italic text-lg text-[#6E655E]">Warmly,</span>
                <span className="font-display text-xl font-light text-[#322C2B] mt-0.5">Miro Kloosterman</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Column B: Inline call planner card */}
          <div className="lg:col-span-7 bg-[#FBF8F3] border border-[#F2ECE3] rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <ScrollReveal variant="right" duration={0.8}>
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#D9A38A]/10 rounded-full blur-3xl pointer-events-none" />

            {!isSubmitted ? (
              <form id="contact-page-scheduler" onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl text-[#322C2B] font-light">
                    Plan your free call
                  </h3>
                  <p className="font-body text-xs text-[#6E655E] uppercase tracking-wider font-light">
                    Direct scheduling submission
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C08264]" /> Complete Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Edith Norbert"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C08264] font-body transition-colors"
                  />
                </div>

                {/* Contact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] block">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C08264] font-body transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] block">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+31 6 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C08264] font-body transition-colors"
                    />
                  </div>
                </div>

                {/* Modality area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] block">
                    What are you most curious about?
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm appearance-none focus:outline-none focus:border-[#C08264] font-body text-[#322C2B]"
                  >
                    <option>Private Retreat (One-on-One, Bali)</option>
                    <option>Group Retreat / Water to Stars</option>
                    <option>Transformative Breathwork</option>
                    <option>Structural Body Reset Therapy</option>
                    <option>Coaching & Mentoring</option>
                    <option>Curious / Talk to Miro</option>
                  </select>
                </div>

                {/* Explanation */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] block">
                    What are you working through or seeking?
                  </label>
                  <div className="bg-[#F2ECE3]/30 border border-[#F2ECE3] rounded-lg p-4 space-y-2 text-xs text-[#6E655E] font-light leading-relaxed">
                    <p className="font-medium text-[#322C2B]">Please consider sharing:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>What is it that you need support with?</li>
                      <li>Do you have any health challenges?</li>
                      <li>Are you willing to put in the work, and invest your time and energy?</li>
                      <li>What is the financial investment you can and want to commit to your journey?</li>
                    </ul>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Write as much or as little as feels aligned..."
                    value={formData.struggle}
                    onChange={(e) => setFormData({ ...formData, struggle: e.target.value })}
                    className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C08264] font-body transition-colors"
                  />
                </div>

                {/* Scheduling option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C08264]" /> Schedule Timeframe
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm appearance-none focus:outline-none focus:border-[#C08264] font-body text-[#322C2B]"
                    >
                      <option>As soon as possible</option>
                      <option>This coming week</option>
                      <option>Next 2 weeks</option>
                      <option>Flexible / Anytime</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D9A38A] text-[#1E1918] hover:bg-[#C08264] hover:text-[#1E1918] disabled:bg-[#D9A38A]/50 disabled:text-[#1E1918]/50 disabled:cursor-not-allowed font-body text-sm py-4 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-[#1E1918] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit & Schedule Discovery call
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success form screen */
              <div id="contact-success" className="text-center py-12 space-y-6 flex flex-col items-center">
                <div className="p-4 bg-[#D9A38A]/10 text-[#C08264] rounded-full">
                  <CheckCircle className="w-16 h-16" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-3xl font-light text-[#322C2B]">
                    Talk to you soon, {formData.name.split(' ')[0]}
                  </h3>
                  <p className="font-body text-xs text-[#6E655E] tracking-wider uppercase font-semibold">
                    Submission Received
                  </p>
                </div>

                <p className="font-body text-sm text-[#322C2B] leading-relaxed max-w-sm font-light">
                  I will reach out to you over WhatsApp at {formData.phone} or via email at {formData.email} as soon as possible. We will find a relaxed slot that works for both of us.
                </p>

                <button
                  onClick={handleReset}
                  className="border border-[#D9A38A]/40 text-[#D9A38A] hover:bg-[#D9A38A] hover:text-[#1E1918] px-8 py-3 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 text-sm font-medium mt-4 cursor-pointer"
                >
                  Reset Form & Plan Another Call
                </button>
              </div>
            )}
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Required privacy disclosure */}
      <section className="py-8 bg-white border-t border-[#F2ECE3]/60 text-center text-xs text-[#6E655E] font-light">
        <p>
          [Privacy Policy required before publishing — EU. All Dutch & NL business regulations apply where applicable.]
        </p>
      </section>

    </div>
  );
}
