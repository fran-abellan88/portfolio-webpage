"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/lib/data";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mdalqbgz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect — I'm always open to new opportunities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary leading-relaxed mb-8">
              Whether you have an exciting role, a collaboration idea, or just want to chat about AI and data science — I&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-text-muted mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-default text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-text-muted mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-default text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-text-muted mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-default text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full px-6 py-3 rounded-lg bg-accent text-bg-primary font-semibold hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
              {status === "error" && "Try Again"}
            </button>
            {status === "error" && (
              <p role="alert" className="text-red-400 text-sm text-center">
                Something went wrong. You can also reach me at{" "}
                <a href={`mailto:${personal.email}`} className="underline">
                  {personal.email}
                </a>
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
