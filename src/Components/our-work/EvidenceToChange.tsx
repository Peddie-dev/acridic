import Image from "next/image";
import Link from "next/link";

export default function EvidenceToChange() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-[1247px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/evidence-to-change.png"
            alt="Research reports on a desk"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute bottom-5 left-5 max-w-[170px] rounded-xl bg-emerald-800/90 px-4 py-3 text-sm font-semibold leading-snug text-white backdrop-blur-sm">
            Evidence for Stronger Communities
          </span>
        </div>

        <div className="lg:pl-6">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">
            <span>•</span>
            From Evidence to Change
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            Turning Evidence Into Action.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
            From field research to practical solutions, we work with partners
            to translate evidence into meaningful outcomes for communities and
            institutions.
          </p>
          <Link
            href="/research/case-studies"
            className="mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-600 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-emerald-700"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
