import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import FAQAccordion from "../../components/FAQAccordion";
import { faqItems, faqTopicPages } from "../../lib/faqs";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อยเกี่ยวกับเอกสารยื่นวีซ่า | BKK AIR",
  description:
    "รวม FAQ เรื่องใบจองตั๋วเครื่องบินสำหรับยื่นวีซ่า ใบจองโรงแรม แผนการเดินทาง Flight Reservation for Visa และ Visa Support Documents Thailand",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "คำถามที่พบบ่อยเกี่ยวกับเอกสารยื่นวีซ่า | BKK AIR",
    description:
      "คำตอบเรื่อง Flight Reservation for Visa, Hotel Reservation for Visa, Travel Itinerary for Visa และเอกสารสนับสนุนวีซ่า",
  },
};

export default function FaqPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
              <MessageCircleQuestion
                className="h-4 w-4 text-orange-500"
                aria-hidden="true"
              />
              FAQ
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              คำถามที่พบบ่อยเกี่ยวกับเอกสารยื่นวีซ่า
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-relaxed text-slate-600">
              รวมคำตอบเรื่องใบจองตั๋วเครื่องบินสำหรับยื่นวีซ่า
              ใบจองโรงแรมสำหรับยื่นวีซ่า แผนการเดินทางสำหรับยื่นวีซ่า
              และแพ็กเกจ Visa Support Documents Thailand ของ BKK AIR
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(faqTopicPages).map((topic) => (
              <Link
                key={topic.slug}
                href={`/faq/${topic.slug}`}
                className="rounded-2xl border border-blue-100 bg-white p-4 text-sm font-black text-blue-700 shadow-sm shadow-slate-200/60 transition hover:border-blue-200 hover:bg-blue-50"
              >
                {topic.h1}
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <FAQAccordion items={faqItems} defaultOpenIndex={0} />
          </div>

          <div className="mt-10 rounded-[2rem] border border-orange-100 bg-white p-6 text-center shadow-lg shadow-slate-200/50 md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              ต้องการให้ทีมงานช่วยจัดเตรียมเอกสารยื่นวีซ่า?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
              ส่งคำขอให้ทีมงานตรวจสอบข้อมูลก่อนดำเนินการ
              เราให้บริการจัดเตรียมเอกสารสนับสนุนเท่านั้น
              ไม่ใช่ตัวแทนวีซ่าและไม่รับประกันผลการพิจารณา
            </p>

            <Link
              href="/order"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-orange px-6 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(255,87,34,0.28)] transition hover:bg-accent-hover"
            >
              จองตอนนี้เลย
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}