import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Eyebrow, IconTile } from "../ui";

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
      <h2 className="mt-6 text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B]">
        {title}
      </h2>
      <div
        className={`mt-6 h-[3px] w-[60px] bg-[#16A34A] ${centered ? "mx-auto" : ""}`}
      />
      {description && (
        <p
          className={`mt-6 text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] ${
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
        className="rounded-full bg-[rgba(22,163,74,0.12)]"
      />
      <h3 className="mt-8 text-[18px] font-semibold leading-[130%] text-[#16233B]">{title}</h3>
      <p className="mt-2 text-[14px] font-medium leading-[170%] text-[#5B6B82]">{description}</p>
    </div>
  );
}

export function ValuesRow({
  items,
}: {
  items: { icon: LucideIcon; title: string; description: string }[];
}) {
  return (
    <div className="mt-10 flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-10 lg:flex-nowrap lg:justify-between lg:gap-0">
      {items.map((item, i) => (
        <div key={item.title} className="flex items-center gap-8 lg:gap-[42px]">
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
  icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <IconTile
        icon={icon}
        size={56}
        iconSize={32}
        className="rounded-[12px] bg-[rgba(22,163,74,0.12)]"
      />
      <div>
        <p className="font-display text-[48px] font-bold leading-[65px] text-[#16A34A]">{value}</p>
        <p className="max-w-[116px] text-[13px] font-medium leading-[18px] text-[#64748B]">{label}</p>
      </div>
    </div>
  );
}
