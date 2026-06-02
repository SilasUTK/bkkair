import { MessageSquareHeart, ShieldCheck } from "lucide-react";
import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[#F8FAFF] py-20 md:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-20 h-[380px] w-[380px] rounded-full bg-blue-100/50 blur-[80px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-indigo-100/40 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <MessageSquareHeart className="h-4 w-4 text-yellow-500" aria-hidden="true" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">Customer Feedback Transparency</span>
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            ลูกค้าพูดถึงเรา
          </h2>
          
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
            รีวิวจากนักเดินทางจริงที่ใช้บริการ BKK AIR
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-orange-200 bg-white/90 px-6 py-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-base font-semibold leading-relaxed text-slate-700">
            [รอข้อมูลรีวิวจริงจากลูกค้า — ห้ามใช้รีวิวปลอมหรือตัวเลขที่ไม่เป็นความจริง]
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            ก่อนเผยแพร่รีวิวจริง ต้องยืนยันแหล่งที่มาจาก LINE OA หรืออีเมล และไม่ใช้ชื่อ รูปภาพ หรือคะแนนที่แต่งขึ้น
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-sm font-semibold text-slate-700">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> No fake ratings, no fabricated endorsements, no visa outcome claims</span>
        </div>
      </div>
    </section>
  );
}
