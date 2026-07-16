import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto scroll-mt-16">
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
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Avatar and Quick Stats */}
          <div className="lg:col-span-4 flex flex-col items-center space-y-6">
            <div className="relative group">
              {/* Glowing Background Ring */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Profile Image Wrapper */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden bg-slate-900 border border-white/10">
                <img
                  src="/profile_avatar.png"
                  alt="Challa Raghava"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { title: '1+ Year', desc: 'Dev Experience' },
                { title: '5+ Projects', desc: 'Delivered' },
                { title: '8.0 CGPA', desc: 'B.Tech ECE' },
                { title: '3+', desc: 'Certifications' },
              ].map((stat, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-lg font-bold font-display text-cyan-300">{stat.title}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed summary */}
          <div className="lg:col-span-8 space-y-6">
            {/* Bio Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" /> Professional Summary
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Aspiring Software Developer with hands-on experience in .NET Web API, React (Vite), MS SQL Server, Docker, Git, and modern web application development. Currently working on AMS (Application Management System), contributing to development, deployment, testing, and maintenance. Experienced in containerized application deployment using Docker and building scalable full stack applications with React frontends and .NET backends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                <h3 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-400" /> Education
                </h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-semibold text-slate-200">B. Tech (ECE) - 8.0 CGPA</h4>
                    <p className="text-slate-400 text-xs">Sasi Institute of Tech & Engineering | 2022 - 2026</p>
                  </div>
                  <hr className="border-white/5" />
                  <div>
                    <h4 className="font-semibold text-slate-200">Intermediate (MPC) - 8.93/10</h4>
                    <p className="text-slate-400 text-xs">Sasi Junior College, Tanuku | 2020 - 2022</p>
                  </div>
                  <hr className="border-white/5" />
                  <div>
                    <h4 className="font-semibold text-slate-200">SSC - 10/10 CGPA</h4>
                    <p className="text-slate-400 text-xs">Sasi School, Tanuku | 2019 - 2020</p>
                  </div>
                </div>
              </div>

              {/* Career Goals */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                <h3 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" /> Career Goals
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  My goal is to continuously expand my expertise in cloud infrastructure, DevOps automation, Kubernetes, Azure, and Infrastructure as Code. I aim to transition into Cloud Engineering roles, designing secure, scalable systems, and automating infrastructure deployment pipelines while maintaining high-quality software development standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default About;
