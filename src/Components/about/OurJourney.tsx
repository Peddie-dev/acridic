import { Flag, Maximize2, Users, TrendingUp, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading, aboutSectionPad } from "./shared";

const MILESTONES: { year: string; icon: LucideIcon; title: string; description: string }[] = [
  {
    year: "2012",
    icon: Flag,
    title: "Founded",
    description: "ACRIDC was established with a vision to generate evidence-based research.",
  },
  {
    year: "2015",
    icon: Maximize2,
    title: "Expanded Research",
    description:
      "Broadened multidisciplinary research programmes to address emerging challenges in agriculture.",
  },
  {
    year: "2018",
    icon: Users,
    title: "Regional Partnerships",
    description:
      "Strengthened collaboration with governments, universities and development partners.",
  },
  {
    year: "2022",
    icon: TrendingUp,
    title: "Scaling Impact",
    description:
      "Research outcomes began translating into policies, programmes, and community initiatives.",
  },
  {
    year: "2026",
    icon: Globe,
    title: "Building Africa's Future",
    description: "Continuing to deliver trusted research, foster strategic partnerships.",
  },
];

export default function OurJourney() {
  return (
    <section id="journey" className={`relative overflow-hidden bg-[#F8FAFC] ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[250px] hidden h-[641px] w-[652px] rounded-full bg-[linear-gradient(136.77deg,rgba(34,197,94,0.12)_24.23%,rgba(37,99,235,0)_49.95%)] blur-[71px] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-5 top-[487px] hidden h-[398px] w-[341px] lg:left-20 lg:block"
      >
        <AfricaMark sizes="341px" className="opacity-[0.18]" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="lg:max-w-[606px]">
          <SectionHeading
            eyebrow="Our Journey"
            title="A Decade of Research, Growth & Collaboration"
            description="Since our establishment, ACRIDC has continuously expanded its research, partnerships, and regional presence, transforming evidence into practical solutions that strengthen institutions, empower communities, and advance sustainable development across Africa."
          />
        </div>

        <div className="relative mx-auto h-[400px] w-full max-w-[400px] lg:hidden">
          <AfricaMark sizes="400px" className="opacity-[0.22]" />
        </div>

        <div className="no-scrollbar -mx-5 overflow-x-auto px-5 lg:hidden">
          <div className="flex w-max flex-col gap-3">
            <div className="flex items-end">
              {MILESTONES.map((item, i) => (
                <div key={item.year} className="flex w-[212px] flex-col items-center">
                  <span className="text-[24px] font-semibold leading-[130%] text-[#16A34A]">
                    {item.year}
                  </span>
                  <div className="relative mt-[3px] flex h-[30px] w-full items-center justify-center">
                    {i < MILESTONES.length - 1 && (
                      <span className="absolute left-1/2 top-1/2 h-[3px] w-[212px] -translate-y-1/2 bg-[rgba(22,163,74,0.12)]" />
                    )}
                    <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)]">
                      <span className="h-4 w-4 rounded-full bg-[#16A34A]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {MILESTONES.map((item) => (
                <article
                  key={item.title}
                  className="flex h-[185px] w-[200px] shrink-0 flex-col justify-center gap-4 rounded-2xl bg-white px-4 py-3 shadow-[0px_20px_60px_rgba(15,23,42,0.08)]"
                >
                  <IconTile
                    icon={item.icon}
                    size={48}
                    iconSize={24}
                    className="rounded-[9px] bg-[rgba(22,163,74,0.12)]"
                  />
                  <div>
                    <h3 className="text-[16px] font-semibold leading-[130%] text-[#16233B]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] font-medium leading-[140%] text-[#5B6B82]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <ol className="relative hidden flex-col gap-8 lg:flex lg:max-w-[627px]">
          {MILESTONES.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.year} className="grid grid-cols-[auto_30px_1fr] items-center gap-5 sm:gap-7">
                <span className="w-[91px] text-right text-[32px] font-semibold leading-[130%] text-[#16A34A]">
                  {item.year}
                </span>
                <span className="relative flex h-full min-h-[120px] items-center justify-center">
                  {i < MILESTONES.length - 1 && (
                    <span className="absolute top-1/2 left-1/2 h-[150px] w-[3px] -translate-x-1/2 bg-[rgba(22,163,74,0.12)]" />
                  )}
                  <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)]">
                    <span className="h-4 w-4 rounded-full bg-[#16A34A]" />
                  </span>
                </span>
                <div className="flex items-center gap-6 rounded-[18px] bg-white px-5 py-3 shadow-[0px_20px_60px_rgba(15,23,42,0.08)]">
                  <IconTile
                    icon={Icon}
                    size={64}
                    iconSize={32}
                    className="rounded-[12px] bg-[rgba(22,163,74,0.12)]"
                  />
                  <div>
                    <h3 className="text-[18px] font-semibold leading-[130%] text-[#16233B]">{item.title}</h3>
                    <p className="mt-1 text-[14px] font-medium leading-[170%] text-[#5B6B82]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
