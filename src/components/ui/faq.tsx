"use client";

export function FAQ() {
  const faqs = [
    { q: "Atendem todo o Brasil?", a: "Sim, nossa rede de logística cobre todas as regiões do país." },
    { q: "Produzem sob medida?", a: "Sim, oferecemos soluções totalmente customizadas de acordo com a necessidade do cliente." },
    { q: "Como solicitar orçamento?", a: "Clique no botão \"Solicitar Orçamento\" e preencha o formulário de contato." },
    { q: "Qual o prazo médio?", a: "Depende da complexidade, mas os projetos costumam ser entregues em 15‑30 dias úteis." },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Tudo o que você precisa saber sobre o nosso processo e atendimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details 
              key={i} 
              className="group border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-xl transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex justify-between items-center font-medium text-gray-900 dark:text-gray-100 cursor-pointer p-5 select-none rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                <span className="pr-4">{item.q}</span>
                <span className="text-gray-500 transition-transform duration-300 group-open:rotate-180 shrink-0">
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
              <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-900 pt-3 text-sm leading-relaxed">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}