"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Education" subtitle="From Physics to Astrophysics to Data Science" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/30 hidden md:block" />

                <div className="rounded-xl bg-bg-surface border border-border-default p-6 hover:border-accent/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-text-primary">{edu.degree}</h3>
                    <span className="text-text-muted text-sm font-mono">{edu.period}</span>
                  </div>
                  <p className="text-accent text-sm mt-1">{edu.institution}</p>
                  {edu.detail && (
                    <p className="mt-3 text-text-secondary text-sm">
                      {edu.detailUrl ? (
                        <a
                          href={edu.detailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors underline decoration-border-default hover:decoration-accent"
                        >
                          {edu.detail}
                        </a>
                      ) : (
                        edu.detail
                      )}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
