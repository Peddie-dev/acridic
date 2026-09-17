import Link from "next/link";
import { ArrowRight, ArrowUpRight, Target, FileText, Lightbulb, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AfricaMark, SectionHeading, aboutSectionPad } from "../about/shared";

function CircleIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] xl:h-16 xl:w-16">
      <Icon className="h-7 w-7 xl:h-8 xl:w-8" strokeWidth={1.75} aria-hidden />
    </span>
  );
}

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
      <CircleIcon icon={icon} />
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

export default function ResearchMethodology() {
  return (
    <section id="methodology" className={`relative overflow-hidden bg-[#F8FAFC] ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-[-50px] hidden h-[582px] w-[559px] lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeading
          align="center"
          eyebrow="Our Methodology"
          title="From Evidence to Action"
          description="We turn rigorous research into practical solutions that inform policy and create lasting impact."
        />
        <div className="mt-6 flex justify-center">
          <Link
            href="#methodology"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#16A34A]"
          >
            Learn more about our Methodology
            <ArrowUpRight size={19} />
          </Link>
        </div>

        <div className="mt-10 no-scrollbar -mx-5 flex items-start gap-3 overflow-x-auto px-5 xl:mx-0 xl:mt-16 xl:items-center xl:justify-center xl:gap-[59px] xl:overflow-visible xl:px-0">
          {STEPS.flatMap((step, i) => [
            <Step key={step.num} {...step} />,
            i < STEPS.length - 1 ? (
              <span
                key={`${step.num}-arrow`}
                className="flex h-[55px] w-[55px] shrink-0 items-center justify-center self-center text-[#16A34A]"
              >
                <ArrowRight size={33} strokeWidth={1.75} />
              </span>
            ) : null,
          ])}
        </div>
      </div>
    </section>
  );
}
