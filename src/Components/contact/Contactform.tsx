"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown, Mail, User } from "lucide-react";

const INQUIRY_TYPES = [
  "Partnership",
  "Research Inquiry",
  "General Question",
  "Other",
];

const FIELD =
  "h-[52px] w-full rounded-xl border border-slate-200 bg-slate-50 text-[15px] text-[color:var(--heading)] outline-none transition placeholder:text-slate-400 focus:border-[color:var(--emerald)] focus:ring-2 focus:ring-emerald-100";

const LABEL = "mb-2 block text-sm font-semibold text-[color:var(--heading)]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send the form data to your email service / API route here.
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:py-16">
      <div className="mx-auto rounded-[28px] border border-slate-200/70 bg-[#F5F9F6] p-6 sm:p-8 lg:w-[min(1247px,86.6vw)] lg:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--heading)] sm:text-[2rem]">
          Send Us a Message
        </h2>
        <p className="mt-2 text-[15px] text-[color:var(--body)]">
          Tell us a little about how we can help.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={LABEL}>
                Full name
              </label>
              <div className="relative">
                <User
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className={`${FIELD} pl-12 pr-4`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={LABEL}>
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className={`${FIELD} pl-12 pr-4`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className={LABEL}>
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                placeholder="Enter your organization"
                className={`${FIELD} px-4`}
              />
            </div>

            <div>
              <label htmlFor="subject" className={LABEL}>
                Subject
              </label>
              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className={`${FIELD} appearance-none px-4 pr-11 invalid:text-slate-400 [&>option]:text-slate-800`}
                >
                  <option value="" disabled>
                    Select an inquiry type
                  </option>
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className={LABEL}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Type your message here..."
                className="min-h-[170px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50 p-4 text-[15px] text-[color:var(--heading)] outline-none transition placeholder:text-slate-400 focus:border-[color:var(--emerald)] focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <label className="mt-6 flex cursor-pointer items-center gap-3 text-[15px] text-[color:var(--body)]">
            <input
              type="checkbox"
              name="consent"
              className="h-4 w-4 rounded border-slate-300 accent-[color:var(--emerald)]"
            />
            Tell us a little about how we can help.
          </label>

          <div className="mt-6 flex flex-col items-end gap-3">
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--emerald)] text-sm font-semibold text-white transition-colors hover:brightness-90 sm:w-72"
            >
              Send message
              <ArrowRight size={16} />
            </button>
            {sent && (
              <p role="status" className="text-sm text-[color:var(--emerald)]">
                Thank you, your message has been received.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}