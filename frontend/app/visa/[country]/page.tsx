import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import MarketingShell from "../../../components/marketing/MarketingShell";
import { countries } from "../../../components/marketing/content";

export function generateStaticParams() {
  return countries.map((country) => ({ country: country.slug }));
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const country = countries.find((item) => item.slug === params.country);
  if (!country) return {};
  return {
    title: `${country.thaiName} | เอกสารยื่นวีซ่า | BKK AIR`,
    description: `${country.h1} พร้อมบริการ flight reservation for visa และ hotel booking for visa โดยทีมงานตรวจสอบก่อนดำเนินการ`,
  };
}

export default function VisaCountryPage({ params }: { params: { country: string } }) {
  const country = countries.find((item) => item.slug === params.country);
  if (!country) notFound();

  const commonDocs = [
    "แบบฟอร์มหรือข้อมูลคำขอวีซ่าตามประเภทที่สมัคร",
    "หนังสือเดินทางและข้อมูลผู้เดินทาง",
    "หลักฐานการเงินและหลักฐานการทำงานตามข้อกำหนด",
    "flight reservation for visa หรือใบจองตั๋วเครื่องบิน",
    "hotel booking for visa หรือใบจองโรงแรม",
    "แผนการเดินทางที่สอดคล้องกับวันที่และเมืองปลายทาง",
  ];

  return (
    <MarketingShell>
      <section className="bg-[#F8FAFC] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-widest text-[#003d82]">{country.name} Visa</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{country.h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {country.keywords} เป็นกลุ่มเอกสารที่ควรจัดเตรียมให้สอดคล้องกันก่อนยื่นคำขอวีซ่า ทีมงาน BKK AIR ช่วยตรวจสอบข้อมูลและจัดเตรียมเอกสารสนับสนุนตาม flow แบบ manual review
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-200/50">
              <h2 className="text-2xl font-black text-slate-900">Overview</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                เหมาะสำหรับผู้ที่กำลังวางแผนเดินทางไป {country.examples.join(", ")} และต้องการเอกสารประกอบคำขอวีซ่าที่แสดงแผนเดินทางชัดเจน
              </p>
            </section>

            <section className="rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-200/50">
              <h2 className="text-2xl font-black text-slate-900">เอกสารที่มักต้องใช้</h2>
              <ul className="mt-4 space-y-3">
                {commonDocs.map((doc) => (
                  <li key={doc} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    {doc}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-200/50">
              <h2 className="text-2xl font-black text-slate-900">BKK AIR ช่วยอะไรได้บ้าง</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                เราช่วยจัดเตรียมใบจองตั๋วเครื่องบิน ใบจองโรงแรม และ Travel Plan ตามข้อมูลที่ลูกค้ายืนยัน ทีมงานตรวจสอบก่อนดำเนินการ และส่งไฟล์ PDF ให้ลูกค้าเมื่อเสร็จ
              </p>
            </section>

            <section className="rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-200/50">
              <h2 className="text-2xl font-black text-slate-900">แพ็กเกจที่แนะนำ</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                แนะนำ Standard สำหรับผู้ที่ต้องการใบจองตั๋ว + ใบจองโรงแรม + Travel Plan หรือ Ultimate สำหรับเคสที่ต้องการเอกสารสนับสนุนครบชุด
              </p>
              <Link href={`/order?country=${country.slug}`} className="mt-5 inline-flex rounded-2xl bg-[#f59e0b] px-6 py-3 text-sm font-black text-white">
                ส่งคำขอสำหรับ{country.thaiName}
              </Link>
            </section>
          </div>

          <section className="mt-8 rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-200/50">
            <h2 className="text-2xl font-black text-slate-900">FAQ เฉพาะประเทศ</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <details className="rounded-2xl bg-[#F8FAFC] p-5">
                <summary className="cursor-pointer font-bold">ต้องซื้อตั๋วจริงก่อนยื่น{country.thaiName}ไหม?</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">โดยทั่วไปไม่ควรซื้อตั๋วจริงก่อนทราบผลวีซ่า เพราะมีความเสี่ยงเรื่องค่าเปลี่ยนหรือยกเลิก</p>
              </details>
              <details className="rounded-2xl bg-[#F8FAFC] p-5">
                <summary className="cursor-pointer font-bold">BKK AIR รับประกันผลวีซ่าไหม?</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">ไม่รับประกัน ผลวีซ่าขึ้นอยู่กับสถานทูตหรือศูนย์รับคำร้องเท่านั้น</p>
              </details>
            </div>
          </section>
        </div>
      </section>
    </MarketingShell>
  );
}
