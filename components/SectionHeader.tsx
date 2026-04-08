export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <p className="font-mono text-xs text-white/60">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
