"use client";
import { motion } from "motion/react";

const stats = [
  { label: "Anos de mercado", value: "20+" },
  { label: "Clientes atendidos", value: "500+" },
  { label: "Projetos realizados", value: "10.000+" },
  { label: "Cobertura", value: "Brasil" },
];

export function Stats() {
  return (
    <section className="py-12 bg-minaspel-dark">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Nossos números
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-minaspel-card rounded-xl shadow-sm p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-3xl font-bold text-blue-600 mb-2">{s.value}</p>
              <p className="text-sm text-minaspel-slate">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
