import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Clock, Facebook } from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "ติดต่อเรา | BKK AIR",
  description: "ติดต่อทีมงาน BKK AIR ผ่าน LINE OA, Email, Facebook หรือส่งคำถามเกี่ยวกับเอกสารยื่นวีซ่าและแพ็กเกจบริการ",
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-[#003d82]">Contact</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">ติดต่อเรา</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              สอบถามเรื่องแพ็กเกจ เอกสารยื่นวีซ่า หรือสถานะคำขอ ทีมงานจะติดต่อกลับตามช่องทางที่สะดวกที่สุด
            </p>
            <div className="mt-8 grid gap-4">
              <a href="https://line.me/R/ti/p/@823lateh" className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 md:p-6 font-bold text-slate-700"><MessageCircle className="h-5 w-5 text-[#00B900]" /> LINE OA: @823lateh</a>
              <a href="mailto:info@bkkair.com" className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 md:p-6 font-bold text-slate-700"><Mail className="h-5 w-5 text-[#003d82]" /> info@bkkair.com</a>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 md:p-6 font-bold text-slate-700"><Facebook className="h-5 w-5 text-blue-600" /> Facebook: BKK AIR</div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 md:p-6 font-bold text-slate-700"><Clock className="h-5 w-5 text-[#f59e0b]" /> เวลาทำการ: จันทร์-เสาร์ 09:00-18:00</div>
            </div>
          </div>

          <form className="rounded-[2rem] bg-[#F8FAFC] p-6 shadow-lg shadow-slate-200/50 sm:p-8">
            {/* Frontend-safe placeholder: no backend endpoint is connected for this contact form yet. */}
            <div className="grid gap-5">
              <label className="block"><span className="text-xs font-black uppercase tracking-wide text-slate-500">ชื่อ</span><input required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none" /></label>
              <label className="block"><span className="text-xs font-black uppercase tracking-wide text-slate-500">ช่องทางติดต่อ</span><input required placeholder="เบอร์โทร / อีเมล / LINE ID" className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none" /></label>
              <label className="block"><span className="text-xs font-black uppercase tracking-wide text-slate-500">เรื่องที่ต้องการสอบถาม</span><input required className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none" /></label>
              <label className="block"><span className="text-xs font-black uppercase tracking-wide text-slate-500">รายละเอียด</span><textarea rows={5} className="mt-2 block w-full rounded-xl border-2 border-slate-100 bg-white px-4 py-3.5 focus:border-blue-500 focus:outline-none" /></label>
              <button type="button" className="rounded-2xl bg-[#f59e0b] px-6 py-4 font-black text-white shadow-lg shadow-amber-200/60">ส่งข้อความถึงทีมงาน</button>
              <Link href="/order" className="text-center text-sm font-bold text-[#003d82]">หรือส่งคำขอเอกสารที่ /order</Link>
            </div>
          </form>
        </div>
      </section>
    </MarketingShell>
  );
}
