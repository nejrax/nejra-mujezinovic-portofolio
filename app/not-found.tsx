import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="grid-surface">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-mono text-xs text-white/60">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-white/70">
          The resource you’re looking for doesn’t exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Back home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
