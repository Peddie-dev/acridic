import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Landmark, Handshake, GraduationCap, Briefcase, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IconTile } from "../ui";
import { SectionHeading } from "./shared";

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

const LOGOS = [
  "/images/partners/government-partners.png",
  "/images/partners/universities-partners.png",
  "/images/partners/development-partners.png",
  "/images/partners/civil-society-partners.png",
  "/images/partners/communities-partners.png",
  "/images/partners/private-sector-partners.png",
];

export default function AboutPartners() {
  return (
    <section id="partners" className="bg-[#F8FAFC] px-5 py-12 sm:px-10 lg:px-20 lg:pb-8 lg:pt-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
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
          <div className="relative flex min-h-[220px] items-center gap-8 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white px-6 py-5 lg:max-w-[515px]">
            <div className="relative">
              <IconTile
                icon={Users}
                size={64}
                iconSize={32}
                className="rounded-[32px] bg-[rgba(22,163,74,0.12)]"
              />
              <p className="mt-5 text-[16px] font-semibold text-[#16233B]">Stronger Together.</p>
              <p className="font-display mt-4 text-[48px] font-bold leading-[65px] text-[#16A34A]">60+</p>
              <p className="mt-2 max-w-[188px] text-[13px] font-medium leading-[18px] text-[#64748B]">
                Across Africa and around the world working with us for lasting impact.
              </p>
            </div>
            <div className="relative hidden h-[251px] w-[235px] shrink-0 lg:block">
              <Image
                src="/images/our-reach-africa-map.png"
                alt="Partnerships across Africa"
                fill
                sizes="235px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-[33px]">
          {TYPES.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex flex-col items-center rounded-[12px] bg-white px-5 py-5 text-center ${
                  item.active ? "border-[1.5px] border-[#16A34A]" : ""
                }`}
              >
                <IconTile
                  icon={Icon}
                  size={51}
                  iconSize={25}
                  className="rounded-full bg-[rgba(22,163,74,0.12)]"
                />
                <h3 className="mt-5 text-[18px] font-semibold text-[#16233B]">{item.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[170%] text-[#5B6B82]">
                  {item.description}
                </p>
                <ArrowRight size={15} className="mt-4 text-[#16A34A]" />
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={i}
              className="relative flex h-[142px] items-center justify-center rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0px_28px_64px_rgba(12,25,48,0.1)]"
            >
              <Image
                src={LOGOS[i % LOGOS.length]}
                alt="Partner organization"
                width={145}
                height={103}
                className="max-h-[103px] w-auto object-contain px-3"
              />
            </div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[24px] bg-[#052E16]">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
            <Image
              src="/images/partners-cta-hands.png"
              alt=""
              fill
              sizes="620px"
              quality={90}
              className="object-cover object-left"
            />
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#052E16] to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-7">
            <div className="flex max-w-[430px] items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-white">
                <Star size={32} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-[28px] font-semibold leading-[36px] tracking-[-0.01em] text-white">
                  Let&apos;s Build Africa&apos;s Future Together
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-white/90">
                  Partner with ACRIDC to transform research into practical solutions that
                  strengthen communities, influence policy, and create lasting impact across
                  Africa.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:mr-[28%]">
              <Link
                href="/partner-with-us"
                className="inline-flex h-12 w-[200px] items-center justify-center gap-2 rounded-lg border border-[#16A34A] bg-[#16A34A] text-[14px] font-semibold text-white"
              >
                Become a Partner
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 w-[200px] items-center justify-center gap-2 rounded-lg border border-white/80 text-[14px] font-semibold text-white"
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
