"use client";

import { navLinks, personal } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <a
      href="#experience"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg-primary focus:rounded-lg focus:font-semibold"
    >
      Skip to content
    </a>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border-default shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-text-primary hover:text-accent transition-colors">
          <AnimatePresence>
            {scrolled && (
              <motion.span
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="md:hidden relative w-7 h-7 rounded-full overflow-hidden border border-accent/30"
              >
                <Image
                  src={personal.photo}
                  alt={personal.name}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </motion.span>
            )}
          </AnimatePresence>
          {personal.name}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.cvFile}
            download
            className="text-sm px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary hover:text-accent"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-surface/95 backdrop-blur-xl border-b border-border-default"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.cvFile}
              download
              className="text-sm px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
    </>
  );
}
