"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { orbitron } from "@/app/fonts";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className={`${orbitron.className} mx-auto flex max-w-5xl items-center justify-between px-4 py-3`}>
        <Link href="/" className={`${orbitron.className} text-lg font-semibold tracking-wide`}>
          Muhammad Firdaus Saipudin
        </Link>

        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <ul className="hidden gap-6 text-sm md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="relative text-slate-700 transition-colors dark:text-slate-200
                             after:absolute after:bottom-0 after:left-0 after:h-[1px]
                             after:w-0 after:bg-cyan-500 after:transition-all after:duration-300
                             hover:after:w-full hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          {mounted && (
            <motion.button
              whileTap={{ scale: 0.85, rotate: 25 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              type="button"
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-lg text-slate-700 shadow-sm
                         dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? "☀️" : "🌙"}
            </motion.button>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden text-sm border border-slate-300 px-2 py-1 rounded-lg dark:border-slate-700"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile nav list */}
      {open && (
        <ul className="mx-auto flex max-w-5xl flex-col gap-2 px-4 pb-3 text-sm md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block rounded-lg px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
