"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 py-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div
        className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-6 shadow-sm backdrop-blur-sm
                   dark:border-slate-800 dark:bg-slate-900/70"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        <div className="mt-4 text-sm text-slate-700 dark:text-slate-300">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
