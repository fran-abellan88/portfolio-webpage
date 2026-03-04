"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

const iconMap: Record<string, string> = {
  brain: "🧠",
  chart: "📊",
  code: "⚙️",
  users: "👥",
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Skills" subtitle="Tools and technologies I work with daily" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-bg-surface border border-border-default p-6 hover:border-accent/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{iconMap[group.icon]}</span>
                <h3 className="text-lg font-semibold text-text-primary">{group.category}</h3>
              </div>
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
