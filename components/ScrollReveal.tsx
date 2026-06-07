'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale-up';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  triggerOnce = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  // Pre-configured elegant, low-offset, GPU-friendly translations
  const variants = {
    up: { y: 24, x: 0, scale: 1 },
    down: { y: -24, x: 0, scale: 1 },
    left: { x: 24, y: 0, scale: 1 }, // slides in leftward (from right)
    right: { x: -24, y: 0, scale: 1 }, // slides in rightward (from left)
    fade: { x: 0, y: 0, scale: 1 },
    'scale-up': { x: 0, y: 0, scale: 1.03 }, // Apple style gentle scale reveal
  };

  const initial = {
    opacity: 0,
    ...variants[variant],
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Ultra-smooth premium cubic-bezier easing
    },
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: triggerOnce, amount: threshold }}
      className={`${className} will-change-transform`}
    >
      {children}
    </motion.div>
  );
}
