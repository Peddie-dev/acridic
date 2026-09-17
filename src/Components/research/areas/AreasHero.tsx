import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { EmeraldButton, OutlineButton, Eyebrow } from "../../ui";

function HeroPhoto({
  sizes,
  className = "",
}: {
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src="/images/research/research-areas-hero.png"
      alt="ACRIDC researcher taking field notes on a clipboard"
      fill
      priority
      quality={100}
      unoptimized
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}

export default function AreasHero() {
  return (
    <section className="research-areas-hero relative overflow-hidden bg-[#F8FAFC] lg:h-[768px]">
      <div className="relative h-[400px] w-full overflow-hidden lg:hidden">
        <HeroPhoto sizes="100vw" className="object-[70%_center]" />
      </div>

      {/* Composed Figma right side: photo + mint disc + Africa. No extra overlays. */}
      <div className="pointer-events-none absolute right-0 bottom-0 hidden overflow-hidden lg:top-[96px] lg:block lg:w-[min(940px,calc(100%-500px))]">
        <HeroPhoto
          sizes="940px"
          className="object-[58%_top] min-[1440px]:object-[8%_top]"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-start px-5 py-10 sm:px-8 lg:px-20 lg:pt-[152px] lg:pb-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 hidden items-center gap-2 text-[14px] font-semibold capitalize tracking-[0.02em] text-[#64748B] lg:flex"
        >
          <Link href="/" className="hover:text-[#16A34A]">
            Home
          </Link>
          <ChevronRight size={20} strokeWidth={1.6} className="text-[#64748B]" />
          <Link href="/research" className="hover:text-[#16A34A]">
            Research
          </Link>
          <ChevronRight size={20} strokeWidth={1.6} className="text-[#64748B]" />
          <span className="text-[#16A34A]">Research Areas</span>
        </nav>

        <div className="flex w-full max-w-[500px] flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Eyebrow>Research Areas</Eyebrow>
            <h1 className="text-[34px] font-bold leading-[120%] tracking-[-0.02em] text-[#16233B] lg:text-[48px] lg:leading-[110%]">
              Research That
              <br />
              Addresses Africa&apos;s
              <br />
              <span className="text-[#16A34A]">Priority Challenges.</span>
            </h1>
          </div>
          <p className="text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:text-[18px] lg:leading-[175%]">
            We deliver multidisciplinary research that generates evidence, informs policy, and
            supports sustainable development across the continent.
          </p>
          <div className="flex w-full flex-nowrap items-center gap-5 lg:gap-9">
            <EmeraldButton
              href="/research/publications"
              icon={ArrowRight}
              className="h-14 w-full shrink-0 gap-2 whitespace-nowrap text-[14px] sm:w-auto lg:gap-5 lg:text-[16px]"
            >
              Explore Publications
            </EmeraldButton>
            <OutlineButton
              href="/contact"
              color="navy"
              className="max-lg:!hidden h-14 shrink-0 gap-5 whitespace-nowrap border-[#0D3B66] text-[16px] lg:border-[1.5px] lg:border-[#1E293B]"
            >
              Contact Our Team
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
