"use client";

import { personal } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-16">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-mono text-sm mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {personal.name}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-2 text-xl md:text-2xl text-text-secondary font-light">
            {personal.title}
            <span className="text-text-muted ml-2 text-lg">/ {personal.suffix}</span>
          </p>

          <p className="mt-6 text-text-secondary max-w-xl leading-relaxed text-base md:text-lg">
            {personal.summary}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-accent text-bg-primary font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get in Touch
            </a>
            <a
              href={personal.cvFile}
              download
              className="px-8 py-3 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 transition-all"
            >
              Download CV
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-border-default text-text-secondary hover:border-accent/30 hover:text-accent transition-all"
            >
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-border-default text-text-secondary hover:border-accent/30 hover:text-accent transition-all"
            >
              GitHub
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-8 justify-center lg:justify-start"
          >
            {[
              { value: "7+", label: "Years Experience" },
              { value: "20+", label: "Publications" },
              { value: "4", label: "Industries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent/20 shadow-2xl shadow-accent/10">
            <Image
              src={personal.photo}
              alt={personal.name}
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl -z-10 scale-110" />
        </motion.div>
      </div>
    </section>
  );
}
