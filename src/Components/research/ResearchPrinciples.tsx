import { Lightbulb, Users, CheckCheck, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AfricaMark, SectionHeading, aboutSectionPad } from "../about/shared";

const PRINCIPLES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Lightbulb,
    title: "Integrity",
    description: "Conducting research with honesty, ethics, and transparency.",
  },
  {
    icon: Users,
    title: "Excellence",
    description: "Delivering rigorous, high-quality research and evidence.",
  },
  {
    icon: CheckCheck,
    title: "Collaboration",
    description: "Working together to achieve meaningful and lasting impact.",
  },
  {
    icon: LineChart,
    title: "Innovation",
    description: "Applying creative thinking and modern research approaches.",
  },
];

function Principle({ icon: Icon, title, description }: (typeof PRINCIPLES)[number]) {
  return (
    <div className="flex items-start gap-6">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center text-[#16A34A] lg:h-16 lg:w-16">
        <Icon className="h-6 w-6 lg:h-8 lg:w-8" strokeWidth={1.75} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-[16px] font-semibold leading-[22px] text-[#1E293B] lg:text-[20px] lg:leading-[27px]">
          {title}
        </h3>
        <p className="mt-3 text-[14px] font-medium leading-[140%] text-[#5B6B82] lg:mt-5 lg:text-[16px] lg:leading-[22px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ResearchPrinciples() {
  return (
    <section id="principles" className={`relative overflow-hidden bg-[#F8FAFC] ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-[304px] w-[292px] lg:right-[-80px] lg:top-[-50px] lg:block lg:h-[582px] lg:w-[559px]"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,515px)_minmax(0,649px)] lg:items-start lg:gap-[100px]">
        <SectionHeading
          eyebrow="Our Values"
          title="Principles That Guide Our Research"
          description="Our values shape every research initiative, partnership, and decision, ensuring our work remains credible, collaborative, and impactful."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:gap-8">
          {PRINCIPLES.map((item, i) => (
            <div
              key={item.title}
              className={`min-w-0 ${
                i % 2 === 1 ? "sm:border-l sm:border-[rgba(203,213,225,0.5)] sm:pl-8" : ""
              } ${
                i > 0
                  ? "border-t border-[rgba(203,213,225,0.5)] pt-6 sm:border-t-0 sm:pt-0"
                  : ""
              } ${i >= 2 ? "sm:border-t sm:border-[rgba(203,213,225,0.5)] sm:pt-10" : ""}`}
            >
              <Principle {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
