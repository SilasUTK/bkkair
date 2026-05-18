import { CheckCircle2, Quote, MessageSquareHeart } from "lucide-react";
import React from "react";

const testimonials = [
  {
    name: "คุณ P., กรุงเทพฯ",
    text: "ตอนแรกกังวลมากว่าเอกสารจะผ่านไหม แต่ทีม BKK AIR อธิบายทุกอย่างชัดเจน ได้ PDF ที่ดูเป็นมืออาชีพมาก ยื่นวีซ่า Schengen ไปก็ผ่านนะ แต่ก็รู้ว่าขึ้นอยู่กับสถานทูตด้วย",
    type: "วีซ่า Schengen (ฝรั่งเศส)",
    initials: "P",
    theme: {
      border: "border-blue-100 group-hover:border-blue-300",
      shadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]",
      bgLight: "bg-blue-50",
      textAccent: "text-[#2563EB]",
      ring: "ring-blue-100",
      quoteMarker: "text-blue-500/10"
    }
  },
  {
    name: "คุณ N., เชียงใหม่",
    text: "สั่งตอนเย็น เช้าวันรุ่งขึ้นได้ไฟล์เลย บริการเร็วมาก และทีมงานตอบคำถามได้ดี ใบจองตั๋วดูสมจริง ไม่มีปัญหาตอนยื่น",
    type: "วีซ่า UK",
    initials: "N",
    theme: {
      border: "border-orange-100 group-hover:border-orange-300",
      shadow: "hover:shadow-[0_20px_40px_-15px_rgba(255,87,34,0.15)]",
      bgLight: "bg-orange-50",
      textAccent: "text-[#FF5722]",
      ring: "ring-orange-100",
      quoteMarker: "text-orange-500/10"
    }
  },
  {
    name: "คุณ K., ขอนแก่น",
    text: "ไม่แน่ใจว่าต้องใช้เอกสารอะไรบ้างสำหรับวีซ่าญี่ปุ่น ทีมงาน BKK AIR แนะนำได้ถูกต้อง จัดชุดเอกสารมาครบ สะดวกมากสำหรับคนที่ไม่คุ้นเรื่องวีซ่า",
    type: "วีซ่าญี่ปุ่น",
    initials: "K",
    theme: {
      border: "border-emerald-100 group-hover:border-emerald-300",
      shadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
      bgLight: "bg-emerald-50",
      textAccent: "text-emerald-600",
      ring: "ring-emerald-100",
      quoteMarker: "text-emerald-500/10"
    }
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[#F8FAFF] py-16 lg:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-20 h-[380px] w-[380px] rounded-full bg-blue-100/50 blur-[80px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-indigo-100/40 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <MessageSquareHeart className="h-4 w-4 text-yellow-500" aria-hidden="true" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">เสียงจากลูกค้า</span>
          </div>
          
          <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-[2.75rem]">
            ลูกค้าที่ใช้บริการ <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">พูดว่าอะไร</span>
          </h2>
          
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
            ประสบการณ์จริงจากผู้ที่ใช้บริการ BKK AIR ในการเตรียมเอกสารยื่นวีซ่า รีวิว BKK AIR และรีวิวเอกสารยื่นวีซ่าเหล่านี้ไม่ใช่การรับประกันผลวีซ่า
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-3xl bg-white p-6 transition-all duration-300 border shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.09)] ${testimonial.theme.border}`}
            >
              {/* Star rating */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>

              <p className="mb-6 text-[0.95rem] leading-relaxed text-slate-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black text-lg border border-white ring-2 ${testimonial.theme.bgLight} ${testimonial.theme.textAccent} ${testimonial.theme.ring}`}>
                  {testimonial.initials}
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">{testimonial.name}</h3>
                  <p className={`text-xs font-semibold mt-0.5 ${testimonial.theme.textAccent}`}>
                    {testimonial.type}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-orange-200 bg-white/90 px-6 py-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-sm font-semibold leading-relaxed text-slate-600">
            รีวิวเหล่านี้เป็นประสบการณ์ส่วนตัวของลูกค้า ผลการยื่นวีซ่าอาจแตกต่างกันในแต่ละกรณี BKK AIR ไม่รับประกันการอนุมัติวีซ่า
          </p>
        </div>
      </div>
    </section>
  );
}
