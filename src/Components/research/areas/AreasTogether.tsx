import { Cloud, Heart, Landmark, UserRoundPlus, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AfricaMark, SectionHeading } from "../../about/shared";

const LINKS: { icon: LucideIcon; label: string; className: string }[] = [
  { icon: Cloud, label: "Agriculture + Climate", className: "left-0 top-0" },
  { icon: Heart, label: "Health + Technology", className: "right-0 top-0" },
  { icon: Landmark, label: "Governance + Data", className: "bottom-0 left-0" },
  { icon: UserRoundPlus, label: "Education + Innovation", className: "bottom-0 right-0" },
];

function LinkPill({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className: string;
}) {
  return (
    <div
      className={`absolute flex h-[28%] w-[42%] items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-2 shadow-[0px_15px_35px_rgba(12,25,48,0.1)] lg:gap-3 lg:shadow-[0px_28px_64px_rgba(12,25,48,0.1)] ${className}`}
    >
      <Icon className="h-[18px] w-[18px] shrink-0 text-[#16A34A] lg:h-8 lg:w-8" strokeWidth={1.75} />
      <span className="truncate text-[10px] font-semibold tracking-[-0.01em] text-[#16233B] lg:text-[clamp(13px,1.25vw,18px)] lg:leading-8">
        {label}
      </span>
    </div>
  );
}

export default function AreasTogether() {
  return (
    <section
      id="together"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-[100px] sm:px-8 lg:px-12 lg:py-20 min-[1440px]:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[50px] right-[-80px] hidden h-[582px] w-[559px] lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.1]" />
      </div>
      <AfricaMark
        width={90}
        height={90}
        className="pointer-events-none absolute top-1/2 right-4 hidden -translate-y-1/2 opacity-[0.18] lg:block min-[1440px]:right-8"
      />
      <AfricaMark
        sizes="440px"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[458px] w-full opacity-[0.08] lg:hidden"
      />

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-6 min-[1440px]:gap-10">
        <div className="lg:w-[min(42%,515px)] lg:shrink-0">
          <div className="lg:hidden">
            <SectionHeading
              align="center"
              eyebrow="Collaborative Research"
              title={
                <>
                  Stronger Together
                  <br />
                  Across Disciplines
                </>
              }
            />
            <p className="mt-5 text-center text-[16px] leading-[150%] tracking-[-0.02em] text-[#5B6B82]">
              Many of Africa&apos;s challenges are interconnected. By combining expertise across
              multiple research areas, we develop integrated solutions that deliver broader and more
              sustainable impact.
            </p>
          </div>
          <div className="hidden lg:block">
            <SectionHeading
              eyebrow="Collaborative Research"
              title={
                <>
                  Stronger Together
                  <br />
                  Across Disciplines
                </>
              }
              description="Many of Africa's challenges are interconnected. By combining expertise across multiple research areas, we develop integrated solutions that deliver broader and more sustainable impact."
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[400px] min-w-0 lg:max-w-none lg:flex-1">
          <div className="relative aspect-[725/260] w-full">
            <svg
              viewBox="0 0 725 260"
              fill="none"
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <path
                d="M300 36 H362.5 V130 M425 36 H362.5 M300 224 H362.5 V130 M425 224 H362.5"
                stroke="#16A34A"
                strokeWidth="3"
                strokeDasharray="7 8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {LINKS.map((link) => (
              <LinkPill key={link.label} {...link} />
            ))}

            <div className="absolute top-1/2 left-1/2 flex size-[18%] min-h-[56px] min-w-[56px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] lg:size-[88px]">
              <Users className="h-[48%] w-[48%]" strokeWidth={1.75} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
