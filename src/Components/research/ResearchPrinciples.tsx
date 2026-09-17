import { Lightbulb, Users, CheckCheck, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AfricaMark, SectionHeading } from "../about/shared";

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
      <div className="w-full lg:w-[196px]">
        <h3 className="text-[16px] font-semibold leading-[22px] text-[#1E293B] lg:text-[20px] lg:leading-[27px]">
          {title}
        </h3>
        <p className="mt-3 text-[14px] font-medium leading-[140%] text-[#64748B] lg:mt-5 lg:text-[16px] lg:leading-[22px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ResearchPrinciples() {
  return (
    <section
      id="principles"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 lg:px-20 lg:pt-20 lg:pb-[80px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 hidden h-[304px] w-[292px] lg:top-[-50px] lg:right-[-80px] lg:block lg:h-[582px] lg:w-[559px]"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[515px_649px] lg:items-start lg:gap-[100px]">
        <SectionHeading
          eyebrow="Our Values"
          title="Principles That Guide Our Research"
          description="Our values shape every research initiative, partnership, and decision, ensuring our work remains credible, collaborative, and impactful."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
          {PRINCIPLES.map((item, i) => (
            <div
              key={item.title}
              className={`min-w-0 ${
                i % 2 === 1
                  ? "lg:border-l lg:border-[rgba(203,213,225,0.5)] lg:pl-8"
                  : "lg:pr-8"
              } ${
                i > 0
                  ? "border-t border-[rgba(203,213,225,0.5)] py-6 lg:border-t-0 lg:py-0"
                  : "pb-6 lg:pb-0"
              } ${
                i >= 2
                  ? "lg:border-t lg:border-[rgba(203,213,225,0.5)] lg:pt-10"
                  : "lg:min-h-[280px] lg:border-b lg:border-[rgba(203,213,225,0.5)] lg:pb-10"
              } lg:flex lg:items-center`}
            >
              <Principle {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
