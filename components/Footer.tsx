export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-shell py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Nejra Mujezinović</p>
            <p className="mt-1 text-xs text-white/60">
              Full-Stack Ecosystems & Intelligent Systems
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="mailto:nejra.mujezinovic03@gmail.com"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10"
            >
              Email
            </a>
            <a
              href="https://github.com/nejrax"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/5"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nejramuyezinovic"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/5"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/45">
          © {new Date().getFullYear()} • Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
