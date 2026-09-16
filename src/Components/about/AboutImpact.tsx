import Link from "next/link";
import {
  ArrowRight,
  Users,
  Globe,
  Landmark,
  Heart,
  Handshake,
  Star,
  FileText,
} from "lucide-react";
import { SectionHeading, StatsGrid, AfricaMark, AfricaMapPlaceholder, aboutSectionPad } from "./shared";

const IMPACT_AREAS = [
  {
    icon: Users,
    title: "Stronger Communities",
    description:
      "Empowering communities through evidence-based programmes that improve livelihoods, resilience, and opportunity.",
  },
  {
    icon: Landmark,
    title: "Better Policies",
    description:
      "Supporting governments with trusted research that informs smarter, more inclusive policy decisions.",
  },
  {
    icon: Heart,
    title: "Sustainable Development",
    description:
      "Promoting innovative solutions that strengthen institutions and advance long-term development goals.",
  },
  {
    icon: Handshake,
    title: "Knowledge for Change",
    description:
      "Producing and sharing research that drives informed decisions, innovation, and measurable impact.",
  },
];

export default function AboutImpact() {
  return (
    <section id="impact" className={`bg-[#F8FAFC] ${aboutSectionPad}`}>
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start xl:grid-cols-[minmax(0,1fr)_minmax(560px,1.15fr)]">
          <SectionHeading
            eyebrow="Our Impact"
            title={
              <>
                Impact Across Africa,
                <br />
                <span className="text-[#16A34A]">Changing Lives.</span>
              </>
            }
            description="For more than a decade, ACRIDC has translated research into practical action. Through evidence-based solutions, strategic partnerships, and community engagement, we help shape policies, strengthen institutions, and improve livelihoods across Africa."
          />
          <div className="min-w-0">
            <StatsGrid
              items={[
                { icon: FileText, value: "18+", label: "Active Research Projects" },
                { icon: Users, value: "250+", label: "Research Partners" },
                { icon: Globe, value: "35+", label: "African Countries Reached" },
                { icon: FileText, value: "1.2M", label: "Active Research Projects" },
                { icon: Users, value: "13+", label: "Research Partners" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[24px] bg-white shadow-[0px_20px_60px_rgba(15,23,42,0.08)] xl:mt-16">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(220px,355px)_minmax(0,1.35fr)]">
            <div className="flex flex-col justify-center p-5 lg:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-[20px] bg-[#EAF9EE] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)]">
                  <Landmark size={20} />
                </span>
                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-[#16233B] lg:text-[18px]">
                  Impact Where it matters
                </h3>
              </div>
              <p className="mt-6 text-[16px] leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:leading-7 lg:text-[#64748B]">
                Our work reaches communities where evidence can create the greatest difference.
                By partnering with local institutions, policymakers, and development
                organizations, we turn research into practical solutions that improve lives.
              </p>
              <Link
                href="/our-work"
                className="mt-6 inline-flex h-10 w-fit items-center gap-2 rounded-lg border border-[#16A34A] px-3 text-[14px] font-semibold text-[#16A34A]"
              >
                Explore Our Work
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hidden min-h-[240px] items-center justify-center px-4 py-6 xl:flex lg:min-h-[379px]">
              <div className="h-[min(100%,340px)] w-full max-w-[355px]">
                <AfricaMapPlaceholder
                  src="/images/impact-africa-map.png"
                  alt="ACRIDC reach across Africa"
                />
              </div>
            </div>

            <div className="p-5 xl:border-l xl:p-8">
              <h3 className="text-[16px] font-semibold leading-8 tracking-[-0.01em] text-[#16233B] lg:text-[20px]">
                Our Impact Areas
              </h3>
              <ul className="no-scrollbar mt-3 flex gap-5 overflow-x-auto lg:mt-6 lg:flex-col lg:overflow-visible">
                {IMPACT_AREAS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="w-[320px] shrink-0 lg:w-full">
                      <Link
                        href="/our-work"
                        className="group flex flex-col items-start gap-3 py-3 lg:flex-row lg:items-center"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[9px] border border-[#E2E8F0] bg-[rgba(22,163,74,0.04)] text-[#16A34A] lg:h-16 lg:w-16 lg:rounded-[12px]">
                          <Icon size={24} strokeWidth={1.75} className="lg:h-8 lg:w-8" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[14px] font-semibold leading-[130%] text-[#16233B] lg:text-[16px]">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-[14px] font-medium leading-[140%] text-[#5B6B82] lg:leading-[170%]">
                            {item.description}
                          </span>
                        </span>
                        <ArrowRight
                          size={24}
                          className="shrink-0 self-end text-[#6F767E] transition-transform group-hover:translate-x-1 lg:self-auto"
                        />
                      </Link>
                      {i < IMPACT_AREAS.length - 1 && (
                        <span className="mt-2 block h-px bg-[#E2E8F0]" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[rgba(238,251,243,0.32)] p-5 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-0 h-[147px] w-[220px] lg:top-[43px] lg:h-[217px] lg:w-[326px]"
          >
            <AfricaMark sizes="326px" className="opacity-[0.10]" />
          </div>
          <div className="relative z-10 flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex w-full flex-col items-start gap-5 lg:flex-row lg:items-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white bg-[#16A34A] text-white lg:h-[120px] lg:w-[120px]">
                <Star size={34} strokeWidth={1.5} className="lg:h-16 lg:w-16" />
              </span>
              <div className="max-w-[575px]">
                <h3 className="text-[16px] font-bold leading-[130%] text-[#16233B] lg:text-[24px] lg:font-semibold lg:tracking-[-0.01em]">
                  Evidence Today. Impact Tomorrow.
                </h3>
                <p className="mt-4 text-[14px] font-medium leading-[140%] text-[#5B6B82] lg:mt-2 lg:leading-7 lg:text-[#64748B]">
                  Together with governments, development partners, researchers, and communities,
                  we&apos;re building a stronger, more resilient Africa through knowledge,
                  collaboration, and action.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/partner-with-us"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#16A34A] bg-[#16A34A] px-3 text-[12px] font-semibold text-white lg:text-[14px]"
              >
                Become a Partner
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#16A34A] px-3 text-[12px] font-semibold text-[#16A34A] lg:text-[14px]"
              >
                Explore Our Impact
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
