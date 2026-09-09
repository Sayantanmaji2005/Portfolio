import { motion } from 'framer-motion';

const ProfessionalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[var(--bg-base)] transition-colors duration-500 ease-out">
      {/* ── Dark Mode Linear / Vercel Aesthetic Atmosphere ── */}
      <div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 dark:opacity-100 bg-[#0B0F19]">
        {/* Developer Blueprint Micro-Dot Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Ambient Aura Beam 1 — Electric Indigo & Sapphire (Top Center-Left) */}
        <motion.div
          className="absolute -top-[10%] left-[20%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, rgba(37, 99, 235, 0.08) 40%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translateZ(0)',
          }}
          animate={{
            x: [0, 35, -25, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ambient Aura Beam 2 — Velvet Violet / Purple (Mid Right) */}
        <motion.div
          className="absolute top-[30%] right-[10%] w-[650px] h-[650px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, rgba(99, 102, 241, 0.06) 45%, transparent 70%)',
            filter: 'blur(65px)',
            transform: 'translateZ(0)',
          }}
          animate={{
            x: [0, -40, 25, 0],
            y: [0, 35, -25, 0],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ambient Aura Beam 3 — Cyber Cyan Glow (Bottom Left) */}
        <motion.div
          className="absolute -bottom-[10%] left-[15%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(14, 165, 233, 0.05) 45%, transparent 70%)',
            filter: 'blur(55px)',
            transform: 'translateZ(0)',
          }}
          animate={{
            x: [0, 30, -35, 0],
            y: [0, -20, 25, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Linear Top Radial Glow Accent */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* ── Light Mode Professional Atmosphere ── */}
      <div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-100 dark:opacity-0 bg-[#F8FAFC]">
        {/* Soft Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Soft Light Mode Radial Lighting */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 15%, rgba(37, 99, 235, 0.05) 0%, rgba(248, 250, 252, 0) 70%)',
          }}
        />

        <motion.div
          className="absolute top-[25%] right-[10%] w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
            transform: 'translateZ(0)',
          }}
          animate={{
            x: [0, -20, 15, 0],
            y: [0, 20, -15, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProfessionalBackground;
