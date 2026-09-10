import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiCopy, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success
  const [copiedText, setCopiedText] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
      formRef.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
    ).then((result) => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
    }, (error) => {
        console.error('Email sending failed:', error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <section id="contact" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header Matching Reference Template */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="mb-16 relative"
      >
        <span className="section-label mb-2">09 // Get In Touch</span>
        <span className="text-xs font-mono font-medium text-slate-400 block mb-2">That's all for now.</span>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight leading-tight" style={{ fontFamily: 'Syne, Outfit, sans-serif', color: 'var(--text-primary)' }}>
              Got a project in mind?<br />
              <span className="text-gradient">Let's talk</span>
            </h3>
          </div>

          {/* Large Floating Action Button (Matching Reference Screenshot 2 & 4) */}
          <motion.a
            href="mailto:sayantanmaji2005@gmail.com"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center font-bold text-center text-xs sm:text-sm shadow-[0_10px_35px_rgba(37,99,235,0.5)] transition-all cursor-pointer flex-shrink-0"
          >
            Get in touch
          </motion.a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Info card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h4 className="text-xl font-bold" style={{ fontFamily:'Outfit,sans-serif', color:'var(--text-primary)' }}>
              Let's create something modern.
            </h4>
            <p className="text-sm leading-relaxed" style={{ color:'var(--text-secondary)' }}>
              If you have any questions, proposals, or just want to connect, feel free to drop a message. I am actively looking for software engineering internships and junior developer opportunities.
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-4 py-6 border-y border-slate-200">
            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-blue-600/5 border border-blue-600/20 group-hover:border-blue-600/50 group-hover:bg-blue-600/10 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.05)]">
                <FiMail className="w-4.5 h-4.5 text-blue-600" />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] text-slate-500 font-mono block uppercase">Email Address</span>
                <a href="mailto:sayantanmaji2005@gmail.com" className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold hover:text-blue-600 transition-colors cursor-pointer">
                  sayantanmaji2005@gmail.com
                </a>
              </div>
              <button
                onClick={() => handleCopy('sayantanmaji2005@gmail.com', 'email')}
                className="p-2 rounded-lg bg-blue-600/5 hover:bg-blue-600/10 text-blue-600 border border-blue-600/20 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedText === 'email' ? <FiCheck className="w-3.5 h-3.5 animate-pulse" /> : <FiCopy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <FiPhone className="w-4.5 h-4.5 text-emerald-500" />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] text-slate-500 font-mono block uppercase">Phone Number</span>
                <a href="tel:+919002761536" className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold hover:text-emerald-500 transition-colors cursor-pointer">
                  +91 9002761536
                </a>
              </div>
              <button
                onClick={() => handleCopy('+91 9002761536', 'phone')}
                className="p-2 rounded-lg bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 transition-colors cursor-pointer"
                title="Copy Phone"
              >
                {copiedText === 'phone' ? <FiCheck className="w-3.5 h-3.5 animate-pulse" /> : <FiCopy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                <FiMapPin className="w-4.5 h-4.5 text-amber-500" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono block uppercase">Location Coordinates</span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold block group-hover:text-amber-500 transition-colors">
                  Haldia, West Bengal, India
                </span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 font-mono">
            * Transmitting encrypted connection logs.
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="lg:col-span-7">
          <div className="aurora-card rounded-2xl p-6 sm:p-8 hover:border-secondary/20 transition-all duration-500 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  className="flex flex-col items-center justify-center text-center py-12 h-full space-y-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-slate-50 border border-accent flex items-center justify-center shadow-lg shadow-accent/10"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                  >
                    <FiCheckCircle className="w-8 h-8 text-accent" />
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-textPrimary">Message Logged</h4>
                  <p className="text-xs text-textSecondary max-w-sm font-sans leading-relaxed">
                    Thank you! Your contact message has been saved in Sayantan's server state. He will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold ml-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border-2 border-slate-200/60 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 shadow-sm focus:shadow-[0_0_20px_rgba(37,99,235,0.15)] placeholder:text-slate-400 text-sm font-medium ${errors.name ? 'border-red-500/60 focus:border-red-500' : ''}`}
                        placeholder="Enter your name..."
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-mono mt-0.5 ml-1">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold ml-1">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border-2 border-slate-200/60 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 shadow-sm focus:shadow-[0_0_20px_rgba(37,99,235,0.15)] placeholder:text-slate-400 text-sm font-medium ${errors.email ? 'border-red-500/60 focus:border-red-500' : ''}`}
                        placeholder="Enter your email address..."
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-mono mt-0.5 ml-1">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border-2 border-slate-200/60 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 shadow-sm focus:shadow-[0_0_20px_rgba(37,99,235,0.15)] placeholder:text-slate-400 text-sm font-medium ${errors.subject ? 'border-red-500/60 focus:border-red-500' : ''}`}
                      placeholder="Opportunity / Project Collaboration..."
                    />
                    {errors.subject && <span className="text-[10px] text-red-500 font-mono mt-0.5 ml-1">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold ml-1">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border-2 border-slate-200/60 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-300 shadow-sm focus:shadow-[0_0_20px_rgba(37,99,235,0.15)] placeholder:text-slate-400 text-sm font-medium resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500' : ''}`}
                      placeholder="Hi Sayantan..."
                    />
                    {errors.message && <span className="text-[10px] text-red-500 font-mono mt-0.5 ml-1">{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="relative w-full py-4 mt-6 rounded-xl font-bold uppercase tracking-widest text-white overflow-hidden group disabled:opacity-70 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-600/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]"></div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-xs">Send Message</span>
                          <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
