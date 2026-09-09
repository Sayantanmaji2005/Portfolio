import { motion } from 'framer-motion';

const ProfessionalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] transition-colors duration-500 bg-[var(--bg-base)]">
      {/* ── Dark Mode Professional Mesh & Glow Background ── */}
      <div className="bg-dark-only absolute inset-0">

        {/* Ambient Glow 1 — Deep Sapphire Blue */}
        <motion.div
          className="absolute -top-[20%] left-[15%] w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0) 70%)',
            willChange: 'transform',
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ambient Glow 2 — Deep Indigo / Violet */}
        <motion.div
          className="absolute top-[35%] right-[10%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.09) 0%, rgba(99, 102, 241, 0) 70%)',
            willChange: 'transform',
          }}
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -25, 0],
            scale: [1, 0.94, 1.06, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ambient Glow 3 — Soft Cyan Accent */}
        <motion.div
          className="absolute -bottom-[15%] left-[25%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0) 70%)',
            willChange: 'transform',
          }}
          animate={{
            x: [0, 35, -40, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft Vignette Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.8) 100%)'
          }}
        />
      </div>

      {/* ── Light Mode Professional Clean Background ── */}
      <div className="bg-light-only absolute inset-0 bg-[#FAFAFC]">
        {/* Soft Light Mode Radial Ambient Lighting */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.05) 0%, rgba(248, 250, 252, 0) 70%)',
          }}
        />

        <motion.div
          className="absolute top-[25%] right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
            willChange: 'transform',
          }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 25, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProfessionalBackground;
