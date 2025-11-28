"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="group rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm 
                 transition-colors dark:border-slate-800 dark:bg-slate-900/70"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
        {project.name}
      </h3>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {project.role} • {project.period}
      </p>
      <p className="mt-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
        {project.description}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Tech: <span className="font-medium">{project.tech.join(", ")}</span>
      </p>
      {project.links && project.links.length > 0 && (
        <p className="mt-2 text-xs">
          {project.links.map((link, i) => (
            <span key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 hover:underline dark:text-cyan-400"
              >
                {link.label}
              </a>
              {i < project.links.length - 1 && " • "}
            </span>
          ))}
        </p>
      )}
    </motion.article>
  );
}
