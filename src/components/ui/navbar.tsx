"use client";
import Link from "next/link";

export function Navbar() {
  return (
    // Limpado o conflito de bg- para o .navbar-bg injetar o cinza translúcido correto
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 navbar-bg border-b border-minaspel-border/30 isolate transform-gpu">
      <div className="text-xl font-bold text-white">Minaspel</div>
      <ul className="flex space-x-6 text-sm font-medium text-minaspel-slate">
        <li>
          <Link href="#inicio" className="hover:text-white transition-colors">
            Início
          </Link>
        </li>
        <li>
          <Link href="#sobre" className="hover:text-white transition-colors">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="#produto" className="hover:text-white transition-colors">
            Produto
          </Link>
        </li>
        <li>
          <Link href="#contato" className="hover:text-white transition-colors">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}