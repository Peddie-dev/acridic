import Image from "next/image";
import Link from "next/link";
import { Leaf, Mail, Send, Users, TrendingUp } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Leaf, label: "Evidence-Based Solutions" },
  { icon: Users, label: "Stronger Partnership" },
  { icon: TrendingUp, label: "A more Resilient Africa" },
];

export default function BuildTogether() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-emerald-50/70 to-emerald-50 px-4 py-20 sm:px-6 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 -z-10 hidden aspect-square w-[520px] opacity-70 lg:block"
      >
        <Image
          src="/images/africa-network.png"
          alt=""
          fill
          sizes="520px"
          className="object-contain object-right-bottom"
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <span className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
          <span>•</span>
          Let&apos;s Collaborate
        </span>
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
          Let&apos;s Build Africa&apos;s
          <br />
          <span className="text-emerald-600">Future Together.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-500">
          Our research transforms complex challenges into practical insights
          that inform policy, strengthen institutions, and create lasting
          impact across Africa.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/partner-with-us"
            className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-emerald-600 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-emerald-700"
          >
            <Send size={16} />
            Become a Partner
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-emerald-600 bg-white/70 px-6 py-3 text-[15px] font-medium text-slate-800 transition-colors hover:bg-white"
          >
            <Mail size={16} />
            Contact Us
          </Link>
        </div>

        <ul className="mx-auto mt-8 flex w-fit flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full bg-white/60 px-6 py-3 ring-1 ring-emerald-100 backdrop-blur-sm">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex items-center gap-2 text-xs font-medium text-slate-700"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Icon size={14} />
                </span>
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
