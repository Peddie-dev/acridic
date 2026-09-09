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
    <section className="relative min-w-0 overflow-x-clip bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[clamp(0px,6vw,82px)] top-2 hidden h-[385px] w-[286px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="286px"
          className="knockout-black object-contain opacity-[0.14] grayscale"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[clamp(8px,4vw,24px)] top-6 hidden h-[362px] w-[274px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="274px"
          className="knockout-black object-contain opacity-[0.14] grayscale"
        />
      </div>

      <div className="relative mx-auto w-full min-w-0 max-w-[1280px]">
        <div className="mx-auto max-w-[600px] text-center">
          <Eyebrow align="center">RESEARCH, INNOVATION &amp; KNOWLEDGE</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B]">
            Research. Evidence.{" "}
            <span className="text-[#16A34A]">Innovation. Impact.</span>
          </h2>
          <p className="mt-8 text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            ACRIDC-Africa generates, documents, preserves, disseminates, and translates
            knowledge into policy, practice, and innovation.
          </p>
        </div>

        <div className="mt-12 grid w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,410px)_minmax(0,1fr)]">
          <article className="relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-white shadow-[0px_28px_64px_rgba(12,25,48,0.1)] lg:min-h-[600px]">
            <div className="relative h-[220px] w-full min-w-0 sm:h-[260px] lg:h-[300px]">
              <Image
                src="/images/project-climate.png"
                alt="Mountain valley with wind turbines and a river"
                fill
                sizes="(max-width: 1024px) 100vw, 410px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(30,41,59,0.2)]" />
              <span className="absolute left-6 top-6 inline-flex h-8 items-center rounded-full bg-[#16A34A] px-3 text-[14px] font-semibold text-[#F8FAFC]">
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
                Research
              </h3>
              <p className="mt-4 text-[16px] font-medium leading-7 text-[#5B6B82]">
                High-quality research, operational research, implementation science, surveys,
                evaluations, assessments and policy analysis.
              </p>
              <div className="mt-auto flex min-w-0 gap-4 pt-6 sm:gap-5">
                <Link
                  href="/research/food-systems"
                  className="inline-flex h-12 min-w-0 flex-1 items-center justify-center gap-2.5 rounded-lg bg-[#16A34A] px-2 text-sm font-semibold text-[#F8FAFC] sm:text-base"
                >
                  <Eye size={24} />
                  View report
                </Link>
                <Link
                  href="/research/food-systems/download"
                  className="inline-flex h-12 min-w-0 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#64748B] px-2 text-sm font-semibold text-[#64748B] sm:text-base"
                >
                  <Download size={24} />
                  Download PDF
                </Link>
              </div>
            </div>
          </article>

          <div className="flex min-w-0 flex-col gap-6">
            <article className="relative min-h-0 min-w-0 overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-[#F0FDF4] shadow-[0px_28px_64px_rgba(12,25,48,0.1)] lg:min-h-[305px]">
              <div className="relative z-10 max-w-[410px] p-6 lg:pr-0">
                <span className="flex items-center gap-2 text-[13px] font-semibold uppercase text-[#16A34A]">
                  <ClipboardList size={24} />
                  Innovation Brief
                </span>
                <h3 className="mt-4 text-[18px] font-semibold leading-[130%] text-[#16233B]">
                  Innovation
                </h3>
                <p className="mt-6 max-w-[362px] text-[16px] font-medium leading-7 text-[#5B6B82]">
                  Science, technology, digital transformation, artificial intelligence and
                  adaptive approaches to complex development challenges.
                </p>
                <Link
                  href="/research/local-governance"
                  className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-[#16A34A]"
                >
                  Read Brief
                  <ArrowRight size={24} />
                </Link>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(52%,430px)] lg:block">
                <span className="absolute right-[-40px] top-10 size-[280px] rounded-full bg-[#E9F7ED]" />
                <div className="absolute bottom-[-8px] right-[-12px] h-[290px] w-[380px] max-w-[110%]">
                  <Image
                    src="/images/innovation-brief.png"
                    alt="Innovation Brief"
                    fill
                    sizes="380px"
                    className="object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </article>

            <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
              <article className="min-h-0 min-w-0 rounded-[24px] border border-[#EEF2F7] bg-white p-6 shadow-[0px_28px_64px_rgba(12,25,48,0.1)] lg:min-h-[275px]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-[13px] font-semibold uppercase text-[#2563EB]">
                    <ChartColumn size={24} />
                    Knowledge Insight
                  </span>
                  <span className="flex items-center gap-2 text-[14px] font-medium text-[#64748B]">
                    May 2025
                    <span className="h-1 w-1 rounded-full bg-[#64748B]" />
                    8 min read
                  </span>
                </div>
                <div className="mt-6 flex min-w-0 items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B]">
                      Knowledge Translation
                    </h3>
                    <p className="mt-3 text-[16px] font-medium leading-7 text-[#5B6B82]">
                      Turning evidence and knowledge into policy, practice and innovation.
                    </p>
                    <Link
                      href="/research/youth-employment"
                      className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-[#2563EB]"
                    >
                      Read Brief
                      <ArrowRight size={24} />
                    </Link>
                  </div>
                  <div className="hidden w-[128px] shrink-0 flex-col items-center sm:flex">
                    <div className="relative h-[128px] w-[128px]">
                      <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="52"
                          fill="none"
                          stroke="#E2F7F4"
                          strokeWidth="16"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="52"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="16"
                          strokeDasharray="235.24 326.73"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[17px] font-bold text-[#2563EB]">
                        72%
                      </span>
                    </div>
                    <p className="mt-2 text-center text-[12px] font-medium leading-4 tracking-[0.02em] text-[#64748B]">
                      Youth unemployment Rate
                    </p>
                  </div>
                </div>
              </article>

              <article className="relative min-h-0 min-w-0 overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-white p-6 shadow-[0px_28px_64px_rgba(12,25,48,0.1)] lg:min-h-[275px]">
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
                <div className="mt-5 flex min-w-0 gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B]">
                      Capacity Development
                    </h3>
                    <p className="mt-3 text-[16px] font-medium leading-7 text-[#5B6B82]">
                      Education, leadership, fellowships, internships, mentorship...
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
                      alt="Researcher with a tablet in an agricultural field"
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

        <div className="mt-6 flex min-h-[143px] min-w-0 flex-col items-start justify-between gap-6 overflow-x-clip rounded-[28px] border border-[#EEF2F7] bg-white px-6 py-6 shadow-[0px_18px_60px_-10px_rgba(15,23,42,0.12)] lg:flex-row lg:items-center">
          <div className="flex min-w-0 items-end gap-6">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-[rgba(22,163,74,0.12)] text-[#16A34A]">
              <BookOpen size={32} />
            </span>
            <div className="min-w-0">
              <h3 className="text-[24px] font-semibold leading-[130%] text-[#16233B]">
                Explore Our Research Library
              </h3>
              <p className="mt-2 max-w-[529px] text-[16px] font-medium leading-7 text-[#5B6B82]">
                Access research reports, policy briefs, case studies, and publications
                shaping evidence-based decisions across Africa.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-center gap-6 self-stretch lg:self-auto">
            <span aria-hidden className="hidden h-20 w-px shrink-0 bg-[#D1D7DF] lg:block" />
            <Link
              href="/research"
              className="inline-flex h-[72px] min-w-0 flex-1 items-center justify-center gap-4 rounded-xl bg-[#16A34A] px-4 text-white lg:flex-none"
            >
              <Receipt size={32} />
              <span className="text-[18px] font-semibold leading-8 tracking-[-0.01em]">
                Explore our Reports
              </span>
              <ArrowRight size={32} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
