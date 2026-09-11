import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Crown, Plane, type LucideIcon } from "lucide-react";
import { IconTile, PrimaryButton } from "./ui";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const DESKTOP_PILLARS: Pillar[] = [
  {
    icon: Target,
    title: "Our Purpose",
    description: "To advance equitable, resilient, and sustainable development through research...",
    href: "/about#purpose",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be Africa's leading center of excellence in research, innovation, implementation science...",
    href: "/about#vision",
  },
  {
    icon: Crown,
    title: "Our Mission",
    description:
      "To generate evidence, foster innovation, strengthen institutions and systems, build strategic partnerships...",
    href: "/about#mission",
  },
  {
    icon: Plane,
    title: "Our Strategic Goal",
    description:
      "To contribute to equitable, resilient, and sustainable development by strengthening institutions...",
    href: "/about#strategic-goal",
  },
];

const MOBILE_PILLARS: Pillar[] = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Generating evidence that empowers communities and drives development.",
    href: "/about#mission",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "An Africa transformed through knowledge, innovation, and collaboration.",
    href: "/about#vision",
  },
  {
    icon: Crown,
    title: "Our Values",
    description: "Guided by integrity, excellence, inclusivity, and accountability.",
    href: "/about#values",
  },
  {
    icon: Plane,
    title: "Our Approach",
    description: "Partnering with communities and institutions to create lasting impact.",
    href: "/about#approach",
  },
];

function AboutEyebrow({ children }: { children: string }) {
  return (
    <span className="flex items-center gap-2 text-[14px] font-medium uppercase leading-[19px] tracking-[0.08em] text-[#16A34A]">
      <span className="h-1 w-1 shrink-0 rounded-full bg-[#1E293B]" />
      {children}
    </span>
  );
}

function PillarGrid({ pillars, compact = false }: { pillars: Pillar[]; compact?: boolean }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[11px]">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <Link
            key={pillar.title}
            href={pillar.href}
            className={`group flex flex-col rounded-[24px] border border-[#EEF2F7] bg-white shadow-[0px_24px_60px_rgba(12,25,48,0.06)] ${
              compact
                ? "min-h-[228px] px-6 py-6"
                : "min-h-[280px] px-6 py-8 sm:min-h-[328px] sm:px-8 sm:py-9"
            }`}
          >
            <IconTile icon={Icon} size={compact ? 56 : 64} iconSize={compact ? 24 : 28} />
            <span className="mt-4 text-[24px] font-medium leading-[130%] text-[#16233B] lg:mt-7">
              {pillar.title}
            </span>
            <span className="mt-2 text-[16px] font-medium leading-[170%] text-[#5B6B82] lg:mt-4">
              {pillar.description}
            </span>
            <span className="mt-auto pt-4 text-[#18A957] transition-transform group-hover:translate-x-1">
              <ArrowRight size={20} strokeWidth={1.6} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#F8FAFC] px-5 py-10 sm:px-10 lg:px-20 lg:py-24">
        <div className="relative isolate mx-auto max-w-[1280px] overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-[0px_20px_60px_rgba(12,25,48,0.08)]">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-white">
          <div className="absolute inset-y-0 left-0 hidden w-full bg-white lg:block lg:w-[48%]" />
          <div className="absolute inset-y-0 right-0 hidden h-full w-[62%] lg:block">
            <Image
              src="/images/about-acridc.png"
              alt="ACRIDC field team engaging with a community"
              fill
              sizes="(min-width: 1280px) 800px, 60vw"
              className="object-cover object-[70%_18%]"
              priority
            />
          </div>
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_42%,rgba(255,255,255,0.96)_48%,rgba(255,255,255,0.55)_56%,rgba(255,255,255,0)_70%)] lg:block" />
          <div className="absolute inset-x-0 bottom-0 hidden h-[46%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_42%,#FFFFFF_82%)] lg:block" />
        </div>

        <div className="relative z-10 px-5 py-8 sm:px-10 lg:px-12 lg:py-14 xl:px-[70px] xl:pt-[70px] xl:pb-[70px]">
          <span className="lg:hidden">
            <AboutEyebrow>About ACRIDC</AboutEyebrow>
          </span>
          <span className="hidden lg:inline">
            <AboutEyebrow>About ACRIDC-Africa</AboutEyebrow>
          </span>

          <h2 className="mt-6 max-w-[522px] text-[clamp(1.75rem,1rem+2.2vw,2.5rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:hidden">
            Advancing Knowledge.
            <br />
            <span className="text-[#16A34A]">Empowering Communities.</span>
            <br />
            Building Africa&apos;s Future.
          </h2>
          <h2 className="mt-6 hidden max-w-[522px] text-[40px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:block">
            Advancing Knowledge.
            <br />
            <span className="text-[#16A34A]">Empowering Communities.</span>
            <br />
            Strengthening Institutions.
          </h2>

          <p className="mt-8 max-w-[442px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:hidden">
            ACRIDC is a pan-African research institution advancing knowledge, innovation,
            and partnerships for sustainable development.
          </p>
          <p className="mt-8 hidden max-w-[442px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:block">
            The Advancing Community Research, Innovation and Development Center-Africa
            (ACRIDC-Africa) is an African-led, multidisciplinary public benefit organization
            dedicated to advancing research.
          </p>

          <p className="mt-6 max-w-[442px] text-[18px] font-medium leading-[170%] tracking-[-0.02em] text-[#5B6B82] lg:hidden">
            Working with governments, institutions, and communities to turn knowledge into
            action.
          </p>
          <p className="mt-6 hidden max-w-[442px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:block">
            ACRIDC-Africa works to generate evidence, foster innovation, strengthen
            institutions and systems, build strategic partnerships, and empower communities
            through research
          </p>

          <div className="mt-8 w-full max-w-[400px]">
            <PrimaryButton href="/about" className="w-full lg:w-auto">
              Our Story
            </PrimaryButton>
          </div>

          <div className="mt-10 lg:mt-[72px]">
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap text-[13px] font-medium uppercase leading-6 tracking-[0.08em] text-[#7C8798]">
                Our Core Pillars
              </span>
              <span className="hidden h-px w-[240px] bg-[#E2E8F0] lg:block" />
            </div>
            <span className="mt-3 block h-px w-full bg-[#E2E8F0] lg:hidden" />
          </div>

          <div className="lg:hidden">
            <PillarGrid pillars={MOBILE_PILLARS} compact />
          </div>
          <div className="hidden lg:block">
            <PillarGrid pillars={DESKTOP_PILLARS} />
          </div>
        </div>
      </div>
    </section>
  );
}
