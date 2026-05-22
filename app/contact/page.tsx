import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Clock, ShieldCheck, Languages, FileCheck2, Globe } from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ติดต่อเรา | BKK AIR",
  description: "ติดต่อทีมงาน BKK AIR ผ่าน LINE OA และ Email เพื่อสอบถามเอกสารยื่นวีซ่า แพ็กเกจบริการ และการตรวจสอบข้อมูลธุรกิจ",
};

const inquiryTypes = [
  { value: "package_inquiry", label: "สอบถามแพ็กเกจ" },
  { value: "order_tracking", label: "ตรวจสอบสถานะคำขอ" },
  { value: "flight_reservation", label: "ใบจองตั๋วเครื่องบิน" },
  { value: "hotel_reservation", label: "ใบจองโรงแรม" },
  { value: "travel_itinerary", label: "แผนการเดินทาง" },
  { value: "travel_insurance", label: "ประกันการเดินทาง" },
  { value: "urgent_request", label: "เอกสารเร่งด่วน (Express)" },
  { value: "document_issue", label: "แจ้งปัญหาเอกสาร" },
  { value: "data_update", label: "แก้ไขข้อมูล" },
  { value: "payment_issue", label: "ปัญหาการชำระเงิน" },
  { value: "business_partnership", label: "ความร่วมมือทางธุรกิจ" },
  { value: "other", label: "อื่น ๆ" },
];

const workflowSteps = [
  "ทีมงานตรวจสอบข้อความและประเภทคำขอ",
  "ติดต่อกลับทาง LINE / Email / Phone ภายในเวลาทำการ",
  "ประเมินเอกสารหรือรายละเอียดที่ต้องใช้เพิ่มเติม",
  "แนะนำบริการที่เหมาะสมและขั้นตอนถัดไปอย่างชัดเจน",
];

const miniFaq = [
  {
    q: "ต้องชำระเงินก่อนส่งคำถามหรือไม่?",
    a: "ไม่ต้อง คุณสามารถส่งคำถามเพื่อให้ทีมงานประเมินเบื้องต้นได้ก่อน",
  },
  {
    q: "ทีมงานตอบกลับภายในกี่ชั่วโมง?",
    a: "โดยทั่วไปคำถามส่วนใหญ่ตอบกลับภายใน 1-3 ชั่วโมงในเวลาทำการ",
  },
  {
    q: "ต้องเตรียมข้อมูลอะไรบ้างเมื่อสอบถาม?",
    a: "แนะนำให้แจ้งประเทศปลายทาง วันที่เดินทาง และประเภทเอกสารที่ต้องการ เพื่อให้ทีมงานช่วยได้เร็วขึ้น",
  },
  {
    q: "BKK AIR รับประกันวีซ่าหรือไม่?",
    a: "ไม่รับประกัน BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น",
  },
];

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-[#003d82]">Contact</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">ติดต่อเรา</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนวีซ่าสำหรับนักเดินทางชาวไทย พร้อมทีมงานตรวจสอบโดยคนจริงก่อนส่งทุกครั้ง
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              สอบถามเรื่องแพ็กเกจ สถานะคำขอ หรือรายละเอียดเอกสารได้โดยตรง ทีมงานจะติดต่อกลับตามช่องทางที่คุณสะดวก
            </p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-blue-800">Response Commitment</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">
                ทีมงานตอบกลับภายในเวลาทำการ และคำถามส่วนใหญ่ตอบกลับภายใน 1-3 ชั่วโมง
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Urgent requests สามารถติดต่อผ่าน LINE OA เพื่อการตอบกลับที่เร็วที่สุด
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-black uppercase tracking-wide text-slate-800">Business Transparency</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                BKK AIR ดำเนินงานในประเทศไทยในฐานะบริการสนับสนุนเอกสารยื่นวีซ่า
                และใช้ช่องทางทางการสำหรับการติดต่อและติดตามงานเท่านั้น
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                หากต้องการตรวจสอบข้อมูลธุรกิจเพิ่มเติม กรุณาติดต่อ
                <a href="mailto:info@bkkair.com" className="ml-1 font-black text-slate-800 underline decoration-slate-300 underline-offset-4">info@bkkair.com</a>
                (หัวข้อ: Business Verification)
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              <a href="https://line.me/R/ti/p/@823lateh" className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 md:p-6 font-bold text-slate-700">
                <span className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-[#00B900]" /> Official LINE OA: @823lateh</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">Official channel · Fastest response</span>
              </a>
              <a href="mailto:info@bkkair.com" className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 md:p-6 font-bold text-slate-700">
                <span className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#003d82]" /> Official Email: info@bkkair.com</span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">Business hours</span>
              </a>
              <a href="https://bkkair.com" className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 md:p-6 font-bold text-slate-700">
                <span className="flex items-center gap-3"><Globe className="h-5 w-5 text-blue-600" /> Official Website: bkkair.com</span>
                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-black text-slate-700">Verification reference</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 md:p-6 font-bold text-slate-700"><Clock className="h-5 w-5 text-[#f59e0b]" /> เวลาทำการ: Monday-Saturday 09:00-18:00 (Thailand Time)</div>
            </div>

            <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-indigo-900">Privacy &amp; Data Rights</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">
                สำหรับคำขอด้านข้อมูลส่วนบุคคล กรุณาติดต่อ <a href="mailto:privacy@bkkair.com" className="font-black text-indigo-700 underline decoration-indigo-300 underline-offset-4">privacy@bkkair.com</a>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                ใช้สำหรับคำขอเข้าถึงข้อมูล แก้ไขข้อมูล ลบข้อมูล และข้อกังวลด้าน PDPA/Privacy โดยเรามุ่งหมายตอบกลับภายใน 30 วันทำการ
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 text-sm font-semibold text-slate-700"><ShieldCheck className="mb-2 h-4 w-4 text-emerald-600" /> Reviewed by real staff</div>
              <div className="rounded-2xl border border-slate-100 bg-white p-4 text-sm font-semibold text-slate-700"><FileCheck2 className="mb-2 h-4 w-4 text-blue-600" /> Embassy-support document specialists</div>
              <div className="rounded-2xl border border-slate-100 bg-white p-4 text-sm font-semibold text-slate-700"><ShieldCheck className="mb-2 h-4 w-4 text-indigo-600" /> Privacy-focused inquiry handling</div>
              <div className="rounded-2xl border border-slate-100 bg-white p-4 text-sm font-semibold text-slate-700"><Languages className="mb-2 h-4 w-4 text-orange-600" /> Support available in Thai & English</div>
            </div>
          </div>

          <form className="rounded-[2rem] bg-[#F8FAFC] p-6 shadow-lg shadow-slate-200/50 sm:p-8">
            {/* Frontend-only contact form: this page currently has no backend submission endpoint. */}
            <div className="grid gap-5">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                Human-reviewed responses · No automated visa approval claims
              </div>
              <label className="block"><span className="text-xs font-black uppercase tracking-wide text-slate-500">ชื่อ</span><input required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none" /></label>
              <label className="block"><span className="text-xs font-black uppercase tracking-wide text-slate-500">ช่องทางติดต่อ</span><input required placeholder="เบอร์โทร / อีเมล / LINE ID" className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none" /></label>
              <label className="block">
                <span className="text-xs font-black uppercase tracking-wide text-slate-500">เรื่องที่ต้องการสอบถาม / Inquiry Type</span>
                <select name="inquiryType" defaultValue="" required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 text-slate-700 focus:border-blue-500 focus:outline-none">
                  <option value="" disabled>เลือกหัวข้อที่ใกล้เคียงกับคำถามของคุณมากที่สุด</option>
                  {inquiryTypes.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))}
                </select>
                <p className="mt-1.5 text-xs font-medium text-slate-500">หัวข้อนี้ช่วยให้ทีมงานจัดลำดับและส่งต่อคำถามได้เร็วขึ้น</p>
              </label>
              <label className="block"><span className="text-xs font-black uppercase tracking-wide text-slate-500">รายละเอียด</span><textarea rows={5} className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none" /></label>
              <button type="button" className="rounded-2xl bg-[#f59e0b] px-6 py-4 font-black text-white shadow-lg shadow-amber-200/60">ส่งข้อความถึงทีมงาน</button>
              <p className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm font-semibold leading-relaxed text-orange-900">
                BKK AIR ให้บริการเฉพาะการจัดเตรียมเอกสารสนับสนุนวีซ่าเท่านั้น การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูต
              </p>
              <Link href="/order" className="text-center text-sm font-bold text-[#003d82]">หรือส่งคำขอเอกสารที่ /order</Link>
            </div>
          </form>
        </div>

        <div className="mx-auto mt-12 max-w-7xl rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6 sm:p-8">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">หลังส่งฟอร์มแล้วจะเกิดอะไรขึ้น?</h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-slate-100 bg-white p-4 text-sm font-semibold text-slate-700">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-700">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-3xl border border-slate-100 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">คำถามด่วนที่พบบ่อย</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {miniFaq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4">
                <p className="text-sm font-black text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
