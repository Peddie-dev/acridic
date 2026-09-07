import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Globe,
  Repeat2,
  Group,
  TrendingUp,
  FileText,
  ArrowRight,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./ui";

const PHASES_LEFT = [
  {
    phase: "PHASE I",
    title: "Turkana County Center of Excellence",
    body: "The Organization shall prioritize integrated research, innovation, implementation science, and capacity building in Turkana County.",
  },
  {
    phase: "PHASE II",
    title: "Kenya Arid and Semi-Arid Lands Expansion",
    body: "Progressive expansion to the Arid and Semi-Arid Lands of Kenya.",
  },
  {
    phase: "PHASE III",
    title: "Ateker Regional Platform",
    body: "The Organization shall promote cross-border collaboration, research, innovation, policy dialogue, and knowledge exchange.",
  },
  {
    phase: "PHASE IV",
    title: "Pan-African Expansion",
    body: "The Organization shall progressively establish partnerships, country programs, research centers, and institutional presence across Africa.",
  },
];

const PHASE_V = {
  phase: "PHASE V",
  title: "Global Strategic Partnerships",
  body: "Without prejudice to its Pan-African identity, the Organization may establish strategic partnerships with global institutions and development networks.",
};

const FOOT_STATS: { icon: LucideIcon; value: string; title: string; subtitle: string }[] = [
  { icon: Users, value: "50+", title: "Research Projects", subtitle: "Completed" },
  { icon: Globe, value: "24", title: "Countries", subtitle: "Across Africa" },
  { icon: Repeat2, value: "150+", title: "Strategic Partners", subtitle: "Across Sectors" },
  { icon: Group, value: "5M+", title: "People Reached", subtitle: "Through Our Work" },
  { icon: TrendingUp, value: "15+", title: "Years of Impact", subtitle: "And Counting" },
];

function PhaseCard({
  phase,
  title,
  body,
}: {
  phase: string;
  title: string;
  body: string;
}) {
  return (
    <article className="flex items-center gap-4 rounded-[18px] border border-[#E8EEF2] bg-white px-4 py-4 shadow-[0px_8px_24px_rgba(15,23,42,0.04)] sm:gap-5 sm:px-5 sm:py-5">
      <span className="shrink-0 rounded-full bg-[#E2F9E7] px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[#166534]">
        {phase}
      </span>
      <span className="h-12 w-px shrink-0 bg-[#E2E8F0] sm:h-14" />
      <div className="min-w-0">
        <h4 className="text-[15px] font-bold leading-snug tracking-[-0.01em] text-[#16233B] sm:text-[16px]">
          {title}
        </h4>
        <p className="mt-1 text-[13px] font-normal leading-[160%] text-[#64748B] sm:text-[14px]">
          {body}
        </p>
      </div>
    </article>
  );
}

export default function OurReach() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-2 hidden h-[300px] w-[260px] lg:block xl:right-8 xl:top-6 xl:h-[340px] xl:w-[300px]"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="300px"
          className="knockout-black object-contain object-right-top opacity-[0.18] grayscale"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow align="center">OUR REACH</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B]">
            From <span className="text-[#166534]">Turkana</span> to{" "}
            <span className="text-[#166534]">Africa</span>
          </h2>
          <p className="mt-5 text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            ACRIDC-Africa&apos;s institutional expansion pathway.
          </p>
        </div>

        <div className="mt-12 rounded-[32px] border border-[#E8F2EC] bg-white p-4 shadow-[0px_20px_50px_rgba(15,23,42,0.08)] sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-10">
            <div className="flex flex-col gap-3">
              {PHASES_LEFT.map((item) => (
                <PhaseCard key={item.phase} {...item} />
              ))}
            </div>

            <div className="flex min-w-0 flex-col">
              <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#16233B] sm:text-[22px]">
                Our Reach From Turkana to Africa.
              </h3>
              <span className="mt-2 block h-0.5 w-11 bg-[#16A34A]" />

              <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium leading-5 tracking-[-0.01em] text-[#64748B] sm:text-[14px]">
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#166534]" />
                  Active Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#86EFAC]" />
                  Past Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border-[1.5px] border-[#16A34A] bg-transparent" />
                  Partner Presence
                </li>
              </ul>

              <div className="relative mt-2 flex min-h-[280px] flex-1 items-center justify-center sm:min-h-[360px]">
                <Image
                  src="/images/our-reach-africa-map.png"
                  alt="Map of ACRIDC reach from Turkana across Africa"
                  width={595}
                  height={474}
                  className="h-auto w-full max-w-[520px] object-contain"
                />
              </div>

              <div className="mt-2">
                <PhaseCard {...PHASE_V} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-[#E8F2EC] bg-white px-4 py-6 shadow-[0px_16px_40px_rgba(15,23,42,0.06)] sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
            {FOOT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className={`flex flex-col items-center gap-3 px-2 text-center lg:px-4 ${
                    i > 0 ? "lg:border-l lg:border-[#E2E8F0]" : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E2F9E7] text-[#16A34A] shadow-[0px_8px_20px_rgba(15,23,42,0.06)] sm:h-[56px] sm:w-[56px]">
                      <Icon size={26} strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-[clamp(1.75rem,1rem+1.8vw,2.75rem)] font-bold leading-none text-[#16A34A]">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-[16px] font-bold leading-6 text-[#0F172A] sm:text-[18px]">
                      {stat.title}
                    </p>
                    <p className="mt-1 text-[13px] font-medium leading-[18px] text-[#64748B]">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Link
          href="/research/reports"
          className="mt-6 flex flex-col items-stretch gap-5 rounded-[28px] border border-[#E8F2EC] bg-white px-5 py-5 shadow-[0px_16px_40px_rgba(15,23,42,0.06)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10"
        >
          <div className="flex min-w-0 items-start gap-4 sm:items-center">
            <Quote
              size={28}
              className="mt-0.5 hidden shrink-0 fill-[#166534] text-[#166534] sm:block"
            />
            <p className="max-w-[520px] text-[16px] font-normal leading-[150%] text-[#16233B]">
              Evidence-driven research creating measurable impact for communities{" "}
              <span className="font-semibold text-[#16A34A]">across Africa</span>.
            </p>
          </div>
          <span className="hidden h-14 w-px shrink-0 bg-[#E2E8F0] lg:block" />
          <span className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-white">
              <FileText size={24} strokeWidth={1.75} />
            </span>
            <span className="min-w-0">
              <span className="block text-[17px] font-semibold leading-7 tracking-[-0.01em] text-[#16233B]">
                Explore our Reports
              </span>
              <span className="block text-[14px] font-normal leading-[19px] text-[#64748B]">
                See our latest impact stories.
              </span>
            </span>
            <ArrowRight size={28} className="ml-auto shrink-0 text-[#16A34A] sm:ml-2" />
          </span>
        </Link>
      </div>
    </section>
  );
}
