import Image from "next/image";
import { Camera, Users, TrendingUp, MapPin, Calendar } from "lucide-react";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading, ValuesRow } from "./shared";

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
    <section id="who-we-are" className="relative overflow-hidden bg-[#F8FAFC] px-5 py-12 sm:px-10 lg:px-20 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-320px] top-[-50px] hidden h-[582px] w-[559px] lg:block"
      >
        <AfricaMark sizes="560px" className="opacity-[0.08]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-10">
          <div className="relative w-full max-w-[560px] shrink-0">
            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/65 shadow-[0px_28px_80px_rgba(15,23,42,0.1)]">
              <Image
                src="/images/project-governance.png"
                alt="ACRIDC leadership meeting around a conference table"
                fill
                sizes="560px"
              quality={90}
              className="object-cover object-[center_45%]"
              />
            </div>
            <div className="absolute bottom-0 left-0 flex h-[140px] w-[min(100%,309px)] items-center gap-6 rounded-[18px] bg-white px-5 py-3 shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
              <IconTile
                icon={Calendar}
                size={64}
                iconSize={32}
                className="rounded-full bg-[rgba(22,163,74,0.12)]"
              />
              <div>
                <p className="text-[24px] font-extrabold leading-[33px] text-[#16A34A]">2012</p>
                <p className="text-[14px] font-semibold leading-[130%] text-[#16233B]">Established</p>
                <p className="mt-1 text-[14px] font-medium leading-[170%] text-[#5B6B82]">
                  Building trusted research partnerships across Africa.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[606px]">
            <SectionHeading
              eyebrow="Who We Are"
              title="Who We Are"
              description="ACRIDC is an independent research and development organization dedicated to generating evidence, informing policy, and delivering practical solutions that improve lives across Africa."
            />
            <p className="mt-10 max-w-[513px] text-[18px] font-normal leading-[175%] text-[#5B6B82]">
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
