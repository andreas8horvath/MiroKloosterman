'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface FullscreenHeroProps {
  backgroundImage: string;
  videoSrc?: string;
  overlayOpacity?: number; // 0 to 1
  children: React.ReactNode;
  showScrollIndicator?: boolean;
}

export default function FullscreenHero({
  backgroundImage,
  videoSrc,
  overlayOpacity = 0.5,
  children,
  showScrollIndicator = true,
}: FullscreenHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Lazy-load the video after initial HTML paint to keep LCP & Core Web Vitals exceptionally high
  useEffect(() => {
    // We delay the video loading slightly or trigger it on mount
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 500); // 500ms delay to give main thread breathing room
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-[#1E1918]">
      {/* 1. First-Frame Optimized Static Background Image (Fully compatible with SEO / Speed tests) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero ambiance background"
          fill
          priority
          quality={85}
          className="object-cover object-center grayscale-[10%] brightness-[0.9]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Interactive Lazy-Loaded Loop Video (Fades in over image once loaded) */}
      {videoSrc && shouldLoadVideo && (
        <div className="absolute inset-0 z-1 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            onPlay={() => setIsVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {/* 3. Dark Warm Editorial Tint Overlay for contrast & maximum readability */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at center, rgba(30, 25, 24, ${overlayOpacity - 0.15}) 0%, rgba(30, 25, 24, ${overlayOpacity + 0.15}) 100%)`
        }}
      />

      {/* 4. Content Holder */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center justify-center h-full pt-16">
        {children}
      </div>

      {/* 5. Elegant Micro-Animated Scroll down indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto">
          <button
            onClick={handleScrollDown}
            aria-label="Scroll down"
            className="flex flex-col items-center gap-2 group text-[#FBF8F3]/60 hover:text-[#D9A38A] transition-colors"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className="w-4 h-4 text-[#D9A38A]" />
            </motion.div>
          </button>
        </div>
      )}
    </section>
  );
}
