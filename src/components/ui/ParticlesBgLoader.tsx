"use client";

import dynamic from "next/dynamic";

const ParticlesBg = dynamic(() => import("./ParticlesBg"), { ssr: false });

export default function ParticlesBgLoader() {
  return <ParticlesBg />;
}
