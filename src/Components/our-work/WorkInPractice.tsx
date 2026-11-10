import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    tag: "Agriculture",
    title: "Digital Agriculture",
    description:
      "Improving farmer productivity and market access through innovation.",
    image: "/images/work-agriculture.png",
    href: "/our-work/digital-agriculture",
  },
  {
    tag: "Health",
    title: "Health Systems Strengthening",
    description:
      "Building resilient healthcare systems through research and evidence.",
    image: "/images/work-health.png",
    href: "/our-work/health-systems-strengthening",
  },
  {
    tag: "Environment",
    title: "Climate Resilience",
    description:
      "Supporting sustainable solutions for communities and ecosystems.",
    image: "/images/work-climate.png",
    href: "/our-work/climate-resilience",
  },
];

export default function WorkInPractice() {
  return (
    <section id="projects" className="px-4 py-14 sm:px-6 lg:py-16">
      <div className="relative mx-auto lg:w-[min(1247px,86.6vw)]">
        {/* Faint dotted Africa, top-right of the header */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-10 top-8 hidden aspect-square w-[130px] opacity-50 lg:block"
        >
          <Image
            src="/images/dotted-africa.png"
            alt=""
            fill
            sizes="130px"
            className="object-contain"
          />
        </div>

        <span className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--emerald)]">
          <span>•</span>
          Selected Work
        </span>
        <h2 className="relative mt-4 text-4xl font-bold tracking-tight text-[color:var(--heading)] sm:text-[2.6rem] sm:leading-tight">
          Our Work in Practice
        </h2>
        <span className="relative mt-3 block h-0.5 w-12 bg-[color:var(--emerald)]" />

        <div className="relative mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[15px] text-[color:var(--body)]">
            Explore selected projects demonstrating how research and
            collaboration create meaningful change.
          </p>
          <Link
            href="/what-we-do/projects"
            className="flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-[color:var(--emerald)] hover:opacity-80"
          >
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-[20px] bg-white shadow-sm shadow-slate-900/5 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[308/183] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[color:var(--emerald)]">
                  {project.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[17px] font-semibold text-[color:var(--heading)]">
                  {project.title}
                </h3>
                <p className="mt-2 min-h-[44px] text-[15px] leading-relaxed text-[color:var(--body)]">
                  {project.description}
                </p>
                <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-[color:var(--emerald)] transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

