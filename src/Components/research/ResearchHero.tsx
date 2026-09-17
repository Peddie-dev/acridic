import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { EmeraldButton, OutlineButton } from "../ui";
import PhilosophyCard from "./PhilosophyCard";

export default function ResearchHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="relative isolate overflow-hidden lg:h-[677px] lg:min-h-[677px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden overflow-hidden lg:left-[70px] lg:right-0 lg:block lg:rounded-l-[25px]">
          <Image
            src="/images/research/research-hero.png"
            alt="ACRIDC researcher examining a sample through a microscope"
            fill
            priority
            sizes="100vw"
            quality={100}
            unoptimized
            className="object-cover object-[82%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F8FAFC_12%,rgba(248,250,252,0.45)_28%,rgba(248,250,252,0)_48%)]" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(100%,1521px)] bg-[linear-gradient(186.09deg,#FFFFFF_31.67%,rgba(255,255,255,0.1)_78.01%)] lg:hidden"
        />

        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-5 pt-10 sm:px-8 md:px-10 lg:h-[677px] lg:min-h-[677px] lg:justify-start lg:px-12 lg:pb-16 lg:pt-[152px] xl:px-20">
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

          <span className="flex w-fit items-center gap-2 text-[12px] font-semibold capitalize leading-4 tracking-[0.08em] text-[#16A34A] lg:text-[14px] lg:leading-[19px]">
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#1E293B]" />
            Research Overview
          </span>
          <h1 className="mt-3 max-w-[500px] text-[34px] font-bold leading-[120%] tracking-[-0.02em] text-[#16233B] lg:mt-3 lg:text-[48px] lg:leading-[110%]">
            Evidence That Drives{" "}
            <span className="text-[#16A34A]">Better Decisions Across Africa.</span>
          </h1>
          <p className="mt-3 max-w-[500px] text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:mt-5 lg:text-[18px] lg:leading-[175%]">
            We generate trusted evidence that informs policy, strengthens institutions, and
            empowers sustainable development across Africa.
          </p>
          <div className="mt-8 flex w-full flex-col gap-5 lg:mt-8 lg:flex-row lg:items-end lg:gap-9">
            <EmeraldButton
              href="/research/areas"
              icon={ArrowRight}
              className="h-14 w-full text-[14px] lg:w-auto lg:text-[16px]"
            >
              <span className="lg:hidden">Explore our Research</span>
              <span className="hidden lg:inline">Explore Research Areas</span>
            </EmeraldButton>
            <OutlineButton
              href="/research/publications"
              color="navy"
              className="h-14 w-full border-[#0D3B66] text-[14px] lg:w-auto lg:border-[#1E293B] lg:text-[16px]"
            >
              View Publications
            </OutlineButton>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[30px] top-[145px] hidden h-[280px] w-[285px] lg:block">
          <div className="absolute inset-0 rounded-full bg-white blur-[110px]" />
          <div className="relative mx-auto h-[267px] w-[229px]">
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
            className="absolute left-[211px] top-[117px] h-[46px] w-[46px]"
          />
        </div>

        <PhilosophyCard className="pointer-events-auto absolute right-[80px] top-[338px] z-20 hidden lg:flex lg:flex-col" />

        <div className="relative z-10 mx-auto mt-10 max-w-[1440px] px-5 pb-10 sm:px-8 lg:hidden">
          <div className="relative h-[270px] w-full overflow-hidden rounded-[24px] bg-white">
            <div className="absolute right-0 top-1 h-[266px] w-[min(100%,374px)] overflow-hidden">
              <Image
                src="/images/research/research-hero.png"
                alt="ACRIDC researcher examining a sample through a microscope"
                fill
                sizes="374px"
                quality={100}
                unoptimized
                className="object-cover object-[88%_center]"
              />
            </div>
            <PhilosophyCard compact className="absolute left-5 top-1/2 z-10 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
