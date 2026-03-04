"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { experience } from "@/lib/data";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <SectionWrapper id="experience">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="7+ years driving AI and ML initiatives across industries"
        />

        <div className="space-y-4">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              layout
              role="button"
              tabIndex={0}
              aria-expanded={expandedIndex === i}
              className={`rounded-xl border transition-colors cursor-pointer ${
                expandedIndex === i
                  ? "bg-bg-surface border-accent/20 shadow-lg shadow-accent/5"
                  : "bg-bg-surface/50 border-border-default hover:border-border-default/80"
              }`}
              onClick={() => setExpandedIndex(expandedIndex === i ? -1 : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setExpandedIndex(expandedIndex === i ? -1 : i);
                }
              }}
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {exp.role}
                      {exp.highlight && (
                        <span className="ml-2 text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-accent text-sm">{exp.company}</p>
                  </div>
                  <span className="text-text-muted text-sm font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-3 text-text-secondary text-sm italic">{exp.summary}</p>

                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-sm text-text-secondary">
                            <span className="text-accent mt-1 flex-shrink-0">&#9656;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
