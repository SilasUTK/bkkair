import { MessageSquareHeart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";
import ReviewCarousel from "../ReviewCarousel";
import { approvedReviews, getApprovedReviewJsonLd } from "../../lib/reviews";

const reviewJsonLd = getApprovedReviewJsonLd(approvedReviews);

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[#F8FAFF] py-20 md:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      {reviewJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
      )}
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-20 h-[380px] w-[380px] rounded-full bg-blue-100/50 blur-[80px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-indigo-100/40 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/90 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
            <MessageSquareHeart className="h-4 w-4 text-orange-500" aria-hidden="true" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">Customer Feedback Transparency</span>
          </div>
          
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            เสียงจากลูกค้าที่ใช้บริการ{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              BKK AIR
            </span>
          </h2>
          
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
            รีวิวจากนักเดินทางจริงที่ใช้บริการ BKK AIR
          </p>
        </div>

        {approvedReviews.length > 0 ? (
          <ReviewCarousel reviews={approvedReviews} />
        ) : (
          <div className="mx-auto max-w-3xl rounded-3xl border border-blue-100 bg-white/90 px-6 py-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <p className="text-base font-semibold leading-relaxed text-slate-700">
              ยังไม่มีรีวิวที่ได้รับอนุญาตให้เผยแพร่
            </p>
            <Link
              href="/reviews/submit"
              className="mt-4 inline-flex rounded-2xl bg-accent-orange px-5 py-2.5 text-sm font-black text-white shadow-[0_14px_34px_rgba(255,87,34,0.24)] transition hover:bg-accent-hover"
            >
              Submit Review
            </Link>
          </div>
        )}

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-sm font-semibold text-slate-700">
          <span className="inline-flex items-start justify-center gap-2">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            รีวิวนี้มาจากผู้ใช้บริการจริง โดยได้รับอนุญาตให้เผยแพร่แล้ว และไม่ใช่การรับประกันผลการพิจารณาวีซ่า
          </span>
        </div>
      </div>
    </section>
  );
}
