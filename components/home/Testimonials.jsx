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
    <section id="testimonials" className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-[#EEF6FF] to-[#FFF7F0] py-16 lg:py-24 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-20 h-[460px] w-[460px] rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[540px] w-[540px] rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-32 w-32 bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.5)_2px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        <div className="absolute right-20 top-32 h-16 w-16 rounded-3xl border-[6px] border-orange-200/60 opacity-60 rotate-12" />
        <div className="absolute left-1/4 top-10 h-8 w-8 rounded-full bg-purple-200 opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/70 bg-white/85 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <MessageSquareHeart className="h-4 w-4 text-yellow-500" aria-hidden="true" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">เสียงจากลูกค้า</span>
          </div>
          
          <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-5xl">
            ลูกค้าที่ใช้บริการ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">พูดว่าอะไร</span>
          </h2>
          
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
            ประสบการณ์จริงจากผู้ที่ใช้บริการ BKK AIR ในการเตรียมเอกสารยื่นวีซ่า รีวิว BKK AIR และรีวิวเอกสารยื่นวีซ่าเหล่านี้ไม่ใช่การรับประกันผลวีซ่า
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-3xl bg-white p-7 transition-all duration-300 border border-blue-100/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:hover:-translate-y-1 ${testimonial.theme.shadow} ${testimonial.theme.border}`}
            >
              <Quote className={`absolute -right-4 -top-4 h-32 w-32 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 ${testimonial.theme.quoteMarker}`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <CheckCircle2 className={`h-6 w-6 ${testimonial.theme.textAccent}`} aria-hidden="true" />
                </div>
                
                <p className="mb-8 text-[1.05rem] leading-relaxed text-slate-600 font-medium relative flex-grow">
                  <span className={`absolute -left-4 -top-3 text-4xl font-serif leading-none ${testimonial.theme.textAccent} opacity-30`}>&ldquo;</span>
                  {testimonial.text}
                  <span className={`absolute ml-1 text-4xl font-serif leading-none ${testimonial.theme.textAccent} opacity-30`}>&rdquo;</span>
                </p>
                
                <div className="mt-auto flex items-center gap-4 pt-5 border-t border-slate-100/80">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-black text-xl border-2 border-white ring-2 ${testimonial.theme.bgLight} ${testimonial.theme.textAccent} ${testimonial.theme.ring}`}>
                    {testimonial.initials}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">{testimonial.name}</h3>
                    <p className={`text-sm font-bold mt-1 tracking-wide ${testimonial.theme.textAccent}`}>
                      {testimonial.type}
                    </p>
                  </div>
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
