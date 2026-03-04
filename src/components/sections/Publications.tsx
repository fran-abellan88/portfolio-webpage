"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <SectionWrapper id="publications">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Publications"
          subtitle="Peer-reviewed research in astrophysics"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl bg-bg-surface border border-border-default p-8 md:p-12 text-center"
        >
          <div className="text-6xl md:text-7xl font-bold text-accent mb-2">
            {publications.count}
          </div>
          <p className="text-xl text-text-secondary mb-6">{publications.label}</p>
          <p className="text-text-muted max-w-md mx-auto mb-8">
            Research spanning radio interferometry, supernova ejecta tomography, and AGN core-shift analysis published in leading astrophysics journals.
          </p>
          <a
            href={publications.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
          >
            View on NASA ADS
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
