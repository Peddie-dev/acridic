import Image from "next/image";
import Link from "next/link";
import {
  Download,
  BookOpen,
  Globe,
  Users,
  FileText,
  Calendar,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EmeraldButton, Eyebrow, OutlineButton, TextArrowLink } from "./ui";

interface ReportStat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

const REPORT_STATS: ReportStat[] = [
  {
    icon: BookOpen,
    value: "136",
    label: "Pages",
    description: "Comprehensive research and policy insights.",
  },
  {
    icon: Globe,
    value: "24",
    label: "Countries",
    description: "Evidence gathered across Africa.",
  },
  {
    icon: Users,
    value: "150+",
    label: "Contribution",
    description: "Researchers, policymakers & experts.",
  },
];

export default function FeaturedResearch() {
  return (
    <section className="relative bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[80px] top-[507px] hidden h-[279px] w-[240px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="240px"
          className="knockout-black object-contain opacity-70"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[120px] top-[200px] hidden h-[479px] w-[478px] rounded-full bg-[linear-gradient(270deg,rgba(34,197,94,0.1)_0%,rgba(34,197,94,0)_100%)] blur-[48px] lg:block"
      />

      <div className="relative mx-auto grid min-w-0 max-w-[1280px] grid-cols-1 gap-10 xl:grid-cols-[minmax(0,410px)_minmax(0,1fr)] xl:items-start">
        <div className="relative min-w-0 pt-6 xl:pt-[80px]">
          <Eyebrow>Featured Research</Eyebrow>
          <h2 className="mt-6 text-[36px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] sm:text-[48px]">
            Evidence that
            <br />
            drives change.
          </h2>
          <p className="mt-6 max-w-[440px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            Our research transforms complex challenges into practical insights that inform
            policy, strengthen institutions, and create lasting impact across Africa.
          </p>
          <div className="mt-8">
            <OutlineButton href="/research">Explore All Research</OutlineButton>
          </div>
        </div>

        <div className="@container relative min-w-0 overflow-visible rounded-[32px] border border-white/65 bg-white/80 p-5 shadow-[0px_24px_60px_-12px_rgba(15,23,42,0.18)] backdrop-blur-[12px] sm:p-8 sm:pb-10">
          <div className="grid min-w-0 grid-cols-1 gap-8 @[720px]:grid-cols-[minmax(200px,336px)_minmax(0,1fr)] @[720px]:items-start">
            <div className="relative mx-auto w-full max-w-[336px] @[720px]:mt-5">
              <div className="relative aspect-[336/535] overflow-hidden rounded-[18px] bg-[#0B1B33] shadow-[0px_30px_80px_rgba(0,0,0,0.18)]">
                <div className="absolute left-1/2 top-[80px] h-[272px] w-[272px] -translate-x-1/2 rounded-full bg-[rgba(34,197,94,0.12)]" />
                <div className="absolute inset-x-8 top-16 aspect-[180/210]">
                  <Image
                    src="/images/dotted-africa.png"
                    alt=""
                    fill
                    sizes="240px"
                    className="knockout-black object-contain"
                  />
                </div>
                <div className="relative flex h-full flex-col justify-between p-6 text-white">
                  <div className="flex items-start justify-between">
                    <Image
                      src="/images/acridic-research-logo.png"
                      alt="ACRIDC"
                      width={158}
                      height={38}
                      className="h-auto w-[140px] object-contain"
                    />
                    <span className="rounded-[32px] border border-[#0D3B66] bg-[rgba(13,59,102,0.32)] px-2.5 py-1.5 text-[13px] font-semibold leading-[18px]">
                      2025 EDITION
                    </span>
                  </div>
                  <div>
                    <span className="text-[24px] font-semibold leading-[110%] tracking-[-0.02em] text-[#16A34A]">
                      2025
                    </span>
                    <span className="mt-2 block h-px w-10 bg-[#16A34A]" />
                    <h3 className="mt-2 text-[20px] font-semibold leading-[27px]">
                      State of Research &amp; Innovation in Africa 2025
                    </h3>
                    <p className="mt-2 text-[14px] font-medium leading-[19px] tracking-[-0.02em] text-[#F8FAFC]">
                      Comprehensive research and policy insights.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/research/state-of-research-2025/download"
                aria-label="Download report"
                className="absolute -bottom-2 -right-2 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/70 bg-white text-[#16A34A] shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_rgba(0,0,0,0.3)]"
              >
                <Download size={28} />
              </Link>
            </div>

            <div className="min-w-0 pt-0 @[720px]:pt-5">
              <span className="inline-flex h-8 items-center rounded-[32px] bg-[rgba(22,163,74,0.12)] px-4 text-[13px] font-semibold uppercase text-[#0D3B66]">
                Annual Reports
              </span>
              <h3 className="mt-5 max-w-[392px] text-[28px] font-semibold leading-[110%] tracking-[-0.02em] text-[#16233B] sm:text-[32px]">
                State of Research &amp; Innovation in Africa 2025
              </h3>
              <p className="mt-5 max-w-[392px] text-[18px] font-medium leading-[175%] tracking-[-0.02em] text-[#64748B]">
                A flagship publication exploring emerging research trends, innovation
                ecosystems, policy priorities across Africa.
              </p>

              <div className="mt-8 flex max-w-[388px] flex-col gap-5">
                <span className="h-px w-full bg-[#E2E8F0]" />
                <div className="flex flex-wrap items-center gap-3 text-[14px] font-medium leading-[19px] text-[#828EA0]">
                  <span className="flex items-center gap-2">
                    <Calendar size={20} strokeWidth={1.5} />
                    Published 2025
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#828EA0]" />
                  <span className="flex items-center gap-2">
                    <FileText size={20} strokeWidth={1.5} />
                    PDF
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#828EA0]" />
                  <span>136 Pages</span>
                </div>
                <span className="h-px w-full bg-[#E2E8F0]" />
              </div>

              <div className="mt-8 flex flex-col gap-8">
                {REPORT_STATS.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex min-w-0 items-center gap-4 sm:gap-5">
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[rgba(22,163,74,0.12)] text-[#16A34A]">
                          <Icon size={24} strokeWidth={2} />
                        </span>
                        <div className="w-[82px] text-center">
                          <p className="text-[32px] font-medium leading-[44px] tracking-[-0.02em] text-[#1E293B]">
                            {stat.value}
                          </p>
                          <p className="text-[14px] font-medium leading-[19px] tracking-[-0.02em] text-[#64748B]">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                      <span className="h-[60px] w-px shrink-0 bg-[rgba(203,213,225,0.35)]" />
                      <p className="min-w-0 flex-1 break-words text-[14px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
                <EmeraldButton href="/research/state-of-research-2025/download" icon={Download}>
                  Download Report
                </EmeraldButton>
                <TextArrowLink href="/research/state-of-research-2025">
                  Read Summary
                </TextArrowLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
