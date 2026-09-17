import { FileText, Globe, Users, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AfricaMark, SectionHeading } from "../about/shared";

function StatIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/70 bg-[rgba(22,163,74,0.12)] text-[#16A34A] shadow-[0px_10px_30px_rgba(15,23,42,0.08)] lg:h-[72px] lg:w-[72px]">
      <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
    </span>
  );
}

const STATS: { icon: LucideIcon; value: string; title: string; description: string }[] = [
  {
    icon: FileText,
    value: "250+",
    title: "Research Projects",
    description: "Delivering evidence-based solutions.",
  },
  {
    icon: Globe,
    value: "35+",
    title: "Countries Reached",
    description: "Supporting development across Africa.",
  },
  {
    icon: Users,
    value: "60+",
    title: "Strategic Partners",
    description: "Collaborating for lasting impact.",
  },
  {
    icon: Heart,
    value: "1.2M+",
    title: "Lives Impacted",
    description: "Creating meaningful change through research.",
  },
];

function StatItem({ icon, value, title, description }: (typeof STATS)[number]) {
  return (
    <div className="flex w-[200px] shrink-0 flex-col items-center gap-6 lg:w-[250px]">
      <StatIcon icon={icon} />
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <p className="font-display text-[40px] font-bold leading-[120%] text-[#1E293B] lg:text-[64px] lg:leading-[86px]">
          {value}
        </p>
        <p className="text-[16px] font-semibold text-[#16A34A] lg:text-[20px] lg:leading-[27px]">
          {title}
        </p>
        <p className="max-w-[200px] text-[12px] font-medium leading-[140%] text-[#64748B] lg:max-w-none lg:text-[20px] lg:leading-[27px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ResearchImpactStats() {
  return (
    <section id="impact" className="relative bg-[#F6FBF8] py-10 lg:py-16 xl:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-[-50px] hidden h-[582px] w-[559px] overflow-hidden lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-20">
        <SectionHeading
          align="center"
          eyebrow="Research Impact"
          title="Driving Impact Through Evidence"
          description="Our research continues to support better decisions, stronger institutions, and sustainable development across Africa."
        />
      </div>

      <div className="relative z-10 mx-auto mt-10 w-full max-w-[1280px] lg:mt-16">
        <div className="rounded-[24px] border-[1.5px] border-[rgba(203,213,225,0.55)] bg-white/40 p-5 shadow-[0px_20px_60px_-10px_rgba(15,23,42,0.08)] backdrop-blur-[12px] lg:rounded-[32px] lg:px-[75px] lg:py-[54px]">
          <div className="no-scrollbar -mx-1 flex items-center gap-4 overflow-x-auto px-1 lg:mx-0 lg:justify-center lg:gap-8 lg:overflow-visible lg:px-0">
            {STATS.map((stat, i) => (
              <div key={stat.title} className="flex shrink-0 items-center gap-4 lg:gap-8">
                <StatItem {...stat} />
                {i < STATS.length - 1 && (
                  <span className="hidden h-[200px] w-px shrink-0 bg-[rgba(203,213,225,0.5)] lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
