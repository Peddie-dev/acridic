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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading, StatChip } from "./shared";

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

function AreaCard({ icon, title, description, href }: (typeof AREAS)[number]) {
  const Icon = icon;
  return (
    <article className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0px_28px_64px_rgba(12,25,48,0.1)]">
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
    <section id="research-areas" className="bg-[#F8FAFC] px-5 py-12 sm:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
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
          <div className="max-w-[664px] lg:pt-1">
            <div className="flex items-start gap-5">
              <IconTile
                icon={Hourglass}
                size={72}
                iconSize={32}
                className="rounded-full border border-[#E2E8F0] bg-[rgba(22,163,74,0.08)]"
              />
              <p className="text-[14px] font-medium leading-[170%] text-[#5B6B82]">
                We generate actionable evidence across key thematic areas to inform policy,
                strengthen institutions, improve livelihoods, and support sustainable
                development throughout Africa.
              </p>
            </div>
            <span className="mt-8 block h-0.5 w-[76px] bg-[#E2E8F0]" />
            <div className="mt-8 flex flex-wrap items-start gap-6">
              <StatChip icon={FileText} value="25+" label="Active Research Projects" />
              <span className="hidden h-[110px] w-px bg-[rgba(203,213,225,0.35)] lg:block" />
              <StatChip icon={Users} value="60+" label="Research Partners" />
              <span className="hidden h-[110px] w-px bg-[rgba(203,213,225,0.35)] lg:block" />
              <StatChip icon={Globe} value="15+" label="African Countries Reached" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-[26px] sm:grid-cols-2 xl:grid-cols-4">
          {AREAS.map((area) => (
            <AreaCard key={area.title} {...area} />
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[rgba(238,251,243,0.32)] p-5 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-[43px] hidden h-[217px] w-[326px] lg:block"
          >
            <AfricaMark sizes="326px" className="opacity-[0.10]" />
          </div>
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex items-center gap-5">
              <div className="relative h-[150px] w-[150px] shrink-0">
                <Image
                  src="/images/leadership/james-mwangi.png"
                  alt="ACRIDC research leadership"
                  fill
                  sizes="150px"
                  quality={100}
                  unoptimized
                  className="rounded-full object-cover object-[center_12%]"
                />
                <span className="absolute -bottom-2 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-white bg-[#16A34A] text-white">
                  <FileText size={24} />
                </span>
              </div>
              <div className="max-w-[396px]">
                <h3 className="text-[24px] font-semibold tracking-[-0.01em] text-[#16233B]">
                  Explore, Collaborate, Impact.
                </h3>
                <p className="mt-3 text-[14px] font-normal leading-7 text-[#64748B]">
                  Access our publications, research resources, and partnership opportunities to
                  help transform evidence into meaningful action across Africa.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/research/publications"
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#16A34A] px-3 text-[14px] font-semibold text-[#16A34A]"
                  >
                    Explore Publications
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/partner-with-us"
                    className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-[14px] font-semibold text-[#16A34A]"
                  >
                    Collaborate With Us
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden flex-1 items-center justify-around lg:flex">
              {[
                { icon: FileText, title: "Publications", text: "Turn Research Into Real-World Impact." },
                { icon: Database, title: "Data & Resources", text: "Explore Knowledge. Build Partnerships." },
                { icon: Mail, title: "Stay Updated", text: "Research That Creates Lasting Change." },
              ].map((item, i) => (
                <div key={item.title} className="flex items-center gap-5">
                  {i > 0 && <span className="h-[127px] w-px bg-[#E2E8F0]" />}
                  <div className="flex w-[200px] flex-col items-center text-center">
                    <IconTile
                      icon={item.icon}
                      size={51}
                      iconSize={25}
                      className="rounded-full bg-[rgba(22,163,74,0.12)]"
                    />
                    <p className="mt-5 text-[18px] font-semibold text-[#16233B]">{item.title}</p>
                    <p className="mt-1 text-[13px] font-medium leading-[170%] text-[#5B6B82]">{item.text}</p>
                    <ArrowRight size={15} className="mt-4 text-[#16A34A]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
