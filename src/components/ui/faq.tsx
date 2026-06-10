"use client";

export function FAQ() {
  const faqs = [
    { q: "Atendem todo o Brasil?", a: "Sim, nossa rede de logística cobre todas as regiões do país." },
    { q: "Produzem sob medida?", a: "Sim, oferecemos soluções totalmente customizadas de acordo com a necessidade do cliente." },
    { q: "Como solicitar orçamento?", a: "Clique no botão \"Solicitar Orçamento\" e preencha o formulário de contato." },
    { q: "Qual o prazo médio?", a: "Depende da complexidade, mas os projetos costumam ser entregues em 15‑30 dias úteis." },
  ];
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-8">
          Perguntas Frequentes
        </h2>
        {faqs.map((item, i) => (
          <details key={i} className="border-b border-gray-200 dark:border-gray-700 py-4 group">
            <summary className="font-medium text-gray-800 dark:text-gray-100 cursor-pointer flex justify-between items-center">
              {item.q}
              <span className="ml-2 transform transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
