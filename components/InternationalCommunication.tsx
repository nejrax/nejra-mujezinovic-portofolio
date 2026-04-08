"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Globe, MessagesSquare, Plane } from "lucide-react";

export default function InternationalCommunication() {
  return (
    <section className="container-shell section-shell">
      <SectionHeader
        eyebrow="International communication"
        title="Collaboration-ready"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow transition hover:border-white/20"
        >
          <p className="font-mono text-xs text-white/60">Languages</p>
          <div className="mt-2 flex items-center gap-2">
            <Globe className="h-4 w-4 text-accent-400" />
            <h3 className="text-lg font-semibold text-white">Multilingual</h3>
          </div>
          <p className="mt-2 text-sm text-white/70">
            Bosnian (native), English (fluent), German (C1), Turkish (A2).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          whileHover={{ y: -3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow transition hover:border-white/20"
        >
          <p className="font-mono text-xs text-white/60">Team work</p>
          <div className="mt-2 flex items-center gap-2">
            <MessagesSquare className="h-4 w-4 text-lilac-400" />
            <h3 className="text-lg font-semibold text-white">Agile + Reviews</h3>
          </div>
          <p className="mt-2 text-sm text-white/70">
            Comfortable with iterative delivery, code reviews, debugging, and clean handoff documentation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          whileHover={{ y: -3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow transition hover:border-white/20"
        >
          <p className="font-mono text-xs text-white/60">Relocation / Remote</p>
          <div className="mt-2 flex items-center gap-2">
            <Plane className="h-4 w-4 text-accent-400" />
            <h3 className="text-lg font-semibold text-white">International roles</h3>
          </div>
          <p className="mt-2 text-sm text-white/70">
            Open to Sarajevo-based roles and international teams due to language skills and full-stack + robotics breadth.
          </p>
        </motion.div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
        <p className="font-mono text-xs text-white/70">
          $ open_to = ["internship", "junior", "graduate", "remote"]
        </p>
      </div>
    </section>
  );
}
