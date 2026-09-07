import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Send,
  FileText,
  Users,
  TrendingUp,
  Maximize2,
} from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

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

const PILL_ITEMS = [
  { icon: FileText, label: "Research" },
  { icon: TrendingUp, label: "Innovate" },
  { icon: Users, label: "Collaborate" },
  { icon: Maximize2, label: "Transform Africa" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 50% 38%, #FFFFFF 0%, #EAF6EE 48%, #F4FBF6 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[8%] top-[-4%] h-[118%] w-[78%] max-w-[820px] sm:-right-[2%] sm:w-[56%] lg:right-0 lg:w-[48%]"
        >
          <Image
            src="/images/partner-africa-network.png"
            alt=""
            fill
            sizes="820px"
            className="object-contain object-right"
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 pb-4 pt-12 sm:px-10 lg:px-20 lg:pt-[50px]">
          <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
            <span className="flex items-center gap-2 text-[14px] font-medium uppercase leading-[19px] tracking-[0.08em] text-[#16A34A]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#16A34A]" />
              Partner With Us
            </span>
            <h2 className="mt-6 text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em]">
              <span className="block text-[#16233B]">Partner With</span>
              <span className="block text-[#16A34A]">ACRIDC-Africa</span>
            </h2>
            <p className="mt-6 max-w-[566px] text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82]">
              ACRIDC-Africa welcomes strategic partnerships and collaborative relationships
              that advance its Vision, Mission, Strategic Goal, Objects and public benefit
              purposes.
            </p>
            <div className="mt-[30px] flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-[23px]">
              <Link
                href="/research/areas"
                className="inline-flex h-[56px] items-center justify-center gap-3 rounded-[14px] border border-[#16A34A] bg-[#16A34A] px-5 text-base font-semibold leading-[27px] text-white sm:h-[72px] sm:text-[20px]"
              >
                <Send size={24} />
                Research With Us
                <ArrowRight size={24} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[56px] items-center justify-center gap-3 rounded-[14px] border-2 border-[#16A34A] bg-white/70 px-5 text-base font-semibold leading-[27px] text-[#1E293B] sm:h-[72px] sm:text-[20px]"
              >
                <Mail size={24} />
                Contact Us
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-[920px] flex-col items-center gap-5 rounded-[32px] bg-[#E5F2EA] px-6 py-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-4 sm:rounded-full sm:px-8 lg:flex-nowrap lg:justify-between lg:px-10">
            {PILL_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex w-full items-center gap-1.5 sm:w-auto">
                  <span className="flex h-[51px] w-[51px] shrink-0 items-center justify-center rounded-full bg-[rgba(22,163,74,0.12)] text-[#16A34A] shadow-[0px_6.76px_20.27px_rgba(15,23,42,0.08)]">
                    <Icon size={26} strokeWidth={1.75} />
                  </span>
                  <span className="text-left text-[14px] font-semibold leading-[130%] text-[#1E293B]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-10 sm:px-10 lg:px-20">
        <div className="relative mt-12">
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
