import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiCode, FiLayers, FiActivity, FiX, FiTerminal } from 'react-icons/fi';
import { playHoverSound, playWhooshSound } from '../utils/soundFx';

const Terminal = () => {
  const [activeCmd, setActiveCmd] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isModalOpen]);

  const commands = [
    { id: 'whoami', label: 'whoami', icon: <FiUser className="w-4 h-4" /> },
    { id: 'skills', label: 'skills', icon: <FiCode className="w-4 h-4" /> },
    { id: 'projects', label: 'projects', icon: <FiLayers className="w-4 h-4" /> },
    { id: 'status', label: 'status', icon: <FiActivity className="w-4 h-4" /> }
  ];

  const handleCommandClick = (id) => {
    setActiveCmd(id);
    setIsModalOpen(true);
    playWhooshSound();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveCmd(null), 300); // Clear after animation
  };

  const terminalOutput = {
    whoami: (
      <div className="space-y-3 font-mono text-[11px] sm:text-xs text-[#CBD5E1]">
        <p className="text-[#38BDF8] font-bold font-mono text-sm">&gt; whoami</p>
        <div className="pl-3 space-y-1.5">
          <p><span className="text-[#38BDF8] font-semibold">name:</span> "Sayantan Maji"</p>
          <p><span className="text-[#38BDF8] font-semibold">role:</span> "Full Stack & AI Builder"</p>
          <p><span className="text-[#38BDF8] font-semibold">degree:</span> "B.Tech CSE"</p>
          <p><span className="text-[#38BDF8] font-semibold">college:</span> "Haldia Institute of Technology"</p>
          <p className="leading-relaxed"><span className="text-[#38BDF8] font-semibold">interests:</span> ["AI Agent Workflows", "Scalable Systems", "REST API Architectures"]</p>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-3 font-mono text-[11px] sm:text-xs text-[#CBD5E1]">
        <p className="text-[#38BDF8] font-bold font-mono text-sm">&gt; skills --list</p>
        <div className="pl-3 space-y-2.5">
          <div>
            <span className="text-[#38BDF8] block font-semibold mb-0.5">// AI & LLM Systems</span>
            <p className="text-[#94A3B8]">Groq API, Llama 3, Agent Workflows</p>
          </div>
          <div>
            <span className="text-[#38BDF8] block font-semibold mb-0.5">// Frontend</span>
            <p className="text-[#94A3B8]">React.js, HTML5, CSS3, JS (ES6+), Vite, Tailwind</p>
          </div>
          <div>
            <span className="text-[#38BDF8] block font-semibold mb-0.5">// Backend & Auth</span>
            <p className="text-[#94A3B8]">Node.js, Express.js, JWT, RESTful APIs</p>
          </div>
          <div>
            <span className="text-[#38BDF8] block font-semibold mb-0.5">// Databases & Cache</span>
            <p className="text-[#94A3B8]">MongoDB, PostgreSQL, Supabase, Redis</p>
          </div>
          <div>
            <span className="text-[#38BDF8] block font-semibold mb-0.5">// Operations & Versioning</span>
            <p className="text-[#94A3B8]">Docker, Git, GitHub, Render, Vercel</p>
          </div>
        </div>
      </div>
    ),
    projects: (
      <div className="space-y-3 font-mono text-[11px] sm:text-xs text-[#CBD5E1]">
        <p className="text-[#38BDF8] font-bold font-mono text-sm">&gt; projects --showcase</p>
        <div className="pl-3 space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar">
          <div className="border-l-2 border-slate-700 pl-3">
            <span className="text-[#38BDF8] font-bold text-xs">1. LabIntel LIMS</span>
            <p className="text-[#94A3B8] text-[10px] sm:text-[11px] mt-1">Role-based Laboratory Management System.</p>
            <p className="text-[#64748B] text-[9px] mt-1">Tech: React, Node.js, Express, Supabase</p>
          </div>
          <div className="border-l-2 border-slate-700 pl-3">
            <span className="text-[#38BDF8] font-bold text-xs">2. AI Clinical Explainer</span>
            <p className="text-[#94A3B8] text-[10px] sm:text-[11px] mt-1">Groq & Llama-3 powered clinical reports analyst.</p>
            <p className="text-[#64748B] text-[9px] mt-1">Tech: Groq API, Llama-3, React, Node</p>
          </div>
          <div className="border-l-2 border-slate-700 pl-3">
            <span className="text-[#38BDF8] font-bold text-xs">3. Online Book Store</span>
            <p className="text-[#94A3B8] text-[10px] sm:text-[11px] mt-1">Full-featured bookstore platform.</p>
            <p className="text-[#64748B] text-[9px] mt-1">Tech: React, Node.js, Express.js, MongoDB</p>
          </div>
        </div>
      </div>
    ),
    status: (
      <div className="space-y-3 font-mono text-[11px] sm:text-xs text-[#CBD5E1]">
        <p className="text-[#38BDF8] font-bold font-mono text-sm">&gt; systemctl status engineer</p>
        <div className="pl-3 space-y-1.5">
          <p><span className="text-[#64748B]">●</span> <span className="text-[#E2E8F0] font-semibold">service:</span> Sayantan_Portfolio</p>
          <p><span className="text-[#22C55E]">●</span> <span className="text-[#E2E8F0] font-semibold">status:</span> active (learning)</p>
          <p><span className="text-[#22C55E]">●</span> <span className="text-[#E2E8F0] font-semibold">credentials:</span> Certified AI Builder</p>
          <p><span className="text-[#64748B]">●</span> <span className="text-[#E2E8F0] font-semibold">internships:</span> CDAC, AI For Everyone</p>
          <p><span className="text-[#64748B]">●</span> <span className="text-[#E2E8F0] font-semibold">coordinates:</span> Haldia, India</p>
        </div>
      </div>
    )
  };

  return (
    <section id="terminal" className="py-20 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="text-left mb-12"
      >
        <span className="section-label">05 // Terminal</span>
        <h3 
          className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">Interactive</span>
          <span> Shell</span>
        </h3>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
          Query Sayantan's developer profiles, technologies practiced, and career updates using the shell simulator below.
        </p>
      </motion.div>

      {/* Terminal Command Launcher */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {commands.map((cmd, i) => (
          <motion.button
            key={cmd.id}
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.09, 
              type: "spring",
              stiffness: 120,
              damping: 14 
            }}
            onClick={() => handleCommandClick(cmd.id)}
            onMouseEnter={playHoverSound}
            className="group flex flex-col items-center justify-center gap-4 p-6 sm:p-8 aurora-card rounded-2xl relative overflow-hidden cursor-pointer"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Glowing Top Edge */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="text-slate-500 group-hover:text-[#38BDF8] dark:text-slate-400 transition-colors duration-300 [&>svg]:w-10 [&>svg]:h-10 z-10">
              {cmd.icon}
            </div>
            
            {/* Label */}
            <span className="font-mono text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#2563EB] dark:group-hover:text-white transition-colors duration-300 z-10">
              {cmd.label}
            </span>

            {/* Terminal prompt decoration */}
            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-400 dark:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              ~$ ./{cmd.id}
            </div>
          </motion.button>
        ))}
      </div>

      {/* ── MODAL POPUP OVERLAY ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Dark Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              onClick={closeModal}
            ></div>

            {/* Modal Content Window */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 15, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#0A0A0A] rounded-2xl border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[80vh]"
            >
              {/* Modal Header bar */}
              <div className="bg-[#1A1A1A] border-b border-slate-800 px-3 py-2.5 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                  <span className="text-[10px] text-slate-400 font-mono ml-2">execution_window</span>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-5 overflow-y-auto custom-scrollbar flex-grow">
                {activeCmd && terminalOutput[activeCmd]}
                
                {/* Typing log cursor at bottom of modal */}
                <div className="flex items-center gap-2 border-t border-slate-800 pt-3 mt-4 text-xs font-mono text-slate-500">
                  <span>guest@sayantan.dev:~$</span>
                  <span className="text-[#38BDF8] animate-pulse font-bold">_</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Terminal;
