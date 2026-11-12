import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CONTACT_TOPICS } from "./topics";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white lg:-mt-[128px] lg:min-h-[800px]">
      {/* Full hero composition: the photo and its fade into white are in the image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="mx-auto px-4 pb-20 pt-10 sm:px-6 lg:w-[min(1247px,86.6vw)] lg:px-0 lg:pb-24 lg:pt-36">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-600"
        >
          <Link href="/" className="hover:text-[color:var(--emerald)]">
            Home
          </Link>
          <ChevronRight size={12} className="text-slate-400" />
          <Link href="/research" className="hover:text-[color:var(--emerald)]">
            Research
          </Link>
          <ChevronRight size={12} className="text-slate-400" />
          <span className="font-medium text-[color:var(--emerald)]">
            Contact
          </span>
        </nav>

        <span className="mt-12 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--emerald)] lg:mt-36">
          <span>•</span>
          Contact ACRIDC
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[color:var(--heading)] sm:text-[2.6rem]">
          Let’s Work Together for a
          <br />
          <span className="text-[color:var(--emerald)]">Stronger Africa</span>
        </h1>

        <p className="mt-6 max-w-[480px] text-[15px] leading-[1.75] text-[color:var(--body)]">
          Whether you’re looking to collaborate on research, explore a
          partnership, access our expertise, or learn more about ACRIDC, we’d
          love to hear from you.
        </p>

        <ul className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-0">
          {CONTACT_TOPICS.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <li
                key={topic.title}
                className={`flex items-start gap-3 sm:px-6 ${
                  i === 0 ? "sm:pl-0" : "sm:border-l sm:border-slate-200"
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[color:var(--emerald)]">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-[color:var(--heading)]">
                    {topic.title}
                  </span>
                  <span className="mt-1 block max-w-[130px] text-xs leading-snug text-[color:var(--body)]">
                    {topic.description}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}