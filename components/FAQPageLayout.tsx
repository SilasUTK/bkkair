import Link from "next/link";
import { ArrowRight, FileQuestion, ShieldCheck } from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import JsonLd from "./marketing/JsonLd";
import type { FaqTopic } from "../lib/faqs";
import { createFaqJsonLd, getFaqItems } from "../lib/faqs";

type FAQPageLayoutProps = {
  topic: FaqTopic;
};

export default function FAQPageLayout({ topic }: FAQPageLayoutProps) {
  const faqs = getFaqItems(topic.faqIds);

  return (
    <>
      <JsonLd data={createFaqJsonLd(faqs)} />
      <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-16 md:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
              <FileQuestion className="h-4 w-4 text-orange-500" aria-hidden="true" />
              FAQ Guide
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {topic.h1}
            </h1>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600">
              {topic.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {topic.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-bold text-blue-700">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-5">
              {topic.sections.map((section) => (
                <section key={section.heading} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50 md:p-8">
                  <h2 className="text-2xl font-black text-slate-950">{section.heading}</h2>
                  <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">{section.body}</p>
                </section>
              ))}

              <section className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-lg shadow-slate-200/50 md:p-8">
                <h2 className="text-2xl font-black text-slate-950">คำถามที่เกี่ยวข้อง</h2>
                <div className="mt-6">
                  <FAQAccordion items={faqs} compact />
                </div>
              </section>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-lg shadow-slate-200/50">
                <h2 className="text-lg font-black text-slate-950">ต้องการให้ทีมงานช่วยจัดเตรียมเอกสารยื่นวีซ่า?</h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                  ส่งคำขอให้ทีมงานตรวจสอบก่อนดำเนินการ ไม่มีการยืนยันตั๋วหรือโรงแรมจริงอัตโนมัติ
                </p>
                <Link
                  href="/order"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-orange px-5 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(255,87,34,0.28)] transition hover:bg-accent-hover"
                >
                  จองตอนนี้เลย
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-[2rem] border border-blue-100 bg-blue-50/70 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                  <p className="text-sm font-bold leading-relaxed text-slate-700">
                    BKK AIR ไม่ใช่ตัวแทนวีซ่า ไม่มีความสัมพันธ์พิเศษกับสถานทูต และไม่รับประกันผลวีซ่า
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-100 bg-white p-5 text-sm font-bold leading-relaxed text-slate-600 shadow-lg shadow-slate-200/40">
                <Link href="/faq" className="block text-blue-700 hover:text-blue-900">กลับไปหน้า FAQ ทั้งหมด</Link>
                <Link href="/packages#packages" className="mt-3 block text-blue-700 hover:text-blue-900">ดูแพ็กเกจและราคา</Link>
                <Link href="/contact" className="mt-3 block text-blue-700 hover:text-blue-900">ติดต่อทีมงาน</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
