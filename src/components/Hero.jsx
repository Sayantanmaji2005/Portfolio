import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { playHoverSound, playClickSound } from '../utils/soundFx';
import MagneticButton from './MagneticButton';
import { FiArrowRight, FiCode, FiZap, FiGlobe, FiDownload, FiBook, FiBriefcase, FiAward, FiMail, FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';

const statCards = [
  { label: "Projects Built",    value: "07+", hex: "#2563EB", bg: "rgba(37,99,235,0.1)", icon: <FiCode /> },
  { label: "Certifications",    value: "02",  hex: "#10B981", bg: "rgba(16,185,129,0.1)", icon: <FiBook /> },
  { label: "Internship Offers", value: "02",  hex: "#F97316", bg: "rgba(249,115,22,0.1)", icon: <FiBriefcase /> },
  { label: "Open to Work",      value: "Active", hex: "#8B5CF6", bg: "rgba(139,92,246,0.1)", icon: <FiAward /> },
];

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  /* ── Auto Pause Video when Scrolled Out of View & Auto Play when Scrolled In ── */
  useEffect(() => {
    const section = document.getElementById('home');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden z-10 overflow-x-hidden text-white"
    >
      {/* ── SPLIT BACKGROUND: Left Side Video, Right Side Constant Sleek Black Theme ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden flex flex-col lg:flex-row bg-[#08090D]">
        {/* Left Side: Video Background */}
        <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
          <video
            ref={videoRef}
            src="/video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover brightness-105 contrast-105"
          />
          {/* Subtle gradient overlay to soften video edge into right panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#08090D] z-[1] hidden lg:block" />
          <div className="absolute inset-0 bg-[#08090D]/50 z-[1] lg:hidden" />
        </div>

        {/* Right Side: Constant Black Theme Background */}
        <div className="w-full lg:w-1/2 h-full bg-[#08090D] relative hidden lg:block border-l border-zinc-800/60">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-950/20 via-[#08090D] to-[#08090D]" />
        </div>
      </div>

      {/* Organic Glow Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px]"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(139,92,246,0.15))',
            filter: 'blur(40px)',
          }}
          animate={{
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "60% 40% 30% 70% / 50% 60% 50% 40%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
            ],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Sound Mute/Unmute Control in Bottom LEFT Corner */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30">
        <button
          onClick={toggleMute}
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
          className="p-2 sm:p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 border border-slate-700 text-white backdrop-blur-md shadow-2xl transition-all transform hover:scale-105 cursor-pointer flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono"
        >
          {isMuted ? <FiVolumeX className="w-3.5 h-3.5 text-slate-400" /> : <FiVolume2 className="w-3.5 h-3.5 text-emerald-400" />}
          <span className="hidden xs:inline">{isMuted ? "Audio Off" : "Audio On"}</span>
        </button>
      </div>

      {/* ── TOP HEADER BAR (Matching Reference Template) ── */}
      <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
        {/* Top Left Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono font-bold tracking-wide text-slate-300 pointer-events-auto"
        >
          © Code by Sayantan
        </motion.div>

        {/* Top Right Tagline */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block max-w-sm text-right text-[11px] leading-relaxed text-slate-400 font-sans pointer-events-auto"
        >
          Passionate Creative Full-Stack Developer &amp; AI Builder dedicated to crafting exceptional digital experiences.
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 min-h-[82vh] pt-28 pb-36 sm:pb-40 lg:pb-44">

        {/* ── LEFT COLUMN: Video Viewing Space ── */}
        <div className="lg:col-span-6 hidden lg:block min-h-[350px]" />

        {/* ── RIGHT COLUMN: Content Panel ── */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start space-y-5 text-left z-20">

          {/* Avatar & Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3.5"
          >
            <div 
              className="relative group cursor-pointer" 
              onClick={() => scrollTo('about')}
              title="Click to view full profile"
            >
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full p-[2px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-emerald-400 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/sayanpic.png" 
                  alt="Sayantan Maji" 
                  className="w-full h-full object-cover object-top rounded-full border-2 border-[#08090D]"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#08090D] rounded-full animate-pulse" />
            </div>

            <div
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 backdrop-blur-md"
              style={{ background: 'rgba(34, 197, 94, 0.15)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400">
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Name heading */}
          <div className="space-y-2">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.6 }}
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="text-gradient glitch-text" data-text="Sayantan Maji"
                style={{ filter: 'drop-shadow(0 0 25px rgba(56,189,248,0.4))' }}>
                Sayantan Maji
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.div 
              className="text-lg sm:text-xl font-mono text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed h-10"
              initial={{ opacity:0 }} animate={{ opacity:1 }}
              transition={{ duration:0.5, delay:0.7 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Engineer.',
                  1500,
                  'AI Systems Builder.',
                  1500,
                  'Open Source Contributor.',
                  1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#38BDF8] font-semibold"
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            className="space-y-2.5 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-100"
            initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:0.8 }}
          >
            <p className="text-white font-semibold">
              Hello, I’m <strong className="text-cyan-300 font-bold">Sayantan Maji</strong>, a Computer Science and Engineering student at{' '}
              <strong className="text-cyan-300 font-bold">Haldia Institute of Technology</strong>, specializing in scalable full-stack architecture and applied generative AI systems.
            </p>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
              My engineering core revolves around designing resilient backend services and high-performance, component-driven user interfaces using modern stacks like <span className="text-cyan-300 font-mono text-xs font-semibold underline underline-offset-4 decoration-cyan-400/60">React</span>, <span className="text-cyan-300 font-mono text-xs font-semibold underline underline-offset-4 decoration-cyan-400/60">Node.js</span>, <span className="text-cyan-300 font-mono text-xs font-semibold underline underline-offset-4 decoration-cyan-400/60">Express</span>, and distributed database systems.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-3 pt-1"
            initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:0.9 }}
          >
            <MagneticButton>
              <button 
                onMouseEnter={playHoverSound}
                onClick={() => { playClickSound(); scrollTo('projects'); }}
                className="flex items-center gap-2 text-xs sm:text-sm px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer hover:scale-105"
                style={{ background: '#2563EB', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(37,99,235,0.4)' }}>
                <span>View Projects</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <a 
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                href="/Sayantan_Maji_Resume.pdf" download="Sayantan_Maji_Resume.pdf"
                className="flex items-center gap-2 text-xs sm:text-sm px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer hover:scale-105 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 backdrop-blur-md">
                <FiDownload className="w-4 h-4 text-blue-400" />
                <span>Resume</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <button 
                onMouseEnter={playHoverSound}
                onClick={() => { playClickSound(); scrollTo('contact'); }}
                className="flex items-center gap-2 text-xs sm:text-sm px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer hover:scale-105 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 backdrop-blur-md">
                <FiMail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </button>
            </MagneticButton>
          </motion.div>

        </div>
      </div>

      {/* ── FLOATING STATS DASHBOARD CARD ANCHORED AT BOTTOM-RIGHT CORNER (SAFE SPACING GUARANTEED) ── */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-10 lg:right-12 z-30 max-w-[320px] sm:max-w-[385px] hidden sm:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-3.5 sm:p-5 rounded-3xl bg-slate-950/95 backdrop-blur-2xl border border-slate-800/90 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col gap-3 sm:gap-4 text-white"
        >
          {/* Header: Open to Work */}
          <div className="flex items-center justify-between border-b border-slate-800/90 pb-2.5 sm:pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-emerald-400">Open to Work</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-cyan-300 bg-slate-800/90 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-slate-700/80 font-semibold shadow-inner">
              Full-Stack & AI
            </span>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            <div className="flex flex-col items-center p-2 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 text-center shadow-lg">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-1"><FiCode className="w-3 sm:w-3.5 h-3 sm:h-3.5"/></div>
              <p className="text-base sm:text-lg font-bold font-heading text-white leading-none">07+</p>
              <p className="text-[8px] sm:text-[9px] text-slate-300 font-mono uppercase tracking-wider mt-1 font-medium">Projects</p>
            </div>

            <div className="flex flex-col items-center p-2 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 text-center shadow-lg">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-1"><FiBook className="w-3 sm:w-3.5 h-3 sm:h-3.5"/></div>
              <p className="text-base sm:text-lg font-bold font-heading text-white leading-none">02</p>
              <p className="text-[8px] sm:text-[9px] text-slate-300 font-mono uppercase tracking-wider mt-1 font-medium">Certifs</p>
            </div>

            <div className="flex flex-col items-center p-2 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 text-center shadow-lg">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-1"><FiBriefcase className="w-3 sm:w-3.5 h-3 sm:h-3.5"/></div>
              <p className="text-base sm:text-lg font-bold font-heading text-white leading-none">02</p>
              <p className="text-[8px] sm:text-[9px] text-slate-300 font-mono uppercase tracking-wider mt-1 font-medium">Offers</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-blue-500 to-transparent"
          animate={{ scaleY:[1,1.5,1], opacity:[0.5,1,0.5] }}
          transition={{ duration:2, repeat:Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;


