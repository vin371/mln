import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-zinc-200 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <blockquote className="text-lg md:text-xl font-serif italic text-zinc-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Tự do không phải là phủ nhận tất yếu, mà là sự nhận thức và vận dụng cái tất yếu.
        </blockquote>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-100">
          <div className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">
            MLN111 &copy; 2026
          </div>
          <div className="px-5 py-2 bg-ethereal-cyan/10 text-ethereal-blue font-black text-[10px] uppercase tracking-[0.25em] rounded-full">
            Chủ nghĩa duy vật biện chứng
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

