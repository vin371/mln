import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Particle = ({ delay, duration, x, y, size, color }) => {
  return (
    <motion.div
      initial={{ 
        top: `${y}%`, 
        left: `${x}%`, 
        opacity: 0, 
        scale: 0.5 
      }}
      animate={{ 
        top: `${y - (Math.random() * 30 + 10)}%`, 
        left: `${x + (Math.random() * 20 - 10)}%`, 
        opacity: [0, 0.3, 0.6, 0.3, 0],
        scale: [0.5, 1, 1.2, 1, 0.5]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay, 
        ease: "easeInOut" 
      }}
      className="absolute pointer-events-none z-[1]"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `0 0 ${size * 2}px ${size / 2}px ${color}`,
        filter: "blur(1px)",
      }}
    />
  );
};

const AmbientParticles = () => {
  const particles = useMemo(() => {
    // Ethereal colors: cyan, blue, purple, soft white
    const colors = ['#60a5fa', '#a78bfa', '#22d3ee', '#ffffff', '#818cf8'];
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 15,
      duration: Math.random() * 15 + 15, // Slow floating (15-30s)
      x: Math.random() * 100,
      y: Math.random() * 100 + 20, // Start randomly vertically
      size: Math.random() * 4 + 2, // 2px to 6px size
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.0)_0%,_rgba(0,0,0,0.0)_100%)]" />
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </div>
  );
};

export default AmbientParticles;

