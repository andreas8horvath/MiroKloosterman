'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  Globe, 
  Instagram, 
  Calendar,
  Sparkles,
  Compass,
  Volume2,
  VolumeX,
  Check,
  Send
} from 'lucide-react';
import DiscoveryModal from '@/components/DiscoveryModal';

export default function BioPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAudioExpanded, setIsAudioExpanded] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Audio Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(600); // 10 minutes default
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Hold (Empty)'>('Inhale');
  const [breathProgress, setBreathProgress] = useState(0); // 0 to 100 for animation

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simple breath guide cyclical timer (4s inhale, 4s hold, 4s exhale, 4s hold)
  useEffect(() => {
    if (!isPlaying) return;

    let durationInSec = 4;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += 0.05;
      const pct = (elapsed / durationInSec) * 100;
      setBreathProgress(Math.min(pct, 100));

      if (elapsed >= durationInSec) {
        elapsed = 0;
        setBreathPhase((prev) => {
          if (prev === 'Inhale') return 'Hold';
          if (prev === 'Hold') return 'Exhale';
          if (prev === 'Exhale') return 'Hold (Empty)';
          return 'Inhale';
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, breathPhase]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Audio play started", err);
      });
      setIsPlaying(true);
    }
  };

  const handleAudioTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 600);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsSubmitting(true);

    // Simulate real database integration / API trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setEmailSubmitted(true);
      setIsPlaying(true);
      // Let standard HTML5 audio start playing if possible
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
      }, 100);
    }, 1000);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div id="bio-container" className="min-h-screen bg-[#FBF8F3] text-[#322C2B] flex flex-col items-center px-4 py-12 md:py-16 selection:bg-[#C8852E]/10 select-none">
      
      {/* Soft natural light background glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#C8852E]/10 to-transparent pointer-events-none blur-3xl" />
      
      <div className="w-full max-w-md flex flex-col items-center relative z-10">
        
        {/* Profile Header */}
        <div id="bio-profile" className="flex flex-col items-center text-center mb-8">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[#C8852E]/20 to-[#D9A38A]/40 mb-4 shadow-sm">
            <div className="w-full h-full rounded-full overflow-hidden border border-white relative bg-[#F2ECE3]">
              <img 
                src="https://res.cloudinary.com/dt806m3nm/image/upload/c_scale,w_400,f_auto,q_auto/v1776505357/4-1920w.jpg_uiikl9.webp" 
                alt="Miro Kloosterman" 
                className="w-full h-full object-cover grayscale-[10%] brightness-[1.03] scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <h1 className="font-display text-4xl font-light text-[#322C2B] tracking-tight">
            Miro Kloosterman
          </h1>
          
          <p className="font-body text-xs text-[#C8852E] font-medium tracking-widest uppercase mt-1">
            Healer &middot; Coach &middot; Retreat Guide
          </p>
          
          <p className="font-body text-xs text-[#6E655E] tracking-normal mt-0.5">
            Bali &amp; online, worldwide
          </p>

          <p className="font-display italic text-[#6E655E] text-base mt-4 max-w-xs font-light leading-relaxed">
            &ldquo;Come home to yourself. Feel alive again.&rdquo;
          </p>
        </div>

        {/* Buttons / Links List */}
        <div id="bio-actions" className="w-full space-y-4">
          
          {/* Button 1: Interactive Practice Expandable Card */}
          <div className="border border-[#F2ECE3] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              id="btn-breath-audio"
              onClick={() => setIsAudioExpanded(!isAudioExpanded)}
              className="w-full p-4 md:p-5 flex items-center justify-between transition-colors hover:bg-[#FBF8F3] text-left"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#C8852E]/10 flex items-center justify-center text-[#C8852E] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-body text-[15px] font-semibold text-[#322C2B] flex items-center gap-1.5">
                    🤍 Free: A Breath to Come Home
                  </h3>
                  <p className="font-body text-[13px] text-[#6E655E] font-light mt-0.5 leading-tight">
                    A free 10-minute guided practice. A soft place to begin.
                  </p>
                </div>
              </div>
              <div className="text-[#6E655E] shrink-0 ml-2">
                {isAudioExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isAudioExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="border-t border-[#FBF8F3] bg-[#FBF8F3]/50"
                >
                  <div className="p-5 md:p-6">
                    {!emailSubmitted ? (
                      /* Lead Capture Form */
                      <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <p className="font-body text-xs text-[#6E655E] leading-relaxed font-light">
                          Enter your details below to unlock and immediately listen to the 10-minute guided breathwork track right here in your browser.
                        </p>
                        
                        <div className="space-y-3">
                          <input
                            type="text"
                            required
                            placeholder="Your first name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white border border-[#F2ECE3] rounded-lg px-3.5 py-2.5 text-xs text-[#322C2B] outline-none focus:border-[#C8852E] transition-colors"
                          />
                          <input
                            type="email"
                            required
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white border border-[#F2ECE3] rounded-lg px-3.5 py-2.5 text-xs text-[#322C2B] outline-none focus:border-[#C8852E] transition-colors"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#C8852E] text-white hover:bg-[#9E6418] disabled:bg-[#C8852E]/50 disabled:cursor-not-allowed text-xs font-semibold py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                        >
                          {isSubmitting ? (
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              Receive &amp; Listen Now 🌿
                            </>
                          )}
                        </button>
                      </form>
                    ) : (
                      /* Active Audio Player with Guided Breathing Circle */
                      <div className="flex flex-col items-center py-2 space-y-6">
                        
                        {/* Audio instance */}
                        <audio
                          ref={audioRef}
                          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                          preload="auto"
                          onTimeUpdate={handleAudioTimeUpdate}
                          onLoadedMetadata={handleLoadedMetadata}
                          onEnded={handleAudioEnded}
                        />

                        {/* Interactive breathing visual guide */}
                        <div className="flex flex-col items-center justify-center space-y-3">
                          <div className="w-24 h-24 rounded-full bg-[#C8852E]/5 flex items-center justify-center relative">
                            {/* Pulse background sphere */}
                            <motion.div
                              animate={{
                                scale: isPlaying ? (breathPhase === 'Inhale' ? 1.4 : breathPhase === 'Hold' ? 1.4 : breathPhase === 'Exhale' ? 0.95 : 0.95) : 1,
                                opacity: isPlaying ? [0.4, 0.7, 0.4] : 0.4
                              }}
                              transition={{
                                duration: isPlaying ? 4 : 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                              }}
                              className="absolute inset-0 rounded-full bg-[#C8852E]/10"
                            />
                            {/* Inner core */}
                            <div className="relative w-16 h-16 rounded-full bg-white shadow-inner border border-[#F2ECE3] flex flex-col items-center justify-center">
                              <span className="font-body text-[10px] font-medium text-[#C8852E] tracking-widest uppercase">
                                {isPlaying ? breathPhase : 'Ready'}
                              </span>
                            </div>
                          </div>
                          
                          {isPlaying && (
                            <div className="w-32 bg-[#F2ECE3] h-1 rounded-full overflow-hidden">
                              <div 
                                className="bg-[#C8852E] h-full transition-all duration-75"
                                style={{ width: `${breathProgress}%` }}
                              />
                            </div>
                          )}
                          <p className="font-body text-[11px] text-[#6E655E] font-light text-center max-w-xs">
                            {isPlaying ? "Breathe in harmony with the changing states" : "Click Play below to begin the guided journey"}
                          </p>
                        </div>

                        {/* Audio seek track */}
                        <div className="w-full space-y-1">
                          <input
                            type="range"
                            min={0}
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full h-1 bg-[#F2ECE3] accent-[#C8852E] rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between font-body text-[10px] text-[#6E655E] mt-1 font-mono">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                          </div>
                        </div>

                        {/* Player Controls */}
                        <div className="flex items-center gap-6">
                          <button
                            onClick={toggleMute}
                            className="p-2.5 rounded-full hover:bg-white text-[#6E655E] hover:text-[#C8852E] transition-colors cursor-pointer"
                            title={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </button>

                          <button
                            onClick={togglePlay}
                            className="w-14 h-14 rounded-full bg-[#C8852E] text-white flex items-center justify-center hover:bg-[#9E6418] transition-all shadow-md active:scale-95 cursor-pointer"
                          >
                            {isPlaying ? <Pause className="w-6 h-6 shrink-0" /> : <Play className="w-6 h-6 translate-x-0.5 shrink-0" />}
                          </button>

                          <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center" title="Unlocked">
                            <Check className="w-4 h-4" />
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Button 2: Book Discovery Call (Launches local Modal) */}
          <button
            id="btn-discovery-call"
            onClick={() => setIsBookingOpen(true)}
            className="w-full p-4 md:p-5 border border-[#C8852E]/30 bg-white hover:bg-[#C8852E]/5 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#C8852E] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-body text-[15px] font-bold text-[#322C2B] flex items-center gap-1.5">
                  💬 Book a Free Discovery Call
                </h3>
                <p className="font-body text-[13px] text-[#6E655E] font-light mt-0.5 leading-tight">
                  An honest conversation &mdash; no pressure, no script.
                </p>
              </div>
            </div>
          </button>

          {/* Button 3: Work With Me (Links to Modalities page) */}
          <Link
            href="/modalities"
            className="w-full p-4 md:p-5 border border-[#F2ECE3] bg-white hover:bg-[#F2ECE3]/30 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-all text-left group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#F2ECE3] text-[#C8852E] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-body text-[15px] font-semibold text-[#322C2B]">
                  🌿 Work With Me
                </h3>
                <p className="font-body text-[13px] text-[#6E655E] font-light mt-0.5 leading-tight">
                  1-on-1 sessions &amp; holistic online journeys.
                </p>
              </div>
            </div>
          </Link>

          {/* Button 4: Retreats in Bali (Links to Retreats page) */}
          <Link
            href="/retreats"
            className="w-full p-4 md:p-5 border border-[#F2ECE3] bg-white hover:bg-[#F2ECE3]/30 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-all text-left group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#F2ECE3] text-[#C8852E] flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-body text-[15px] font-semibold text-[#322C2B]">
                  🌴 Retreats in Bali
                </h3>
                <p className="font-body text-[13px] text-[#6E655E] font-light mt-0.5 leading-tight">
                  Private healing retreats &amp; group starry sky integrations.
                </p>
              </div>
            </div>
          </Link>

          {/* Button 5: Follow on Instagram */}
          <a
            href="https://instagram.com/miro_kloosterman"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 md:p-5 border border-[#F2ECE3] bg-white hover:bg-[#F2ECE3]/30 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-all text-left group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#F2ECE3] text-[#C8852E] flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-body text-[15px] font-semibold text-[#322C2B]">
                  📸 Follow on Instagram
                </h3>
                <p className="font-body text-[13px] text-[#6E655E] font-light mt-0.5 leading-tight">
                  Daily guidance, breathing spaces &amp; life on the Island.
                </p>
              </div>
            </div>
          </a>

        </div>

        {/* Footer Connections */}
        <div id="bio-footer" className="w-full mt-10 text-center pb-6">
          <p className="font-body text-[11px] font-semibold uppercase tracking-wider text-[#6E655E] mb-3">
            Reach me directly
          </p>
          <div className="flex justify-center items-center gap-6 mb-6">
            <a 
              href="mailto:miro@mirokloosterman.com" 
              className="flex items-center gap-1.5 text-xs text-[#322C2B] hover:text-[#C8852E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C8852E]" />
              <span>miro@mirokloosterman.com</span>
            </a>
            <a 
              href="https://wa.me/31681400180" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-xs text-[#322C2B] hover:text-[#C8852E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8852E]" />
              <span>+31 6 8140 0180</span>
            </a>
          </div>

          <div className="border-t border-[#F2ECE3]/80 pt-5 mt-4">
            <Link 
              href="/" 
              className="font-body text-xs font-semibold hover:text-[#C8852E] tracking-wider uppercase text-[#6E655E] transition-colors inline-flex items-center gap-1"
            >
              <span>Visit the full website &rarr;</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Discovery Modal Instance specifically for bio clicks */}
      <DiscoveryModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
