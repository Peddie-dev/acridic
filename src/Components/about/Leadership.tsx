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
import { AfricaMark, SectionHeading } from "./shared";

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
}: (typeof LEADERS)[number]) {
  return (
    <article className="h-auto rounded-[20px] border border-[#E2E8F0] bg-white p-4 shadow-[0px_20px_60px_rgba(15,23,42,0.08)] sm:h-[280px] sm:max-w-[390px]">
      <div className="flex h-full flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative mx-auto h-[238px] w-[170px] shrink-0 overflow-hidden rounded-[20px] sm:mx-0">
          <Image
            src={image}
            alt={name}
            fill
            sizes="170px"
            quality={100}
            unoptimized
            className="object-cover object-[center_12%]"
          />
        </div>
        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col sm:h-[239px] sm:w-[170px] sm:flex-none">
          <h3 className="text-[18px] font-bold leading-[130%] text-[#16233B]">{name}</h3>
          <p className="mt-2 text-[13px] font-semibold uppercase leading-[130%] text-[#16A34A]">{role}</p>
          <p className="mt-2 line-clamp-5 text-[14px] font-medium leading-[160%] text-[#5B6B82]">{bio}</p>
          <div className="mt-4 sm:mt-auto">
            <span className="mb-4 block h-px w-full bg-[#E2E8F0]" />
            <Link
              href="https://www.linkedin.com"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#16A34A]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border-[1.5px] border-[#16A34A]">
                <FaLinkedinIn size={14} />
              </span>
              View LinkedIn
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-[#F8FAFC] px-5 py-12 sm:px-10 lg:px-20 lg:py-16">
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
            title="Guiding Research. Inspiring Lasting Impact."
            description="Our leadership brings together experienced researchers, development practitioners, and strategic leaders dedicated to advancing evidence-based solutions that strengthen institutions, empower communities, and drive sustainable development across Africa."
          />
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <IconTile
              icon={Users}
              size={64}
              iconSize={32}
              className="rounded-full bg-[rgba(22,163,74,0.12)]"
            />
            <span className="text-[16px] font-medium uppercase tracking-[0.08em] text-[#1E293B]">
              Leadership Team
            </span>
          </div>
          <span className="hidden h-px flex-1 bg-[#16A34A] lg:block" />
          <div className="flex items-center gap-5">
            <IconTile
              icon={Landmark}
              size={64}
              iconSize={32}
              className="rounded-full bg-[rgba(22,163,74,0.12)]"
            />
            <span className="text-[16px] font-medium tracking-[0.08em] text-[#1E293B]">
              Governance Structure
            </span>
          </div>
          <span className="hidden h-px w-40 bg-[#16A34A] lg:block" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-[30px] xl:grid-cols-[800px_450px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {LEADERS.map((leader) => (
              <LeaderCard key={leader.name} {...leader} />
            ))}
          </div>

          <aside>
            <div className="rounded-[24px] bg-white p-5 shadow-[0px_20px_60px_rgba(15,23,42,0.08)]">
            {GOVERNANCE.map((item, i) => (
              <div key={item.title}>
                <div className="flex items-center gap-6 rounded-[18px] border border-[#E2E8F0] bg-[rgba(238,251,243,0.32)] px-5 py-3 shadow-[0px_20px_60px_rgba(15,23,42,0.08)]">
                  <IconTile
                    icon={item.icon}
                    size={64}
                    iconSize={32}
                    className="rounded-[12px] border border-[#E2E8F0] bg-[rgba(22,163,74,0.04)]"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[18px] font-semibold leading-[130%] text-[#16233B]">{item.title}</h3>
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
            className="pointer-events-none absolute right-0 top-[-40px] hidden h-[165px] w-[248px] lg:block"
          >
            <AfricaMark sizes="248px" className="opacity-[0.12]" />
          </div>
          <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#16A34A]">
                <ThumbsUp size={32} />
              </span>
              <div className="max-w-[587px]">
                <h3 className="text-[18px] font-bold leading-[130%] text-[#16233B]">
                  Committed to Good Governance
                </h3>
                <p className="mt-1 text-[14px] font-medium leading-[170%] text-[#5B6B82]">
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
