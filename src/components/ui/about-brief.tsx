"use client";
import { motion } from "motion/react";
import { ShieldCheck, Cpu, Headphones, Truck } from "lucide-react"; // Ícones industriais


const differentials = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />, // Um azul levemente mais vivo se destaca melhor
    title: "Rastreabilidade & Qualidade",
    description: "Lotes homologados com controle de qualidade rigoroso e certificação integral."
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    title: "Infraestrutura Tecnológica",
    description: "Linhas de produção automatizadas e engenharia de última geração."
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-500" />,
    title: "Suporte Especializado",
    description: "Engenharia de aplicação e atendimento técnico dedicado ao seu projeto."
  },
  {
    icon: <Truck className="w-6 h-6 text-blue-500" />,
    title: "Logística Inteligente",
    description: "Distribuição nacional estratégica com foco em lead-time reduzido e segurança."
  }
];

export function AboutBrief() {
  return (
    // Ajustado para o mesmo tom de azul/escuro do restante do seu site
    <section className="py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Título com animação suave e gradiente */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Sobre a Minaspel
          </motion.h2>
          
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Há mais de 20 anos fornecendo filmes técnicos, laminados e soluções sob medida para a indústria brasileira. Nossa missão é garantir qualidade, inovação e suporte especializado a cada cliente.
          </motion.p>
        </div>

        {/* Grid de Diferenciais simples */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5 border border-blue-500/20">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}