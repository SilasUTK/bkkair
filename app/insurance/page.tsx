import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ประกันการเดินทาง MSIG — BKK AIR",
  description:
    "ประกันการเดินทาง MSIG สำหรับประกอบเอกสารยื่นวีซ่า ราคาเริ่มต้น ฿190 พร้อมคำแนะนำการเลือกแผนที่เหมาะสมกับประเทศปลายทาง",
  alternates: {
    canonical: "https://bkkair.com/insurance",
  },
};

const includedItems = [
  "แผนประกันการเดินทาง MSIG",
  "ใช้ประกอบเอกสารยื่นวีซ่าได้ทุกแผน",
  "ราคาเริ่มต้น ฿190",
  "คำแนะนำการเลือกประกันที่เหมาะสม",
  "ขึ้นอยู่กับแผนและระยะเวลาการเดินทาง",
];

export default function InsurancePage() {
  return (
    <MarketingShell>
      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="font-semibold text-slate-600 transition hover:text-[#2563EB]">
                  หน้าแรก
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-semibold text-slate-900">ประกันการเดินทาง MSIG</li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-8 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:p-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-black text-emerald-700 shadow-sm">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                MSIG Travel Insurance
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                ประกันการเดินทาง MSIG
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                ประกันการเดินทางสำหรับประกอบการยื่นวีซ่า โดยเฉพาะประเทศที่กำหนดให้มีประกัน เช่น Schengen ทีมงานช่วยแนะนำแผนที่เหมาะสมกับประเทศปลายทางและระยะเวลาการเดินทางของคุณ
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-accent-orange px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-200 transition hover:bg-accent-hover"
                >
                  สอบถามแผนประกัน
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-800 transition hover:border-blue-200 hover:text-[#2563EB]"
                >
                  ดูแพ็กเกจทั้งหมด
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">เริ่มต้น</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-black text-slate-950">฿190</span>
                <span className="pb-2 text-sm font-bold text-slate-500">ขึ้นอยู่กับแผนและระยะเวลา</span>
              </div>
              <ul className="mt-6 space-y-3">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
