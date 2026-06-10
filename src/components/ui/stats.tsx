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
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Nossos números
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-3xl font-bold text-blue-600 mb-2">{s.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
