import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="grid-surface">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <p className="font-mono text-xs text-white/60">Index</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
          Deep dives focused on architecture, security, and measurable results.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow transition hover:bg-white/10"
            >
              <p className="font-mono text-xs text-white/60">{p.short}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {p.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.kpis.map((k) => (
                  <span
                    key={k.label}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75"
                  >
                    {k.label}: {k.value}
                  </span>
                ))}
              </div>
              <p className="mt-5 font-mono text-xs text-white/60">
                $ open_case_study
              </p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
