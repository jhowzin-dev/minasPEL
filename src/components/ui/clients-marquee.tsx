"use client";
import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

export function ClientsMarquee() {
  const singleSet = [...logos, ...logos];

  return (
    <section className="py-6 bg-minaspel-gray-dark border-y border-minaspel-border overflow-hidden w-full relative">
      {/* Efeito de fade ajustado para o novo fundo escuro */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-minaspel-gray-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-minaspel-gray-dark to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden select-none">
        <div className="flex shrink-0 min-w-full items-center justify-around gap-16 animate-scroll px-4">
          {singleSet.map((src, i) => (
            <img
              key={`track1-${i}`}
              src={src}
              alt="Logo parceiro"
              className="h-7 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 shrink-0"
            />
          ))}
        </div>
        <div className="flex shrink-0 min-w-full items-center justify-around gap-16 animate-scroll px-4" aria-hidden="true">
          {singleSet.map((src, i) => (
            <img
              key={`track2-${i}`}
              src={src}
              alt="Logo parceiro"
              className="h-7 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 shrink-0"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}