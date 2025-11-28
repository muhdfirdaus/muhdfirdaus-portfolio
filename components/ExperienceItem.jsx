"use client";

import { motion } from "framer-motion";

export default function ExperienceItem({ item }) {
  return (
    <motion.article
      className="relative border-l border-slate-300 dark:border-slate-800 pl-5 pb-6 last:pb-0"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[6px] mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />

      {/* Title + company */}
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {item.title} @ {item.company}
      </h3>

      {/* Period */}
      <p className="text-xs text-slate-600 dark:text-slate-400">{item.period}</p>

      {/* Summary */}
      {item.summary && (
        <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">
          {item.summary}
        </p>
      )}

      {/* Bullet details */}
      {item.details && item.details.length > 0 && (
        <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-700 dark:text-slate-300">
          {item.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
