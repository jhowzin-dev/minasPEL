"use client";
import { motion } from "motion/react";
import { ShieldCheck, Settings, Handshake, Truck, Factory, TrendingUp } from "lucide-react";

const differentials = [
  {
    title: "Padrão de Qualidade",
    description: "Processos rigorosos que garantem a excelência em cada lote.",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Produção Sob Medida",
    description: "Desenvolvemos soluções específicas para a necessidade do seu projeto.",
    icon: Settings,
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "Atendimento Consultivo",
    description: "Suporte especialista focado em parcerias de longo prazo.",
    icon: Handshake,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Logística Integrada",
    description: "Entrega ágil e segura em todo o território nacional.",
    icon: Truck,
    color: "from-red-500 to-rose-400",
  },
  {
    title: "Tecnologia de Ponta",
    description: "Maquinário moderno para maior precisão e eficiência produtiva.",
    icon: Factory,
    color: "from-purple-500 to-violet-400",
  },
  {
    title: "Experiência de Mercado",
    description: "Vasto conhecimento técnico acumulado em anos de atuação.",
    icon: TrendingUp,
    color: "from-sky-500 to-indigo-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function Differentials() {
  return (
    <section className="py-20 bg-minaspel-dark">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="inline-block px-4 py-1 rounded-full bg-blue-900/40 text-blue-300 text-sm font-semibold mb-4"
          >
            Nossos Diferenciais
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Por que escolher a <span className="text-blue-400">Minaspel</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-minaspel-slate"
          >
            Combinamos tecnologia, compromisso e experiência para entregar as melhores soluções industriais para o seu negócio.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group relative p-8 bg-minaspel-card rounded-3xl border border-minaspel-border shadow-sm hover:shadow-xl hover:border-blue-900/50 transition-all duration-300 ease-in-out hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-blue-500/10 rounded-3xl transition-all duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-blue-500/10`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>

                    <span className="text-5xl font-black text-minaspel-border/50 group-hover:text-blue-900/30 transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-minaspel-slate flex-grow text-base leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 w-10 h-1 bg-minaspel-border group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
