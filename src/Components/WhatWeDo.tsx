import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplet, CloudRain, Pill, Briefcase, type LucideIcon } from "lucide-react";
import { Eyebrow, OutlineButton } from "./ui";

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
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[80px] top-0 hidden h-[582px] w-[559px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="559px"
          className="knockout-black object-contain object-top opacity-80"
        />
      </div>

      <div className="relative mx-auto max-w-[1290px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <div className="max-w-[600px]">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="mt-6 text-[32px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] sm:text-[40px]">
              Creating solutions for
              <br />
              Africa&apos;s biggest challenges.
            </h2>
            <p className="mt-6 max-w-[440px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
              Delivering research, innovation, and partnerships that improve lives across
              Africa.
            </p>
          </div>

          <OutlineButton href="/what-we-do">View all Areas</OutlineButton>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-4">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.title}
                href={area.href}
                className="group relative flex min-h-[477px] flex-col overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-white shadow-[0px_28px_64px_rgba(12,25,48,0.1)]"
              >
                <div className="relative h-[224px] w-full shrink-0">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="300px"
                    className="rounded-t-[24px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="relative flex flex-1 flex-col px-7 pb-7 pt-0">
                  <span className="-mt-8 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#F3F8F4] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)]">
                    <Icon size={28} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-[24px] font-medium leading-[130%] text-[#16233B]">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-[16px] font-medium leading-7 text-[#5B6B82]">
                    {area.description}
                  </p>
                  <span className="mt-6 text-[#18A957] transition-transform group-hover:translate-x-1">
                    <ArrowRight size={20} strokeWidth={1.6} />
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
