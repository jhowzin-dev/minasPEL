"use client";

export function FAQ() {
  const faqs = [
    { q: "Atendem todo o Brasil?", a: "Sim, nossa rede de logística cobre todas as regiões do país." },
    { q: "Produzem sob medida?", a: "Sim, oferecemos soluções totalmente customizadas de acordo com a necessidade do cliente." },
    { q: "Como solicitar orçamento?", a: "Clique no botão \"Solicitar Orçamento\" e preencha o formulário de contato." },
    { q: "Qual o prazo médio?", a: "Depende da complexidade, mas os projetos costumam ser entregues em 15‑30 dias úteis." },
  ];

  return (
    <section className="py-16 bg-minaspel-dark">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-minaspel-slate">
            Tudo o que você precisa saber sobre o nosso processo e atendimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group border border-minaspel-border bg-minaspel-card rounded-xl transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex justify-between items-center font-medium text-white cursor-pointer p-5 select-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-minaspel-border/50 transition-colors">
                <span className="pr-4">{item.q}</span>
                <span className="text-minaspel-slate transition-transform duration-300 group-open:rotate-180 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-minaspel-slate border-t border-minaspel-border pt-3 text-sm leading-relaxed">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
