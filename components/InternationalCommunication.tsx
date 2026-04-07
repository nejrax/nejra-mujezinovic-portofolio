import SectionHeader from "@/components/SectionHeader";

export default function InternationalCommunication() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <SectionHeader
        eyebrow="International communication" title={""}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <p className="font-mono text-xs text-white/60">Languages</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Multilingual</h3>
          <p className="mt-2 text-sm text-white/70">
            Bosnian (native), English (fluent), German (C1), Turkish (A2).
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <p className="font-mono text-xs text-white/60">Team work</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Agile + Reviews</h3>
          <p className="mt-2 text-sm text-white/70">
            Comfortable with iterative delivery, code reviews, debugging, and clean handoff documentation.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <p className="font-mono text-xs text-white/60">Relocation / Remote</p>
          <h3 className="mt-2 text-lg font-semibold text-white">International roles</h3>
          <p className="mt-2 text-sm text-white/70">
            Strong fit for Sarajevo market and international teams (especially DACH) due to language and full-stack + robotics breadth.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
        <p className="font-mono text-xs text-white/70">
          $ open_to = ["internship", "junior", "graduate", "remote", "DACH"]
        </p>
      </div>
    </section>
  );
}
