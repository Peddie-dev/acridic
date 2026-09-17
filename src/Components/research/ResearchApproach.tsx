import { Activity, CheckCheck, Users, Sparkles, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading } from "../about/shared";

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
    <article className="flex h-[222px] w-[230px] shrink-0 flex-col items-center justify-center gap-8 overflow-hidden rounded-[12px] bg-white px-5 py-6 lg:h-[251px]">
      <IconTile
        icon={icon}
        size={64}
        iconSize={32}
        className="rounded-full bg-[rgba(22,163,74,0.12)] max-lg:!h-14 max-lg:!w-14"
      />
      <div className="w-[190px] text-center">
        <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B] lg:text-[18px]">
          {title}
        </h3>
        <p className="mt-[14px] text-[12px] font-medium leading-[140%] text-[#5B6B82] lg:mt-3 lg:text-[14px] lg:leading-[170%]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function ResearchApproach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-[#F6FBF8] px-5 py-[60px] sm:px-8 lg:px-20 lg:pt-[120px] lg:pb-[82px]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-50px] right-[-80px] hidden h-[582px] w-[559px] lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Our Approach" title="Research with Purpose." />
        <p className="mt-5 max-w-[513px] text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:mt-6 lg:text-[18px] lg:leading-[175%]">
          We collaborate with governments, researchers, and communities to generate practical,
          evidence-based solutions.
          <span className="hidden lg:inline">
            <br />
            Our multidisciplinary approach transforms knowledge into meaningful action and lasting
            impact.
          </span>
          <span className="lg:hidden">
            {" "}
            Our multidisciplinary approach transforms knowledge into meaningful action and lasting
            impact.
          </span>
        </p>

        <div className="no-scrollbar mt-10 -mx-5 flex gap-4 overflow-x-auto px-5 lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible lg:px-0">
          {PILLARS.map((item) => (
            <PurposeCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
