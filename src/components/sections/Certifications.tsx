import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, ShieldCheck, Terminal } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  icon: React.ReactNode;
  colorClass: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Data Engineering Virtual Internship',
    issuer: 'Amazon Web Services / Forage',
    date: '2023',
    id: 'Credential ID: AWS-DE-VINT',
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    colorClass: 'hover:border-sky-500/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]',
  },
  {
    title: 'Embedded System Developer Virtual Internship',
    issuer: 'Microchip Technology / EduSkills',
    date: '2022',
    id: 'Credential ID: MC-ESD-2022',
    icon: <Terminal className="w-6 h-6 text-purple-400" />,
    colorClass: 'hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
  },
  {
    title: 'Web Development Certification',
    issuer: 'Global Tech Academy',
    date: '2022',
    id: 'Credential ID: WEB-DEV-CERT',
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    colorClass: 'hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto scroll-mt-16">
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
            Licenses &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between transition-all duration-300 ${cert.colorClass}`}
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-white/5 w-fit">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-display text-white line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span>{cert.id}</span>
                <span className="text-cyan-400 bg-cyan-950/20 py-0.5 px-2 rounded-md border border-cyan-500/20">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Certifications;
