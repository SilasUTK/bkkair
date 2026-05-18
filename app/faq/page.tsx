import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import JsonLd from "../../components/marketing/JsonLd";
import { faqGroups } from "../../components/marketing/content";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย | BKK AIR",
  description: "FAQ เกี่ยวกับจองตั๋วเครื่องบินยื่นวีซ่า ใบจองโรงแรมขอวีซ่า การชำระเงิน ความปลอดภัยข้อมูล และข้อจำกัดของบริการ",
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      }))
    ),
  };

  return (
    <MarketingShell>
      <JsonLd data={faqSchema} />
      <section className="bg-[#F8FAFC] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <MessageCircleQuestion className="mx-auto h-10 w-10 text-[#2563EB]" />
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">คำถามที่พบบ่อย</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              รวมคำตอบเกี่ยวกับ flight reservation for visa, hotel booking for visa, เอกสารยื่นวีซ่า และขั้นตอนทีมงานตรวจสอบ
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {faqGroups.map((group) => (
              <section key={group.title} className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/50">
                <h2 className="text-2xl font-black text-slate-900">{group.title}</h2>
                <div className="mt-5 space-y-3">
                  {group.items.map(([q, a]) => (
                    <details key={q} className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 open:bg-blue-50">
                      <summary className="cursor-pointer list-none font-bold text-slate-900">{q}</summary>
                      <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="font-bold text-[#2563EB] hover:text-blue-700">ยังมีคำถาม? ติดต่อทีมงาน BKK AIR</Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
