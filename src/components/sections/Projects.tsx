"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";
import { getPostHogClient } from "@/lib/posthog";
import { ANALYTICS_EVENTS } from "@/lib/analytics-events";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Projects" subtitle="Side projects and entrepreneurial ventures" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl bg-bg-surface border border-border-default p-6 hover:border-accent/20 transition-all hover:shadow-lg hover:shadow-accent/5"
            >
              <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="accent">{tag}</Badge>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => getPostHogClient()?.capture(ANALYTICS_EVENTS.EXTERNAL_LINK_CLICK, { url: project.url, label: project.title, source: "projects" })}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  View Live
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
