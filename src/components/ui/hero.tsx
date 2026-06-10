"use client";
import { motion } from "motion/react";
import { Spotlight } from "./spotlight-new";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 overflow-hidden py-16">
      {/* Background spotlight effect */}
      <Spotlight />
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Minaspel – Soluções Industriais de Alta Performance
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Filmes técnicos, laminados e soluções sob medida para sua produção.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Conhecer Soluções
          </a>
        </div>
      </div>
    </section>
  );
}
