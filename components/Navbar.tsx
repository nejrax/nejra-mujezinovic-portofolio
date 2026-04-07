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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-white/80">
            nejra
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/projects"
            className={itemClass("/projects")}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className={itemClass("/resume")}
          >
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
            href="https://linkedin.com/in/nejramujezinovic"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/5 sm:inline-flex"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
