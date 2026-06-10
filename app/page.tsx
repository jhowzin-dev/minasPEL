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
      {/* Hero based on original spotlight-new */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
        <Spotlight />
        <main className="relative z-10 flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-8 text-center">
          <h1 className="text-5xl font-bold text-black dark:text-white">Minaspel</h1>
          <p className="mt-4 max-w-md text-lg text-gray-700 dark:text-gray-300">
            Soluções industriais de alta performance para filmes técnicos, laminados e muito mais.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="#"
              className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#"
              className="rounded border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Conhecer Soluções
            </a>
          </div>
        </main>
      </div>
      <ClientsMarquee />
      <Stats />
      <AboutBrief />
      <ProductCards />
      <Differentials />
      <Gallery />
      <FAQ />
      <FinalCTA />
    </>
  );
}

