import Image from "next/image";
import { Camera, Users, TrendingUp, MapPin, Calendar } from "lucide-react";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading, ValuesRow, aboutSectionPad } from "./shared";

const PILLARS = [
  {
    icon: Camera,
    title: "Evidence-Based",
    description: "Delivering trusted research that informs policy and drives sustainable solutions.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work with diverse partners to co-create solutions and share knowledge.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable",
    description: "We promote solutions that build long-term resilience and impact.",
  },
  {
    icon: MapPin,
    title: "Pan-African Impact",
    description: "Driving positive change and strengthening communities across the continent.",
  },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className={`relative overflow-hidden bg-[#F8FAFC] ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-320px] top-[-50px] hidden h-[582px] w-[559px] lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.08]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="relative order-2 w-full max-w-[560px] shrink-0 lg:order-1">
            <div className="relative aspect-square overflow-hidden rounded-[24px] border border-white/65 shadow-[0px_28px_80px_rgba(15,23,42,0.1)] lg:rounded-[32px]">
              <Image
                src="/images/project-governance.png"
                alt="ACRIDC leadership meeting around a conference table"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                quality={100}
                unoptimized
                className="object-cover object-[center_45%]"
              />
            </div>
            <div className="absolute bottom-1 left-1 z-10 flex w-[min(100%,296px)] items-center gap-4 rounded-xl bg-white px-4 py-2 shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)] lg:bottom-0 lg:left-0 lg:h-[140px] lg:w-[min(100%,309px)] lg:gap-6 lg:rounded-[18px] lg:px-5 lg:py-3">
              <IconTile
                icon={Calendar}
                size={56}
                iconSize={28}
                className="rounded-full bg-[rgba(22,163,74,0.12)] lg:h-16 lg:w-16"
              />
              <div>
                <p className="text-[20px] font-extrabold leading-[27px] text-[#16A34A] lg:text-[24px] lg:leading-[33px]">
                  2012
                </p>
                <p className="text-[14px] font-semibold leading-[130%] text-[#16233B]">Established</p>
                <p className="mt-1 text-[14px] font-medium leading-[140%] text-[#5B6B82] lg:leading-[170%]">
                  Building trusted research partnerships across Africa.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 w-full max-w-[606px] lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="Who We Are"
              description="ACRIDC is an independent research and development organization dedicated to generating evidence, informing policy, and delivering practical solutions that improve lives across Africa."
            />
            <p className="mt-5 max-w-[513px] text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:mt-10 lg:text-[18px] lg:leading-[175%]">
              Through collaboration with governments, universities, development partners,
              civil society, and the private sector, we transform research into meaningful
              action that strengthens institutions, empowers communities, and advances
              sustainable development across the continent.
            </p>
          </div>
        </div>

        <ValuesRow items={PILLARS} />
      </div>
    </section>
  );
}
