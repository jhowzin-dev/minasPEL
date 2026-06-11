"use client";
import { motion } from "motion/react";
import Image from "next/image";

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

export function Gallery() {
  return (
    <section className="py-16 bg-minaspel-dark">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Galeria de Inovação e Trabalho
        </h2>
        <p className="text-xl text-center text-minaspel-slate mb-12 max-w-2xl mx-auto">
          Explore o ambiente, a tecnologia e a equipe por trás da nossa excelência.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {imagesData.map(({ id, url, alt }) => (
            <motion.div
              key={id}
              className="group overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={url}
                alt={alt}
                className="w-full h-64 object-cover"
                width={800}
                height={400}
                quality={90}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">{alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
