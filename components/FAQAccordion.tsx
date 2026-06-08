"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "../lib/faqs";

type FAQAccordionProps = {
  items: FaqItem[];
  defaultOpenIndex?: number;
  compact?: boolean;
};

export default function FAQAccordion({
  items,
  defaultOpenIndex = 0,
  compact = false,
}: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState(defaultOpenIndex);

  return (
    <div className={compact ? "space-y-2.5" : "space-y-4 md:space-y-5"}>
      {items.map((faq, index) => {
        const open = openIdx === index;

        return (
          <article
            key={faq.id}
            className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-300 ${
              open
                ? "border border-blue-300 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                : "border border-blue-100/70 shadow-[0_16px_48px_rgba(15,23,42,0.06)] hover:border-blue-200"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : index)}
              className={`flex w-full items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                compact ? "px-4 py-3.5 sm:px-5" : "px-6 py-5 sm:px-8 sm:py-6"
              }`}
              aria-expanded={open}
            >
              <div className={`flex min-w-0 items-center ${compact ? "gap-3" : "gap-4 sm:gap-5"}`}>
                <div
                  className={`flex shrink-0 items-center justify-center rounded-2xl font-black transition-all duration-300 ${
                    compact ? "h-9 w-9 text-base" : "h-12 w-12 text-xl sm:h-14 sm:w-14 sm:text-2xl"
                  } ${
                    open
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-300"
                      : "bg-blue-50 text-blue-600 group-hover:scale-105"
                  }`}
                >
                  Q
                </div>
                <h3
                  className={`font-bold leading-snug transition-colors duration-300 ${
                    compact ? "text-[15px] sm:text-base" : "text-base sm:text-lg"
                  } ${open ? "text-blue-700" : "text-slate-900 group-hover:text-blue-600"}`}
                >
                  {faq.question}
                </h3>
              </div>

              <div className={`flex shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${open ? "bg-blue-100/70" : "bg-slate-50 group-hover:bg-blue-50"}`}>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    open ? "rotate-180 text-blue-600" : "text-slate-400 group-hover:text-blue-600"
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className={`flex ${compact ? "gap-3 px-4 pb-4 sm:px-5" : "gap-4 px-6 pb-6 pt-1 sm:gap-5 sm:px-8"}`}>
                  <div className={`${compact ? "hidden" : "hidden w-12 shrink-0 sm:block sm:w-14"}`} />
                  <div className="relative">
                    <div className="absolute -left-4 bottom-1 top-1 w-1 rounded-full bg-blue-100 sm:-left-5" />
                    <p className={`${compact ? "text-sm leading-[1.65]" : "text-sm leading-relaxed sm:text-base"} pl-2 font-medium text-slate-600 sm:pl-0`}>
                      {faq.answer}
                    </p>
                    {faq.href && (
                      <Link
                        href={faq.href}
                        className="mt-3 inline-flex text-sm font-black text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-900"
                      >
                        อ่านรายละเอียดเพิ่มเติม
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
