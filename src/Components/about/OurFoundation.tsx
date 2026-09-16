import { Target, Globe, ThumbsUp, Users, Wrench, ChartLine } from "lucide-react";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading, ValuesRow, aboutSectionPad } from "./shared";

const VALUES = [
  {
    icon: ThumbsUp,
    title: "Integrity",
    description: "We uphold the highest standards of ethics, transparency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe meaningful impact is achieved through strong partnerships.",
  },
  {
    icon: Wrench,
    title: "Innovation",
    description: "We embrace curiosity, creativity, and evidence-driven thinking.",
  },
  {
    icon: ChartLine,
    title: "Sustainability",
    description: "We champion solutions that strengthen communities and protect resources.",
  },
];

export default function OurFoundation() {
  return (
    <section id="foundation" className={`relative overflow-hidden bg-[#F8FAFC] ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-[40%] hidden h-[479px] w-[478px] rounded-full bg-[linear-gradient(270deg,rgba(34,197,94,0.1)_0%,rgba(34,197,94,0)_100%)] blur-[48px] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-20 top-[29px] hidden h-[385px] w-[286px] lg:block"
      >
        <AfricaMark sizes="286px" className="opacity-[0.12]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-20 top-6 hidden h-[362px] w-[274px] lg:block"
      >
        <AfricaMark sizes="274px" className="opacity-[0.12]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeading
          align="center"
          eyebrow="Our Foundation"
          title="Mission, Vision & Values"
          description="Our mission, vision, and values define who we are and guide every partnership, research initiative, and solution we deliver. Together, they reflect our commitment to advancing evidence-based development and creating lasting impact across Africa."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[18px] bg-white p-8 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] lg:h-[300px]">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/2 h-[155px] w-[440px] -translate-y-1/2 opacity-40 lg:h-[298px] lg:w-[447px] lg:opacity-100"
            >
              <AfricaMark sizes="447px" className="opacity-[0.08] lg:opacity-[0.05]" />
            </div>
            <div className="relative z-10 flex items-start gap-5 lg:gap-6">
              <IconTile
                icon={Target}
                size={56}
                iconSize={28}
                className="rounded-full bg-[rgba(22,163,74,0.12)] lg:h-[100px] lg:w-[100px] [&_svg]:lg:h-[50px] [&_svg]:lg:w-[50px]"
              />
              <div>
                <p className="text-[14px] font-semibold uppercase leading-[130%] text-[#16A34A]">
                  Our Mission
                </p>
                <h3 className="mt-4 text-[20px] font-semibold leading-[140%] text-[#1E293B] lg:text-[24px]">
                  To generate high-quality evidence, inform policy, and strengthen institutions
                </h3>
                <p className="mt-4 text-[14px] font-medium leading-[140%] text-[#5B6B82] lg:text-[16px] lg:leading-[170%]">
                  through collaborative research, innovation, and sustainable development
                  solutions that improve lives across Africa.
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[18px] bg-white p-8 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] lg:h-[300px]">
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 bottom-0 h-[163px] w-[244px] lg:top-[78px] lg:h-[325px] lg:w-[488px]"
            >
              <AfricaMark sizes="488px" className="opacity-[0.08] lg:opacity-[0.05]" />
            </div>
            <div className="relative z-10 flex items-start gap-5 lg:gap-6">
              <IconTile
                icon={Globe}
                size={56}
                iconSize={28}
                className="rounded-full bg-[rgba(22,163,74,0.12)] lg:h-[100px] lg:w-[100px] [&_svg]:lg:h-[50px] [&_svg]:lg:w-[50px]"
              />
              <div>
                <p className="text-[14px] font-semibold uppercase leading-[130%] text-[#16A34A]">
                  Our Vision
                </p>
                <h3 className="mt-4 text-[20px] font-semibold leading-[140%] text-[#1E293B] lg:text-[24px]">
                  A resilient, prosperous, and inclusive Africa where evidence-based knowledge
                  drives informed decisions, sustainable growth, and transformative development.
                </h3>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-[#16A34A]" />
          <span className="text-[14px] font-medium capitalize tracking-[0.08em] text-[#16A34A]">
            Our Values
          </span>
          <span className="h-px w-20 bg-[#16A34A]" />
        </div>

        <ValuesRow items={VALUES} />
      </div>
    </section>
  );
}
