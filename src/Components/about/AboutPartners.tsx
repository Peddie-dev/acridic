import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Landmark, Handshake, GraduationCap, Briefcase, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IconTile } from "../ui";
import {
  SectionHeading,
  AfricaMapPlaceholder,
  LogoPlaceholder,
  aboutSectionPad,
} from "./shared";

const TYPES: { icon: LucideIcon; title: string; description: string; href: string; active?: boolean }[] = [
  {
    icon: Landmark,
    title: "Government",
    description: "Strengthening public policy and institutional capacity.",
    href: "/about#partners",
    active: true,
  },
  {
    icon: Handshake,
    title: "Development",
    description: "Delivering sustainable development through strategic partnerships.",
    href: "/about#partners",
  },
  {
    icon: GraduationCap,
    title: "Research",
    description: "Driving innovation through collaborative research and knowledge.",
    href: "/about#partners",
  },
  {
    icon: Users,
    title: "Communities",
    description: "Creating lasting community impact through inclusive collaboration.",
    href: "/about#partners",
  },
  {
    icon: Briefcase,
    title: "Private Sector",
    description: "Promoting sustainable growth through innovation and investment.",
    href: "/about#partners",
  },
];

export default function AboutPartners() {
  return (
    <section id="partners" className={`bg-[#F8FAFC] ${aboutSectionPad} lg:pb-8`}>
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,515px)] lg:items-center">
          <SectionHeading
            eyebrow="Our Partners"
            title={
              <>
                Building <span className="text-[#16A34A]">Stronger</span>
                <br />
                Futures
              </>
            }
            description="Our impact is made possible through meaningful partnerships with governments, development agencies, research institutions, universities, the private sector, and civil society organizations. Together, we transform evidence into action, driving sustainable development and lasting change across Africa."
          />
          <div className="relative flex flex-col items-center gap-10 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white px-6 py-5 lg:flex-row lg:items-center lg:gap-8">
            <div className="relative w-full min-w-0 shrink-0 lg:w-auto">
              <IconTile
                icon={Users}
                size={64}
                iconSize={32}
                className="rounded-[28px] bg-[rgba(22,163,74,0.12)] max-lg:!h-14 max-lg:!w-14 lg:rounded-[32px]"
              />
              <p className="mt-5 text-[16px] font-semibold text-[#16233B]">Stronger Together.</p>
              <p className="font-display mt-4 text-[40px] font-bold leading-[54px] text-[#16A34A] lg:text-[48px] lg:leading-[65px]">
                60+
              </p>
              <p className="mt-2 max-w-[350px] text-[14px] font-medium leading-[140%] text-[#64748B] lg:max-w-[188px] lg:text-[13px] lg:leading-[18px]">
                Trusted organizations across Africa and around the world working with ACRIDC to
                create sustainable impact.
              </p>
            </div>
            <div className="relative h-[251px] w-full max-w-[235px] lg:h-[251px] lg:flex-1">
              <AfricaMapPlaceholder
                src="/images/impact-africa-map.png"
                alt="Partner network across Africa"
              />
            </div>
          </div>
        </div>

        <div className="no-scrollbar mt-12 flex gap-4 overflow-x-auto lg:grid lg:grid-cols-5 lg:gap-[33px] lg:overflow-visible">
          {TYPES.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex w-[230px] shrink-0 flex-col items-center rounded-[12px] bg-white px-5 py-5 text-center lg:w-auto ${
                  item.active ? "border-[1.5px] border-[#16A34A]" : ""
                }`}
              >
                <IconTile
                  icon={Icon}
                  size={48}
                  iconSize={24}
                  className="rounded-full bg-[rgba(22,163,74,0.12)] lg:h-[51px] lg:w-[51px]"
                />
                <h3 className="mt-5 text-[16px] font-semibold text-[#16233B] lg:text-[18px]">{item.title}</h3>
                <p className="mt-2 text-[12px] font-medium leading-[140%] text-[#5B6B82] lg:text-[13px] lg:leading-[170%]">
                  {item.description}
                </p>
                <ArrowRight size={15} className="mt-4 text-[#16A34A]" />
              </Link>
            );
          })}
        </div>

        <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible">
          {Array.from({ length: 18 }, (_, i) => (
            <div key={i} className="w-[200px] shrink-0 lg:w-auto">
              <LogoPlaceholder />
            </div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[24px] bg-[#052E16]">
          <div className="pointer-events-none absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[48%]">
            <Image
              src="/images/partners-cta-hands.png"
              alt=""
              fill
              sizes="620px"
              quality={100}
              unoptimized
              className="object-cover object-left opacity-50 lg:opacity-100"
            />
            <div className="absolute inset-0 bg-[#052E16]/55 lg:hidden" />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#052E16] to-transparent lg:block" />
          </div>
          <div className="relative z-10 flex flex-col gap-8 px-5 py-5 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-7">
            <div className="flex max-w-[430px] flex-col items-start gap-5 lg:flex-row">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-white">
                <Star size={38} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-[24px] font-semibold leading-[140%] tracking-[-0.01em] text-white lg:leading-[36px]">
                  Let&apos;s Build Africa&apos;s Future Together
                </h3>
                <p className="mt-3 text-[14px] leading-5 text-white/90 lg:leading-6">
                  Partner with ACRIDC to transform research into practical solutions that
                  strengthen communities, influence policy, and create lasting impact across
                  Africa.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 lg:mr-[28%] lg:w-auto">
              <Link
                href="/partner-with-us"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-[#16A34A] bg-[#16A34A] text-[14px] font-semibold text-white lg:h-12 lg:w-[200px]"
              >
                Become a Partner
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-white/80 text-[14px] font-semibold text-white lg:h-12 lg:w-[200px]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
