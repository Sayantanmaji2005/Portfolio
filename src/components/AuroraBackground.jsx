import { motion } from 'framer-motion';

const AuroraBackground = () => {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >      {/* Aurora blob — Purple */}
      <motion.div
        className="absolute -top-[30%] -left-[15%] w-[90vw] h-[90vh] rounded-full"
        style={{
          background: 'var(--aurora-purple)',
          backgroundImage: `radial-gradient(ellipse at center, var(--aurora-purple) 0%, transparent 70%)`,
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
        animate={{ x:[0,30,-20,0], y:[0,-25,15,0], scale:[1,1.1,0.95,1] }}
        transition={{ duration:30, repeat:Infinity, ease:'easeInOut' }}
      />

      {/* Aurora blob — Cyan */}
      <motion.div
        className="absolute top-[20%] right-[-20%] w-[80vw] h-[100vh] rounded-full"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, var(--aurora-cyan) 0%, transparent 70%)`,
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
        animate={{ x:[0,-35,25,0], y:[0,30,-20,0], scale:[1,0.95,1.1,1] }}
        transition={{ duration:35, repeat:Infinity, ease:'easeInOut' }}
      />

      {/* Aurora blob — Pink */}
      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[75vw] h-[75vh] rounded-full"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, var(--aurora-pink) 0%, transparent 70%)`,
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
        animate={{ x:[0,25,-30,0], y:[0,20,-15,0], scale:[1,1.05,0.98,1] }}
        transition={{ duration:32, repeat:Infinity, ease:'easeInOut' }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-70" />

      {/* Vignette edges */}
      <div className="absolute top-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to bottom, var(--vignette-color), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to top, var(--vignette-color), transparent)' }} />
      <div className="absolute top-0 bottom-0 left-0 w-32"
        style={{ background: 'linear-gradient(to right, var(--vignette-color), transparent)', opacity:0.6 }} />
      <div className="absolute top-0 bottom-0 right-0 w-32"
        style={{ background: 'linear-gradient(to left, var(--vignette-color), transparent)', opacity:0.6 }} />
    </div>
  );
};

export default AuroraBackground;
