import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Gem,
  Compass,
  type LucideIcon,
} from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const PILLARS: Pillar[] = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Generating evidence that empowers communities and drives development.",
    href: "/about#mission",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "An Africa transformed through knowledge, innovation, and collaboration.",
    href: "/about#vision",
  },
  {
    icon: Gem,
    title: "Our Values",
    description:
      "Guided by integrity, excellence, inclusivity, and accountability.",
    href: "/about#values",
  },
  {
    icon: Compass,
    title: "Our Approach",
    description:
      "Partnering with communities and institutions to create lasting impact.",
    href: "/about#approach",
  },
];

export default function About() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:py-24">
      <div className="relative isolate mx-auto max-w-[1247px] overflow-hidden rounded-[32px] bg-white shadow-sm">
        {/* Full-bleed background image, fading into white on the left edge */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about-acridc.png"
            alt="ACRIDC field team engaging with a community"
            fill
            sizes="1247px"
            className="object-cover object-[75%_center]"
          />
          {/* Solid white on the far left, fading out within ~40% of the width */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white to-transparent lg:w-1/3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Text column */}
          <div className="flex flex-col justify-center bg-white/95 px-6 py-12 sm:px-10 lg:bg-transparent lg:px-14 lg:py-16">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              <span className="text-emerald-600">•</span>
              About Acridc
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
              Advancing Knowledge.
              <br />
              Empowering Communities.
              <br />
              Building{" "}
              <span className="text-emerald-600">Africa&apos;s</span>{" "}
              <span className="text-[#0D3B66]">Future.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
              ACRIDC is a pan-African research institution advancing
              knowledge, innovation, and partnerships for sustainable
              development.
            </p>

            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-700">
              Working with governments, institutions, and communities to turn
              knowledge into action.
            </p>

            <Link
              href="/about"
              className="mt-8 flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-[#0F3057] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0c2745]"
            >
              Our Story
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Spacer column — image shows through here (see full-bleed bg above) */}
          <div className="hidden min-h-[280px] lg:block lg:min-h-[520px]" />
        </div>

        {/* Core pillars */}
        <div className="px-6 pb-12 sm:px-10 lg:px-14 lg:pb-16">
          <div className="flex items-center gap-4">
            <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-slate-400">
              Our Core Pillars
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="mt-5 text-lg font-semibold text-slate-900">
                    {pillar.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-slate-500">
                    {pillar.description}
                  </span>
                  <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full text-emerald-600 transition-transform group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


