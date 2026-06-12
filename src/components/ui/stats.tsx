"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const stats = [
  { label: "Anos de mercado", value: "20+" },
  { label: "Clientes atendidos", value: "500+" },
  { label: "Projetos realizados", value: "10.000+" },
  { label: "Cobertura", value: "Brasil" },
];

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(value.replace(/[^\d]/g, ""), 10);
  const isNumber = !isNaN(numericTarget);

  useEffect(() => {
    if (!isNumber) return;

    let start = 0;
    const end = numericTarget;
    const duration = 1200;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(easeOutProgress * end);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(currentCount);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [numericTarget, isNumber]);

  if (!isNumber) return <span>{value}</span>;

  const formattedCount = value.includes(".") 
    ? count.toLocaleString("pt-BR") 
    : count.toString();

  return (
    <span>
      {formattedCount}
      {value.includes("+") ? "+" : ""}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-14 bg-minaspel-gray-light border-b border-minaspel-border/20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-10 tracking-tight">
          Nossos números
        </h2>
        
        <div className="grid grid-cols-4 max-w-3xl mx-auto divide-x divide-minaspel-border/30">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center px-1 sm:px-4"
              // ... (resto das props da motion)
            >
              <p className="text-xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.12)]">
                <AnimatedCounter value={s.value} />
              </p>
              <p className="text-[10px] sm:text-xs font-semibold text-minaspel-slate/90 uppercase tracking-wider leading-tight">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}