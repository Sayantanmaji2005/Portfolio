import { motion } from 'framer-motion';

const ProfessionalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[var(--bg-base)] transition-colors duration-500 ease-out">
      {/* ── Dark Mode Professional Mesh & Glow (Smooth Crossfade Layer) ── */}
      <div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 dark:opacity-100">
        {/* Ambient Glow 1 — Deep Sapphire Blue */}
        <motion.div
          className="absolute -top-[15%] left-[15%] w-[650px] h-[650px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0) 70%)',
            transform: 'translateZ(0)',
          }}
          animate={{
            x: [0, 30, -25, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ambient Glow 2 — Deep Indigo / Violet */}
        <motion.div
          className="absolute top-[35%] right-[10%] w-[650px] h-[650px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.09) 0%, rgba(99, 102, 241, 0) 70%)',
            transform: 'translateZ(0)',
          }}
          animate={{
            x: [0, -35, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ambient Glow 3 — Soft Cyan Accent */}
        <motion.div
          className="absolute -bottom-[10%] left-[25%] w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0) 70%)',
            transform: 'translateZ(0)',
          }}
          animate={{
            x: [0, 25, -30, 0],
            y: [0, -15, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft Vignette Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.8) 100%)'
          }}
        />
      </div>

      {/* ── Light Mode Professional Clean Background (Smooth Crossfade Layer) ── */}
      <div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-100 dark:opacity-0 bg-[#FAFAFC]">
        {/* Soft Light Mode Radial Ambient Lighting */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.04) 0%, rgba(248, 250, 252, 0) 70%)',
          }}
        />

        <motion.div
          className="absolute top-[25%] right-[10%] w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 70%)',
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
