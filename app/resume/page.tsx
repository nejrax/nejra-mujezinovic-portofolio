import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <main className="grid-surface">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <p className="font-mono text-xs text-white/60">Resume</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          CV (LaTeX-style)
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Clean, academic-standard formatting. You can replace the placeholder PDF with your exported LaTeX CV.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Nejra Mujezinović</p>
              <p className="mt-1 text-xs text-white/60">
                Computer Science & Engineering Student · Polyglot Engineer
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="/cv/Nejra_Mujezinovic_CV.pdf"
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Download PDF
              </a>
              <a
                href="mailto:nejra.mujezinovic03@gmail.com"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/5"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
