import { MessageSquareHeart, ShieldCheck, FileCheck2, Mail, MessageCircle } from "lucide-react";
import React from "react";

const feedbackSources = [
  {
    icon: MessageCircle,
    title: "Submitted via LINE OA",
    description: "ข้อเสนอแนะที่ลูกค้าส่งหลังได้รับเอกสารและปิดงานแล้ว",
  },
  {
    icon: Mail,
    title: "Feedback via Email",
    description: "ข้อคิดเห็นจากลูกค้าที่ตอบกลับอีเมลหลังการส่งมอบเอกสาร",
  },
  {
    icon: FileCheck2,
    title: "After Service Completion",
    description: "เผยแพร่เฉพาะ feedback ที่มีแหล่งที่มาชัดเจนและตรวจสอบได้",
  },
];

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
            ความคิดเห็นลูกค้าและแหล่งที่มา
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">เผยแพร่แบบโปร่งใสและตรวจสอบได้</span>
          </h2>
          
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
            BKK AIR เผยแพร่เฉพาะความคิดเห็นที่มีแหล่งที่มาชัดเจนหลังให้บริการเสร็จสิ้น หากยังไม่มีข้อมูลที่ยืนยันได้ เราจะไม่แสดงรีวิวเชิงอ้างอิง
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {feedbackSources.map((source) => {
            const Icon = source.icon;
            return (
              <article
                key={source.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.09)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{source.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{source.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-orange-200 bg-white/90 px-6 py-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-sm font-semibold leading-relaxed text-slate-600">
            ความคิดเห็นเหล่านี้เป็นประสบการณ์ส่วนบุคคลของลูกค้า และไม่รับประกันผลการอนุมัติวีซ่า
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            BKK AIR จะเผยแพร่รีวิวต่อสาธารณะเฉพาะเมื่อสามารถระบุแหล่งที่มาและช่วงเวลาการเก็บข้อมูลได้ชัดเจน
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-sm font-semibold text-slate-700">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> No fake ratings, no fabricated endorsements, no visa guarantee claims</span>
        </div>
      </div>
    </section>
  );
}
