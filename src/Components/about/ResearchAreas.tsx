import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  ChartColumn,
  GraduationCap,
  Leaf,
  Heart,
  Landmark,
  Watch,
  ThumbsUp,
  Hourglass,
  FileText,
  Users,
  Globe,
  Database,
  Mail,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading, StatsGrid, aboutSectionPad } from "./shared";

const AREAS: { icon: LucideIcon; title: string; description: string; href: string }[] = [
  {
    icon: Droplet,
    title: "Agriculture & Food Systems",
    description: "Advancing sustainable agriculture, food security, resilient farming systems.",
    href: "/research/areas",
  },
  {
    icon: ChartColumn,
    title: "Economic Development",
    description: "Promoting inclusive economic growth, regional trade and entrepreneurship.",
    href: "/research/areas",
  },
  {
    icon: GraduationCap,
    title: "Education & Human Capital",
    description: "Strengthening education systems, workforce development, and lifelong learning.",
    href: "/research/areas",
  },
  {
    icon: Leaf,
    title: "Environment & Natural Resources",
    description:
      "Supporting climate resilience, environmental conservation, and sustainable natural resource.",
    href: "/research/areas",
  },
  {
    icon: Heart,
    title: "Health & Social Wellbeing",
    description:
      "Improving public health systems, community wellbeing, and equitable access to healthcare.",
    href: "/research/areas",
  },
  {
    icon: Landmark,
    title: "Governance & Policy",
    description: "Strengthening governance, public institutions, and evidence-informed policymaking.",
    href: "/research/areas",
  },
  {
    icon: Watch,
    title: "Innovation, Technology & Data",
    description: "Harnessing innovation, digital technologies, and data-driven research.",
    href: "/research/areas",
  },
  {
    icon: ThumbsUp,
    title: "Peace, Resilience & Inclusion",
    description: "Promoting peaceful societies, social inclusion, and resilient communities.",
    href: "/research/areas",
  },
];

function AreaCard({
  icon,
  title,
  description,
  href,
  className = "",
}: (typeof AREAS)[number] & { className?: string }) {
  const Icon = icon;
  return (
    <article
      className={`relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0px_28px_64px_rgba(12,25,48,0.1)] ${className}`}
    >
      <AfricaMark
        width={67}
        height={78}
        className="absolute right-5 bottom-[22px] z-0 h-[78px] w-[67px] opacity-[0.16]"
      />
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-[#EAF9EE] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)]">
            <Icon size={28} strokeWidth={1.75} />
          </span>
          <h3 className="text-[20px] font-semibold leading-8 tracking-[-0.01em] text-[#16233B]">{title}</h3>
        </div>
        <p className="mt-6 min-h-[84px] text-[16px] font-normal leading-7 text-[#64748B]">{description}</p>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#16A34A]">
          Learn More
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}

export default function ResearchAreas() {
  return (
    <section id="research-areas" className={`bg-[#F8FAFC] ${aboutSectionPad}`}>
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start xl:grid-cols-[minmax(0,1fr)_minmax(560px,1.15fr)]">
          <SectionHeading
            eyebrow="Our Research Areas"
            title={
              <>
                Research that Drives
                <br />
                <span className="text-[#16A34A]">Evidence. Action. Impact.</span>
              </>
            }
            description="Our multidisciplinary research addresses Africa's most pressing development challenges through rigorous analysis, innovative solutions, and collaborative partnerships that create measurable and lasting impact."
          />
          <div className="min-w-0">
            <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-start">
              <IconTile
                icon={Hourglass}
                size={56}
                iconSize={25}
                className="rounded-full border border-[#E2E8F0] bg-[rgba(22,163,74,0.08)] lg:h-[72px] lg:w-[72px]"
              />
              <p className="text-[14px] font-medium leading-[170%] text-[#5B6B82]">
                We generate actionable evidence across key thematic areas to inform policy,
                strengthen institutions, improve livelihoods, and support sustainable
                development throughout Africa.
              </p>
            </div>
            <span className="mt-8 block h-0.5 w-[76px] bg-[#E2E8F0]" />
            <div className="mt-8">
              <StatsGrid
                items={[
                  { icon: FileText, value: "25+", label: "Active Research Projects" },
                  { icon: Users, value: "60+", label: "Research Partners" },
                  { icon: Globe, value: "15+", label: "African Countries Reached" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 no-scrollbar -mx-5 overflow-x-auto px-5 lg:hidden">
          <div className="flex w-max flex-col gap-[26px]">
            {[AREAS.slice(0, 4), AREAS.slice(4)].map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-[26px]">
                {row.map((area) => (
                  <AreaCard key={area.title} {...area} className="h-[280px] w-[300px] shrink-0 p-6" />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 hidden grid-cols-1 gap-5 sm:grid-cols-2 lg:grid xl:mt-16 xl:grid-cols-4 xl:gap-[26px]">
          {AREAS.map((area) => (
            <AreaCard key={area.title} {...area} />
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[rgba(238,251,243,0.4)] px-5 py-6 pb-8 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] sm:px-8 sm:py-7">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-0 h-[147px] w-[220px] lg:-right-6 lg:top-1/2 lg:h-[240px] lg:w-[360px] lg:-translate-y-1/2"
          >
            <AfricaMark sizes="360px" className="opacity-[0.14]" />
          </div>
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-4">
            <div className="flex min-w-0 flex-col items-start gap-5 lg:shrink-0 lg:flex-row lg:items-center">
              <div className="relative h-[100px] w-[100px] shrink-0 lg:h-[128px] lg:w-[128px]">
                <Image
                  src="/images/leadership/james-mwangi.png"
                  alt="ACRIDC research leadership"
                  fill
                  sizes="256px"
                  quality={100}
                  unoptimized
                  className="rounded-full object-cover object-top"
                />
                <span className="absolute bottom-0 left-1/2 flex h-[37px] w-[37px] -translate-x-1/2 translate-y-[18%] items-center justify-center rounded-full border border-white bg-[#16A34A] text-white shadow-[0px_8px_20px_rgba(22,163,74,0.28)] lg:h-12 lg:w-12 lg:border-[3px]">
                  <Search size={16} strokeWidth={2.25} className="lg:h-5 lg:w-5" />
                </span>
              </div>
              <div className="w-full shrink-0 lg:w-auto">
                <h3 className="text-[16px] font-bold leading-[130%] text-[#16233B] lg:text-[22px] lg:font-semibold lg:leading-8 lg:tracking-[-0.01em] xl:text-[24px]">
                  Explore, Collaborate, Impact.
                </h3>
                <p className="mt-4 max-w-[360px] text-[14px] font-medium leading-[140%] text-[#5B6B82] lg:mt-2 lg:max-w-[300px] lg:font-normal lg:leading-6 lg:text-[#64748B]">
                  Access our publications, research resources, and partnership opportunities to
                  help transform evidence into meaningful action across Africa.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 lg:gap-5">
                  <Link
                    href="/research/publications"
                    className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-[#16A34A] px-3 text-[12px] font-semibold text-[#16A34A] lg:text-[14px]"
                  >
                    Explore Publications
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/partner-with-us"
                    className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-[#16A34A] px-3 text-[12px] font-semibold text-[#16A34A] lg:border-0 lg:px-0 lg:text-[14px]"
                  >
                    Collaborate With Us
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid min-w-0 flex-1 grid-cols-1 lg:grid-cols-3">
              {[
                { icon: FileText, title: "Publications", text: "Turn Research Into Real-World Impact." },
                { icon: Database, title: "Data & Resources", text: "Explore Knowledge. Build Partnerships." },
                { icon: Mail, title: "Stay Updated", text: "Research That Creates Lasting Change." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex flex-col items-center px-3 py-4 text-center lg:py-0 ${
                      i > 0 ? "border-t border-[#E2E8F0] lg:border-l lg:border-t-0" : ""
                    }`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] lg:h-[51px] lg:w-[51px]">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <p className="mt-4 text-[16px] font-semibold leading-6 text-[#16233B] lg:text-[18px]">
                      {item.title}
                    </p>
                    <p className="mt-1 max-w-[180px] text-[12px] font-medium leading-[140%] text-[#5B6B82] lg:text-[13px] lg:leading-[170%]">
                      {item.text}
                    </p>
                    <ArrowRight size={15} className="mt-3 text-[#16A34A]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
