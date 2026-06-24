'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Newsletter error:', err);
      setStatus('error');
      setMessage('Unable to connect. Please check your connection and try again.');
    }
  };

  return (
    <div 
      className="relative w-full bg-gradient-to-br from-[#253C39] to-[#1E3331] rounded-[40px] md:rounded-[80px] p-8 md:p-14 border border-[#D9A38A]/25 shadow-[0_20px_50px_rgba(18,27,26,0.4)] overflow-hidden" 
      id="newsletter-section"
    >
      {/* Decorative Golden Ambient Flare Inside Card */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D9A38A]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#5A7470]/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Original Copy & Invitation */}
        <div className="lg:col-span-6 flex flex-col space-y-3.5">
          <div className="inline-flex items-center space-x-2 text-[#D9A38A]">
            <span className="w-1.5 h-1.5 bg-[#D9A38A] rounded-full animate-pulse" />
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase">
              Monthly Reflections
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-wide leading-tight">
            Stay in the <span className="italic font-display text-[#D9A38A]">flow.</span>
          </h3>
          <p className="font-body text-sm text-[#FBF8F3]/80 font-light leading-relaxed max-w-xl">
            Receive Miro&apos;s personal letters on somatic integration, mindful movement, breathwork, and early, exclusive invitations to private and group retreats around the world.
          </p>
        </div>

        {/* Right Column: Dynamic Form */}
        <div className="lg:col-span-6 w-full">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#5A7470]/20 border border-[#D9A38A]/30 rounded-2xl p-6 flex items-start space-x-4"
                id="newsletter-success-box"
              >
                <div className="bg-[#D9A38A]/25 p-2.5 rounded-full shrink-0 text-[#D9A38A]">
                  <Check className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-lg text-white font-medium">Reflections Initiated</h4>
                  <p className="font-body text-sm text-[#FBF8F3]/85 font-light leading-relaxed">
                    {message}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                  <div className="relative flex items-center group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Your email address"
                      required
                      className="w-full bg-[#1E3331]/80 text-white placeholder-[#FBF8F3]/40 border border-[#5A7470]/40 rounded-full px-6 py-4.5 text-sm font-body font-light focus:outline-none focus:border-[#D9A38A] transition-all duration-300 pr-16 shadow-inner"
                      id="newsletter-email-input"
                      disabled={status === 'loading'}
                    />
                    
                    <button
                      type="submit"
                      disabled={status === 'loading' || !email}
                      className="absolute right-2 bg-[#D9A38A] text-[#1E1918] hover:bg-[#C08264] hover:text-white p-3 rounded-full transition-all duration-300 ease-out active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(217,163,138,0.2)]"
                      id="newsletter-submit-button"
                      aria-label="Subscribe to newsletter"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                      )}
                    </button>
                  </div>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-300 font-body font-light pl-4"
                      id="newsletter-error-message"
                    >
                      {message}
                    </motion.p>
                  )}

                  <p className="font-body text-[11px] text-[#FBF8F3]/50 font-light pl-4">
                    By subscribing, you agree to receive Miro&apos;s monthly emails. No spam. Unsubscribe at any time.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
