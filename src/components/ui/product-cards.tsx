"use client";
import { motion } from "motion/react";

const products = [
  {
    title: "Filmes Técnicos",
    description: "Estruturas de alta barreira e desempenho otimizado para linhas de empacotamento automático.",
    img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Laminados de Alta Performance",
    description: "Combinações multimateriais customizadas para máxima proteção, resistência mecânica e estanqueidade.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqijIa7rLBx3aTtib2ETDfpB46EgeQxxWw3g&s",
  },
  {
    title: "Soluções Industriais",
    description: "Desenvolvimento de projetos sob medida e formulações poliméricas para demandas sob demanda.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
];

export function ProductCards() {
  return (
    <section className="py-20 bg-minaspel-dark">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soluções em Embalagens e Filmes
          </h2>
          <p className="mt-4 text-base text-minaspel-slate">
            Tecnologia avançada e engenharia de materiais para atender aos mais rigorosos padrões industriais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="group flex flex-col bg-minaspel-card rounded-xl border border-minaspel-border shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div>
                <div className="overflow-hidden bg-minaspel-card h-52 relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-minaspel-dark/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-minaspel-slate text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-sm font-medium text-blue-400 inline-flex items-center gap-1 group-hover:underline cursor-pointer">
                  Saber mais
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
