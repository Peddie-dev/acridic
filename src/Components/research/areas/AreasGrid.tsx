import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  ChartColumn,
  UserRoundPlus,
  Heart,
  Landmark,
  Watch,
  ThumbsUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "../../ui";
import { AfricaMark } from "../../about/shared";

export const RESEARCH_AREAS: {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}[] = [
  {
    icon: Droplet,
    title: "Agriculture & Food Systems",
    description: "Advancing sustainable agriculture, food security, resilient farming systems.",
    slug: "agriculture",
  },
  {
    icon: ChartColumn,
    title: "Economic Development",
    description: "Promoting inclusive economic growth, regional trade and entrepreneurship.",
    slug: "economic-development",
  },
  {
    icon: UserRoundPlus,
    title: "Education & Human Capital",
    description: "Strengthening education systems, workforce development, and lifelong learning.",
    slug: "education",
  },
  {
    icon: Droplet,
    title: "Environment & Natural Resources",
    description:
      "Supporting climate resilience, environmental conservation, and sustainable natural resource.",
    slug: "environment",
  },
  {
    icon: Heart,
    title: "Health & Social Wellbeing",
    description:
      "Improving public health systems, community wellbeing, and equitable access to healthcare.",
    slug: "health",
  },
  {
    icon: Landmark,
    title: "Governance & Policy",
    description: "Strengthening governance, public institutions, and evidence-informed policymaking.",
    slug: "governance",
  },
  {
    icon: Watch,
    title: "Innovation, Technology & Data",
    description: "Harnessing innovation, digital technologies, and data-driven research.",
    slug: "innovation",
  },
  {
    icon: ThumbsUp,
    title: "Peace, Resilience & Inclusion",
    description: "Promoting peaceful societies, social inclusion, and resilient communities.",
    slug: "peace",
  },
];

function AreaCard({
  icon: Icon,
  title,
  description,
  slug,
}: (typeof RESEARCH_AREAS)[number]) {
  return (
    <article
      id={slug}
      className="relative flex h-[280px] w-[300px] min-w-0 shrink-0 flex-col overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0px_28px_64px_rgba(12,25,48,0.08)] lg:w-full"
    >
      <AfricaMark
        width={67}
        height={78}
        className="absolute right-5 bottom-[22px] z-0 h-[78px] w-[67px] opacity-[0.16]"
      />
      <div className="relative z-10 flex h-full flex-col px-5 pt-[23px] pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EAF9EE] text-[#16A34A] min-[1440px]:h-16 min-[1440px]:w-16">
            <Icon size={26} strokeWidth={1.75} className="min-[1440px]:h-7 min-[1440px]:w-7" />
          </span>
          <h3 className="min-w-0 flex-1 text-[18px] font-semibold leading-7 tracking-[-0.01em] text-[#16233B] min-[1440px]:text-[20px] min-[1440px]:leading-8">
            {title}
          </h3>
        </div>
        <p className="mt-6 max-w-[253px] text-[16px] font-normal leading-7 text-[#64748B]">
          {description}
        </p>
        <Link
          href={`#${slug}`}
          className="mt-auto inline-flex items-center gap-[9px] pt-4 text-[14px] font-semibold text-[#16A34A]"
        >
          Learn More
          <ArrowRight size={19} strokeWidth={1.94} />
        </Link>
      </div>
    </article>
  );
}

export default function AreasGrid() {
  return (
    <section
      id="themes"
      className="relative scroll-mt-32 overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 lg:scroll-mt-40 lg:px-8 lg:py-20 xl:px-12 min-[1440px]:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-8 right-[-40px] hidden h-[520px] w-[500px] lg:block min-[1440px]:right-[-80px] min-[1440px]:h-[582px] min-[1440px]:w-[559px]"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="max-w-[695px]">
          <Eyebrow>Our Research Themes</Eyebrow>
          <h2 className="mt-3 text-[24px] font-bold leading-[140%] tracking-[-0.02em] text-[#16233B] lg:mt-6 lg:text-[clamp(1.75rem,1rem+2.4vw,3rem)] lg:leading-[110%]">
            Research Focused on Africa&apos;s
            <br />
            Greatest Opportunities
          </h2>
          <div className="mt-4 h-[3px] w-[60px] bg-[#16A34A] lg:mt-6" />
        </div>
        <p className="mt-5 max-w-[657px] text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:mt-6 lg:text-[18px] lg:leading-[175%]">
          Our work spans eight interconnected research areas that address today&apos;s challenges
          while creating sustainable solutions for tomorrow.
        </p>

        <div className="mt-10 flex flex-col gap-[26px] lg:hidden">
          {[RESEARCH_AREAS.slice(0, 4), RESEARCH_AREAS.slice(4)].map((row, i) => (
            <div
              key={i}
              className="no-scrollbar -mx-5 flex gap-[26px] overflow-x-auto px-5"
            >
              {row.map((area) => (
                <AreaCard key={area.slug} {...area} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 hidden flex-col gap-5 min-[1440px]:gap-[26px] lg:flex">
          {[RESEARCH_AREAS.slice(0, 4), RESEARCH_AREAS.slice(4)].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-5 min-[1280px]:grid-cols-4 min-[1280px]:gap-5 min-[1440px]:gap-[26px]"
            >
              {row.map((area) => (
                <AreaCard key={area.slug} {...area} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
