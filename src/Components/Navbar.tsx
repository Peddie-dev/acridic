"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
  ArrowRight,
  Landmark,
  ShieldUser,
  Users,
  Briefcase,
  Camera,
  FileText,
  BookOpen,
  ClipboardList,
} from "lucide-react";

type DropdownKey = "about" | "research";

interface DropdownItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownKey;
}

const ABOUT_ITEMS: DropdownItem[] = [
  {
    icon: Landmark,
    title: "About ACRIDC",
    description: "Mission, vision and our journey toward a better Africa.",
    href: "/about",
  },
  {
    icon: ShieldUser,
    title: "Leadership",
    description: "Meet the team shaping ACRIDC's strategic direction and research.",
    href: "/about/leadership",
  },
  {
    icon: Users,
    title: "Partners",
    description: "Explore organizations collaborating with us to create lasting impact.",
    href: "/about/partners",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Join our growing team and help build Africa's future through research.",
    href: "/about/careers",
  },
];

const RESEARCH_ITEMS: DropdownItem[] = [
  {
    icon: Camera,
    title: "Research Areas",
    description: "Explore the key themes shaping our research and innovation.",
    href: "/research/areas",
  },
  {
    icon: FileText,
    title: "Publications",
    description: "Browse journals, reports, and knowledge products.",
    href: "/research/publications",
  },
  {
    icon: BookOpen,
    title: "Policy Briefs",
    description: "Concise, evidence-based recommendations supporting policy.",
    href: "/research/policy-briefs",
  },
  {
    icon: ClipboardList,
    title: "Case Studies",
    description: "Discover real-world projects showcasing measurable impact.",
    href: "/research/case-studies",
  },
];

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", dropdown: "about" },
  { label: "Research", href: "/research", dropdown: "research" },
  { label: "Our Work", href: "/our-work" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

interface DropdownPanelProps {
  eyebrow: string;
  heading: string;
  items: DropdownItem[];
}

function DropdownPanel({ eyebrow, heading, items }: DropdownPanelProps) {
  return (
    <div className="absolute left-0 top-[calc(100%+12px)] w-[420px] rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#16A34A]">
        {eyebrow}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-[#1E293B]">{heading}</h3>
      <div className="mt-3 border-t border-slate-100" />
      <ul className="mt-3 flex flex-col">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group flex items-start gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-emerald-50/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#16A34A]">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="flex-1">
                  <span className="flex items-center justify-between">
                    <span className="font-medium text-[#1E293B]">{item.title}</span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 -translate-x-1 text-slate-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-[#64748B]">
                    {item.description}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
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
        className="h-14 w-auto object-contain sm:h-[63px]"
        priority
      />
    </Link>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-transparent px-5 pt-4 pb-3 sm:px-10 sm:pt-6 lg:px-20 lg:pt-8">
      <nav
        ref={navRef}
        className="relative mx-auto flex h-[88px] max-w-[1280px] items-center justify-between rounded-[24px] border border-white/28 bg-white/60 py-2 pl-4 pr-2 shadow-[0px_18px_60px_rgba(8,24,48,0.12)] backdrop-blur-[12px] sm:pl-4 sm:pr-3"
      >
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isOpen = openMenu === link.dropdown;
            return (
              <li key={link.label} className="relative">
                {link.dropdown ? (
                  <button
                    type="button"
                    onClick={() => setOpenMenu(isOpen ? null : (link.dropdown ?? null))}
                    aria-expanded={isOpen}
                    className={`flex items-center gap-2.5 text-[18px] font-medium leading-[27px] transition-colors ${
                      isOpen ? "text-[#16A34A]" : "text-[#1E293B] hover:text-[#16A34A]"
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
                    className="text-[18px] font-medium leading-[27px] text-[#1E293B] transition-colors hover:text-[#16A34A]"
                  >
                    {link.label}
                  </Link>
                )}

                {link.dropdown === "about" && isOpen && (
                  <DropdownPanel
                    eyebrow="About"
                    heading="Learn more about ACRIDC"
                    items={ABOUT_ITEMS}
                  />
                )}
                {link.dropdown === "research" && isOpen && (
                  <DropdownPanel
                    eyebrow="Research"
                    heading="Explore our knowledge hub"
                    items={RESEARCH_ITEMS}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href="/partner-with-us"
          className="hidden h-14 items-center gap-5 whitespace-nowrap rounded-[14px] bg-[#0D3B66] px-5 text-base font-semibold text-white transition-colors hover:bg-[#0a2f52] lg:flex"
        >
          Partner With Us
          <ArrowRight size={24} strokeWidth={1.75} />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#1E293B] lg:hidden"
          aria-label="Toggle menu"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-[1280px] rounded-2xl border border-white/40 bg-white/90 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col divide-y divide-slate-100">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="py-1">
                {link.dropdown ? (
                  <details>
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-[15px] font-medium text-[#1E293B]">
                      {link.label}
                      <ChevronDown size={16} />
                    </summary>
                    <ul className="pb-2 pl-2">
                      {(link.dropdown === "about" ? ABOUT_ITEMS : RESEARCH_ITEMS).map(
                        (item) => (
                          <li key={item.title}>
                            <Link href={item.href} className="block py-2 text-sm text-[#64748B]">
                              {item.title}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-[15px] font-medium text-[#1E293B]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/partner-with-us"
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
