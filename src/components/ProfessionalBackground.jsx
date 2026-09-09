import React from 'react';

/**
 * Ultra-High Performance Aesthetic Background (120 FPS, 0 Lag).
 * Uses pure pre-computed CSS radial-gradients without expensive runtime `filter: blur()`.
 */
const ProfessionalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[var(--bg-base)] transition-colors duration-300">
      {/* ── Dark Mode Linear / Vercel Deep Atmosphere ── */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[#0B0F19] transition-opacity duration-300">
        {/* Developer Blueprint Micro-Dot Grid */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Ambient Top Light Beam — Pure Gradient (0 CPU/GPU Lag) */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)'
          }}
        />

        {/* Ambient Mid-Right Glow */}
        <div 
          className="absolute top-[35%] right-[5%] w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.09) 0%, rgba(99, 102, 241, 0.04) 40%, transparent 70%)'
          }}
        />

        {/* Ambient Bottom-Left Glow */}
        <div 
          className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(37, 99, 235, 0.03) 40%, transparent 70%)'
          }}
        />
      </div>

      {/* ── Light Mode Clean Atmosphere ── */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 bg-[#F8FAFC] transition-opacity duration-300">
        {/* Soft Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Soft Light Mode Radial Lighting */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{
            background: 'radial-gradient(circle at 50% 15%, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(ProfessionalBackground);
