import Image from "next/image";
import { Globe, Briefcase, UserRound, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow, OutlineButton } from "./ui";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: Globe, value: "18+", label: "Countries" },
  { icon: Briefcase, value: "250+", label: "Research Projects" },
  { icon: UserRound, value: "35+", label: "Strategic Partners" },
  { icon: Heart, value: "1.2M+", label: "Lives Reached" },
];

export default function OurImpact() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-400px-167px)] top-[418px] hidden h-[600px] w-[800px] rounded-full bg-[linear-gradient(136.77deg,rgba(34,197,94,0.22)_24.23%,rgba(37,99,235,0)_49.95%)] blur-[70px] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-140px] top-[297px] hidden h-[600px] w-[800px] rounded-full bg-[linear-gradient(180deg,rgba(34,197,94,0.1)_0%,rgba(34,197,94,0)_100%)] blur-[60px] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-[722px] w-[619px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="619px"
          className="knockout-black object-contain object-top opacity-90"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <div className="max-w-[600px]">
          <Eyebrow>Our Impact</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B]">
            Creating measurable
            <br />
            change across Africa.
          </h2>
          <p className="mt-6 max-w-[440px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            Delivering research, innovation, and partnerships that improve lives across
            Africa.
          </p>
          <div className="mt-6 w-full max-w-[400px]">
            <OutlineButton href="/impact" className="w-full lg:w-auto">
              View Impact Report
            </OutlineButton>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-16">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-16 overflow-hidden rounded-[32px] lg:hidden">
            <Image
              src="/images/about-acridc.png"
              alt=""
              fill
              sizes="400px"
              className="object-cover object-[70%_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20" />
          </div>

          <div className="relative rounded-[32px] border border-white/55 bg-white/70 px-5 py-8 shadow-[0px_20px_60px_-10px_rgba(15,23,42,0.08)] backdrop-blur-[12px] sm:px-8 sm:py-12 lg:bg-white/40 lg:px-12 xl:px-[75px] xl:py-[54px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-[48px]">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex min-w-0 items-center gap-4 xl:gap-8">
                  {i > 0 && (
                    <span className="hidden h-[140px] w-px shrink-0 bg-[rgba(203,213,225,0.35)] lg:block" />
                  )}
                  <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center sm:gap-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#F3F8F5] text-[#16A34A] lg:h-[72px] lg:w-[72px] lg:rounded-full lg:border lg:border-white/70 lg:bg-[rgba(248,251,249,0.85)] lg:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] lg:backdrop-blur-[6px]">
                      <Icon size={22} strokeWidth={1.75} className="lg:h-7 lg:w-7" />
                    </span>
                    <div>
                      <p className="font-display text-[clamp(2rem,1.2rem+3vw,4.5rem)] font-bold leading-none text-[#0F172A] xl:leading-[1.15]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[14px] font-medium leading-[19px] text-[#64748B] lg:text-[20px] lg:leading-[27px]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
