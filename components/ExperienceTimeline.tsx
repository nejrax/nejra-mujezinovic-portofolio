"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, Network } from "lucide-react";

function Item({
  role,
  org,
  time,
  bullets,
  tag,
  icon,
}: {
  role: string;
  org: string;
  time: string;
  bullets: string[];
  tag: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-white/60">{tag}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            {role} · {org}
          </h3>
          <p className="mt-1 text-sm text-white/60">{time}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
          <div className="flex items-center gap-2">
            {icon}
            <p className="font-mono text-xs text-white/70">timeline</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {bullets.map((b) => (
          <div key={b} className="flex gap-2 text-sm text-white/75">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/50" />
            <p className="leading-relaxed">{b}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section className="container-shell section-shell">
      <SectionHeader
        eyebrow="Work experience"
        title="Enterprise-grade collaboration and systems thinking"
        subtitle="Your strongest market signal locally is the Zira internship. This section makes the architecture and tooling explicit."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Item
          tag="Zira Talent Academy"
          role="Full-Stack Intern"
          org="Zira, Sarajevo"
          time="Feb 2026 — Present"
          icon={<Briefcase className="h-4 w-4 text-accent-400" />}
          bullets={[
            "Built Angular features (routing, components, RxJS) for reactive UI and API integration.",
            "Designed and consumed REST APIs in Spring Boot using layered architecture (Controller–Service–DAO).",
            "Worked with JPA/JPQL queries including filtering and similarity-based logic; supported team reviews and debugging.",
            "Tooling: IntelliJ IDEA, Maven, DBeaver, Fork; agile iteration and code review workflows.",
          ]}
        />

        <Item
          tag="Network Infrastructure"
          role="Intern"
          org="BH Telecom, Sarajevo"
          time="Apr 2025 — May 2025"
          icon={<Network className="h-4 w-4 text-lilac-400" />}
          bullets={[
            "Supported IP/MPLS network configuration and monitoring tasks.",
            "Assisted routing and switching activities and learned practical optimization workflows.",
            "Strengthened systems-level thinking useful for scalable backend and distributed applications.",
          ]}
        />
      </div>
    </section>
  );
}
