import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  ChartColumn,
  UserRound,
  Eye,
  Download,
  BookOpen,
  Receipt,
} from "lucide-react";
import { Eyebrow } from "./ui";

export default function Publications() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[82px] top-2 hidden h-[385px] w-[286px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="286px"
          className="knockout-black object-contain opacity-50"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 hidden h-[362px] w-[274px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="274px"
          className="knockout-black object-contain opacity-50"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[600px] text-center">
          <Eyebrow align="center">Publications & Insights</Eyebrow>
          <h2 className="mt-6 text-[36px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] sm:text-[48px]">
            Research That Informs Policy and Practice.
          </h2>
          <p className="mt-8 text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            Explore our latest research reports, policy briefs, case studies, and
            publications driving evidence-based decision-making and sustainable development
            across Africa.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[410px_minmax(0,1fr)]">
          <article className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-white shadow-[0px_28px_64px_rgba(12,25,48,0.1)]">
            <div className="relative h-[300px] w-full">
              <Image
                src="/images/project-climate.png"
                alt=""
                fill
                sizes="410px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(30,41,59,0.2)]" />
              <span className="absolute left-6 top-6 inline-flex h-8 items-center rounded-lg bg-[#16A34A] px-2.5 text-[14px] font-semibold text-[#F8FAFC]">
                FEATURED REPORT
              </span>
            </div>
            <div className="flex flex-1 flex-col px-6 py-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-[13px] font-semibold uppercase text-[#16A34A]">
                  <ClipboardList size={24} />
                  Research Report
                </span>
                <span className="flex items-center gap-2 text-[14px] font-medium tracking-[0.02em] text-[#64748B]">
                  May 2025
                  <span className="h-1 w-1 rounded-full bg-[#64748B]" />
                  35 min read
                </span>
              </div>
              <h3 className="mt-4 text-[24px] font-semibold leading-[130%] text-[#16233B]">
                Building Resilient Food Systems in a Changing Climate
              </h3>
              <p className="mt-4 text-[16px] font-medium leading-7 text-[#5B6B82]">
                Research advancing climate-smart agriculture, food security, and community
                resilience.
              </p>
              <div className="mt-auto flex gap-5 pt-6">
                <Link
                  href="/research/food-systems"
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2.5 rounded-lg bg-[#16A34A] text-base font-semibold text-[#F8FAFC]"
                >
                  <Eye size={24} />
                  View report
                </Link>
                <Link
                  href="/research/food-systems/download"
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#64748B] text-base font-semibold text-[#64748B]"
                >
                  <Download size={24} />
                  Download PDF
                </Link>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <article className="relative min-h-[305px] overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-[#F0FDF4] shadow-[0px_28px_64px_rgba(12,25,48,0.1)]">
              <div className="relative z-10 max-w-[410px] p-6">
                <span className="flex items-center gap-2 text-[13px] font-semibold uppercase text-[#16A34A]">
                  <ClipboardList size={24} />
                  Policy Brief
                </span>
                <h3 className="mt-4 max-w-[261px] text-[18px] font-semibold leading-[130%] text-[#16233B]">
                  Strengthening Local Governance for Sustainable Development
                </h3>
                <p className="mt-6 max-w-[362px] text-[16px] font-medium leading-7 text-[#5B6B82]">
                  Actionable policy recommendations that promote transparent governance,
                  institutional resilience, and inclusive public service delivery.
                </p>
                <Link
                  href="/research/local-governance"
                  className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-[#16A34A]"
                >
                  Read Brief
                  <ArrowRight size={24} />
                </Link>
              </div>
              <div className="pointer-events-none absolute -right-8 bottom-0 hidden h-[274px] w-[413px] lg:block">
                <span className="absolute right-8 top-12 h-[343px] w-[343px] rounded-full bg-[#E9F7ED]" />
                <Image
                  src="/images/dotted-africa.png"
                  alt=""
                  fill
                  sizes="413px"
                  className="knockout-black object-contain object-right"
                />
              </div>
            </article>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <article className="min-h-[275px] rounded-[24px] border border-[#EEF2F7] bg-white p-6 shadow-[0px_28px_64px_rgba(12,25,48,0.1)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-[13px] font-semibold uppercase text-[#2563EB]">
                    <ChartColumn size={24} />
                    Research Insight
                  </span>
                  <span className="flex items-center gap-2 text-[14px] font-medium text-[#64748B]">
                    May 2025
                    <span className="h-1 w-1 rounded-full bg-[#64748B]" />
                    8 min read
                  </span>
                </div>
                <div className="mt-6 flex gap-3">
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B]">
                      Youth Employment Trends Across East Africa
                    </h3>
                    <p className="mt-3 text-[16px] font-medium leading-7 text-[#5B6B82]">
                      Explore emerging labour market trends.
                    </p>
                    <Link
                      href="/research/youth-employment"
                      className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-[#2563EB]"
                    >
                      Read Brief
                      <ArrowRight size={24} />
                    </Link>
                  </div>
                  <div className="relative hidden h-[128px] w-[128px] shrink-0 sm:block">
                    <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
                      <circle cx="64" cy="64" r="52" fill="none" stroke="#E2F7F4" strokeWidth="16" />
                      <circle
                        cx="64"
                        cy="64"
                        r="52"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="16"
                        strokeDasharray="245 327"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[17px] font-bold text-[#2563EB]">
                      67%
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-center text-[12px] font-medium leading-4 tracking-[0.02em] text-[#64748B]">
                  Youth unemployment Rate
                </p>
              </article>

              <article className="relative min-h-[275px] overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-white p-6 shadow-[0px_28px_64px_rgba(12,25,48,0.1)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-[13px] font-semibold uppercase text-[#9D6B17]">
                    <UserRound size={24} />
                    Case Study
                  </span>
                  <span className="flex items-center gap-2 text-[14px] font-medium text-[#64748B]">
                    May 2025
                    <span className="h-1 w-1 rounded-full bg-[#64748B]" />
                    12 min read
                  </span>
                </div>
                <div className="mt-5 flex gap-4">
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B]">
                      Community-Led Water Security in Kenya
                    </h3>
                    <p className="mt-3 text-[16px] font-medium leading-7 text-[#5B6B82]">
                      Learn how collaborative research and community resilience.
                    </p>
                    <Link
                      href="/research/water-security"
                      className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-[#9D6B17]"
                    >
                      Read Brief
                      <ArrowRight size={24} />
                    </Link>
                  </div>
                  <div className="relative hidden h-[170px] w-[126px] shrink-0 overflow-hidden rounded-[18px] sm:block">
                    <Image
                      src="/images/project-agriculture.png"
                      alt=""
                      fill
                      sizes="126px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-6 flex min-h-[143px] flex-col items-start justify-between gap-6 rounded-[28px] border border-white/24 bg-white/32 px-6 py-6 shadow-[0px_18px_60px_-10px_rgba(15,23,42,0.12)] backdrop-blur-[12px] lg:flex-row lg:items-center">
          <div className="flex items-end gap-6">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-[rgba(22,163,74,0.12)] text-[#16A34A]">
              <BookOpen size={32} />
            </span>
            <div>
              <h3 className="text-[24px] font-semibold leading-[130%] text-[#16233B]">
                Explore Our Research Library
              </h3>
              <p className="mt-2 max-w-[529px] text-[16px] font-medium leading-7 text-[#5B6B82]">
                Access research reports, policy briefs, case studies, and publications
                shaping evidence-based decisions across Africa.
              </p>
            </div>
          </div>
          <Link
            href="/research"
            className="inline-flex h-[72px] items-center gap-4 rounded-xl bg-[#16A34A] px-4 text-white"
          >
            <Receipt size={32} />
            <span className="text-[18px] font-semibold leading-8 tracking-[-0.01em]">
              Explore our Reports
            </span>
            <ArrowRight size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
