"use client";
import React from "react";

// Links alternativos e diretos de logos vetorizados (com fundo transparente/branco)
const logos = [
  
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

export function ClientsMarquee() {
  return (
    <section className="py-6 bg-[#121826] border-y border-zinc-800 overflow-hidden w-full">
      
      
      {/* Container com máscara de fade nas laterais (efeito de sumir suavemente nas pontas) */}
      <div className="relative w-full flex items-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#121826] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#121826] after:to-transparent">
        
        {/* Linha que corre infinitamente */}
        <div className="flex whitespace-nowrap animate-scroll gap-12 min-w-full justify-around items-center">
          {/* Multiplicamos o array algumas vezes para garantir que preencha telas ultra-wide sem buracos */}
          {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Logo parceiro"
              className="h-7 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 mx-4"
            />
          ))}
        </div>
      </div>

      {/* CSS Nativo para a animação do carrossel */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { 
          animation: scroll 30s linear infinite; 
        }
      `}</style>
    </section>
  );
}