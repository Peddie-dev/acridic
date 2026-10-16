import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollaborateBanner() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:py-16">
      <div className="relative isolate mx-auto max-w-[1247px] overflow-hidden rounded-3xl bg-[#0F3D26] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/collaborate-bg.jpg"
            alt=""
            fill
            sizes="1247px"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D26] via-[#0F3D26]/85 to-[#0F3D26]/50" />
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
              <span>•</span>
              Let&apos;s Collaborate
            </span>
            <h2 className="mt-3 max-w-lg text-2xl font-bold leading-snug sm:text-3xl">
              Every Success Story Begins With Evidence
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Explore how research is transforming communities, influencing
              policy, and creating sustainable development across Africa.
            </p>
            <Link
              href="/partner-with-us"
              className="mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-emerald-50"
            >
              Become a Partner
              <ArrowRight size={14} />
            </Link>
          </div>

          <ul className="flex flex-col gap-3 text-sm font-medium uppercase tracking-wide lg:pr-6">
            <li className="text-emerald-300">Research</li>
            <li className="text-white">
              Collaborate
              <span className="mt-1 block h-px w-8 bg-emerald-400" />
            </li>
            <li className="text-emerald-300">Transform</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
