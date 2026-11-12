import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Mail, Phone, type LucideIcon } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Riverside+Drive+Nairobi+Kenya";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Riverside+Drive+Nairobi+Kenya";

interface ContactRow {
  icon: LucideIcon;
  label: string;
  value: string;
  note: string;
  href?: string;
}

const ROWS: ContactRow[] = [
  {
    icon: Mail,
    label: "Email",
    value: "info@acridc-africa.org",
    note: "We aim to respond within 1–2 business days.",
    href: "mailto:info@acridc-africa.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 (0) 700 000 000",
    note: "Monday–Friday | 8:00 AM – 5:00 PM (EAT)",
    href: "tel:+254700000000",
  },
  {
    icon: Building2,
    label: "Head Office",
    value: "Nairobi, Kenya",
    note: "Visit us by appointment.",
  },
];

export default function LocationSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:py-16">
      <div className="mx-auto grid grid-cols-1 gap-8 lg:w-[min(1247px,86.6vw)] lg:grid-cols-[minmax(0,262fr)_minmax(0,671fr)] lg:gap-8">
        {/* Details */}
        <div className="flex flex-col">
          <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--emerald)]">
            <span>•</span>
            Our Location
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[color:var(--heading)] sm:text-[2rem]">
            Visit Our Office
          </h2>
          <p className="mt-3 max-w-[300px] text-[15px] leading-relaxed text-[color:var(--body)]">
            Our headquarters is located in Nairobi, Kenya, where our
            multidisciplinary team works.
          </p>

          <ul className="mt-7 flex flex-col gap-5">
            {ROWS.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[color:var(--emerald)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-[color:var(--heading)]">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="mt-1.5 block text-[15px] font-medium text-[color:var(--heading)] hover:text-[color:var(--emerald)]"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-[15px] font-medium text-[color:var(--heading)]">
                        {row.value}
                      </p>
                    )}
                    <p className="mt-1 max-w-[210px] text-xs leading-relaxed text-[color:var(--body)]">
                      {row.note}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--emerald)] text-sm font-semibold text-white transition-colors hover:brightness-90 lg:mt-auto"
          >
            Get Directions
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Map */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the ACRIDC Africa office in Google Maps"
          className="relative block min-h-[320px] overflow-hidden rounded-3xl bg-slate-100 lg:min-h-[580px]"
        >
          <Image
            src="/images/contact-map.png"
            alt="Map showing the ACRIDC Africa office on Riverside Drive, Nairobi"
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />
        </a>
      </div>
    </section>
  );
}