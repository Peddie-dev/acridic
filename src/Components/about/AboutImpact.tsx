import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Globe,
  Landmark,
  Heart,
  Handshake,
  Star,
  Briefcase,
  UserRound,
} from "lucide-react";
import { SectionHeading, StatChip, AfricaMark } from "./shared";

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
    <section id="impact" className="bg-[#F8FAFC] px-5 py-12 sm:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
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
          <div className="flex max-w-[664px] flex-col gap-10">
            <div className="flex flex-wrap items-start gap-6">
              <StatChip icon={Globe} value="18+" label="Countries" />
              <span className="hidden h-[110px] w-px bg-[rgba(203,213,225,0.35)] lg:block" />
              <StatChip icon={Briefcase} value="250+" label="Research Projects" />
              <span className="hidden h-[110px] w-px bg-[rgba(203,213,225,0.35)] lg:block" />
              <StatChip icon={UserRound} value="35+" label="Strategic Partners" />
            </div>
            <div className="flex flex-wrap items-start gap-6">
              <StatChip icon={Heart} value="1.2M" label="Lives Reached" />
              <span className="hidden h-[110px] w-px bg-[rgba(203,213,225,0.35)] lg:block" />
              <StatChip icon={Users} value="13+" label="Years of Impact" />
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0px_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[311px_355px_1fr]">
            <div className="flex flex-col justify-center p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-[20px] bg-[#EAF9EE] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)]">
                  <Landmark size={20} />
                </span>
                <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-[#16233B]">
                  Impact Where it matters
                </h3>
              </div>
              <p className="mt-6 text-[16px] leading-7 text-[#64748B]">
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

            <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[379px]">
              <Image
                src="/images/our-reach-africa-map.png"
                alt="ACRIDC reach across Africa"
                fill
                sizes="(min-width: 1024px) 355px, 100vw"
                className="object-contain p-4"
              />
            </div>

            <div className="border-t border-[#E2E8F0] p-6 lg:border-l lg:border-t-0 lg:p-8">
              <h3 className="text-[20px] font-semibold leading-8 tracking-[-0.01em] text-[#16233B]">
                Our Impact Areas
              </h3>
              <ul className="mt-6 flex flex-col">
                {IMPACT_AREAS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <Link href="/our-work" className="group flex items-center gap-3 py-3">
                        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[rgba(22,163,74,0.04)] text-[#16A34A]">
                          <Icon size={32} strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[16px] font-semibold leading-[130%] text-[#16233B]">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-[14px] font-medium leading-[170%] text-[#5B6B82]">
                            {item.description}
                          </span>
                        </span>
                        <ArrowRight
                          size={24}
                          className="shrink-0 text-[#6F767E] transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                      {i < IMPACT_AREAS.length - 1 && <span className="block h-px bg-[#E2E8F0]" />}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[rgba(238,251,243,0.32)] p-6 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-[43px] hidden h-[217px] w-[326px] lg:block"
          >
            <AfricaMark sizes="326px" className="opacity-[0.10]" />
          </div>
          <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <span className="flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-full border border-white bg-[#16A34A] text-white">
                <Star size={64} strokeWidth={1.5} />
              </span>
              <div className="max-w-[575px]">
                <h3 className="text-[24px] font-semibold tracking-[-0.01em] text-[#16233B]">
                  Evidence Today. Impact Tomorrow.
                </h3>
                <p className="mt-2 text-[14px] leading-7 text-[#64748B]">
                  Together with governments, development partners, researchers, and communities,
                  we&apos;re building a stronger, more resilient Africa through knowledge,
                  collaboration, and action.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/partner-with-us"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#16A34A] bg-[#16A34A] px-3 text-[14px] font-semibold text-white"
              >
                Become a Partner
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#16A34A] px-3 text-[14px] font-semibold text-[#16A34A]"
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
