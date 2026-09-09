import React from 'react';
import { motion } from 'framer-motion';

/**
 * High-performance, GPU-accelerated Scroll Reveal Wrapper.
 * Delivers 60fps silky smooth cascade animations with zero flicker.
 */
export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'scale'
  distance = 35,
  duration = 0.6,
  className = ''
}) => {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    scale: { scale: 0.95, y: 15 }
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple cubic bezier for organic smoothness
      }}
      style={{
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Scroll Progress Bar that sits at the top of the viewport
 */
export const ScrollProgressBar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 z-50 origin-left"
      style={{
        scaleX: undefined, // Controlled by useScroll in App
        boxShadow: '0 0 12px rgba(56, 189, 248, 0.8)',
      }}
    />
  );
};

export default ScrollReveal;
