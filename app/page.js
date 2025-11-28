"use client";


import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import { about, skills, projects, experience } from "@/data/profile";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { orbitron } from "./fonts";


export default function Home() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main  className="mx-auto max-w-5xl px-4 pb-16 pt-10">
        {/* Hero */}
        <motion.section
          className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Left: Text */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-500">
              Backend & Systems Automation Engineer
            </p>

            <h1
              className={`${orbitron.className} mt-2 text-3xl font-semibold tracking-tight md:text-4xl`}
            >
              Muhammad Firdaus Saipudin
            </h1>

            <p className="mt-3 max-w-xl text-sm text-slate-700 dark:text-slate-300">
              I build backend systems, automation pipelines, and cloud workflows that support online games
              and production environments — from content pipelines and live-ops tools to database migrations
              and developer automation.
            </p>

            <div className="mt-4 text-xs text-slate-600 dark:text-slate-400">
              <p>Based in Johore, Malaysia</p>

              <div className="flex items-center gap-2">
                <MdEmail className="text-lg text-cyan-600 dark:text-cyan-400" />
                <a
                  href="mailto:firdaus.saipudin.94@gmail.com"
                  className="text-cyan-600 hover:underline dark:text-cyan-400"
                >
                  firdaus.saipudin.94@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaGithub className="text-lg" />
                <a
                  href="https://github.com/muhdfirdaus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 hover:underline dark:text-cyan-400"
                >
                  github.com/muhdfirdaus
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaLinkedin className="text-lg text-sky-600 dark:text-sky-400" />
                <a
                  href="https://www.linkedin.com/in/firdaus-saipudin"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/firdaus-saipudin
                </a>
              </div>

            </div>
          </div>

          {/* Right: Avatar */}
          <motion.img
            src="/avatar.png"
            alt="Firdaus Avatar"
            className="
                        mx-auto mt-4 h-40 w-40 rounded-full shadow-lg
                        ring-2 ring-blue-700 
                        dark:ring-cyan-400 dark:shadow-[0_0_15px_rgba(34,211,238,0.3)]
                        md:mt-0 md:h-48 md:w-48 object-cover
                      "
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              y: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        </motion.section>


        <Section id="about" title="About">
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {about}
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-3 py-1 text-xs transition-all
                  hover:shadow-sm hover:-translate-y-[1px]
                  border-slate-300 bg-white text-slate-800
                  dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="mt-2 space-y-4">
            {experience.map((item, idx) => (
              <ExperienceItem
                key={`${item.company}-${item.period}-${idx}`}
                item={item}
              />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            The fastest way to reach me is by email at{" "}
            <a
              href="mailto:firdaus.saipudin.94@gmail.com"
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              firdaus.saipudin.94@gmail.com
            </a>
            .
            <br />
            You can also connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/firdaus-saipudin"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </Section>

        <footer className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          © {new Date().getFullYear()} Firdaus
        </footer>

      </main>
    </div>
  );
}
