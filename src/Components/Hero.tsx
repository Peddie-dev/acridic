import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
  ChartNoAxesColumn,
  RefreshCw,
  Landmark,
  UserRound,
  TrendingUp,
  Users,
  Briefcase,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { OutlineButton, PrimaryButton } from "./ui";

const TAGS = ["African-Led", "Evidence Driven", "Impact Focused"];

const FLOATING_BADGES: {
  icon: LucideIcon;
  label: string;
  color: string;
  className: string;
}[] = [
  { icon: Menu, label: "Research", color: "bg-[#0D3B66]", className: "right-0 top-0 w-[212px]" },
  {
    icon: ChartNoAxesColumn,
    label: "Innovation",
    color: "bg-[#16A34A]",
    className: "right-4 top-[140px] w-[228px] xl:right-[28px]",
  },
  {
    icon: RefreshCw,
    label: "Collaboration",
    color: "bg-[#6750A4]",
    className: "right-0 top-[280px] w-[257px]",
  },
];

const THUMBNAILS = [
  {
    title: "Community Empowerment",
    src: "/images/about-acridc.png",
    href: "/impact/community",
  },
  {
    title: "Evidence & Innovation",
    src: "/images/hero-thumb-innovation.png",
    href: "/impact/innovation",
  },
  {
    title: "Climate & Resilience",
    src: "/images/hero-thumb-climate.png",
    href: "/impact/climate",
  },
];

const ECOSYSTEM: { icon: LucideIcon; label: string; muted?: boolean }[] = [
  { icon: Landmark, label: "Governments" },
  { icon: UserRound, label: "Universities" },
  { icon: TrendingUp, label: "Development", muted: true },
  { icon: Users, label: "Civil Society", muted: true },
  { icon: Briefcase, label: "Private Sector", muted: true },
  { icon: Plus, label: "More", muted: true },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC] lg:-mt-[132px] lg:min-h-[1024px] lg:pt-[175px]">
      {/* Figma: plain bg.png is 1656×1176 at left -212 / top -152 on a 1440×1024 frame */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-14.72%] top-[-14.84%] h-[114.84%] w-[115%]">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            sizes="120vw"
            className="object-cover object-[center_center]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(278.85deg,rgba(248,250,252,0)_47.43%,rgba(248,250,252,0.726)_58.77%,#F8FAFC_68.72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-8 sm:px-10 lg:h-[773px] lg:px-0 lg:pb-0">
        <div className="max-w-[484px] pt-8 lg:absolute lg:left-0 lg:top-5 lg:pt-0">
          <div className="flex flex-wrap items-center gap-[13px] text-[12px] font-medium capitalize leading-6 text-[#16A34A]">
            {TAGS.map((tag, i) => (
              <span key={tag} className="flex items-center gap-[5px]">
                {tag}
                {i < TAGS.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[#1E293B]" />
                )}
              </span>
            ))}
          </div>

          <div className="mt-[16px] flex flex-col gap-[19px] lg:mt-[36px]">
            <h1 className="text-[40px] font-extrabold leading-[56px] tracking-[0.02em] text-[#1E293B] sm:text-[50px]">
              Research.
              <br />
              Innovate.
              <br />
              Collaborate.
              <br />
              <span className="text-[#16A34A]">Transform Africa.</span>
            </h1>

            <p className="max-w-[482px] text-[18px] font-normal leading-[36px] text-[#64748B]">
              Through collaborative research, policy engagement and innovation, ACRIDC
              empowers governments, institutions and communities with knowledge that
              creates measurable and lasting impact across Africa.
            </p>

            <div className="flex flex-wrap items-end gap-9">
              <PrimaryButton href="/our-work">Explore our Work</PrimaryButton>
              <OutlineButton href="/partner-with-us" color="navy">
                Become a Partner
              </OutlineButton>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {FLOATING_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className={`pointer-events-auto absolute flex h-[120px] items-center justify-center rounded-[24px] border border-white/24 bg-[rgba(227,238,248,0.2)] shadow-[0px_12px_40px_rgba(255,255,255,0.18)] backdrop-blur-[10px] ${badge.className}`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-[50px] w-[50px] items-center justify-center rounded-full text-white ${badge.color}`}
                  >
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className="text-[20px] font-semibold leading-[30px] text-white drop-shadow-[0_1px_8px_rgba(15,23,42,0.45)]">
                    {badge.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 hidden gap-[18px] lg:absolute lg:left-[524px] lg:top-[420px] lg:mt-0 lg:flex">
          {THUMBNAILS.map((thumb) => (
            <Link
              key={thumb.title}
              href={thumb.href}
              className="group relative h-[200px] w-[240px] shrink-0 overflow-hidden rounded-[24px] border border-white/40"
            >
              <Image
                src={thumb.src}
                alt={thumb.title}
                fill
                sizes="240px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-5 flex items-center justify-between px-[19px]">
                <span className="max-w-[101px] text-[14.6px] font-semibold leading-[18px] text-white">
                  {thumb.title}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/24 text-white backdrop-blur-sm">
                  <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 lg:hidden">
          {THUMBNAILS.map((thumb) => (
            <Link
              key={thumb.title}
              href={thumb.href}
              className="group relative h-24 overflow-hidden rounded-[24px]"
            >
              <Image src={thumb.src} alt={thumb.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                <span className="text-sm font-semibold text-white">{thumb.title}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative mt-8 hidden h-[120px] items-center rounded-[24px] border border-white/24 bg-[rgba(227,238,248,0.32)] px-6 shadow-[0px_18px_60px_rgba(8,24,48,0.12)] backdrop-blur-[12px] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:flex lg:w-full">
          <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <span className="w-[111px] text-[14px] font-normal leading-6 text-[#1E293B]">
              OUR IMPACT ECOSYSTEM
            </span>
            {ECOSYSTEM.map((item) => {
              const Icon = item.icon;
              const tone = item.muted ? "text-[#94A3B8]" : "text-[#1E293B]";
              return (
                <span key={item.label} className="flex items-center gap-10">
                  <span className={`h-8 w-px ${item.muted ? "bg-[#CBD5E1]" : "bg-[#1E293B]"}`} />
                  <span className={`flex items-center gap-4 text-[14px] font-normal leading-[30px] ${tone}`}>
                    <Icon size={32} strokeWidth={1.5} />
                    {item.label}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
