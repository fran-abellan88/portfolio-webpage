"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { interests } from "@/lib/data";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  puzzle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877L2.293 13.56a2.414 2.414 0 0 1 0-3.409l1.61-1.61a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.233.235 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  ),
  basketball: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2.05 12h19.9M12 2.05v19.9" />
      <path d="M5.64 5.64c2.03 2.97 3.19 6.5 3.36 10.16" />
      <path d="M18.36 5.64c-2.03 2.97-3.19 6.5-3.36 10.16" />
    </svg>
  ),
  escape: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  ),
  coffee: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
};

export default function BeyondWork() {
  return (
    <SectionWrapper id="beyond-work">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Beyond Work"
          subtitle="What keeps me sharp, curious, and caffeinated outside the office"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl p-6 transition-all bg-bg-surface border border-border-default hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-text-muted group-hover:text-accent transition-colors">
                  {iconMap[item.icon]}
                </span>
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm rounded-lg bg-bg-primary border border-border-default text-text-secondary hover:border-accent/30 hover:text-accent transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-colors"
                  >
                    View Project
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
