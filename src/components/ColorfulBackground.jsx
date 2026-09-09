import { motion } from 'framer-motion';

const ColorfulBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#FAFAFA] z-[-2]">
      {/* Container for the glowing orbs */}
      {/* REMOVED massive blur() filter which causes severe GPU lag */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        
        {/* Blob 1: Hot Magenta */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(236,72,153,0) 70%)', top: '10%', left: '20%', willChange: 'transform' }}
          animate={{
            x: [0, 200, -100, 0],
            y: [0, 150, -50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blob 2: Electric Cyan */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, rgba(6,182,212,0) 70%)', top: '40%', right: '10%', willChange: 'transform' }}
          animate={{
            x: [0, -250, 150, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blob 3: Bright Violet */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(139,92,246,0) 70%)', bottom: '10%', left: '30%', willChange: 'transform' }}
          animate={{
            x: [0, 150, -200, 0],
            y: [0, -200, 150, 0],
            scale: [1, 1.4, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blob 4: Bright Yellow */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.6) 0%, rgba(250,204,21,0) 70%)', top: '20%', left: '60%', willChange: 'transform' }}
          animate={{
            x: [0, -150, 200, 0],
            y: [0, 250, -100, 0],
            scale: [1, 0.9, 1.5, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

      </div>
      
      {/* Subtle grid overlay to give it texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      ></div>
    </div>
  );
};

export default ColorfulBackground;
