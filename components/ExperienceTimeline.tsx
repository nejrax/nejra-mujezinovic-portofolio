import SectionHeader from "@/components/SectionHeader";

function Item({
  role,
  org,
  time,
  bullets,
  tag,
}: {
  role: string;
  org: string;
  time: string;
  bullets: string[];
  tag: string;
}) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-white/60">{tag}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            {role} · {org}
          </h3>
          <p className="mt-1 text-sm text-white/60">{time}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
          <p className="font-mono text-xs text-white/70">timeline</p>
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
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
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
