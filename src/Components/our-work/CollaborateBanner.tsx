import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollaborateBanner() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="relative isolate mx-auto max-w-[1247px] overflow-hidden rounded-2xl bg-[#0E3D20] px-6 py-10 text-white shadow-xl shadow-emerald-950/10 sm:px-10 lg:px-12 lg:py-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/collaborate-bg.png"
            alt=""
            fill
            sizes="1247px"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3D20]/95 via-[#0E3D20]/80 to-[#0E3D20]/55" />
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/85">
              <span className="text-[color:var(--emerald)]">•</span>
              Let’s Collaborate
            </span>

            <h2 className="mt-4 text-2xl font-semibold leading-snug sm:text-[26px]">
              Every Success Story Begins With Evidence
            </h2>

            <p className="mt-4 max-w-[480px] text-sm leading-relaxed text-white/80">
              Explore how research is transforming communities, influencing
              policy, and creating sustainable development across Africa.
            </p>

            <Link
              href="/partner-with-us"
              className="mt-7 inline-flex items-center gap-2.5 whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-medium text-[color:var(--emerald)] transition-colors hover:bg-emerald-50"
            >
              Become a Partner
              <ArrowRight size={16} />
            </Link>
          </div>

          <ul className="flex flex-col gap-3.5 text-sm font-medium uppercase tracking-[0.12em]">
            <li className="text-[color:var(--emerald)]">Research</li>
            <li className="text-white">Collaborate</li>
            <li className="text-white">
              Transform
              <span className="mt-3 block h-0.5 w-6 bg-[color:var(--emerald)]" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}