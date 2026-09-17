import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Eyebrow, IconTile } from "../ui";

export const aboutSectionPad =
  "px-5 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-16 min-[1440px]:px-20 xl:py-20";

export function LogoPlaceholder() {
  return (
    <div className="flex h-[110px] flex-col items-center justify-center gap-2 rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0px_28px_64px_rgba(12,25,48,0.08)] sm:h-[142px]">
      <ImageIcon size={28} strokeWidth={1.5} className="text-[#CBD5E1]" />
      <span className="text-[11px] font-semibold tracking-[0.18em] text-[#94A3B8]">
        LOGO
      </span>
    </div>
  );
}

export function AfricaMapPlaceholder({
  src,
  alt = "",
  className = "",
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="360px"
          quality={100}
          unoptimized
          className="object-contain object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-full min-h-[180px] w-full flex-col items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#E2E8F0] bg-[#F8FAFC] ${className}`}
      aria-hidden
    >
      <ImageIcon size={32} strokeWidth={1.5} className="text-[#CBD5E1]" />
      <span className="text-[11px] font-semibold tracking-[0.18em] text-[#94A3B8]">
        IMAGE
      </span>
    </div>
  );
}

export function AfricaMark({
  className = "",
  sizes,
  width,
  height,
  src = "/images/dotted-africa.png",
  knockout = true,
}: {
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
  src?: string;
  knockout?: boolean;
}) {
  const classes = `${knockout ? "knockout-black " : ""}pointer-events-none object-contain ${className}`;
  if (width && height) {
    return (
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={classes}
      />
    );
  }
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes={sizes ?? "400px"}
      className={classes}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  id?: string;
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-[600px] text-center" : "max-w-[606px]"} id={id}>
      <Eyebrow align={centered ? "center" : "left"}>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[24px] font-bold leading-[140%] tracking-[-0.02em] text-[#16233B] lg:mt-6 lg:text-[clamp(1.875rem,1rem+2.6vw,3rem)] lg:leading-[110%]">
        {title}
      </h2>
      <div
        className={`mt-4 h-[3px] w-[60px] bg-[#16A34A] lg:mt-6 ${centered ? "mx-auto" : ""}`}
      />
      {description && (
        <p
          className={`mt-5 text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-[#5B6B82] lg:mt-6 lg:text-[18px] lg:leading-[175%] ${
            centered ? "" : "max-w-[513px]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function ValueColumn({
  icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex max-w-[202px] flex-col items-center text-center">
      <IconTile
        icon={icon}
        size={64}
        iconSize={32}
        className="rounded-full bg-[rgba(22,163,74,0.12)] max-lg:!h-14 max-lg:!w-14"
      />
      <h3 className="mt-6 text-[16px] font-semibold leading-[130%] text-[#16233B] lg:mt-8 lg:text-[18px]">
        {title}
      </h3>
      <p className="mt-2 text-[12px] font-medium leading-[140%] text-[#5B6B82] lg:text-[14px] lg:leading-[170%]">
        {description}
      </p>
    </div>
  );
}

export function ValuesRow({
  items,
}: {
  items: { icon: LucideIcon; title: string; description: string }[];
}) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-x-4 lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:gap-0">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`flex items-center justify-center gap-8 py-6 lg:gap-[42px] lg:py-0 ${
            i >= 2 ? "border-t border-[#E2E8F0] lg:border-t-0" : ""
          }`}
        >
          {i > 0 && (
            <span className="hidden h-[160px] w-px shrink-0 bg-[#E2E8F0] lg:block" />
          )}
          <ValueColumn {...item} />
        </div>
      ))}
    </div>
  );
}

export function StatChip({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-start lg:gap-2.5 min-[1440px]:gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[rgba(22,163,74,0.12)] text-[#16A34A] lg:h-11 lg:w-11 min-[1440px]:h-14 min-[1440px]:w-14">
        <Icon size={24} strokeWidth={1.75} className="lg:h-6 lg:w-6 min-[1440px]:h-8 min-[1440px]:w-8" />
      </span>
      <div className="min-w-0">
        <p className="font-display whitespace-nowrap text-[40px] font-bold leading-[54px] text-[#16A34A] lg:text-[32px] lg:leading-10 min-[1440px]:text-[48px] min-[1440px]:leading-[65px]">
          {value}
        </p>
        <p className="mt-1 max-w-[116px] text-[12px] font-medium leading-4 text-[#64748B] min-[1440px]:max-w-[130px] min-[1440px]:text-[13px] min-[1440px]:leading-[18px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export function StatsGrid({
  items,
}: {
  items: { icon: LucideIcon; value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 items-start gap-y-6 lg:grid-cols-3 lg:gap-y-10">
      {items.map((item, i) => (
        <div
          key={`${item.value}-${item.label}-${i}`}
          className={`${
            i % 2 === 1
              ? "border-l border-[rgba(203,213,225,0.35)] pl-5"
              : "pr-2"
          } ${
            i % 3 === 0
              ? "lg:border-l-0 lg:pl-0 lg:pr-5"
              : "lg:border-l lg:border-[rgba(203,213,225,0.35)] lg:pl-5 lg:pr-1"
          }`}
        >
          <StatChip {...item} />
        </div>
      ))}
    </div>
  );
}
