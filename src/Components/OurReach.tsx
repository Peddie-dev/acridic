import Image from "next/image";
import Link from "next/link";
import {
  CloudRain,
  Landmark,
  Heart,
  Crosshair,
  Users,
  Globe,
  Repeat2,
  Group,
  TrendingUp,
  Receipt,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./ui";

const THEMES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: CloudRain,
    title: "Climate Resilience",
    body: "Research supporting sustainable land use, conservation and climate adaptation.",
  },
  {
    icon: Landmark,
    title: "Evidence-Based Policy",
    body: "Helping governments make informed, data-driven decisions.",
  },
  {
    icon: Heart,
    title: "Health Systems",
    body: "Strengthening healthcare through research, innovation.",
  },
  {
    icon: Crosshair,
    title: "Education & Capacity",
    body: "Building stronger institutions and empowering future leaders.",
  },
];

const FOOT_STATS: { icon: LucideIcon; value: string; title: string; subtitle: string }[] = [
  { icon: Users, value: "50+", title: "Research Projects", subtitle: "Completed" },
  { icon: Globe, value: "24", title: "Countries", subtitle: "Across Africa" },
  { icon: Repeat2, value: "150+", title: "Strategic Partners", subtitle: "Across Sectors" },
  { icon: Group, value: "5M+", title: "People Reached", subtitle: "Through Our Work" },
  { icon: TrendingUp, value: "15+", title: "Years of Impact", subtitle: "And Counting" },
];

const MAP_DOTS = [
  { top: "22%", left: "48%", kind: "active" },
  { top: "28%", left: "54%", kind: "active" },
  { top: "36%", left: "50%", kind: "past" },
  { top: "42%", left: "56%", kind: "partner" },
  { top: "48%", left: "47%", kind: "active" },
  { top: "55%", left: "52%", kind: "past" },
  { top: "62%", left: "49%", kind: "partner" },
  { top: "38%", left: "62%", kind: "active" },
  { top: "70%", left: "51%", kind: "past" },
] as const;

export default function OurReach() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[69px] top-[568px] hidden h-[520px] w-[520px] rounded-full bg-[rgba(34,197,94,0.08)] blur-[90px] lg:block"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[600px] text-center">
          <Eyebrow align="center">Our Reach</Eyebrow>
          <h2 className="mt-6 text-[36px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] sm:text-[48px]">
            Transforming Evidence Into Lasting Change.
          </h2>
          <p className="mt-8 text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            Across Africa, our research and partnerships are helping shape stronger
            institutions, healthier communities, resilient food systems, and sustainable
            development.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,840px)_421px]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-[#E8F2EC] bg-white/80 p-8 shadow-[0px_20px_40px_rgba(15,23,42,0.08)] backdrop-blur-[12px]">
            <h3 className="text-[32px] font-semibold leading-[44px] tracking-[-0.01em] text-[#16233B]">
              Our Reach Across Africa
            </h3>
            <span className="mt-4 block h-0.5 w-[60px] bg-[#16A34A]" />

            <ul className="mt-8 flex flex-col gap-4 text-[16px] font-medium leading-[22px] tracking-[-0.01em] text-[#64748B]">
              <li className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-[#16A34A]" />
                Active Projects
              </li>
              <li className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-[rgba(22,163,74,0.48)]" />
                Post Projects
              </li>
              <li className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full border-[1.5px] border-[#16A34A] opacity-90" />
                Partner Presence
              </li>
            </ul>

            <div className="relative mx-auto mt-4 aspect-[595/474] w-full max-w-[595px]">
              <div className="absolute inset-x-8 inset-y-6 rounded-full bg-[rgba(34,197,94,0.1)] blur-[100px]" />
              <Image
                src="/images/dotted-africa.png"
                alt="Map of ACRIDC reach across Africa"
                fill
                sizes="595px"
                className="knockout-black object-contain"
              />
              {MAP_DOTS.map((dot, i) => (
                <span
                  key={i}
                  style={{ top: dot.top, left: dot.left }}
                  className={`absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    dot.kind === "active"
                      ? "bg-[#16A34A]"
                      : dot.kind === "past"
                        ? "bg-[rgba(22,163,74,0.48)]"
                        : "border-[1.5px] border-[#16A34A] bg-transparent"
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-8 left-8 hidden max-w-[300px] items-center gap-[18px] rounded-[22px] border border-[#E8F2EC] bg-white/80 p-6 shadow-[0px_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-[12px] sm:flex">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)]">
                <Globe size={28} />
              </span>
              <p className="text-[14px] font-medium leading-6 text-[#16233B]">
                From local communities to national systems, our impact reaches where it
                matters most.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[5px]">
            {THEMES.map((theme) => {
              const Icon = theme.icon;
              return (
                <div
                  key={theme.title}
                  className="flex min-h-[145px] items-center gap-[18px] rounded-[24px] border border-[#E8F2EC] bg-white/80 px-5 shadow-[0px_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-[12px]"
                >
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)]">
                    <Icon size={28} />
                  </span>
                  <span className="h-[70px] w-px bg-[#16A34A]" />
                  <div>
                    <h4 className="text-[18px] font-semibold leading-8 tracking-[-0.01em] text-[#16233B]">
                      {theme.title}
                    </h4>
                    <p className="text-[16px] font-normal leading-[22px] text-[#64748B]">
                      {theme.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white/40 px-4 py-6 shadow-[0px_24px_60px_-10px_rgba(15,23,42,0.08)] backdrop-blur-[12px] sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-[31px]">
            {FOOT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="flex items-center gap-7">
                  {i > 0 && (
                    <span className="hidden h-[140px] w-px bg-[rgba(203,213,225,0.48)] lg:block" />
                  )}
                  <div className="flex min-w-[160px] flex-col items-start gap-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-[61px] w-[61px] items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] shadow-[0px_8px_25px_rgba(15,23,42,0.08)]">
                        <Icon size={32} />
                      </span>
                      <span className="font-display text-[40px] font-bold leading-[73px] text-[#16A34A] sm:text-[54px]">
                        {stat.value}
                      </span>
                    </div>
                    <div className="w-full text-center">
                      <p className="font-display text-[20px] font-bold leading-[27px] text-[#0F172A]">
                        {stat.title}
                      </p>
                      <p className="mt-2 text-[14px] font-medium leading-[18px] text-[#64748B]">
                        {stat.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Link
          href="/research/reports"
          className="mt-6 flex min-h-[128px] items-center justify-between gap-6 rounded-[28px] border border-white/55 bg-[#F3FEF7] px-6 py-5 shadow-[0px_24px_60px_-10px_rgba(15,23,42,0.08)] sm:px-10"
        >
          <div className="flex items-center gap-6">
            <span className="hidden text-[#16A34A] sm:block">
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" aria-hidden>
                <path d="M24 10H10" stroke="currentColor" strokeWidth="2" />
                <path d="M1 10H15" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <p className="max-w-[428px] text-[16px] font-normal leading-[19px] text-[#16233B]">
              Evidence-driven research creating measurable impact for communities across
              Africa.
            </p>
          </div>
          <span className="hidden h-16 w-px bg-[#16A34A] lg:block" />
          <span className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#16A34A] text-white">
              <Receipt size={28} />
            </span>
            <span>
              <span className="block text-[18px] font-semibold leading-8 tracking-[-0.01em] text-[#16233B]">
                Explore our Reports
              </span>
              <span className="block text-[14px] font-normal leading-[19px] text-[#64748B]">
                See our latest impact stories.
              </span>
            </span>
            <ArrowRight size={32} className="text-[#16A34A]" />
          </span>
        </Link>
      </div>
    </section>
  );
}
