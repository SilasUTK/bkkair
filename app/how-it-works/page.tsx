import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "วิธีสั่งซื้อ | BKK AIR",
  description: "ขั้นตอนการส่งคำขอเอกสารยื่นวีซ่า BKK AIR ตั้งแต่เลือกแพ็กเกจ ทีมงานตรวจสอบ ติดต่อกลับ ชำระเงิน และส่งไฟล์ PDF",
};

const steps = [
  ["เลือกแพ็กเกจ", "ดูรายละเอียดที่หน้าแพ็กเกจและเลือกบริการที่เหมาะกับประเทศปลายทางและเอกสารที่ต้องใช้"],
  ["ส่งข้อมูลเบื้องต้น", "กรอกชื่อ ช่องทางติดต่อ ประเทศปลายทาง ประเภทวีซ่า วันเดินทาง และรายละเอียดเพิ่มเติม"],
  ["ทีมงานตรวจสอบ", "เจ้าหน้าที่ตรวจสอบความครบถ้วนของข้อมูลก่อนเสนอแนวทางหรือยืนยันบริการ"],
  ["ทีมงานติดต่อกลับ", "ติดต่อผ่านช่องทางที่ลูกค้าระบุ เช่น โทรศัพท์ อีเมล หรือ LINE เพื่อยืนยันรายละเอียด"],
  ["ลูกค้ายืนยันและชำระเงิน", "ไม่มีการชำระเงินก่อนทีมงานตรวจสอบ ลูกค้าชำระหลังยืนยันรายละเอียดแล้วเท่านั้น"],
  ["ทีมงานจัดเตรียมเอกสาร", "เอกสารจัดทำแบบ manual fulfillment โดยทีมงาน ไม่ใช่ระบบออกเอกสารอัตโนมัติ"],
  ["ส่งไฟล์ PDF ให้ลูกค้า", "ลูกค้าได้รับไฟล์ PDF สำหรับใช้ประกอบคำขอวีซ่าตามข้อมูลที่ยืนยันไว้"],
];

export default function HowItWorksPage() {
  return (
    <MarketingShell>
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Request Workflow</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">วิธีสั่งซื้อ</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            BKK AIR เป็นระบบส่งคำขอให้ทีมงานตรวจสอบก่อนดำเนินการ ไม่ใช่ instant booking และไม่ออกตั๋วโดยสารจริงอัตโนมัติ
          </p>

          <div className="mt-12 grid gap-5">
            {steps.map(([title, body], index) => (
              <article key={title} className="flex gap-5 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-lg font-black text-[#2563EB]">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">{title}</h2>
                  <p className="mt-2 leading-relaxed text-slate-600">{body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-emerald-900">
            <CheckCircle2 className="mr-2 inline h-5 w-5" />
            จุดสำคัญ: ส่งคำขอฟรีก่อน ทีมงานตรวจสอบและติดต่อกลับก่อน จึงค่อยยืนยันและชำระเงิน
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/packages" className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#2563EB] px-6 text-sm font-black text-white shadow-lg shadow-blue-200/60">
              ดูแพ็กเกจและราคา <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/order" className="inline-flex h-12 items-center justify-center rounded-2xl border-2 border-slate-200 px-6 text-sm font-black text-slate-700">
              ส่งคำขอ
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

