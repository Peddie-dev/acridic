import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT_TOPICS } from "./topics";

export default function PartnerBanner() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:py-16">
      <div className="relative isolate mx-auto overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#0E4A27_0%,#0A3D20_45%,#052E17_100%)] px-6 py-10 text-white shadow-xl shadow-emerald-950/10 sm:px-10 lg:w-[min(1247px,86.6vw)] lg:px-12 lg:py-12">
        {/* Decorative shapes */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-32 -z-10 h-80 w-80 rounded-full bg-white/[0.05]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-12 -z-10 h-48 w-80 rounded-[100%] bg-emerald-400/10"
        />
        <svg
          aria-hidden
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 right-0 -z-10 h-full w-1/2 opacity-40"
        >
          <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1">
            <path d="M0 200 C 120 120, 260 110, 400 150" />
            <path d="M40 200 C 160 140, 280 135, 400 170" />
            <path d="M90 200 C 190 160, 300 158, 400 188" />
          </g>
        </svg>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div>
            <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
              <span>•</span>
              Work Together
            </span>
            <h2 className="mt-4 text-2xl font-semibold leading-snug sm:text-[26px]">
              Partner for a Stronger Africa.
            </h2>
            <p className="mt-4 max-w-[530px] text-sm leading-relaxed text-white/85">
              We collaborate with governments, research institutions, civil
              society, development partners, and communities to transform
              evidence into meaningful action.
            </p>
            <Link
              href="/partner-with-us"
              className="mt-7 inline-flex items-center gap-2.5 whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-medium text-[color:var(--emerald)] transition-colors hover:bg-emerald-50"
            >
              Partner With Us
              <ArrowRight size={16} />
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
            {CONTACT_TOPICS.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <li
                  key={topic.title}
                  className={`sm:px-6 ${
                    i === 0 ? "sm:pl-0" : "sm:border-l sm:border-white/20"
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[color:var(--emerald)]">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="mt-3 block text-[17px] font-medium">
                    {topic.title}
                  </span>
                  <span className="mt-1 block max-w-[130px] text-xs leading-snug text-white/80">
                    {topic.description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}