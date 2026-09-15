import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { EmeraldButton, OutlineButton } from "../ui";

export default function AboutHero() {
  return (
    <section className="about-hero relative overflow-hidden bg-[#F8FAFC]">
      <div className="relative isolate min-h-[560px] overflow-hidden rounded-l-[32px] lg:h-[677px] lg:min-h-[677px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 left-[-28%] w-[150%]">
            <Image
              src="/images/about-acridc.png"
              alt="ACRIDC field team engaging with a community"
              fill
              priority
              sizes="180vw"
              quality={90}
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="absolute inset-0 bg-white/80 lg:hidden" />
          <div className="absolute inset-0 bg-[linear-gradient(281.73deg,rgba(0,0,0,0)_42.84%,rgba(255,255,255,0.32)_61.54%,#FFFFFF_71.07%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-end px-5 pb-12 pt-28 sm:px-10 sm:pb-16 lg:h-[677px] lg:min-h-[677px] lg:justify-start lg:px-20 lg:pb-16 lg:pt-[200px]">
          <span className="flex w-fit items-center gap-2 text-[14px] font-medium uppercase leading-[19px] tracking-[0.08em] text-[#16A34A]">
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#1E293B]" />
            About ACRIDC
          </span>
          <h1 className="mt-6 max-w-[522px] text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B]">
            Driving Research for a Sustainable Africa
          </h1>
          <p className="mt-5 max-w-[442px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            For over a decade, ACRIDC has been advancing evidence-based research,
            innovation, and partnerships that improve lives and strengthen
            communities across Africa.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-9">
            <EmeraldButton href="/research" icon={ArrowRight}>
              Explore our Research
            </EmeraldButton>
            <OutlineButton href="/contact" color="navy" icon={null}>
              Contact Us
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
