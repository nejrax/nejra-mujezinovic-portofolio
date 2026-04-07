"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  name?: string;
  title?: string;
  location?: string;
  avatarSrc?: string;
};

export default function Hero({
  name = "Nejra Mujezinović",
  title = "Polyglot Engineer • Web + Backend + Robotics",
  location = "Sarajevo, Bosnia & Herzegovina",
  avatarSrc = "/images/NejraMujezinovic.jpeg",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="font-mono text-white/70">$</span>
              <span className="font-medium">
                Full-Stack Ecosystems & Intelligent Systems
              </span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {name}
            </h1>

            <p className="mt-2 text-sm text-white/60">{location}</p>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-white/80">
              {title}. I build production-grade web platforms and real-time robotics
              pipelines — from Angular + Spring Boot layered architecture to OpenCV +
              Arduino systems with measurable performance.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React / Next.js",
                "Angular / RxJS",
                "Spring Boot (Controller–Service–DAO)",
                "Node.js / Express",
                "OpenCV / MediaPipe",
                "Arduino / Embedded Control",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/projects"
                className="btn-primary inline-flex items-center justify-center text-sm"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="btn-secondary inline-flex items-center justify-center text-sm"
              >
                Download CV (LaTeX)
              </Link>
              <a
                href="mailto:nejra.muyezinovic03@gmail.com"
                className="btn-secondary inline-flex items-center justify-center text-sm"
              >
                Email Me
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="surface-card rounded-xl p-4">
                <p className="text-xs text-white/60">Robotics KPI</p>
                <p className="mt-1 text-lg font-semibold text-white">90% accuracy</p>
                <p className="mt-1 text-xs text-white/60">Gesture recognition</p>
              </div>
              <div className="surface-card rounded-xl p-4">
                <p className="text-xs text-white/60">Latency</p>
                <p className="mt-1 text-lg font-semibold text-white">160ms</p>
                <p className="mt-1 text-xs text-white/60">Gesture → motion</p>
              </div>
              <div className="surface-card rounded-xl p-4">
                <p className="text-xs text-white/60">Enterprise</p>
                <p className="mt-1 text-lg font-semibold text-white">Layered</p>
                <p className="mt-1 text-xs text-white/60">Controller–Service–DAO</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative"
          >
            <div className="surface-card relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
              <Image
                src={avatarSrc}
                alt="Portrait photo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="surface-panel mt-4 rounded-2xl p-4">
              <p className="font-mono text-xs text-white/70">
                {"//"} Sarajevo + International
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/75">
                  English: Fluent
                </span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/75">
                  German: C1
                </span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/75">
                  Bosnian: Native
                </span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/75">
                  Turkish: A2
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
