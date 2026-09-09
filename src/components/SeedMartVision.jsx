import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiZap, FiCheck, FiArrowRight,
  FiTarget, FiTrendingUp
} from 'react-icons/fi';
import { FaSeedling, FaLeaf, FaMicroscope, FaLaptopCode } from 'react-icons/fa6';

const SeedMartVision = () => {
  const pillars = [
    {
      icon: <FaLeaf className="text-emerald-600 dark:text-emerald-400 text-xl" />,
      role: 'Farmers',
      desc: 'Understand the land, soil cycles & real ground challenges.',
      color: 'border-emerald-500/30 bg-emerald-50/80 dark:bg-emerald-500/5 text-emerald-950 dark:text-emerald-300'
    },
    {
      icon: <FaMicroscope className="text-sky-600 dark:text-sky-400 text-xl" />,
      role: 'Agri Experts',
      desc: 'Understand the biology, genetics & crop science.',
      color: 'border-sky-500/30 bg-sky-50/80 dark:bg-sky-500/5 text-sky-950 dark:text-sky-300'
    },
    {
      icon: <FiTrendingUp className="text-amber-600 dark:text-amber-400 text-xl" />,
      role: 'Entrepreneurs',
      desc: 'Understand the market, logistics & distribution economics.',
      color: 'border-amber-500/30 bg-amber-50/80 dark:bg-amber-500/5 text-amber-950 dark:text-amber-300'
    },
    {
      icon: <FaLaptopCode className="text-purple-600 dark:text-purple-400 text-xl" />,
      role: 'Technologists',
      desc: 'Build scalable platforms that connect & empower everyone.',
      color: 'border-purple-500/30 bg-purple-50/80 dark:bg-purple-500/5 text-purple-950 dark:text-purple-300'
    }
  ];

  const innovationStreams = [
    {
      title: 'Better Farming Ideas',
      highlight: 'Platform to Bring Ideas Forward',
      desc: 'If someone has a better idea for farming, SeedMart provides the open architecture to scale that idea directly to cultivators.'
    },
    {
      title: 'Groundbreaking Solutions',
      highlight: 'Connecting Innovators to Fields',
      desc: 'If an innovator develops a new agricultural solution, SeedMart connects that innovation directly with the farmers who need it.'
    },
    {
      title: 'Real-World Farmer Problems',
      highlight: 'Problem as Catalyst for Innovation',
      desc: 'If a farmer faces a ground hurdle, that real problem becomes the exact blueprint for building targeted technological solutions.'
    }
  ];

  return (
    <section id="vision" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dynamic Ambient Emerald Agri Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full blur-[180px] bg-emerald-500/15 pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-[160px] bg-teal-500/10 pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3.5 shadow-sm">
          <img src="/seedmart_logo.jpg" alt="SeedMart Logo" className="w-4 h-4 rounded-full object-contain bg-white shadow-xs" />
          <span>07 // UPCOMING AGRI-TECH ECOSYSTEM • FOUNDER'S MANIFESTO</span>
        </div>

        <h3 
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span>SeedMart: </span>
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
            Building The Future
          </span>
        </h3>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          "I may not be an agricultural scientist, but I am a Computer Science engineer building the bridge where ideas grow into real-world impact."
        </p>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN MANIFESTO DISPLAY CARD
         ───────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-white/95 dark:bg-[#0B1215]/90 border border-emerald-500/30 dark:border-emerald-500/30 backdrop-blur-xl shadow-2xl overflow-hidden"
        style={{
          boxShadow: '0 25px 70px -15px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.1)'
        }}
      >
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Top Floating Badge Bar */}
        <div className="relative z-10 flex items-center gap-3.5 pb-6 border-b border-slate-200 dark:border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-500/40 p-1 flex items-center justify-center shadow-md overflow-hidden flex-shrink-0 group hover:scale-105 transition-transform">
            <img 
              src="/seedmart_logo.jpg" 
              alt="SeedMart Official Logo" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-heading tracking-tight">
              The SeedMart Manifesto
            </h4>
            <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              By Sayantan Maji • B.Tech CSE Founder &amp; Architect
            </p>
          </div>
        </div>

        {/* ── MANIFESTO SPEECH BODY ── */}
        <div className="relative z-10 py-8 space-y-8 text-slate-700 dark:text-slate-200 font-sans leading-relaxed">
          
          {/* Key Opening Statement Quote */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/20 border-l-4 border-emerald-500 dark:border-emerald-400 shadow-sm">
            <p className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-emerald-200 italic font-serif leading-snug">
              "I am not from the Agriculture Department. I am not an agricultural scientist. I am a Computer Science student.<br className="hidden sm:block" />
              <span className="text-emerald-600 dark:text-emerald-400 not-italic font-sans font-black mt-2 block">
                And I don't see that as a limitation. I see it as an opportunity.
              </span>"
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 font-mono font-medium">
              — Because innovation happens when different fields come together.
            </p>
          </div>

          {/* 4 Synergy Pillars */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block flex items-center gap-2">
              <FiTarget className="w-4 h-4" />
              The Multi-Disciplinary Convergence
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {pillars.map((p, idx) => (
                <motion.div
                  key={p.role}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className={`p-4 rounded-2xl border ${p.color} transition-all duration-300 hover:scale-102 flex flex-col justify-between`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xs">
                      {p.icon}
                    </div>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white font-sans">{p.role}</h5>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Role Amplification Paragraph */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
            <div className="md:col-span-7 space-y-3">
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: 'Syne, Outfit, sans-serif' }}>
                Amplifying Agriculture Through Technology
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                My role is <strong className="text-slate-900 dark:text-white">not to replace agricultural knowledge</strong>. My role is to <span className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4 decoration-emerald-500/50">amplify it through technology</span>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                With SeedMart, I want to create more than just a marketplace. I want to build an <strong className="text-emerald-700 dark:text-emerald-300">ecosystem for agricultural innovation</strong> — a connected ground where ideas, technologies, farmers, experts, and economic opportunities meet.
              </p>
            </div>

            <div className="md:col-span-5 p-5 rounded-2xl bg-emerald-50/80 dark:bg-slate-900/90 border border-emerald-500/30 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold">
                <FiZap className="w-4 h-4 animate-pulse text-emerald-600 dark:text-emerald-400" />
                <span>The Triple Impact Formula</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-emerald-500/20 dark:border-slate-700 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold shadow-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">1.</span>
                  <span>Innovation must reach the field.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-emerald-500/20 dark:border-slate-700 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold shadow-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">2.</span>
                  <span>Innovation must reach the farmer.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-emerald-500/20 dark:border-slate-700 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold shadow-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3.</span>
                  <span>Innovation must create real impact.</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Innovation Streams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {innovationStreams.map((stream, idx) => (
              <div
                key={stream.title}
                className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    {stream.highlight}
                  </span>
                  <h5 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2">
                    {stream.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {stream.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[10px] font-mono text-emerald-600 dark:text-emerald-500 flex items-center gap-1 font-semibold">
                  <FiCheck className="w-3 h-3" />
                  <span>SeedMart Platform Pipeline</span>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Philosophy Callout (Perfect contrast in BOTH Light and Dark themes) */}
          <div className="pt-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#06261F] via-[#083329] to-[#041F19] border border-emerald-500/40 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-72 h-72 bg-emerald-500/25 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-3.5">
                <p className="text-xs sm:text-sm !text-emerald-300 font-mono font-bold uppercase tracking-wider flex items-center gap-2">
                  <FaSeedling className="!text-emerald-400 text-base" />
                  <span>The Seed &amp; Idea Principle</span>
                </p>
                <h4 className="text-xl sm:text-3xl font-black tracking-tight !text-white font-heading leading-tight">
                  "A seed is small, but under the right conditions, it becomes something much bigger. I believe an idea is the same."
                </h4>
                <p className="text-xs sm:text-sm !text-emerald-100/95 leading-relaxed max-w-3xl pt-1 font-medium">
                  Give an idea the right platform, the right people, and the right technology — and it can become an innovation that changes lives. <strong className="!text-emerald-300 font-bold">SeedMart is that platform.</strong>
                </p>
                
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-500/30 text-xs font-mono">
                  <span className="!text-emerald-300 font-bold tracking-wide flex items-center gap-2">
                    <img src="/seedmart_logo.jpg" alt="SeedMart Logo" className="w-5 h-5 rounded-full object-contain bg-white shadow-sm" />
                    <span>SeedMart — Where Agricultural Ideas Grow Into Innovation.</span>
                  </span>
                  <a
                    href="https://seed-mart-one.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 !text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl font-sans font-bold transition-all shadow-md hover:shadow-emerald-500/25 cursor-pointer"
                  >
                    <span>Launch Platform Demo</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default SeedMartVision;
