"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FolderKanban } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/content/projects";

function ProjectCard({
  title,
  tagline,
  slug,
  kpis,
  tech,
}: {
  title: string;
  tagline: string;
  slug: string;
  kpis: Array<{ label: string; value: string }>;
  tech: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(800px circle at 20% 0%, rgba(255,255,255,0.10), transparent 40%)",
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-white/60">Featured build</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {tagline}
            </p>
          </div>
          <div className="shrink-0 rounded-lg border border-white/10 bg-black/20 px-3 py-2">
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-accent-400" />
              <p className="font-mono text-xs text-white/70">case study</p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-white/10 bg-black/20 p-3"
            >
              <p className="text-[11px] text-white/60">{k.label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{k.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.slice(0, 9).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/projects/${slug}`}
            className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
          >
            Open Case Study
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="btn-secondary inline-flex items-center justify-center text-sm"
          >
            All Projects
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectGallery() {
  const p0 = projects[0];
  const p1 = projects[1];
  const p2 = projects[2];

  return (
    <section className="container-shell section-shell">
      <SectionHeader
        eyebrow="Selected work"
        title="Systems I’ve built end-to-end"
        subtitle="Full-stack platforms, enterprise patterns, and real-time robotics — presented with measurable outcomes (RBAC, latency, accuracy, security)."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <ProjectCard
          title={p0.title}
          tagline={p0.tagline}
          slug={p0.slug}
          kpis={p0.kpis}
          tech={p0.tech}
        />
        <div className="grid gap-4">
          <ProjectCard
            title={p1.title}
            tagline={p1.tagline}
            slug={p1.slug}
            kpis={p1.kpis}
            tech={p1.tech}
          />
          <ProjectCard
            title={p2.title}
            tagline={p2.tagline}
            slug={p2.slug}
            kpis={p2.kpis}
            tech={p2.tech}
          />
        </div>
      </div>
    </section>
  );
}
