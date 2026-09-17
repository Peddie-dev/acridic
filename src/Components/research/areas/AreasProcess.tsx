import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, FileText, ChartColumn, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AfricaMark, SectionHeading } from "../../about/shared";

const STEPS: {
  icon: LucideIcon;
  num: string;
  title: string;
  desktop: string;
  mobile: string;
}[] = [
  {
    icon: Search,
    num: "01",
    title: "Identify Challenges",
    desktop:
      "Understanding Africa's priority development needs through research and stakeholder engagement.",
    mobile: "Understand priority issues through stakeholder engagement.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Conduct Research",
    desktop: "Generating reliable evidence using rigorous methodologies and trusted data.",
    mobile: "Gather reliable data using rigorous and evidence-based methodologies.",
  },
  {
    icon: ChartColumn,
    num: "03",
    title: "Generate Insights",
    desktop: "Transforming research findings into practical recommendations and knowledge.",
    mobile: "Transform findings into practical recommendations and knowledge.",
  },
  {
    icon: LineChart,
    num: "04",
    title: "Drive Impact",
    desktop: "Supporting policies and programmes that create sustainable development outcomes.",
    mobile: "Support policies and programmes that create sustainable change.",
  },
];

function Step({
  icon: Icon,
  num,
  title,
  desktop,
  mobile,
}: (typeof STEPS)[number]) {
  return (
    <div className="flex w-[190px] shrink-0 flex-col items-center gap-8">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] lg:h-16 lg:w-16">
        <Icon className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={1.75} />
      </span>
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <p className="text-[16px] font-semibold leading-[130%] text-[#16A34A] lg:text-[18px]">
          {num}
        </p>
        <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B] lg:text-[18px]">
          {title}
        </h3>
        <p className="text-[12px] font-medium leading-[140%] text-[#5B6B82] lg:hidden">{mobile}</p>
        <p className="hidden text-[14px] font-medium leading-[170%] text-[#5B6B82] lg:block">
          {desktop}
        </p>
      </div>
    </div>
  );
}

function StepArrow() {
  return (
    <span className="flex h-14 w-8 shrink-0 items-center justify-center text-[#16A34A] max-lg:h-full lg:h-16 lg:w-[55px]">
      <ArrowRight size={33} strokeWidth={1.75} className="max-lg:size-6" />
    </span>
  );
}

export default function AreasProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F6FBF8] px-5 py-[100px] sm:px-8 lg:px-12 lg:py-20 min-[1440px]:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-9 right-[-80px] hidden h-[582px] w-[559px] lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeading
          align="center"
          eyebrow="Our Research Approach"
          title={
            <>
              From Evidence to
              <br />
              Action
            </>
          }
        />
        <p className="mx-auto mt-5 hidden max-w-[657px] text-center text-[18px] font-normal leading-[175%] text-[#5B6B82] lg:block">
          Every research initiative follows a collaborative and evidence-based process designed to
          deliver practical solutions and measurable impact.
        </p>
        <p className="mx-auto mt-5 max-w-[400px] text-center text-[16px] leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:hidden">
          We turn rigorous research into practical solutions that inform policy and create lasting
          impact.
        </p>
        <div className="mt-6 flex justify-center lg:hidden">
          <Link
            href="#process"
            className="inline-flex items-center gap-[9px] text-[13px] font-semibold text-[#16A34A]"
          >
            Learn more about our Methodology
            <ArrowUpRight size={19} strokeWidth={1.94} />
          </Link>
        </div>

        <div className="no-scrollbar mt-10 -mx-5 flex items-stretch gap-3 overflow-x-auto px-5 lg:mx-0 lg:mt-16 lg:items-start lg:justify-center lg:gap-6 lg:overflow-visible lg:px-0 min-[1440px]:gap-[59px]">
          {STEPS.flatMap((step, i) => [
            <Step key={step.num} {...step} />,
            i < STEPS.length - 1 ? <StepArrow key={`${step.num}-arrow`} /> : null,
          ])}
        </div>
      </div>
    </section>
  );
}
