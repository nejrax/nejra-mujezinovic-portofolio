import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProject, type ProjectSlug } from "@/content/projects";

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: ProjectSlug };
}) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <main className="grid-surface">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <p className="font-mono text-xs text-white/60">Case study</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          {project.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.kpis.map((k) => (
            <span
              key={k.label}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75"
            >
              {k.label}: {k.value}
            </span>
          ))}
        </div>

        {params.slug === "travelconnect" ? (
          <div className="mt-10 grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">System overview</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                TravelConnect is a full-stack social travel platform built around location-aware content and real-time social interactions. The core challenge is modeling social relationships (follows/likes/comments) while keeping the UI fast and discoverable.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">Security</h2>
              <div className="mt-3 grid gap-2">
                {[
                  "JWT-based sessions for API access.",
                  "Password hashing using bcryptjs.",
                  "File uploads handled via Multer for photo-based posts.",
                ].map((b) => (
                  <div key={b} className="flex gap-2 text-sm text-white/75">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/50" />
                    <p className="leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">Database schema (PostgreSQL)</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                The data model supports:
                <span className="font-mono text-white/75">
                  {" "}users, posts, locations, follows, likes, comments
                </span>
                . This structure enables a social graph with efficient feed queries and interaction counts.
              </p>
              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-5">
                <p className="font-mono text-xs text-white/70">
                  users (id) 1—N posts (id, user_id, location_id)
                </p>
                <p className="mt-2 font-mono text-xs text-white/70">
                  users (id) N—N users via follows (follower_id, following_id)
                </p>
                <p className="mt-2 font-mono text-xs text-white/70">
                  posts (id) 1—N comments; posts N—N users via likes
                </p>
              </div>
              <p className="mt-3 text-xs text-white/60">
                Replace with your diagram image later (recommended for conversion).
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">Tech stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {params.slug === "smart-restaurant" ? (
          <div className="mt-10 grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">What I built</h2>
              <div className="mt-3 grid gap-2">
                {[
                  "Secure authentication with JWT.",
                  "Role-based access control (RBAC) for customers, restaurants, and administrators.",
                  "Reservation management with availability checks and a preference-based recommendation layer.",
                ].map((b) => (
                  <div key={b} className="flex gap-2 text-sm text-white/75">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/50" />
                    <p className="leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">RBAC model</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                The UI and API are scoped by role to protect restaurant data and admin actions while giving customers a streamlined booking flow.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { title: "Customer", body: "Search, filter, reserve, manage bookings" },
                  { title: "Restaurant", body: "Manage tables, availability, reservations" },
                  { title: "Admin", body: "Oversee users/restaurants, platform control" },
                ].map((r) => (
                  <div
                    key={r.title}
                    className="rounded-xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{r.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">Tech stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {params.slug === "hand-gesture-robot" ? (
          <div className="mt-10 grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">Pipeline</h2>
              <div className="mt-3 grid gap-2">
                {[
                  "MediaPipe + OpenCV detects hand landmarks and classifies finger counts (1–5).",
                  "Arduino receives commands over serial and drives stepper motors through ULN2003 drivers.",
                  "Measured 160ms end-to-end latency for gesture → robot motion.",
                ].map((b) => (
                  <div key={b} className="flex gap-2 text-sm text-white/75">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/50" />
                    <p className="leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">Performance proof</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["90% recognition accuracy", "160ms total latency", "Serial control protocol"].map(
                  (x) => (
                    <div
                      key={x}
                      className="rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-sm font-semibold text-white">{x}</p>
                    </div>
                  )
                )}
              </div>
              <p className="mt-3 text-xs text-white/60">
                Add a short demo video in the Lab section on the home page for maximum impact.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <h2 className="text-lg font-semibold text-white">Tech stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Back to projects
          </Link>
          <a
            href="mailto:nejra.mujezinovic03@gmail.com"
            className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Contact
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
