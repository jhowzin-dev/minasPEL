"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ImageData {
  id: string;
  url: string;
  alt: string;
}

const imagesData: ImageData[] = [
  {
    id: "1",
    url: "https://www.oracle.com/a/ocom/img/rc24-bsa-smart-factory.jpg",
    alt: "Fábrica moderna com robôs e trabalhadores",
  },
  {
    id: "2",
    url: "https://www.insper.edu.br/content/dam/insper-portal/imagens/alunos/Estudantes%20em%20atividade%20no%20laborato%CC%81rio.jpg",
    alt: "Sala de controle de operações industriais",
  },
  {
    id: "3",
    url: "https://genyo.com.br/wp-content/uploads/2024/09/reuniao-768x513.jpg.webp",
    alt: "Equipe colaborando em reunião de negócios",
  },
  {
    id: "4",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1NfmnilF-N8iufcrmJfOKoJyesqs8cB7Lg&s",
    alt: "Engenheiros testando protótipos em laboratório",
  },
  {
    id: "5",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1NfmnilF-N8iufcrmJfOKoJyesqs8cB7Lg&s",
    alt: "Técnico operando maquinário de precisão",
  },
  {
    id: "6",
    url: "https://genyo.com.br/wp-content/uploads/2024/09/reuniao-768x513.jpg.webp",
    alt: "Ambiente de escritório moderno e dinâmico",
  },
];

// 🔥 Nova matriz de variantes com Parallax, Escala e Desfoque de Lente
const premiumSlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "8%" : "-8%",
    scale: 1.05,
    filter: "blur(8px)",
    opacity: 0,
  }),
  center: {
    x: "0%",
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "8%" : "-8%",
    scale: 0.96,
    filter: "blur(8px)",
    opacity: 0,
  }),
};

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % imagesData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + imagesData.length) % imagesData.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 6000); // 6 segundos para dar tempo de apreciar a transição fluida

    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  return (
    <section className="py-24 bg-minaspel-dark border-b border-minaspel-border/30">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-mono text-blue-400 tracking-widest block uppercase mb-3">
            Estrutura Operacional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeria de Inovação e Trabalho
          </h2>
          <p className="mt-4 text-sm sm:text-base text-minaspel-slate leading-relaxed">
            Explore o ambiente, a tecnologia e a equipe por trás da nossa excelência.
          </p>
        </div>

        {/* Moldura do Slider */}
        <div 
          className="relative w-full h-[320px] sm:h-[460px] rounded-2xl border border-minaspel-border/40 overflow-hidden bg-black/40 group shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Removido bloqueios de colisão para permitir o cross-fade suave dos efeitos */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={premiumSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 160, damping: 24 },
                scale: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
                filter: { duration: 0.45, ease: "easeOut" },
                opacity: { duration: 0.4, ease: "linear" }
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform"
            >
              <Image
                src={imagesData[currentIndex].url}
                alt={imagesData[currentIndex].alt}
                fill
                priority
                className="object-cover select-none pointer-events-none"
                sizes="(max-w-5xl) 100vw"
                quality={90}
              />

              {/* Degradê escuro inferior para realçar a legenda */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Legenda Textual animada separadamente para efeito cinematográfico */}
              <div className="absolute inset-x-6 bottom-8 sm:bottom-12 z-20 flex flex-col items-center text-center">
                <motion.p 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="text-base sm:text-lg font-bold text-white max-w-xl drop-shadow-md tracking-tight leading-snug"
                >
                  {imagesData[currentIndex].alt}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Paginação e Botões de Controle Manuais Quadrados e Minimalistas */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={handlePrev}
            className="group w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 text-minaspel-slate hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/[0.06] flex items-center justify-center transition-all duration-200 active:scale-95"
            aria-label="Imagem anterior"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" strokeWidth={1.5} />
          </button>

          {/* Indicador de Status Técnico Minimalista */}
          <div className="text-[11px] font-mono text-minaspel-slate/40 select-none tracking-widest min-w-[50px] text-center">
            <span className="text-white font-medium">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="mx-1 text-minaspel-border">/</span>
            {String(imagesData.length).padStart(2, '0')}
          </div>

          <button
            onClick={handleNext}
            className="group w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 text-minaspel-slate hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/[0.06] flex items-center justify-center transition-all duration-200 active:scale-95"
            aria-label="Próxima imagem"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </section>
  );
}