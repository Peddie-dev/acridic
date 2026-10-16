import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Send,
  Users,
  TrendingUp,
  Leaf,
} from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AfricaMark } from "./about/shared";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Research Areas", href: "/research/areas" },
  { label: "Projects", href: "/our-work" },
  { label: "Partnerships", href: "/about#partners" },
  { label: "Publications", href: "/research/publications" },
];

const RESOURCES = [
  { label: "News & Insights", href: "/news" },
  { label: "Research Reports", href: "/research/reports" },
  { label: "Policy Briefs", href: "/research/policy-briefs" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/about/careers" },
];

const SOCIAL = [
  { label: "Linkedin", href: "https://www.linkedin.com", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "Twitter", href: "https://x.com", icon: FaTwitter },
];

const PILLS = [
  { icon: Leaf, label: "Evidence-Based Solutions" },
  { icon: Users, label: "Stronger Partnership" },
  { icon: TrendingUp, label: "A more Resilient Africa" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F4FBF6]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 38% 18%, #FFFFFF 0%, #F3FAF5 42%, #E8F5EC 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[6%] -right-[3%] h-[112%] w-[70%] max-w-none"
      >
        <Image
          src="/images/footer-africa-silhouette-v2.png"
          alt=""
          fill
          sizes="840px"
          className="object-contain object-[right_center] mix-blend-multiply"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pt-10 sm:px-10 lg:px-20 lg:pt-[50px]">
        <div className="mx-auto flex max-w-[615px] flex-col items-center text-center">
          <span className="flex items-center gap-2 text-[12px] font-medium uppercase leading-[19px] tracking-[0.08em] text-[#16A34A] lg:text-[14px]">
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#1E293B]" />
            Let&apos;s Collaborate
          </span>
          <h2 className="mt-6 text-[32px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] sm:text-[40px] lg:text-[48px]">
            Let&apos;s Build Africa&apos;s
            <br />
            <span className="text-[#16A34A]">Future Together.</span>
          </h2>
          <p className="mt-6 max-w-[566px] text-[16px] font-normal leading-[160%] tracking-[-0.02em] text-[#5B6B82] lg:text-[18px] lg:leading-[175%]">
            Our research transforms complex challenges into practical insights that inform policy,
            strengthen institutions, and create lasting impact across Africa.
          </p>
          <div className="mt-[30px] flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-[23px]">
            <Link
              href="/partner-with-us"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-[14px] border border-[#16A34A] bg-[#16A34A] px-5 text-[16px] font-semibold leading-[27px] text-white hover:bg-[#15803d] sm:h-[72px] sm:px-5 sm:text-[20px]"
            >
              <Send size={24} strokeWidth={1.75} />
              Become a Partner
              <ArrowRight size={24} strokeWidth={1.75} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-[14px] border-2 border-[#16A34A] bg-white px-5 text-[16px] font-semibold leading-[27px] text-[#1E293B] hover:bg-white sm:h-[72px] sm:px-5 sm:text-[20px]"
            >
              <Mail size={24} strokeWidth={1.75} />
              Contact Us
              <ArrowRight size={24} strokeWidth={1.75} />
            </Link>
          </div>

          <div className="mt-5 flex w-full max-w-[611px] flex-col gap-4 rounded-[28px] bg-[#E5F2EA] px-4 py-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:rounded-full sm:px-3 sm:py-5">
            {PILLS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center sm:h-[64px]">
                  {index > 0 && (
                    <span
                      aria-hidden
                      className="mx-3 hidden h-10 w-px bg-[rgba(203,213,225,0.48)] sm:mx-[19px] sm:block"
                    />
                  )}
                  <div className="flex items-center gap-1.5 sm:gap-[5px]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] shadow-[0px_7px_20px_rgba(15,23,42,0.08)] sm:h-[51px] sm:w-[51px]">
                      <Icon size={26} strokeWidth={1.6} />
                    </span>
                    <span className="max-w-[113px] text-left text-[13px] font-semibold leading-[130%] text-[#1E293B] sm:text-[14px]">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 mt-10 grid grid-cols-1 gap-8 pb-8 lg:mt-12 lg:grid-cols-[303px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(240px,1.35fr)] lg:items-start lg:gap-[46px] lg:pb-9">
          <Link href="/" className="flex items-center gap-[7px]">
            <AfricaMark
              width={115}
              height={124}
              className="h-[90px] w-[84px] shrink-0 lg:h-[124px] lg:w-[115px]"
            />
            <span>
              <span className="block text-[26px] font-extrabold leading-[44px] text-[#16A34A] lg:text-[32px]">
                ACRIDC
              </span>
              <span className="block max-w-[181px] text-[14px] font-medium leading-[19px] tracking-[0.02em] text-[#64748B]">
                Research for Sustainable Development in Africa.
              </span>
            </span>
          </Link>

          <FooterCol title="Quick Links" links={QUICK_LINKS} />
          <FooterCol title="Resources" links={RESOURCES} />
          <div>
            <ColHeading>Connect</ColHeading>
            <ul className="mt-4 flex flex-col gap-3">
              {SOCIAL.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-3 text-[14px] font-semibold leading-[19px] text-[#64748B] hover:text-[#16A34A]"
                    >
                      <Icon size={20} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ColHeading>Stay Updated</ColHeading>
            <p className="mt-4 max-w-[280px] text-[14px] font-medium leading-[150%] tracking-[0.02em] text-[#64748B]">
              Receive the latest research publications, policy briefs, project updates, and upcoming
              events directly in your inbox.
            </p>
            <form className="mt-4 flex h-12 items-center gap-3 rounded-full border border-[#E2E8F0] bg-white px-5 shadow-[0px_8px_24px_rgba(12,25,48,0.04)] sm:h-[52px]">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="min-w-0 flex-1 bg-transparent text-[14px] font-medium text-[#1E293B] outline-none placeholder:text-[#94A3B8] sm:text-base"
              />
              <button type="submit" aria-label="Subscribe" className="text-[#16A34A]">
                <ArrowRight size={22} strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[96px] sm:h-[108px] lg:h-[120px]">
        <Image
          src="/images/footer-trees-v2.png"
          alt=""
          fill
          sizes="1440px"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#E8F5EC] to-transparent" />
      </div>
      <div className="relative z-10 flex h-8 items-center justify-between gap-3 px-5 text-[12px] font-medium leading-[19px] text-[#64748B] sm:h-9 sm:px-10 sm:text-[14px] lg:px-20">
        <p>© 2026 ACRIDC. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <Link href="/privacy" className="hover:text-[#16A34A]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#16A34A]">
            Terms of Use
          </Link>
          <Link href="/accessibility" className="hover:text-[#16A34A]">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[16px] font-semibold uppercase leading-[22px] text-[#16233B]">
        {children}
      </p>
      <span className="mt-2 block h-0.5 w-10 bg-[#16A34A]" />
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <ColHeading>{title}</ColHeading>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[14px] font-medium leading-[19px] tracking-[0.02em] text-[#64748B] hover:text-[#16A34A]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
