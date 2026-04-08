"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const itemClass = (href: string) => {
    const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
    return active
      ? "rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition"
      : "rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/5";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full pointer-events-none">
      <div className="container-shell pt-3 pointer-events-auto">
        {/* KLJUČNE PROMJENE:
          1. backdrop-blur-md (početni blur)
          2. hover:backdrop-blur-none (uklanja blur na hover)
          3. transition-all duration-300 (glatki prelaz)
          4. hover:bg-black/80 (malo tamnija pozadina na hover)
        */}
        <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-2 shadow-glow backdrop-blur-md transition-all duration-500 hover:bg-black/80 hover:backdrop-blur-none">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-white/80">
              nejra
            </span>
          </Link>

          <nav className="flex items-center gap-2">
            <Link href="/projects" className={itemClass("/projects")}>
              Projects
            </Link>
            <Link href="/resume" className={itemClass("/resume")}>
              Resume
            </Link>
            <a
              href="https://github.com/nejrax"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/5 sm:inline-flex"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nejramuyezinovic"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/5 sm:inline-flex"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}