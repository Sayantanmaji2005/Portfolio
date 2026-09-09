import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILLS_TO_SHOW = [
  "React.js",
  "Node.js & Express",
  "MongoDB & Supabase",
  "Python & AI Models",
  "Full Stack Architecture"
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  const logs = [
    "INITIALIZING SYSTEM CORE...",
    "LOADING DEVELOPER MODULES...",
    "COMPILING FULL-STACK ASSETS...",
    "CONNECTING AI TELEMETRY...",
    "OPTIMIZING GRAPHICS ENGINE...",
    "PORTFOLIO READY"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowWelcome(true);
            setTimeout(onComplete, 2400);
          }, 400);
          return 100;
        }

        // Cinematic slow-motion step increment (~5.5s total loading time)
        const step = Math.random() * 1.2 + 0.5;
        const next = Math.min(prev + step, 100);

        const index = Math.min(Math.floor((next / 100) * logs.length), logs.length - 1);
        if (index !== logIndex) {
          setLogIndex(index);
        }

        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete, logIndex, logs.length]);

  const currentProgress = Math.floor(progress);

  return (
    <motion.div
      className="fixed inset-0 bg-[#08090D] z-[9999] flex flex-col items-center justify-center overflow-hidden select-none p-6 text-white"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.03,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
      }}
    >
      {/* 🌌 Soft Ambient Glows */}
      <motion.div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 blur-[130px] pointer-events-none z-0"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.85, 0.6]
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="z-10 flex flex-col items-center justify-center max-w-full text-center">
        <AnimatePresence mode="wait">
          {!showWelcome ? (
            <motion.div
              key="loader-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              {/* Futuristic Cyber Ring Spinner */}
              <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                {/* Outer spinning neon arc */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-400 border-r-indigo-500 shadow-[0_0_20px_#38bdf8]"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                />
                {/* Inner counter rotation ring */}
                <motion.div 
                  className="absolute inset-2 rounded-full border border-transparent border-b-cyan-300 opacity-60"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                {/* Center Percentage Display */}
                <span className="font-mono text-sm font-bold text-sky-400 tracking-wider">
                  {currentProgress}%
                </span>
              </div>

              {/* Developer Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-400 uppercase mb-3 font-heading"
                style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
              >
                SAYANTAN MAJI
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm font-mono text-slate-400 tracking-[0.25em] uppercase font-semibold mb-8"
              >
                Full Stack Engineer <span className="text-sky-400 font-bold mx-1.5">•</span> AI Developer
              </motion.p>

              {/* Tech Skill Badges Cascade */}
              <div className="flex flex-wrap justify-center gap-2 max-w-lg mb-10">
                {SKILLS_TO_SHOW.map((skill, index) => {
                  const isVisible = progress >= (15 + index * 18);
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md flex items-center gap-2 shadow-lg"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                      <span>{skill}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Line & Status Telemetry */}
              <div className="w-72 sm:w-96 flex flex-col items-center">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative mb-3">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_12px_#38bdf8]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
                <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase flex items-center justify-between w-full">
                  <span>{logs[logIndex]}</span>
                  <span className="text-sky-400 font-bold">SYS.OK</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="welcome-panel"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <h2
                className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3"
                style={{
                  fontFamily: 'Syne, Space Grotesk, sans-serif',
                  textShadow: '0 0 30px rgba(56, 189, 248, 0.4)'
                }}
              >
                Welcome to My Realm
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-widest uppercase">
                Software Engineering • AI Systems • Scalable Applications
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
