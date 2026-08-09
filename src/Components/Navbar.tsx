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
    title: "About ARCIDC",
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
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
        {eyebrow}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{heading}</h3>
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="flex-1">
                  <span className="flex items-center justify-between">
                    <span className="font-medium text-slate-900">
                      {item.title}
                    </span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 -translate-x-1 text-slate-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-slate-500">
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

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
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
    <header className="absolute inset-x-0 top-6 z-50 px-4 sm:px-6">
      <nav
        ref={navRef}
        className="relative mx-auto flex min-h-[79px] max-w-[1247px] items-center justify-between rounded-full border border-white/40 bg-white/70 py-2 pl-4 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl sm:pl-6 sm:pr-3"
      >
        {/* Logo */}
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

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isOpen = openMenu === link.dropdown;
            const isActive = link.dropdown && isOpen;
            return (
              <li key={link.label} className="relative">
                {link.dropdown ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMenu(isOpen ? null : link.dropdown ?? null)
                    }
                    aria-expanded={isOpen}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                      isActive
                        ? "text-emerald-600"
                        : "text-slate-700 hover:text-emerald-600"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="rounded-full px-4 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:text-emerald-600"
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

        {/* CTA */}
        <Link
          href="/partner-with-us"
          className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[#0F3057] px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-[#0c2745] lg:flex"
        >
          Partner With Us
          <ArrowRight size={16} />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/40 bg-white/90 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col divide-y divide-slate-100">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="py-1">
                {link.dropdown ? (
                  <details>
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-[15px] font-medium text-slate-700">
                      {link.label}
                      <ChevronDown size={16} />
                    </summary>
                    <ul className="pb-2 pl-2">
                      {(link.dropdown === "about"
                        ? ABOUT_ITEMS
                        : RESEARCH_ITEMS
                      ).map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block py-2 text-sm text-slate-600"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-[15px] font-medium text-slate-700"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/partner-with-us"
            className="mt-3 flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0F3057] px-5 py-3 text-[15px] font-medium text-white"
          >
            Partner With Us
            <ArrowRight size={16} />
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
