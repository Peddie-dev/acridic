import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  TrendingUp,
  GraduationCap,
  Leaf,
  Heart,
  Landmark,
  Lightbulb,
  Scale,
  type LucideIcon,
} from "lucide-react";

interface Area {
  icon: LucideIcon;
  title: string;
  href: string;
  tile: string; // tile background
  iconBg: string; // icon background + color
}

const AREAS: Area[] = [
  {
    icon: Droplet,
    title: "Agriculture & Food Systems",
    href: "/what-we-do/agriculture-food-systems",
    tile: "bg-emerald-50/70",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Economic Development",
    href: "/what-we-do/economic-development",
    tile: "bg-sky-50/80",
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    icon: GraduationCap,
    title: "Education & Human Capital",
    href: "/what-we-do/education-human-capital",
    tile: "bg-violet-50/80",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    icon: Leaf,
    title: "Environment & Natural Resources",
    href: "/what-we-do/environment-natural-resources",
    tile: "bg-emerald-50/70",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Heart,
    title: "Health & Social Wellbeing",
    href: "/what-we-do/health-social-wellbeing",
    tile: "bg-rose-50/80",
    iconBg: "bg-rose-100 text-rose-500",
  },
  {
    icon: Landmark,
    title: "Governance & Policy",
    href: "/what-we-do/governance-policy",
    tile: "bg-amber-50/80",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation, Technology & Data",
    href: "/what-we-do/innovation-technology-data",
    tile: "bg-orange-50/80",
    iconBg: "bg-orange-100 text-orange-500",
  },
  {
    icon: Scale,
    title: "Peace, Resilience & Inclusion",
    href: "/what-we-do/peace-resilience-inclusion",
    tile: "bg-indigo-50/80",
    iconBg: "bg-indigo-100 text-indigo-600",
  },
];

export default function FocusAreas() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[1247px]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              <span>•</span>
              Focus Areas
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Areas Where We Make a Difference.
            </h2>
          </div>
          <Link
            href="/research/case-studies"
            className="flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            View All Case Studies
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.title}
                href={area.href}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-4 ring-1 ring-black/5 transition-shadow hover:shadow-md ${area.tile}`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${area.iconBg}`}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="flex-1 text-sm font-medium leading-snug text-slate-800">
                  {area.title}
                </span>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-emerald-600 transition-transform group-hover:translate-x-1"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
