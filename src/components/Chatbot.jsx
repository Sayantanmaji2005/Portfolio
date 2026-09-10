import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiCpu } from 'react-icons/fi';
import { generateChatResponse } from '../services/ai';
import useSoundEffects from '../hooks/useSoundEffects';

const Chatbot = () => {
  const { playClick, playHover } = useSoundEffects();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm **NEXA AI**, Sayantan's dedicated Portfolio Intelligence Assistant. Ask me anything about his projects, architecture, tech stack, certifications, or experience!", isAi: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "🚀 Flagship Projects",
    "⚡ Skills & Stack",
    "🏆 Certifications & Exp",
    "📬 Contact Details"
  ];

  const handleQuickPrompt = (promptText) => {
    sendMessage(promptText);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async (textToSend) => {
    if (!textToSend.trim() || isTyping) return;

    playClick();
    const userMsg = textToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isAi: false }]);
    setIsTyping(true);

    const aiResponse = await generateChatResponse([...messages, { text: userMsg, isAi: false }]);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { text: aiResponse, isAi: true }]);
  };

  const handleSend = (e) => {
    e?.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          y: [0, -6, 0] // Gentle floating animation
        }}
        transition={{ 
          scale: { delay: 2, type: 'spring' },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        onMouseEnter={playHover}
        onClick={() => { playClick(); setIsOpen(prev => !prev); }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-2xl z-[100] overflow-visible group cursor-pointer hover:scale-105 active:scale-95"
        style={{ padding: 0 }}
        aria-label="Toggle NEXA AI Assistant"
      >
        {/* Pulsing rings behind the button */}
        <span className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping" style={{ animationDuration: '3s' }}></span>
        <span className="absolute inset-[-3px] rounded-full bg-cyan-400 opacity-20 animate-pulse"></span>
        
        {/* Button Content */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img src="/chatbot-icon.png" alt="NEXA AI" className="w-full h-full object-cover relative z-0" />
        </div>
        
        {/* Unread badge */}
        {!isOpen && messages.length === 1 && (
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-slate-900"></span>
          </span>
        )}
      </motion.button>

      {/* Chat Window & Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-outside Backdrop on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[140] bg-black/30 backdrop-blur-[2px] sm:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-20 sm:bottom-24 right-3 sm:right-6 w-[360px] max-w-[calc(100vw-1.5rem)] h-[520px] max-h-[80vh] rounded-3xl flex flex-col z-[150] shadow-2xl overflow-hidden bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800"
              style={{ 
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35)'
              }}
            >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                  <FiCpu className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: 'Syne, Outfit, sans-serif' }}>
                      NEXA AI
                    </h4>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                      v2.0
                    </span>
                  </div>
                  <p className="text-[10px] text-emerald-500 flex items-center gap-1 font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Portfolio Scanner Online
                  </p>
                </div>
              </div>
              <button onClick={() => { playClick(); setIsOpen(false); }} className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5" style={{ background: 'var(--bg-base)' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.isAi ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.isAi ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[88%] p-3.5 rounded-2xl text-[12.5px] leading-relaxed shadow-sm ${
                      msg.isAi 
                        ? 'rounded-tl-none bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80' 
                        : 'rounded-tr-none bg-blue-600 text-white shadow-md'
                    }`}
                  >
                    {/* Basic markdown parsing for bold text */}
                    {msg.text.split('**').map((part, index) => 
                      index % 2 === 1 ? <strong key={index} className="font-bold">{part}</strong> : part
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] font-mono text-slate-400 mr-1">Scanning portfolio</span>
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickPrompt(p)}
                  disabled={isTyping}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-sky-400 transition-all cursor-pointer shadow-xs"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 flex gap-2 items-center" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask NEXA about Sayantan..."
                className="flex-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs sm:text-sm px-3.5 py-2.5 transition-colors focus:border-blue-500"
                style={{ color: 'var(--text-primary)' }}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                onMouseEnter={playHover}
                className="w-10 h-10 rounded-xl flex flex-shrink-0 items-center justify-center bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer hover:bg-blue-500 shadow-md shadow-blue-500/20"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
