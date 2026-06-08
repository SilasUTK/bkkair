import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquareHeart, ShieldCheck } from "lucide-react";
import MarketingShell from "../../../components/marketing/MarketingShell";
import ReviewSubmissionForm from "../../../components/ReviewSubmissionForm";

export const metadata: Metadata = {
  title: "ส่งรีวิวการใช้บริการ | BKK AIR",
  description:
    "ส่งรีวิวจากผู้ใช้บริการจริงของ BKK AIR รีวิวจะถูกตรวจสอบและต้องได้รับอนุญาตก่อนเผยแพร่บนเว็บไซต์",
  alternates: {
    canonical: "/reviews/submit",
  },
};

export default function SubmitReviewPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
              <MessageSquareHeart className="h-4 w-4 text-orange-500" aria-hidden="true" />
              รีวิวจากผู้ใช้บริการ
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              ส่งรีวิวการใช้บริการ
            </h1>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600">
              ขอบคุณที่ใช้บริการ BKK AIR หากคุณประทับใจในการบริการ สามารถแบ่งปันประสบการณ์ของคุณได้ที่นี่ รีวิวทุกฉบับจะได้รับการตรวจสอบก่อนเผยแพร่
            </p>

            <div className="mt-6 rounded-[2rem] border border-blue-100 bg-white p-5 shadow-lg shadow-slate-200/50">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <p className="text-sm font-bold leading-relaxed text-slate-700">
                  เราเผยแพร่เฉพาะชื่อย่อ ประเทศปลายทาง ประเภทบริการ ข้อความรีวิว และวันที่เผยแพร่เท่านั้น
                  โดยจะไม่เปิดเผยข้อมูลส่วนบุคคล รายละเอียดการเดินทาง อีเมล หรือหมายเลขโทรศัพท์
                </p>
              </div>
            </div>

            <Link href="/#testimonials" className="mt-6 inline-flex text-sm font-black text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900">
              ดูรีวิวที่ได้รับอนุญาตให้เผยแพร่แล้ว
            </Link>
          </div>

          <ReviewSubmissionForm />
        </div>
      </section>
    </MarketingShell>
  );
}
