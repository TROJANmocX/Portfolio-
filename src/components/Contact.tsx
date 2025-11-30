import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Code, Terminal, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arish6016@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;

    // Construct mailto link
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:arish6016@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Show success state
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      formRef.current?.reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EC1D24]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EC1D24]/10 border border-[#EC1D24]/20 text-[#EC1D24] text-[10px] font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC1D24] animate-pulse"></span>
            Open for Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tighter">
            GET IN <span className="text-[#EC1D24]">TOUCH</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium text-lg">
            Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-50 dark:bg-[#111] p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl">
              <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
                <div className="w-1 h-8 bg-[#EC1D24] rounded-full"></div>
                Contact Info
              </h3>

              <div className="space-y-6">
                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/5">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                    <div className="flex items-center gap-3">
                      <a href="mailto:arish6016@gmail.com" className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#EC1D24] transition-colors">
                        arish6016@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 text-slate-400 hover:text-[#EC1D24] hover:bg-[#EC1D24]/10 rounded-md transition-all"
                        title="Copy Email"
                      >
                        {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/5">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">+91 12345 67890</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/5">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">Remote / Hybrid – India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Connect Elsewhere</h4>
                <div className="flex gap-3">
                  {[{ icon: <Github size={20} />, url: 'https://github.com/TROJANmocX' },
                  { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/arish-ali-8670341b3/' },
                  { icon: <Twitter size={20} />, url: 'https://twitter.com/yourhandle' },
                  { icon: <Code size={20} />, url: 'https://leetcode.com/u/trojanmocx/' },
                  { icon: <Terminal size={20} />, url: 'https://dev.to/trojanmocx' }].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-white hover:bg-[#EC1D24] hover:border-[#EC1D24] rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-[#111] p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl space-y-6 relative z-10">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Send size={120} />
              </div>

              <h3 className="text-2xl font-black mb-2 text-slate-900 dark:text-white uppercase tracking-tight">
                Send a Message
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                This will open your default email client with the message pre-filled.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#EC1D24] focus:ring-1 focus:ring-[#EC1D24] transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#EC1D24] focus:ring-1 focus:ring-[#EC1D24] transition-all placeholder:text-slate-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#EC1D24] focus:ring-1 focus:ring-[#EC1D24] transition-all placeholder:text-slate-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#EC1D24] hover:bg-[#d71c20] text-white font-bold py-4 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-red-500/30 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm group"
              >
                {isSubmitting ? 'Opening Email Client...' : 'Launch Message'}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 rounded-xl flex items-center gap-3 font-bold text-sm"
                  >
                    <div className="p-1 bg-green-500 rounded-full text-white">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    Email client opened! Please hit send.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;