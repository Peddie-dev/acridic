import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    tag: "Agriculture",
    title: "Digital Agriculture",
    description:
      "Improving farmer productivity and market access through innovation.",
    image: "/images/work-agriculture.jpg",
    href: "/our-work/digital-agriculture",
  },
  {
    tag: "Health",
    title: "Health Systems Strengthening",
    description:
      "Building resilient healthcare systems through research and evidence.",
    image: "/images/work-health.jpg",
    href: "/our-work/health-systems-strengthening",
  },
  {
    tag: "Environment",
    title: "Climate Resilience",
    description:
      "Supporting sustainable solutions for communities and ecosystems.",
    image: "/images/work-climate.jpg",
    href: "/our-work/climate-resilience",
  },
];

export default function WorkInPractice() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 hidden aspect-[220/260] w-[140px] opacity-40 lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="140px"
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1247px]">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">
          <span>•</span>
          Selected Work
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Our Work in Practice
        </h2>
        <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            Explore selected projects demonstrating how research and
            collaboration create meaningful change.
          </p>
          <Link
            href="/what-we-do/projects"
            className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                  {project.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {project.description}
                </p>
                <span className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
