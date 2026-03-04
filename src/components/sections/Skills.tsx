"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

const impactMap: Record<string, string> = {
  brain: "Designing agentic workflows and LLM systems that automate high-value business decisions.",
  chart: "Building predictive and statistical models focused on measurable business impact.",
  code: "Shipping robust data and ML systems from prototype to production with scalable architecture.",
  users: "Translating business priorities into technical roadmaps while leading high-performing teams.",
};

const iconMap: Record<string, JSX.Element> = {
  brain: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M9.5 3a3.5 3.5 0 0 0-3.5 3.5v.5a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3v.5a3.5 3.5 0 0 0 3.5 3.5H10" />
      <path d="M14.5 3A3.5 3.5 0 0 1 18 6.5v.5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3v.5a3.5 3.5 0 0 1-3.5 3.5H14" />
      <path d="M10 7h4M10 12h4M10 17h4" />
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
      <circle cx="7" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="19" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8M10 18v2m4-2v2" />
      <path d="m10 10-2 2 2 2m4-4 2 2-2 2" />
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2" />
      <path d="M15 19a5 5 0 0 1 6 0" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Core Competencies" subtitle="Capabilities and stack applied to real business outcomes" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl bg-bg-surface border border-border-default p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-text-muted group-hover:text-accent transition-colors">{iconMap[group.icon]}</span>
                <h3 className="text-lg font-semibold text-text-primary">{group.category}</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{impactMap[group.icon]}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-bg-primary border border-border-default text-text-secondary hover:border-accent/30 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
