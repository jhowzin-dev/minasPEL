"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  { 
    q: "Atendem todo o Brasil?", 
    a: "Sim. Nossa infraestrutura e rede de logística integrada estão preparadas para cobrir todas as regiões do país, garantindo entregas seguras, rastreadas e estritamente dentro do prazo acordado." 
  },
  { 
    q: "Produzem soluções sob medida?", 
    a: "Com certeza. Desenvolvemos projetos totalmente customizados em termos de dimensões, gramatura, resistência e acabamento para se adequarem perfeitamente ao maquinário ou às especificações técnicas da sua operação." 
  },
  { 
    q: "Qual é a quantidade mínima por pedido (MOQ)?", 
    a: "O lote mínimo de fabricação varia de acordo com a complexidade técnica do produto e o nível de personalização exigido. Entre em contato com nosso time comercial para receber uma análise direta para a sua demanda." 
  },
  { 
    q: "Como solicitar um orçamento?", 
    a: "É simples. Você pode clicar no botão \"Solicitar Orçamento\" em nosso menu superior ou rolar até a nossa seção de contato para preencher o formulário técnico. Nosso time de engenharia comercial responde em até 24 horas úteis." 
  },
  { 
    q: "Qual o prazo médio de fabricação e entrega?", 
    a: "Projetos padronizados possuem envio imediato ou em poucos dias. Já os lotes industriais sob medida costumam ter um ciclo médio de produção entre 15 e 30 dias úteis, contados a partir da aprovação final do lote piloto." 
  },
  { 
    q: "Os produtos possuem certificações de qualidade?", 
    a: "Sim. Todos os nossos processos produtivos seguem rigorosos critérios de conformidade técnica e ambiental, assegurando alta performance na linha de produção do cliente e respeito aos critérios de sustentabilidade da cadeia de suprimentos." 
  },
];

export function FAQ() {
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});

  const toggleFAQ = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-24 bg-[#070a13] border-b border-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono text-blue-500 tracking-[0.2em] block uppercase mb-3 font-semibold">
            Central de Ajuda
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed font-normal">
            Tudo o que você precisa saber sobre as nossas soluções, prazos de fabricação e atendimento corporativo.
          </p>
        </div>

        {/* 🧱 Layout Masonry Puro (Inspirado na image_dc095e.jpg) */}
        {/* Usamos columns-1 no mobile, 2 no tablet e 3 colunas no desktop para distribuir perfeitamente */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {faqs.map((item, i) => {
            const isOpen = !!openStates[i];

            return (
              <motion.div
                key={i}
                animate={{
                  scale: isOpen ? 1.015 : 1,
                  backgroundColor: isOpen ? "rgba(255, 255, 255, 0.03)" : "rgba(13, 18, 33, 0.4)",
                  borderColor: isOpen ? "rgba(59, 130, 246, 0.35)" : "rgba(255, 255, 255, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                // break-inside-avoid impede que o card se quebre ao meio entre uma coluna e outra
                className={`break-inside-avoid mb-5 relative border rounded-2xl overflow-hidden backdrop-blur-md transition-shadow duration-300 ${
                  isOpen ? "shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_25px_rgba(59,130,246,0.06)]" : "shadow-sm"
                }`}
              >
                {/* Filete de Destaque Lateral Opcional */}
                {isOpen && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 to-blue-600 z-10" />
                )}

                {/* Cabeçalho do Card (Pergunta) */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-start text-left p-6 select-none outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`pr-4 text-sm sm:text-[14.5px] font-bold tracking-tight leading-snug transition-colors duration-200 ${
                    isOpen ? "text-white" : "text-slate-300 group-hover:text-white"
                  }`}>
                    {item.q}
                  </span>
                  
                  {/* Ícone Indicador Mini */}
                  <span 
                    className={`flex items-center justify-center w-7 h-7 rounded-xl border transition-all duration-300 shrink-0 mt-0.5 ${
                      isOpen 
                        ? "border-blue-500/40 bg-blue-500/10 text-blue-400 rotate-180 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                        : "border-white/[0.06] bg-white/[0.01] text-slate-400 group-hover:text-slate-200 group-hover:border-white/10"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                </button>

                {/* Resposta Expansível Integrada */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { type: "spring", stiffness: 220, damping: 26 },
                        opacity: { duration: 0.18 } 
                      }}
                    >
                      <div className="px-6 pb-6 text-slate-400 border-t border-white/[0.04] pt-4 text-xs sm:text-[13px] leading-relaxed antialiased">
                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.06, duration: 0.22 }}
                        >
                          {item.a}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}