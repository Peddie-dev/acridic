import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Radio, Eye, Crown, Plane, type LucideIcon } from "lucide-react";
import { Eyebrow, IconTile, PrimaryButton } from "./ui";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const PILLARS: Pillar[] = [
  {
    icon: Radio,
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

export default function About() {
  return (
    <section className="bg-[#F8FAFC] px-5 py-10 sm:px-10 lg:px-20 lg:py-12">
      <div className="relative isolate mx-auto max-w-[1280px] overflow-hidden rounded-[32px] border border-white/60 bg-white/92 shadow-[0px_20px_60px_rgba(12,25,48,0.08)]">
        <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
          <div className="absolute left-[-39.5%] top-[-7%] h-[112%] w-[138%]">
            <Image
              src="/images/about-acridc.png"
              alt="ACRIDC field team engaging with a community"
              fill
              sizes="1768px"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(281.73deg,rgba(255,255,255,0)_42.84%,rgba(255,255,255,0.32)_61.54%,#FFFFFF_71.07%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(358.26deg,#FFFFFF_20.21%,rgba(255,255,255,0.64)_32.9%,rgba(255,255,255,0)_44.18%)]" />
        </div>

        <div className="px-[70px] py-[70px] max-lg:px-6 max-lg:py-10">
          <Eyebrow>About Acridc</Eyebrow>

          <h2 className="mt-6 max-w-[522px] text-[32px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] sm:text-[40px]">
            Advancing Knowledge.
            <br />
            Empowering Communities.
            <br />
            Building Africa&apos;s Future.
          </h2>

          <p className="mt-8 max-w-[442px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            ACRIDC is a pan-African research institution advancing knowledge, innovation,
            and partnerships for sustainable development.
          </p>

          <p className="mt-6 max-w-[442px] text-[18px] font-medium leading-[170%] tracking-[-0.02em] text-[#16233B]">
            Working with governments, institutions, and communities to turn knowledge into
            action.
          </p>

          <div className="mt-8">
            <PrimaryButton href="/about">Our Story</PrimaryButton>
          </div>

          <div className="mt-[72px] flex items-center gap-3">
            <span className="whitespace-nowrap text-[13px] font-medium uppercase leading-6 tracking-[0.08em] text-[#7C8798]">
              Our Core Pillars
            </span>
            <span className="h-px w-[240px] max-w-full bg-[#E2E8F0]" />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-[11px] sm:grid-cols-2 xl:grid-cols-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="group flex min-h-[328px] flex-col rounded-[24px] border border-[#EEF2F7] bg-white px-8 py-9 shadow-[0px_24px_60px_rgba(12,25,48,0.06)]"
                >
                  <IconTile icon={Icon} />
                  <span className="mt-7 text-[24px] font-medium leading-[130%] text-[#16233B]">
                    {pillar.title}
                  </span>
                  <span className="mt-4 text-[16px] font-medium leading-[170%] text-[#5B6B82]">
                    {pillar.description}
                  </span>
                  <span className="mt-4 text-[#18A957] transition-transform group-hover:translate-x-1">
                    <ArrowRight size={20} strokeWidth={1.6} />
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
