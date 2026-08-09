import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  CloudRain,
  Pill,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

interface FocusArea {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  href: string;
}

const FOCUS_AREAS: FocusArea[] = [
  {
    icon: Droplet,
    title: "Climate & Environment",
    description: "Building resilient ecosystems for a sustainable future.",
    image: "/images/what-we-do-climate.png",
    href: "/what-we-do/climate-environment",
  },
  {
    icon: CloudRain,
    title: "Agriculture & Food Systems",
    description: "Strengthening food security through innovation.",
    image: "/images/what-we-do-agriculture.png",
    href: "/what-we-do/agriculture-food-systems",
  },
  {
    icon: Pill,
    title: "Health & Wellbeing",
    description: "Improving lives with evidence-based healthcare.",
    image: "/images/what-we-do-health.png",
    href: "/what-we-do/health-wellbeing",
  },
  {
    icon: Briefcase,
    title: "Governance & Policy",
    description: "Shaping policies for inclusive development.",
    image: "/images/what-we-do-governance.png",
    href: "/what-we-do/governance-policy",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:py-24">
      {/* Decorative dotted map pattern, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-6 hidden h-[320px] w-[420px] opacity-70 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)] sm:block"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
          color: "#CBD5E1",
        }}
      />

      <div className="relative mx-auto max-w-[1247px]">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div className="max-w-xl">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              <span className="text-emerald-600">•</span>
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
              Creating solutions for
              <br />
              <span className="text-emerald-600">Africa&apos;s</span>{" "}
              biggest <span className="text-[#0D3B66]">challenges.</span>
            </h2>

            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
              Delivering research, innovation, and partnerships that improve
              lives across Africa.
            </p>
          </div>

          <Link
            href="/what-we-do"
            className="flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-emerald-200 px-5 py-2.5 text-[15px] font-medium text-emerald-700 transition-colors hover:bg-emerald-50"
          >
            View all Areas
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Focus area cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.title}
                href={area.href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="relative px-5 pb-6">
                  <span className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm ring-4 ring-white">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>

                  <h3 className="mt-9 text-lg font-semibold leading-snug text-slate-900">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {area.description}
                  </p>
                  <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full text-emerald-600 transition-transform group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}