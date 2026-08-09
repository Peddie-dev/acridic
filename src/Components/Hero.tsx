import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
  Zap,
  RefreshCw,
  Landmark,
  GraduationCap,
  TrendingUp,
  Users,
  Briefcase,
  Plus,
  type LucideIcon,
} from "lucide-react";

const TAGS = ["African-Led", "Evidence Driven", "Impact Focused"];

const FLOATING_BADGES = [
  { icon: Menu, label: "Research", color: "bg-[#1E3A5F]" },
  { icon: Zap, label: "Innovation", color: "bg-emerald-600" },
  { icon: RefreshCw, label: "Collaboration", color: "bg-violet-600" },
];

const THUMBNAILS = [
  {
    title: "Community Empowerment",
    src: "/images/hero-thumb-community.png",
    href: "/impact/community",
  },
  {
    title: "Evidence & Innovation",
    src: "/images/hero-thumb-innovation.png",
    href: "/impact/innovation",
  },
  {
    title: "Climate & Resillience",
    src: "/images/hero-thumb-climate.png",
    href: "/impact/climate",
  },
];

const ECOSYSTEM: { icon: LucideIcon; label: string }[] = [
  { icon: Landmark, label: "Governments" },
  { icon: GraduationCap, label: "Universities" },
  { icon: TrendingUp, label: "Development" },
  { icon: Users, label: "Civil Society" },
  { icon: Briefcase, label: "Private Sector" },
  { icon: Plus, label: "More" },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[780px] overflow-hidden lg:min-h-[840px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-110"
        />
        {/* Left-to-right readability gradient over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1247px] flex-col px-4 pb-3 pt-40 sm:px-6 sm:pt-44 lg:pt-48">
        {/* Eyebrow tags */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
          {TAGS.map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              {tag}
              {i < TAGS.length - 1 && (
                <span className="text-emerald-600">•</span>
              )}
            </span>
          ))}
        </div>

        <div className="max-w-xl">
          {/* Heading */}
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            Research.
            <br />
            Innovate.
            <br />
            Collaborate.
            <br />
            <span className="text-emerald-600">Transform</span>{" "}
            <span className="text-[#0D3B66]">Africa.</span>
          </h1>

          {/* Copy */}
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
            Through collaborative research, policy engagement and
            innovation, ACRIDC empowers governments, institutions and
            communities with knowledge that creates measurable and lasting
            impact across Africa.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/our-work"
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#0F3057] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0c2745]"
            >
              Explore our Work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/partner-with-us"
              className="whitespace-nowrap rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-[15px] font-medium text-slate-800 backdrop-blur transition-colors hover:bg-white"
            >
              Become a Partner
            </Link>
          </div>
        </div>

        {/* Floating pillar badges (desktop only) */}
        <div className="absolute right-4 top-40 hidden lg:block xl:right-0">
          <div className="flex flex-col items-end gap-4">
            {FLOATING_BADGES.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  style={{ marginRight: i * 28 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/20 px-5 py-3 shadow-lg ring-1 ring-white/30 backdrop-blur-md"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-white ${badge.color}`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-semibold text-white drop-shadow">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Thumbnail cards — overlap bottom-right of the photo, beside the CTA row */}
        <div className="absolute bottom-24 right-4 hidden gap-4 sm:flex xl:right-0">
          {THUMBNAILS.map((thumb) => (
            <Link
              key={thumb.title}
              href={thumb.href}
              className="group relative h-32 w-40 shrink-0 overflow-hidden rounded-2xl shadow-lg lg:h-36 lg:w-44"
            >
              <Image
                src={thumb.src}
                alt={thumb.title}
                fill
                sizes="176px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                <span className="text-sm font-semibold leading-tight text-white">
                  {thumb.title}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-colors group-hover:bg-white/40">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile-only thumbnail row (stacked layout doesn't have room to overlap) */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:hidden">
          {THUMBNAILS.map((thumb) => (
            <Link
              key={thumb.title}
              href={thumb.href}
              className="group relative h-24 overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={thumb.src}
                alt={thumb.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                <span className="text-sm font-semibold leading-tight text-white">
                  {thumb.title}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Impact ecosystem bar */}
        <div className="mt-16 sm:mt-20 lg:mt-24 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl bg-black/30 px-6 py-5 text-white backdrop-blur-md sm:gap-x-8">
          <span className="text-sm font-semibold leading-tight">
            OUR IMPACT
            <br />
            ECOSYSTEM
          </span>
          {ECOSYSTEM.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className="flex items-center gap-6">
                <span className="hidden h-8 w-px bg-white/25 sm:block" />
                <span className="flex items-center gap-2 text-sm">
                  <Icon size={16} className="opacity-90" />
                  {item.label}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}