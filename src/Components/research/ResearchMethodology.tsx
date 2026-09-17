import Link from "next/link";
import { ArrowRight, ArrowUpRight, Target, FileText, Lightbulb, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading } from "../about/shared";

const STEPS: { icon: LucideIcon; num: string; title: string; description: string }[] = [
  {
    icon: Target,
    num: "01",
    title: "Identify Challenges",
    description: "Understand priority issues through stakeholder engagement.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Conduct Research",
    description: "Gather reliable data using rigorous and evidence-based methodologies.",
  },
  {
    icon: Lightbulb,
    num: "03",
    title: "Generate Insights",
    description: "Transform findings into practical recommendations and knowledge.",
  },
  {
    icon: LineChart,
    num: "04",
    title: "Drive Impact",
    description: "Support policies and programmes that create sustainable change.",
  },
];

function Step({ icon, num, title, description }: (typeof STEPS)[number]) {
  return (
    <div className="flex w-[190px] shrink-0 flex-col items-center gap-8">
      <IconTile
        icon={icon}
        size={64}
        iconSize={32}
        className="rounded-full bg-[rgba(22,163,74,0.12)] max-lg:!h-14 max-lg:!w-14"
      />
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <p className="text-[16px] font-semibold leading-[130%] text-[#16A34A] lg:text-[18px]">
          {num}
        </p>
        <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B] lg:text-[18px]">
          {title}
        </h3>
        <p className="text-[12px] font-medium leading-[140%] text-[#5B6B82] lg:text-[14px] lg:leading-[170%]">
          {description}
        </p>
      </div>
    </div>
  );
}

function StepArrow() {
  return (
    <span className="flex size-[55px] shrink-0 items-center justify-center self-center text-[#16A34A]">
      <ArrowRight size={33} strokeWidth={1.75} />
    </span>
  );
}

export default function ResearchMethodology() {
  return (
    <section
      id="methodology"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 lg:px-20 lg:pt-20 lg:pb-[80px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-50px] right-[-80px] hidden h-[582px] w-[559px] lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeading
          align="center"
          eyebrow="How We Work"
          title="From Evidence to Action"
          description="We turn rigorous research into practical solutions that inform policy and create lasting impact."
        />
        <div className="mt-6 flex justify-center">
          <Link
            href="#methodology"
            className="inline-flex h-[33px] items-center gap-[9px] text-[13px] font-semibold text-[#16A34A]"
          >
            Learn more about our Methodology
            <ArrowUpRight size={19} strokeWidth={1.94} />
          </Link>
        </div>

        <div className="no-scrollbar mt-10 -mx-5 flex items-start gap-3 overflow-x-auto px-5 lg:mx-0 lg:mt-16 lg:items-start lg:justify-center lg:gap-[59px] lg:overflow-visible lg:px-0">
          {STEPS.flatMap((step, i) => [
            <Step key={step.num} {...step} />,
            i < STEPS.length - 1 ? <StepArrow key={`${step.num}-arrow`} /> : null,
          ])}
        </div>
      </div>
    </section>
  );
}
