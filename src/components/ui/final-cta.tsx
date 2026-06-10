"use client";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="relative py-10 bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 text-white overflow-hidden border-t border-white/5">
      {/* Detalhe sutil de luz ao fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Textos à esquerda */}
        <div className="text-center md:text-left max-w-xl">
          <motion.span 
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-block text-[10px] font-bold tracking-widest uppercase text-blue-400 mb-1"
          >
            Vamos conversar?
          </motion.span>
          <motion.h2
            className="text-xl sm:text-2xl font-bold tracking-tight text-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Precisa de uma solução para seu projeto?
          </motion.h2>
        </div>

        {/* Botões à direita */}
        <motion.div 
          className="flex flex-row items-center gap-3 w-full sm:w-auto justify-center shrink-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Botão Orçamento */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl transition-colors hover:bg-blue-500 shadow-lg shadow-blue-600/10"
          >
            Orçamento
          </motion.a>
          
          {/* Botão WhatsApp */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.06)", y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-gray-200 text-sm font-medium rounded-xl transition-colors backdrop-blur-sm"
          >
            <svg className="w-4 h-4 fill-current text-green-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 12.004-11.948 12.004-2.015-.001-4.004-.506-5.776-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97C16.486 1.866 14.021 1.04 11.39 1.04c-5.436 0-9.86 4.42-9.864 9.853-.001 1.702.46 3.366 1.334 4.811l-1.011 3.693 3.798-.996z"/>
            </svg>
            WhatsApp
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}