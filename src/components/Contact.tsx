import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Code, Terminal } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace with your actual EmailJS credentials
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          formRef.current?.reset();
          setTimeout(() => setSubmitStatus('idle'), 5000);
        },
        () => {
          setSubmitStatus('error');
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus('idle'), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden fade-up">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block px-3 py-1 bg-red-400 dark:bg-red-600 text-black font-bold text-sm mb-4 transform rotate-1 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-2 mb-6 text-black dark:text-white tracking-tighter">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">ME</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <div className="p-8 bg-white dark:bg-[#151515] rounded-lg shadow-lg">
              <h3 className="text-3xl font-black mb-8 text-black dark:text-white uppercase tracking-tight">
                Contact Info
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 border-2 border-transparent hover:border-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-black dark:text-white uppercase">Email</h4>
                    <a href="mailto:arish6016@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                      arish6016@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 border-2 border-transparent hover:border-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-black dark:text-white uppercase">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-300">+91 12345 67890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 border-2 border-transparent hover:border-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-black dark:text-white uppercase">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300">Remote / Hybrid – India</p>
                  </div>
                </div>
                <div className="pt-10 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white mb-6">Connect Elsewhere</h3>
                  <div className="flex gap-4">
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
                        className="p-3 bg-white/5 text-slate-400 hover:text-white hover:bg-[#EC1D24] rounded-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative"
          >
            {/* Soft highlight behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EC1D24]/10 to-transparent rounded-2xl blur-xl -z-10" />
            <form ref={formRef} onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-mono text-slate-400 ml-1">NAME</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EC1D24] focus:ring-1 focus:ring-[#EC1D24] transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-mono text-slate-400 ml-1">EMAIL</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EC1D24] focus:ring-1 focus:ring-[#EC1D24] transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-slate-400 ml-1">MESSAGE</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EC1D24] focus:ring-1 focus:ring-[#EC1D24] transition-all placeholder:text-slate-600"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#EC1D24] hover:bg-[#d71c20] text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 uppercase tracking-wider"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 text-green-800 dark:text-green-300 rounded-lg flex items-center font-bold shadow-lg"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 border-2 border-red-500 text-red-800 dark:text-red-300 rounded-lg font-bold shadow-lg"
                >
                  ⚠ Unable to send message. Please email me directly at arish6016@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;