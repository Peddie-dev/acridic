"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
  ArrowRight,
  Landmark,
  Shuffle,
  Sprout,
  UserRound,
  CircleUser,
  RefreshCw,
  ChartLine,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

type DropdownKey = "about" | "research";

interface MegaItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface MegaColumn {
  heading: string;
  description?: string;
  items: MegaItem[];
}

interface MegaFooter {
  icon: LucideIcon;
  text: string;
  href: string;
  cta?: string;
  showAfrica?: boolean;
}

interface MegaMenuConfig {
  header?: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  columns: MegaColumn[];
  footer: MegaFooter;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownKey;
}

const ABOUT_MENU: MegaMenuConfig = {
  header: {
    eyebrow: "About",
    heading: "Learn more about ACRIDC",
    description:
      "Explore our mission, leadership, research and impact across Africa.",
  },
  columns: [
    {
      heading: "Organization",
      items: [
        {
          icon: Landmark,
          title: "Who We Are",
          description:
            "Learn about our purpose, identity, and commitment to evidence-based development.",
          href: "/about#who-we-are",
        },
        {
          icon: Shuffle,
          title: "Our Journey",
          description:
            "Explore the milestones that have shaped our growth across Africa.",
          href: "/about#journey",
        },
        {
          icon: Sprout,
          title: "Mission, Vision & Values",
          description:
            "The principles that guide every partnership, programme, and initiative.",
          href: "/about#foundation",
        },
        {
          icon: UserRound,
          title: "Our Partners",
          description:
            "Working alongside governments, universities, and development organizations to create lasting impact.",
          href: "/about#partners",
        },
      ],
    },
    {
      heading: "Organization",
      items: [
        {
          icon: CircleUser,
          title: "Leadership",
          description:
            "Meet the experienced team guiding ACRIDC’s vision and research agenda.",
          href: "/about#leadership",
        },
        {
          icon: RefreshCw,
          title: "Research Areas",
          description:
            "Discover the thematic areas where we generate evidence and practical solutions.",
          href: "/about#research-areas",
        },
        {
          icon: ChartLine,
          title: "Our Impact",
          description:
            "See how our research is creating measurable change across communities.",
          href: "/about#impact",
        },
      ],
    },
  ],
  footer: {
    icon: Sprout,
    text: "Advancing evidence-based research, innovation, and partnerships for a sustainable Africa.",
    href: "/about",
    cta: "Learn More",
  },
};

const RESEARCH_MENU: MegaMenuConfig = {
  columns: [
    {
      heading: "Research",
      description: "Explore our research ecosystem.",
      items: [
        {
          icon: Landmark,
          title: "Research Overview",
          description: "Our research philosophy and evidence-driven approach.",
          href: "/research",
        },
        {
          icon: Shuffle,
          title: "Research Areas",
          description:
            "Explore the thematic priorities shaping our research across Africa.",
          href: "/research/areas",
        },
        {
          icon: Sprout,
          title: "Research Impact",
          description:
            "See how our research influences policy, institutions, and communities.",
          href: "/#impact",
        },
        {
          icon: UserRound,
          title: "Research Team",
          description:
            "Meet the experts driving multidisciplinary research and innovation.",
          href: "/about#leadership",
        },
      ],
    },
    {
      heading: "Discover",
      description: "Research resources & insights.",
      items: [
        {
          icon: CircleUser,
          title: "Publications",
          description:
            "Browse research reports, journals, and knowledge resources.",
          href: "/research/publications",
        },
        {
          icon: RefreshCw,
          title: "Policy Briefs",
          description:
            "Evidence-based insights for policymakers and development partners.",
          href: "/research/policy-briefs",
        },
        {
          icon: ChartLine,
          title: "Case Studies",
          description:
            "Real-world examples of research creating measurable impact.",
          href: "/research/case-studies",
        },
        {
          icon: TrendingUp,
          title: "Resource Library",
          description:
            "Access datasets, toolkits, reports, and downloadable resources.",
          href: "/research/library",
        },
      ],
    },
  ],
  footer: {
    icon: ChartLine,
    text: "Advancing evidence through research, collaboration, and innovation across Africa.",
    href: "/research",
    showAfrica: true,
  },
};

const MENUS: Record<DropdownKey, MegaMenuConfig> = {
  about: ABOUT_MENU,
  research: RESEARCH_MENU,
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", dropdown: "about" },
  { label: "Research", href: "/research", dropdown: "research" },
  { label: "Our Work", href: "/our-work" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

function MegaItemRow({ item, onNavigate }: { item: MegaItem; onNavigate?: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group flex items-start gap-3.5 rounded-[16px] py-2 pr-1 transition-colors hover:bg-[#F3F8F5] focus-visible:bg-[#F3F8F5] focus-visible:outline-none lg:gap-4 lg:py-2.5"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#EAF9EE] text-[#16A34A]">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1 pt-0.5">
        <span className="flex items-start justify-between gap-3">
          <span className="text-[16px] font-semibold leading-[22px] text-[#16233B] transition-colors group-hover:text-[#16A34A]">
            {item.title}
          </span>
          <ArrowRight
            size={18}
            strokeWidth={1.75}
            className="mt-0.5 shrink-0 text-[#16A34A]"
          />
        </span>
        <span className="mt-1 block text-[14px] font-medium leading-[170%] text-[#5B6B82]">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

function MegaFooterBanner({
  footer,
  onNavigate,
}: {
  footer: MegaFooter;
  onNavigate?: () => void;
}) {
  const Icon = footer.icon;
  return (
    <div className="relative min-h-[88px] overflow-hidden rounded-[20px] bg-[#EAF6EE] px-5 py-5 sm:px-6 lg:py-6">
      <div className="relative z-10 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#D8F0E0] text-[#16A34A] lg:h-14 lg:w-14">
          <Icon size={24} strokeWidth={1.75} />
        </span>
        <p className="min-w-0 flex-1 text-[14px] font-semibold leading-[150%] text-[#16233B] sm:text-[15px] lg:max-w-[38rem] lg:text-[16px] lg:leading-[140%]">
          {footer.text}
        </p>
        {footer.cta && (
          <Link
            href={footer.href}
            onClick={onNavigate}
            className="hidden h-11 shrink-0 items-center gap-2 rounded-full border border-[#16A34A] px-5 text-[14px] font-semibold text-[#16A34A] transition-colors hover:bg-white lg:inline-flex"
          >
            {footer.cta}
            <ArrowRight size={18} strokeWidth={1.75} />
          </Link>
        )}
      </div>
      {footer.showAfrica && (
        <Image
          src="/images/dotted-africa.png"
          alt=""
          width={180}
          height={200}
          className="knockout-black pointer-events-none absolute right-4 top-1/2 hidden h-[130%] w-auto -translate-y-1/2 opacity-60 lg:block"
        />
      )}
    </div>
  );
}

function MegaPanel({
  menu,
  onNavigate,
  embedded = false,
}: {
  menu: MegaMenuConfig;
  onNavigate?: () => void;
  embedded?: boolean;
}) {
  return (
    <div
      className={
        embedded
          ? "w-full"
          : "flex max-h-[calc(100dvh-7.5rem)] w-[min(64rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[32px] border border-[#EEF2F7] bg-white shadow-[0px_24px_80px_rgba(12,25,48,0.12)]"
      }
    >
      <div className={embedded ? "" : "min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7"}>
        {menu.header && (
          <div className="mb-5 border-b border-[#E2E8F0] pb-5">
            <p className="text-[12px] font-semibold uppercase leading-[16px] tracking-[0.08em] text-[#16A34A]">
              {menu.header.eyebrow}
            </p>
            <h3 className="mt-2 text-[20px] font-bold leading-[130%] tracking-[-0.02em] text-[#16233B]">
              {menu.header.heading}
            </h3>
            <p className="mt-1 text-[14px] font-medium leading-[170%] text-[#5B6B82]">
              {menu.header.description}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-0">
          {menu.columns.map((column, index) => (
            <div
              key={`${column.heading}-${index}`}
              className={index > 0 ? "lg:border-l lg:border-[#E2E8F0] lg:pl-10" : "lg:pr-10"}
            >
              <p className="text-[12px] font-semibold uppercase leading-[16px] tracking-[0.08em] text-[#16A34A]">
                {column.heading}
              </p>
              {column.description && (
                <p className="mt-1 text-[14px] font-medium leading-[170%] text-[#5B6B82]">
                  {column.description}
                </p>
              )}
              <ul className={`flex flex-col ${column.description ? "mt-3" : "mt-4"}`}>
                {column.items.map((item) => (
                  <li key={item.title}>
                    <MegaItemRow item={item} onNavigate={onNavigate} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={embedded ? "mt-5 border-t border-[#E2E8F0] pt-5" : "shrink-0 border-t border-[#E2E8F0] px-6 pb-6 pt-5 sm:px-8 sm:pb-7"}>
        <MegaFooterBanner footer={menu.footer} onNavigate={onNavigate} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src="/Logos.png"
        alt="ACRIDC-Africa"
        width={316}
        height={79}
        className="h-10 w-auto object-contain sm:h-12 lg:h-14 xl:h-[63px]"
        priority
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  return (
    <header className="sticky top-0 z-[60] overflow-visible bg-transparent px-4 pt-3 pb-2 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6 xl:px-20 xl:pt-8">
      <div
        ref={navRef}
        onMouseLeave={() => setOpenMenu(null)}
        className="relative mx-auto max-w-[1280px]"
      >
        <nav className="flex h-16 min-w-0 items-center justify-between gap-3 rounded-[20px] border border-white/28 bg-white/60 py-2 pl-3 pr-2 shadow-[0px_18px_60px_rgba(8,24,48,0.12)] backdrop-blur-[12px] sm:h-[72px] sm:rounded-[24px] sm:pl-4 sm:pr-3 lg:h-[88px]">
          <Logo />

          <ul className="hidden min-w-0 items-center gap-4 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isOpen = openMenu === link.dropdown;
              const isActive =
                isOpen ||
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.split("#")[0]));
              return (
                <li key={link.label} className="relative">
                  {link.dropdown ? (
                    <button
                      type="button"
                      onMouseEnter={() => setOpenMenu(link.dropdown ?? null)}
                      onClick={() => setOpenMenu(isOpen ? null : (link.dropdown ?? null))}
                      aria-expanded={isOpen}
                      className={`flex items-center gap-1.5 text-[15px] font-medium leading-[27px] whitespace-nowrap transition-colors xl:gap-3 xl:text-[18px] ${
                        isActive ? "text-[#16A34A]" : "text-[#1E293B] hover:text-[#16A34A]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onMouseEnter={() => setOpenMenu(null)}
                      className="whitespace-nowrap text-[15px] font-medium leading-[27px] text-[#1E293B] transition-colors hover:text-[#16A34A] xl:text-[18px]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            href="/partner-with-us"
            onMouseEnter={() => setOpenMenu(null)}
            className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-[14px] bg-[#0D3B66] px-3 text-sm font-semibold text-white transition-colors hover:bg-[#0a2f52] lg:flex xl:h-14 xl:gap-5 xl:px-5 xl:text-base"
          >
            Partner With Us
            <ArrowRight size={24} strokeWidth={1.75} />
          </Link>

          <button
            type="button"
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileSection(null);
            }}
            className="flex h-14 shrink-0 items-center gap-2 rounded-[14px] bg-[#16A34A] px-5 text-[14px] font-semibold leading-[19px] text-white hover:bg-[#15803d] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            Menu
            {mobileOpen ? (
              <X size={24} strokeWidth={2} className="shrink-0" />
            ) : (
              <Menu size={24} strokeWidth={2} className="shrink-0" />
            )}
          </button>
        </nav>

        {openMenu && (
          <div className="absolute left-0 top-full z-[70] hidden pt-3 lg:block">
            <MegaPanel menu={MENUS[openMenu]} onNavigate={closeAll} />
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-h-[min(78vh,52rem)] max-w-[1280px] overflow-y-auto rounded-[24px] border border-[#EEF2F7] bg-white p-4 shadow-[0px_24px_60px_rgba(12,25,48,0.10)] lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const isSectionOpen = mobileSection === link.dropdown;
              return (
                <li key={link.label} className="border-b border-[#E2E8F0] last:border-b-0">
                  {link.dropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSection(isSectionOpen ? null : (link.dropdown ?? null))
                        }
                        aria-expanded={isSectionOpen}
                        className={`flex w-full items-center justify-between py-3 text-[16px] font-medium leading-[27px] ${
                          isSectionOpen ? "text-[#16A34A]" : "text-[#16233B]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isSectionOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isSectionOpen && (
                        <div className="pb-3">
                          <MegaPanel
                            menu={MENUS[link.dropdown]}
                            onNavigate={closeAll}
                            embedded
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeAll}
                      className="block py-3 text-[16px] font-medium leading-[27px] text-[#16233B]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/partner-with-us"
            onClick={closeAll}
            className="mt-3 flex h-14 items-center justify-center gap-3 rounded-[14px] bg-[#0D3B66] px-5 text-base font-semibold text-white"
          >
            Partner With Us
            <ArrowRight size={24} />
          </Link>
        </div>
      )}
    </header>
  );
}
