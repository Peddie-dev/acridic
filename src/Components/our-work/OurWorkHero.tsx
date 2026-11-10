import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function OurWorkHero() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden rounded-b-[40px] bg-white lg:-mt-[128px] lg:min-h-[677px]">
      {/* Full hero composition (photo, faint Africa map and fade are all in the image) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/our-work-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="mx-auto px-4 pb-20 pt-10 sm:px-6 lg:w-[min(1247px,86.6vw)] lg:px-0 lg:pb-24 lg:pt-36">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-600"
        >
          <Link href="/" className="hover:text-[color:var(--emerald)]">
            Home
          </Link>
          <ChevronRight size={12} className="text-slate-400" />
          <span className="font-medium text-[color:var(--emerald)]">Our Work</span>
        </nav>

        <span className="mt-10 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--emerald)]">
          <span>•</span>
          Our Work
        </span>

        <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-[color:var(--heading)] sm:text-[2.6rem]">
          Research That Creates
          <br />
          <span className="text-[color:var(--emerald)]">Lasting Impact.</span>
        </h1>

        <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-slate-600">
          We combine research, collaboration, and expertise to address
          Africa&apos;s most pressing development challenges.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/our-work#projects"
            className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-[color:var(--emerald)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:brightness-90"
          >
            Explore Our Projects
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-xl border border-slate-600/40 bg-white/50 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition-colors hover:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

