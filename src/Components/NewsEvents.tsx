import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Receipt } from "lucide-react";
import { Eyebrow } from "./ui";

const STORIES = [
  {
    kind: "NEWS" as const,
    color: "bg-[#16A34A]",
    image: "/images/project-climate.png",
    meta: "May 22, 2025  •  3 min read",
    title: "ACRIDC Releases New Report on Renewable Energy Transition",
    body: "A new report highlighting practical pathways for accelerating clean energy adoption.",
    href: "/news/renewable-energy-transition",
  },
  {
    kind: "EVENT" as const,
    color: "bg-[#2563EB]",
    image: "/images/project-education.png",
    meta: "June 10–12, 2025  •  Nairobi, Kenya",
    title: "ACRIDC Annual Research Dialogue 2025",
    body: "Bringing together researchers, policymakers, and partners to exchange knowledge and advance evidence-based development.",
    href: "/events/research-dialogue-2025",
  },
  {
    kind: "NEWS" as const,
    color: "bg-[#16A34A]",
    image: "/images/project-agriculture.png",
    meta: "May 15, 2025  •  4 min read",
    title: "Partnership Advances Climate-Smart Agriculture",
    body: "Collaborative initiatives supporting resilient farming practices, food security, and climate adaptation across East Africa.",
    href: "/news/climate-smart-agriculture",
  },
];

export default function NewsEvents() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[82px] top-2 hidden h-[385px] w-[286px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="286px"
          className="knockout-black object-contain opacity-50"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-5 hidden h-[362px] w-[274px] lg:block"
      >
        <Image
          src="/images/dotted-africa.png"
          alt=""
          fill
          sizes="274px"
          className="knockout-black object-contain opacity-50"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[665px] text-center">
          <Eyebrow align="center">
            <span className="lg:hidden">News & Events</span>
            <span className="hidden lg:inline">Blogs & Insights</span>
          </Eyebrow>
          <h2 className="mt-6 text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:hidden">
            Stay Informed. Stay Engaged.
          </h2>
          <h2 className="mt-6 hidden text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:block">
            Blogs & Insights
          </h2>
          <p className="mt-8 text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:hidden">
            Explore our latest research reports, policy briefs, case studies, and
            publications driving evidence-based decision-making and sustainable development
            across Africa.
          </p>
          <p className="mt-8 hidden text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:block">
            The ACRIDC-Africa Blogs & Insights platform shall provide an accessible space
            for sharing evidence, ideas, reflections, innovations, lessons, research
            insights, policy perspectives, community experiences, and institutional
            learning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-[25px] md:grid-cols-2 xl:grid-cols-3">
          {STORIES.map((story) => (
            <article
              key={story.title}
              className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-white shadow-[0px_28px_64px_rgba(12,25,48,0.1)]"
            >
              <div className="relative h-[300px] w-full">
                <Image src={story.image} alt="" fill sizes="410px" className="object-cover" />
                <div className="absolute inset-0 bg-[rgba(30,41,59,0.2)]" />
                <span
                  className={`absolute left-6 top-6 inline-flex h-10 items-center gap-2.5 rounded-lg px-2.5 text-[14px] font-semibold text-[#F8FAFC] ${story.color}`}
                >
                  {story.kind === "EVENT" ? <Calendar size={24} /> : <Receipt size={24} />}
                  {story.kind}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-6 py-6">
                <p className="flex items-center gap-2 text-[14px] font-medium tracking-[0.02em] text-[#64748B]">
                  <Calendar size={24} />
                  {story.meta}
                </p>
                <h3 className="mt-4 text-[24px] font-semibold leading-[130%] text-[#16233B]">
                  {story.title}
                </h3>
                <p className="mt-3 text-[16px] font-medium leading-7 text-[#5B6B82]">
                  {story.body}
                </p>
                <Link
                  href={story.href}
                  className="mt-auto inline-flex items-center gap-3 pt-6 text-base font-semibold text-[#16A34A]"
                >
                  Read More
                  <ArrowRight size={24} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/news"
            className="inline-flex h-[72px] items-center gap-4 rounded-xl border-2 border-[#16A34A] px-5 text-[#16A34A]"
          >
            <Receipt size={32} />
            <span className="text-[20px] font-semibold leading-8 tracking-[-0.01em]">
              View All News & Events
            </span>
            <ArrowRight size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
