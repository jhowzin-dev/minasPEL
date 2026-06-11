import { Spotlight } from "../src/components/ui/spotlight-new";
import { ClientsMarquee } from "@/src/components/ui/clients-marquee";
import { Stats } from "@/src/components/ui/stats";
import { AboutBrief } from "@/src/components/ui/about-brief";
import { ProductCards } from "@/src/components/ui/product-cards";
import { Differentials } from "@/src/components/ui/differentials";
import { Gallery } from "@/src/components/ui/gallery";
import { FAQ } from "@/src/components/ui/faq";
import { FinalCTA } from "@/src/components/ui/final-cta";

export default function Home() {
  return (
    <>
      {/* Hero ajustado com fundo preto para destacar o feixe do Spotlight */}
      <div id="inicio" className="relative flex flex-col flex-1 items-center justify-center bg-black font-sans overflow-hidden">
        <Spotlight />
        <main className="relative z-10 flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-8 text-center">
          <h1 className="text-5xl font-bold text-white">Minaspel</h1>
          <p className="mt-4 max-w-md text-lg text-minaspel-slate">
            Soluções industriais de alta performance para filmes técnicos, laminados e muito mais.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="#"
              className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#"
              className="rounded border border-blue-500 px-6 py-3 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
            >
              Conhecer Soluções
            </a>
          </div>
        </main>
      </div>
      <ClientsMarquee />
      <Stats />
        <section id="sobre"><AboutBrief /></section>
        <section id="produto"><ProductCards /></section>
      <Differentials />
      <Gallery />
      <FAQ />
        <section id="contato"><FinalCTA /></section>
    </>
  );
}