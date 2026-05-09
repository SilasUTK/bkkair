import { Star, Quote, MessageSquareHeart } from "lucide-react";
import React from "react";

// Theme สีให้แต่ละรีวิวเพื่อให้ดูเป็น Colorful Flat Design
const testimonials = [
  {
    name: "คุณวิภาดา ส.",
    text: "ทำวีซ่าเชงเก้นกับที่นี่ ประทับใจมากค่ะ ทีมงานแนะนำดีมาก ช่วยตรวจเอกสารละเอียดยิบ ได้วีซ่าไวตามกำหนดเป๊ะเลย",
    type: "วีซ่าท่องเที่ยว (ฝรั่งเศส)",
    initials: "วส",
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
    name: "คุณธนพล ว.",
    text: "ผมไม่มีเวลาจัดการเอกสารเลย ซื้อแพ็กเกจ Premium ไป คุ้มค่ามากครับ มีคนดูแลตั้งแต่ร่างจดหมายจนถึงวันไปสแกนนิ้ว",
    type: "วีซ่าธุรกิจ (อเมริกา)",
    initials: "ธว",
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
    name: "คุณณัฐนันท์ ค.",
    text: "แอดมินตอบคำถามเร็วมาก แก้ปัญหาเฉพาะหน้าเก่งมากค่ะ ใครหาเอเจนซี่ทำวีซ่าที่ไว้ใจได้ แนะนำที่นี่เลยค่ะ ไม่ผิดหวัง",
    type: "วีซ่านักเรียน (อังกฤษ)",
    initials: "ณค",
    theme: {
      border: "border-emerald-100 group-hover:border-emerald-300",
      shadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
      bgLight: "bg-emerald-50",
      textAccent: "text-emerald-600",
      ring: "ring-emerald-100",
      quoteMarker: "text-emerald-500/10"
    }
  }
];

function RatingStars({ className }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className={className} aria-hidden="true" strokeWidth={1.5} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 lg:py-32 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* ================= Flat Design 2.0 Background Elements ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-yellow-100/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-3xl" />
        
        {/* Dotted Grid Pattern */}
        <div className="absolute left-10 bottom-20 h-32 w-32 opacity-30" style={{ backgroundImage: 'radial-gradient(#94A3B8 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute right-20 top-32 h-16 w-16 rounded-3xl border-[6px] border-orange-200/60 opacity-60 rotate-12" />
        <div className="absolute left-1/4 top-10 h-8 w-8 rounded-full bg-purple-200 opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ================= Header Section ================= */}
        <div className="mx-auto mb-12 sm:mb-16 text-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white border border-slate-200/60 px-4 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
            <MessageSquareHeart className="h-4 w-4 text-yellow-500" aria-hidden="true" />
            <span className="uppercase tracking-widest text-slate-500 text-xs">Testimonials</span>
          </div>
          
          <h2 className="text-4xl font-extrabold leading-[1.2] text-slate-900 sm:text-5xl tracking-tight">
            เสียงตอบรับจาก <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ลูกค้าของเรา</span>
          </h2>
          
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="flex items-center gap-2.5 rounded-2xl bg-white px-5 py-2.5 shadow-md shadow-slate-200/50 border border-slate-100">
              <span className="text-2xl font-black text-slate-900">4.9</span>
              <RatingStars className="h-5 w-5 fill-[#FACC15] text-[#FACC15]" />
            </div>
            <p className="text-lg font-medium text-slate-600">จากผู้ใช้บริการจริงกว่าหมื่นคน</p>
          </div>
        </div>

        {/* ================= Testimonial Cards ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-[2rem] bg-white p-7 sm:p-8 transition-all duration-300 border-2 border-slate-100 shadow-lg shadow-slate-200/40 hover:-translate-y-2 ${testimonial.theme.shadow} ${testimonial.theme.border}`}
            >
              {/* Background Watermark Icon (Dynamic Color based on theme) */}
              <Quote className={`absolute -right-4 -top-4 h-32 w-32 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 ${testimonial.theme.quoteMarker}`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <RatingStars className="h-5 w-5 fill-[#FACC15] text-[#FACC15]" />
                </div>
                
                <p className="mb-8 text-[1.05rem] leading-relaxed text-slate-600 font-medium relative flex-grow">
                  <span className={`absolute -left-4 -top-3 text-4xl font-serif leading-none ${testimonial.theme.textAccent} opacity-30`}>&ldquo;</span>
                  {testimonial.text}
                  <span className={`absolute ml-1 text-4xl font-serif leading-none ${testimonial.theme.textAccent} opacity-30`}>&rdquo;</span>
                </p>
                
                <div className="mt-auto flex items-center gap-4 pt-5 border-t border-slate-100/80">
                  {/* Colorful Initial Avatar */}
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
      </div>
    </section>
  );
}