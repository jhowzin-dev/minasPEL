"use client";
import Link from "next/link";

export function Navbar() {
  return (
    // Alterado bg-transparent para um fundo com leve opacidade (bg-white/10 e dark:bg-black/40)
    // Alterado backdrop-blur-sm para backdrop-blur-xl para embaçar bem mais
    // Adicionada uma borda sutil na parte inferior para destacar a barra
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 navbar-bg dark:navbar-bg-dark backdrop-blur-xl border-b border-white/7 isolate transform-gpu">
      <div className="text-xl font-bold text-black dark:text-white">Minaspel</div>
      <ul className="flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
        <li>
            <Link href="#inicio" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Início
          </Link>
        </li>
        <li>
            <Link href="#sobre" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Sobre
          </Link>
        </li>
        <li>
            <Link href="#produto" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Produto
          </Link>
        </li>
        <li>
            <Link href="#contato" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}