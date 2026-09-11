import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  BrainCircuit,
  Pill,
  Briefcase,
  CloudRain,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow, OutlineButton } from "./ui";
import MobileCarousel from "./MobileCarousel";

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
    title: "Research and Evidence",
    description:
      "Conduct research, implementation science, operational research, surveys...",
    image: "/images/what-we-do-climate.png",
    href: "/what-we-do/research-and-evidence",
  },
  {
    icon: BrainCircuit,
    title: "Innovation and Digital Transformation",
    description:
      "Promote science, technology, digital transformation, artificial intelligence, and data-driven...",
    image: "/images/what-we-do-agriculture.png",
    href: "/what-we-do/innovation-and-digital-transformation",
  },
  {
    icon: Pill,
    title: "Programme Development",
    description:
      "Design, implement, monitor, evaluate, and scale research, innovation, humanitarian...",
    image: "/images/what-we-do-health.png",
    href: "/what-we-do/programme-development",
  },
  {
    icon: Briefcase,
    title: "Knowledge Translation",
    description:
      "Generate, document, preserve, disseminate, and translate knowledge into policy ...",
    image: "/images/what-we-do-governance.png",
    href: "/what-we-do/knowledge-translation",
  },
];

const MOBILE_AREAS: FocusArea[] = [
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

function AreaCard({ area, compact = false }: { area: FocusArea; compact?: boolean }) {
  const Icon = area.icon;
  return (
    <Link
      href={area.href}
      className="group relative flex h-full min-h-[425px] min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-white shadow-[0px_28px_64px_rgba(12,25,48,0.1)] lg:min-h-[477px]"
    >
      <div className="relative h-[224px] w-full shrink-0">
        <Image
          src={area.image}
          alt={area.title}
          fill
          sizes="360px"
          className="rounded-t-[24px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="relative flex flex-1 flex-col px-5 pb-7 pt-0 lg:px-7">
        <span
          className={`-mt-8 mb-4 inline-flex items-center justify-center rounded-[20px] bg-[#F3F8F4] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)] ${
            compact ? "h-14 w-14" : "h-16 w-16"
          }`}
        >
          <Icon size={compact ? 24 : 28} strokeWidth={1.75} />
        </span>
        <h3 className="text-[24px] font-medium leading-[130%] text-[#16233B]">{area.title}</h3>
        <p className="mt-4 text-[16px] font-medium leading-7 text-[#5B6B82]">{area.description}</p>
        <span className="mt-auto pt-6 text-[#18A957] transition-transform group-hover:translate-x-1">
          <ArrowRight size={20} strokeWidth={1.6} />
        </span>
      </div>
    </Link>
  );
}

export default function WhatWeDo() {
  return (
    <section className="relative overflow-x-clip bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:py-[120px]">
      <div className="relative mx-auto max-w-[1290px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[600px]">
            <span className="lg:hidden">
              <Eyebrow>What We Do</Eyebrow>
            </span>
            <span className="hidden lg:inline">
              <Eyebrow>WHAT WE DO / INSTITUTIONAL FUNCTIONS</Eyebrow>
            </span>
            <h2 className="mt-6 text-[clamp(1.75rem,1rem+2.2vw,2.5rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B]">
              Creating solutions for
              <br />
              <span className="text-[#16A34A]">Africa&apos;s</span> biggest challenges.
            </h2>
            <p className="mt-6 max-w-[440px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
              Delivering research, innovation, and partnerships that improve lives across
              Africa.
            </p>
          </div>

          <OutlineButton
            href="/what-we-do"
            className="w-full max-w-[400px] shrink-0 self-start lg:mt-[43px] lg:w-auto"
          >
            View all Areas
          </OutlineButton>
        </div>

        <MobileCarousel className="mt-10 lg:hidden">
          {MOBILE_AREAS.map((area) => (
            <AreaCard key={area.title} area={area} compact />
          ))}
        </MobileCarousel>

        <div className="mt-16 hidden grid-cols-1 gap-[30px] lg:grid xl:grid-cols-4">
          {FOCUS_AREAS.map((area) => (
            <AreaCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
