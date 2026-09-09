import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiChevronLeft, FiChevronRight, FiDownload, FiExternalLink, 
  FiGithub, FiCpu, FiDatabase, FiServer, FiShield, FiActivity, 
  FiLayers, FiCheckCircle, FiMic, FiCamera, FiTrendingUp, 
  FiUsers, FiDollarSign, FiClock, FiMaximize2, FiPlay, FiPause,
  FiFileText, FiCode, FiArrowRight
} from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, SiTailwindcss } from 'react-icons/si';

export const labintelSlides = [
  {
    id: 1,
    tag: '01 // EXECUTIVE SUMMARY',
    title: 'LabIntel LIMS & AI Platform',
    subtitle: 'Reimagining Healthcare Diagnostics for 500 Million Indians',
    type: 'overview',
    badge: 'Live Production System',
    highlights: [
      { label: 'Time Saved', val: '90%', sub: 'Per morning report cycle' },
      { label: 'AI Latency', val: '<200ms', sub: 'Groq Cloud Llama-3' },
      { label: 'Infra Cost', val: '₹0', sub: 'Zero infrastructure bootstrap' },
      { label: 'Turnaround', val: '2 Mins', sub: 'End-to-end PDF delivery' }
    ],
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-300 mb-3 text-lg font-bold">
              ⚡
            </div>
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">2-Minute Reports</h4>
            <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
              Lightning-fast digital generation and delivery from tier-2 cities to rural districts.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/25 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mb-3 text-lg font-bold">
              🧠
            </div>
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">AI Clinical Co-Pilot</h4>
            <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
              Automatic translation of complex biomarker tables into plain conversational insights.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-500/30 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/25 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-3 text-lg font-bold">
              🧬
            </div>
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Universal Health Spine</h4>
            <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
              Cross-lab patient health record that creates a unified clinical history across all visits.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
              Engineered by <strong className="text-emerald-600 dark:text-emerald-400 font-bold">Sayantan Maji</strong> & Team in 10 Days (10 Engineers)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-100 dark:bg-blue-500/25 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-400/40">
              Supabase RLS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-500/25 text-emerald-700 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-400/40">
              Groq Llama 3
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-100 dark:bg-purple-500/25 text-purple-700 dark:text-purple-200 border border-purple-200 dark:border-purple-400/40">
              Multi-Tenant
            </span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    tag: '02 // THE PROBLEM STATEMENT',
    title: 'Three Separate Crises in Indian Diagnostics',
    subtitle: 'One broken system. Zero modern software built for everyday patients.',
    type: 'problem',
    badge: 'Market Reality',
    content: (
      <div className="space-y-6">
        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-red-500/15 border border-rose-200 dark:border-red-500/30 text-rose-900 dark:text-red-100 text-sm font-medium italic shadow-sm">
          "She stared at these numbers for 2 hours. She still doesn't know if she's okay. This happened yesterday. To someone's mother in every city, town, and village across India."
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0e1217] border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-3xl font-black text-amber-600 dark:text-amber-400 font-mono mb-2">1,00,000+</div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-2">Independent Labs on MS Word</h4>
              <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
                Small to medium labs operating on manual Word templates and paper logs. Zero automated patient communication or cloud sync.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-amber-600 dark:text-amber-300 font-mono font-semibold">
              ● Zero intelligent software
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0e1217] border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-3xl font-black text-rose-600 dark:text-rose-400 font-mono mb-2">3 Hours</div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-2">Wasted Daily per Lab</h4>
              <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
                Every morning lost to manual report typing and alignment errors. 700+ hours lost per lab every single year.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-rose-600 dark:text-rose-300 font-mono font-semibold">
              ● 700 hours/year gone
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0e1217] border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-3xl font-black text-blue-600 dark:text-sky-400 font-mono mb-2">500 Million</div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-2">Confused Patients</h4>
              <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
                Indians leave diagnostic clinics holding a piece of paper packed with medical jargon they cannot decipher without panic.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-blue-600 dark:text-sky-300 font-mono font-semibold">
              ● Not 1 person to explain
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    tag: '03 // CLINICAL COMPARISON',
    title: 'Traditional Lab Report vs. LabIntel Experience',
    subtitle: 'From terrifying numbers to clear, actionable guidance in seconds.',
    type: 'comparison',
    badge: 'UX Transformation',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left: Legacy */}
        <div className="p-5 rounded-2xl bg-rose-50 dark:bg-red-950/40 border border-rose-200 dark:border-red-800/60 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-rose-200 dark:border-red-800/50 mb-3">
              <span className="text-xs font-mono font-bold text-rose-600 dark:text-red-300">WHAT PATIENTS RECEIVE TODAY</span>
              <span className="text-[10px] bg-rose-100 dark:bg-red-500/30 text-rose-700 dark:text-red-200 font-bold px-2 py-0.5 rounded border border-rose-200 dark:border-red-500/40">Cold PDF</span>
            </div>
            <div className="font-mono text-xs space-y-2 text-slate-800 dark:text-slate-200 bg-white dark:bg-black/60 p-3.5 rounded-xl border border-rose-200 dark:border-red-900/40 mb-3">
              <div className="flex justify-between">
                <span>Hemoglobin:</span> <span className="text-rose-600 dark:text-red-400 font-bold">9.4 g/dL</span> <span className="text-slate-500 dark:text-slate-400 text-[10px]">(12.0 - 16.0)</span>
              </div>
              <div className="flex justify-between">
                <span>Serum Creatinine:</span> <span className="text-rose-600 dark:text-red-400 font-bold">3.8 mg/dL</span> <span className="text-slate-500 dark:text-slate-400 text-[10px]">(0.7 - 1.2)</span>
              </div>
              <div className="flex justify-between">
                <span>WBC Count:</span> <span className="text-slate-700 dark:text-slate-200 font-bold">7200 /µL</span> <span className="text-slate-500 dark:text-slate-400 text-[10px]">(4500 - 11000)</span>
              </div>
            </div>
            <p className="text-xs text-rose-800 dark:text-red-200 leading-relaxed font-normal">
              Dense numbers, clinical jargon, zero human context. Patient returns home anxious and confused.
            </p>
          </div>
          <div className="pt-3 border-t border-rose-200 dark:border-red-800/40 text-[11px] text-rose-600 dark:text-red-300 font-bold">
            ❌ Result: Patient worries alone in fear
          </div>
        </div>

        {/* Right: LabIntel */}
        <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-emerald-200 dark:border-emerald-800/50 mb-3">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-300">WHAT SHE ACTUALLY GETS ON LABINTEL</span>
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-500/30 text-emerald-700 dark:text-emerald-200 font-bold px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/40">AI Explained</span>
            </div>
            <div className="text-xs space-y-2 text-slate-800 dark:text-slate-100 bg-white dark:bg-black/60 p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900/40 mb-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-semibold">
                <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>"Your creatinine is elevated, requiring prompt nephrology consultation."</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 dark:text-sky-300 font-semibold">
                <FiCheckCircle className="text-blue-600 dark:text-sky-400 flex-shrink-0" />
                <span>"Mild anemia detected (Hemoglobin 9.4). Iron-rich diet recommended."</span>
              </div>
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 font-semibold">
                <FiCheckCircle className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span>"Voice narration generated in Hindi & Bengali."</span>
              </div>
            </div>
            <p className="text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed font-normal">
              Plain-language breakdown answering: <em>What does this mean? Is it dangerous? What should I do next?</em>
            </p>
          </div>
          <div className="pt-3 border-t border-emerald-200 dark:border-emerald-800/40 text-[11px] text-emerald-600 dark:text-emerald-300 font-bold">
            ✅ Result: Immediate peace of mind & doctor-ready clarity
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    tag: '04 // BREAKTHROUGH FEATURES',
    title: 'Industry-First Innovations Built & Live',
    subtitle: 'Three capabilities that do not exist in any other Indian lab software.',
    type: 'features',
    badge: 'Core USP',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-blue-50 dark:bg-[#0B132B] border border-blue-200 dark:border-blue-500/40 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/25 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xl mb-4">
              <FiMic className="animate-pulse" />
            </div>
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Voice Report Narration</h4>
            <p className="text-xs text-slate-600 dark:text-slate-200 mb-3 leading-relaxed font-normal">
              One tap reads the entire medical report aloud in <strong className="text-slate-900 dark:text-white">Hindi, Bengali, Tamil, or Telugu</strong> using conversational neural voice synthesis.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-blue-100/80 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 text-[11px] text-blue-800 dark:text-blue-200 font-medium">
            <strong>Impact:</strong> 300M+ Indians who cannot read medical text can now hear and understand their health.
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-[#08201D] border border-emerald-200 dark:border-emerald-500/40 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/25 text-emerald-600 dark:text-emerald-300 flex items-center justify-center text-xl mb-4">
              <FiCamera />
            </div>
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Gemini Vision OCR Scanner</h4>
            <p className="text-xs text-slate-600 dark:text-slate-200 mb-3 leading-relaxed font-normal">
              Photograph any paper lab report. Multimodal Vision extracts all biomarker metrics and produces an instant plain-language summary in 15 seconds.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-100/80 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-[11px] text-emerald-800 dark:text-emerald-200 font-medium">
            <strong>Impact:</strong> Any patient from any non-digital lab in India can upload and gain clarity.
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-purple-50 dark:bg-[#1E112A] border border-purple-200 dark:border-purple-500/40 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/25 text-purple-600 dark:text-purple-300 flex items-center justify-center text-xl mb-4">
              <FiTrendingUp />
            </div>
            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Dynamic Biomarker Risk Score</h4>
            <p className="text-xs text-slate-600 dark:text-slate-200 mb-3 leading-relaxed font-normal">
              Analyzes historical test trends across liver, kidney, cardiac, and metabolic parameters to generate an interactive organ health risk score.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-100/80 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30 text-[11px] text-purple-800 dark:text-purple-200 font-medium">
            <strong>Impact:</strong> Converts isolated tests into a continuous, preventive health narrative.
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    tag: '05 // SYSTEM ARCHITECTURE',
    title: 'Full-Stack Architecture & Distributed Data Flow',
    subtitle: 'Zero-downtime, low-latency, multi-tenant cloud infrastructure.',
    type: 'architecture',
    badge: 'System Design',
    content: (
      <div className="space-y-4">
        {/* Architecture Diagram Box */}
        <div className="p-5 rounded-2xl bg-slate-100 dark:bg-[#090D16] border border-slate-200 dark:border-blue-500/30 font-mono text-xs shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Layer 1: Client */}
            <div className="p-3 rounded-xl bg-white dark:bg-blue-500/15 border border-slate-200 dark:border-blue-500/40 shadow-sm">
              <div className="flex items-center gap-2 text-blue-600 dark:text-sky-400 font-bold mb-2">
                <SiReact className="text-base" />
                <span>CLIENT LAYER</span>
              </div>
              <ul className="text-[10px] space-y-1 text-slate-700 dark:text-slate-200">
                <li>• React 18 + Vite</li>
                <li>• Multi-tenant Subdomains (`slug.labintel.in`)</li>
                <li>• Patient Portal & Lab App</li>
                <li>• Tailwind CSS + Zustand</li>
              </ul>
            </div>

            {/* Layer 2: API Gateway */}
            <div className="p-3 rounded-xl bg-white dark:bg-emerald-500/15 border border-slate-200 dark:border-emerald-500/40 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                <SiExpress className="text-base" />
                <span>EXPRESS REST API</span>
              </div>
              <ul className="text-[10px] space-y-1 text-slate-700 dark:text-slate-200">
                <li>• Node.js 20 Microservices</li>
                <li>• Dual Auth Routing</li>
                <li>• Rate Limiting & CORS</li>
                <li>• Puppeteer PDF Engine</li>
              </ul>
            </div>

            {/* Layer 3: AI Inference */}
            <div className="p-3 rounded-xl bg-white dark:bg-purple-500/15 border border-slate-200 dark:border-purple-500/40 shadow-sm">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-300 font-bold mb-2">
                <FiCpu className="text-base" />
                <span>AI INFERENCE ENGINE</span>
              </div>
              <ul className="text-[10px] space-y-1 text-slate-700 dark:text-slate-200">
                <li>• Groq Cloud (Llama 3 70B)</li>
                <li>• Google Gemini Vision OCR</li>
                <li>• Regional Neural TTS (4 langs)</li>
                <li>• Anonymized Data Pipeline</li>
              </ul>
            </div>

            {/* Layer 4: Storage */}
            <div className="p-3 rounded-xl bg-white dark:bg-amber-500/15 border border-slate-200 dark:border-amber-500/40 shadow-sm">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-300 font-bold mb-2">
                <SiSupabase className="text-base" />
                <span>POSTGRESQL & STORAGE</span>
              </div>
              <ul className="text-[10px] space-y-1 text-slate-700 dark:text-slate-200">
                <li>• Supabase PostgreSQL</li>
                <li>• Row-Level Security (RLS)</li>
                <li>• Encrypted S3 Medical Vault</li>
                <li>• Twilio OTP / WhatsApp API</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
              REST over TLS 1.3 | JSON Web Tokens | ACID Compliant
            </span>
            <span className="text-slate-500 dark:text-slate-400">Dual Tenant Database Isolation Layer</span>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
            <span className="text-blue-600 dark:text-sky-400 font-bold block mb-1">Multi-Tenant Isolation</span>
            <p className="text-slate-600 dark:text-slate-200 text-[11px]">Staff at Lab A cannot see Lab B data at the database level. Enforced by Supabase RLS policies.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Dual Authentication</span>
            <p className="text-slate-600 dark:text-slate-200 text-[11px]">Staff login via email/password, while patients access records via phone OTP without passwords.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
            <span className="text-purple-600 dark:text-purple-300 font-bold block mb-1">Zero-Cost Free Tier Stack</span>
            <p className="text-slate-600 dark:text-slate-200 text-[11px]">Built and piloted across Vercel + Render + Supabase + Groq with ₹0 infrastructure overhead.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    tag: '06 // UNIT ECONOMICS & MARKET',
    title: 'Market Opportunity & Pricing Tiers',
    subtitle: 'High SaaS gross margins replacing manual typing with recurring cloud software.',
    type: 'economics',
    badge: 'Business Model',
    content: (
      <div className="space-y-5">
        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono font-bold">STARTER TIER</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white my-1 font-mono">₹999 <span className="text-xs text-slate-500 dark:text-slate-400">/ mo</span></div>
            <p className="text-xs text-slate-600 dark:text-slate-200 mb-3 font-medium">Up to 200 reports/mo</p>
            <ul className="text-[11px] space-y-1.5 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> AI Report Summaries</li>
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> PDF Auto-Generator</li>
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> Patient Web Portal</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border-2 border-blue-500/60 relative shadow-sm">
            <div className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-blue-600 dark:bg-blue-500 text-[9px] font-bold text-white uppercase tracking-wider">
              Most Popular
            </div>
            <div className="text-xs text-blue-600 dark:text-sky-400 font-mono font-bold">GROWTH TIER</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white my-1 font-mono">₹2,499 <span className="text-xs text-slate-500 dark:text-slate-400">/ mo</span></div>
            <p className="text-xs text-slate-600 dark:text-slate-200 mb-3 font-medium">Up to 1,000 reports/mo</p>
            <ul className="text-[11px] space-y-1.5 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> WhatsApp & SMS Delivery</li>
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> Voice Report Narration</li>
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> Biomarker Risk Score</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="text-xs text-purple-600 dark:text-purple-300 font-mono font-bold">ENTERPRISE PRO</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white my-1 font-mono">₹4,999 <span className="text-xs text-slate-500 dark:text-slate-400">/ mo</span></div>
            <p className="text-xs text-slate-600 dark:text-slate-200 mb-3 font-medium">Unlimited reports</p>
            <ul className="text-[11px] space-y-1.5 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> Multi-branch Management</li>
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> Custom API Access</li>
              <li className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-600 dark:text-emerald-400" /> 24/7 Priority Support</li>
            </ul>
          </div>
        </div>

        {/* Market TAM & Target */}
        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#090E17] border border-slate-200 dark:border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-slate-600 dark:text-slate-300 font-mono uppercase font-bold">Total Addressable Market (TAM)</span>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono mt-1">₹250 Crore / Month</div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              1,00,000 independent diagnostic labs in India × ₹2,499 average monthly plan.
            </p>
          </div>
          <div>
            <span className="text-xs text-slate-600 dark:text-slate-300 font-mono uppercase font-bold">Year-2 Realistic Target</span>
            <div className="text-2xl font-black text-blue-600 dark:text-sky-400 font-mono mt-1">₹30 Crore ARR</div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              10,000 labs (10% market penetration) × ₹2,499 = ₹2.5 Crore monthly recurring revenue.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    tag: '07 // REAL-WORLD FEEDBACK',
    title: 'Customer Stories & Lab Testimonials',
    subtitle: 'Piloted with real pathology clinics and patients in West Bengal.',
    type: 'testimonials',
    badge: 'Real Feedback',
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm">
            <p className="text-xs text-slate-700 dark:text-slate-100 leading-relaxed italic mb-4">
              "We used to spend 3 hours on reports every morning. Now it takes 20 minutes."
            </p>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Lab Owner</span>
              <span className="text-[11px] text-blue-600 dark:text-sky-400 font-mono">Siliguri, West Bengal</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex flex-col justify-between shadow-sm">
            <p className="text-xs text-emerald-800 dark:text-emerald-100 leading-relaxed italic mb-4">
              "My mother received her report on mobile. She played the voice narration three times. She said — finally, someone explained it to me."
            </p>
            <div className="pt-3 border-t border-emerald-200 dark:border-emerald-800/50">
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Patient's Son</span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">Haldia, West Bengal</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm">
            <p className="text-xs text-slate-700 dark:text-slate-100 leading-relaxed italic mb-4">
              "I have been running this lab for 12 years. I never knew which tests were growing my business. Now I know every morning before chai."
            </p>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Lab Director</span>
              <span className="text-[11px] text-purple-600 dark:text-purple-300 font-mono">Haldia, West Bengal</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 dark:from-blue-900/40 dark:via-purple-900/30 dark:to-emerald-900/40 border border-blue-200 dark:border-blue-500/40 text-center shadow-sm">
          <p className="text-base font-bold text-slate-900 dark:text-white mb-2">
            "She got home. She opened LabIntel. She understood her report. For the first time in her life."
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-200">
            Production live deployment available at <a href="https://labintelorg.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-sky-300 hover:underline font-mono font-bold">labintelorg.vercel.app</a>
          </p>
        </div>
      </div>
    )
  }
];

export default function ProjectPresentationModal({ isOpen, onClose, project }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const slides = labintelSlides;

  // Next / Prev slide handlers
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextSlide, prevSlide, onClose]);

  // Autoplay slideshow
  useEffect(() => {
    if (!isPlaying || !isOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying, isOpen, nextSlide]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const slide = slides[currentSlide];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop (Dark in dark mode, softly tinted blur in light mode) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 dark:bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-[#07090E] border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 text-slate-900 dark:text-white"
          style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)' }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A0D14]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/25 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold font-mono text-sm border border-blue-200 dark:border-blue-400/40">
                LI
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-sans">
                    LabIntel Architecture & Deep-Dive Deck
                  </h3>
                  <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 font-mono font-bold">
                    {slide.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-300 font-mono">
                  Slide {currentSlide + 1} of {slides.length} • Use Arrow Keys ← → to navigate
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Autoplay Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isPlaying 
                    ? 'bg-blue-100 dark:bg-blue-500/25 border-blue-300 dark:border-blue-400/50 text-blue-700 dark:text-blue-200 font-bold' 
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title="Toggle Autoplay"
              >
                {isPlaying ? <FiPause className="w-3.5 h-3.5" /> : <FiPlay className="w-3.5 h-3.5" />}
                <span className="hidden md:inline">{isPlaying ? 'Pause' : 'Autoplay'}</span>
              </button>

              {/* Download PPT */}
              <a
                href="/projects/labintel/Labintel_Presentation.pptx"
                download="Labintel_Presentation.pptx"
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:border-blue-300 dark:hover:border-blue-400 text-xs flex items-center gap-1.5 transition-colors cursor-pointer font-medium shadow-sm"
                title="Download original PPTX presentation"
              >
                <FiDownload className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                <span className="hidden md:inline">Download PPT</span>
              </a>

              {/* Close */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:text-rose-600 dark:hover:text-white hover:border-rose-300 dark:hover:border-red-400 transition-colors cursor-pointer shadow-sm"
                title="Close (Esc)"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-900 h-1">
            <motion.div
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Slide Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 space-y-5 custom-scrollbar">
            {/* Slide Header */}
            <motion.div
              key={`header-${currentSlide}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-1"
            >
              <span className="text-[11px] font-mono tracking-widest text-blue-600 dark:text-sky-400 font-bold block">
                {slide.tag}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: 'Syne, Outfit, sans-serif' }}>
                {slide.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                {slide.subtitle}
              </p>
            </motion.div>

            {/* Slide Custom Content */}
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {slide.content}
            </motion.div>
          </div>

          {/* Footer Controls & Slide Selector */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A0D14] flex flex-wrap items-center justify-between gap-4">
            {/* Slide Dots / Thumbnails */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx 
                      ? 'w-7 bg-blue-600' 
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                  title={`Go to Slide ${idx + 1}: ${s.title}`}
                />
              ))}
            </div>

            {/* Action Links & Navigation Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://labintelorg.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs text-blue-600 dark:text-sky-400 hover:underline font-bold transition-colors"
              >
                <span>Live System</span>
                <FiExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://github.com/Labintel-dev/Labintel.git"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors"
              >
                <span>GitHub Repo</span>
                <FiGithub className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer shadow-sm"
                  title="Previous Slide (←)"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
                  title="Next Slide (→)"
                >
                  <span>{currentSlide === slides.length - 1 ? 'Start Over' : 'Next'}</span>
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
