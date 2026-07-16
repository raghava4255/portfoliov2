import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Manage Navbar background opacity
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const scrollPosition = window.scrollY + 150;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full flex justify-center py-4 px-4 ${
        isScrolled ? 'backdrop-blur-md bg-[#030014]/75 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="text-lg font-bold font-display cursor-pointer bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wider hover:brightness-110 transition duration-300"
        >
          RAGHAVA.DEV
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-1 glass-panel px-1.5 py-1 rounded-full border border-white/5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-sans transition-all duration-300 relative cursor-pointer ${
                activeSection === item.id
                  ? 'text-cyan-300 bg-white/5 shadow-[0_0_15px_rgba(34,211,238,0.15)] border border-white/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/2 border border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={() => handleNavClick('contact')}
          className="hidden sm:inline-flex text-xs font-semibold px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-950/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-300 cursor-pointer"
        >
          Hire Me
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
