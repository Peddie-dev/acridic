import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Landmark,
  UserRound,
  Settings,
  ThumbsUp,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IconTile } from "../ui";
import { AfricaMark, SectionHeading, aboutSectionPad } from "./shared";

const LEADERS = [
  {
    name: "Dr. David Onyango",
    role: "Executive Director",
    bio: "Provides strategic leadership and oversees ACRIDC's vision, partnerships, and research agenda.",
    image: "/images/leadership/david-onyango.png",
  },
  {
    name: "Dr. Mercy Kaluki",
    role: "Director – Research",
    bio: "Leads multidisciplinary research programmes, ensuring scientific excellence and evidence-based solutions.",
    image: "/images/leadership/mercy-kaluki.png",
  },
  {
    name: "Mr. James Mwangi",
    role: "Director – Operations",
    bio: "Oversees operations, finance, and organizational systems that enable efficient programme delivery.",
    image: "/images/leadership/james-mwangi.png",
  },
  {
    name: "Mrs. Linda Ogutu",
    role: "Director – Finance",
    bio: "Leads financial strategy, planning, and risk management to ensure fiscal responsibility, operational excellence.",
    image: "/images/leadership/linda-ogutu.png",
  },
];

const GOVERNANCE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Users,
    title: "Board of Directors",
    description: "Provides strategic oversight, governance, and accountability.",
  },
  {
    icon: UserRound,
    title: "Executive Leadership",
    description: "Transforms strategy into action by leading research, partnerships and programmes.",
  },
  {
    icon: Users,
    title: "Research & Programme Teams",
    description: "Designs and delivers evidence-based research and technical expertise.",
  },
  {
    icon: Settings,
    title: "Operations & Support",
    description: "Ensures effective finance, administration, compliance and communications.",
  },
];

function LeaderCard({
  name,
  role,
  bio,
  image,
  className = "",
  stretchPhoto = false,
}: (typeof LEADERS)[number] & { className?: string; stretchPhoto?: boolean }) {
  return (
    <article
      className={`flex min-w-0 flex-row items-stretch gap-3 overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white p-3 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] sm:p-4 ${className}`}
    >
      <div
        className={`relative shrink-0 self-stretch overflow-hidden rounded-[20px] bg-[#E8EDF2] ${
          stretchPhoto
            ? "w-[44%] max-w-[170px] min-h-[220px]"
            : "w-[min(148px,42%)] min-h-[210px]"
        }`}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="340px"
          quality={100}
          unoptimized
          className="object-cover object-top"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <h3
          className={`font-bold leading-[130%] tracking-[-0.02em] text-[#16233B] ${
            stretchPhoto ? "text-[16px] whitespace-nowrap xl:text-[18px]" : "text-[16px]"
          }`}
        >
          {name}
        </h3>
        <p
          className={`font-semibold uppercase leading-[130%] text-[#16A34A] ${
            stretchPhoto ? "mt-2 text-[13px]" : "mt-1.5 text-[12px]"
          }`}
        >
          {role}
        </p>
        <p
          className={`mt-2 min-w-0 font-medium text-[#5B6B82] ${
            stretchPhoto ? "text-[14px] leading-[160%]" : "text-[13px] leading-[150%]"
          }`}
        >
          {bio}
        </p>
        <div className={`min-w-0 overflow-hidden ${stretchPhoto ? "mt-auto pt-3" : "mt-3"}`}>
          <span
            className={`block h-px w-full bg-[#E2E8F0] ${stretchPhoto ? "mb-4" : "mb-3"}`}
          />
          <Link
            href="https://www.linkedin.com"
            className="inline-flex max-w-full items-center gap-2 text-[13px] font-semibold text-[#16A34A]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border-[1.5px] border-[#16A34A]">
              <FaLinkedinIn size={14} />
            </span>
            <span className="min-w-0 truncate">View LinkedIn</span>
            <ArrowUpRight size={18} className="shrink-0" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <IconTile
        icon={Icon}
        size={64}
        iconSize={32}
        className="rounded-full bg-[rgba(22,163,74,0.12)]"
      />
      <span className="whitespace-nowrap text-[16px] font-medium uppercase tracking-[0.08em] text-[#1E293B]">
        {children}
      </span>
      <span className="h-px min-w-8 flex-1 bg-[#16A34A]" />
    </div>
  );
}

function GovernanceStack() {
  return (
    <div>
      {GOVERNANCE.map((item, i) => (
        <div key={item.title}>
          <div className="flex flex-col gap-5 rounded-[18px] border border-[#E2E8F0] bg-[rgba(238,251,243,0.32)] px-5 py-5 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] lg:flex-row lg:items-center lg:gap-6 lg:py-4">
            <IconTile
              icon={item.icon}
              size={64}
              iconSize={32}
              className="rounded-[12px] border border-[#E2E8F0] bg-[rgba(22,163,74,0.04)]"
            />
            <div className="min-w-0">
              <h3 className="text-[18px] font-semibold leading-[130%] text-[#16233B]">
                {item.title}
              </h3>
              <p className="mt-1 text-[14px] font-medium leading-[170%] text-[#5B6B82]">
                {item.description}
              </p>
            </div>
          </div>
          {i < GOVERNANCE.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <span className="flex h-[11px] w-[11px] items-center justify-center rounded-full bg-[#16A34A] text-[8px] text-white">
                ✓
              </span>
              <span className="h-6 w-px border-l border-dashed border-[#92C8A5]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className={`relative overflow-hidden bg-[#F8FAFC] ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-5 top-6 hidden h-[362px] w-[274px] lg:block"
      >
        <AfricaMark sizes="274px" className="opacity-[0.12]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[720px]">
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title={
              <>
                Guiding Research.
                <br />
                Inspiring <span className="text-[#16A34A]">Lasting Impact.</span>
              </>
            }
            description="Our leadership brings together experienced researchers, development practitioners, and strategic leaders dedicated to advancing evidence-based solutions that strengthen institutions, empower communities, and drive sustainable development across Africa."
          />
        </div>

        <div className="mt-10 lg:hidden">
          <SectionLabel icon={Users}>Leadership Team</SectionLabel>
          <div className="mt-6 space-y-4">
            {[LEADERS.slice(0, 2), LEADERS.slice(2)].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5"
              >
                {row.map((leader) => (
                  <LeaderCard
                    key={leader.name}
                    {...leader}
                    className="w-[min(390px,calc(100vw-72px))] shrink-0 snap-start"
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <SectionLabel icon={Landmark}>Governance Structure</SectionLabel>
            <div className="mt-6">
              <GovernanceStack />
            </div>
          </div>
        </div>

        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)]">
          <div className="min-w-0">
            <SectionLabel icon={Users}>Leadership Team</SectionLabel>
            <div className="mt-6 grid auto-rows-fr grid-cols-2 gap-5">
              {LEADERS.map((leader) => (
                <LeaderCard key={leader.name} {...leader} stretchPhoto className="h-full" />
              ))}
            </div>
          </div>
          <aside className="min-w-0">
            <SectionLabel icon={Landmark}>Governance Structure</SectionLabel>
            <div className="mt-6">
              <GovernanceStack />
            </div>
          </aside>
        </div>

        <Link
          href="/about#leadership"
          className="mx-auto mt-10 flex w-fit items-center gap-2 text-[14px] font-semibold text-[#16A34A]"
        >
          <IconTile
            icon={Users}
            size={32}
            iconSize={20}
            className="rounded-full bg-[rgba(22,163,74,0.12)]"
          />
          View Governance Policy
          <ArrowRight size={18} />
        </Link>

        <div className="relative mt-8 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[rgba(238,251,243,0.32)] px-5 py-6 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] sm:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-0 h-[106px] w-[160px] lg:top-[-40px] lg:h-[165px] lg:w-[248px]"
          >
            <AfricaMark sizes="248px" className="opacity-[0.12]" />
          </div>
          <div className="relative z-10 flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full flex-col items-start gap-5 lg:flex-row lg:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#16A34A] lg:h-[72px] lg:w-[72px]">
                <ThumbsUp size={25} className="lg:h-8 lg:w-8" />
              </span>
              <div className="max-w-[587px]">
                <h3 className="text-[16px] font-bold leading-[130%] text-[#16233B] lg:text-[18px]">
                  Committed to Good Governance
                </h3>
                <p className="mt-3 text-[14px] font-medium leading-[140%] text-[#5B6B82] lg:mt-1 lg:leading-[170%]">
                  We uphold the highest standards of transparency, accountability, and ethical
                  leadership to build trust with our partners, communities, and stakeholders.
                </p>
              </div>
            </div>
            <Link
              href="/about#leadership"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#16A34A]"
            >
              Explore Governance Framework
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
