import { MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import React from "react";
import FAQAccordion from "../FAQAccordion";
import { createFaqJsonLd, faqItems } from "../../lib/faqs";

const homepageFaqItems = faqItems.slice(0, 8);
const faqSchema = createFaqJsonLd(homepageFaqItems);

export default function FAQSection() {
  return (
    <section id="faq" className="relative w-full overflow-hidden bg-white py-12 font-sans selection:bg-blue-200 selection:text-primary-navy md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute -right-20 bottom-10 h-[400px] w-[400px] rounded-full bg-orange-50 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto mb-7 text-center md:mb-8">
          <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/90 px-3.5 py-1.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
            <MessageCircleQuestion className="h-4 w-4 text-orange-500" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-slate-500">คำถามที่พบบ่อย</span>
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.35rem]">
            คำถามที่พบบ่อยเกี่ยวกับ{" "}
            <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              เอกสารยื่นวีซ่า
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
            รวมคำตอบเรื่องใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และแพ็กเกจเอกสารสนับสนุนวีซ่า
          </p>
        </div>

        <FAQAccordion items={homepageFaqItems} defaultOpenIndex={0} compact />

        <div className="mx-auto mt-5 max-w-3xl rounded-2xl border border-orange-100 bg-orange-50/70 px-5 py-4 text-center shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-lg font-black text-slate-950">ยังไม่แน่ใจว่าต้องใช้เอกสารแบบไหน?</h3>
          <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-600">
            ทีมงานช่วยประเมินจากประเทศปลายทาง วันที่เดินทาง และประเภทเอกสารที่สถานทูตต้องการได้
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2.5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-accent-orange px-5 py-2.5 text-sm font-black text-white shadow-[0_14px_34px_rgba(255,87,34,0.24)] transition hover:bg-accent-hover"
            >
              ปรึกษาทีมงานฟรี
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-2xl border border-blue-100 bg-white px-5 py-2.5 text-sm font-black text-blue-700 transition hover:border-blue-200 hover:bg-blue-50"
            >
              ดูคำถามทั้งหมด
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
