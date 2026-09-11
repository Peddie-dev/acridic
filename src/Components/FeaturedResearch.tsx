import Image from "next/image";
import Link from "next/link";
import {
  Download,
  BookOpen,
  Book,
  Globe,
  Users,
  FileText,
  Calendar,
  Menu,
  Folder,
  Shield,
  Printer,
  Landmark,
  Clipboard,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EmeraldButton, OutlineButton, TextArrowLink } from "./ui";

interface ReportStat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

interface KnowledgeProduct {
  icon: LucideIcon;
  value: string;
  label: string;
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

const KNOWLEDGE_PRODUCTS: KnowledgeProduct[] = [
  { icon: BookOpen, value: "14", label: "Books" },
  { icon: Book, value: "14", label: "Manuals" },
  { icon: Globe, value: "12", label: "Journals" },
  { icon: Menu, value: "12", label: "Guidelines" },
  { icon: FileText, value: "3+", label: "Research Reports" },
  { icon: Folder, value: "3+", label: "Technical Reports" },
  { icon: Shield, value: "12", label: "Policy briefs" },
  { icon: Printer, value: "12", label: "Scientific Publications" },
  { icon: Landmark, value: "12", label: "Educational publications" },
  { icon: Clipboard, value: "12", label: "Research and learning resources" },
];

function ReportCover() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[336px] lg:mx-0">
      <div className="relative aspect-[336/535] w-full overflow-hidden rounded-[18px] bg-[#0B1B33] shadow-[0px_30px_80px_rgba(0,0,0,0.18)]">
        <div className="absolute left-1/2 top-[18%] h-[72%] w-[88%] -translate-x-1/2 rounded-full bg-[rgba(34,197,94,0.14)]" />
        <div className="absolute inset-x-[10%] top-[12%] bottom-[28%]">
          <Image
            src="/images/dotted-africa.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 336px, 40vw"
            className="object-contain object-center mix-blend-screen brightness-125 saturate-150"
          />
        </div>
        <div className="relative flex h-full flex-col justify-between p-4 text-white sm:p-5 min-[1440px]:p-6">
          <div className="flex items-start justify-between gap-2">
            <Image
              src="/images/acridic-research-logo.png"
              alt="ACRIDC"
              width={158}
              height={38}
              className="h-auto w-[min(140px,52%)] object-contain mix-blend-screen"
            />
            <span className="shrink-0 rounded-full border border-white/80 bg-white/10 px-2 py-1 text-[10px] font-semibold leading-[18px] tracking-[0.04em] sm:px-2.5 sm:py-1.5 sm:text-[13px]">
              2025 EDITION
            </span>
          </div>
          <div className="max-w-[200px]">
            <span className="text-[20px] font-semibold leading-[110%] tracking-[-0.02em] text-[#16A34A] min-[1440px]:text-[24px]">
              2025
            </span>
            <span className="mt-2 block h-px w-10 bg-[#16A34A]" />
            <h3 className="mt-2 text-[16px] font-semibold leading-[22px] min-[1440px]:text-[20px] min-[1440px]:leading-[27px]">
              State of Research &amp; Innovation in Africa 2025
            </h3>
            <p className="mt-2 text-[12px] font-medium leading-[18px] tracking-[-0.02em] text-[#F8FAFC] min-[1440px]:text-[14px] min-[1440px]:leading-[19px]">
              Comprehensive research and policy insights.
            </p>
          </div>
        </div>
      </div>
      <Link
        href="/research/state-of-research-2025/download"
        aria-label="Download report"
        className="absolute bottom-0 right-2 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white bg-white text-[#16A34A] shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_rgba(0,0,0,0.3)] min-[1440px]:h-[72px] min-[1440px]:w-[72px] min-[1440px]:translate-x-2"
      >
        <Download className="h-5 w-5 min-[1440px]:h-7 min-[1440px]:w-7" />
      </Link>
    </div>
  );
}

export default function FeaturedResearch() {
  return (
    <section className="relative overflow-x-clip bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:py-[104px]">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[min(4%,80px)] hidden h-[320px] w-[420px] rounded-full bg-[rgba(34,197,94,0.1)] blur-[70px] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[6%] left-[min(18%,280px)] hidden h-[300px] w-[260px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="260px"
          className="knockout-black object-contain opacity-[0.22]"
        />
      </div>

      <div className="relative mx-auto flex w-full min-w-0 max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
        <div className="relative z-10 w-full min-w-0 shrink-0 lg:w-[min(30%,360px)] lg:pt-8">
          <span className="flex items-center gap-2 text-[12px] font-medium uppercase leading-[19px] tracking-[0.08em] text-[#16A34A] lg:hidden">
            <span className="h-1 w-1 rounded-full bg-[#1E293B]" />
            Featured Research
          </span>
          <span className="hidden items-center gap-2 text-[12px] font-medium uppercase leading-[19px] tracking-[0.08em] text-[#16A34A] lg:flex">
            <span className="h-1 w-1 rounded-full bg-[#1E293B]" />
            Publications &amp; Insights
          </span>
          <h2 className="mt-6 text-[clamp(1.5rem,1rem+1.6vw,1.875rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:hidden">
            Evidence that drives change.
          </h2>
          <h2 className="mt-6 hidden text-[36px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:block min-[1440px]:text-[48px]">
            Publications &amp; Insights
          </h2>
          <p className="mt-6 max-w-[440px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:hidden">
            Our research transforms complex challenges into practical insights that inform
            policy, strengthen institutions, and create lasting impact across Africa.
          </p>
          <p className="mt-6 hidden max-w-[410px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:block">
            ACRIDC–Africa is committed to generating, documenting, preserving, disseminating
            and translating knowledge into policy, practice and innovation.
          </p>
          <div className="mt-8 w-full max-w-[400px]">
            <OutlineButton
              href="/research"
              className="w-full !h-14 !rounded-[14px] border-[#16A34A] text-[#16A34A] lg:w-auto lg:!rounded-full"
            >
              Explore All Research
            </OutlineButton>
          </div>
        </div>

        <div
          id="featured-research-card"
          className="relative min-w-0 w-full flex-1 overflow-hidden rounded-[32px] bg-white p-6 shadow-[0px_24px_60px_-12px_rgba(15,23,42,0.18)] sm:p-8 lg:overflow-visible lg:p-6 min-[1440px]:p-10"
        >
          <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-6 min-[1440px]:grid-cols-[minmax(0,336px)_minmax(0,1fr)] min-[1440px]:gap-10">
            <ReportCover />

            <div className="min-w-0 lg:hidden">
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
                        <span className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[rgba(22,163,74,0.12)] text-[#16A34A]">
                          <Icon size={22} strokeWidth={2} />
                        </span>
                        <div className="min-w-0 shrink text-center sm:w-[82px]">
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

              <div className="mt-10 flex w-full max-w-[400px] flex-col items-stretch gap-6 sm:flex-row sm:flex-wrap sm:items-center">
                <EmeraldButton href="/research/state-of-research-2025/download" icon={Download}>
                  Download Report
                </EmeraldButton>
                <TextArrowLink href="/research/state-of-research-2025">Read Summary</TextArrowLink>
              </div>
            </div>

            <div className="hidden min-w-0 flex-col lg:flex">
              <h3 className="text-[18px] font-semibold leading-[130%] tracking-[-0.02em] text-[#16233B] min-[1440px]:text-[24px] min-[1440px]:leading-[110%]">
                Our knowledge products may include:
              </h3>
              <div className="mt-6 grid min-w-0 grid-cols-2 gap-x-4 gap-y-5 min-[1440px]:mt-8 min-[1440px]:gap-x-6 min-[1440px]:gap-y-6">
                {KNOWLEDGE_PRODUCTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-start gap-2.5 min-[1440px]:gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF9EE] text-[#16A34A] min-[1440px]:h-[60px] min-[1440px]:w-[60px] min-[1440px]:rounded-2xl">
                        <Icon className="h-5 w-5 min-[1440px]:h-6 min-[1440px]:w-6" strokeWidth={2} />
                      </span>
                      <div className="min-w-0 overflow-hidden">
                        <p className="text-[22px] font-medium leading-none tracking-[-0.02em] text-[#1E293B] min-[1440px]:text-[32px] min-[1440px]:leading-[36px]">
                          {item.value}
                        </p>
                        <p className="mt-1 break-words text-[12px] font-medium leading-[16px] tracking-[-0.02em] text-[#64748B] min-[1440px]:text-[14px] min-[1440px]:leading-[19px]">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/research"
                className="mt-8 inline-flex items-center gap-3 self-end text-base font-semibold text-[#16A34A] min-[1440px]:mt-auto min-[1440px]:pt-10"
              >
                View All
                <ArrowRight size={24} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
