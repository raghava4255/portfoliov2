import React, { useEffect, useState } from 'react';

export const AnimatedBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-[#030014] overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40"></div>

      {/* Floating Animated Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-500/10 blur-[150px] animate-float-medium"></div>
      <div className="absolute top-[30%] right-[20%] w-[45vw] h-[45vw] rounded-full bg-blue-500/5 blur-[130px] animate-pulse-slow"></div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-bg"></div>

      {/* Interactive Mouse Glow Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.05), rgba(139, 92, 246, 0.02) 40%, transparent 80%)`,
        }}
      ></div>
    </div>
  );
};
export default AnimatedBackground;
