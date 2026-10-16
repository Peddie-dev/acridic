import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurWorkHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[40px] bg-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/our-work-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/80 to-transparent lg:w-3/5" />
      </div>

      <div className="mx-auto max-w-[1247px] px-4 pb-20 pt-36 sm:px-6 lg:pb-28 lg:pt-44">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <span className="mx-2 text-slate-300">›</span>
          <span className="font-medium text-emerald-600">Our Work</span>
        </nav>

        <span className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">
          <span>•</span>
          Our Work
        </span>

        <h1 className="mt-4 max-w-lg text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
          Research That Creates{" "}
          <span className="text-emerald-600">Lasting Impact.</span>
        </h1>

        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
          We combine research, collaboration, and expertise to address
          Africa&apos;s most pressing development challenges.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/our-work#projects"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-600 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Explore Our Projects
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-[15px] font-medium text-slate-800 backdrop-blur transition-colors hover:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
