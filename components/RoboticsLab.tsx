import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export default function RoboticsLab() {
  return (
    <section className="container-shell section-shell">
      <SectionHeader
        eyebrow="Robotics corner · Lab"
        title="Real-time gesture → motion pipeline"
        subtitle="A fast, measurable vision-to-embedded system: hand landmarks → classification → serial commands → motor control."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <p className="font-mono text-xs text-white/60">Performance snapshot</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Measured results</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Real-time hand gesture recognition controlling an Arduino-driven robot, optimized for low latency and stable embedded control.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3">
              <p className="text-[11px] text-white/60">Accuracy</p>
              <p className="mt-1 text-sm font-semibold text-white">90%</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3">
              <p className="text-[11px] text-white/60">Latency</p>
              <p className="mt-1 text-sm font-semibold text-white">160ms</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3">
              <p className="text-[11px] text-white/60">Control</p>
              <p className="mt-1 text-sm font-semibold text-white">Serial protocol</p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/projects/hand-gesture-robot"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
            >
              Open robotics case study
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <p className="font-mono text-xs text-white/60">What makes it special</p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Performance-driven robotics engineering
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Gesture recognition runs in real time using MediaPipe + OpenCV, then translates gestures into controlled locomotion via Arduino serial communication. Explicit latency measurement shows end-to-end systems thinking.
          </p>

          <div className="mt-5 grid gap-2">
            {[
              "Finger counting (1–5) classification pipeline",
              "Four stepper motors for forward/turn/brake control",
              "Vision → embedded integration with measurable timing",
            ].map((b) => (
              <div key={b} className="flex gap-2 text-sm text-white/75">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/50" />
                <p className="leading-relaxed">{b}</p>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
