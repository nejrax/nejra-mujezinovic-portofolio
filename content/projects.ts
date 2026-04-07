export type ProjectSlug = "travelconnect" | "smart-restaurant" | "hand-gesture-robot";

export type Project = {
  slug: ProjectSlug;
  title: string;
  short: string;
  tagline: string;
  kpis: Array<{ label: string; value: string }>;
  tech: string[];
  links?: { repo?: string; live?: string };
};

export const projects: Project[] = [
  {
    slug: "travelconnect",
    title: "TravelConnect",
    short: "Full-stack social travel platform",
    tagline:
      "A geo-organized social platform for sharing travel experiences with a PostgreSQL-backed social graph.",
    kpis: [
      { label: "Auth", value: "JWT + bcryptjs" },
      { label: "DB", value: "PostgreSQL social graph" },
      { label: "Uploads", value: "Multer" },
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind",
      "Framer Motion",
      "JWT",
      "Multer",
    ],
  },
  {
    slug: "smart-restaurant",
    title: "Smart Restaurant System",
    short: "RBAC reservation platform",
    tagline:
      "A reservation system with role-based dashboards, real-time availability checks, and preference-based recommendations.",
    kpis: [
      { label: "Security", value: "JWT" },
      { label: "Access", value: "Role-based (RBAC)" },
      { label: "DB", value: "MySQL" },
    ],
    tech: ["Next.js", "React", "Node.js", "Express", "MySQL", "Tailwind", "JWT"],
  },
  {
    slug: "hand-gesture-robot",
    title: "Hand Gesture Controlled Robot",
    short: "Vision → embedded control",
    tagline:
      "A real-time vision-to-motion pipeline translating finger-count gestures into robot motion via Arduino serial control.",
    kpis: [
      { label: "Accuracy", value: "90%" },
      { label: "Latency", value: "160ms" },
      { label: "CV", value: "MediaPipe + OpenCV" },
    ],
    tech: [
      "Python",
      "C++",
      "OpenCV",
      "MediaPipe",
      "Arduino Uno",
      "Stepper motors",
      "Serial protocol",
    ],
  },
];

export function getProject(slug: ProjectSlug) {
  return projects.find((p) => p.slug === slug);
}
