"use client";
import { motion } from "motion/react";
import { ShieldCheck, Settings, Handshake, Truck, Factory, TrendingUp } from "lucide-react";

const differentials = [
  {
    tag: "CONFIABILIDADE",
    title: "Padrão de Qualidade",
    description: "Processos rigorosos e auditorias frequentes que garantem a excelência técnica em cada lote entregue.",
    icon: ShieldCheck,
  },
  {
    tag: "ENGENHARIA",
    title: "Produção Sob Medida",
    description: "Desenvolvemos formulações e especificações exclusivas para a necessidade real do seu setup fabril.",
    icon: Settings,
  },
  {
    tag: "PARCERIA",
    title: "Atendimento Consultivo",
    description: "Suporte com engenharia de aplicação dedicada, focado em construir relações comerciais de longo prazo.",
    icon: Handshake,
  },
  {
    tag: "SUPPLY CHAIN",
    title: "Logística Integrada",
    description: "Distribuição estratégica nacional com monitoramento de frota e garantia de lead-time reduzido.",
    icon: Truck,
  },
  {
    tag: "INFRAESTRUTURA",
    title: "Tecnologia de Ponta",
    description: "Parque fabril moderno com alto nível de automação para assegurar estabilidade milimétrica.",
    icon: Factory,
  },
  {
    tag: "TRACK RECORD",
    title: "Experiência de Mercado",
    description: "Vasto conhecimento técnico acumulado em décadas de atuação no setor de filmes e laminados.",
    icon: TrendingUp,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  },
};

export function Differentials() {
  return (
    <section className="py-24 bg-minaspel-dark border-b border-minaspel-border/30">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* 🏷️ Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-blue-400 tracking-widest block uppercase mb-3"
          >
            Diferenciais Corporativos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-extrabold text-minaspel-light tracking-tight"
          >
            Por que escolher a <span className="text-blue-400">Minaspel</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-minaspel-slate leading-relaxed"
          >
            Combinamos engenharia avançada, previsibilidade operacional e compromisso técnico para blindar a linha de produção do seu negócio.
          </motion.p>
        </div>

        {/* 🗂️ Grid de Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group relative p-6 sm:p-8 bg-minaspel-card border border-minaspel-border/40 rounded-2xl flex flex-col justify-between hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
              >
                {/* Linha luminosa superior responsiva ao hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-blue-500/50 transition-all duration-300" />

                <div className="flex flex-col h-full justify-between">
                  
                  {/* Topo do Card: Ícone Minimalista + Index Técnico */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/20 group-hover:bg-blue-500/5 transition-all duration-300">
                      <Icon className="w-5 h-5 text-minaspel-slate group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono text-minaspel-slate/40 group-hover:text-blue-400/60 transition-colors duration-300">
                      [{String(i + 1).padStart(2, '0')}]
                    </span>
                  </div>

                  {/* Conteúdo Principal */}
                  <div className="flex-grow">
                    <span className="text-[10px] font-mono tracking-wider text-minaspel-slate/50 block mb-1 group-hover:text-blue-400/70 transition-colors duration-300">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-minaspel-light mb-2 tracking-tight group-hover:text-minaspel-light/95 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-minaspel-slate text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Rodapé Decorativo (Fio sutil inferior que reage ao foco) */}
                  <div className="mt-6 pt-1 border-t border-minaspel-border/10 group-hover:border-blue-500/10 transition-colors duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}