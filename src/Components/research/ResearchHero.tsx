import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { EmeraldButton, OutlineButton } from "../ui";
import PhilosophyCard from "./PhilosophyCard";

export default function ResearchHero() {
  return (
    <section className="research-hero relative overflow-hidden bg-[#F8FAFC]">
      <div className="relative isolate overflow-hidden lg:h-[677px] lg:min-h-[677px]">
        <div className="pointer-events-none absolute inset-y-0 left-[70px] right-0 hidden overflow-hidden rounded-l-[25.21px] lg:block">
          <Image
            src="/images/research/research-hero.png"
            alt="ACRIDC researcher examining a sample through a microscope"
            width={1536}
            height={1024}
            priority
            quality={100}
            unoptimized
            className="absolute max-w-none"
            style={{ width: 1801, height: 1200, left: -380, top: -72 }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F8FAFC_10%,rgba(248,250,252,0.78)_22%,rgba(248,250,252,0.28)_34%,rgba(248,250,252,0)_48%)]" />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(100%,1521px)] bg-[linear-gradient(186.09deg,#FFFFFF_31.67%,rgba(255,255,255,0.1)_78.01%)] lg:hidden"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 pt-10 sm:px-8 lg:h-[677px] lg:min-h-[677px] lg:px-20 lg:pt-[152px] lg:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 hidden items-center gap-2 text-[14px] font-semibold capitalize tracking-[0.02em] text-[#64748B] lg:flex"
          >
            <Link href="/" className="hover:text-[#16A34A]">
              Home
            </Link>
            <ChevronRight size={20} strokeWidth={1.6} className="text-[#64748B]" />
            <Link href="/research" className="hover:text-[#16A34A]">
              Research
            </Link>
            <ChevronRight size={20} strokeWidth={1.6} className="text-[#64748B]" />
            <span className="text-[#16A34A]">Research Overview</span>
          </nav>

          <div className="flex w-full max-w-[631px] flex-col gap-5">
            <div className="flex max-w-[500px] flex-col gap-3">
              <span className="flex w-fit items-center gap-2 text-[12px] font-semibold uppercase leading-4 tracking-[0.08em] text-[#16A34A] lg:text-[14px] lg:leading-[19px]">
                <span className="h-1 w-1 shrink-0 rounded-full bg-[#1E293B]" />
                Research Overview
              </span>
              <h1 className="text-[34px] font-bold leading-[120%] tracking-[-0.02em] text-[#16233B] lg:text-[48px] lg:leading-[110%]">
                Evidence That Drives{" "}
                <span className="text-[#16A34A]">Better Decisions Across Africa.</span>
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <p className="max-w-[500px] text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:text-[18px] lg:leading-[175%]">
                We generate trusted evidence that informs policy, strengthens institutions, and
                empowers sustainable development across Africa.
              </p>
              <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-end lg:gap-9">
                <EmeraldButton
                  href="/research/areas"
                  icon={ArrowRight}
                  className="h-14 w-full gap-2 text-[14px] lg:w-auto lg:gap-5 lg:text-[16px]"
                >
                  <span className="lg:hidden">Explore our Research</span>
                  <span className="hidden lg:inline">Explore Research Areas</span>
                </EmeraldButton>
                <OutlineButton
                  href="/research/publications"
                  color="navy"
                  className="h-14 w-full gap-2 border-[#0D3B66] text-[14px] lg:w-auto lg:gap-5 lg:border-[1.5px] lg:border-[#1E293B] lg:text-[16px]"
                >
                  View Publications
                </OutlineButton>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute top-[145px] right-[30px] z-[15] hidden h-[280px] w-[285px] lg:block">
          <div className="absolute inset-0 rounded-full bg-white blur-[110px]" />
          <div className="absolute top-1/2 left-1/2 h-[267px] w-[229px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/research/research-africa.png"
              alt=""
              fill
              sizes="230px"
              className="knockout-black object-contain"
            />
          </div>
          <Image
            src="/images/research/location-pin.svg"
            alt=""
            width={46}
            height={46}
            className="absolute top-[117px] left-[211px] h-[46px] w-[46px]"
          />
        </div>

        <PhilosophyCard className="pointer-events-auto absolute top-[338px] right-[80px] z-20 hidden lg:flex lg:flex-col" />

        <div className="relative z-10 mx-auto mt-8 w-full max-w-[1440px] px-5 pb-10 sm:px-8 lg:hidden">
          <div className="relative h-[270px] w-full overflow-hidden rounded-[24px] bg-white">
            <div className="absolute top-1 right-0 h-[266px] w-[min(374px,100%)] overflow-hidden">
              <Image
                src="/images/research/research-hero.png"
                alt="ACRIDC researcher examining a sample through a microscope"
                width={1536}
                height={1024}
                quality={100}
                unoptimized
                className="absolute max-w-none"
                style={{ width: 450, height: 300, left: -12, top: -32 }}
              />
            </div>
            <PhilosophyCard compact className="absolute top-1/2 left-5 z-10 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
