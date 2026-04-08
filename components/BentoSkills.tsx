"use client";

import SectionHeader from "@/components/SectionHeader";
import { Cpu, Database, LineChart, Rocket } from "lucide-react";

function SkillPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {label}
    </span>
  );
}

function BentoCard({
  title,
  description,
  skills,
  footer,
  icon,
}: {
  title: string;
  description: string;
  skills: string[];
  footer: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow transition hover:border-white/20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(700px circle at 10% 0%, rgba(255,255,255,0.10), transparent 42%)",
        }}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85">
                {icon}
              </span>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {description}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            <p className="font-mono text-xs text-white/70">module</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <SkillPill key={s} label={s} />
          ))}
        </div>

        <p className="mt-5 font-mono text-xs text-white/60">{footer}</p>
      </div>
    </div>
  );
}

export default function BentoSkills() {
  return (
    <section className="container-shell section-shell">
      <SectionHeader
        eyebrow="Skill matrix"
        title="Engineering breadth, grouped by system domain"
        subtitle="Recruiters should instantly see breadth without losing depth: web delivery, backend architecture, robotics/embedded integration, and data-driven thinking."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <BentoCard
          title="Web Development"
          description="Modern UI engineering focused on performance, accessibility, and clean interaction design."
          skills={["React", "Next.js", "Angular", "TypeScript", "Tailwind", "Framer Motion"]}
          footer="$ ship responsive UIs • routing • state • animation"
          icon={<Rocket className="h-4 w-4 text-accent-400" />}
        />
        <BentoCard
          title="Backend & Enterprise"
          description="Secure APIs, layered architecture, and relational data models suitable for production systems."
          skills={["Spring Boot", "Node.js", "Express", "REST", "JPA/JPQL", "JWT"]}
          footer="$ Controller–Service–DAO • auth • queries • reviews"
          icon={<Database className="h-4 w-4 text-lilac-400" />}
        />
        <BentoCard
          title="Robotics / Embedded"
          description="Real-time pipelines bridging computer vision inference and embedded motor control."
          skills={["OpenCV", "MediaPipe", "Arduino", "C/C++", "Serial protocols", "Stepper motors"]}
          footer="$ vision → control loop • latency budget • hardware integration"
          icon={<Cpu className="h-4 w-4 text-accent-400" />}
        />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <BentoCard
          title="Data Analysis"
          description="Practical data mining and business intelligence fundamentals for decision-support features."
          skills={["Weka", "Classification", "Clustering", "BI concepts", "Python"]}
          footer="$ interpret results • iterate features • explain trade-offs"
          icon={<LineChart className="h-4 w-4 text-lilac-400" />}
        />
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <p className="font-mono text-xs text-white/60">International edge</p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Fluent English and C1 German enable smooth collaboration in international remote environments.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Bosnian (Native)",
              "English (Fluent)",
              "German (C1)",
              "Turkish (A2)",
            ].map((l) => (
              <span
                key={l}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75"
              >
                {l}
              </span>
            ))}
          </div>
          <p className="mt-5 font-mono text-xs text-white/60">
            $ communicate requirements • unblock teams • ship faster
          </p>
        </div>
      </div>
    </section>
  );
}
