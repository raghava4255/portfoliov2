import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Get In{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass-panel p-6 sm:p-8 rounded-2xl border border-white/5">
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Let's discuss your next project.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Whether you need a scalable .NET backend, automated Kubernetes architectures, or a fully optimized DevOps deployment pipeline, I am here to help. Reach out using the form, or email me directly.
              </p>

              {/* Items */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:raghavaachibabu@gmail.com"
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/2 border border-transparent hover:border-white/5 transition duration-300"
                >
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 group-hover:scale-105 transition duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Email</h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-cyan-300 transition duration-300">
                      raghavaachibabu@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl border border-transparent">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Location</h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-300">
                      Tanuku, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+919573894159"
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/2 border border-transparent hover:border-white/5 transition duration-300"
                >
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-300 group-hover:scale-105 transition duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.779-7.78-4.541-8.866.01-.004 1.971-.971 1.979-.975L8.33 1.2l-1.92.946c-2.33 1.15-3.43 3.49-3.4 5.88.1 7.22 8.09 22.61 14.82 20.25 1.63-.57 2.68-1.96 3.11-3.66l.04-.15-1.98-.84z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Phone / Mobile</h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-blue-300 transition duration-300">
                      +91 9573894159
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 py-2.5 px-4 rounded-xl w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold text-emerald-300">Response time: &lt; 24 hours</span>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2 text-left">
                <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wide">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 text-left">
                <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or role details..."
                  className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full shine-button relative overflow-hidden inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:opacity-50 transition-all duration-300 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : isSent ? (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
