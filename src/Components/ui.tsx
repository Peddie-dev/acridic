import Link from "next/link";
import { ArrowRight, Download, type LucideIcon } from "lucide-react";

export function Eyebrow({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <span
      className={`flex items-center gap-2 text-[14px] font-medium capitalize leading-[19px] tracking-[0.08em] text-[#16A34A] ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="h-1 w-1 shrink-0 rounded-full bg-[#1E293B]" />
      {children}
    </span>
  );
}

const btnBase =
  "inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-[14px] px-5 text-base font-semibold leading-[22px] transition-colors";

export function PrimaryButton({
  href,
  children,
  icon: Icon = ArrowRight,
}: {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <Link href={href} className={`${btnBase} bg-[#0D3B66] text-white hover:bg-[#0a2f52]`}>
      {children}
      <Icon size={24} strokeWidth={1.75} />
    </Link>
  );
}

export function EmeraldButton({
  href,
  children,
  icon: Icon = Download,
}: {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className={`${btnBase} border border-[#16A34A] bg-[#16A34A] text-white hover:bg-[#15803d]`}
    >
      {children}
      <Icon size={24} strokeWidth={1.75} />
    </Link>
  );
}

export function OutlineButton({
  href,
  children,
  icon: Icon = ArrowRight,
  color = "green",
}: {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  color?: "green" | "navy";
}) {
  const styles =
    color === "navy"
      ? "border border-[#0D3B66] text-[#1E293B] hover:bg-[#0D3B66]/5"
      : "border border-[#16A34A] text-[#1E293B] hover:bg-[#16A34A]/5";
  return (
    <Link href={href} className={`${btnBase} ${styles}`}>
      {children}
      <Icon size={24} strokeWidth={1.75} className={color === "green" ? "text-[#16A34A]" : ""} />
    </Link>
  );
}

export function TextArrowLink({
  href,
  children,
  className = "text-[#1E293B]",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 text-base font-semibold leading-[22px] transition-colors hover:opacity-80 ${className}`}
    >
      {children}
      <ArrowRight size={24} strokeWidth={1.75} />
    </Link>
  );
}

export function IconTile({
  icon: Icon,
  className = "bg-[#F3F8F5]",
  size = 64,
  iconSize = 28,
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
  iconSize?: number;
}) {
  return (
    <span
      style={{ width: size, height: size }}
      className={`inline-flex shrink-0 items-center justify-center rounded-[20px] text-[#16A34A] ${className}`}
    >
      <Icon size={iconSize} strokeWidth={1.75} />
    </span>
  );
}

export function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-[#F8FAFC] ${className}`}>
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20 lg:py-[40px]">
        {children}
      </div>
    </section>
  );
}
