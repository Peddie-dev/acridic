import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  GraduationCap,
  Users,
  Globe,
  Briefcase,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./ui";

interface Partner {
  icon: LucideIcon;
  title: string;
  description: string;
  logosImage: string;
  area: string;
}

const PARTNERS: Partner[] = [
  {
    icon: Landmark,
    title: "Government",
    description:
      "Partnering with public institutions to strengthen governance, inform evidence-based policy, and drive sustainable development.",
    logosImage: "/images/partners/government-partners.png",
    area: "lg:col-start-2 lg:row-start-1",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    description:
      "Collaborating with higher education institutions to advance research, foster innovation, and strengthen the next generation..",
    logosImage: "/images/partners/universities-partners.png",
    area: "lg:col-start-1 lg:row-start-2",
  },
  {
    icon: Users,
    title: "Communities",
    description:
      "Placing communities at the heart of every initiative by co-designing practical solutions that create meaningful and lasting change.",
    logosImage: "/images/partners/communities-partners.png",
    area: "lg:col-start-3 lg:row-start-2",
  },
  {
    icon: Globe,
    title: "Development Partners",
    description:
      "Working alongside global development organizations to mobilize expertise, resources, and investment for transformative.",
    logosImage: "/images/partners/development-partners.png",
    area: "lg:col-start-1 lg:row-start-3",
  },
  {
    icon: Briefcase,
    title: "Private Sector",
    description:
      "Connecting research with industry to accelerate innovation, technology adoption, investment, and sustainable economic growth.",
    logosImage: "/images/partners/private-sector-partners.png",
    area: "lg:col-start-3 lg:row-start-3",
  },
  {
    icon: Handshake,
    title: "Civil Society & NGOs",
    description:
      "Partnering with civil society organizations to promote inclusive development, community engagement.",
    logosImage: "/images/partners/civil-society-partners.png",
    area: "lg:col-start-2 lg:row-start-4",
  },
];

const MOBILE_PARTNERS: Partner[] = [
  PARTNERS[0],
  PARTNERS[1],
  PARTNERS[3],
  PARTNERS[5],
  PARTNERS[2],
  PARTNERS[4],
];

export default function Partnership() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[69px] top-[568px] hidden h-[520px] w-[520px] rounded-full bg-[rgba(34,197,94,0.08)] blur-[90px] lg:block"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[600px] text-center lg:max-w-[706px]">
          <Eyebrow align="center">Our Partnership Ecosystem</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:hidden">
            Building Partnerships That Create Lasting Impact.
          </h2>
          <h2 className="mt-6 hidden text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:block">
            Strategic Partnerships and Organizational Collaboration
          </h2>
          <p className="mt-8 text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:hidden">
            We collaborate with governments, universities, development organizations,
            businesses, and communities to transform research into practical solutions that
            improve lives across Africa.
          </p>
          <p className="mt-8 hidden text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:block">
            ACRIDC-Africa establishes and strengthens strategic partnerships, networks,
            alliances, and collaborative platforms with governments, development partners,
            academic institutions, civil society organizations, private sector entities, and
            communities.
          </p>
        </div>

        <div className="relative mt-16 hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto_auto] lg:gap-x-6 lg:gap-y-8 xl:gap-x-10">
          <div className="relative col-start-2 row-start-2 row-end-4 flex min-w-0 items-center justify-center self-stretch">
            <div className="relative aspect-square w-full max-w-[520px]">
              <div className="absolute inset-6 rounded-full bg-[rgba(34,197,94,0.06)] blur-[90px]" />
              <Image
                src="/images/acridc-hub.png"
                alt="ACRIDC Research Hub — Connecting Knowledge Across Africa"
                fill
                sizes="615px"
                className="knockout-black object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {PARTNERS.map((partner) => (
            <div key={partner.title} className={partner.area}>
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:hidden">
          {MOBILE_PARTNERS.map((partner) => (
            <PartnerTile key={partner.title} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerTile({ partner }: { partner: Partner }) {
  const Icon = partner.icon;
  return (
    <div className="flex h-[142px] flex-col items-center justify-center rounded-[24px] border border-[#E5E7EB] bg-white px-3 shadow-[0px_28px_64px_rgba(12,25,48,0.08)]">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#EAF9EE] text-[#16A34A]">
        <Icon size={24} strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 text-center text-[16px] font-semibold leading-[18px] tracking-[-0.01em] text-[#16233B]">
        {partner.title}
      </h3>
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  const Icon = partner.icon;
  return (
    <div className="h-full min-h-[320px] rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0px_28px_64px_rgba(12,25,48,0.1)]">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-[#EAF9EE] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)]">
          <Icon size={28} strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <h3 className="text-[20px] font-semibold leading-8 tracking-[-0.01em] text-[#16233B]">
            {partner.title}
          </h3>
          <p className="mt-2 text-[16px] font-normal leading-7 text-[#64748B]">
            {partner.description}
          </p>
          <p className="mt-6 text-[13px] font-semibold leading-[18px] tracking-[0.02em] text-[#94A3B8]">
            Key Partners
          </p>
          <div className="relative mt-3 h-[63px] w-full max-w-[289px]">
            <Image
              src={partner.logosImage}
              alt=""
              fill
              sizes="289px"
              className="knockout-black object-contain object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
