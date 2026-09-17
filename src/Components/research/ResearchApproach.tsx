import { Activity, CheckCheck, Users, Sparkles, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AfricaMark, SectionHeading, aboutSectionPad } from "../about/shared";

function CircleIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] xl:h-16 xl:w-16">
      <Icon className="h-7 w-7 xl:h-8 xl:w-8" strokeWidth={1.75} aria-hidden />
    </span>
  );
}

const PILLARS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Activity,
    title: "Evidence-Based",
    description: "Delivering trusted research that informs policy and drives sustainable solutions.",
  },
  {
    icon: CheckCheck,
    title: "Relevant",
    description: "We focus on real world challenges and emerging opportunities.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working with partners to co-create sustainable solutions.",
  },
  {
    icon: Sparkles,
    title: "Innovative",
    description: "Applying modern research methods and data-driven insights.",
  },
  {
    icon: Rocket,
    title: "Impact-Focused",
    description: "Turning evidence into measurable development outcomes.",
  },
];

function PurposeCard({ icon, title, description }: (typeof PILLARS)[number]) {
  return (
    <article className="flex h-[222px] w-[230px] shrink-0 flex-col items-center justify-center gap-8 rounded-[12px] bg-white px-5 py-6 xl:h-[251px] xl:w-full">
      <CircleIcon icon={icon} />
      <div className="w-[190px] text-center">
        <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B] lg:text-[18px]">
          {title}
        </h3>
        <p className="mt-2 text-[12px] font-medium leading-[140%] text-[#5B6B82] lg:mt-3 lg:text-[14px] lg:leading-[170%]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function ResearchApproach() {
  return (
    <section id="approach" className={`relative overflow-hidden bg-[#F6FBF8] ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-[-50px] hidden h-[582px] w-[559px] lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow="Our Approach"
          title="Research with Purpose."
          description="We collaborate with governments, researchers, and communities to generate practical, evidence-based solutions. Our multidisciplinary approach transforms knowledge into meaningful action and lasting impact."
        />

        <div className="mt-10 no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 xl:mx-0 xl:mt-16 xl:grid xl:grid-cols-5 xl:gap-8 xl:overflow-visible xl:px-0">
          {PILLARS.map((item) => (
            <PurposeCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
