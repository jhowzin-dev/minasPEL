"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";

const differentials = [
  {
    tag: "QUALIDADE ASSEGURADA",
    mainText: "Rastreabilidade completa e rigoroso controle de qualidade em cada lote homologado.",
    footerText: "Certificação Integral",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    modalTitle: "Controle de Qualidade & Rastreabilidade",
    modalDescription: "Nosso sistema de gestão garante a conformidade técnica desde a matéria-prima até o product final.",
    details: [
      "Laudos técnicos individuais por lote de fabricação.",
      "Inspeção dimensional e testes de resistência em laboratório próprio.",
      "Matérias-primas 100% virgens e homologadas pelos principais órgãos reguladores.",
      "Sistema de etiquetagem por código de barras para rastreamento histórico imediato."
    ]
  },
  {
    tag: "ALTA TECNOLOGIA",
    mainText: "Linhas de produção 100% automatizadas com engenharia de última geração.",
    footerText: "Infraestrutura Moderna",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    modalTitle: "Infraestrutura & Engenharia de Produção",
    modalDescription: "Investimos continuamente em maquinários de ponta para garantir estabilidade e alta capacidade produtiva.",
    details: [
      "Extrusoras e laminadoras com controle automático de espessura.",
      "Ambiente fabril controlado para evitar qualquer contaminação externa.",
      "Capacidade para produção em larga escala com variação técnica milimétrica.",
      "Manutenção preventiva rigorosa que zera oscilações na entrega dos lotes."
    ]
  },
  {
    tag: "ATENDIMENTO DEDICADO",
    mainText: "Engenharia de aplicação especializada para dar suporte sob medida ao seu projeto.",
    footerText: "Suporte Especializado",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
    modalTitle: "Engenharia de Aplicação Dedicada",
    modalDescription: "Não vendemos apenas o material, desenvolvemos a solução ideal para o setup da sua máquina.",
    details: [
      "Análise técnica do seu equipamento para indicar a melhor formulação de filme.",
      "Desenvolvimento de amostras customizadas para testes de bancada.",
      "Acompanhamento técnico presencial ou remoto no primeiro setup produtivo.",
      "Canais diretos de engenharia para resolução de dúvidas e otimização de processos."
    ]
  },
  {
    tag: "LOGÍSTICA EFICIENTE",
    mainText: "Distribuição estratégica nacional focada em segurança e lead-time reduzido.",
    footerText: "Logística Inteligente",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    modalTitle: "Logística Industrial Integrada",
    modalDescription: "Garantimos o abastecimento da sua linha de produção sem interrupções indesejadas.",
    details: [
      "Frota monitorada e parceiros logísticos homologados para cargas sensíveis.",
      "Embalagens de transporte reforçadas que evitam danos ou umidade no trajeto.",
      "Estoque estratégico regulador para clientes com contratos programados.",
      "Roteirização inteligente para despachos urgentes em todo o Brasil."
    ]
  }
];

// Dados específicos do modal para o card de destaque superior
const historyCardData = {
  tag: "EVOLUÇÃO CONSTANTE",
  modalTitle: "Sede Própria & Automação Industrial",
  modalDescription: "Nossa infraestrutura foi projetada para atender às demandas mais rigorosas do mercado corporativo e industrial com máxima eficiência.",
  imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  details: [
    "Sede própria estrategicamente posicionada para agilizar o escoamento logístico.",
    "Parque fabril moderno com sistemas integrados de automação e monitoramento.",
    "Área de armazenamento otimizada para a manutenção de estoque pulmão de segurança.",
    "Ambiente adequado aos mais severos padrões de segurança operacional e sustentabilidade."
  ]
};

export function AboutBrief() {
  // Ajustado o tipo para aceitar o ID do card de história também
  const [activeModal, setActiveModal] = useState<number | "history" | null>(null);

  // Helper para extrair os dados corretos no modal dinâmico
  const currentModalData = activeModal === "history" ? historyCardData : activeModal !== null ? differentials[activeModal] : null;

  return (
    <section className="py-24 bg-minaspel-dark border-b border-minaspel-border/30">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Layout Superior */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
              <span className="accent-dot-white" /> Conheça nossa trajetória
            </motion.span>
            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
              Sobre a Minaspel
            </h2>
            <div className="space-y-4 text-minaspel-slate text-sm sm:text-base leading-relaxed">
              <p>
                Fundada com o propósito de transformar o fornecimento de embalagens e materiais industriais, a Minaspel nasceu da necessidade de entregar precisão técnica e máxima confiabilidade ao mercado de filmes e laminados.
              </p>
              <p>
                O que começou como um desafio focado no atendimento regional, ao longo de duas décadas se transformou em uma estrutura moderna de engenharia de aplicação, capable de desenhar soluções sob medida para grandes indústrias em todo o território nacional.
              </p>
            </div>
          </div>

          {/* 🛠️ CORREÇÃO AQUI: Adicionado onClick, cursor-pointer e os estilos de hover dinâmicos */}
          <motion.div 
            onClick={() => setActiveModal("history")}
            className="md:col-span-5 bg-minaspel-card border border-minaspel-border/40 p-5 sm:p-6 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden group hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-blue-500/50 transition-all duration-300" />
            
            <div>
              <div className="w-full h-32 rounded-xl overflow-hidden mb-4 border border-minaspel-border/20 relative">
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10" />
                <img 
                  src={historyCardData.imageUrl} 
                  alt="Automação Industrial"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="text-xs font-mono text-minaspel-slate/60 mb-1 group-hover:text-blue-400/80 transition-colors">{historyCardData.tag}</div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                Moldando o futuro da distribuição industrial com excelência técnica.
              </h4>
            </div>
            <div className="pt-4 border-t border-minaspel-border/30 mt-4 flex items-center justify-between text-xs text-white/80 font-medium">
              <span>Sede Própria & Automação</span>
              <span className="text-minaspel-slate text-xs group-hover:text-blue-400 font-medium flex items-center gap-1 transition-colors">
                Saber mais
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Cards de Diferenciais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveModal(i)}
              className="p-6 sm:p-8 rounded-2xl bg-minaspel-card border border-minaspel-border/40 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-blue-500/50 transition-all duration-300" />
              
              <div>
                <div className="text-xs font-mono text-minaspel-slate/60 mb-2 tracking-wider group-hover:text-blue-400/80 transition-colors">
                  {item.tag}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-4 leading-snug">
                  {item.mainText}
                </h4>
              </div>

              <div className="pt-5 border-t border-minaspel-border/30 mt-5 flex items-center justify-between text-xs text-white/80 font-medium">
                <span>{item.footerText}</span>
                <span className="text-minaspel-slate text-xs group-hover:text-blue-400 font-medium flex items-center gap-1 transition-colors">
                  Saber mais
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pop-up Modal Unificado (Lê os dados dinamicamente com base no estado) */}
        <AnimatePresence>
          {activeModal !== null && currentModalData && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModal(null)}
              />

              <motion.div 
                className="bg-minaspel-card border border-minaspel-border/60 max-w-lg w-full rounded-2xl p-6 relative shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                <button 
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 p-1.5 text-minaspel-slate hover:text-white rounded-lg bg-black/40 hover:bg-black/60 transition-colors z-20 backdrop-blur-sm"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="w-full h-40 rounded-xl overflow-hidden mb-5 border border-minaspel-border/20 relative">
                  <img 
                    src={currentModalData.imageUrl} 
                    alt={currentModalData.modalTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 block mb-1">
                    {currentModalData.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {currentModalData.modalTitle}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-minaspel-slate leading-relaxed mb-5">
                  {currentModalData.modalDescription}
                </p>

                <ul className="space-y-3 border-t border-minaspel-border/30 pt-4">
                  {currentModalData.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="leading-normal">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-minaspel-border/20 flex justify-end">
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-lg border border-white/10 transition-colors"
                  >
                    Fechar painel
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}