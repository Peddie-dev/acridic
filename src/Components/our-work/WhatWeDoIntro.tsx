import { FileText, Users, TrendingUp, type LucideIcon } from "lucide-react";

const PILLARS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: FileText,
    title: "Research",
    description: "Generating evidence to inform policy and development.",
  },
  {
    icon: Users,
    title: "Partnerships",
    description: "Working with partners and communities to drive change.",
  },
  {
    icon: TrendingUp,
    title: "Capacity Building",
    description: "Strengthening local expertise and institutions.",
  },
];

export default function WhatWeDoIntro() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid lg:w-[min(1247px,86.6vw)] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--emerald)]">
            <span>•</span>
            What We Do
          </span>
          <h2 className="mt-4 max-w-sm text-3xl font-bold leading-[1.15] tracking-tight text-[color:var(--heading)] sm:text-4xl">
            Turning Knowledge Into Real Change.
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-[color:var(--body)]">
            We generate evidence, build partnerships, and strengthen capacity
            to create practical solutions for Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[color:var(--emerald)]">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="mt-3 text-base font-semibold text-[color:var(--heading)]">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--body)]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
