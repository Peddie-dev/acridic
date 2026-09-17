import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { EmeraldButton, OutlineButton } from "../ui";

export default function AboutHero() {
  return (
    <section className="about-hero relative overflow-hidden bg-[#F8FAFC]">
      <div className="relative isolate overflow-hidden lg:h-[677px] lg:min-h-[677px] lg:rounded-l-[32px]">
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <div className="absolute inset-y-0 left-[-28%] w-[150%]">
            <Image
              src="/images/about-acridc.png"
              alt="ACRIDC field team engaging with a community"
              fill
              priority
              sizes="180vw"
              quality={100}
              unoptimized
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(281.73deg,rgba(0,0,0,0)_42.84%,rgba(255,255,255,0.32)_61.54%,#FFFFFF_71.07%)]" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(100%,1521px)] bg-[linear-gradient(186.09deg,#FFFFFF_31.67%,rgba(255,255,255,0.1)_78.01%)] lg:hidden"
        />

        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-5 pt-10 sm:px-8 md:px-10 lg:h-[677px] lg:min-h-[677px] lg:justify-start lg:px-20 lg:pb-16 lg:pt-[200px]">
          <span className="flex w-fit items-center gap-2 text-[12px] font-medium capitalize leading-4 tracking-[0.08em] text-[#16A34A] lg:text-[14px] lg:uppercase lg:leading-[19px]">
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#1E293B]" />
            About ACRIDC
          </span>
          <h1 className="mt-1 max-w-[522px] text-[34px] font-bold leading-[120%] tracking-[-0.02em] text-[#16233B] lg:mt-6 lg:text-[clamp(1.875rem,1rem+2.6vw,3rem)] lg:leading-[110%]">
            Driving Research for a Sustainable Africa
          </h1>
          <p className="mt-3 max-w-[442px] text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:mt-5 lg:text-[18px] lg:leading-[175%]">
            For over a decade, ACRIDC has been advancing evidence-based research,
            innovation, and partnerships that improve lives and strengthen
            communities across Africa.
          </p>
          <div className="mt-8 flex w-full flex-col gap-5 lg:mt-10 lg:flex-row lg:items-end lg:gap-9">
            <EmeraldButton href="/research" icon={ArrowRight} className="h-14 w-full text-[14px] lg:w-auto">
              Explore our Research
            </EmeraldButton>
            <OutlineButton
              href="#who-we-are"
              color="navy"
              icon={null}
              className="h-14 w-full text-[14px] lg:!hidden"
            >
              Our Story
            </OutlineButton>
            <OutlineButton
              href="/contact"
              color="navy"
              icon={null}
              className="!hidden lg:!inline-flex"
            >
              Contact Us
            </OutlineButton>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-[1440px] px-5 pb-10 sm:px-8 lg:hidden">
          <div className="relative aspect-[400/300] w-full overflow-hidden rounded-[24px]">
            <Image
              src="/images/about-acridc.png"
              alt="ACRIDC field team engaging with a community"
              fill
              sizes="400px"
              quality={100}
              unoptimized
              className="origin-right scale-[1.22] object-cover object-[100%_52%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
