"use client";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Precisa de uma solução para seu projeto?
        </motion.h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-block px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#"
            className="inline-block px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
