import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Navigation,
  Mail,
  Feather,
  Users,
  TrendingUp,
} from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Eyebrow } from "./ui";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Research Areas", href: "/research/areas" },
  { label: "Projects", href: "/our-work" },
  { label: "Partnerships", href: "/about/partners" },
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
  { label: "Twitter", href: "https://x.com", icon: FaXTwitter },
];

const VALUES = [
  { icon: Feather, label: "Evidence-Based Solutions" },
  { icon: Users, label: "Stronger Partnership" },
  { icon: TrendingUp, label: "A more Resilient Africa" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/project-climate.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-[#F8FAFC]/70" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-12 sm:px-10 lg:px-20 lg:pt-[50px]">
        <div className="mx-auto flex max-w-[615px] flex-col items-center text-center">
          <Eyebrow align="center">Work With Us</Eyebrow>
          <h2 className="mt-6 text-[36px] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] sm:text-[48px]">
            Let&apos;s Build Africa&apos;s Future Together.
          </h2>
          <p className="mt-6 max-w-[566px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
            Our research transforms complex challenges into practical insights that inform
            policy, strengthen institutions, and create lasting impact across Africa.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center justify-center gap-[23px]">
            <Link
              href="/partner-with-us"
              className="inline-flex h-[72px] items-center gap-3 rounded-[14px] border border-[#16A34A] bg-[#16A34A] px-5 text-[20px] font-semibold leading-[27px] text-white"
            >
              <Navigation size={24} />
              Become a Partner
              <ArrowRight size={24} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-[72px] items-center gap-3 rounded-[14px] border-2 border-[#16A34A] px-5 text-[20px] font-semibold leading-[27px] text-[#1E293B]"
            >
              <Mail size={24} />
              Contact Us
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-[611px] flex-wrap items-center justify-center gap-5 rounded-full bg-[#E5F2EA] px-3 py-5 sm:gap-[19px] sm:px-3">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <div key={value.label} className="flex items-center gap-5">
                {i > 0 && <span className="hidden h-16 w-px bg-[rgba(203,213,225,0.48)] sm:block" />}
                <div className="flex items-center gap-1.5">
                  <span className="flex h-[51px] w-[51px] items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A]">
                    <Icon size={26} />
                  </span>
                  <span className="max-w-[113px] text-left text-[14px] font-semibold leading-[130%] text-[#1E293B]">
                    {value.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[293px] rounded-[90px] bg-white blur-[60px]" />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[303px_minmax(0,1fr)]">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logos.png"
                alt="ACRIDC-Africa"
                width={316}
                height={79}
                className="h-16 w-auto object-contain sm:h-[79px]"
              />
            </Link>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
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
                          <Icon size={24} />
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <ColHeading>Stay Updated</ColHeading>
                <p className="mt-4 text-[14px] font-medium leading-[19px] tracking-[0.02em] text-[#64748B]">
                  Receive the latest research publications, policy briefs, project updates,
                  and upcoming events directly in your inbox.
                </p>
                <form className="mt-4 flex h-14 items-center gap-3 rounded-[14px] border border-[#E2E8F0] bg-white px-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="min-w-0 flex-1 bg-transparent text-base font-semibold text-[#1E293B] outline-none placeholder:text-[#64748B]"
                  />
                  <button type="submit" aria-label="Subscribe" className="text-[#16A34A]">
                    <ArrowRight size={24} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="relative mt-12 border-t border-[#E2E8F0] pt-8">
            <div className="flex flex-col gap-4 text-[14px] font-medium leading-[19px] tracking-[0.02em] text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 ACRIDC. All rights reserved.</p>
              <div className="flex flex-wrap items-center gap-5">
                <Link href="/privacy">Privacy Policy</Link>
                <span className="h-5 w-px bg-[#64748B]" />
                <Link href="/terms">Terms of Use</Link>
                <span className="h-5 w-px bg-[#64748B]" />
                <Link href="/accessibility">Accessibility</Link>
              </div>
            </div>
          </div>
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
