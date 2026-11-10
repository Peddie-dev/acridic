import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EvidenceToChange() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white px-4 py-14 sm:px-6 lg:py-16">
      {/* Soft green glow in the bottom-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(22,163,74,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto grid lg:w-[min(1247px,86.6vw)] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,677px)_minmax(0,1fr)] lg:gap-[76px]">
        {/* Image with translucent caption panel */}
        <div className="relative aspect-[677/484] w-full overflow-hidden rounded-lg shadow-sm">
          <Image
            src="/images/evidence-to-change.png"
            alt="Research reports on a desk beside a laptop and plants"
            fill
            sizes="(min-width: 1024px) 677px, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-4 w-[190px] rounded-t-xl bg-emerald-900/60 px-5 py-5 text-white backdrop-blur-sm sm:left-7 sm:w-[210px]">
            <p className="text-base font-semibold leading-snug sm:text-[17px]">
              <span className="text-emerald-300">“</span>Evidence for
              <br />
              Stronger
              <br />
              Communities<span className="text-emerald-300">”</span>
            </p>
            <span className="mt-3 block h-0.5 w-8 bg-emerald-400" />
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--emerald)]">
            <span>•</span>
            From Evidence to Change
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-[color:var(--heading)] sm:text-[2rem]">
            Turning Evidence Into
            <br />
            Action.
          </h2>
          <span className="mt-4 block h-0.5 w-14 bg-[color:var(--emerald)]" />

          <p className="mt-6 max-w-[490px] text-base leading-[1.7] text-[color:var(--body)] sm:text-[17px]">
            From field research to practical solutions, we work with partners
            to translate evidence into meaningful outcomes for communities and
            institutions.
          </p>

          <Link
            href="/research/case-studies"
            className="mt-8 inline-flex items-center gap-2.5 whitespace-nowrap rounded-xl bg-[color:var(--emerald)] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:brightness-90"
          >
            View Case Studies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}