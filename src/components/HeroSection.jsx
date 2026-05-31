import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-white overflow-hidden border-b-8 border-ethereal-blue">
      <img
        src="/image/hero_bg.png"
        alt="Triết học Mác - Lênin: Tự do và Tất yếu"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="mb-4 inline-block bg-ethereal-blue text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.4em] shadow-lg shadow-ethereal-blue/20">
            Triết học Mác - Lênin
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white mb-8 uppercase leading-tight whitespace-nowrap">
            TỰ DO & <span className="text-ethereal-purple">TẤT YẾU</span>
          </h1>
          <div className="h-2 w-48 bg-ethereal-cyan mx-auto mb-12 shadow-sm rounded-full" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-2xl md:text-4xl font-serif italic text-zinc-100 leading-tight max-w-4xl mx-auto"
        >
          “Tự do là sự nhận thức được tất yếu."
          <footer className="mt-8 text-sm md:text-xl font-sans uppercase tracking-[0.3em] text-ethereal-blue font-black not-italic">
            (Spinoza, Hegel, Engels)
          </footer>
        </motion.blockquote>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-black"></span>
          <div className="w-1 h-16 bg-gradient-to-b from-ethereal-blue via-ethereal-cyan to-transparent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

