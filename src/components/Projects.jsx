import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  FiExternalLink, FiGithub, FiCheckCircle, FiCpu, FiActivity, 
  FiZap, FiDownload
} from 'react-icons/fi';
import ProjectPresentationModal from './ProjectPresentationModal';

/* ─────────────────────────────────────────────
   Mini preview panels – High-tech dark terminal preview
   ───────────────────────────────────────────── */
const PreviewLabintel = () => (
  <div className="w-full h-full flex flex-col justify-between font-mono text-[9px] text-slate-300 p-1">
    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-sky-400 font-bold">
      <span className="flex items-center gap-1.5">
        <FiActivity className="text-sky-400 animate-pulse" /> LABINTEL LIMS v2.0
      </span>
      <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold">
        DB ONLINE
      </span>
    </div>
    <div className="space-y-1.5 my-1">
      <div className="flex justify-between border-b border-slate-800/80 pb-1 text-[8.5px]">
        <span className="text-slate-300">Patient: Sayantan Maji</span>
        <span className="text-sky-300 font-bold">ID: PT-8924</span>
      </div>
      <div className="space-y-1 text-[8px]">
        <div className="flex items-center justify-between">
          <span className="text-slate-300">● Glucose Fasting</span>
          <span className="text-emerald-400 font-bold">98 mg/dL (Normal)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-300">● Serum Creatinine</span>
          <span className="text-rose-400 font-bold">3.8 mg/dL (High)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-300">● AI Voice Narration</span>
          <span className="text-purple-300 font-bold">Hindi & Bengali Ready</span>
        </div>
      </div>
    </div>
    <div className="text-[7.5px] text-slate-400 flex justify-between border-t border-slate-800 pt-1.5">
      <span>Supabase PostgreSQL (RLS)</span>
      <span className="text-sky-400 font-bold">PDF GENERATED</span>
    </div>
  </div>
);

const PreviewLabintelAI = () => (
  <div className="w-full h-full flex flex-col justify-between font-mono text-[9px] text-slate-300 p-1">
    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-emerald-400 font-bold">
      <span className="flex items-center gap-1.5">
        <FiCpu className="text-emerald-400 animate-spin-slow" /> CLINICAL AI CO-PILOT
      </span>
      <span className="text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/30 text-[8px] font-bold">
        GROQ-LLAMA3
      </span>
    </div>
    <div className="flex-grow flex flex-col justify-center my-1.5 p-2 rounded-xl bg-[#080B10] border border-slate-800">
      <div className="text-[8px] text-slate-400 mb-1 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>Clinical Reasoning Stream:</span>
      </div>
      <p className="text-[8.5px] text-slate-100 leading-normal italic">
        "Elevated creatinine (3.8 mg/dL) points to acute kidney stress. Mild anemia (Hb 9.4). Recommending prompt nephrology review."
      </p>
    </div>
    <div className="text-[7.5px] text-slate-400 flex justify-between border-t border-slate-800 pt-1">
      <span>Inference: 184ms</span>
      <span className="text-emerald-400 font-bold">Gemini Vision OCR Active</span>
    </div>
  </div>
);

const PreviewBookstore = () => (
  <div className="w-full h-full flex flex-col justify-between text-xs text-slate-300 font-sans p-1">
    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
      <span className="font-semibold text-purple-300 font-mono text-[10px]">VercelBook Store</span>
      <span className="text-[9px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 font-mono">Order Engine</span>
    </div>
    <div className="grid grid-cols-3 gap-2 flex-grow items-center py-2">
      {[['React 19', '$19.99'], ['Node.js API', '$24.99'], ['MongoDB', '$29.99']].map(([name, price]) => (
        <div key={name} className="p-2 rounded bg-slate-900 border border-slate-800 flex flex-col gap-1 items-center">
          <span className="text-[8px] font-bold text-slate-100 truncate max-w-full">{name}</span>
          <span className="text-[9px] text-purple-300 font-bold font-mono">{price}</span>
        </div>
      ))}
    </div>
    <div className="text-[8px] text-slate-400 flex justify-between border-t border-slate-800 pt-1 font-mono">
      <span>MERN Architecture</span>
      <span className="text-purple-300 font-bold">Cart Validations Active</span>
    </div>
  </div>
);

const PreviewSeedmart = () => (
  <div className="w-full h-full flex flex-col justify-between font-mono text-[9px] text-slate-300 p-1">
    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-emerald-400 font-bold">
      <span className="flex items-center gap-1.5">
        <FiZap className="text-emerald-400 animate-pulse" /> SEEDMART // E-COMMERCE
      </span>
      <span className="text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        BETA v0.9 (WIP)
      </span>
    </div>
    <div className="space-y-1.5 my-1">
      <div className="grid grid-cols-3 gap-1.5">
        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
          <span className="text-[11px]">🌱</span>
          <span className="text-[7.5px] font-bold text-slate-200 truncate max-w-full">Hybrid Wheat</span>
          <span className="text-[8px] text-emerald-400 font-bold font-mono">₹450/kg</span>
        </div>
        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
          <span className="text-[11px]">🌾</span>
          <span className="text-[7.5px] font-bold text-slate-200 truncate max-w-full">Basmati Paddy</span>
          <span className="text-[8px] text-emerald-400 font-bold font-mono">₹620/kg</span>
        </div>
        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
          <span className="text-[11px]">🌽</span>
          <span className="text-[7.5px] font-bold text-slate-200 truncate max-w-full">Sweet Corn F1</span>
          <span className="text-[8px] text-emerald-400 font-bold font-mono">₹380/kg</span>
        </div>
      </div>
      <div className="p-1 rounded bg-[#080B10] border border-slate-800/80 flex items-center justify-between text-[7.5px]">
        <span className="text-slate-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Bulk Weight Tier Cart
        </span>
        <span className="text-amber-300 font-bold">Active Sprint Build</span>
      </div>
    </div>
    <div className="text-[7.5px] text-slate-400 flex justify-between border-t border-slate-800 pt-1">
      <span>Full-Stack Architecture</span>
      <span className="text-emerald-400 font-bold">Catalog Engine Online</span>
    </div>
  </div>
);

const previewMap = {
  'labintel': <PreviewLabintel />,
  'labintel-ai': <PreviewLabintelAI />,
  'bookstore': <PreviewBookstore />,
  'seedmart': <PreviewSeedmart />,
};

/* ───────────────────────────────────
   Projects Section
   ─────────────────────────────────── */
const projectsList = [
  {
    id: 'labintel',
    category: 'ai-health',
    title: 'LabIntel LIMS',
    tagline: 'Multi-Tenant Cloud Pathology Architecture',
    color: '#2563EB',
    glow: 'rgba(37,99,235,0.15)',
    hasDeck: true,
    badge: 'Enterprise Healthcare',
    description: 'A role-based Laboratory Information Management System (LIMS) designed to digitize India’s 100,000+ independent pathology labs, reducing morning report preparation from 3 hours to 20 minutes.',
    link: 'https://labintelorg.vercel.app/lab/secondlab/login',
    github: 'https://github.com/Sayantanmaji2005',
    tech: ['React 18', 'Node.js 20', 'Express', 'Supabase', 'PostgreSQL (RLS)', 'Puppeteer', 'Tailwind CSS'],
    stats: [
      { label: 'Time Saved', val: '90%' },
      { label: 'Infra Cost', val: '₹0 Bootstrap' },
      { label: 'Target Market', val: '100k+ Labs' }
    ],
    features: [
      'Multi-tenant database isolation powered by Supabase Row-Level Security (RLS)',
      'Dual Auth Pipeline: Staff (Email/Password) vs Patients (Phone OTP JWT)',
      'High-speed automated Puppeteer PDF report builder with doctor e-signatures',
      'Universal Health Spine cross-lab patient records following phone identity',
    ],
    previewType: 'labintel',
  },
  {
    id: 'labintel-ai',
    category: 'ai-health',
    title: 'LabIntel AI Clinical Co-Pilot',
    tagline: 'Multimodal Neural Report Translation',
    color: '#059669',
    glow: 'rgba(16,185,129,0.15)',
    hasDeck: true,
    badge: 'Certified AI Builder',
    description: 'An intelligent medical copilot translating raw clinical test ranges into readable patient insights in 15 seconds, featuring voice report narration in Hindi, Bengali, Tamil, and Telugu.',
    link: 'https://labintelorg.vercel.app/',
    github: 'https://github.com/Sayantanmaji2005',
    tech: ['Groq Cloud API', 'Llama 3 (70B)', 'Gemini Vision OCR', 'Regional TTS', 'React', 'Zustand'],
    stats: [
      { label: 'Inference', val: '<200ms' },
      { label: 'Languages', val: '4 Regional' },
      { label: 'OCR Speed', val: '15s' }
    ],
    features: [
      'Voice Report Narration breaking language barriers for 300M+ Indians',
      'Gemini Vision OCR scanning paper reports into plain-language summaries',
      'Dynamic Biomarker Risk Score plotting historical organ parameters',
      'HIPAA-inspired anonymized data pipelines preventing patient PII leakage',
    ],
    previewType: 'labintel-ai',
  },
  {
    id: 'seedmart',
    category: 'fullstack',
    title: 'SeedMart',
    tagline: 'Smart Agro-Commerce & Seed Marketplace',
    color: '#10B981',
    glow: 'rgba(16,185,129,0.18)',
    hasDeck: false,
    badge: '🌱 Agro-Commerce // Demo Mode',
    isWip: false,
    demoNote: '⚡ Note: Platform is currently active in Demo / Testing Mode with sample seed catalogs.',
    description: 'A modern full-stack e-commerce marketplace connecting farmers with certified seed suppliers, featuring seasonal crop catalogs, bulk weight tier pricing, and automated inventory logistics.',
    link: 'https://seed-mart-one.vercel.app/',
    github: 'https://github.com/Sayantanmaji2005',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'JWT Auth'],
    stats: [
      { label: 'Status', val: 'Live Demo' },
      { label: 'Sector', val: 'Agri-Tech' },
      { label: 'Pricing', val: 'Tiered Bulk' }
    ],
    features: [
      'Seasonal seed categorization for Kharif, Rabi, and Zaid cultivation cycles',
      'Dynamic volume-based tier discounting engine for large farming collectives',
      'Real-time inventory thresholds, germination batch validation, and order tracking',
      'Farmer-friendly responsive portal with optimized high-speed mobile checkout',
    ],
    previewType: 'seedmart',
  },
  {
    id: 'bookstore',
    category: 'fullstack',
    title: 'Online Book Store',
    tagline: 'Modern MERN E-Commerce Architecture',
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.15)',
    hasDeck: true,
    badge: 'Full-Stack Web',
    description: 'A complete e-commerce MERN platform to search, browse, and purchase catalog items with secure checkouts, admin stock telemetry, and real-time inventory validation.',
    link: 'https://bookstore-iota-three.vercel.app',
    github: 'https://github.com/Sayantanmaji2005',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3'],
    stats: [
      { label: 'Architecture', val: 'MERN' },
      { label: 'Catalog', val: 'Dynamic' },
      { label: 'Security', val: 'JWT Protected' }
    ],
    features: [
      'Secure customer sign-in portals and personal order log dashboards',
      'Interactive shopping cart workflows with real-time stock validations',
      'Comprehensive admin inventories to update catalogs, pricing, and entries',
      'Filtered search queries categorizing database records by genre',
    ],
    previewType: 'bookstore',
  },
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [activeProjectForDeck, setActiveProjectForDeck] = useState(projectsList[0]);

  const openPresentationDeck = (project) => {
    setActiveProjectForDeck(project || projectsList[0]);
    setIsDeckOpen(true);
  };

  const filteredProjects = selectedFilter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-left mb-12"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="section-label">06 // Portfolio Showcase</span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            Engineered Systems & Architecture
          </span>
        </div>

        <h3
          className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">Featured</span>
          <span> Projects</span>
        </h3>
        <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
          Production-grade healthcare platforms, AI inference pipelines, and full-stack distributed systems with comprehensive architecture breakdowns.
        </p>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          FLAGSHIP HERO SHOWCASE: LabIntel Deep-Dive Deck Banner
         ───────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden bg-slate-900 dark:bg-gradient-to-br dark:from-[#0B1120] dark:via-[#07090E] dark:to-[#0D1527] border border-blue-500/30 text-white shadow-2xl"
        style={{ boxShadow: '0 10px 40px rgba(37,99,235,0.18)' }}
      >
        {/* Glow corners */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Story & Highlights */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/25 text-blue-200 border border-blue-400/40">
                ⭐ Flagship Architecture
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100,000+ Labs TAM
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Live Production
              </span>
            </div>

            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight"
              style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
            >
              LabIntel LIMS & AI Clinical Suite
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Engineered a unified multi-tenant diagnostic platform for Indian pathology clinics. Incorporates <strong className="text-white">Llama 3 AI report translation</strong>, <strong className="text-white">Gemini Vision paper report scanning</strong>, and <strong className="text-white">neural voice narration</strong> across 4 regional languages.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 py-2">
              <div className="p-3 rounded-2xl bg-black/50 border border-slate-700/80">
                <span className="text-[10px] font-mono text-slate-300 uppercase block font-semibold">Report Time</span>
                <span className="text-lg sm:text-xl font-extrabold text-blue-400 font-mono">3h → 20m</span>
              </div>
              <div className="p-3 rounded-2xl bg-black/50 border border-slate-700/80">
                <span className="text-[10px] font-mono text-slate-300 uppercase block font-semibold">AI Latency</span>
                <span className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono">&lt;200ms</span>
              </div>
              <div className="p-3 rounded-2xl bg-black/50 border border-slate-700/80">
                <span className="text-[10px] font-mono text-slate-300 uppercase block font-semibold">Security</span>
                <span className="text-lg sm:text-xl font-extrabold text-purple-300 font-mono">Postgres RLS</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openPresentationDeck(projectsList[0])}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FiZap className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>View Architecture & PPT Deck</span>
              </button>

              <a
                href="https://labintelorg.vercel.app/lab/secondlab/login"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Live Portal</span>
                <FiExternalLink className="w-4 h-4 text-blue-400" />
              </a>

              <a
                href="/projects/labintel/Labintel_Presentation.pptx"
                download="Labintel_Presentation.pptx"
                className="px-4 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 hover:text-white text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer"
                title="Download original PPT file"
              >
                <FiDownload className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline">Download PPTX</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Terminal Blueprint */}
          <div className="lg:col-span-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-black border border-slate-700/80 font-mono text-[11px] shadow-inner space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-[10px] ml-1 text-slate-200 font-bold">labintel-cloud-telemetry</span>
                </div>
                <span className="text-emerald-400 text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                  SYSTEM OPTIMAL
                </span>
              </div>

              <div className="space-y-2 text-[10px] text-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-400">$ router --subdomain</span>
                  <span className="text-sky-400 font-semibold">slug.labintel.in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">$ database.security</span>
                  <span className="text-emerald-400 font-semibold">Supabase RLS Enforced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">$ groq.pipeline</span>
                  <span className="text-purple-300 font-semibold">Llama-3-70b-instruct (184ms)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">$ report.pdf_engine</span>
                  <span className="text-amber-300 font-semibold">Puppeteer Auto-Generator</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">$ voice.tts_languages</span>
                  <span className="text-cyan-300 font-semibold">HI, BN, TA, TE (Neural)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between text-[9px] text-slate-400">
                <span>Memory: 142MB | Nodes: 3</span>
                <span className="text-emerald-400 font-bold">0 Failed Transactions</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          CATEGORY FILTER TABS (Clean Light & Dark Mode)
         ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-800 overflow-x-auto no-scrollbar scrollbar-none max-w-full">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai-health', label: 'AI & Healthcare Systems' },
            { id: 'fullstack', label: 'Full-Stack Web' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          Showing <span className="text-slate-900 dark:text-white font-bold">{filteredProjects.length}</span> verified systems
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          PROJECTS GRID (2x2 Balanced Grid in Light & Dark Mode)
         ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="h-full"
          >
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1200}
              transitionSpeed={1200}
              scale={1.01}
              glareEnable={true}
              glareMaxOpacity={0.08}
              glareColor={project.color || "#ffffff"}
              glarePosition="all"
              className="aurora-card shimmer-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden group h-full relative border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all shadow-md dark:shadow-none"
            >
              {/* Glow backdrop */}
              <div 
                className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none opacity-40 dark:opacity-100"
                style={{ background: project.glow || 'rgba(37,99,235,0.08)', filter: 'blur(50px)' }}
              />

              <div className="space-y-4">
                {/* Header Tag + Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                    {project.badge}
                  </span>
                  {project.hasDeck && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 flex items-center gap-1">
                      <FiZap className="w-2.5 h-2.5 text-amber-500 dark:text-amber-300" /> Deck Included
                    </span>
                  )}
                </div>

                {/* Mock Preview Box (High-contrast dark terminal screen) */}
                <motion.div
                  className="w-full h-44 rounded-2xl overflow-hidden flex items-center justify-center p-3 bg-[#080B12] border border-slate-800 group-hover:border-slate-700 transition-colors shadow-inner"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  {previewMap[project.previewType] ?? null}
                </motion.div>

                {/* Title & Tagline */}
                <div>
                  <h4 
                    className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight"
                    style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
                  >
                    {project.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono mt-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Stats Pill Row */}
                <div className="grid grid-cols-3 gap-2 py-1">
                  {project.stats.map((s, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center">
                      <span className="text-[8px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold block truncate">{s.label}</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono truncate block">{s.val}</span>
                    </div>
                  ))}
                </div>

                {/* Capabilities List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-slate-500 dark:text-slate-400 block">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <FiCheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                        <span className="line-clamp-2 leading-relaxed text-[11px] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-5 mt-5 border-t border-slate-200 dark:border-slate-800">
                {project.hasDeck && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => openPresentationDeck(project)}
                      className="flex-1 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-600/20 dark:hover:bg-blue-600/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <FiZap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
                      <span>{project.id === 'bookstore' ? 'View Architecture & PDF Deck' : 'View Architecture PPT Deck'}</span>
                    </button>
                    {project.id === 'bookstore' ? (
                      <a
                        href="/projects/bookstore/Online_Bookstore_Full_Stack_Project.pdf"
                        download="Online_Bookstore_Full_Stack_Project.pdf"
                        className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer"
                        title="Download Project PDF"
                      >
                        <FiDownload className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        <span className="hidden sm:inline">PDF</span>
                      </a>
                    ) : (
                      <a
                        href="/projects/labintel/Labintel_Presentation.pptx"
                        download="Labintel_Presentation.pptx"
                        className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer"
                        title="Download Project PPTX"
                      >
                        <FiDownload className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                        <span className="hidden sm:inline">PPT</span>
                      </a>
                    )}
                  </div>
                )}

                <div className="flex gap-2">
                  {project.isWip ? (
                    <div className="flex-1 py-2 px-3 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center justify-center gap-1.5 cursor-default">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      <span>In Active Sprint</span>
                    </div>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium-accent flex-1 py-2 text-xs flex items-center justify-center gap-1.5 font-bold rounded-xl cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium-secondary flex-1 py-2 text-xs flex items-center justify-center gap-1.5 font-bold rounded-xl cursor-pointer"
                  >
                    <span>GitHub</span>
                    <FiGithub className="w-3 h-3" />
                  </a>
                </div>

                {project.demoNote && (
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[10.5px] text-amber-800 dark:text-amber-300 font-mono leading-relaxed mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping shrink-0 mt-1" />
                    <span>{project.demoNote}</span>
                  </div>
                )}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Interactive Presentation Modal */}
      <ProjectPresentationModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        project={activeProjectForDeck}
      />
    </section>
  );
};

export default Projects;
