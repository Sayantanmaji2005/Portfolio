import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiCpu } from 'react-icons/fi';
import { generateChatResponse } from '../services/ai';
import useSoundEffects from '../hooks/useSoundEffects';

const Chatbot = () => {
  const { playClick, playHover } = useSoundEffects();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Sayantan's AI Assistant. How can I help you today?", isAi: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    playClick();
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isAi: false }]);
    setIsTyping(true);

    const aiResponse = await generateChatResponse([...messages, { text: userMsg, isAi: false }]);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { text: aiResponse, isAi: true }]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          y: [0, -10, 0] // Floating animation
        }}
        transition={{ 
          scale: { delay: 2, type: 'spring' },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        onMouseEnter={playHover}
        onClick={() => { playClick(); setIsOpen(true); }}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl z-[90] overflow-visible group cursor-pointer hover:scale-105"
        style={{ padding: 0 }}
      >
        {/* Pulsing rings behind the button */}
        <span className="absolute inset-0 rounded-full bg-blue-400 opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>
        <span className="absolute inset-[-4px] rounded-full bg-cyan-400 opacity-20 animate-pulse"></span>
        
        {/* Button Content */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img src="/chatbot-icon.png" alt="AI Chatbot" className="w-full h-full object-cover relative z-0" />
        </div>
        
        {/* Unread badge */}
        {!isOpen && messages.length === 1 && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-slate-900"></span>
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] rounded-2xl flex flex-col z-[100] shadow-[0_0_40px_rgba(37,99,235,0.15)] overflow-hidden"
            style={{ 
              background: 'var(--bg-card)', 
              border: '1px solid var(--border-card)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                  <FiCpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>AI Assistant</h4>
                  <p className="text-[10px] text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button onClick={() => { playClick(); setIsOpen(false); }} className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 transition-colors cursor-pointer">
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ background: 'var(--bg-base)' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.isAi ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.isAi ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-relaxed ${
                      msg.isAi 
                        ? 'rounded-tl-none bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700' 
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
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none p-4 flex gap-1.5 border border-slate-200 dark:border-slate-700">
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 flex gap-2 items-center" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Sayantan..."
                className="flex-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-sm px-4 py-2.5 transition-colors focus:border-blue-500"
                style={{ color: 'var(--text-primary)' }}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                onMouseEnter={playHover}
                className="w-10 h-10 rounded-xl flex flex-shrink-0 items-center justify-center bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer hover:bg-blue-700"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
